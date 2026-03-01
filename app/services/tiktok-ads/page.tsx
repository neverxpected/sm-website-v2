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
  },
  {
    title: "Interest and Behavioral Targeting",
    description:
      "Audience layers are built using interest categories, hashtag behaviors, creator followers, and lookalike pools sourced from your highest-value customer data. Targeting is refined weekly based on performance data across all active ad groups.",
  },
  {
    title: "Automated Creative Testing",
    description:
      "Multiple creative variants are deployed simultaneously with structured naming conventions for clean reporting. Underperforming assets are paused on defined cost-per-result thresholds. Winners are iterated and scaled systematically.",
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
    <main className="min-h-screen text-white" style={{ background: '#0A0F1C' }}>

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

          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1] mb-8 text-white">
            Scalable Short-Form<br />
            <span style={{
              background: 'linear-gradient(90deg, #FF2D78, #00E5FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Video Advertising.</span>
          </h1>

          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
            style={{ color: 'rgba(240,244,255,0.55)' }}>
            We deploy high-impact TikTok campaigns designed to leverage the platform's unique algorithm for rapid customer acquisition. Our systems bridge the gap between creative content and technical performance.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #FF2D78, #00E5FF)', boxShadow: '0 0 30px rgba(255,45,120,0.35)' }}
          >
            Book a Strategy Audit
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Service Sections */}
      <section className="px-6 lg:px-8 pb-24" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto pt-24">
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
      <section className="px-6 lg:px-8 pb-24" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto pt-24">
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
              <div key={t.title} className="p-8 rounded-2xl flex flex-col gap-4"
                style={{ background: 'rgba(13,21,38,0.6)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(16px)' }}>
                <h3 className="text-base font-bold text-white">{t.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="px-6 lg:px-8 pb-24" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto pt-24">
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
              href="https://calendly.com/switchmedia/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #FF2D78, #00E5FF)', boxShadow: '0 0 30px rgba(255,45,120,0.35)' }}
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
