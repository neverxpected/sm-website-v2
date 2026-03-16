# Phase 04 — Parallel Build: Pages + SEO + AI Visibility

**Authority:** This phase inherits from [`sm-website-cms-plan.md`](../sm-website-cms-plan.md) (SSOT). Scope, decisions, evidence, and constraints are defined there. This file contains only the execution detail for Phase 4.

**Prerequisite:** Phase 3 (Parallel Build: Components) must be complete — all v2 components built with server/client split.

---

## Phase Summary

Build all v2 page files in `app-v2/` that use `components-v2/` and fetch content from Supabase. Also create the dynamic sitemap, rewrite llms.txt, and update robots.ts. Old `app/` stays untouched as reference.

**What this phase does:**
- Creates `app-v2/` with all page routes
- Every page is a server component that fetches from DB
- Every page uses `generateMetadata` from `page_seo`
- Every page renders per-page JSON-LD via `<JsonLd>`
- Layout fetches site_config + navigation, injects sitewide JSON-LD
- Sitemap generated dynamically from `pages` table
- llms.txt rewritten to v1.1.1 spec
- robots.ts updated with AI crawlers

**What this phase does NOT do:**
- Does not touch `app/` or `components/` (old files stay as reference)
- Does not swap anything into production (Phase 5)

---

## File Structure

```
app-v2/
├── layout.tsx                          ← Server: site_config, nav, sitewide JSON-LD
├── page.tsx                            ← Server: home page
├── globals.css                         ← Copied from app/
├── sitemap.ts                          ← Dynamic from pages table
├── robots.ts                           ← Updated with AI crawlers
├── about/
│   └── page.tsx
├── contact/
│   ├── layout.tsx
│   └── page.tsx
├── our-work/
│   └── page.tsx
├── pricing/
│   └── page.tsx                        ← Redirect (unchanged)
├── results/
│   └── page.tsx                        ← Redirect (unchanged)
├── strategy-call/
│   └── page.tsx
├── services/
│   ├── digital-advertising/
│   │   └── page.tsx
│   ├── google-ads/
│   │   └── page.tsx
│   ├── meta-ads/
│   │   └── page.tsx
│   ├── tiktok-ads/
│   │   └── page.tsx
│   ├── ai-receptionist/
│   │   └── page.tsx
│   ├── ai-system-integration/
│   │   └── page.tsx
│   └── ai-lead-nurturing/
│       └── page.tsx
├── cookie-policy/
│   └── page.tsx
├── privacy-policy/
│   └── page.tsx
└── terms-of-service/
    └── page.tsx
```

---

## Page Architecture Pattern

Every page follows the same pattern:

```typescript
// app-v2/[route]/page.tsx — SERVER COMPONENT (no "use client")

import { getPage, getPageSections } from '@/lib/content';
import { JsonLd } from '@/components-v2/JsonLd';
import { SomeComponent } from '@/components-v2/SomeComponent';

export async function generateMetadata() {
  const page = await getPage('/route-slug');
  return {
    title: page.seo.meta_title,
    description: page.seo.meta_description,
    openGraph: {
      title: page.seo.og_title,
      description: page.seo.og_description,
      images: page.seo.og_image ? [page.seo.og_image] : [],
    },
  };
}

export default async function RoutePage() {
  const page = await getPage('/route-slug');
  const sections = await getPageSections(page.id);

  return (
    <>
      <JsonLd data={page.seo.structured_data} />
      <SomeComponent data={sections.find(s => s.section_key === 'hero')} />
      {/* ... more sections */}
    </>
  );
}
```

---

## Checklist

### Pages (items 51–60)

- [ ] **51. Create `app-v2/layout.tsx`**
  - Fetch `site_config` and `navigation` (all groups)
  - Set root metadata: `title.default` = site_config.site_name, `title.template` = `%s | ${site_config.site_name}`
  - Set `description` from site_config
  - Render sitewide JSON-LD (`Organization` + `WebSite`) via `<JsonLd>`
  - Pass nav data + brand info as props to `<Navbar>` and `<Footer>`
  - Include `GoogleTagManager` and `GoogleAnalytics` from site_config IDs
  - Include fonts (Inter, Orbitron) — same as current layout

- [ ] **52. Create `app-v2/page.tsx` (home)**
  - Fetch: page (`/`), page_sections, client_logos, services, case_studies, testimonials, team_members, faqs
  - Render: JsonLd, Hero, TrustedBy, ServiceGrid, HowItWorks, CaseStudies, Testimonials, MeetTheTeam, ContactSection, FAQ, AIAdvantage
  - Home page has the most sections — reference old `components/Hero.tsx` (which renders all sub-components) for the order

- [ ] **53. Create `app-v2/about/page.tsx`**
  - Fetch: page (`/about`), page_sections
  - Render: JsonLd, hero section, AnimatedTimeline (milestones from content_data), stats section, CTA section
  - Reference old `app/about/page.tsx` for layout structure

- [ ] **54. Create `app-v2/contact/page.tsx` + `app-v2/contact/layout.tsx`**
  - Fetch: page (`/contact`), page_sections, services (for ServicePicker), site_config
  - Render: JsonLd, hero, ContactSection (with form + sidebar)
  - Contact layout if needed (reference old `app/contact/layout.tsx`)

- [ ] **55. Create `app-v2/our-work/page.tsx`**
  - Fetch: page (`/our-work`), case_studies
  - Render: JsonLd, header, case study cards with stats, CTA

- [ ] **56. Create `app-v2/strategy-call/page.tsx`**
  - Fetch: page (`/strategy-call`), page_sections, site_config (calendly_url)
  - Render: JsonLd, header, Calendly embed (URL from site_config)

- [ ] **57. Create all 6 service page files in `app-v2/services/`**
  Each service page:
  - Fetch: page (by slug), page_sections
  - For `/services/meta-ads`: also fetch case_studies
  - Render: JsonLd, hero, service sections from page_sections, CTA
  - Reference the old service page files for exact section structure

  Files:
  - `app-v2/services/digital-advertising/page.tsx`
  - `app-v2/services/google-ads/page.tsx`
  - `app-v2/services/meta-ads/page.tsx`
  - `app-v2/services/tiktok-ads/page.tsx`
  - `app-v2/services/ai-receptionist/page.tsx`
  - `app-v2/services/ai-system-integration/page.tsx`
  - `app-v2/services/ai-lead-nurturing/page.tsx`

- [ ] **58. Create all 3 legal page files in `app-v2/`**
  Each legal page:
  - Fetch: page (by slug), page_sections
  - Render: JsonLd, header section, body section (full legal text from `page_sections.body`)
  - Reference old legal pages for section structure

  Files:
  - `app-v2/cookie-policy/page.tsx`
  - `app-v2/privacy-policy/page.tsx`
  - `app-v2/terms-of-service/page.tsx`

- [ ] **59. Create redirect pages**
  - `app-v2/pricing/page.tsx` — redirect to `/` (same as current)
  - `app-v2/results/page.tsx` — redirect to `/` (same as current)

- [ ] **60. Copy static files**
  - `app-v2/globals.css` ← copy from `app/globals.css`

### SEO + Structured Data (items 61–63)

- [ ] **61. Verify every page v2 uses `generateMetadata` from `page_seo`**
  Each page must export `generateMetadata` that reads from the `page_seo` table:
  - `title` from `meta_title`
  - `description` from `meta_description`
  - `openGraph.title` from `og_title` (fallback to `meta_title`)
  - `openGraph.description` from `og_description` (fallback to `meta_description`)
  - `openGraph.images` from `og_image`

- [ ] **62. Verify every page v2 renders per-page JSON-LD**
  Each page renders `<JsonLd data={page.seo.structured_data} />` which outputs the per-route JSON-LD templates defined in the SSOT plan.

- [ ] **63. Verify layout v2 renders sitewide JSON-LD**
  Layout renders `Organization` + `WebSite` JSON-LD from `site_config` via `<JsonLd>`. This appears on every page.

### Sitemap + AI Visibility (items 64–66)

- [ ] **64. Create `app-v2/sitemap.ts`**
  - Fetch all `pages` where `status = 'published'`
  - Generate sitemap entries: URL from slug, `lastModified` from `updated_at`
  - Priority: 1.0 for `/`, 0.8 for `/services/*`, 0.6 for all others
  - Replaces the hardcoded 4-route sitemap

- [ ] **65. Rewrite `public/llms.txt`**
  Full v1.1.1 spec content as defined in SSOT plan section 6 (llms.txt Plan).

- [ ] **66. Create `app-v2/robots.ts`**
  All AI crawlers: GPTBot, Google-Extended, Claude-Web, Anthropic-AI, ChatGPT-User, PerplexityBot, Applebot-Extended.
  Sitemap reference: `https://switchmediaco.com/sitemap.xml`

---

## Exit Criteria

Phase 4 is complete when:
1. `app-v2/` contains all 15 active route pages + 2 redirect pages + layout + sitemap + robots
2. Every page is a server component (no `"use client"` in any `page.tsx`)
3. Every page exports `generateMetadata` sourced from `page_seo`
4. Every page renders `<JsonLd>` with per-page structured data
5. Layout renders sitewide `Organization` + `WebSite` JSON-LD
6. Sitemap dynamically lists all published pages
7. `llms.txt` is complete per v1.1.1 spec
8. `robots.ts` includes all AI crawlers
9. Old `app/` directory is untouched
10. `npx tsc --noEmit` passes for all new files

---

*Inherits from: sm-website-cms-plan.md (SSOT)*
*Updated: 2026-03-14 — jarvis*
