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
      "It's always important to dial in properly tracking and attribution. Whether you're looking for more Phone calls, form fills or purchases we'll check your setup to give you a clear picture of what is and isn't working so your campaign runs smoothly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const technical = [
  {
    title: "Scores That Save You Money",
    description:
      "We optimize ad relevance, expected CTR, and landing page experience to push Quality Scores above 7. Higher scores mean lower cost-per-click and better ad placement without spending more.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Blocking What Wastes Budget",
    description:
      "We build systematic negative keyword lists at campaign and ad group level to stop irrelevant clicks before they happen. Every blocked search term is money that stays in your account.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Bidding That Gets Smarter Over Time",
    description:
      "We move between manual CPC, Target CPA, and Target ROAS as campaigns mature and data accumulates. The strategy evolves with your account so you're never stuck on settings that made sense six months ago.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const process = [
  {
    step: "01",
    title: "We Audit What's Actually Happening",
    description:
      "We look at your competitive landscape, existing account structure, keyword opportunities, and where your current budget is being wasted. You get a clear picture of what's broken and what it would take to fix it.",
  },
  {
    step: "02",
    title: "We Build the Right Foundation",
    description:
      "Clean campaign structure, tightly themed keyword groups, dedicated landing pages, and full conversion tracking set up before a single dollar of your budget is spent. We don't launch until everything is right.",
  },
  {
    step: "03",
    title: "We Optimize Every Single Week",
    description:
      "Search term reviews, bid adjustments, ad copy testing, quality score monitoring, audience refinement. We don't set it and forget it. Every week the account gets better and your cost per lead goes down.",
  },
];

export default function GoogleAdsPage() {
  return (
    <main className="relative min-h-screen text-white" style={{ background: '#0A0F1C' }}>

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

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

          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1] mb-8 text-white">
            When someone searches on Google,{' '}
            <style>{`
              @keyframes googleAdsShimmer {
                0%   { background-position: 200% center; }
                100% { background-position: -200% center; }
              }
            `}</style>
            <span className="lg:text-[46px]" style={{
              background: 'linear-gradient(90deg, #4285F4, #9B30FF, #4285F4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
              animation: 'googleAdsShimmer 4s linear infinite',
              display: 'inline-block',
              paddingBottom: '0.1em',
            }}>Are You the First Thing They See?</span>
          </h1>

          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
            style={{ color: 'rgba(240,244,255,0.55)' }}>
            If not you&apos;re handing ready-to-buy customers directly to your competitors. Google Ads done right puts you in front of people who are already looking for exactly what you offer, at the exact moment they&apos;re ready to spend.
          </p>

          <Link
            href="/strategy-call"
            className="inline-flex items-center justify-center px-6 sm:px-10 py-4 text-white font-bold text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #4285F4, #9B30FF)', boxShadow: '0 0 30px rgba(66,133,244,0.35)' }}
          >
            See If Google Ads Is Right for You &rarr;
          </Link>
          <p className="text-sm mt-4" style={{ color: 'rgba(240,244,255,0.4)' }}>
            Free audit. We&apos;ll tell you honestly what we see in your market and whether Google is the right channel right now.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
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
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(155,48,255,0.8)' }}>
              What We Run
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
              How We Actually Protect Your Budget.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>
              Most Google Ads budgets have money leaking out of them right now. Here&apos;s how we find it and stop it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {technical.map((t) => (
              <div key={t.title} className="p-8 rounded-2xl flex flex-col gap-5"
                style={{ background: 'rgba(13,21,38,0.6)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(16px)' }}>
                <span className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(155,48,255,0.15)', color: '#9B30FF' }}>
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
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(66,133,244,0.8)' }}>
              From Audit to Results
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
              How We Get Your Google Ads Working.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>
              Three steps. No wasted spend at the start. No guessing in the middle. No mystery about what&apos;s working at the end.
            </p>
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
          <div className="p-6 sm:p-12 rounded-3xl" style={{ background: 'rgba(66,133,244,0.06)', border: '1px solid rgba(66,133,244,0.15)' }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: 'rgba(66,133,244,0.8)' }}>
              Your Competitors Are Already Here
            </p>
            <h2 className="text-2xl lg:text-4xl font-black text-white mb-4">
              Your Competitors Are Showing Up on Google Right Now.<br /> Are You?
            </h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>
              We&apos;ll look at your current Google presence, identify exactly where budget is being wasted, and tell you what we&apos;d do differently. No obligation. No pitch. Just an honest look at where you stand.
            </p>
            <Link
              href="/strategy-call"
              className="inline-flex items-center justify-center px-6 sm:px-10 py-4 text-white font-bold text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #4285F4, #9B30FF)', boxShadow: '0 0 30px rgba(66,133,244,0.35)' }}
            >
              Get a Free Google Ads Audit &rarr;
            </Link>
            <p className="text-sm mt-4" style={{ color: 'rgba(240,244,255,0.4)' }}>
              We look at your real account data and tell you exactly what we&apos;d fix first.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
