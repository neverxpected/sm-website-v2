# Phase 6D — Conditional Guards and Remaining Cleanup

> **Updated:** 2026-03-13 — jarvis
> **Rule:** The visual output must be pixel-identical to main. Only the data source changes.

---

## Fix 1: CaseStudies — Category badge always renders

**File:** `components/CaseStudies.tsx`

**Old:** Category badge always renders regardless of value.
**New (broken):** Wrapped in `{c.category && (...)}` — hides badge when empty.

**What to do:**

Remove the conditional. The old component always rendered the badge:

```tsx
<div className="absolute top-4 left-4 z-10">
  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
    style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', color: 'rgba(240,244,255,0.9)', border: '1px solid rgba(255,255,255,0.15)' }}>
    {c.category}
  </span>
</div>
```

---

## Fix 2: CaseStudies — Stats row always renders

**File:** `components/CaseStudies.tsx`

**Old:** Stats row always renders.
**New (broken):** Wrapped in `{stats.length > 0 && (...)}`.

**What to do:**

Remove the conditional. The old component always rendered the stats wrapper:

```tsx
<div className="flex flex-nowrap gap-2">
  {stats.map((stat) => (/* ... */))}
</div>
```

---

## Fix 3: ServiceGrid — Pills grid always renders

**File:** `components/ServiceGrid.tsx`

**Old:** Pills grid always renders.
**New (broken):** Wrapped in `{paidPlatforms.length > 0 && (...)}`.

**What to do:**

Remove the conditional:

```tsx
<div className="grid grid-cols-2 gap-3">
  {paidPlatforms.map((p) => (/* ... */))}
</div>
```

---

## Fix 4: Footer — Restore `onMouseEnter`/`onMouseLeave` on social icons

**File:** `components/Footer.tsx`

**Old (lines 78–80):**
```tsx
onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FF2D78'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,45,120,0.3)'; }}
onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(240,244,255,0.45)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
```

**New:** Uses Tailwind `hover:text-[#FF2D78] hover:border-[rgba(255,45,120,0.3)]`.

**Note:** This is functionally equivalent. The Tailwind version should produce the same visual result. **Verify visually** — if Tailwind `hover:border-[rgba(255,45,120,0.3)]` doesn't work due to bracket syntax limitations, switch back to the JS handlers.

The Footer is a server component, so `onMouseEnter`/`onMouseLeave` handlers **cannot be used**. The Tailwind approach is the correct pattern here. Verify the hover colors match by testing in browser.

---

## Fix 5: Footer — Restore `onMouseEnter`/`onMouseLeave` on nav links

**File:** `components/Footer.tsx`

**Old (lines 100–101):**
```tsx
onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FF2D78'; }}
onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(240,244,255,0.5)'; }}
```

**New:** Uses Tailwind `text-[rgba(240,244,255,0.5)] hover:text-[#FF2D78]`.

**Note:** Same as Fix 4 — functionally equivalent in Tailwind. **Verify visually.** If Footer needs to become a client component for hover handlers, that's a structural change — Tailwind hover should work fine here.

---

## Fix 6: Strategy Call — CMS heading prop is accepted but ignored

**File:** `app/strategy-call/page.client.tsx`

**Old:** Hardcoded "Book Your" + gradient "Strategy Call".
**New:** Same hardcoded structure (heading prop is unused).

**Status:** This is actually CORRECT — the gradient structure is preserved. The CMS prop being unused is acceptable since the heading structure includes a gradient span. No fix needed — just documenting.

---

## Fix 7: Our Work — CMS heading prop is accepted but hardcoded render is used

**File:** `app/our-work/page.client.tsx`

**Old:** Hardcoded "Engineered " + gradient "Results."
**New:** Same hardcoded structure.

**Status:** CORRECT — no fix needed. Same reasoning as Fix 6.

---

## Fix 8: Contact — CMS heading prop ignored, hardcoded gradient preserved

**File:** `app/contact/page.client.tsx`

**Old:** Hardcoded gradient on "honest conversation".
**New:** Same hardcoded structure.

**Status:** CORRECT — no fix needed.

---

## Checklist

- [ ] `components/CaseStudies.tsx` — remove category badge conditional
- [ ] `components/CaseStudies.tsx` — remove stats row conditional
- [ ] `components/ServiceGrid.tsx` — remove pills grid conditional
- [ ] `components/Footer.tsx` — verify Tailwind hover matches old JS hover colors exactly (test in browser)
- [ ] If Footer hover doesn't match → make Footer a client component and add JS handlers back
- [ ] Verify: `npx next build` — zero errors
- [ ] Verify: full visual comparison against main branch

---

## Final Verification Checklist (All Phases 6A–6D)

After all fixes are applied:

- [ ] `npx tsc --noEmit` — zero TypeScript errors
- [ ] `npx next build` — zero build errors, zero warnings
- [ ] Visual comparison: every page on the migration branch matches main branch exactly
- [ ] Only difference between branches: data is fetched from Supabase instead of hardcoded
- [ ] No new `"use client"` directives added unnecessarily
- [ ] No dead CSS (unused keyframes cleaned up)
- [ ] `.grain` overlay visible on home page
- [ ] All gradient headings render correctly
- [ ] All SVG icons match their old counterparts exactly
- [ ] All hover effects work correctly
- [ ] All legal pages match old visual structure
- [ ] All service page icons are semantically correct
