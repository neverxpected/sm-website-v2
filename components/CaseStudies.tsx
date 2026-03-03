"use client";

import Link from "next/link";

const cases = [
  {
    category: "Med Spa",
    name: "Radiant with Rebecca",
    description: "Scaled monthly bookings with Meta Ads + AI-powered client follow-up sequences that brought patients back consistently.",
    href: "/results",
    photo: "/images/client-reviews/Radiant Shoot August 2025 (79) (1).webp",
    overlayColor: "rgba(255,45,120,0.72)",
    overlayColorEnd: "rgba(155,48,255,0.65)",
    accentHex: "#FF2D78",
    stats: [
      { emoji: "📈", label: "Revenue Increase", value: "300%" },
      { emoji: "👤", label: "New Patients/Month", value: "180+" },
      { emoji: "💲", label: "Cost Per Lead", value: "$12" },
    ],
  },
  {
    category: "Fitness",
    name: "illumiNate Heights Fitness",
    description: "Generated thousands of qualified leads in 90 days using Google Ads + AI nurturing sequences tailored for fitness buyers.",
    href: "/results",
    photo: "/images/client-reviews/nate bran illuminate heights fitness.webp",
    overlayColor: "rgba(0,200,255,0.72)",
    overlayColorEnd: "rgba(0,100,220,0.65)",
    accentHex: "#00C8FF",
    stats: [
      { emoji: "👥", label: "Leads Generated", value: "2,400+" },
      { emoji: "📈", label: "ROAS", value: "5.8x" },
      { emoji: "💪", label: "Membership Growth", value: "156%" },
    ],
  },
  {
    category: "Real Estate",
    name: "Makaan Investment Group",
    description: "Drove qualified investor leads through targeted digital campaigns and automated lead qualification that reduced response time to under 30 seconds.",
    href: "/results",
    photo: "/images/client-reviews/Tracey Tyler - Makaan Investments.webp",
    overlayColor: "rgba(130,60,255,0.72)",
    overlayColorEnd: "rgba(80,0,200,0.65)",
    accentHex: "#9B30FF",
    stats: [
      { emoji: "💲", label: "Revenue Generated", value: "$1.2M+" },
      { emoji: "📈", label: "Lead Quality Score", value: "94%" },
      { emoji: "⏱️", label: "Response Time", value: "<30s" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden" style={{ background: '#0A0F1C' }}>
      {/* Ambient orbs */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,45,120,0.07) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)', color: '#00E5FF' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Client Results
          </div>
          <style>{`
            @keyframes realGrowthShimmer {
              0%   { background-position: 200% center; }
              100% { background-position: -200% center; }
            }
          `}</style>
          <h2 className="reveal reveal-delay-100 text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            Real Results.{' '}
            <span style={{ background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #FF2D78)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', backgroundSize: '200% auto', animation: 'realGrowthShimmer 4s linear infinite', display: 'inline-block' }}>
              Real Growth.
            </span>
          </h2>
          <p className="reveal reveal-delay-200 text-base max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>
            See how we&apos;ve helped service-based businesses generate predictable leads and scale revenue with our proven systems.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <Link
              key={c.name}
              href={c.href}
              className={`reveal reveal-delay-${(i + 1) * 100} group flex flex-col rounded-2xl overflow-hidden transition-all duration-400`}
              style={{ background: 'rgba(13,21,38,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)';
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px -10px rgba(0,0,0,0.7)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Photo + overlay area */}
              <div className="relative h-56 overflow-hidden">

                {/* Real client photo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.photo}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Colorful overlay — fades out on hover to reveal the photo */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{
                    background: `linear-gradient(135deg, ${c.overlayColor}, ${c.overlayColorEnd})`,
                  }}
                />

                {/* Persistent bottom fade so card content blends in */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2"
                  style={{ background: 'linear-gradient(to top, rgba(13,21,38,1), transparent)' }}
                />

                {/* Category badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', color: 'rgba(240,244,255,0.9)', border: '1px solid rgba(255,255,255,0.15)' }}>
                    {c.category}
                  </span>
                </div>

                {/* Arrow icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-bold px-2.5 py-1.5 rounded-full"
                    style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', color: 'white', border: '1px solid rgba(255,255,255,0.15)' }}>
                    ↗
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-black text-white">{c.name}</h3>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                    className="w-4 h-4 shrink-0 mt-0.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: 'rgba(255,255,255,0.3)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>{c.description}</p>

                {/* Stats */}
                <div className="flex flex-col gap-2 mt-auto">
                  {c.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between rounded-xl px-3 py-2.5"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs"
                          style={{ background: `${c.accentHex}30`, border: `1px solid ${c.accentHex}50` }}>
                          {stat.emoji}
                        </span>
                        <span className="text-xs" style={{ color: 'rgba(240,244,255,0.55)' }}>{stat.label}</span>
                      </div>
                      <span className="text-sm font-black text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-400 text-center mt-14">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)', boxShadow: '0 0 30px rgba(255,45,120,0.3)' }}
          >
            View All Client Results
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
