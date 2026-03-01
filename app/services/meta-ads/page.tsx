import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meta Ads — Precision Facebook & Instagram Advertising",
  description:
    "Switch Media builds high-performance Facebook and Instagram engines that convert passive scrollers into predictable revenue. Specialists in scaling high-ticket aesthetics, healthcare, and wellness brands.",
};

const caseStudies = [
  {
    client: "The Oaks Plastic Surgery",
    location: "Houston, TX",
    niche: "Plastic Surgery",
    duration: "2.5+ Years",
    stat: "4,300+",
    statLabel: "Inquiries Generated",
    services: ["Liposuction", "Breast Implants", "Tummy Tucks", "Semaglutide"],
  },
  {
    client: "Radiant Med Spa",
    location: "Olathe, KS",
    niche: "Med Spa",
    duration: "4+ Years",
    stat: "$700k+",
    statLabel: "Added Revenue",
    services: ["Botox", "Lip Filler", "Hydrafacials", "Microneedling"],
  },
  {
    client: "Illuminate Heights Fitness",
    location: "Houston, TX",
    niche: "Fitness",
    duration: "2.5+ Years",
    stat: "2,800+",
    statLabel: "Inquiries Generated",
    services: ["Memberships", "Limited Time Specials", "Private Training"],
  },
];

const capabilities = [
  {
    title: "Advanced Targeting Architecture",
    description:
      "Custom audience stacks built from first-party data, lookalikes, and behavioral signals. We layer interest, intent, and retargeting pools to minimize wasted spend and maximize qualified reach.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Creative Strategy & Testing",
    description:
      "We develop and test ad creative at volume. Static, video, and UGC formats are cycled through structured A/B frameworks to identify the highest-converting angles at every funnel stage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9.75l-3 3-1.5-1.5" />
      </svg>
    ),
  },
  {
    title: "Technical Conversion Tracking (CAPI)",
    description:
      "Server-side Conversions API implementation paired with pixel-based tracking to recover signal lost to iOS restrictions and ad blockers. Full attribution visibility across every conversion event.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
];

export default function MetaAdsPage() {
  return (
    <main className="min-h-screen text-white" style={{ background: '#0A0F1C' }}>

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,45,120,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(155,48,255,0.1) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.25)', color: '#FF2D78' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Meta Advertising
          </div>

          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1] mb-8 text-white">
            Precision Meta Advertising<br />
            <span style={{
              background: 'linear-gradient(90deg, #FF2D78, #9B30FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>for High-Ticket Brands.</span>
          </h1>

          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
            style={{ color: 'rgba(240,244,255,0.55)' }}>
            We build high-performance Facebook and Instagram engines that convert passive scrollers into predictable revenue. We specialize in scaling high-ticket aesthetics, healthcare, and wellness brands globally.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)', boxShadow: '0 0 30px rgba(255,45,120,0.35)' }}
          >
            Book a Strategy Audit
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Case Study Data */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(255,45,120,0.8)' }}>
              Verified Client Results
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              Numbers that close.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {caseStudies.map((s) => (
              <div key={s.client} className="p-8 rounded-2xl flex flex-col gap-4"
                style={{ background: 'rgba(255,45,120,0.06)', border: '1px solid rgba(255,45,120,0.15)' }}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgba(240,244,255,0.35)' }}>
                    {s.niche} &middot; {s.location}
                  </p>
                  <p className="text-sm font-bold text-white">{s.client}</p>
                </div>
                <div>
                  <p className="text-4xl font-black"
                    style={{ background: 'linear-gradient(90deg, #FF2D78, #9B30FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {s.stat}
                  </p>
                  <p className="text-xs font-semibold mt-1" style={{ color: 'rgba(240,244,255,0.45)' }}>
                    {s.statLabel}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(155,48,255,0.15)', color: '#9B30FF', border: '1px solid rgba(155,48,255,0.25)' }}>
                  {s.duration}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  {s.services.map((svc) => (
                    <span key={svc} className="text-xs px-2.5 py-0.5 rounded-full"
                      style={{ color: 'rgba(240,244,255,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 lg:px-8 pb-24" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto pt-24">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(155,48,255,0.8)' }}>
              Core Capabilities
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              What we execute.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="p-8 rounded-2xl flex flex-col gap-5"
                style={{ background: 'rgba(13,21,38,0.6)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(16px)' }}>
                <span className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(155,48,255,0.15)', color: '#9B30FF' }}>
                  {c.icon}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white mb-3">{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 lg:px-8 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-12 rounded-3xl" style={{ background: 'rgba(255,45,120,0.06)', border: '1px solid rgba(255,45,120,0.15)' }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: 'rgba(255,45,120,0.8)' }}>
              Ready to Scale
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Start with a Strategy Audit.
            </h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>
              We review your current ad account, identify revenue leaks, and map a path to scalable ROAS. No obligation.
            </p>
            <Link
              href="https://calendly.com/switchmedia/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)', boxShadow: '0 0 30px rgba(255,45,120,0.35)' }}
            >
              Book a Strategy Audit
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
