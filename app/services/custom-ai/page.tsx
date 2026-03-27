'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const processes = [
  { number: '01', title: 'Discovery & Scoping', description: 'We audit your operations, tech stack, and team workflows to identify the highest-impact AI opportunities. The output is a prioritized roadmap with clear ROI projections for each solution.' },
  { number: '02', title: 'Custom Build & Testing', description: 'Your solution is engineered from scratch — not templated. We build, iterate, and stress-test in a staging environment until performance meets or exceeds the benchmarks defined in scoping.' },
  { number: '03', title: 'Deployment & Optimization', description: 'We deploy into your live environment with zero downtime, train your team on the new system, and continuously optimize based on real-world performance data. You own everything we build.' },
];

const capabilities = [
  { title: 'AI-Powered Internal Tools', description: 'Custom dashboards, decision engines, and reporting systems that pull from your data sources and surface actionable insights without requiring your team to dig through spreadsheets or multiple platforms.' },
  { title: 'Conversational AI Agents', description: 'Intelligent chatbots and voice agents trained on your specific business knowledge, products, and processes. They handle customer inquiries, qualify leads, and book appointments 24/7 with human-level understanding.' },
  { title: 'End-to-End Workflow Automation', description: 'Multi-step business processes automated through orchestrated AI pipelines. From intake to fulfillment, every manual handoff is eliminated and replaced with intelligent automation that scales with your growth.' },
];

const badges = ["Built for your workflows", "No templates or cookie-cutter tools", "Full ownership of everything we build", "Scales with your business", "Trained on your data"];

const MINT = '#2fe8a2';

export default function CustomAIPage() {
  const heroRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const capRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [processVisible, setProcessVisible] = useState(false);
  const [capVisible, setCapVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const orbRef1 = useRef<HTMLDivElement>(null);
  const orbRef2 = useRef<HTMLDivElement>(null);
  const orbRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const makeObs = (setter: (v: boolean) => void) => new IntersectionObserver(([e]) => { if (e.isIntersecting) setter(true); }, { threshold: 0.1 });
    const pairs: [React.RefObject<HTMLElement | null>, (v: boolean) => void][] = [[heroRef, setHeroVisible],[processRef, setProcessVisible],[capRef, setCapVisible],[ctaRef, setCtaVisible]];
    const observers = pairs.map(([ref, setter]) => { const obs = makeObs(setter); if (ref.current) obs.observe(ref.current); return obs; });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    const orbs = [orbRef1, orbRef2, orbRef3];
    const offsets = [0, 2.2, 4.6];
    let frame: number;
    const animate = () => { const t = Date.now() / 1000; orbs.forEach((ref, i) => { if (!ref.current) return; ref.current.style.transform = `translate(${Math.sin(t * 0.27 + offsets[i]) * 42}px, ${Math.cos(t * 0.21 + offsets[i]) * 32}px)`; }); frame = requestAnimationFrame(animate); };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const reveal = (visible: boolean, delay = 0): React.CSSProperties => ({ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` });

  return (
    <main className="relative min-h-screen text-white overflow-hidden" style={{ background: '#000000' }}>
      <style>{`
        @keyframes caiShimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }
        @keyframes pulseRing { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.15; transform: scale(1.15); } }
        .cai-shimmer { background: linear-gradient(90deg,#2fe8a2,#5fffc2,#2fe8a2); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; background-size:200% auto; animation:caiShimmer 4s linear infinite; display:inline-block; padding-bottom:0.1em; }
      `}</style>

      <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(47,232,162,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,232,162,0.06) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div ref={orbRef1} className="absolute" style={{ top: '8%', left: '5%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(47,232,162,0.08) 0%, transparent 65%)', willChange: 'transform' }} />
        <div ref={orbRef2} className="absolute" style={{ top: '45%', right: '3%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(47,232,162,0.06) 0%, transparent 65%)', willChange: 'transform' }} />
        <div ref={orbRef3} className="absolute" style={{ bottom: '8%', left: '30%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(47,232,162,0.05) 0%, transparent 65%)', willChange: 'transform' }} />
      </div>

      <section ref={heroRef} className="relative z-10 pt-40 pb-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]" style={{ background: 'rgba(47,232,162,0.1)', border: '1px solid rgba(47,232,162,0.3)', color: MINT, ...reveal(heroVisible, 0) }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" /> Custom AI Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.05] mb-8 text-white" style={reveal(heroVisible, 100)}>
            Your Business Is Unique.<br /><span className="cai-shimmer lg:text-[46px]">Your AI Should Be Too.</span>
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12" style={{ color: 'rgba(240,244,255,0.55)', ...reveal(heroVisible, 200) }}>
            Off-the-shelf tools solve generic problems. We build AI systems designed around your exact workflows, data, and goals — so every automation compounds into measurable growth instead of another subscription collecting dust.
          </p>
          <div style={reveal(heroVisible, 300)} className="mb-12">
            <div className="relative inline-flex items-center justify-center">
              <span className="absolute -inset-[4px] rounded-[16px]" style={{ background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)', backgroundSize: '300% 300%', animation: 'caiShimmer 3s linear infinite' }} />
              <Link href="/strategy-call" className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-base transition-all duration-300 hover:scale-105 whitespace-nowrap" style={{ background: '#000000', color: MINT, borderRadius: '0.75rem', border: '1px solid rgba(47,232,162,0.2)' }}>
                Book a Strategy Call &rarr;
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-3" style={reveal(heroVisible, 400)}>
            {badges.map((b) => (
              <span key={b} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm" style={{ background: 'rgba(47,232,162,0.08)', border: '1px solid rgba(47,232,162,0.2)', color: 'rgba(240,244,255,0.75)' }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 shrink-0" stroke={MINT} strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section ref={processRef} className="relative z-10 px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <div className="mb-12" style={reveal(processVisible, 0)}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: MINT }}>Our Process</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">From concept to production.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {processes.map((p, i) => (
              <div key={p.number} className="p-8 rounded-2xl flex flex-col gap-5 transition-all duration-300" style={{ background: 'rgba(47,232,162,0.04)', border: '1px solid rgba(47,232,162,0.2)', ...reveal(processVisible, i * 120) }}>
                <div className="relative w-12 h-12 shrink-0">
                  <div className="absolute inset-0 rounded-full" style={{ background: '#2fe8a2', boxShadow: '0 0 16px rgba(47,232,162,0.4)', animation: 'pulseRing 2.5s ease-in-out infinite' }} />
                  <div className="absolute inset-0 rounded-full flex items-center justify-center font-black text-sm text-black z-10" style={{ background: '#2fe8a2' }}>{p.number}</div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={capRef} className="relative z-10 px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <div className="mb-12" style={reveal(capVisible, 0)}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: MINT }}>What We Build</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">Solutions tailored to your business.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <div key={c.title} className="p-8 rounded-2xl flex flex-col gap-4 transition-all duration-300" style={{ background: 'rgba(47,232,162,0.03)', border: '1px solid rgba(47,232,162,0.15)', ...reveal(capVisible, i * 120) }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(47,232,162,0.15)', border: '1px solid rgba(47,232,162,0.3)' }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: MINT, boxShadow: '0 0 8px rgba(47,232,162,0.6)' }} />
                </div>
                <h3 className="text-base font-bold text-white">{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} id="contact" className="relative z-10 px-6 lg:px-8 pb-32">
        <div className="max-w-3xl mx-auto text-center" style={reveal(ctaVisible, 0)}>
          <div className="p-6 sm:p-12 rounded-3xl" style={{ background: 'rgba(47,232,162,0.04)', border: '1px solid rgba(47,232,162,0.2)', boxShadow: '0 0 40px rgba(47,232,162,0.06)' }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: MINT }}>Ready to Build</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Let&apos;s build something only you can have.</h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>Tell us the problem. We&apos;ll design the AI solution around it — custom-built, fully owned by you, and engineered to scale. Schedule a call to start.</p>
            <div className="relative inline-flex items-center justify-center">
              <span className="absolute -inset-[4px] rounded-[16px]" style={{ background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)', backgroundSize: '300% 300%', animation: 'caiShimmer 3s linear infinite' }} />
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
