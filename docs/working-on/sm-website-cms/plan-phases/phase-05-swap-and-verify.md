# Phase 05 — Swap + Verification

**Authority:** This phase inherits from [`sm-website-cms-plan.md`](../sm-website-cms-plan.md) (SSOT). Scope, decisions, evidence, and constraints are defined there. This file contains only the execution detail for Phase 5.

**Prerequisite:** Phase 4 (Parallel Build: Pages) must be complete — all v2 pages and components built and type-checking.

---

## Phase Summary

Swap the v2 files into production position (replacing old `app/` and `components/`), then systematically verify every acceptance criterion.

**What this phase does:**
- Renames old directories out of the way
- Renames v2 directories into production position
- Fixes any import paths if needed
- Runs full build
- Verifies all 17 acceptance criteria with evidence
- Deletes old directories after verification passes

---

## Checklist

### Swap (items 67–70)

- [ ] **67. Rename old directories**
  ```bash
  mv app app-old
  mv components components-old
  ```

- [ ] **68. Rename v2 directories into production position**
  ```bash
  mv app-v2 app
  mv components-v2 components
  ```

- [ ] **69. Fix import paths if needed**
  - All v2 files should use `@/components/` and `@/lib/` path aliases
  - If any v2 file references `components-v2/` or `app-v2/`, update to `components/` / `app/`
  - Check `tsconfig.json` path aliases are correct

- [ ] **70. Run `npm run build` — confirm zero errors after swap**

### Verification (items 71–82)

#### Content Rendering

- [ ] **71. Verify all 15 pages render correctly with DB content**

  Load each route and confirm the visible content matches the old hardcoded version. No text missing, changed, or duplicated.

  | Route | Visual Match | Result |
  |---|---|---|
  | `/` (home) | Hero, TrustedBy, ServiceGrid, HowItWorks, CaseStudies, Testimonials, MeetTheTeam, ContactSection, FAQ, AIAdvantage | |
  | `/about` | Hero, Timeline, Stats, CTA | |
  | `/contact` | Hero, Form, ServicePicker, Sidebar | |
  | `/our-work` | Header, Case Studies Grid, CTA | |
  | `/strategy-call` | Header, Calendly embed | |
  | `/services/digital-advertising` | All sections | |
  | `/services/google-ads` | All sections | |
  | `/services/meta-ads` | All sections + case studies | |
  | `/services/tiktok-ads` | All sections | |
  | `/services/ai-receptionist` | All sections | |
  | `/services/ai-system-integration` | All sections | |
  | `/services/ai-lead-nurturing` | All sections | |
  | `/cookie-policy` | Header, Body | |
  | `/privacy-policy` | Header, Body | |
  | `/terms-of-service` | Header, Body | |
  | Navbar (all pages) | Brand, links, dropdowns | |
  | Footer (all pages) | Brand, columns, copyright | |

#### SEO Metadata

- [ ] **72. Verify SEO metadata in page source for all routes**

  | Route | title | description | og:title | og:description | Brand correct | Result |
  |---|---|---|---|---|---|---|
  | `/` | | | | | | |
  | `/about` | | | | | | |
  | `/contact` | | | | | | |
  | `/our-work` | | | | | | |
  | `/strategy-call` | | | | | | |
  | `/services/digital-advertising` | | | | | | |
  | `/services/google-ads` | | | | | | |
  | `/services/meta-ads` | | | | | | |
  | `/services/tiktok-ads` | | | | | | |
  | `/services/ai-receptionist` | | | | | | |
  | `/services/ai-system-integration` | | | | | | |
  | `/services/ai-lead-nurturing` | | | | | | |
  | `/cookie-policy` | | | | | | |
  | `/privacy-policy` | | | | | | |
  | `/terms-of-service` | | | | | | |

#### JSON-LD Structured Data

- [ ] **73. Verify JSON-LD validates for every route**
  Extract `<script type="application/ld+json">` from each page. Validate:
  - Valid JSON
  - Correct `@type` per SSOT templates
  - Required properties present

  Representative pages for Google Rich Results Test:
  - Home (`/`) — `LocalBusiness`, `FAQPage`
  - `/services/meta-ads` — `Service`, `OfferCatalog`
  - `/about` — `AboutPage`, `Person`
  - `/contact` — `ContactPage`
  - `/privacy-policy` — `WebPage`

- [ ] **74. Verify sitewide JSON-LD on every page**
  Check 3+ page types for `Organization` + `WebSite` JSON-LD blocks from layout.

- [ ] **75. Verify BreadcrumbList on every page**
  Check that every page has `BreadcrumbList` with correct hierarchy. Service pages: 3 levels.

- [ ] **76. Verify FAQPage JSON-LD on home page**
  Confirm `FAQPage` JSON-LD is present and dynamically populated from `faqs` table. Verify Q&A count matches database.

#### Sitemap

- [ ] **77. Verify sitemap includes all 15 published routes**
  Load `/sitemap.xml`:
  - All 15 active routes present with correct URLs
  - No redirect routes included
  - `lastModified` dates present
  - Priority values correct (1.0 home, 0.8 services, 0.6 others)

#### Security

- [ ] **78. Verify RLS prevents public write access**
  Using anon key:
  - `INSERT` into `pages` → should fail
  - `UPDATE` on `pages` → should fail
  - `DELETE` on `pages` → should fail
  - `SELECT` where `status = 'published'` → should succeed
  - `SELECT` where `status = 'draft'` → should return no rows

#### AI Visibility

- [ ] **79. Verify `llms.txt`**
  Load `/llms.txt`:
  - H1: "Switch Media Marketing"
  - Blockquote summary
  - All 7 services with URLs
  - Core pages listed
  - "What We Do Not Do" section
  - Contact section
  - Legal section

- [ ] **80. Verify `robots.txt`**
  Load `/robots.txt`:
  - AI crawlers: GPTBot, Google-Extended, Claude-Web, Anthropic-AI, ChatGPT-User, PerplexityBot, Applebot-Extended
  - All have `Allow: /`
  - Sitemap reference present

#### Architecture

- [ ] **81. Build succeeds with zero TypeScript errors**
  `npm run build` → exit code 0, zero TS errors, all pages generate

#### Cleanup

- [ ] **82. Delete old directories**
  After all verification passes:
  ```bash
  rm -rf app-old components-old
  ```

---

## Verification Summary Table

| # | Check | Result | Evidence |
|---|---|---|---|
| 71 | Content rendering | | |
| 72 | SEO metadata | | |
| 73 | JSON-LD validation | | |
| 74 | Sitewide JSON-LD | | |
| 75 | BreadcrumbList | | |
| 76 | FAQPage JSON-LD | | |
| 77 | Sitemap | | |
| 78 | RLS security | | |
| 79 | llms.txt | | |
| 80 | robots.txt | | |
| 81 | Build | | |
| 82 | Cleanup | | |

---

## Final Report

After verification, update the SSOT plan's Verification Record and Final Report sections with:
1. Files changed (full list)
2. Commands run
3. Results per acceptance criterion
4. Pending items (if any)

---

*Inherits from: sm-website-cms-plan.md (SSOT)*
*Updated: 2026-03-14 — jarvis*
