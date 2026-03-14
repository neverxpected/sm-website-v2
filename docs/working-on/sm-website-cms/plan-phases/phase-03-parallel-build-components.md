# Phase 03 — Parallel Build: Foundation + Components

**Authority:** This phase inherits from [`sm-website-cms-plan.md`](../sm-website-cms-plan.md) (SSOT). Scope, decisions, evidence, and constraints are defined there. This file contains only the execution detail for Phase 3.

**Prerequisite:** Phase 2 (Seed Data) must be complete — all tables populated with current content.

---

## Phase Summary

Install Supabase, create the data layer (client, types, helpers), then build all v2 components with clean server/client separation. Old `components/` stays untouched as reference.

**What this phase does:**
- Installs Supabase client libraries
- Creates `lib/supabase.ts`, `lib/content.ts`, `types/database.ts`
- Builds every component as a v2 version in `components-v2/`
- Each interactive component gets a server/client split

**What this phase does NOT do:**
- Does not touch `app/` or `components/` (old files stay as reference)
- Does not build page files (Phase 4)
- Does not swap anything into production (Phase 5)

---

## Server/Client Split Pattern

```
components-v2/
├── Hero.tsx              ← Server: receives data props, renders Hero.client.tsx
├── Hero.client.tsx       ← Client: "use client", animations, counters
├── TrustedBy.tsx
├── TrustedBy.client.tsx
├── ...
├── Footer.tsx            ← Server only (no interactivity)
├── JsonLd.tsx            ← Server only (renders <script> tags)
├── LightRays.tsx         ← Client only (WebGL, copied unchanged)
├── ParticleBackground.tsx ← Client only (canvas, copied unchanged)
└── AnimatedTimeline.tsx  ← Client only (animations, already takes props)
```

**Rules:**
- Server component (`ComponentName.tsx`): No `"use client"`. Accepts typed data props. Renders the client component with those props. Can also do light data transformation.
- Client component (`ComponentName.client.tsx`): Has `"use client"`. Accepts the same typed props. Owns all interactivity — animations, state, event handlers, framer-motion.
- Components with zero interactivity (Footer, JsonLd): single server file, no `.client.tsx`.
- Components that are inherently client-only (LightRays, ParticleBackground, AnimatedTimeline): single client file with `"use client"`, copied from old with props interface added where needed.

---

## Checklist

### Foundation (items 30–33)

- [ ] **30. Install Supabase packages**
  ```bash
  npm install @supabase/supabase-js @supabase/ssr
  ```
  Add env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`

- [ ] **31. Create `lib/supabase.ts`**
  - Server-side Supabase client using `createServerClient` from `@supabase/ssr`
  - Uses anon key — read-only public access
  - No service role key in the frontend

- [ ] **32. Create `lib/content.ts`**
  Data-fetching helpers:
  - `getPage(slug)` — fetch page + page_seo by slug
  - `getPageSections(pageId)` — fetch ordered sections for a page
  - `getSiteConfig()` — fetch singleton site_config row
  - `getNavigation(groupKey)` — fetch navigation items by group
  - `getTeamMembers()` — fetch active team members by display_order
  - `getTestimonials()` — fetch testimonials by display_order
  - `getCaseStudies()` — fetch case studies by display_order
  - `getFaqs(pageId?)` — fetch FAQs (global if null, page-specific if set)
  - `getServices(category?)` — fetch services, optionally by category
  - `getClientLogos()` — fetch active client logos by display_order

- [ ] **33. Create `types/database.ts`**
  TypeScript interfaces:
  `Page`, `PageSeo`, `PageSection`, `TeamMember`, `Testimonial`, `CaseStudy`, `FAQ`, `Service`, `ClientLogo`, `SiteConfig`, `NavigationItem`

### Component v2 Files (items 34–50)

Reference the old `components/` files for the exact UI, animations, and behavior. The v2 files must produce visually identical output.

- [ ] **34. `components-v2/Hero.tsx` + `Hero.client.tsx`**
  Props: `eyebrow, headlines[], stats[], trustBadges[], ctaText, ctaUrl`
  Client owns: framer-motion entrance animations, stat counter effect

- [ ] **35. `components-v2/TrustedBy.tsx` + `TrustedBy.client.tsx`**
  Props: `heading, logos[]`
  Client owns: infinite scroll marquee animation

- [ ] **36. `components-v2/ServiceGrid.tsx` + `ServiceGrid.client.tsx`**
  Props: `heading, subheading, paidCard{}, aiCard{}, paidPlatforms[], aiPlatforms[]`
  Client owns: hover effects, framer-motion

- [ ] **37. `components-v2/HowItWorks.tsx` + `HowItWorks.client.tsx`**
  Props: `heading, subheading, steps[]`
  Client owns: step entrance animations, orbital effects

- [ ] **38. `components-v2/CaseStudies.tsx` + `CaseStudies.client.tsx`**
  Props: `heading, subheading, badge, cases[], ctaText`
  Client owns: card hover effects, framer-motion

- [ ] **39. `components-v2/Testimonials.tsx` + `Testimonials.client.tsx`**
  Props: `heading, subheading, badge, testimonials[]`
  Client owns: carousel/slide animations

- [ ] **40. `components-v2/MeetTheTeam.tsx` + `MeetTheTeam.client.tsx`**
  Props: `heading, subheading, badge, teamMembers[]`
  Client owns: card hover effects, particle animation

- [ ] **41. `components-v2/ContactSection.tsx` + `ContactSection.client.tsx`**
  Props: `heading, subheading, badge, contactInfo[], formConfig{}, services[]`
  Client owns: form state, mailto submission, success animation, ServicePicker

- [ ] **42. `components-v2/FAQ.tsx` + `FAQ.client.tsx`**
  Props: `heading, subheading, badge, faqs[]`
  Client owns: accordion open/close state, animations

- [ ] **43. `components-v2/Pricing.tsx` + `Pricing.client.tsx`**
  Props: `heading, subheading, badge, plans[], footerNote`
  Client owns: hover effects, featured tier highlighting

- [ ] **44. `components-v2/AIAdvantage.tsx` + `AIAdvantage.client.tsx`**
  Props: `heading, subheading, badge, tabs[]`
  Client owns: tab switching state, chat animation, flow animation

- [ ] **45. `components-v2/LogoBanner.tsx` + `LogoBanner.client.tsx`**
  Props: `subheading, logos[]`
  Client owns: marquee scroll animation

- [ ] **46. `components-v2/Navbar.tsx` + `Navbar.client.tsx`**
  Props: `brandName, logoUrl, mainLinks[], paidAdsLinks[], aiLinks[], ctaText, ctaUrl`
  Client owns: dropdown state, mobile menu toggle, scroll detection

- [ ] **47. `components-v2/Footer.tsx`** (server only)
  Props: `brandName, columns[], copyright, bibleVerse, ctaText, ctaUrl`
  No interactivity — single server component

- [ ] **48. `components-v2/ServicePicker.tsx` + `ServicePicker.client.tsx`**
  Props: `label, services[]`
  Client owns: multi-select toggle state

- [ ] **49. `components-v2/JsonLd.tsx`** (server only)
  Props: `data: Record<string, unknown>[]`
  Renders one `<script type="application/ld+json">` per item in the array

- [ ] **50. Copy visual-only components**
  Copy unchanged (these are already `"use client"`):
  - `components-v2/LightRays.tsx` ← from `components/LightRays.tsx`
  - `components-v2/ParticleBackground.tsx` ← from `components/ParticleBackground.tsx`
  - `components-v2/AnimatedTimeline.tsx` ← from `components/AnimatedTimeline.tsx` (already accepts props)

---

## Exit Criteria

Phase 3 is complete when:
1. `@supabase/supabase-js` and `@supabase/ssr` are installed
2. `lib/supabase.ts`, `lib/content.ts`, and `types/database.ts` exist and compile
3. Every component in `components-v2/` has the correct server/client split
4. No `components-v2/*.tsx` server file contains `"use client"`
5. Every `components-v2/*.client.tsx` file contains `"use client"`
6. All components accept typed props matching the database table structures
7. Old `components/` directory is untouched
8. `npx tsc --noEmit` passes for all new files

---

*Inherits from: sm-website-cms-plan.md (SSOT)*
*Updated: 2026-03-14 — jarvis*
