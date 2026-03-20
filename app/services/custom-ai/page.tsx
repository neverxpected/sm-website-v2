'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const processes = [
  {
    number: '01',
    title: 'Discovery & Scoping',
    description: 'We audit your operations, tech stack, and team workflows to identify the highest-impact AI opportunities. The output is a prioritized roadmap with clear ROI projections for each solution.',
    accent: 'rgba(255,45,120,0.9)',
    glow: 'rgba(255,45,120,0.3)',
  },
  {
    number: '02',
    title: 'Custom Build & Testing',
    description: 'Your solution is engineered from scratch — not templated. We build, iterate, and stress-test in a staging environment until performance meets or exceeds the benchmarks defined in scoping.',
    accent: 'rgba(155,48,255,0.9)',
    glow: 'rgba(155,48,255,0.3)',
  },
  {
    number: '03',
    title: 'Deployment & Optimization',
    description: 'We deploy into your live environment with zero downtime, train your team on the new system, and continuously optimize based on real-world performance data. You own everything we build.',
    accent: 'rgba(0,229,255,0.9)',
    glow: 'rgba(0,229,255,0.3)',
  },
];

const capabilities = [
  {
    title: 'AI-Powered Internal Tools',
    description: 'Custom dashboards, decision engines, and reporting systems that pull from your data sources and surface actionable insights without requiring your team to dig through spreadsheets or multiple platforms.',
    color: '#FF2D78',
    bg: 'rgba(255,45,120,0.08)',
    border: 'rgba(255,45,120,0.2)',
    hoverBorder: 'rgba(255,45,120,0.45)',
    hoverGlow: 'rgba(255,45,120,0.12)',
  },
  {
    title: 'Conversational AI Agents',
    description: 'Intelligent chatbots and voice agents trained on your specific business knowledge, products, and processes. They handle customer inquiries, qualify leads, and book appointments 24/7 with human-level understanding.',
    color: '#9B30FF',
    bg: 'rgba(155,48,255,0.08)',
    border: 'rgba(155,48,255,0.2)',
    hoverBorder: 'rgba(155,48,255,0.45)',
    hoverGlow: 'rgba(155,48,255,0.12)',
  },
  {
    title: 'End-to-End Workflow Automation',
    description: 'Multi-step business processes automated through orchestrated AI pipelines. From intake to fulfillment, every manual handoff is eliminated and replaced with intelligent automation that scales with your growth.',
    color: '#00E5FF',
    bg: 'rgba(0,229,255,0.08)',
    border: 'rgba(0,229,255,0.2)',
    hoverBorder: 'rgba(0,229,255,0.45)',
    hoverGlow: 'rgba(0,229,255,0.12)',
  },
];

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
    const makeObs = (setter: (v: boolean) => void) =>
      new IntersectionObserver(([e]) => { if (e.isIntersecting) setter(true); }, { threshold: 0.1 });

    const pairs: [React.RefObject<HTMLElement | null>, (v: boolean) => void][] = [
      [heroRef, setHeroVisible],
      [processRef, setProcessVisible],
      [capRef, setCapVisible],
      [ctaRef, setCtaVisible],
    ];
    const observers = pairs.map(([ref, setter]) => {
      const obs = makeObs(setter);
      if (ref.current) obs.observe(ref.current);
      return obs;
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    const orbs = [orbRef1, orbRef2, orbRef3];
    const offsets = [0, 2.2, 4.6];
    let frame: number;
    const animate = () => {
      const t = Date.now() / 1000;
      orbs.forEach((ref, i) => {
        if (!ref.current) return;
        const ox = Math.sin(t * 0.27 + offsets[i]) * 42;
        const oy = Math.cos(t * 0.21 + offsets[i]) * 32;
        ref.current.style.transform = `translate(${ox}px, ${oy}px)`;
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const reveal = (visible: boolean, delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <main className="relative min-h-screen text-white overflow-hidden" style={{ background: '#0A0F1C' }}>
      <style>{`
        @keyframes customAIShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes pulseCta {
          0%, 100% { box-shadow: 0 0 30px rgba(155,48,255,0.35); }
          50%       { box-shadow: 0 0 60px rgba(255,45,120,0.55); }
        }
        @keyframes pulseRing {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 0.15; transform: scale(1.15); }
        }
      `}</style>

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div ref={orbRef1} className="absolute" style={{
          top: '8%', left: '5%', width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155,48,255,0.1) 0%, transparent 65%)',
          willChange: 'transform',
        }} />
        <div ref={orbRef2} className="absolute" style={{
          top: '45%', right: '3%', width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,45,120,0.09) 0%, transparent 65%)',
          willChange: 'transform',
        }} />
        <div ref={orbRef3} className="absolute" style={{
          bottom: '8%', left: '30%', width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 65%)',
          willChange: 'transform',
        }} />
      </div>

      {/* Hero */}
      <section ref={heroRef} className="relative z-10 pt-40 pb-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(155,48,255,0.1)', border: '1px solid rgba(155,48,255,0.25)', color: '#9B30FF', ...reveal(heroVisible, 0) }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Custom AI Solutions
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.05] mb-8 text-white"
            style={reveal(heroVisible, 100)}>
            Your Business Is Unique.<br />
            <span className="lg:text-[46px]" style={{
              background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
              animation: 'customAIShimmer 4s linear infinite',
              display: 'inline-block',
              paddingBottom: '0.1em',
            }}>Your AI Should Be Too.</span>
          </h1>

          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
            style={{ color: 'rgba(240,244,255,0.55)', ...reveal(heroVisible, 200) }}>
            Off-the-shelf tools solve generic problems. We build AI systems designed around your exact workflows, data, and goals — so every automation compounds into measurable growth instead of another subscription collecting dust.
          </p>

          <div style={reveal(heroVisible, 300)}>
            <Link href="/strategy-call"
              className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)', animation: 'pulseCta 3s ease-in-out infinite' }}>
              Book a Strategy Call
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* At a Glance */}
          <div className="mt-12 flex flex-wrap gap-3" style={reveal(heroVisible, 400)}>
            {[
              "Built for your workflows",
              "No templates or cookie-cutter tools",
              "Full ownership of everything we build",
              "Scales with your business",
              "Trained on your data",
            ].map((b) => (
              <span key={b} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{ background: "rgba(155,48,255,0.1)", border: "1px solid rgba(155,48,255,0.2)", color: "rgba(240,244,255,0.75)" }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 shrink-0" stroke="#9B30FF" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="relative z-10 px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <div className="mb-12" style={reveal(processVisible, 0)}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(255,45,120,0.8)' }}>
              Our Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">From concept to production.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {processes.map((p, i) => (
              <div key={p.number} className="p-8 rounded-2xl flex flex-col gap-5 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  ...reveal(processVisible, i * 120),
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = p.glow.replace('0.3', '0.4');
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${p.glow}`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <div className="relative w-12 h-12 shrink-0">
                  <div className="absolute inset-0 rounded-full" style={{
                    background: `linear-gradient(135deg, ${p.accent}, ${p.glow.replace('0.3', '0.6')})`,
                    boxShadow: `0 0 16px ${p.glow}`,
                    animation: 'pulseRing 2.5s ease-in-out infinite',
                  }} />
                  <div className="absolute inset-0 rounded-full flex items-center justify-center font-black text-sm text-white z-10"
                    style={{ background: `linear-gradient(135deg, ${p.accent}, ${p.glow.replace('0.3', '0.6')})` }}>
                    {p.number}
                  </div>
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

      {/* Capabilities */}
      <section ref={capRef} className="relative z-10 px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <div className="mb-12" style={reveal(capVisible, 0)}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(0,229,255,0.7)' }}>
              What We Build
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">Solutions tailored to your business.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <div key={c.title} className="p-8 rounded-2xl flex flex-col gap-4 transition-all duration-300"
                style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  ...reveal(capVisible, i * 120),
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = c.hoverBorder;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${c.hoverGlow}`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = c.border;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${c.color}20`, border: `1px solid ${c.color}40` }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: c.color, boxShadow: `0 0 8px ${c.color}` }} />
                </div>
                <h3 className="text-base font-bold text-white">{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} id="contact" className="relative z-10 px-6 lg:px-8 pb-32">
        <div className="max-w-3xl mx-auto text-center" style={reveal(ctaVisible, 0)}>
          <div className="p-12 rounded-3xl transition-all duration-500"
            style={{ background: 'rgba(155,48,255,0.06)', border: '1px solid rgba(155,48,255,0.15)' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(155,48,255,0.35)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 60px rgba(155,48,255,0.1)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(155,48,255,0.15)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: 'rgba(155,48,255,0.8)' }}>
              Ready to Build
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Let&apos;s build something only you can have.</h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>
              Tell us the problem. We&apos;ll design the AI solution around it — custom-built, fully owned by you, and engineered to scale. Schedule a call to start.
            </p>
            <Link
              href="/strategy-call"
              className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)', animation: 'pulseCta 3s ease-in-out infinite' }}
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
