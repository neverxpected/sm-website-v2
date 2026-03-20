'use client';

import { useEffect, useRef, useState } from 'react';
import ParticleField from './ParticleField';

const steps = [
    {
        number: 'Step 1',
        title: 'Honest Strategy Call',
        bullets: [
            'We ask the questions nobody else asks. We look at your offer, your follow up, your current presence. We tell you exactly what we see. Even if it\'s uncomfortable.',
        ],
        accent: '#FF2D78',
        glow: 'rgba(255,45,120,0.35)',
        orbColor: 'rgba(255,45,120,0.09)',
        bgIcons: [
            { d: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z', top: '8%', left: '18%', size: 44, rotate: -15 },
            { d: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z', top: '15%', right: '8%', size: 36, rotate: 12 },
            { d: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z', bottom: '12%', left: '70%', size: 40, rotate: 8 },
        ],
        iconOpacity: 0.15,
    },
    {
        number: 'Step 2',
        title: 'Build & Launch',
        bullets: [
            'We build your ad campaigns and AI systems from the ground up so there is no guessing. Everything is engineered around your specific business, your offer, and your customer.',
        ],
        accent: '#9B30FF',
        glow: 'rgba(155,48,255,0.35)',
        orbColor: 'rgba(155,48,255,0.09)',
        bgIcons: [
            { d: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z', top: '10%', left: '20%', size: 42, rotate: -20 },
            { d: 'M11.42 15.17l-5.3-5.3a.75.75 0 010-1.06l5.3-5.3m-4.24 5.66h11.31M21 12a9 9 0 11-18 0 9 9 0 0118 0z', top: '5%', right: '10%', size: 32, rotate: 25 },
            { d: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z', bottom: '10%', left: '72%', size: 38, rotate: -10 },
        ],
        iconOpacity: 0.30,
    },
    {
        number: 'Step 3',
        title: 'Scale & Stay',
        bullets: [
            'We don\'t hand you off. We stay in, watch the data weekly, cut what isn\'t working, and double down on what is. Growth compounds when someone is actually paying attention.',
        ],
        accent: '#00E5FF',
        glow: 'rgba(0,229,255,0.35)',
        orbColor: 'rgba(0,229,255,0.07)',
        bgIcons: [
            { d: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941', top: '10%', left: '18%', size: 44, rotate: 0 },
            { d: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z', top: '8%', right: '8%', size: 38, rotate: 10 },
            { d: 'M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5', bottom: '12%', left: '68%', size: 36, rotate: -5 },
        ],
        iconOpacity: 0.15,
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
            className="relative z-10 py-12 lg:py-16 px-4 lg:px-8 overflow-hidden"
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
            font-size: clamp(2rem, 8.5vw, 2.8rem) !important;
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
                        className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 hiw-headline"
                        style={reveal(100)}
                    >
                        Here&apos;s Exactly{' '}
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

                    <p className="text-base lg:text-lg max-w-xl lg:max-w-none mx-auto" style={{ color: 'rgba(240,244,255,0.5)', ...reveal(200) }}>
                        Three steps and you&apos;ll know exactly where you stand and what happens next.
                    </p>
                </div>

                {/* Mobile: stacked */}
                <div className="flex flex-col gap-6 lg:hidden">
                    {steps.map((step, i) => (
                        <div key={step.number}
                            className="relative flex flex-col rounded-2xl overflow-hidden"
                            style={{ border: `1px solid ${step.accent}66`, boxShadow: `0 0 30px ${step.glow.replace('0.35', '0.45')}, 0 0 80px ${step.glow.replace('0.35', '0.15')}, 0 0 160px ${step.glow.replace('0.35', '0.06')}`, ...reveal(300 + i * 150) }}>
                            {/* Top: badge area with gradient + diamond pattern */}
                            <div className="relative flex items-center justify-center py-8 overflow-hidden" style={{ background: `linear-gradient(145deg, #0A0F1C 0%, #000000 50%, ${step.accent}30 100%)` }}>
                                {/* Themed watermark icons */}
                                {step.bgIcons.map((icon, j) => (
                                    <svg key={j} viewBox="0 0 24 24" fill="none" stroke={step.accent} strokeWidth={1} className="absolute pointer-events-none" style={{
                                        width: icon.size, height: icon.size,
                                        top: icon.top, left: icon.left, right: icon.right, bottom: icon.bottom,
                                        opacity: step.iconOpacity,
                                        transform: `rotate(${icon.rotate}deg)`,
                                    }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={icon.d} />
                                    </svg>
                                ))}
                                {/* Radial accent glow */}
                                <div className="absolute inset-0 pointer-events-none" style={{
                                    background: `radial-gradient(circle at 50% 80%, ${step.glow.replace('0.35','0.30')} 0%, transparent 60%)`,
                                }} />
                                <div className="relative w-16 h-16 shrink-0 z-10">
                                    <div className="absolute inset-0 rounded-full" style={{ border: `2px solid ${step.accent}`, animation: `ringPing 2s ease-out infinite`, animationDelay: `${i * 0.5}s` }} />
                                    <div className="absolute inset-0 rounded-full border-2 flex items-center justify-center font-black text-xs z-10"
                                        style={{ borderColor: step.accent, color: step.accent, background: `${step.accent}12`, boxShadow: `0 0 18px ${step.glow}` }}>
                                        {step.number}
                                    </div>
                                </div>
                            </div>
                            {/* Bottom: text area (white) */}
                            <div className="flex-1 p-6 text-center" style={{ background: '#ffffff' }}>
                                <h3 className="text-lg font-black mb-3" style={{ color: '#111827' }}>{step.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>
                                    {step.bullets[0]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop: flex row with inline connectors */}
                <div className="hidden lg:flex items-stretch">
                    {steps.map((step, i) => (
                        <>
                            <div key={step.number}
                                className="relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
                                style={{
                                    flex: 1,
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
                                {/* Top: badge area with gradient + diamond pattern */}
                                <div className="relative flex items-center justify-center py-8 overflow-hidden" style={{ background: `linear-gradient(145deg, #0A0F1C 0%, #000000 50%, ${step.accent}30 100%)` }}>
                                    {/* Themed watermark icons */}
                                    {step.bgIcons.map((icon, j) => (
                                        <svg key={j} viewBox="0 0 24 24" fill="none" stroke={step.accent} strokeWidth={1} className="absolute pointer-events-none" style={{
                                            width: icon.size, height: icon.size,
                                            top: icon.top, left: icon.left, right: icon.right, bottom: icon.bottom,
                                            opacity: step.iconOpacity,
                                            transform: `rotate(${icon.rotate}deg)`,
                                        }}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d={icon.d} />
                                        </svg>
                                    ))}
                                    {/* Radial accent glow */}
                                    <div className="absolute inset-0 pointer-events-none" style={{
                                        background: `radial-gradient(circle at 50% 80%, ${step.glow.replace('0.35','0.30')} 0%, transparent 60%)`,
                                    }} />
                                    <div className="relative w-16 h-16 shrink-0 z-10">
                                        <div className="absolute inset-0 rounded-full" style={{
                                            border: `2px solid ${step.accent}`,
                                            animation: `ringPing 2s ease-out infinite`,
                                            animationDelay: `${i * 0.5}s`,
                                        }} />
                                        <div className="absolute inset-0 rounded-full border-2 flex items-center justify-center font-black text-xs z-10"
                                            style={{ borderColor: step.accent, color: step.accent, background: `${step.accent}12`, boxShadow: `0 0 18px ${step.glow}` }}>
                                            {step.number}
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom: text area (white) */}
                                <div className="flex-1 p-6 text-center" style={{ background: '#ffffff' }}>
                                    <h3 className="text-lg font-black mb-3" style={{ color: '#111827' }}>{step.title}</h3>
                                    <p className="text-sm leading-relaxed text-left" style={{ color: '#4B5563' }}>
                                        {step.bullets[0]}
                                    </p>
                                </div>
                            </div>

                            {/* Connector between cards */}
                            {i < steps.length - 1 && (
                                <div className="flex items-center justify-center shrink-0" style={{ width: '3rem' }}>
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
