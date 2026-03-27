import Link from "next/link";

const paidPlatforms = [
  {
    label: "Meta Ads",
    href: "/services/meta-ads",
    iconBg: "bg-blue-600",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Google Ads",
    href: "/services/google-ads",
    iconBg: "bg-emerald-500",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
  {
    label: "TikTok Ads",
    href: "/services/tiktok-ads",
    iconBg: "bg-pink-500",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    ),
  },
  {
    label: "Bing Ads",
    href: "/services/digital-advertising",
    iconBg: "bg-orange-500",
    icon: (
      <svg viewBox="0 0 20 24" className="w-4 h-5" fill="currentColor">
        <rect x="2" y="1" width="4" height="22" />
        <polygon points="6,9 18,15 11,23 6,23" />
        <polygon points="6,13 14,15 6,18" opacity="0.35" fill="#000" />
      </svg>
    ),
  },
];

const aiPlatforms = [
  {
    label: "AI Receptionists",
    href: "/services/ai-receptionist",
    iconBg: "bg-violet-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "AI Integrations",
    href: "/services/ai-system-integration",
    iconBg: "bg-cyan-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    label: "AI Lead Nurturing",
    href: "/services/ai-lead-nurturing",
    iconBg: "bg-rose-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
  },
  {
    label: "Custom AI",
    href: "/services/custom-ai",
    iconBg: "bg-purple-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V4H8" />
        <rect strokeLinecap="round" strokeLinejoin="round" width="16" height="12" x="4" y="8" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 14h2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 14h2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13v2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13v2" />
      </svg>
    ),
  },
];

/* All 9 services combined for the mobile 3x3 grid */
const allServices = [
  paidPlatforms[0],  // Meta Ads (blue)
  paidPlatforms[1],  // Google Ads (green)
  paidPlatforms[2],  // TikTok Ads (pink)
  {                  // Nextdoor Ads (green) — under Meta
    label: "Nextdoor Ads",
    href: "/services/nextdoor-ads",
    iconBg: "bg-green-600",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    ),
  },
  paidPlatforms[3],  // Bing Ads (orange) — center
  aiPlatforms[0],    // AI Receptionists (violet) — far right
  aiPlatforms[1],    // AI Integrations (cyan)
  aiPlatforms[2],    // AI Lead Nurturing (rose)
  aiPlatforms[3],    // Custom AI Solutions (purple)
];

export default function ServiceGrid() {
  return (
    <section className="relative px-4 lg:px-8 sg-section pt-12 lg:pt-16 pb-12 lg:pb-32" style={{ background: '#000000' }}>
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-[40%]" style={{ background: '#000000' }} />
      <style>{`
        @keyframes sgBorderGlow {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (max-width: 767px) {
          .sg-section {
            padding-top: 4rem !important;
          }
          .sg-headline {
            font-size: clamp(1.6rem, 6vw, 2.2rem) !important;
          }
          .sg-header {
            margin-bottom: 1.75rem !important;
          }
          .sg-cards {
            gap: 0.75rem !important;
          }
          .sg-pill {
            font-size: 12px !important;
            padding: 0.4rem 0.75rem !important;
          }
          .sg-card {
            position: relative;
          }
          .sg-card::after {
            content: '';
            position: absolute;
            inset: -4px;
            border-radius: 1.75rem;
            background: linear-gradient(135deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78);
            background-size: 300% 300%;
            animation: sgBorderGlow 3s linear infinite;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }
          .sg-card:active::after {
            opacity: 1;
          }
        }
      `}</style>
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section header */}
        <div className="text-center mb-14 sg-header">
          <h2 className="text-3xl lg:text-5xl font-black mb-4 sg-headline" style={{ color: '#ffffff' }}>
            Digital Ads <span className="hidden lg:inline" style={{ color: '#2fe8a2' }}>&amp;</span><br className="lg:hidden" /><span className="lg:hidden" style={{ color: '#2fe8a2' }}>&amp;</span> <span style={{ color: '#2fe8a2' }}>AI Systems</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Pick your service &amp; let&apos;s get to work.
          </p>
        </div>

        {/* ═══════ MOBILE: 3×3 ClickUp-style icon grid ═══════ */}
        <div className="lg:hidden">
          <div className="grid grid-cols-3 rounded-2xl overflow-hidden"
            style={{ background: 'transparent', border: 'none' }}>
            {allServices.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex flex-col items-center justify-center gap-2 py-5 px-2 transition-colors duration-150 active:bg-white/5"
                style={{
                  borderRight: (i % 3 !== 2) ? '1px solid rgba(47,232,162,0.2)' : 'none',
                  borderBottom: i < 6 ? '1px solid rgba(47,232,162,0.2)' : 'none',
                }}
              >
                <span className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: '#2fe8a2', color: '#ffffff' }}>
                  {s.icon}
                </span>
                <span className="text-[11px] font-semibold text-center leading-tight" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {s.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ═══════ DESKTOP: 9-icon row ═══════ */}
        <div className="hidden lg:block">
          <style>{`
            .sg-desktop-grid {
              box-shadow: 0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
            }
            .sg-grid-cell {
              transition: all 0.25s ease;
            }
            .sg-grid-cell:hover {
              background: rgba(0,0,0,0.015);
              transform: translateY(-2px);
            }
          `}</style>
          <div className="sg-desktop-grid grid grid-cols-9 rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(47,232,162,0.35)', background: '#0d0d0d', boxShadow: '0 0 0 1px rgba(47,232,162,0.08), 0 0 24px rgba(47,232,162,0.06)' }}>

            {/* ── Header row ── */}
            <div className="flex items-center justify-center gap-2 py-3 relative"
              style={{
                gridColumn: 'span 5',
                borderRight: '1px solid rgba(47,232,162,0.2)',
                borderBottom: '1px solid rgba(47,232,162,0.15)',
                background: '#000000',
              }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: '#2fe8a2' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth={2} className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#2fe8a2' }}>
                Paid Advertising
              </span>
              {/* Mint accent bar */}
              <div className="absolute bottom-0 left-4 right-4 h-[2px]"
                style={{ background: '#2fe8a2', borderRadius: 2, opacity: 0.6 }} />
            </div>

            <div className="flex items-center justify-center gap-2 py-3 relative"
              style={{
                gridColumn: 'span 4',
                borderBottom: '1px solid rgba(47,232,162,0.15)',
                background: '#000000',
              }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: '#2fe8a2' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth={2} className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#2fe8a2' }}>
                AI Systems
              </span>
              {/* Mint accent bar */}
              <div className="absolute bottom-0 left-4 right-4 h-[2px]"
                style={{ background: '#2fe8a2', borderRadius: 2, opacity: 0.6 }} />
            </div>

            {/* ── Icon row ── */}
            {allServices.map((s, i) => {
              const glowColors: Record<string, string> = {
                'bg-blue-600': 'rgba(37,99,235,0.35)',
                'bg-emerald-500': 'rgba(16,185,129,0.35)',
                'bg-pink-500': 'rgba(236,72,153,0.35)',
                'bg-green-600': 'rgba(22,163,74,0.35)',
                'bg-orange-500': 'rgba(249,115,22,0.35)',
                'bg-violet-500': 'rgba(139,92,246,0.35)',
                'bg-cyan-500': 'rgba(6,182,212,0.35)',
                'bg-rose-500': 'rgba(244,63,94,0.35)',
                'bg-purple-500': 'rgba(168,85,247,0.35)',
              };
              const glow = glowColors[s.iconBg] || 'rgba(0,0,0,0.1)';
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="sg-grid-cell flex flex-col items-center justify-center gap-3 py-7 px-2"
                  style={{
                    borderRight: (i < 8) ? '1px solid rgba(0,0,0,0.06)' : 'none',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = glow.replace('0.35', '0.08');
                    el.style.boxShadow = `0 0 20px ${glow}, 0 8px 24px ${glow.replace('0.35', '0.15')}`;
                    el.style.transform = 'translateY(-4px) scale(1.03)';
                    const icon = el.querySelector('span') as HTMLElement;
                    if (icon) icon.style.transform = 'scale(1.15)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'transparent';
                    el.style.boxShadow = 'none';
                    el.style.transform = 'translateY(0) scale(1)';
                    const icon = el.querySelector('span') as HTMLElement;
                    if (icon) icon.style.transform = 'scale(1)';
                  }}
                >
                  <span className={`w-12 h-12 rounded-2xl ${s.iconBg} text-white flex items-center justify-center`}>
                    {s.icon}
                  </span>
                  <span className="text-xs font-semibold text-center leading-tight" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {s.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
