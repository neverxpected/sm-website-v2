import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TikTok Ads — Scalable Short-Form Video Advertising",
  description:
    "Switch Media deploys high-impact TikTok campaigns engineered for rapid customer acquisition. Creative-first strategy paired with technical pixel infrastructure and algorithmic optimization.",
};

const services = [
  {
    title: "Creative-First Strategy",
    description:
      "TikTok rewards content that fits natively within the feed. We develop ad concepts built around the platform's content patterns — hook structure, pacing, and visual format are all engineered to maximize view-through rate and drive action before the skip.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m0-3.75h1.5" />
      </svg>
    ),
  },
  {
    title: "Spark Ads and Creator Integration",
    description:
      "Spark Ads allow organic-performing content to be boosted as paid media, preserving social proof and engagement signals. We identify and integrate creator-generated content into paid campaigns to reduce CPMs and improve authenticity at scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: "Advanced Pixel and Events API Tracking",
    description:
      "Server-side Events API implementation runs in parallel with browser pixel tracking. This dual-layer approach recovers conversion signal lost to browser restrictions and ad blockers, giving TikTok's algorithm accurate data to optimize delivery toward real revenue outcomes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
];

const technical = [
  {
    title: "Algorithmic Optimization",
    description:
      "TikTok's algorithm distributes content based on completion rate, engagement signals, and conversion events. We structure campaigns and bidding to feed the algorithm high-quality signals from day one, accelerating exit from the learning phase.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    title: "Interest and Behavioral Targeting",
    description:
      "Audience layers are built using interest categories, hashtag behaviors, creator followers, and lookalike pools sourced from your highest-value customer data. Targeting is refined weekly based on performance data across all active ad groups.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Automated Creative Testing",
    description:
      "Multiple creative variants are deployed simultaneously with structured naming conventions for clean reporting. Underperforming assets are paused on defined cost-per-result thresholds. Winners are iterated and scaled systematically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
];

const process = [
  {
    step: "01",
    title: "Creative Audit",
    description:
      "We review your existing content library, brand voice, and competitive landscape on TikTok. This establishes a creative baseline and identifies the highest-potential content angles to test in initial campaigns.",
  },
  {
    step: "02",
    title: "Technical Deployment",
    description:
      "Pixel installation, Events API configuration, and campaign architecture are built before launch. Ad accounts are structured with clear campaign objectives, audience segmentation, and budget allocation by funnel stage.",
  },
  {
    step: "03",
    title: "Optimization and Scaling",
    description:
      "We operate on a defined weekly review cadence: creative performance analysis, audience refinement, bid strategy adjustments, and new creative iteration. Budgets are scaled on campaigns that clear defined cost-per-result targets.",
  },
];

export default function TikTokAdsPage() {
  return (
    <main className="relative min-h-screen text-white" style={{ background: '#0A0F1C' }}>

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,45,120,0.1) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.25)', color: '#FF2D78' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            TikTok Advertising
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1] mb-8 text-white">
            Scalable Short-Form<br />
            <style>{`
              @keyframes tikTokAdsShimmer {
                0%   { background-position: 200% center; }
                100% { background-position: -200% center; }
              }
            `}</style>
            <span className="lg:text-[46px]" style={{
              background: 'linear-gradient(90deg, #FF2D78, #00E5FF, #FF2D78)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
              animation: 'tikTokAdsShimmer 4s linear infinite',
              display: 'inline-block',
              paddingBottom: '0.1em',
            }}>Video Advertising.</span>
          </h1>

          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
            style={{ color: 'rgba(240,244,255,0.55)' }}>
            We deploy high-impact TikTok campaigns designed to leverage the platform's unique algorithm for rapid customer acquisition. Our systems bridge the gap between creative content and technical performance.
          </p>

          <Link
            href="/strategy-call"
            className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #FF2D78, #00E5FF)', boxShadow: '0 0 30px rgba(255,45,120,0.35)' }}
          >
            Book a Strategy Call
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Service Sections */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(255,45,120,0.8)' }}>
              Service Coverage
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              What we run.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-8 rounded-2xl flex flex-col gap-5"
                style={{ background: 'rgba(255,45,120,0.06)', border: '1px solid rgba(255,45,120,0.15)' }}>
                <span className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(255,45,120,0.15)', color: '#FF2D78' }}>
                  {s.icon}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(0,229,255,0.7)' }}>
              Technical Execution
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              How we engineer performance.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {technical.map((t) => (
              <div key={t.title} className="p-8 rounded-2xl flex flex-col gap-5"
                style={{ background: 'rgba(13,21,38,0.6)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(16px)' }}>
                <span className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(0,229,255,0.15)', color: '#00E5FF' }}>
                  {t.icon}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white mb-3">{t.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(255,45,120,0.8)' }}>
              Our Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              From creative to scale.
            </h2>
          </div>

          <div className="flex flex-col gap-0">
            {process.map((p, i) => (
              <div key={p.step} className="flex gap-8 pb-12 relative">
                {i < process.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px" style={{ background: 'rgba(255,45,120,0.2)' }} />
                )}
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-sm z-10"
                  style={{ background: 'rgba(255,45,120,0.15)', border: '1px solid rgba(255,45,120,0.3)', color: '#FF2D78' }}>
                  {p.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'rgba(240,244,255,0.45)' }}>{p.description}</p>
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
              Start with a TikTok Ads Audit.
            </h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>
              We review your current creative assets, pixel setup, and account structure. We identify what is holding performance back and map a path to scalable acquisition.
            </p>
            <Link
              href="/strategy-call"
              className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #FF2D78, #00E5FF)', boxShadow: '0 0 30px rgba(255,45,120,0.35)' }}
            >
              Book a Strategy Call
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
