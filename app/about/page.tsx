'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedTimeline from '@/components/AnimatedTimeline';
import { useEffect, useRef, useState } from 'react';

const milestones = [
    {
        year: 'Pre-2018',
        label: 'The Origin',
        body: 'The obsession started early. From Atari to completing Super Mario Brothers in under eight minutes, the drive to understand, master, and push digital systems to their limit was present long before it had commercial application. That same mindset never left.',
    },
    {
        year: '2018',
        label: 'The Pivot',
        body: 'After years of scaling two family-owned businesses in Houston spanning Senior Living and Home Health, the focus shifted to the digital engine underneath every great business. Managing operations at that scale made one thing clear: without precision marketing, the best service in the world stays invisible.',
    },
    {
        year: '2019',
        label: 'The Breakthrough',
        body: 'The first paid campaign launched for a local business generated hundreds of qualified inquiries within 48 hours. The model was proven. Switch Media Marketing LLC was founded in February 2019 to deliver that result at scale for service-based businesses across every major market.',
    },
    {
        year: '2019–Now',
        label: 'The Track Record',
        body: 'Since founding, the agency has partnered with 50+ businesses across more than a dozen industries, including home services, healthcare, legal, real estate, and fitness. The cumulative result: over $20 million in documented new revenue generated for clients through precision paid advertising and growth systems.',
    },
    {
        year: 'Today',
        label: 'The Switch Era',
        body: 'The agency has evolved well beyond traditional marketing. Switch Media now architects autonomous AI infrastructure for global brands, including AI voice receptionists, automated lead qualification systems, and integrated CRM workflows. The goal is unchanged: scalable, predictable revenue. The tools are now more powerful than ever.',
    },
];

const stats = [
    { value: 50, suffix: '+', label: 'Businesses Served' },
    { value: 20, prefix: '$', suffix: 'M+', label: 'Revenue Generated' },
    { value: 12, suffix: '+', label: 'Industries' },
];

// Animated counter hook
function useCounter(target: number, duration = 2000, started = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!started) return;
        let start = 0;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(start);
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration, started]);
    return count;
}

function StatCard({ stat, started }: { stat: typeof stats[0]; started: boolean }) {
    const count = useCounter(stat.value, 1800, started);
    return (
        <div className="text-center">
            <p className="text-3xl font-black mb-1" style={{
                background: 'linear-gradient(135deg, #FF2D78, #9B30FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            }}>
                {stat.prefix ?? ''}{count}{stat.suffix}
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(240,244,255,0.4)' }}>
                {stat.label}
            </p>
        </div>
    );
}

export default function AboutPage() {
    // Scroll reveal refs
    const heroRef = useRef<HTMLElement>(null);
    const photoRef = useRef<HTMLElement>(null);
    const introRef = useRef<HTMLElement>(null);
    const timelineRef = useRef<HTMLElement>(null);
    const statsRef = useRef<HTMLElement>(null);
    const ctaRef = useRef<HTMLElement>(null);

    const [heroVisible, setHeroVisible] = useState(false);
    const [photoVisible, setPhotoVisible] = useState(false);
    const [introVisible, setIntroVisible] = useState(false);
    const [timelineVisible, setTimelineVisible] = useState(false);
    const [statsVisible, setStatsVisible] = useState(false);
    const [ctaVisible, setCtaVisible] = useState(false);

    // Floating orb animation
    const orbRef1 = useRef<HTMLDivElement>(null);
    const orbRef2 = useRef<HTMLDivElement>(null);
    const orbRef3 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const makeObserver = (setter: (v: boolean) => void) =>
            new IntersectionObserver(([e]) => { if (e.isIntersecting) setter(true); }, { threshold: 0.15 });

        const pairs: [React.RefObject<HTMLElement | null>, (v: boolean) => void][] = [
            [heroRef, setHeroVisible],
            [photoRef, setPhotoVisible],
            [introRef, setIntroVisible],
            [timelineRef, setTimelineVisible],
            [statsRef, setStatsVisible],
            [ctaRef, setCtaVisible],
        ];

        const observers = pairs.map(([ref, setter]) => {
            const obs = makeObserver(setter);
            if (ref.current) obs.observe(ref.current);
            return obs;
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    // Floating orbs animation
    useEffect(() => {
        const orbs = [orbRef1, orbRef2, orbRef3];
        const offsets = [0, 2.1, 4.2];
        let frame: number;
        const animate = () => {
            const t = Date.now() / 1000;
            orbs.forEach((ref, i) => {
                if (!ref.current) return;
                const ox = Math.sin(t * 0.3 + offsets[i]) * 40;
                const oy = Math.cos(t * 0.25 + offsets[i]) * 30;
                ref.current.style.transform = `translate(${ox}px, ${oy}px)`;
            });
            frame = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(frame);
    }, []);

    const reveal = (visible: boolean, delay = 0) => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    });

    return (
        <main className="relative min-h-screen text-white overflow-hidden" style={{ background: '#0A0F1C' }}>
            <style>{`
        @keyframes aboutHeadlineShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes pulseCta {
          0%, 100% { box-shadow: 0 0 30px rgba(255,45,120,0.35); }
          50%       { box-shadow: 0 0 55px rgba(155,48,255,0.6); }
        }
        @keyframes photoReveal {
          from { opacity: 0; transform: scale(0.96) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

            {/* Grid pattern */}
            <div className="absolute inset-0 pointer-events-none z-0" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
            }} />

            {/* Floating ambient orbs */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div ref={orbRef1} className="absolute" style={{
                    top: '15%', left: '10%',
                    width: 480, height: 480,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,45,120,0.09) 0%, transparent 65%)',
                    willChange: 'transform',
                }} />
                <div ref={orbRef2} className="absolute" style={{
                    top: '50%', right: '5%',
                    width: 520, height: 520,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(155,48,255,0.1) 0%, transparent 65%)',
                    willChange: 'transform',
                }} />
                <div ref={orbRef3} className="absolute" style={{
                    bottom: '10%', left: '35%',
                    width: 400, height: 400,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 65%)',
                    willChange: 'transform',
                }} />
            </div>

            {/* Hero / Header */}
            <section ref={heroRef} className="relative z-10 pt-40 pb-16 px-6 lg:px-8 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
                    style={{ background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.25)', color: '#FF2D78', ...reveal(heroVisible, 0) }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    About the Founder
                </div>
                <h1 className="text-4xl lg:text-6xl font-black tracking-tight leading-tight mb-6"
                    style={reveal(heroVisible, 100)}>
                    Built by Someone Who Has Been{' '}
                    <span style={{
                        background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        backgroundSize: '200% auto',
                        animation: 'aboutHeadlineShimmer 4s linear infinite',
                        display: 'inline-block',
                    }}>
                        Obsessed With Digital
                    </span>{' '}
                    Since Day One
                </h1>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)', ...reveal(heroVisible, 200) }}>
                    Switch Media Marketing LLC | Founded February 2019 | Houston, TX
                </p>
            </section>

            {/* Founder photo */}
            <section ref={photoRef} className="relative z-10 pb-10 px-6 lg:px-8 max-w-3xl mx-auto">
                <div style={{
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: photoVisible ? '0 0 60px rgba(155,48,255,0.2), 0 0 120px rgba(255,45,120,0.1)' : 'none',
                    animation: photoVisible ? 'photoReveal 0.8s ease forwards' : 'none',
                    opacity: photoVisible ? 1 : 0,
                    transition: 'box-shadow 1s ease',
                }}>
                    <Image
                        src="/images/switch-media-founder.webp"
                        alt="Switch Media Marketing founder with family"
                        width={1200}
                        height={840}
                        priority
                        className="w-full h-auto"
                        style={{ display: 'block' }}
                    />
                </div>
            </section>

            {/* Intro card */}
            <section ref={introRef} className="relative z-10 pb-16 px-6 lg:px-8 max-w-3xl mx-auto">
                <div className="p-8 rounded-2xl" style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    opacity: introVisible ? 1 : 0,
                    transform: introVisible ? 'translateY(0)' : 'translateY(32px)',
                    transition: 'opacity 0.7s ease, transform 0.7s ease, border-color 0.4s ease, box-shadow 0.4s ease',
                }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,45,120,0.25)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 40px rgba(255,45,120,0.08)';
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                    }}
                >
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.65)' }}>
                        Switch Media is not a marketing agency built on theory. It was built by a founder who has spent a lifetime studying digital systems, tested every dollar in real markets, and built the track record to prove the model works. The following is that record.
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section ref={timelineRef} className="relative z-10 pb-16 px-6 lg:px-8 max-w-3xl mx-auto"
                style={reveal(timelineVisible, 0)}>
                <AnimatedTimeline milestones={milestones} />
            </section>

            {/* Stats bar */}
            <section ref={statsRef} className="relative z-10 pb-16 px-6 lg:px-8 max-w-3xl mx-auto"
                style={reveal(statsVisible, 0)}>
                <div className="rounded-2xl p-8 grid grid-cols-2 sm:grid-cols-3 gap-8"
                    style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        boxShadow: statsVisible ? '0 0 60px rgba(155,48,255,0.07)' : 'none',
                        transition: 'box-shadow 1s ease',
                    }}>
                    {stats.map((stat) => (
                        <StatCard key={stat.label} stat={stat} started={statsVisible} />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section ref={ctaRef} className="relative z-10 pb-32 px-6 lg:px-8 max-w-3xl mx-auto text-center"
                style={reveal(ctaVisible, 0)}>
                <p className="text-sm mb-8" style={{ color: 'rgba(240,244,255,0.45)' }}>
                    Ready to see what precision marketing and autonomous AI infrastructure can do for your business?
                </p>
                <Link
                    href="https://calendly.com/switchmedia/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                        background: 'linear-gradient(135deg, #FF2D78, #9B30FF)',
                        animation: 'pulseCta 3s ease-in-out infinite',
                    }}
                >
                    Let&apos;s Connect
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </Link>
            </section>

        </main>
    );
}
