'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
    {
        number: '01',
        title: 'Strategy Call',
        description: 'We audit your current marketing infrastructure, identify revenue gaps, and map a precision growth plan tailored to your business model.',
        accent: '#FF2D78',
        glow: 'rgba(255,45,120,0.3)',
    },
    {
        number: '02',
        title: 'Build & Launch',
        description: 'Our team engineers your campaigns, AI systems, and automation workflows from the ground up — built to convert from day one.',
        accent: '#9B30FF',
        glow: 'rgba(155,48,255,0.3)',
    },
    {
        number: '03',
        title: 'Scale & Optimize',
        description: 'We analyze performance data weekly, dial in what works, and systematically scale your results month over month.',
        accent: '#00E5FF',
        glow: 'rgba(0,229,255,0.3)',
    },
];

export default function HowItWorks() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    const reveal = (delay = 0): React.CSSProperties => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    });

    return (
        <section ref={sectionRef} className="relative z-10 py-24 px-6 lg:px-8" style={{ background: '#0A0F1C', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <style>{`
        @keyframes stepPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 0.15; transform: scale(1.12); }
        }
      `}</style>

            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16" style={reveal(0)}>
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
                        style={{ background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.25)', color: '#FF2D78' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        How It Works
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
                        From zero to{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #FF2D78)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            results.
                        </span>
                    </h2>
                    <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(240,244,255,0.5)' }}>
                        {/* PLACEHOLDER: Add your process description here */}
                        Three steps. No fluff. Just a repeatable system that gets your business growing faster than you thought possible.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div key={step.number} className="relative flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 card-hover"
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.07)',
                                ...reveal(i * 150),
                            }}>
                            {/* Connector line (desktop only) */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 left-[calc(100%+1rem)] w-8 h-[1px] z-10"
                                    style={{ background: `linear-gradient(90deg, ${step.accent}, transparent)` }} />
                            )}

                            {/* Number badge */}
                            <div className="relative w-16 h-16 mb-6 shrink-0">
                                <div className="absolute inset-0 rounded-full" style={{
                                    background: `radial-gradient(circle, ${step.glow} 0%, transparent 70%)`,
                                    animation: 'stepPulse 2.5s ease-in-out infinite',
                                }} />
                                <div className="absolute inset-0 rounded-full border-2 flex items-center justify-center font-black text-xl"
                                    style={{ borderColor: step.accent, color: step.accent }}>
                                    {step.number}
                                </div>
                            </div>

                            <h3 className="text-lg font-black text-white mb-3">{step.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
