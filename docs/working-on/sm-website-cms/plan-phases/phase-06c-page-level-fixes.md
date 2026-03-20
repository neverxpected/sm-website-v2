# Phase 6C — Page-Level Fixes (Legal, Contact, Services, About, Our Work, Strategy Call)

> **Updated:** 2026-03-13 — jarvis
> **Rule:** The visual output must be pixel-identical to main. Only the data source changes.

---

## Fix 1: Legal Pages — Restore exact old visual structure

**File:** `app/LegalPageTemplate.tsx`

The entire template was rewritten with a different aesthetic. It must be restored to match the old privacy-policy, cookie-policy, and terms-of-service pages exactly.

**Old structure (`app-old/privacy-policy/page.tsx`):**

- Background: `#0A0F1C`
- Ambient glow: `fixed` div with `radial-gradient(circle, rgba(155,48,255,0.07) 0%, transparent 65%)` positioned at `top-1/3 left-1/3`, 500x500
- Badge: `<p>` tag — `text-xs font-bold uppercase tracking-[0.25em]` with `color: rgba(155,48,255,0.8)` — text "Legal"
- H1: `text-4xl lg:text-5xl font-black tracking-tight text-white mb-6`
- Last updated: `text-sm leading-relaxed` with `color: rgba(240,244,255,0.45)`
- Header section: `pt-40 pb-16 px-6 lg:px-8 max-w-3xl mx-auto`
- Intro block: bordered card `p-8 rounded-2xl` with `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(255,255,255,0.07)`
- Bulleted sections: purple dot `w-1.5 h-1.5 rounded-full` with `background: #9B30FF`, label bold white, body `rgba(240,244,255,0.55)`
- Section headings: `text-lg font-black text-white mb-5 pb-4` with `borderBottom: 1px solid rgba(255,255,255,0.07)`
- Standalone sections: bordered card `p-8 rounded-2xl` same style as intro
- Bottom padding: `pb-32`

**New (broken):** Different badge style (pill), smaller H1, grid pattern background, blur orb, no intro card, no purple dots, no section border-bottom, different bottom padding.

**What to do:**

Rewrite `LegalPageTemplate.tsx` to match the old structure exactly. The template accepts the same props but renders the old visual:

```tsx
interface LegalPageTemplateProps {
  badge: string
  heading: string
  lastUpdated: string
  introText?: string
  sections?: { heading: string; items: { label: string; body: string }[] }[]
  standalone?: { heading: string; body: string }[]
  terms?: { number: string; heading: string; body: string; items: { label: string; text: string }[] }[]
}
```

Key elements to restore:
1. Background: `#0A0F1C` (not grid pattern)
2. Ambient glow: `radial-gradient(circle, rgba(155,48,255,0.07) 0%, transparent 65%)` — `fixed inset-0`
3. Badge: plain `<p>` with purple text and uppercase tracking, NOT a pill
4. H1: `text-4xl lg:text-5xl` (NOT `text-3xl sm:text-4xl`)
5. Header: `pb-16` (NOT `pb-8`)
6. Intro: bordered card with `p-8 rounded-2xl`
7. Bullet dots: `w-1.5 h-1.5 rounded-full` with `background: #9B30FF`
8. Section headings: `borderBottom: 1px solid rgba(255,255,255,0.07)`
9. Standalone cards: `p-8 rounded-2xl` with same border/bg
10. Bottom: `pb-32`

---

## Fix 2: Contact Page — Restore email hover effect

**File:** `app/contact/page.client.tsx`

**Old (lines 285–290):**
```tsx
<a href="mailto:charles@switchmediaco.com"
    className="text-sm font-semibold transition-colors duration-200"
    style={{ color: '#9B30FF' }}
    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#FF2D78'; }}
    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#9B30FF'; }}>
```
Hover changes purple → pink.

**New (broken):** Uses `hover:opacity-70` — fades to 70% opacity instead of color change.

**What to do:**

Replace the new email link with the old hover behavior. Since this is a client component, `onMouseEnter`/`onMouseLeave` handlers work:

```tsx
<a href={`mailto:${contactEmail}`}
  className="text-sm font-semibold transition-colors duration-200"
  style={{ color: '#9B30FF' }}
  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#FF2D78'; }}
  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#9B30FF'; }}
>
  {contactEmail}
</a>
```

---

## Fix 3: Contact Page — Restore Strategy Audit card hover glow

**File:** `app/contact/page.client.tsx`

**Old (lines 296–310):**
```tsx
<Link href="/strategy-call"
    className="flex items-center justify-between p-6 rounded-2xl transition-all duration-300 group hover:scale-[1.02]"
    style={{
        background: 'linear-gradient(135deg, rgba(255,45,120,0.1), rgba(155,48,255,0.1))',
        border: '1px solid rgba(255,45,120,0.2)',
        ...reveal(sidebarVisible, 200),
    }}
    onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,45,120,0.45)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(255,45,120,0.12)';
    }}
    onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,45,120,0.2)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
    }}>
```

**New (broken):** No `onMouseEnter`/`onMouseLeave`. Hover glow is missing.

**What to do:**

Add the handlers back to the Strategy Audit `<Link>`:

```tsx
onMouseEnter={e => {
  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,45,120,0.45)';
  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(255,45,120,0.12)';
}}
onMouseLeave={e => {
  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,45,120,0.2)';
  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
}}
```

---

## Fix 4: Service Pages — Restore per-service semantic icons

**File:** `app/services/ServicePageTemplate.tsx`

**Old:** Each service page had unique SVG icons per service card (e.g., search icon for "Search and LSA", chart for "Performance Max", checkmark for "Conversion Tracking").

**New (broken):** Uses `serviceIcons[i % serviceIcons.length]` — 6 generic icons cycled by index.

**What to do:**

Each old service page defined its own `services` array with per-service `icon` JSX. These icons need to be preserved. Two approaches:

**Option A (recommended):** Store icon SVG path data in the CMS `page_sections.content_data` for service items, and render them dynamically.

**Option B (fallback):** Hardcode icon maps per service page slug in `ServicePageTemplate.tsx`:

```tsx
const servicePageIcons: Record<string, Record<string, React.ReactNode>> = {
  'google-ads': {
    'Search and Local Service Ads (LSA)': /* search SVG */,
    'Performance Max and Display': /* chart SVG */,
    'Conversion Tracking and Attribution': /* checkmark SVG */,
  },
  'meta-ads': { /* ... */ },
  // etc.
};
```

Then look up by slug + title, falling back to the generic icon pool.

**Each old service page's icons must be extracted and mapped.** Reference files:
- `app-old/services/google-ads/page.tsx` lines 15–40
- `app-old/services/meta-ads/page.tsx`
- `app-old/services/tiktok-ads/page.tsx`
- `app-old/services/digital-advertising/page.tsx`
- `app-old/services/ai-receptionist/page.tsx`
- `app-old/services/ai-lead-nurturing/page.tsx`
- `app-old/services/ai-system-integration/page.tsx`

---

## Fix 5: About Page — Restore gradient shimmer headline

**File:** `app/about/page.client.tsx`

**Old:** Hardcoded `"We've been living it from the start."` with shimmer gradient.
**New (broken):** Uses `heading.split(/We've been living it from the start\./i)` — if CMS text doesn't match, gradient vanishes.

**What to do:**

Hardcode the gradient structure. The shimmer text "We've been living it from the start." is the identity of this page:

```tsx
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-8">
  {/* non-gradient portion from CMS or hardcoded */}
  We didn&apos;t learn marketing from a textbook.{' '}
  <style>{`@keyframes aboutHeadlineShimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }`}</style>
  <span style={{
    background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundSize: '200% auto',
    animation: 'aboutHeadlineShimmer 4s linear infinite',
    display: 'inline',
  }}>
    We&apos;ve been living it from the start.
  </span>
</h1>
```

---

## Fix 6: Our Work — Restore CTA heading text

**File:** `app/our-work/page.tsx` or `app/our-work/page.client.tsx`

**Old (line 350):** `"Let's build your case study."`
**New (broken):** Fallback `"Ready to become our next success story?"`

**What to do:**

Change the default fallback to match the old text:

```tsx
const ctaHeading = cta?.heading ?? "Let's build your case study.";
```

---

## Fix 7: Our Work — Restore subheading bold span

**File:** `app/our-work/page.client.tsx`

**Old:** `"Here is the data to prove it."` rendered in `<strong>` unconditionally.
**New (broken):** Uses `subheading.split('Here is the data to prove it.')` — fragile.

**What to do:**

Hardcode the structure:

```tsx
<p ...>
  We don&apos;t just run ads — we engineer measurable outcomes.{' '}
  <strong className="text-white">Here is the data to prove it.</strong>
</p>
```

---

## Fix 8: Strategy Call — Calendly embed fallback

**File:** `app/strategy-call/page.client.tsx`

**New (broken):** Calendly embed only renders if `calendlyEmbedUrl` is truthy.

**What to do:**

Add a hardcoded fallback URL so the embed always renders:

```tsx
const embedUrl = calendlyEmbedUrl || 'https://calendly.com/switchmediaco/strategy-call';
```

The old page always rendered the embed unconditionally.

---

## Fix 9: Service Pages — Section guards too aggressive

**File:** `app/services/ServicePageTemplate.tsx`

**New (broken):** Each section guarded by `{data && data.length > 0 && sectionTitle && (...)}`. If CMS data is partially populated, entire sections vanish.

**What to do:**

Remove the `&& sectionTitle` guard — sections should render as long as they have data. If the title is empty, use a hardcoded fallback per section type:

```tsx
{services && services.length > 0 && (
  <section>
    <h2>{servicesSectionTitle || 'Our Services'}</h2>
    {/* ... */}
  </section>
)}
```

---

## Checklist

- [ ] `app/LegalPageTemplate.tsx` — full rewrite to match old visual structure
- [ ] `app/contact/page.client.tsx` — restore email hover (purple → pink)
- [ ] `app/contact/page.client.tsx` — restore Strategy Audit hover glow
- [ ] `app/services/ServicePageTemplate.tsx` — restore per-service icons (extract from all 7 old service pages)
- [ ] `app/about/page.client.tsx` — hardcode gradient shimmer headline
- [ ] `app/our-work/page.tsx` — fix CTA heading fallback text
- [ ] `app/our-work/page.client.tsx` — hardcode subheading bold span
- [ ] `app/strategy-call/page.client.tsx` — add Calendly URL fallback
- [ ] `app/services/ServicePageTemplate.tsx` — relax section guards
- [ ] Verify: `npx next build` — zero errors
- [ ] Verify: visual comparison against main branch for each page
