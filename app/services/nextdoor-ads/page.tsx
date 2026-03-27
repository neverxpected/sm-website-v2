import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nextdoor Ads — Hyperlocal Advertising for Service Businesses",
  description: "Switch Media builds Nextdoor ad campaigns that put your business in front of the neighbors already looking for what you offer. Hyperlocal targeting for service businesses, healthcare, and home services.",
};

const advantages = [
  { title: "Neighborhood-Level Targeting", description: "Nextdoor lets you target by zip code, neighborhood, and radius in a way no other platform can. We build campaigns that put your business in front of the exact households most likely to become customers." },
  { title: "Trust Built Into the Platform", description: "People on Nextdoor use their real names and verified addresses. Your ads show up alongside trusted neighbor recommendations, not random content. That context makes your message land differently than any other ad platform." },
  { title: "Lower Competition, Lower Costs", description: "Most businesses haven't figured out Nextdoor yet. That means less competition for attention, lower cost per impression, and a real first-mover advantage in your local market. We help you capitalize on that window before everyone else catches on." },
];

const bestFor = ["Med Spas & Dermatology", "Plastic Surgery", "Dental Practices", "HVAC & Plumbing", "Pest Control", "Gyms & Fitness Studios", "Restaurants & Cafés", "Home Services", "Real Estate"];

const process = [
  { step: "01", title: "We Learn Your Service Area", description: "We map your ideal customer radius, identify the neighborhoods with the highest density of your target demographic, and analyze what your local competitors are doing on the platform." },
  { step: "02", title: "We Build Campaigns That Feel Local", description: "Nextdoor ads work best when they feel like a neighbor talking, not a corporation advertising. We write copy and design creative that matches the tone of the platform so your business earns trust, not eye rolls." },
  { step: "03", title: "We Optimize Weekly", description: "Neighborhood-level performance data, cost per lead tracking, creative rotation, and audience refinement. Every week the campaigns get sharper and your cost to acquire a customer goes down." },
];

const MINT = '#2fe8a2';
const SHIMMER = `@keyframes ndShimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } } .nd-shimmer { background: linear-gradient(90deg,#2fe8a2,#5fffc2,#2fe8a2); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; background-size:200% auto; animation:ndShimmer 4s linear infinite; display:inline-block; padding-bottom:0.1em; }`;

export default function NextdoorAdsPage() {
  return (
    <main className="relative min-h-screen text-white" style={{ background: '#000000' }}>
      <style>{SHIMMER}</style>
      <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(47,232,162,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,232,162,0.06) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(47,232,162,0.1) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(47,232,162,0.07) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]" style={{ background: 'rgba(47,232,162,0.1)', border: '1px solid rgba(47,232,162,0.3)', color: MINT }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" /> Nextdoor Advertising
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.1] mb-8 text-white">
            Your Neighbors Are Looking for<br /><span className="nd-shimmer lg:text-[46px]">Exactly What You Offer.</span>
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12" style={{ color: 'rgba(240,244,255,0.55)' }}>
            Nextdoor is the only platform where your ads show up next to trusted neighbor recommendations, not random content. We build campaigns that reach households within miles of your business — people who are actively looking for local services and already trust the platform they&apos;re reading on.
          </p>
          <div className="relative inline-flex items-center justify-center">
            <span className="absolute -inset-[4px] rounded-[16px]" style={{ background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)', backgroundSize: '300% 300%', animation: 'ndShimmer 3s linear infinite' }} />
            <Link href="/strategy-call" className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-base transition-all duration-300 hover:scale-105 whitespace-nowrap" style={{ background: '#000000', color: MINT, borderRadius: '0.75rem', border: '1px solid rgba(47,232,162,0.2)' }}>
              See If Nextdoor Is Right for You &rarr;
            </Link>
          </div>
          <p className="text-sm mt-4" style={{ color: 'rgba(240,244,255,0.4)' }}>Free strategy call. We&apos;ll tell you if Nextdoor makes sense for your market and service area.</p>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: MINT }}>Who This Is For</p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">Built for Businesses That Serve Their Neighborhood.</h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>If your customers live within 15 miles of your location, Nextdoor might be the most underused channel in your marketing stack.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {bestFor.map((item) => (
              <div key={item} className="px-5 py-4 rounded-xl text-sm font-semibold text-center" style={{ background: 'rgba(47,232,162,0.06)', border: '1px solid rgba(47,232,162,0.2)', color: 'rgba(240,244,255,0.7)' }}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: MINT }}>Why Nextdoor Works</p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">An Unfair Advantage Most Businesses Are Ignoring.</h2>
          <p className="text-base leading-relaxed mb-12" style={{ color: 'rgba(240,244,255,0.5)' }}>While your competitors fight over Facebook and Google, Nextdoor gives you a direct line to the people who live closest to your business.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="p-8 rounded-2xl flex flex-col gap-4" style={{ background: 'rgba(47,232,162,0.04)', border: '1px solid rgba(47,232,162,0.2)' }}>
                <h3 className="text-base font-bold text-white">{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: MINT }}>How We Do It</p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">How We Get Your Nextdoor Campaigns Working.</h2>
          <p className="text-base leading-relaxed mb-12" style={{ color: 'rgba(240,244,255,0.5)' }}>Three steps. Hyperlocal from day one. Optimized every week.</p>
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
        <div className="max-w-5xl mx-auto text-center">
          <div className="p-6 sm:p-12 rounded-3xl" style={{ background: 'rgba(47,232,162,0.04)', border: '1px solid rgba(47,232,162,0.2)', boxShadow: '0 0 40px rgba(47,232,162,0.06)' }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: MINT }}>Your Competitors Haven&apos;t Found This Yet</p>
            <h2 className="text-2xl lg:text-4xl font-black text-white mb-4">The Neighbors Are Talking. Is Your Business<br />Part of the Conversation?</h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>Most local businesses are invisible on Nextdoor. We&apos;ll show you exactly how to change that, what neighborhoods to target, what messaging works, and what kind of results to expect. No obligation. No pitch. Just a clear plan.</p>
            <div className="relative inline-flex items-center justify-center">
              <span className="absolute -inset-[4px] rounded-[16px]" style={{ background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)', backgroundSize: '300% 300%', animation: 'ndShimmer 3s linear infinite' }} />
              <Link href="/strategy-call" className="relative inline-flex items-center justify-center px-6 sm:px-10 py-4 font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 whitespace-nowrap" style={{ background: '#000000', color: MINT, borderRadius: '0.75rem', border: '1px solid rgba(47,232,162,0.2)' }}>
                Get a Free Nextdoor Audit &rarr;
              </Link>
            </div>
            <p className="text-sm mt-4" style={{ color: 'rgba(240,244,255,0.4)' }}>We&apos;ll map your service area and tell you exactly what we&apos;d do first.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
