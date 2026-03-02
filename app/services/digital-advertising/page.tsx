import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microsoft Advertising — High-Efficiency Bing Search and Audience Ads",
  description:
    "Switch Media architects Microsoft Advertising systems that capture high-intent users across Bing Search and the Microsoft Audience Network. Professional audiences, LinkedIn data integration, and full attribution.",
};

const services = [
  {
    title: "Search and Audience Network",
    description:
      "Microsoft Search campaigns are structured to capture high-intent queries across Bing, Yahoo, and DuckDuckGo simultaneously. The Microsoft Audience Network extends reach to native placements across MSN, Outlook, and Microsoft Edge at lower CPCs than comparable Google inventory.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn Profile Targeting",
    description:
      "Microsoft Advertising is the only search platform with direct LinkedIn profile data integration. We layer job function, industry, company size, and seniority targeting onto search campaigns to reach professional decision-makers with precision that no other search platform can match.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Cross-Platform Attribution",
    description:
      "Microsoft campaigns are integrated with your existing Google and Meta attribution frameworks. We map the full customer journey across all paid channels to identify where Microsoft Advertising contributes incremental revenue and optimize budget allocation accordingly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

const technical = [
  {
    title: "Import Optimization",
    description:
      "Google Ads campaigns are imported into Microsoft Advertising as a baseline, then restructured for the Bing ecosystem. Bid adjustments, match types, and ad copy are recalibrated to account for differences in search volume distribution, audience demographics, and platform-specific quality scoring.",
  },
  {
    title: "Universal Event Tracking (UET)",
    description:
      "Microsoft's UET tag is deployed across all tracked pages to capture conversion events, page visits, and custom goals. Conversion data feeds directly into automated bidding strategies, enabling the platform's algorithm to optimize toward revenue outcomes rather than clicks.",
  },
  {
    title: "Audience Intelligence",
    description:
      "In-market audiences, remarketing lists, and customer match segments are applied at campaign and ad group level. Microsoft's audience data skews toward older, higher-income demographics — we structure targeting to leverage this advantage for high-ticket and B2B offers.",
  },
];

const process = [
  {
    step: "01",
    title: "Audience and Professional Audit",
    description:
      "We assess your existing customer data, identify the professional attributes of your highest-value segments, and evaluate competitive search presence on Bing. This determines whether LinkedIn targeting, in-market audiences, or standard search should anchor the campaign structure.",
  },
  {
    step: "02",
    title: "System Infrastructure",
    description:
      "UET tag installation, conversion goal configuration, campaign architecture, and LinkedIn audience layer setup are completed before launch. If importing from Google Ads, the account is cleaned and reconfigured to eliminate waste carried over from the source account.",
  },
  {
    step: "03",
    title: "Refinement and Scaling",
    description:
      "Weekly optimization covers search term analysis, bid adjustments by device and audience segment, ad copy testing, and negative keyword expansion. As the algorithm accumulates conversion data, bidding transitions from manual to automated strategies tied to target CPA or ROAS.",
  },
];

export default function DigitalAdsPage() {
  return (
    <main className="min-h-screen text-white" style={{ background: '#0A0F1C' }}>

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,120,212,0.1) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(155,48,255,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(0,120,212,0.1)', border: '1px solid rgba(0,120,212,0.25)', color: '#0078D4' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Microsoft Advertising
          </div>

          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1] mb-8 text-white">
            High-Efficiency Microsoft<br />
            <style>{`
              @keyframes digitalAdsShimmer {
                0%   { background-position: 200% center; }
                100% { background-position: -200% center; }
              }
            `}</style>
            <span style={{
              background: 'linear-gradient(90deg, #0078D4, #9B30FF, #0078D4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
              animation: 'digitalAdsShimmer 4s linear infinite',
              display: 'inline-block',
            }}>Advertising and Search.</span>
          </h1>

          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
            style={{ color: 'rgba(240,244,255,0.55)' }}>
            We architect Microsoft Advertising systems that capture high-intent users across the Bing Search and Microsoft Audience Networks. Our strategy focuses on reaching professional audiences with higher purchasing power through technical precision and exclusive data integration.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #0078D4, #9B30FF)', boxShadow: '0 0 30px rgba(0,120,212,0.35)' }}
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
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(0,120,212,0.8)' }}>
              Service Coverage
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              What we run.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-8 rounded-2xl flex flex-col gap-5"
                style={{ background: 'rgba(0,120,212,0.06)', border: '1px solid rgba(0,120,212,0.15)' }}>
                <span className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(0,120,212,0.15)', color: '#0078D4' }}>
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
              How we build the system.
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
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(0,120,212,0.8)' }}>
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
                  <div className="absolute left-6 top-14 bottom-0 w-px" style={{ background: 'rgba(0,120,212,0.2)' }} />
                )}
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-sm z-10"
                  style={{ background: 'rgba(0,120,212,0.15)', border: '1px solid rgba(0,120,212,0.3)', color: '#0078D4' }}>
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
          <div className="p-12 rounded-3xl" style={{ background: 'rgba(0,120,212,0.06)', border: '1px solid rgba(0,120,212,0.15)' }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: 'rgba(0,120,212,0.8)' }}>
              Ready to Capture Professional Audiences
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Start with a Microsoft Ads Audit.
            </h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>
              We review your current search presence on Bing, assess LinkedIn targeting opportunity, and identify where Microsoft Advertising can deliver incremental revenue at lower cost. No obligation.
            </p>
            <Link
              href="https://calendly.com/switchmedia/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #0078D4, #9B30FF)', boxShadow: '0 0 30px rgba(0,120,212,0.35)' }}
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