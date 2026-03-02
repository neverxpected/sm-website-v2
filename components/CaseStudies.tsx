"use client";

import Link from "next/link";
import { lime } from "@/lib/cyberLime";

const cases = [
  {
    category: "Medical Spa",
    name: "Elite MedSpa",
    description: "Scaled from $80K to $320K monthly revenue with Meta Ads + AI booking system.",
    href: "/our-work",
    overlayColor: "from-pink-500/80 to-rose-600/80",
    imageBg: "bg-gradient-to-br from-pink-900 to-rose-800",
    accentColor: "bg-pink-500",
    stats: [
      { icon: "📈", label: "Revenue Increase", value: "300%" },
      { icon: "👤", label: "New Patients/Month", value: "180+" },
      { icon: "💲", label: "Cost Per Lead", value: "$12" },
    ],
  },
  {
    category: "Fitness Studio",
    name: "Peak Performance Gym",
    description: "Generated 2,400+ qualified leads in 90 days using Google Ads + AI nurturing sequences.",
    href: "/our-work",
    overlayColor: "from-cyan-500/80 to-blue-600/80",
    imageBg: "bg-gradient-to-br from-cyan-900 to-blue-800",
    accentColor: "bg-cyan-500",
    stats: [
      { icon: "👥", label: "Leads Generated", value: "2,400+" },
      { icon: "📈", label: "ROAS", value: "5.8x" },
      { icon: "💲", label: "Membership Growth", value: "156%" },
    ],
  },
  {
    category: "Plastic Surgery",
    name: "Prestige Aesthetics",
    description: "Booked $1.2M in consultations with TikTok awareness + AI qualification system.",
    href: "/our-work",
    overlayColor: "from-violet-500/80 to-purple-700/80",
    imageBg: "bg-gradient-to-br from-violet-900 to-purple-800",
    accentColor: "bg-violet-500",
    stats: [
      { icon: "💲", label: "Consultations Booked", value: "$1.2M" },
      { icon: "📈", label: "Lead Quality Score", value: "94%" },
      { icon: "👤", label: "Response Time", value: "<30s" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden" style={{ background: lime.bg }}>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${lime.glow} 0%, transparent 70%)` }} />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, rgba(163,230,53,0.05) 0%, transparent 70%)` }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(163,230,53,0.08)', border: `1px solid rgba(163,230,53,0.2)`, color: lime.accent }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Case Studies
          </div>
          <h2 className="reveal reveal-delay-100 text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            Real Results.{' '}
            <span style={{ background: lime.gradText, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
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
              style={{ background: lime.card, border: `1px solid ${lime.border}` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(163,230,53,0.28)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px -10px rgba(0,0,0,0.6)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.borderColor = lime.border;
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Image area */}
              <div className="relative h-52 overflow-hidden">
                <div className={`absolute inset-0 ${c.imageBg}`}>
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 12px)'
                  }} />
                </div>
                {/* Neon overlay fades on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${c.overlayColor} transition-opacity duration-500 group-hover:opacity-0`} />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-2/3"
                  style={{ background: 'linear-gradient(to top, rgba(13,21,38,0.95), transparent)' }} />
                {/* Category badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', color: 'rgba(240,244,255,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {c.category}
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
                        <span className={`w-7 h-7 rounded-lg ${c.accentColor} flex items-center justify-center text-xs`}>
                          {stat.icon}
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
            href="/our-work"
            className="inline-flex items-center gap-2 px-8 py-4 text-black text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105"
            style={{ background: lime.grad, boxShadow: `0 0 30px ${lime.glow}` }}
          >
            View All Case Studies
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
