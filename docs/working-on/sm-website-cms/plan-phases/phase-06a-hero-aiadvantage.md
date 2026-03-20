# Phase 6A — Hero + AIAdvantage Full Restoration

> **Updated:** 2026-03-13 — jarvis
> **Rule:** The visual output must be pixel-identical to main. Only the data source changes. Every class, inline style, animation, SVG, and structural element from the old file must exist in the new file.

---

## Fix 1: Restore `grain` wrapper on Hero

**File:** `components/Hero.client.tsx`

The old Hero wraps everything in `<div className="grain" ref={heroRef}>`. The `.grain::after` CSS in `globals.css` applies a fixed film-grain overlay across the entire page. The new Hero dropped this wrapper entirely.

**What to do:**

The `grain` wrapper lived on the old `Hero` component because it was the top-level page component (it rendered ServiceGrid, HowItWorks, etc. inside itself). In the new architecture, Hero is just the hero section — it no longer owns the full page. The `grain` wrapper needs to be applied at the **page level** (`app/page.tsx`) or in **`app/layout.tsx`** so it covers the entire site the same way it did before.

**Exact fix — `app/page.tsx`:**

Wrap the entire home page return in `<div className="grain">`:

```tsx
export default async function HomePage() {
  // ... data fetching ...
  return (
    <div className="grain">
      {/* all existing content */}
    </div>
  );
}
```

**Verify:** The `.grain::after` pseudo-element in `globals.css` line 321 should now apply a full-screen noise overlay again.

---

## Fix 2: Restore 3-line staggered headline structure

**File:** `components/Hero.client.tsx`

**Old structure (lines 92–119):**
- Line 1: `THE ` + gradient shimmer span `CHEAT CODE` — reveal-delay-100
- Line 2: `TO DIGITALLY SCALE` — reveal-delay-200
- Line 3: `YOUR BUSINESS` — reveal-delay-300

Each line is a separate `<span className="reveal block ...">` with its own delay. Only "CHEAT CODE" has the gradient shimmer. The other two lines are plain white.

**New (broken):** Single `<span>` renders `{headline}` entirely inside a gradient span. One line, one delay, entire text is gradient.

**What to do:**

The headline prop currently receives the entire string. To restore the old visual, the component needs structured headline data — three lines with independent text and gradient flags.

**Option chosen:** Accept `headlineLines` prop as an array:

```ts
interface HeadlineLine {
  text: string;
  hasGradient: boolean;
  className: string;  // responsive text sizes
  delay: number;      // reveal delay (100, 200, 300)
}
```

**Exact replacement for the headline `<h1>` block (lines 109–135):**

```tsx
<h1
  className="font-black tracking-tight text-white leading-[0.95] mb-8"
  style={{ fontWeight: 800 }}
>
  {headlineLines.map((line, i) => (
    <span
      key={i}
      className={`reveal block ${line.className} reveal-delay-${line.delay}`}
    >
      {line.hasGradient ? (
        <>
          {line.text.split(/(\bCHEAT CODE\b)/i).map((part, j) =>
            /CHEAT CODE/i.test(part) ? (
              <span
                key={j}
                style={{
                  background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% auto',
                  animation: 'cheatCodeShimmer 4s linear infinite',
                  display: 'inline-block',
                }}
              >
                {part}
              </span>
            ) : part
          )}
        </>
      ) : (
        line.text
      )}
    </span>
  ))}
</h1>
```

**Keep the `<style>` tag for `cheatCodeShimmer` keyframe exactly as-is.**

**Server component (`components/Hero.tsx`) must pass:**

```tsx
headlineLines={[
  { text: `THE ${gradientWord}`, hasGradient: true, className: 'text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl', delay: 100 },
  { text: 'TO DIGITALLY SCALE', hasGradient: false, className: 'text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl', delay: 200 },
  { text: 'YOUR BUSINESS', hasGradient: false, className: 'text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl', delay: 300 },
]}
```

Where `gradientWord` comes from CMS `headline` field (or fallback `"CHEAT CODE"`).

**DB consideration:** The `page_sections` `content_data` for the home hero section should store headline as structured lines, not a single string. If the current CMS stores it as a flat string, hardcode the three-line structure in the server component and only pull the gradient word from the DB.

---

## Fix 3: Restore AIAdvantage — per-tab icons

**File:** `components/AIAdvantage.client.tsx`

**Old (lines 12–93):** Each tab has a unique `icon` JSX:
- `receptionist` → phone SVG (path: `M3 5a2 2 0 012-2h3.28...`)
- `automations` → chain-link SVG (path: `M13.828 10.172...`)
- `nurturing` → sparkle SVG (path: `M9.813 15.904...`)

**New:** All three tabs use the same generic sparkle SVG.

**What to do:**

Hardcode the icon map in the client component keyed by tab `id`:

```tsx
const tabIcons: Record<string, React.ReactNode> = {
  receptionist: (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5S10 13.5 13.5 15.5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  automations: (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.1-1.1m-.757-4.9a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  nurturing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
};
```

Then in the tab button render, replace the generic SVG with:

```tsx
<span className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${t.iconBg ?? defaultIconBgs[i % defaultIconBgs.length]}`}>
  {tabIcons[t.id] ?? (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  )}
</span>
```

---

## Fix 4: Restore AIAdvantage — per-tab visual panels

**File:** `components/AIAdvantage.client.tsx`

**Old (lines 27–121):** Each tab has a unique `visual` JSX:
- `receptionist` → Chat mockup (4 chat bubbles, alternating alignment, blue-600 assistant bubbles)
- `automations` → Pipeline flow (4 emoji steps with arrows: Lead Captured → CRM Updated → Appointment Set → Follow-up Sent)
- `nurturing` → Timeline (4 day rows: Day 1–6, final row highlighted pink-500)

**New:** All tabs show `<div className="text-sm text-white/40 text-center">Preview</div>`.

**What to do:**

Hardcode the visual map in the client component keyed by tab `id`:

```tsx
const tabVisuals: Record<string, React.ReactNode> = {
  receptionist: (
    <div className="flex flex-col gap-3">
      <div className="self-end bg-white/10 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[220px]">
        <p className="text-xs text-white/70">Hi, I&apos;d like to book a consultation</p>
      </div>
      <div className="self-start bg-blue-600 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[240px]">
        <p className="text-[10px] font-semibold text-blue-200 mb-1">AI Assistant</p>
        <p className="text-xs text-white">I&apos;d be happy to help! May I ask what service you&apos;re interested in?</p>
      </div>
      <div className="self-end bg-white/10 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[220px]">
        <p className="text-xs text-white/70">I&apos;m looking at botox treatments</p>
      </div>
      <div className="self-start bg-blue-600 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[240px]">
        <p className="text-[10px] font-semibold text-blue-200 mb-1">AI Assistant</p>
        <p className="text-xs text-white">Great choice! I have availability this Thursday at 2pm or Friday at 10am. Which works better for you?</p>
      </div>
    </div>
  ),
  automations: (
    <div className="flex items-center justify-center gap-2 py-4">
      {[
        { icon: "💬", label: "Lead\nCaptured", color: "bg-blue-500/20 text-blue-400" },
        { icon: "🗄️", label: "CRM\nUpdated", color: "bg-emerald-500/20 text-emerald-400" },
        { icon: "📅", label: "Appointment\nSet", color: "bg-violet-500/20 text-violet-400" },
        { icon: "⚡", label: "Follow-up\nSent", color: "bg-amber-500/20 text-amber-400" },
      ].map((step, i) => (
        <div key={step.label} className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1.5">
            <span className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center text-lg`}>{step.icon}</span>
            <p className="text-[10px] text-white/40 text-center whitespace-pre-line leading-tight">{step.label}</p>
          </div>
          {i < 3 && <span className="text-white/20 text-xs mb-4">→</span>}
        </div>
      ))}
    </div>
  ),
  nurturing: (
    <div className="flex flex-col gap-2 w-full max-w-[240px]">
      {[
        { day: "Day 1", label: "Welcome sequence sent", active: false },
        { day: "Day 3", label: "Value content delivered", active: false },
        { day: "Day 5", label: "Engagement detected", active: false },
        { day: "Day 6", label: "Hot lead → Sales call booked", active: true },
      ].map((row) => (
        <div key={row.day} className={`flex items-center gap-3 px-3 py-2 rounded-xl ${row.active ? "bg-pink-500" : "bg-white/5"}`}>
          <span className={`text-[10px] font-semibold w-10 shrink-0 ${row.active ? "text-white" : "text-white/40"}`}>{row.day}</span>
          <span className={`w-2 h-2 rounded-full shrink-0 ${row.active ? "bg-white" : "bg-white/20"}`} />
          <span className={`text-xs ${row.active ? "text-white font-semibold" : "text-white/60"}`}>{row.label}</span>
        </div>
      ))}
    </div>
  ),
};
```

Then replace the visual panel render:

```tsx
{/* Visual */}
<div className="lg:w-64 flex items-center justify-center rounded-xl p-5"
  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
  {tabVisuals[tab.id] ?? <div className="text-sm text-white/40 text-center">Preview</div>}
</div>
```

---

## Fix 5: Restore AIAdvantage — heading gradient shimmer

**File:** `components/AIAdvantage.client.tsx`

**Old (lines 157–162):**
```tsx
<h2 className="reveal reveal-delay-100 text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
  The{' '}
  <span style={{ background: 'linear-gradient(90deg, #9B30FF, #00E5FF, #9B30FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', backgroundSize: '200% auto', animation: 'aiAdvantageShimmer 4s linear infinite', display: 'inline-block', paddingBottom: '0.1em' }}>
    AI Advantage
  </span>
</h2>
```

**What to do:** The heading must always render with "The " as plain white text followed by "AI Advantage" in a shimmer gradient span. Hardcode this structure — the gradient word "AI Advantage" is the component's identity. Accept a `heading` prop for the plain portion only, fallback to "The ".

---

## Checklist

- [ ] `app/page.tsx` — wrap return in `<div className="grain">`
- [ ] `components/Hero.client.tsx` — restore 3-line staggered `<h1>` with per-line reveal delays and gradient only on "CHEAT CODE"
- [ ] `components/Hero.tsx` (server) — pass structured headline lines
- [ ] `components/AIAdvantage.client.tsx` — restore per-tab icons via `tabIcons` map
- [ ] `components/AIAdvantage.client.tsx` — restore per-tab visual panels via `tabVisuals` map
- [ ] `components/AIAdvantage.client.tsx` — restore "The " + gradient "AI Advantage" heading
- [ ] Verify: `npx next build` — zero errors
- [ ] Verify: visual comparison against main branch
