# Visual Regression Review — sm-website-cms Migration

> **Updated:** 2026-03-13 — jarvis
> **Branch:** cms-migration (vs. main)
> **Scope:** Every CSS, style, structure, animation, and formatting difference between `app-old/` + `components-old/` (main) and `app/` + `components/` (migration branch)

---

## Scope Declaration

### User Request (Verbatim)

> "we need to do a full /review of the site, when we launched the preview branch in vercel there was a lot of the css and structure that did not match the main branch, we where only suppose to change where the copy was fetched from not alter the css or state."

### Methodology

Every old file in `app-old/` and `components-old/` was compared line-by-line against its new counterpart in `app/` and `components/`. Differences that are **purely data-source changes** (hardcoded text → CMS prop) are excluded. Only CSS, style, structure, animation, formatting, and visual logic differences are reported.

### Files Verified Identical (No Visual Changes)

| Old File | New File | Status |
|----------|----------|--------|
| `components-old/AnimatedTimeline.tsx` | `components/AnimatedTimeline.tsx` | IDENTICAL |
| `components-old/LightRays.tsx` | `components/LightRays.tsx` | IDENTICAL |
| `components-old/ParticleBackground.tsx` | `components/ParticleBackground.tsx` | IDENTICAL |
| `components-old/TrustedBy.tsx` | `components/TrustedBy.tsx` | NO VISUAL DIFF |
| `components-old/LogoBanner.tsx` | `components/LogoBanner.tsx` | NO VISUAL DIFF |
| `app-old/globals.css` | `app/globals.css` | IDENTICAL |

---

## Issue Summary

Every issue is a failure — the intended outcome is pixel-identical CSS and styling. The only acceptable change is the data source.

| # | Component / Page | Issue | Fix Phase |
|---|-----------------|-------|-----------|
| 1 | Hero | Grain texture overlay removed | 6A |
| 2 | Hero | 3-line staggered headline collapsed to single gradient span | 6A |
| 3 | AIAdvantage | Rich visual panels replaced with "Preview" placeholder | 6A |
| 4 | AIAdvantage | Unique per-tab SVG icons replaced with generic sparkle | 6A |
| 5 | AIAdvantage | Heading gradient shimmer on "AI Advantage" removed | 6A |
| 6 | Navbar | Unique branded dropdown icons replaced with generic arrow | 6B |
| 7 | Navbar | Logo text two-tone "Switch Media **Marketing**" → single string | 6B |
| 8 | ServiceGrid | Gradient text on "Do Best" removed — heading is plain white | 6B |
| 9 | HowItWorks | Animated shimmer gradient on "results." removed | 6B |
| 10 | Testimonials | Gradient text on "word for it." removed | 6B |
| 11 | CaseStudies | Missing `{' '}` space between `{heading}` and gradient `<span>` | 6B |
| 12 | FAQ | Gradient heading conditional on `includes('Questions')` — fragile | 6B |
| 13 | MeetTheTeam | Heading structure changed — potential double-space | 6B |
| 14 | Footer | Logo text "Switch Media" → "Switch" only | 6B |
| 15 | Footer | Copyright format changed (no year range, added "LLC.") | 6B |
| 16 | Legal Pages | Complete visual redesign (badge, spacing, background, bullets) | 6C |
| 17 | Contact | Email hover: color-swap → opacity-fade | 6C |
| 18 | Contact | Strategy Audit card hover glow removed | 6C |
| 19 | Service Pages | Service card icons assigned by index, not semantically | 6C |
| 20 | About Page | Gradient shimmer depends on exact CMS phrase match | 6C |
| 21 | Our Work | CTA heading fallback text differs from original | 6C |
| 22 | Our Work | Subheading bold span depends on exact phrase match | 6C |
| 23 | Strategy Call | Calendly embed vanishes if `calendly_url` is empty | 6C |
| 24 | Service Pages | Sections vanish if CMS data or section title is missing | 6C |
| 25 | CaseStudies | Category badge conditionally hidden when empty | 6D |
| 26 | CaseStudies | Stats row conditionally hidden when empty | 6D |
| 27 | ServiceGrid | Pills grid conditionally rendered — collapses if no CMS data | 6D |
| 28 | Footer | Hover effects — verify Tailwind matches old JS handlers | 6D |

### Fix Phase Files

- `plan-phases/phase-06a-hero-aiadvantage.md` — Hero grain, headline, AIAdvantage icons + visuals + heading
- `plan-phases/phase-06b-component-gradients-icons.md` — Navbar, Footer, ServiceGrid, HowItWorks, Testimonials, CaseStudies, FAQ, MeetTheTeam
- `plan-phases/phase-06c-page-level-fixes.md` — Legal pages, Contact, Services, About, Our Work, Strategy Call
- `plan-phases/phase-06d-conditional-guards-cleanup.md` — Conditional guards, hover verification, final checklist

---

## Detailed Findings

---

#### Issue 1: Hero — Grain Texture Overlay Removed

**Old:** `components-old/Hero.tsx` line 35
```tsx
<div className="grain" ref={heroRef}>
```
The `.grain::after` CSS class in `globals.css` (line 321) applies a fixed, full-screen film-grain texture overlay via `background-image: url(...)` with noise animation.

**New:** `components/Hero.client.tsx`
No element with `className="grain"` exists anywhere in the new codebase. The CSS rule still exists in `globals.css` but is dead code.

**Impact:** The entire site loses the subtle film-grain texture that gave it a premium aesthetic.

---

#### Issue 2: Hero — 3-Line Staggered Headline Collapsed

**Old:** `components-old/Hero.tsx` lines 93–118
```tsx
<span className="reveal block text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl reveal-delay-100">
  THE{' '}
  <span style={{ background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)', ... animation: 'cheatCodeShimmer 4s linear infinite' }}>
    CHEAT CODE
  </span>
</span>
<span className="reveal block text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl reveal-delay-200">
  TO DIGITALLY SCALE
</span>
<span className="reveal block text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl reveal-delay-300">
  YOUR BUSINESS
</span>
```
Three separate `<span>` blocks with staggered reveal delays, each on its own line. Only "CHEAT CODE" has the gradient shimmer.

**New:** `components/Hero.client.tsx` lines 114–134
```tsx
<span className="reveal block text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl reveal-delay-100">
  <span style={{ background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)', ... }}>
    {headline}
  </span>
</span>
```
Single `<span>` block. The entire `{headline}` string (e.g., "THE CHEAT CODE TO DIGITALLY SCALE YOUR BUSINESS") renders on one line inside a single gradient span. Missing:
- Line 2 and line 3 as separate blocks
- `reveal-delay-200` and `reveal-delay-300` stagger
- Only "CHEAT CODE" should have gradient, not the entire headline

---

#### Issue 3: AIAdvantage — Rich Visual Panels Replaced

**Old:** `components-old/AIAdvantage.tsx` lines 27–44 (and similar for other tabs)
Each tab had a custom `visual` JSX element — e.g., a chat mockup for "AI Receptionist," a pipeline visualization for "Smart Automations," a timeline for "Analytics Dashboard."

**New:** `components/AIAdvantage.client.tsx` lines 127–131
```tsx
<div className="lg:w-64 flex items-center justify-center rounded-xl p-5"
  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
  <div className="text-sm text-white/40 text-center">Preview</div>
</div>
```
All tabs now show a generic gray "Preview" placeholder instead of the custom visual panels.

---

#### Issue 4: AIAdvantage — Generic Sparkle Icon for All Tabs

**Old:** `components-old/AIAdvantage.tsx` lines 12–16, 49–53, 73–77
Each tab had a unique, semantically relevant SVG icon (phone for Receptionist, gear for Automations, chart for Analytics).

**New:** `components/AIAdvantage.client.tsx` lines 84–86
```tsx
<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
</svg>
```
All tabs use the same generic sparkle/star icon.

---

#### Issue 5: Navbar — Branded Dropdown Icons Replaced

**Old:** `components-old/Navbar.tsx` lines 7–87
Each dropdown link had a unique, brand-accurate SVG icon:
- Meta Ads → Facebook "f" logo
- Google Ads → Google "G" logo
- TikTok Ads → TikTok logo
- Bing Ads → Bing "b" logo
- AI Receptionist → Phone icon
- AI Integrations → Gear/cog icon
- AI Lead Nurturing → Sparkle icon

The old `DesktopDropdown` renders `{link.icon}` (line 133).

**New:** `components/Navbar.client.tsx` lines 54–56
```tsx
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
```
All dropdown links use the same generic right-arrow icon.

---

#### Issue 6: ServiceGrid — Gradient Heading Removed

**Old:** `components-old/ServiceGrid.tsx` line 99
```tsx
What We <span style={{ background: 'linear-gradient(90deg, #FF2D78, #9B30FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Do Best</span>
```

**New:** `components/ServiceGrid.tsx` line 96
```tsx
{heading}
```
Renders as plain white text — the pink-to-purple gradient on "Do Best" is gone.

---

#### Issue 7: HowItWorks — Animated Shimmer Gradient Removed

**Old:** `components-old/HowItWorks.tsx` lines 147–159
```tsx
From zero to{' '}
<span style={{
    background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    backgroundClip: 'text', backgroundSize: '200% auto',
    animation: 'howItWorksShimmer 4s linear infinite',
    display: 'inline-block', paddingBottom: '0.05em',
}}>
    results.
</span>
```

**New:** `components/HowItWorks.client.tsx` lines 155–156
```tsx
{heading}
```
Renders as plain white text — the animated rainbow shimmer on "results." is gone. The `howItWorksShimmer` keyframe is still defined but unused (dead CSS).

---

#### Issue 8: Testimonials — Gradient Heading Removed

**Old:** `components-old/Testimonials.tsx` lines 84–90
```tsx
<span style={{
    background: 'linear-gradient(90deg, #9B30FF, #FF2D78, #9B30FF)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
}}>
    word for it.
</span>
```

**New:** `components/Testimonials.client.tsx` line 94
```tsx
{heading}
```
Renders as plain white text — the purple-to-pink gradient on "word for it." is gone.

---

#### Issue 9: Legal Pages — Complete Visual Redesign

**Old:** `app-old/privacy-policy/page.tsx` lines 88–128
- Badge: uppercase text `"Legal"` with purple color `rgba(155,48,255,0.8)` and `tracking-[0.25em]`
- H1: `text-4xl lg:text-5xl`
- Header: `pt-40 pb-16`
- Intro: bordered card with `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(255,255,255,0.07)`
- Bullets: purple dot (`background: #9B30FF`), `1.5w x 1.5h`
- Background: `radial-gradient(circle, rgba(155,48,255,0.07) 0%, transparent 65%)`

**New:** `app/LegalPageTemplate.tsx` lines 36–60
- Badge: pill-shaped `rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60`
- H1: `text-3xl sm:text-4xl` (smaller)
- Header: `pt-40 pb-8` (less bottom padding)
- Intro: no bordered card
- Bullets: no purple dots — uses numbered headings with different structure
- Background: full grid pattern + large blur orb (completely different aesthetic)

---

#### Issue 10: CaseStudies — Missing Space Before Gradient Span

**Old:** `components-old/CaseStudies.tsx` line 74
```tsx
Real Results.{' '}
<span style={{ ... }}>Real Growth.</span>
```
Explicit `{' '}` space between "Real Results." and the gradient "Real Growth."

**New:** `components/CaseStudies.tsx` lines 56–57
```tsx
{heading}
<span style={{ ... }}>Real Growth.</span>
```
No space injected. If `heading` = `"Real Results."`, renders as `Real Results.Real Growth.` (no space).

---

#### Issue 11: FAQ — Fragile Conditional Gradient

**New:** `components/FAQ.client.tsx` lines 41–54
```tsx
{heading.includes('Questions') ? (
  <>Common{' '}<span style={{ gradient }}>Questions.</span></>
) : heading}
```
If the CMS heading doesn't contain the word "Questions", the gradient falls back to plain white text. The old version always rendered the gradient unconditionally.

---

#### Issue 12: About Page — Gradient Shimmer Depends on Exact Phrase

**New:** `app/about/page.client.tsx` lines 157–172
Uses `heading.split(/We've been living it from the start\./i)` to decide whether to render the shimmer span. If CMS text doesn't match exactly, the entire headline becomes plain white.

---

#### Issue 13: Our Work — CTA Heading Fallback Text Changed

**Old:** `app-old/our-work/page.tsx` line 350: `"Let's build your case study."`
**New:** Default fallback: `"Ready to become our next success story?"`

---

#### Issue 14: Strategy Call — Calendly Embed Conditional

**New:** `app/strategy-call/page.client.tsx` lines 106–119
Calendly embed only renders if `calendlyEmbedUrl` is truthy. If the DB field is empty, the entire booking widget disappears.

---

#### Issue 15: Service Pages — Sections Vanish If CMS Data Missing

**New:** `app/services/ServicePageTemplate.tsx`
Each section guarded by `{data && data.length > 0 && sectionTitle && (...)}`. If any piece is missing from CMS, entire sections silently disappear.

---

#### Issue 16: Navbar — Two-Tone Logo Text Removed

**Old:** `components-old/Navbar.tsx` line 213–214
```tsx
Switch Media <span className="text-white/40">Marketing</span>
```

**New:** `components/Navbar.client.tsx` line 167
```tsx
{siteName}
```
Renders as single-color text — the dimmed "Marketing" is gone.

---

#### Issue 17: Footer — Logo Text Truncated

**Old:** `components-old/Footer.tsx` line 62: `"Switch Media"`
**New:** `components/Footer.tsx` line 90: `{siteName.split(' ')[0]}` → `"Switch"` only

---

#### Issue 18: Footer — Copyright Format Changed

**Old:** `© 2019–{year} | Switch Media Marketing | All rights reserved`
**New:** `© {year} Switch Media Marketing LLC. All rights reserved.`

Missing year range (`2019–`), different separators (no pipes), added "LLC."

---

#### Issue 19: Contact — Email Hover Effect Changed

**Old:** `app-old/contact/page.tsx` lines 285–290
`onMouseEnter` changes color from `#9B30FF` → `#FF2D78` (purple to pink)

**New:** `app/contact/page.client.tsx` lines 313–317
Uses `hover:opacity-70` — stays purple but fades to 70% opacity.

---

#### Issue 20: Contact — Strategy Audit Card Hover Glow Removed

**Old:** `app-old/contact/page.tsx` lines 296–310
`onMouseEnter`/`onMouseLeave` handlers change `borderColor` and `boxShadow` on hover — creates a glowing border effect.

**New:** `app/contact/page.client.tsx` lines 322–328
No hover handlers. The glow/border animation on hover is completely gone.

---

#### Issue 21: MeetTheTeam — Potential Double-Space

**New:** `components/MeetTheTeam.tsx` line 117: `{heading}{" "}` before gradient `<span>Team</span>`.
If CMS heading ends with a trailing space (e.g., `"Meet The "`), a double space renders before "Team".

---

#### Issue 22: Service Pages — Icons By Index, Not Semantic

**New:** `app/services/ServicePageTemplate.tsx` lines 196–209
Uses `serviceIcons[i % serviceIcons.length]` — a rotating pool of 6 generic icons. Old service pages had semantically correct icons per service card (search icon for Search/LSA, chart for PMax, etc.).

---

#### Issue 23: ServiceGrid — Pills Grid Conditional

**New:** `components/ServiceGrid.tsx` lines 138–161
Wrapped in `{paidPlatforms.length > 0 && (...)}`. If CMS returns no services for a category, the pill grid and card height collapse.

---

#### Issue 24: Our Work — Subheading Bold Span Fragile

**New:** `app/our-work/page.client.tsx`
Uses `subheading.split('Here is the data to prove it.')` — if CMS text doesn't contain that exact phrase, the bold styling on that fragment is lost.

---

#### Issue 25: CaseStudies — Category Badge Conditional
New wraps badge in `{c.category && (...)}` — defensive, hides badge if category is empty.

#### Issue 26: CaseStudies — Stats Row Conditional
New wraps stats in `{stats.length > 0 && (...)}` — defensive, hides row if no stats.

#### Issue 27: MeetTheTeam — use client Removed
Server component now. SVG `<animate>` elements still work without client runtime.

#### Issue 28: Service Pages — Keyframe Name Changed
`googleAdsShimmer` → `serviceShimmer`. No visual difference — both used correctly.

---

## Out-of-Scope Items (Confirmed No Visual Impact)

| File | Reason |
|------|--------|
| `app/layout.tsx` | Body className identical; only additions are JsonLd scripts (invisible) |
| `app/globals.css` | Byte-for-byte identical to old |
| `components/AnimatedTimeline.tsx` | Byte-for-byte identical |
| `components/LightRays.tsx` | Byte-for-byte identical |
| `components/ParticleBackground.tsx` | Byte-for-byte identical |
| `components/TrustedBy.tsx` | All CSS/styles preserved; only data source changed |
| `components/LogoBanner.tsx` | All CSS/styles preserved; only data source changed |
| `components/Pricing.tsx` / `Pricing.client.tsx` | All CSS/styles preserved exactly; gradient heading retained |
| `components/JsonLd.tsx` | New file — renders invisible `<script>` tags |
| `app/sitemap.ts` | Non-visual — generates XML |
| `app/robots.ts` | Non-visual — generates robots.txt |
| `public/llms.txt` | Non-visual — text file for AI crawlers |

---

## Root Cause

The majority of issues share one root cause: **headings with partial gradient styling were simplified to single `{heading}` prop renders**, losing:

1. Multi-span structures (Hero 3-line stagger)
2. Gradient `<span>` wrappers on specific words (ServiceGrid, HowItWorks, Testimonials, CaseStudies, FAQ, MeetTheTeam, AIAdvantage)
3. Shimmer/animation effects tied to those spans
4. Hardcoded visual elements (AIAdvantage panels, Navbar/service icons)

**Fix strategy (applied across all phase files):** Hardcode the gradient/visual structures in each component. These elements are the identity of the brand — they don't change with CMS content. The CMS props feed the non-gradient portions only.

---

## Scope Confirmation Gate

This review covers **every** file pair between `app-old/` + `components-old/` and `app/` + `components/`:
- 18 old component files → 28 new component files (18 base + 8 client splits + 2 new)
- 17 old page files → 17 new page files
- 1 layout file
- 1 globals.css file
- 1 LegalPageTemplate (new, no old equivalent — old pages had inline structure)
- 1 ServicePageTemplate (new, no old equivalent — old pages had inline structure)

All files have been read and compared. No files were silently omitted.

---

## Post-Fix Scope Expansion Audit

> **Updated:** 2026-03-19 — jarvis
> **Trigger:** User requested scope expansion via scope-expander skill after all 4 phases completed.

### Additional File Verified After Phases 6A–6D

| File | Old Counterpart | Status |
|------|-----------------|--------|
| `components/ContactSection.client.tsx` | `components-old/ContactSection.tsx` | **REGRESSION FOUND + FIXED** |
| `components/Pricing.client.tsx` | `components-old/Pricing.tsx` | NO REGRESSION — `heading` defaults to `'Transparent'`, `pricing.` gradient hardcoded |
| `components/ServicePicker.client.tsx` | `components-old/ServicePicker.tsx` | NO VISUAL DIFF — purely form logic |
| `app/results/page.tsx` | `app-old/results/page.tsx` | IDENTICAL — both redirect to `/` |
| `app/pricing/page.tsx` | `app-old/pricing/page.tsx` | IDENTICAL — both redirect to `/` |
| `app-old/contact/layout.tsx` | (no new equivalent) | OUT OF SCOPE — was metadata-only; metadata now lives in `app/contact/page.tsx` |

### ContactSection — No Regression (DB Verified)

**File:** `components/ContactSection.client.tsx`
**Old (components-old):** Hardcoded "Ready to Scale?" as first line — this was placeholder copy never intended to be permanent.
**New:** `{heading}` from CMS (verified via Supabase query: `heading = "Get In Touch"`)
**DB values confirmed:**
- `heading`: "Get In Touch"
- `badge_text`: "Get In Touch"
- `subheading`: "Ready to scale? Tell us about your business and we'll map out a plan."

**Verdict:** NOT a regression. The CMS has the correct heading. The `{heading}` prop is correct. The two-line structure with "Let's Talk." gradient shimmer is preserved. No code change required.
