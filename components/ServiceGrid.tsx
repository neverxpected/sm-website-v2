import Link from "next/link";

const services = [
  {
    label: "Meta Ads",
    href: "/services/meta-ads",
    description: "Facebook & Instagram campaigns that convert scrollers into customers with precision targeting.",
    tags: ["Facebook", "Instagram"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    iconBg: "bg-blue-600",
    iconColor: "text-white",
    glow: "hover:shadow-[0_8px_40px_-8px_rgba(37,99,235,0.6)] hover:border-blue-500/40",
  },
  {
    label: "Google Ads",
    href: "/services/google-ads",
    description: "Search, Local & Display campaigns that capture high-intent buyers when they're ready to act.",
    tags: ["Search", "Local", "Display"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
    iconBg: "bg-emerald-500",
    iconColor: "text-white",
    glow: "hover:shadow-[0_8px_40px_-8px_rgba(16,185,129,0.5)] hover:border-emerald-500/40",
  },
  {
    label: "TikTok Ads",
    href: "/services/tiktok-ads",
    description: "Viral-ready creative that reaches new audiences and drives massive awareness at scale.",
    tags: ["TikTok", "Spark Ads"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    ),
    iconBg: "bg-pink-500",
    iconColor: "text-white",
    glow: "hover:shadow-[0_8px_40px_-8px_rgba(236,72,153,0.5)] hover:border-pink-500/40",
  },
  {
    label: "Bing Ads",
    href: "/services/digital-advertising",
    description: "Untapped reach with lower CPCs. Capture professional audiences across Microsoft's ecosystem.",
    tags: ["Search", "Display", "LinkedIn Import"],
    icon: (
      <svg viewBox="0 0 20 24" className="w-5 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="1" width="4" height="22" />
        <polygon points="6,9 18,15 11,23 6,23" />
        <polygon points="6,13 14,15 6,18" opacity="0.35" fill="#000" />
      </svg>
    ),
    iconBg: "bg-orange-500",
    iconColor: "text-white",
    glow: "hover:shadow-[0_8px_40px_-8px_rgba(249,115,22,0.5)] hover:border-orange-500/40",
  },
];

const aiServices = [
  {
    label: "AI Receptionists",
    href: "/services/ai-receptionist",
    description: "Never miss a lead. Our AI handles calls, qualifies prospects, and books appointments 24/7.",
    tags: ["24/7 Availability", "Lead Qualification", "Appointment Booking"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5S10 13.5 13.5 15.5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    iconBg: "bg-violet-600",
    iconColor: "text-white",
    glow: "hover:shadow-[0_8px_40px_-8px_rgba(124,58,237,0.6)] hover:border-violet-500/40",
  },
  {
    label: "AI Integrations",
    href: "/services/ai-system-integration",
    description: "Smart triggers, CRM sync, scheduling automation, and messaging bots that work while you sleep.",
    tags: ["CRM Integration", "Smart Triggers", "Workflow Automation"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    iconBg: "bg-cyan-500",
    iconColor: "text-white",
    glow: "hover:shadow-[0_8px_40px_-8px_rgba(6,182,212,0.5)] hover:border-cyan-500/40",
  },
  {
    label: "AI Lead Nurturing",
    href: "/services/ai-system-integration",
    description: "Predictive engagement and automated follow-ups that turn cold leads into booked clients.",
    tags: ["Predictive Engagement", "Auto Follow-ups", "Smart Sequences"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    iconBg: "bg-pink-500",
    iconColor: "text-white",
    glow: "hover:shadow-[0_8px_40px_-8px_rgba(236,72,153,0.5)] hover:border-pink-500/40",
  },
  {
    label: "Custom AI Solutions",
    href: "/services/ai-system-integration",
    description: "Bespoke automation built for your specific business needs and growth goals.",
    tags: ["Custom Workflows", "API Integrations", "Tailored Solutions"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    iconBg: "bg-violet-500",
    iconColor: "text-white",
    glow: "hover:shadow-[0_8px_40px_-8px_rgba(139,92,246,0.5)] hover:border-violet-500/40",
  },
];

export default function ServiceGrid() {
  return (
    <section className="pt-4 pb-24 px-6 lg:px-8" style={{ background: '#0A0F1C' }}>
      <div className="max-w-7xl mx-auto">

        {/* Paid Ads header */}
        <div className="reveal flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px max-w-xs" style={{ background: 'linear-gradient(to right, transparent, rgba(255,45,120,0.3))' }} />
          <div className="flex items-center gap-2.5 shrink-0 px-4 py-2 rounded-full"
            style={{ background: 'rgba(255,45,120,0.08)', border: '1px solid rgba(255,45,120,0.2)' }}>
            <span className="w-2 h-2 rounded-full" style={{ background: '#FF2D78' }} />
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#FF2D78' }}>Paid Advertising Mastery</span>
          </div>
          <div className="flex-1 h-px max-w-xs" style={{ background: 'linear-gradient(to left, transparent, rgba(255,45,120,0.3))' }} />
        </div>

        {/* 4-column paid ads grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className={`card-neon reveal reveal-delay-${(i + 1) * 100} group p-6 flex flex-col gap-4`}
            >
              <svg className="absolute top-4 right-4 w-3.5 h-3.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: 'rgba(255,255,255,0.2)' }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
              <span className={`w-11 h-11 rounded-xl ${s.iconBg} ${s.iconColor} flex items-center justify-center shrink-0`}>
                {s.icon}
              </span>
              <div>
                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-white transition-colors">{s.label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{s.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs rounded-full px-2.5 py-0.5"
                    style={{ color: 'rgba(240,244,255,0.35)', border: '1px solid rgba(255,255,255,0.08)' }}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* AI Automation header */}
        <div className="reveal flex items-center justify-center gap-4 mt-16 mb-12">
          <div className="flex-1 h-px max-w-xs" style={{ background: 'linear-gradient(to right, transparent, rgba(155,48,255,0.3))' }} />
          <div className="flex items-center gap-2.5 shrink-0 px-4 py-2 rounded-full"
            style={{ background: 'rgba(155,48,255,0.08)', border: '1px solid rgba(155,48,255,0.2)' }}>
            <span className="w-2 h-2 rounded-full" style={{ background: '#9B30FF' }} />
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#9B30FF' }}>AI-Powered Automation</span>
          </div>
          <div className="flex-1 h-px max-w-xs" style={{ background: 'linear-gradient(to left, transparent, rgba(155,48,255,0.3))' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aiServices.map((s, i) => (
            <Link
              key={s.label}
              href={s.href}
              className={`card-neon reveal reveal-delay-${(i + 1) * 100} group p-6 flex flex-col gap-4`}
            >
              <svg className="absolute top-4 right-4 w-3.5 h-3.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: 'rgba(255,255,255,0.2)' }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
              <span className={`w-11 h-11 rounded-xl ${s.iconBg} ${s.iconColor} flex items-center justify-center shrink-0`}>
                {s.icon}
              </span>
              <div>
                <h3 className="text-base font-bold text-white mb-1.5">{s.label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{s.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs rounded-full px-2.5 py-0.5"
                    style={{ color: 'rgba(240,244,255,0.35)', border: '1px solid rgba(255,255,255,0.08)' }}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
