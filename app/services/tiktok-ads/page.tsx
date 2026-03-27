import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TikTok Ads — Scalable Short-Form Video Advertising",
  description:
    "Switch Media deploys high-impact TikTok campaigns engineered for rapid customer acquisition. Creative-first strategy paired with technical pixel infrastructure and algorithmic optimization.",
};

const services = [
  { title: "Creative-First Strategy", description: "TikTok rewards content that fits natively within the feed. We develop ad concepts built around the platform's content patterns — hook structure, pacing, and visual format are all engineered to maximize view-through rate and drive action before the skip." },
  { title: "Spark Ads and Creator Integration", description: "Spark Ads allow organic-performing content to be boosted as paid media, preserving social proof and engagement signals. We identify and integrate creator-generated content into paid campaigns to reduce CPMs and improve authenticity at scale." },
  { title: "Advanced Pixel and Events API Tracking", description: "Server-side Events API implementation runs in parallel with browser pixel tracking. This dual-layer approach recovers conversion signal lost to browser restrictions and ad blockers, giving TikTok's algorithm accurate data to optimize delivery toward real revenue outcomes." },
];

const technical = [
  { title: "Algorithmic Optimization", description: "TikTok's algorithm distributes content based on completion rate, engagement signals, and conversion events. We structure campaigns and bidding to feed the algorithm high-quality signals from day one, accelerating exit from the learning phase." },
  { title: "Interest and Behavioral Targeting", description: "Audience layers are built using interest categories, hashtag behaviors, creator followers, and lookalike pools sourced from your highest-value customer data. Targeting is refined weekly based on performance data across all active ad groups." },
  { title: "Automated Creative Testing", description: "Multiple creative variants are deployed simultaneously with structured naming conventions for clean reporting. Underperforming assets are paused on defined cost-per-result thresholds. Winners are iterated and scaled systematically." },
];

const process = [
  { step: "01", title: "Creative Audit", description: "We review your existing content library, brand voice, and competitive landscape on TikTok. This establishes a creative baseline and identifies the highest-potential content angles to test in initial campaigns." },
  { step: "02", title: "Technical Deployment", description: "Pixel installation, Events API configuration, and campaign architecture are built before launch. Ad accounts are structured with clear campaign objectives, audience segmentation, and budget allocation by funnel stage." },
  { step: "03", title: "Optimization and Scaling", description: "We operate on a defined weekly review cadence: creative performance analysis, audience refinement, bid strategy adjustments, and new creative iteration. Budgets are scaled on campaigns that clear defined cost-per-result targets." },
];

const MINT = '#2fe8a2';
const SHIMMER = `
  @keyframes ttShimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }
  .tt-shimmer { background: linear-gradient(90deg,#2fe8a2,#5fffc2,#2fe8a2); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; background-size:200% auto; animation:ttShimmer 4s linear infinite; display:inline-block; padding-bottom:0.1em; }
`;

export default function TikTokAdsPage() {
  return (
    <main className="relative min-h-screen text-white" style={{ background: '#000000' }}>
      <style>{SHIMMER}</style>
      <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(47,232,162,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,232,162,0.06) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(47,232,162,0.1) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]" style={{ background: 'rgba(47,232,162,0.1)', border: '1px solid rgba(47,232,162,0.3)', color: MINT }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" /> TikTok Advertising
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.1] mb-8 text-white">
            Scalable Short-Form<br /><span className="tt-shimmer lg:text-[46px]">Video Advertising.</span>
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12" style={{ color: 'rgba(240,244,255,0.55)' }}>
            We deploy high-impact TikTok campaigns designed to leverage the platform&apos;s unique algorithm for rapid customer acquisition. Our systems bridge the gap between creative content and technical performance.
          </p>
          <div className="relative inline-flex items-center justify-center">
            <span className="absolute -inset-[4px] rounded-[16px]" style={{ background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)', backgroundSize: '300% 300%', animation: 'ttShimmer 3s linear infinite' }} />
            <Link href="/strategy-call" className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-base transition-all duration-300 hover:scale-105 whitespace-nowrap" style={{ background: '#000000', color: MINT, borderRadius: '0.75rem', border: '1px solid rgba(47,232,162,0.2)' }}>
              Book a Strategy Call &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: MINT }}>Service Coverage</p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-12">What we run.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-8 rounded-2xl flex flex-col gap-4" style={{ background: 'rgba(47,232,162,0.04)', border: '1px solid rgba(47,232,162,0.2)' }}>
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: MINT }}>Technical Execution</p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-12">How we engineer performance.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {technical.map((t) => (
              <div key={t.title} className="p-8 rounded-2xl flex flex-col gap-4" style={{ background: 'rgba(47,232,162,0.03)', border: '1px solid rgba(47,232,162,0.15)' }}>
                <h3 className="text-base font-bold text-white">{t.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: MINT }}>Our Process</p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-12">From creative to scale.</h2>
          <div className="flex flex-col gap-0">
            {process.map((p, i) => (
              <div key={p.step} className="flex gap-8 pb-12 relative">
                {i < process.length - 1 && <div className="absolute left-6 top-14 bottom-0 w-px" style={{ background: 'rgba(47,232,162,0.25)' }} />}
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-sm z-10" style={{ background: MINT, color: '#000000' }}>{p.step}</div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'rgba(240,244,255,0.45)' }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 lg:px-8 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-6 sm:p-12 rounded-3xl" style={{ background: 'rgba(47,232,162,0.04)', border: '1px solid rgba(47,232,162,0.2)', boxShadow: '0 0 40px rgba(47,232,162,0.06)' }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: MINT }}>Ready to Scale</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Start with a TikTok Ads Audit.</h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>We review your current creative assets, pixel setup, and account structure. We identify what is holding performance back and map a path to scalable acquisition.</p>
            <div className="relative inline-flex items-center justify-center">
              <span className="absolute -inset-[4px] rounded-[16px]" style={{ background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)', backgroundSize: '300% 300%', animation: 'ttShimmer 3s linear infinite' }} />
              <Link href="/strategy-call" className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-base transition-all duration-300 hover:scale-105 whitespace-nowrap" style={{ background: '#000000', color: MINT, borderRadius: '0.75rem', border: '1px solid rgba(47,232,162,0.2)' }}>
                Book a Strategy Call &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
