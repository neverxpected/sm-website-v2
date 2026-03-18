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
    href: "/services/ai-integrations",
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    label: "Custom AI Solutions",
    href: "/services/custom-ai",
    iconBg: "bg-purple-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-12 lg:py-16 px-6 lg:px-8" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-black mb-4" style={{ color: '#111827' }}>
            What We <span style={{ color: '#000000' }}>Do Best</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#6B7280' }}>
            Two powerhouse service lines built to grow your business predictably.
          </p>
        </div>

        {/* Dark container on mobile only */}
        <div>
          {/* Two big cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* ── Paid Advertising Card ─────────────────────── */}
            <div className="reveal rounded-3xl p-8 flex flex-col gap-6"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
              }}>
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #059669)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black" style={{ color: '#111827' }}>Paid Advertising</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#2563EB' }}>Meta · Google · TikTok · Bing</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>
                We run high-ROI ad campaigns across every major platform — turning ad spend into booked clients, leads, and real revenue for service-based businesses.
              </p>

              <hr style={{ borderColor: 'rgba(0,0,0,0.08)' }} />

              {/* Platform pills */}
              <div className="grid grid-cols-2 gap-3">
                {paidPlatforms.map((p) => (
                  <Link key={p.href} href={p.href}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-105"
                    style={{ background: '#F3F4F6', border: '1px solid rgba(0,0,0,0.1)', color: '#374151' }}>
                    <span className={`w-6 h-6 rounded-lg ${p.iconBg} text-white flex items-center justify-center shrink-0`}>
                      {p.icon}
                    </span>
                    {p.label}
                  </Link>
                ))}
              </div>


            </div>

            {/* ── AI Automation Card ────────────────────────── */}
            <div className="reveal reveal-delay-100 rounded-3xl p-8 flex flex-col gap-6"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
              }}>
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black" style={{ color: '#111827' }}>AI Automation</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7C3AED' }}>Receptionist · Integrations · Lead Nurturing</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>
                Let AI handle the follow-up, booking, and outreach so your team can focus on closing. Our automation systems work 24/7 to qualify and convert leads automatically.
              </p>

              <hr style={{ borderColor: 'rgba(0,0,0,0.08)' }} />

              {/* Platform pills */}
              <div className="grid grid-cols-2 gap-3">
                {aiPlatforms.map((p) => (
                  <Link key={p.href} href={p.href}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-105"
                    style={{ background: '#F3F4F6', border: '1px solid rgba(0,0,0,0.1)', color: '#374151' }}>
                    <span className={`w-6 h-6 rounded-lg ${p.iconBg} text-white flex items-center justify-center shrink-0`}>
                      {p.icon}
                    </span>
                    {p.label}
                  </Link>
                ))}
              </div>


            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
