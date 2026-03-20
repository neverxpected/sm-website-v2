import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nextdoor Ads — Hyperlocal Advertising for Service Businesses",
  description:
    "Switch Media builds Nextdoor ad campaigns that put your business in front of the neighbors already looking for what you offer. Hyperlocal targeting for service businesses, healthcare, and home services.",
};

const advantages = [
  {
    title: "Neighborhood-Level Targeting",
    description:
      "Nextdoor lets you target by zip code, neighborhood, and radius in a way no other platform can. We build campaigns that put your business in front of the exact households most likely to become customers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Trust Built Into the Platform",
    description:
      "People on Nextdoor use their real names and verified addresses. Your ads show up alongside trusted neighbor recommendations, not random content. That context makes your message land differently than any other ad platform.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Lower Competition, Lower Costs",
    description:
      "Most businesses haven't figured out Nextdoor yet. That means less competition for attention, lower cost per impression, and a real first-mover advantage in your local market. We help you capitalize on that window before everyone else catches on.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const bestFor = [
  "Med Spas & Dermatology",
  "Plastic Surgery",
  "Dental Practices",
  "HVAC & Plumbing",
  "Pest Control",
  "Gyms & Fitness Studios",
  "Restaurants & Cafés",
  "Home Services",
  "Real Estate",
];

const process = [
  {
    step: "01",
    title: "We Learn Your Service Area",
    description:
      "We map your ideal customer radius, identify the neighborhoods with the highest density of your target demographic, and analyze what your local competitors are doing on the platform.",
  },
  {
    step: "02",
    title: "We Build Campaigns That Feel Local",
    description:
      "Nextdoor ads work best when they feel like a neighbor talking, not a corporation advertising. We write copy and design creative that matches the tone of the platform so your business earns trust, not eye rolls.",
  },
  {
    step: "03",
    title: "We Optimize Weekly",
    description:
      "Neighborhood-level performance data, cost per lead tracking, creative rotation, and audience refinement. Every week the campaigns get sharper and your cost to acquire a customer goes down.",
  },
];

export default function NextdoorAdsPage() {
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
          style={{ background: 'radial-gradient(circle, rgba(0,180,80,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,180,80,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(0,180,80,0.1)', border: '1px solid rgba(0,180,80,0.25)', color: '#00B450' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Nextdoor Advertising
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1] mb-8 text-white">
            Your Neighbors Are Looking for<br />
            <style>{`
              @keyframes nextdoorShimmer {
                0%   { background-position: 200% center; }
                100% { background-position: -200% center; }
              }
            `}</style>
            <span className="lg:text-[46px]" style={{
              background: 'linear-gradient(90deg, #00B450, #00D4AA, #00B450)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
              animation: 'nextdoorShimmer 4s linear infinite',
              display: 'inline-block',
              paddingBottom: '0.1em',
            }}>Exactly What You Offer.</span>
          </h1>

          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
            style={{ color: 'rgba(240,244,255,0.55)' }}>
            Nextdoor is the only platform where your ads show up next to trusted neighbor recommendations, not random content. We build campaigns that reach households within miles of your business, people who are actively looking for local services and already trust the platform they&apos;re reading on.
          </p>

          <Link
            href="/strategy-call"
            className="inline-flex items-center justify-center px-6 sm:px-10 py-4 text-white font-bold text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #00B450, #00D4AA)', boxShadow: '0 0 30px rgba(0,180,80,0.35)' }}
          >
            See If Nextdoor Is Right for You &rarr;
          </Link>
          <p className="text-sm mt-4" style={{ color: 'rgba(240,244,255,0.4)' }}>
            Free strategy call. We&apos;ll tell you if Nextdoor makes sense for your market and service area.
          </p>
        </div>
      </section>

      {/* Best For */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(0,180,80,0.8)' }}>
              Who This Is For
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
              Built for Businesses That Serve Their Neighborhood.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>
              If your customers live within 15 miles of your location, Nextdoor might be the most underused channel in your marketing stack.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {bestFor.map((item) => (
              <div key={item} className="px-5 py-4 rounded-xl text-sm font-semibold text-center"
                style={{ background: 'rgba(0,180,80,0.06)', border: '1px solid rgba(0,180,80,0.15)', color: 'rgba(240,244,255,0.7)' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(0,212,170,0.8)' }}>
              Why Nextdoor Works
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
              An Unfair Advantage Most Businesses Are Ignoring.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>
              While your competitors fight over Facebook and Google, Nextdoor gives you a direct line to the people who live closest to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="p-8 rounded-2xl flex flex-col gap-5"
                style={{ background: 'rgba(0,180,80,0.06)', border: '1px solid rgba(0,180,80,0.15)' }}>
                <span className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(0,180,80,0.15)', color: '#00B450' }}>
                  {a.icon}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white mb-3">{a.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(0,180,80,0.8)' }}>
              How We Do It
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
              How We Get Your Nextdoor Campaigns Working.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>
              Three steps. Hyperlocal from day one. Optimized every week.
            </p>
          </div>

          <div className="flex flex-col gap-0">
            {process.map((p, i) => (
              <div key={p.step} className="flex gap-8 pb-12 relative">
                {i < process.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px" style={{ background: 'rgba(0,180,80,0.2)' }} />
                )}
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-sm z-10"
                  style={{ background: 'rgba(0,180,80,0.15)', border: '1px solid rgba(0,180,80,0.3)', color: '#00B450' }}>
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
        <div className="max-w-5xl mx-auto text-center">
          <div className="p-6 sm:p-12 rounded-3xl" style={{ background: 'rgba(0,180,80,0.06)', border: '1px solid rgba(0,180,80,0.15)' }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: 'rgba(0,180,80,0.8)' }}>
              Your Competitors Haven&apos;t Found This Yet
            </p>
            <h2 className="text-2xl lg:text-4xl font-black text-white mb-4">
              The Neighbors Are Talking. Is Your Business<br /> Part of the Conversation?
            </h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>
              Most local businesses are invisible on Nextdoor. We&apos;ll show you exactly how to change that, what neighborhoods to target, what messaging works, and what kind of results to expect. No obligation. No pitch. Just a clear plan.
            </p>
            <Link
              href="/strategy-call"
              className="inline-flex items-center justify-center px-6 sm:px-10 py-4 text-white font-bold text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #00B450, #00D4AA)', boxShadow: '0 0 30px rgba(0,180,80,0.35)' }}
            >
              Get a Free Nextdoor Audit &rarr;
            </Link>
            <p className="text-sm mt-4" style={{ color: 'rgba(240,244,255,0.4)' }}>
              We&apos;ll map your service area and tell you exactly what we&apos;d do first.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
