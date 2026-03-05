'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
    {
        quote: 'We started using Switch Media Marketing prior to our gym opening up. I must say, their marketing techniques have helped us tremendously! Chuck is a genuine guy, and truly cares about his clients. He always makes us feel like we\'re his only client with his attention to detail and excellent communication. I highly recommend Switch Media Marketing if you want to get quality ads that drive business!',
        name: 'Nate Bran',
        title: 'illumiNate Heights Fitness',
        location: 'Houston, TX',
        image: '/images/client-reviews/nate bran illuminate heights fitness.webp',
        stars: 5,
        accent: '#FF2D78',
        featured: true,
    },
    {
        quote: 'In 1 year my business has doubled the revenue within a few months. I routinely hear "I don\'t know who does your marketing but they do an amazing job — I see your ads more than any other med spa in the area." Chuck is accessible to any questions I have or is on top of them. He has me as a client for life! Purely Exceptional!',
        name: 'Rebecca Appelgren',
        title: 'Radiant With Rebecca Med Spa',
        location: 'Olathe, KS',
        image: '/images/client-reviews/Radiant Shoot August 2025 (79) (1).webp',
        stars: 5,
        accent: '#9B30FF',
        featured: false,
    },
    {
        quote: 'Chuck has been great to work with. He creates and maintains our FB paid ads and we have received thousands of leads this way as well as converted millions invested. He answers questions and requests quickly and monitors ads very well. Highly recommend Switch Media.',
        name: 'Tracey T',
        title: 'Makaan Investment Group',
        location: 'Houston, TX',
        image: '/images/client-reviews/Tracey Tyler - Makaan Investments.webp',
        stars: 5,
        accent: '#00E5FF',
        featured: false,
    },
];

function Stars({ count, color }: { count: number; color: string }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill={color} className="w-4 h-4">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

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

    const [featured, ...side] = testimonials;

    return (
        <section ref={sectionRef} className="relative z-10 py-24 px-6 lg:px-8" style={{ background: '#000000' }}>
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16" style={reveal(0)}>
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
                        style={{ background: 'rgba(155,48,255,0.1)', border: '1px solid rgba(155,48,255,0.25)', color: '#9B30FF' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                        Client Testimonials
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
                        Don&apos;t take our<br className="sm:hidden" />{' '}
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
                        Real feedback from real clients we&apos;ve worked with
                    </p>
                </div>

                {/* Asymmetric layout — large left + two stacked right */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

                    {/* Featured — left, takes 3 cols */}
                    <div className="lg:col-span-3 rounded-3xl flex flex-col overflow-hidden"
                        style={{
                            border: `1px solid ${featured.accent}55`,
                            boxShadow: `0 0 40px ${featured.accent}20, 0 8px 32px rgba(0,0,0,0.5)`,
                            ...reveal(100),
                        }}>
                        {/* Big quote mark */}
                        <div className="relative flex-1 p-8 flex flex-col gap-6" style={{ background: 'rgba(0,0,0,0.98)' }}>
                            <span className="absolute top-5 right-7 text-8xl font-black leading-none select-none"
                                style={{ color: `${featured.accent}18`, fontFamily: 'Georgia, serif' }}>&ldquo;</span>

                            <Stars count={featured.stars} color={featured.accent} />

                            <p className="text-base lg:text-lg leading-relaxed font-medium relative z-10"
                                style={{ color: 'rgba(240,244,255,0.85)' }}>
                                &ldquo;{featured.quote}&rdquo;
                            </p>

                            {/* Author row */}
                            <div className="flex items-center gap-4 pt-4 mt-auto"
                                style={{ borderTop: `1px solid ${featured.accent}22` }}>
                                <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0"
                                    style={{ border: `2px solid ${featured.accent}60` }}>
                                    <img src={featured.image} alt={featured.name} className="w-full h-full object-cover object-top" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">{featured.name}</p>
                                    <p className="text-xs" style={{ color: featured.accent }}>{featured.title}</p>
                                    <p className="text-xs mt-0.5" style={{ color: 'rgba(240,244,255,0.35)' }}>{featured.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Side cards — right, takes 2 cols, stacked */}
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        {side.map((t, i) => (
                            <div key={i} className="card-hover flex-1 rounded-3xl flex flex-col overflow-hidden"
                                style={{
                                    border: `1px solid ${t.accent}44`,
                                    boxShadow: `0 0 24px ${t.accent}15`,
                                    ...reveal(200 + i * 120),
                                }}>
                                <div className="relative flex-1 p-6 flex flex-col gap-4" style={{ background: 'rgba(0,0,0,0.98)' }}>
                                    <span className="absolute top-3 right-5 text-6xl font-black leading-none select-none"
                                        style={{ color: `${t.accent}15`, fontFamily: 'Georgia, serif' }}>&ldquo;</span>

                                    <Stars count={t.stars} color={t.accent} />

                                    <p className="text-sm leading-relaxed relative z-10" style={{ color: 'rgba(240,244,255,0.75)' }}>
                                        &ldquo;{t.quote}&rdquo;
                                    </p>

                                    <div className="flex items-center gap-3 pt-3 mt-auto"
                                        style={{ borderTop: `1px solid ${t.accent}20` }}>
                                        <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0"
                                            style={{ border: `2px solid ${t.accent}50` }}>
                                            <img src={t.image} alt={t.name} className="w-full h-full object-cover object-top" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white">{t.name}</p>
                                            <p className="text-[11px]" style={{ color: t.accent }}>{t.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
