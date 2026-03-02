'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const processes = [
  {
    number: '01',
    title: 'System Architecture',
    description: 'We map your existing data flows, system dependencies, and operational bottlenecks. The output is a detailed integration blueprint that identifies where AI can replace manual logic, reduce latency, and create compounding efficiency across your stack.',
    accent: 'rgba(255,45,120,0.9)',
    glow: 'rgba(255,45,120,0.3)',
  },
  {
    number: '02',
    title: 'Engineering and Deployment',
    description: 'Custom models, automation workflows, and API integrations are built and deployed against the approved architecture. All systems are tested in staging environments before production deployment to confirm performance against defined benchmarks.',
    accent: 'rgba(155,48,255,0.9)',
    glow: 'rgba(155,48,255,0.3)',
  },
  {
    number: '03',
    title: 'Governance and Scaling',
    description: 'Post-deployment monitoring tracks system performance, data quality, and output accuracy. Models are retrained as your data evolves. Infrastructure is scaled horizontally as usage grows, without requiring full system re-architecture.',
    accent: 'rgba(0,229,255,0.9)',
    glow: 'rgba(0,229,255,0.3)',
  },
];

const capabilities = [
  {
    title: 'Custom LLM Fine-Tuning',
    description: 'Base language models are fine-tuned on your proprietary data to handle industry-specific terminology, decision logic, and edge cases. The result is a model that performs with domain-level accuracy rather than generic approximation.',
    color: '#FF2D78',
    bg: 'rgba(255,45,120,0.08)',
    border: 'rgba(255,45,120,0.2)',
    hoverBorder: 'rgba(255,45,120,0.45)',
    hoverGlow: 'rgba(255,45,120,0.12)',
  },
  {
    title: 'Intelligent Workflow Automation',
    description: 'Multi-step business processes are automated through orchestrated AI agents that read inputs, apply logic, call external systems, and write outputs without human intervention. Workflows are auditable, interruptible, and versioned.',
    color: '#9B30FF',
    bg: 'rgba(155,48,255,0.08)',
    border: 'rgba(155,48,255,0.2)',
    hoverBorder: 'rgba(155,48,255,0.45)',
    hoverGlow: 'rgba(155,48,255,0.12)',
  },
  {
    title: 'Predictive Data Intelligence',
    description: 'Predictive models are built on your historical data to forecast demand, flag anomalies, score leads, and surface actionable signals before they become visible through conventional reporting. Output is integrated directly into your existing dashboards.',
    color: '#00E5FF',
    bg: 'rgba(0,229,255,0.08)',
    border: 'rgba(0,229,255,0.2)',
    hoverBorder: 'rgba(0,229,255,0.45)',
    hoverGlow: 'rgba(0,229,255,0.12)',
  },
];

export default function AISystemIntegrationPage() {
  // Scroll reveal
  const heroRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const capRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const [heroVisible, setHeroVisible] = useState(false);
  const [processVisible, setProcessVisible] = useState(false);
  const [capVisible, setCapVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  // Floating orbs
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
        @keyframes aiSystemShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes pulseCta {
          0%, 100% { box-shadow: 0 0 30px rgba(155,48,255,0.35); }
          50%       { box-shadow: 0 0 60px rgba(255,45,120,0.55); }
        }
        @keyframes spinOrbit {
          from { transform: rotate(0deg) translateX(28px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(28px) rotate(-360deg); }
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
            AI Automations
          </div>

          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-8 text-white"
            style={reveal(heroVisible, 100)}>
            Autonomous AI Infrastructure<br />
            <span style={{
              background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
              animation: 'aiSystemShimmer 4s linear infinite',
              display: 'inline-block',
              paddingBottom: '0.1em',
            }}>and System Integration.</span>
          </h1>

          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
            style={{ color: 'rgba(240,244,255,0.55)', ...reveal(heroVisible, 200) }}>
            We architect custom AI ecosystems that bridge the gap between raw data and operational efficiency. Our integrations are designed to scale business logic through technical precision and secure automation.
          </p>

          <div style={reveal(heroVisible, 300)}>
            <Link href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)', animation: 'pulseCta 3s ease-in-out infinite' }}>
              Book a Strategy Call
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="relative z-10 px-6 lg:px-8 pb-24" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto pt-24">
          <div className="mb-12" style={reveal(processVisible, 0)}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(255,45,120,0.8)' }}>
              Our Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">From blueprint to production.</h2>
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
                {/* Animated number badge */}
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
      <section ref={capRef} className="relative z-10 px-6 lg:px-8 pb-24" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto pt-24">
          <div className="mb-12" style={reveal(capVisible, 0)}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(0,229,255,0.7)' }}>
              Core Capabilities
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">What we build.</h2>
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
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Architect your AI system.</h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>
              We scope the integration, design the architecture, and deliver a production system built for your specific business logic. Schedule a call to begin.
            </p>
            <Link
              href="https://calendly.com/switchmedia/15min"
              target="_blank"
              rel="noopener noreferrer"
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