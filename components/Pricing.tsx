'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const plans = [
    {
        name: 'PLACEHOLDER Tier 1',
        price: '$X,XXX',
        per: '/mo',
        description: 'PLACEHOLDER — Ideal for businesses just getting started with paid advertising.',
        features: [
            'PLACEHOLDER Feature 1',
            'PLACEHOLDER Feature 2',
            'PLACEHOLDER Feature 3',
            'PLACEHOLDER Feature 4',
        ],
        cta: 'Get Started',
        accent: '#FF2D78',
        bg: 'rgba(255,45,120,0.06)',
        border: 'rgba(255,45,120,0.2)',
        featured: false,
    },
    {
        name: 'PLACEHOLDER Tier 2',
        price: '$X,XXX',
        per: '/mo',
        description: 'PLACEHOLDER — Our most popular plan for scaling service businesses.',
        features: [
            'PLACEHOLDER Feature 1',
            'PLACEHOLDER Feature 2',
            'PLACEHOLDER Feature 3',
            'PLACEHOLDER Feature 4',
            'PLACEHOLDER Feature 5',
        ],
        cta: 'Most Popular',
        accent: '#9B30FF',
        bg: 'rgba(155,48,255,0.08)',
        border: 'rgba(155,48,255,0.35)',
        featured: true,
    },
    {
        name: 'PLACEHOLDER Tier 3',
        price: 'Custom',
        per: '',
        description: 'PLACEHOLDER — Full-service growth system for established businesses ready to dominate.',
        features: [
            'PLACEHOLDER Feature 1',
            'PLACEHOLDER Feature 2',
            'PLACEHOLDER Feature 3',
            'PLACEHOLDER Feature 4',
            'PLACEHOLDER Feature 5',
            'PLACEHOLDER Feature 6',
        ],
        cta: 'Book a Call',
        accent: '#00E5FF',
        bg: 'rgba(0,229,255,0.05)',
        border: 'rgba(0,229,255,0.2)',
        featured: false,
    },
];

export default function Pricing() {
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
            <style>{`
        @keyframes pricingPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(155,48,255,0.3); }
          50%       { box-shadow: 0 0 55px rgba(155,48,255,0.55); }
        }
      `}</style>

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16" style={reveal(0)}>
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
                        style={{ background: 'rgba(155,48,255,0.1)', border: '1px solid rgba(155,48,255,0.25)', color: '#9B30FF' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        Pricing
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
                        Transparent{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #FF2D78)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            pricing.
                        </span>
                    </h2>
                    <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(240,244,255,0.5)' }}>
                        {/* PLACEHOLDER: Update pricing subheadline */}
                        No hidden fees. No long-term lock-ins. Just results.
                    </p>
                </div>

                {/* Plans */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    {plans.map((plan, i) => (
                        <div key={plan.name}
                            className={`p-8 rounded-2xl flex flex-col gap-6 ${!plan.featured ? 'card-hover' : ''}`}
                            style={{
                                background: plan.bg,
                                border: `1px solid ${plan.border}`,
                                animation: plan.featured ? 'pricingPulse 3s ease-in-out infinite' : 'none',
                                ...reveal(i * 120),
                            }}>
                            {plan.featured && (
                                <div className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
                                    style={{ background: `${plan.accent}22`, color: plan.accent, border: `1px solid ${plan.accent}40` }}>
                                    ✦ Most Popular
                                </div>
                            )}

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: plan.accent }}>
                                    {plan.name}
                                </p>
                                <div className="flex items-end gap-1 mb-3">
                                    <span className="text-4xl font-black text-white">{plan.price}</span>
                                    {plan.per && <span className="text-sm mb-1" style={{ color: 'rgba(240,244,255,0.4)' }}>{plan.per}</span>}
                                </div>
                                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>{plan.description}</p>
                            </div>

                            <ul className="flex flex-col gap-3 flex-1">
                                {plan.features.map((f, j) => (
                                    <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(240,244,255,0.7)' }}>
                                        <svg viewBox="0 0 20 20" fill={plan.accent} className="w-4 h-4 shrink-0 mt-0.5">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Link href="https://calendly.com/switchmedia/15min" target="_blank" rel="noopener noreferrer"
                                className="w-full flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white rounded-xl transition-all duration-300 hover:scale-[1.02]"
                                style={{
                                    background: plan.featured ? `linear-gradient(135deg, #FF2D78, #9B30FF)` : `${plan.accent}22`,
                                    border: `1px solid ${plan.accent}`,
                                    color: plan.featured ? 'white' : plan.accent,
                                }}>
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>

                <p className="text-center text-xs mt-8" style={{ color: 'rgba(240,244,255,0.3)' }}>
                    {/* PLACEHOLDER: Add pricing disclaimer/note */}
                    All plans include a free onboarding strategy session. Cancel anytime.
                </p>
            </div>
        </section>
    );
}
