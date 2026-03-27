import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microsoft Advertising — High-Efficiency Bing Search and Audience Ads",
  description: "Switch Media architects Microsoft Advertising systems that capture high-intent users across Bing Search and the Microsoft Audience Network. Professional audiences, LinkedIn data integration, and full attribution.",
};

const services = [
  { title: "Search and Audience Network", description: "Microsoft Search campaigns are structured to capture high-intent queries across Bing, Yahoo, and DuckDuckGo simultaneously. The Microsoft Audience Network extends reach to native placements across MSN, Outlook, and Microsoft Edge at lower CPCs than comparable Google inventory." },
  { title: "LinkedIn Profile Targeting", description: "Microsoft Advertising is the only search platform with direct LinkedIn profile data integration. We layer job function, industry, company size, and seniority targeting onto search campaigns to reach professional decision-makers with precision that no other search platform can match." },
  { title: "Cross-Platform Attribution", description: "Microsoft campaigns are integrated with your existing Google and Meta attribution frameworks. We map the full customer journey across all paid channels to identify where Microsoft Advertising contributes incremental revenue and optimize budget allocation accordingly." },
];

const technical = [
  { title: "Import Optimization", description: "Google Ads campaigns are imported into Microsoft Advertising as a baseline, then restructured for the Bing ecosystem. Bid adjustments, match types, and ad copy are recalibrated to account for differences in search volume distribution, audience demographics, and platform-specific quality scoring." },
  { title: "Universal Event Tracking (UET)", description: "Microsoft's UET tag is deployed across all tracked pages to capture conversion events, page visits, and custom goals. Conversion data feeds directly into automated bidding strategies, enabling the platform's algorithm to optimize toward revenue outcomes rather than clicks." },
  { title: "Audience Intelligence", description: "In-market audiences, remarketing lists, and customer match segments are applied at campaign and ad group level. Microsoft's audience data skews toward older, higher-income demographics — we structure targeting to leverage this advantage for high-ticket and B2B offers." },
];

const process = [
  { step: "01", title: "Audience and Professional Audit", description: "We assess your existing customer data, identify the professional attributes of your highest-value segments, and evaluate competitive search presence on Bing. This determines whether LinkedIn targeting, in-market audiences, or standard search should anchor the campaign structure." },
  { step: "02", title: "System Infrastructure", description: "UET tag installation, conversion goal configuration, campaign architecture, and LinkedIn audience layer setup are completed before launch. If importing from Google Ads, the account is cleaned and reconfigured to eliminate waste carried over from the source account." },
  { step: "03", title: "Refinement and Scaling", description: "Weekly optimization covers search term analysis, bid adjustments by device and audience segment, ad copy testing, and negative keyword expansion. As the algorithm accumulates conversion data, bidding transitions from manual to automated strategies tied to target CPA or ROAS." },
];

const MINT = '#2fe8a2';
const SHIMMER = `@keyframes daShimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } } .da-shimmer { background: linear-gradient(90deg,#2fe8a2,#5fffc2,#2fe8a2); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; background-size:200% auto; animation:daShimmer 4s linear infinite; display:inline-block; padding-bottom:0.1em; }`;

export default function DigitalAdsPage() {
  return (
    <main className="relative min-h-screen text-white" style={{ background: '#000000' }}>
      <style>{SHIMMER}</style>
      <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(47,232,162,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,232,162,0.06) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(47,232,162,0.1) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(47,232,162,0.07) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]" style={{ background: 'rgba(47,232,162,0.1)', border: '1px solid rgba(47,232,162,0.3)', color: MINT }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" /> Microsoft Advertising
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.1] mb-8 text-white">
            High-Efficiency Microsoft<br /><span className="da-shimmer lg:text-[46px]">Advertising and Search.</span>
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12" style={{ color: 'rgba(240,244,255,0.55)' }}>
            We architect Microsoft Advertising systems that capture high-intent users across the Bing Search and Microsoft Audience Networks. Our strategy focuses on reaching professional audiences with higher purchasing power through technical precision and exclusive data integration.
          </p>
          <div className="relative inline-flex items-center justify-center">
            <span className="absolute -inset-[4px] rounded-[16px]" style={{ background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)', backgroundSize: '300% 300%', animation: 'daShimmer 3s linear infinite' }} />
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
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-12">How we build the system.</h2>
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
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-12">From audit to results.</h2>
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
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: MINT }}>Ready to Capture Professional Audiences</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Start with a Microsoft Ads Audit.</h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>We review your current search presence on Bing, assess LinkedIn targeting opportunity, and identify where Microsoft Advertising can deliver incremental revenue at lower cost. No obligation.</p>
            <div className="relative inline-flex items-center justify-center">
              <span className="absolute -inset-[4px] rounded-[16px]" style={{ background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)', backgroundSize: '300% 300%', animation: 'daShimmer 3s linear infinite' }} />
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