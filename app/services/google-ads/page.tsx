import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Ads — High-Intent Search and Performance Advertising",
  description:
    "Switch Media architects Google Ads ecosystems that capture buyers at the exact moment of intent. Search, LSA, Performance Max, and full conversion attribution.",
};

const services = [
  {
    title: "Search and Local Service Ads (LSA)",
    description:
      "We build keyword architectures that intercept buyers at peak intent. LSA campaigns are structured to earn Google Guarantee badge placement, driving verified call volume directly to your business with pay-per-lead pricing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803z" />
      </svg>
    ),
  },
  {
    title: "Performance Max and Display",
    description:
      "Performance Max campaigns are configured with precise audience signals, asset group segmentation, and conversion goals to drive Google's AI toward revenue outcomes. Display retargeting keeps your brand in front of high-value prospects across the web.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Conversion Tracking and Attribution",
    description:
      "Every campaign is wired with enhanced conversion tracking via Google Tag Manager. Phone calls, form fills, purchases, and micro-conversions are all measured and fed back into the bidding algorithm for continuous performance improvement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const technical = [
  {
    title: "Quality Score Engineering",
    description:
      "Ad relevance, expected CTR, and landing page experience are optimized in tandem to drive Quality Scores above 7. Higher scores lower cost-per-click and improve ad rank without increasing spend.",
  },
  {
    title: "Negative Keyword Mapping",
    description:
      "Systematic negative keyword lists are built at campaign and ad group level to block irrelevant traffic. This protects budget, improves conversion rates, and sharpens the signal data sent to Google's bidding system.",
  },
  {
    title: "Strategic Bid Management",
    description:
      "Bidding strategies are selected and adjusted based on campaign maturity and conversion volume. We move between manual CPC, Target CPA, and Target ROAS intelligently as campaigns accumulate sufficient data to support automation.",
  },
];

const process = [
  {
    step: "01",
    title: "Market Audit",
    description:
      "We analyze your competitive landscape, existing account structure, keyword opportunity, and current spend efficiency. This produces a clear baseline and identifies the highest-priority revenue gaps to address.",
  },
  {
    step: "02",
    title: "Campaign Infrastructure",
    description:
      "Campaigns are built from a clean structure: segmented ad groups, tightly themed keyword clusters, dedicated landing pages, and full conversion tracking implementation before a single dollar is spent.",
  },
  {
    step: "03",
    title: "Continuous Optimization",
    description:
      "We operate on a weekly optimization cadence: search term reviews, bid adjustments, A/B testing of ad copy, quality score monitoring, and audience layer refinement. Performance compounds over time through structured iteration.",
  },
];

export default function GoogleAdsPage() {
  return (
    <main className="min-h-screen text-white" style={{ background: '#0A0F1C' }}>

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(66,133,244,0.1) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(155,48,255,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(66,133,244,0.1)', border: '1px solid rgba(66,133,244,0.25)', color: '#4285F4' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Google Advertising
          </div>

          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1] mb-8 text-white">
            High-Intent Google Search<br />
            <style>{`
              @keyframes googleAdsShimmer {
                0%   { background-position: 200% center; }
                100% { background-position: -200% center; }
              }
            `}</style>
            <span style={{
              background: 'linear-gradient(90deg, #4285F4, #9B30FF, #4285F4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
              animation: 'googleAdsShimmer 4s linear infinite',
              display: 'inline-block',
            }}>and Performance Advertising.</span>
          </h1>

          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
            style={{ color: 'rgba(240,244,255,0.55)' }}>
            We architect Google Ads ecosystems that capture buyers at the exact moment of intent. Our systems are designed to dominate search rankings and maximize conversion value through technical precision.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #4285F4, #9B30FF)', boxShadow: '0 0 30px rgba(66,133,244,0.35)' }}
          >
            Book a Strategy Call
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
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(66,133,244,0.8)' }}>
              Service Coverage
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              What we run.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-8 rounded-2xl flex flex-col gap-5"
                style={{ background: 'rgba(66,133,244,0.06)', border: '1px solid rgba(66,133,244,0.15)' }}>
                <span className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(66,133,244,0.15)', color: '#4285F4' }}>
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
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(155,48,255,0.8)' }}>
              Technical Execution
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              How we protect your spend.
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
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(66,133,244,0.8)' }}>
              Our Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              From audit to results.
            </h2>
          </div>

          <div className="flex flex-col gap-0">
            {process.map((p, i) => (
              <div key={p.step} className="flex gap-8 pb-12 relative">
                {i < process.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px" style={{ background: 'rgba(66,133,244,0.2)' }} />
                )}
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-sm z-10"
                  style={{ background: 'rgba(66,133,244,0.15)', border: '1px solid rgba(66,133,244,0.3)', color: '#4285F4' }}>
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
          <div className="p-12 rounded-3xl" style={{ background: 'rgba(66,133,244,0.06)', border: '1px solid rgba(66,133,244,0.15)' }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: 'rgba(66,133,244,0.8)' }}>
              Ready to Capture Intent
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Start with a Google Ads Audit.
            </h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>
              We review your current account structure, identify wasted spend, and map a path to scalable search dominance. No obligation.
            </p>
            <Link
              href="https://calendly.com/switchmedia/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #4285F4, #9B30FF)', boxShadow: '0 0 30px rgba(66,133,244,0.35)' }}
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
