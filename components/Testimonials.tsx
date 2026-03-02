'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
    {
        quote: 'PLACEHOLDER — Replace with real client quote. Switch Media transformed our lead generation completely.',
        name: 'Client Name',
        title: 'CEO, Company Name',
        stars: 5,
        accent: '#FF2D78',
    },
    {
        quote: 'PLACEHOLDER — Replace with real client quote. The ROI we saw in the first 30 days was unlike anything we had experienced before.',
        name: 'Client Name',
        title: 'Founder, Company Name',
        stars: 5,
        accent: '#9B30FF',
    },
    {
        quote: 'PLACEHOLDER — Replace with real client quote. Their AI receptionist alone added $40k in revenue our first month.',
        name: 'Client Name',
        title: 'Owner, Company Name',
        stars: 5,
        accent: '#00E5FF',
    },
];

export default function Testimonials() {
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
        <section ref={sectionRef} className="relative z-10 py-24 px-6 lg:px-8" style={{ background: '#080C18', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16" style={reveal(0)}>
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
                        style={{ background: 'rgba(155,48,255,0.1)', border: '1px solid rgba(155,48,255,0.25)', color: '#9B30FF' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        Client Testimonials
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
                        Don&apos;t take our{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, #9B30FF, #FF2D78, #9B30FF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            word for it.
                        </span>
                    </h2>
                    <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(240,244,255,0.5)' }}>
                        {/* PLACEHOLDER: Update subheadline */}
                        Real results from real businesses we&apos;ve partnered with.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div key={i} className="card-hover p-8 rounded-2xl flex flex-col gap-5"
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.07)',
                                ...reveal(i * 120),
                            }}>
                            {/* Stars */}
                            <div className="flex gap-1">
                                {Array.from({ length: t.stars }).map((_, j) => (
                                    <svg key={j} viewBox="0 0 20 20" fill={t.accent} className="w-4 h-4">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-sm leading-relaxed flex-1 italic" style={{ color: 'rgba(240,244,255,0.7)' }}>
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            {/* Attribution */}
                            <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                                    style={{ background: `${t.accent}22`, color: t.accent, border: `1px solid ${t.accent}40` }}>
                                    {t.name[0]}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">{t.name}</p>
                                    <p className="text-xs" style={{ color: 'rgba(240,244,255,0.4)' }}>{t.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
