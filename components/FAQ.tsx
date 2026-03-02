'use client';

import { useEffect, useRef, useState } from 'react';

const faqs = [
    {
        question: 'PLACEHOLDER — How long until I see results?',
        answer: 'PLACEHOLDER — Replace with your real answer. Most clients see measurable results within the first 30 days of campaign launch.',
    },
    {
        question: 'PLACEHOLDER — Do you require long-term contracts?',
        answer: 'PLACEHOLDER — Replace with your real answer. No long-term contracts. We earn your business month over month through results.',
    },
    {
        question: 'PLACEHOLDER — What industries do you work with?',
        answer: 'PLACEHOLDER — Replace with your real answer. We specialize in service-based businesses including healthcare, home services, legal, real estate, and fitness.',
    },
    {
        question: 'PLACEHOLDER — What makes Switch Media different?',
        answer: 'PLACEHOLDER — Replace with your real answer. We combine elite paid advertising with autonomous AI infrastructure — meaning we don\'t just drive leads, we help you capture and close them automatically.',
    },
    {
        question: 'PLACEHOLDER — How does pricing work?',
        answer: 'PLACEHOLDER — Replace with your real answer. We offer transparent, performance-aligned pricing. Book a strategy call and we\'ll walk you through the options that match your goals and budget.',
    },
    {
        question: 'PLACEHOLDER — Can I see examples of past results?',
        answer: 'PLACEHOLDER — Replace with your real answer. Absolutely. Visit our Results page for documented case studies across multiple industries.',
    },
];

export default function FAQ() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16" style={reveal(0)}>
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
                        style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.25)', color: '#00E5FF' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        FAQ
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
                        Common{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, #00E5FF, #9B30FF, #00E5FF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Questions.
                        </span>
                    </h2>
                    <p className="text-base" style={{ color: 'rgba(240,244,255,0.5)' }}>
                        {/* PLACEHOLDER: Update subheadline */}
                        Everything you need to know before getting started.
                    </p>
                </div>

                {/* Accordion */}
                <div className="flex flex-col gap-3" style={reveal(100)}>
                    {faqs.map((faq, i) => (
                        <div key={i}
                            className="rounded-2xl overflow-hidden transition-all duration-300"
                            style={{
                                background: openIndex === i ? 'rgba(155,48,255,0.06)' : 'rgba(255,255,255,0.03)',
                                border: `1px solid ${openIndex === i ? 'rgba(155,48,255,0.3)' : 'rgba(255,255,255,0.07)'}`,
                            }}>
                            <button
                                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <span className="text-sm font-bold text-white">{faq.question}</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                    className="w-4 h-4 shrink-0 transition-transform duration-300"
                                    style={{ color: '#9B30FF', transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openIndex === i && (
                                <div className="px-6 pb-6">
                                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.55)' }}>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
