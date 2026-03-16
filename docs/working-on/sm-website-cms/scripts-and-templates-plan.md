# Scripts & Templates Plan

**Authority:** This document supports [`sm-website-cms-plan.md`](sm-website-cms-plan.md) (SSOT). It defines reusable scripts and templates that accelerate execution of Phases 1–4. All scripts and templates are derived from verified codebase patterns — no assumptions.

---

## Pattern Analysis Summary

### Evidence Source
Every pattern below was verified by reading all 18 component files and 17 page files in the codebase. Line numbers, hook usage, import lists, and data structures were cataloged from actual code.

### Key Findings

**Zero framer-motion usage across the entire codebase.** All animations use:
- CSS `@keyframes` with inline `<style>` tags (about, contact, our-work, strategy-call, ai-system-integration)
- `IntersectionObserver` with `useState(false)` → `visible` for scroll-reveal (FAQ, HowItWorks, Pricing, Testimonials, about, contact, our-work)
- CSS `animation` property with `marquee` keyframes (TrustedBy, LogoBanner)
- Canvas API (ParticleBackground)
- OGL/WebGL (LightRays)

**No framer-motion dependency exists in `package.json`.** The `framer-motion` package is installed but not imported anywhere. This means the v2 components do not need framer-motion wrappers.

**Interactivity patterns found (5 total):**

| Pattern | Components Using It | Hooks |
|---|---|---|
| **Scroll-reveal** — IntersectionObserver sets `visible` to true | FAQ, HowItWorks, Pricing, Testimonials, about, contact, our-work, ai-system-integration | `useRef`, `useState(false)`, `useEffect` |
| **Accordion toggle** — click sets `openIndex` | FAQ | `useState<number \| null>(null)` |
| **Tab switching** — click sets `active` index | AIAdvantage | `useState(0)` |
| **Form state** — tracks submission | ContactSection, contact page | `useState(false)` for `submitted` |
| **Dropdown/mobile menu** — toggle open/close | Navbar | `useState(false)` for `open`, `mobileOpen` |

**Page architecture patterns found (4 total):**

| Pattern | Pages Using It | Characteristics |
|---|---|---|
| **Static server page with metadata export** | home, google-ads, meta-ads, tiktok-ads, digital-advertising, ai-receptionist, ai-lead-nurturing, cookie-policy, privacy-policy, terms-of-service | No `"use client"`, exports `metadata` object, hardcoded data arrays, no hooks |
| **Client page with IntersectionObserver** | about, contact, our-work, strategy-call, ai-system-integration | Has `"use client"`, no metadata export, uses `useRef` + `useState` + `useEffect` for scroll-reveal + floating orbs |
| **Redirect page** | pricing, results | No `"use client"`, calls `redirect('/')` |
| **Layout** | root layout | No `"use client"`, renders Navbar + children + Footer, exports `metadata` |

**Service page sub-patterns (3 variants):**

| Variant | Pages | Data arrays |
|---|---|---|
| **Standard 4-section** | google-ads, tiktok-ads, digital-advertising | `services[]` + `technical[]` + `process[]` — identical key structure |
| **Case study variant** | meta-ads | `caseStudies[]` + `capabilities[]` — different keys |
| **Feature variant** | ai-lead-nurturing | `features[]` + `process[]` + `sequence[]` |
| **Client-side with observer** | ai-system-integration | `processes[]` + `capabilities[]` — has `"use client"` + IntersectionObserver |
| **Extended standard** | ai-receptionist | same as standard + extra inline badge array |

**Legal page pattern (1 variant, 3 pages):**

All 3 legal pages share identical structure:
- Server component, no `"use client"`
- Exports `metadata` object
- Data arrays: `sections[]` (keys: `heading`, `items[]` with `label`, `body`) and `standalone[]` (keys: `heading`, `body`)
- Identical JSX: ambient glow div → header section → intro section → bulleted sections → standalone sections
- Only difference: the content in the arrays

---

## Scripts to Create

### Script 1: `scripts/001-create-tables.sql`
**Phase it accelerates:** Phase 1 (items 1–12)
**What it does:** Single SQL file that creates all 11 tables, RLS policies, and indexes in one execution.
**Why it's scriptable:** All table DDL is fully defined in the SSOT plan. RLS follows two patterns: `status = 'published'` for pages, `is_active = true` for other tables. Indexes follow query patterns documented in the route-to-table mapping.
**Execution method:** `execute_sql` via Supabase MCP against project `knvgjsjzmzzwaiumfego`

### Script 2: `scripts/002-seed-site-config.sql`
**Phase it accelerates:** Phase 2 (item 13)
**What it does:** INSERT for the singleton `site_config` row.
**Why it's scriptable:** Values are fixed (brand name, contact info, GTM/GA IDs from env).

### Script 3: `scripts/003-seed-pages-and-seo.sql`
**Phase it accelerates:** Phase 2 (items 14–15)
**What it does:** INSERT for all 15 `pages` rows + 15 `page_seo` rows including `structured_data` JSONB.
**Why it's scriptable:** All page slugs, titles, metadata, and JSON-LD templates are fully defined in the SSOT plan. No ambiguity.

### Script 4: `scripts/004-seed-shared-content.sql`
**Phase it accelerates:** Phase 2 (items 23–29)
**What it does:** INSERT for `team_members` (3 rows), `testimonials` (3 rows), `case_studies` (3 rows), `faqs` (6 rows), `services` (7 rows), `client_logos` (11 rows), `navigation` (~20 rows).
**Why it's scriptable:** All content is cataloged from exact codebase reads — names, quotes, stats, service descriptions, logo alt text.

### Script 5: `scripts/005-seed-page-sections.sql`
**Phase it accelerates:** Phase 2 (items 16–22)
**What it does:** INSERT for all `page_sections` rows — every section of every page.
**Why it's the largest script:** Estimated 60–80 rows. Each section's `content_data` JSONB must be built from the hardcoded arrays in the old components/pages.
**Why it's scriptable:** Every data array has been cataloged with exact keys and line numbers. The transformation from JS object → JSONB INSERT is mechanical.

---

## Templates to Create

### Template 1: Server/Client Component Split

**Phase it accelerates:** Phase 3 (items 34–48)
**Pattern identified from:** 15 of 17 components have `"use client"` and need splitting. The split follows one pattern.

**Server component template (`ComponentName.tsx`):**
```tsx
import { ComponentNameClient } from './ComponentName.client';
// Type imports from @/types/database

interface ComponentNameProps {
  // typed props matching database table structure
}

export function ComponentName({ ...props }: ComponentNameProps) {
  return <ComponentNameClient {...props} />;
}
```

**Client component template (`ComponentName.client.tsx`):**
```tsx
'use client';

// Original imports (react hooks, next/link, next/image, etc.)
// NO data arrays — those come from props

interface ComponentNameClientProps {
  // same typed props
}

export function ComponentNameClient({ ...props }: ComponentNameClientProps) {
  // Original hooks (useState, useRef, useEffect)
  // Original JSX — but referencing props instead of hardcoded arrays
}
```

**Applicability by component:**

| Component | Split needed | Server does what | Client keeps what |
|---|---|---|---|
| Hero | YES | Passes all content props | useRef, useEffect (scroll offset), renders sub-components |
| TrustedBy | YES | Passes `heading`, `logos[]` | CSS marquee animation (no hooks, just CSS) |
| ServiceGrid | NO — already server (no `"use client"`) | Receives props directly | N/A |
| HowItWorks | YES | Passes `heading`, `subheading`, `steps[]` | useRef, useState, useEffect (IntersectionObserver + orb animation) |
| CaseStudies | YES | Passes `heading`, `subheading`, `badge`, `cases[]` | None (no hooks — but has `"use client"` needlessly, can be server-only) |
| Testimonials | YES | Passes `heading`, `subheading`, `badge`, `testimonials[]` | useRef, useState, useEffect (IntersectionObserver) |
| MeetTheTeam | YES | Passes `heading`, `subheading`, `badge`, `teamMembers[]` | None (no state hooks — but has `"use client"`, can be server-only) |
| ContactSection | YES | Passes content props + services list | useState (submitted), form onSubmit, renders ServicePicker |
| FAQ | YES | Passes `heading`, `subheading`, `badge`, `faqs[]` | useRef, useState×2 (visible, openIndex), useEffect (IntersectionObserver) |
| Pricing | YES | Passes `heading`, `subheading`, `badge`, `plans[]` | useRef, useState, useEffect (IntersectionObserver) |
| AIAdvantage | YES | Passes `heading`, `subheading`, `badge`, `tabs[]` | useState (active tab) |
| LogoBanner | YES | Passes `subheading`, `logos[]` | CSS marquee (no hooks, just CSS) |
| Navbar | YES | Passes nav links + brand info | useState×3 (open, mobileOpen), mouse handlers |
| Footer | NO SPLIT | Receives props, renders links | onMouseEnter/Leave can stay or be removed (cosmetic) |
| ServicePicker | YES | Passes `label`, `services[]` | useState (selected) |
| LightRays | COPY AS-IS | N/A — client-only WebGL | All (OGL dependency, refs, effects) |
| ParticleBackground | COPY AS-IS | N/A — client-only canvas | All (canvas refs, effects) |
| AnimatedTimeline | COPY AS-IS | N/A — already takes props | All (refs, observer) |

**Refinement from pattern analysis:**
- `CaseStudies` and `MeetTheTeam` have `"use client"` but **zero state hooks** — they can become **server-only** in v2 (no `.client.tsx` needed)
- `TrustedBy` and `LogoBanner` have `"use client"` but only use CSS animations (no hooks) — they can become **server-only** in v2
- `ServiceGrid` is already a server component — just needs props added
- This reduces the split count from 15 to **9 components that actually need a .client.tsx file**

### Template 2: Server Page with DB Fetch

**Phase it accelerates:** Phase 4 (items 51–60)
**Pattern identified from:** 10 of 15 active pages are already server components. The 5 client pages need refactoring.

**Standard page template:**
```tsx
import { Metadata } from 'next';
import { getPage, getPageSections } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('/slug');
  return {
    title: page.seo.meta_title,
    description: page.seo.meta_description,
    openGraph: {
      title: page.seo.og_title ?? page.seo.meta_title,
      description: page.seo.og_description ?? page.seo.meta_description,
      images: page.seo.og_image ? [page.seo.og_image] : [],
    },
  };
}

export default async function PageName() {
  const page = await getPage('/slug');
  const sections = await getPageSections(page.id);

  return (
    <main>
      <JsonLd data={page.seo.structured_data} />
      {/* Render sections using components-v2 */}
    </main>
  );
}
```

**Applicability:**

| Page Pattern | Pages | Template Variations |
|---|---|---|
| **Simple server** (home, legal×3) | 4 pages | Standard template — just different components rendered |
| **Standard service** (google-ads, tiktok-ads, digital-advertising) | 3 pages | Standard template — data arrays (`services[]`, `technical[]`, `process[]`) come from `page_sections.content_data` instead of hardcode. Identical JSX structure across all 3 |
| **Case study service** (meta-ads) | 1 page | Standard template + fetch `case_studies` |
| **Feature service** (ai-lead-nurturing) | 1 page | Standard template — `features[]`, `process[]`, `sequence[]` from `content_data` |
| **Extended service** (ai-receptionist) | 1 page | Standard template — same as standard + badge array in content_data |
| **Client→server refactor** (about, contact, our-work, strategy-call, ai-system-integration) | 5 pages | Standard template but the IntersectionObserver + orb animation moves into a client wrapper component |
| **Redirect** (pricing, results) | 2 pages | Copy unchanged |

### Template 3: Legal Page (most reusable)

**Phase it accelerates:** Phase 4 (item 58)
**Pattern:** All 3 legal pages have **identical JSX structure** — only the data differs. A single shared component can render any legal page.

```tsx
// components-v2/LegalPage.tsx (server component)
interface LegalPageProps {
  badge: string;
  heading: string;
  subtext: string;
  intro: string;
  sections: { heading: string; items: { label: string; body: string }[] }[];
  standalone: { heading: string; body: string }[];
}

export function LegalPage({ badge, heading, subtext, intro, sections, standalone }: LegalPageProps) {
  // Identical JSX from cookie-policy/privacy-policy/terms-of-service
}
```

Then each legal page becomes ~15 lines: fetch from DB, render `<LegalPage>`.

### Template 4: Standard Service Page (3 pages identical)

**Phase it accelerates:** Phase 4 (item 57)
**Pattern:** `google-ads`, `tiktok-ads`, `digital-advertising` have **identical JSX** and **identical data array key structures** (`services[]`, `technical[]`, `process[]`). Only content differs.

A single shared component can render any of these 3 pages. Each page becomes ~15 lines: fetch from DB, render `<StandardServicePage>`.

---

## Verify-Then-Bulk Rule

**Every bulk operation must be preceded by a single verified proof.** This is a hard constraint from the SSOT plan.

| Phase | Single-item proof | Then bulk |
|---|---|---|
| Phase 1 (tables) | Create `pages` table only → confirm via `list_tables` | Run remaining 10 tables + RLS + indexes |
| Phase 2 (seed config) | Insert `site_config` row → SELECT it back to confirm | Proceed to pages seed |
| Phase 2 (seed pages) | Insert 1 page + 1 page_seo row (e.g. `/about`) → SELECT to confirm slug, metadata, JSON-LD | Run remaining 14 pages |
| Phase 2 (seed shared) | Insert 1 team member → SELECT to confirm | Run remaining shared content |
| Phase 2 (seed sections) | Insert sections for 1 page (e.g. about — 4 sections) → SELECT to confirm order + content_data | Run remaining page sections |
| Phase 3 (components) | Build 1 server/client split (e.g. FAQ — small, has accordion) → `npx tsc --noEmit` to confirm compiles | Apply template to remaining 8 splits |
| Phase 4 (pages) | Build 1 page (e.g. `/about` — has data, sections, metadata) → `npm run dev`, load in browser, confirm render | Apply template to remaining pages |
| Phase 4 (legal) | Build cookie-policy using LegalPage component → confirm render | Apply to privacy-policy + terms-of-service |
| Phase 4 (service) | Build google-ads using StandardServicePage component → confirm render | Apply to tiktok-ads + digital-advertising |
| Phase 5 (swap) | Rename only `components/` → `components-old/` + `components-v2/` → `components/` first → `npx tsc --noEmit` | Then rename `app/` directories |

## Execution Order

| Step | Script/Template | Phase | Items | Proof first |
|---|---|---|---|---|
| 1 | `001-create-tables.sql` | Phase 1 | 1–12 | Create `pages` only → verify → run rest |
| 2 | `002-seed-site-config.sql` | Phase 2 | 13 | Insert → SELECT back |
| 3 | `003-seed-pages-and-seo.sql` | Phase 2 | 14–15 | 1 page → SELECT back → run rest |
| 4 | `004-seed-shared-content.sql` | Phase 2 | 23–29 | 1 team member → SELECT back → run rest |
| 5 | `005-seed-page-sections.sql` | Phase 2 | 16–22 | 1 page's sections → SELECT back → run rest |
| 6 | Foundation files (supabase, content, types) | Phase 3 | 30–33 | 3 files to create → tsc check |
| 7 | Apply server/client split template ×9 | Phase 3 | 34–48 | FAQ split → tsc → apply rest |
| 8 | Apply page template — legal ×3 | Phase 4 | 58 | cookie-policy → render → apply rest |
| 9 | Apply page template — standard service ×3 | Phase 4 | 57 (partial) | google-ads → render → apply rest |
| 10 | Apply page template — remaining pages ×9 | Phase 4 | 51–57, 59–60 | about page → render → apply rest |
| 11 | SEO + sitemap + llms + robots | Phase 4 | 61–66 | 4 files |
| 12 | Swap + verify | Phase 5 | 67–82 | Components swap first → tsc → then app swap |

---

## What This Saves

| Without scripts/templates | With scripts/templates |
|---|---|
| Phase 1: 12 individual MCP calls | Phase 1: **1 MCP call** |
| Phase 2: 17 individual seed operations | Phase 2: **4 MCP calls** |
| Phase 3: 18 components built from scratch | Phase 3: **9 splits from template** + 4 server-only + 3 copies + 2 new = systematic, not creative |
| Phase 4: 15 pages built from scratch | Phase 4: **3 legal pages from 1 shared component**, **3 service pages from 1 shared component**, remaining 9 from page template |

---

*Supports: sm-website-cms-plan.md (SSOT)*
*Updated: 2026-03-14 — jarvis*
