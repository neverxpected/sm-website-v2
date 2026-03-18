'use client';

import { useEffect, useRef, useState } from 'react';
import ParticleField from './ParticleField';

const steps = [
    {
        number: '01',
        title: 'Honest Strategy Call',
        bullets: [
            'We ask the questions nobody else asks. We look at your offer, your follow up, your current presence. We tell you exactly what we see. Even if it\'s uncomfortable. Especially then.',
        ],
        accent: '#FF2D78',
        glow: 'rgba(255,45,120,0.35)',
        orbColor: 'rgba(255,45,120,0.09)',
    },
    {
        number: '02',
        title: 'Build and Launch',
        bullets: [
            'We build your ad campaigns and AI systems from the ground up. No templates. No guessing. Everything is engineered around your specific business, your offer, and your customer.',
        ],
        accent: '#9B30FF',
        glow: 'rgba(155,48,255,0.35)',
        orbColor: 'rgba(155,48,255,0.09)',
    },
    {
        number: '03',
        title: 'Scale and Stay',
        bullets: [
            'We don\'t hand you off. We stay in, watch the data weekly, cut what isn\'t working, and double down on what is. Growth compounds when someone is actually paying attention.',
        ],
        accent: '#00E5FF',
        glow: 'rgba(0,229,255,0.35)',
        orbColor: 'rgba(0,229,255,0.07)',
    },
];

export default function HowItWorks() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    // Floating orbs
    const orbRef1 = useRef<HTMLDivElement>(null);
    const orbRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        const orbs = [orbRef1, orbRef2];
        const offsets = [0, 3.1];
        let frame: number;
        const animate = () => {
            const t = Date.now() / 1000;
            orbs.forEach((ref, i) => {
                if (!ref.current) return;
                const ox = Math.sin(t * 0.24 + offsets[i]) * 35;
                const oy = Math.cos(t * 0.19 + offsets[i]) * 25;
                ref.current.style.transform = `translate(${ox}px, ${oy}px)`;
            });
            frame = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(frame);
    }, []);

    const reveal = (delay = 0): React.CSSProperties => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
    });

    return (
        <section
            ref={sectionRef}
            className="relative z-10 py-12 lg:py-16 px-6 lg:px-8 overflow-hidden"
            style={{ background: '#000000' }}
        >
            <ParticleField count={60} />
            <style>{`
        @keyframes howItWorksShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,45,120,0.0); }
          50%       { box-shadow: 0 0 0 6px rgba(255,45,120,0.0); }
        }
        @keyframes ringPing {
          0%   { transform: scale(1);   opacity: 0.55; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes connectorFlow {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
        @media (max-width: 767px) {
          .hiw-headline {
            font-size: clamp(1.6rem, 6.5vw, 2.2rem) !important;
          }
        }
      `}</style>

            {/* Floating ambient orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div ref={orbRef1} className="absolute" style={{
                    top: '10%', left: '0%', width: 480, height: 480, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,45,120,0.08) 0%, transparent 65%)',
                    willChange: 'transform',
                }} />
                <div ref={orbRef2} className="absolute" style={{
                    bottom: '5%', right: '5%', width: 440, height: 440, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 65%)',
                    willChange: 'transform',
                }} />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <div
                        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
                        style={{
                            background: 'rgba(255,45,120,0.1)',
                            border: '1px solid rgba(255,45,120,0.25)',
                            color: '#FF2D78',
                            ...reveal(0),
                        }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        How It Works
                    </div>

                    <h2
                        className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4 hiw-headline"
                        style={reveal(100)}
                    >
                        No Fluff. No Handoffs.<br />Here&apos;s Exactly{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundSize: '200% auto',
                            animation: 'howItWorksShimmer 4s linear infinite',
                            display: 'inline-block',
                            paddingBottom: '0.05em',
                        }}>
                            How We Work.
                        </span>
                    </h2>

                    <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(240,244,255,0.5)', ...reveal(200) }}>
                        No mystery. No 90 day onboarding. Three steps and you&apos;ll know exactly where you stand and what happens next.
                    </p>
                </div>

                {/* Mobile: stacked */}
                <div className="flex flex-col gap-6 lg:hidden">
                    {steps.map((step, i) => (
                        <div key={step.number}
                            className="relative flex flex-col items-center text-center p-8 rounded-2xl"
                            style={{ background: '#000000', border: `1px solid ${step.accent}66`, boxShadow: `0 0 30px ${step.glow.replace('0.35', '0.45')}, 0 0 80px ${step.glow.replace('0.35', '0.15')}, 0 0 160px ${step.glow.replace('0.35', '0.06')}`, ...reveal(300 + i * 150) }}>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                                style={{ background: step.accent, boxShadow: `0 0 8px ${step.accent}` }} />
                            <div className="relative w-16 h-16 mb-6 shrink-0">
                                <div className="absolute inset-0 rounded-full" style={{ border: `2px solid ${step.accent}`, animation: `ringPing 2s ease-out infinite`, animationDelay: `${i * 0.5}s` }} />
                                <div className="absolute inset-0 rounded-full border-2 flex items-center justify-center font-black text-xl z-10"
                                    style={{ borderColor: step.accent, color: step.accent, background: `${step.accent}12`, boxShadow: `0 0 18px ${step.glow}` }}>
                                    {step.number}
                                </div>
                            </div>
                            <h3 className="text-lg font-black text-white mb-4">{step.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.65)' }}>
                                {step.bullets[0]}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Desktop: flex row with inline connectors */}
                <div className="hidden lg:flex items-stretch">
                    {steps.map((step, i) => (
                        <>
                            <div key={step.number}
                                className="relative flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300"
                                style={{
                                    flex: 1,
                                    background: '#000000',
                                    border: `1px solid ${step.accent}66`,
                                    boxShadow: `0 0 30px ${step.glow.replace('0.35', '0.45')}, 0 0 80px ${step.glow.replace('0.35', '0.15')}, 0 0 160px ${step.glow.replace('0.35', '0.06')}`,
                                    ...reveal(300 + i * 150),
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 45px ${step.glow}, 0 14px 40px rgba(0,0,0,0.5)`;
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 28px ${step.glow.replace('0.35', '0.2')}, 0 4px 16px rgba(0,0,0,0.4)`;
                                }}
                            >
                                {/* Accent dot at top */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                                    style={{ background: step.accent, boxShadow: `0 0 8px ${step.accent}` }} />

                                {/* Badge with ping ring */}
                                <div className="relative w-16 h-16 mb-6 shrink-0">
                                    <div className="absolute inset-0 rounded-full" style={{
                                        border: `2px solid ${step.accent}`,
                                        animation: `ringPing 2s ease-out infinite`,
                                        animationDelay: `${i * 0.5}s`,
                                    }} />
                                    <div className="absolute inset-0 rounded-full border-2 flex items-center justify-center font-black text-xl z-10"
                                        style={{ borderColor: step.accent, color: step.accent, background: `${step.accent}12`, boxShadow: `0 0 18px ${step.glow}` }}>
                                        {step.number}
                                    </div>
                                </div>

                                <h3 className="text-lg font-black text-white mb-4">{step.title}</h3>
                                <p className="text-sm leading-relaxed text-left" style={{ color: 'rgba(240,244,255,0.65)' }}>
                                    {step.bullets[0]}
                                </p>
                            </div>

                            {/* Connector between cards */}
                            {i < steps.length - 1 && (
                                <div className="flex items-start justify-center shrink-0 pt-[2.6rem]" style={{ width: '3rem' }}>
                                    <div className="w-full h-[2px]" style={{
                                        background: `linear-gradient(90deg, ${step.accent}, ${steps[i + 1].accent})`,
                                        backgroundSize: '200% 100%',
                                        animation: 'connectorFlow 3s linear infinite',
                                    }} />
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
}
