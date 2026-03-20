# Phase 6B — Component Gradient Headings, Icons, and Text Formatting

> **Updated:** 2026-03-13 — jarvis
> **Rule:** The visual output must be pixel-identical to main. Only the data source changes.

---

## Fix 1: Navbar — Restore branded dropdown icons

**File:** `components/Navbar.client.tsx`

**Old:** Each dropdown link had a unique, brand-accurate SVG icon passed as `{link.icon}`. The old `NavLink` type included `icon: React.ReactNode`.

**New (broken):** All dropdown links render the same generic right-arrow SVG.

**What to do:**

Hardcode an icon map in the client component keyed by `href`:

```tsx
const navIcons: Record<string, React.ReactNode> = {
  '/services/meta-ads': (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  '/services/google-ads': (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  ),
  '/services/tiktok-ads': (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
    </svg>
  ),
  '/services/digital-advertising': (
    <svg viewBox="0 0 20 24" className="w-4 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="1" width="4" height="22" />
      <polygon points="6,9 18,15 11,23 6,23" />
      <polygon points="6,13 14,15 6,18" opacity="0.35" fill="#000" />
    </svg>
  ),
  '/services/ai-receptionist': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5S10 13.5 13.5 15.5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  '/services/ai-system-integration': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <circle cx="12" cy="12" r="3" strokeLinecap="round" />
    </svg>
  ),
  '/services/ai-lead-nurturing': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
};
```

Replace the generic arrow in `DesktopDropdown` and `MobileNav` link render with:

```tsx
<span className="mt-0.5 text-white/40 group-hover:text-white transition-colors shrink-0">
  {navIcons[link.href] ?? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )}
</span>
```

---

## Fix 2: Navbar — Restore two-tone logo text

**File:** `components/Navbar.client.tsx`

**Old (line 213–214):**
```tsx
Switch Media <span className="text-white/40">Marketing</span>
```

**New (broken, line 167):** `{siteName}` renders as single-color white text.

**What to do:**

Split `siteName` and render the last word dimmed:

```tsx
<span className="text-base font-bold tracking-tight text-white">
  {siteName.split(' ').slice(0, -1).join(' ')}{' '}
  <span className="text-white/40">{siteName.split(' ').slice(-1)[0]}</span>
</span>
```

This preserves the old two-tone pattern for any `siteName` — "Switch Media" in full white, "Marketing" in white/40.

---

## Fix 3: Footer — Restore logo text

**File:** `components/Footer.tsx`

**Old (line 62):** `"Switch Media"` (first two words)
**New (broken, line 90):** `{siteName.split(' ')[0]}` → only "Switch"

**What to do:**

```tsx
<span className="text-base font-bold text-white tracking-tight">
  {siteName.split(' ').slice(0, 2).join(' ')}
</span>
```

---

## Fix 4: Footer — Restore copyright format

**File:** `app/layout.tsx` (where `copyrightText` prop is constructed)

**Old (line 116):** `© 2019–{year} | Switch Media Marketing | All rights reserved`
**New (broken, line 85):** `© {year} Switch Media Marketing LLC. All rights reserved.`

**What to do in `app/layout.tsx`:**

```tsx
copyrightText={`\u00A9 2019\u2013${new Date().getFullYear()} | ${config.site_name ?? 'Switch Media Marketing'} | All rights reserved`}
```

---

## Fix 5: ServiceGrid — Restore gradient heading

**File:** `components/ServiceGrid.tsx`

**Old (line 99):**
```tsx
What We <span style={{ background: 'linear-gradient(90deg, #FF2D78, #9B30FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Do Best</span>
```

**New (broken, line 96):** `{heading}` renders as plain white.

**What to do:**

Hardcode the gradient structure, use `heading` only as fallback:

```tsx
<h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
  What We{' '}
  <span style={{ background: 'linear-gradient(90deg, #FF2D78, #9B30FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
    Do Best
  </span>
</h2>
```

The `heading` prop can still be accepted but the render is hardcoded to match the old visual exactly. If the CMS heading changes in the future, the gradient structure stays.

---

## Fix 6: HowItWorks — Restore animated shimmer heading

**File:** `components/HowItWorks.client.tsx`

**Old (lines 147–159):**
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

**New (broken):** `{heading}` renders as plain white.

**What to do:**

Hardcode the structure:

```tsx
<h2
  className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4"
  style={reveal(100)}
>
  From zero to{' '}
  <span style={{
    background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundSize: '200% auto',
    animation: 'howItWorksShimmer 4s linear infinite',
    display: 'inline-block',
    paddingBottom: '0.05em',
  }}>
    results.
  </span>
</h2>
```

---

## Fix 7: Testimonials — Restore gradient heading

**File:** `components/Testimonials.client.tsx`

**Old (lines 81–91):**
```tsx
<h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
    Don&apos;t take our<br className="sm:hidden" />{' '}
    <span style={{
        background: 'linear-gradient(90deg, #9B30FF, #FF2D78, #9B30FF)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    }}>
        word for it.
    </span>
</h2>
```

**New (broken, line 94):** `{heading}` renders as plain white.

**What to do:**

Hardcode the structure:

```tsx
<h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
  Don&apos;t take our<br className="sm:hidden" />{' '}
  <span style={{
    background: 'linear-gradient(90deg, #9B30FF, #FF2D78, #9B30FF)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }}>
    word for it.
  </span>
</h2>
```

---

## Fix 8: CaseStudies — Restore space + gradient heading

**File:** `components/CaseStudies.tsx`

**Old (lines 73–78):**
```tsx
<h2 ...>
  Real Results.{' '}
  <span style={{ gradient }}>Real Growth.</span>
</h2>
```

**New (broken):** `{heading}` with no space before `<span>`.

**What to do:**

Hardcode the structure:

```tsx
<h2 className="reveal reveal-delay-100 text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
  Real Results.{' '}
  <span style={{
    background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #FF2D78)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundSize: '200% auto',
    animation: 'realGrowthShimmer 4s linear infinite',
    display: 'inline-block',
  }}>
    Real Growth.
  </span>
</h2>
```

---

## Fix 9: FAQ — Remove fragile conditional, hardcode gradient heading

**File:** `components/FAQ.client.tsx`

**Old (lines 61–71):**
```tsx
<h2 ...>
    Common{' '}
    <span style={{ background: 'linear-gradient(90deg, #00E5FF, #9B30FF, #00E5FF)', ... }}>
        Questions.
    </span>
</h2>
```

**New (broken):** `heading.includes('Questions')` conditional — fragile.

**What to do:**

Remove the conditional entirely. Hardcode:

```tsx
<h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
  Common{' '}
  <span style={{
    background: 'linear-gradient(90deg, #00E5FF, #9B30FF, #00E5FF)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }}>
    Questions.
  </span>
</h2>
```

---

## Fix 10: MeetTheTeam — Fix potential double-space

**File:** `components/MeetTheTeam.tsx`

**Old (line 138):** `Meet The{' '}`
**New:** `{heading}{" "}`

**What to do:**

Hardcode the structure:

```tsx
<h2 className="reveal reveal-delay-100 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
  Meet The{' '}
  <span style={{ gradient styles }}>
    Team
  </span>
</h2>
```

---

## Checklist

- [ ] `components/Navbar.client.tsx` — branded icon map + two-tone logo text
- [ ] `components/Footer.tsx` — logo text shows first two words
- [ ] `app/layout.tsx` — copyright format matches old exactly
- [ ] `components/ServiceGrid.tsx` — hardcode gradient heading
- [ ] `components/HowItWorks.client.tsx` — hardcode shimmer heading
- [ ] `components/Testimonials.client.tsx` — hardcode gradient heading
- [ ] `components/CaseStudies.tsx` — hardcode space + gradient heading
- [ ] `components/FAQ.client.tsx` — hardcode gradient heading, remove conditional
- [ ] `components/MeetTheTeam.tsx` — hardcode heading structure
- [ ] Verify: `npx next build` — zero errors
- [ ] Verify: visual comparison against main branch
