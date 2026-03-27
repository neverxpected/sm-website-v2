'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import ServicePicker from '../../components/ServicePicker';

const MINT = '#2fe8a2';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    // Scroll reveal state
    const heroRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const [heroVisible, setHeroVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(false);

    // Floating orb refs
    const orbRef1 = useRef<HTMLDivElement>(null);
    const orbRef2 = useRef<HTMLDivElement>(null);
    const orbRef3 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const makeObs = (setter: (v: boolean) => void) =>
            new IntersectionObserver(([e]) => { if (e.isIntersecting) setter(true); }, { threshold: 0.1 });

        const pairs: [React.RefObject<HTMLElement | HTMLDivElement | null>, (v: boolean) => void][] = [
            [heroRef, setHeroVisible],
            [formRef, setFormVisible],
            [sidebarRef, setSidebarVisible],
        ];
        const observers = pairs.map(([ref, setter]) => {
            const obs = makeObs(setter);
            if (ref.current) obs.observe(ref.current);
            return obs;
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    // Floating orbs
    useEffect(() => {
        const orbs = [orbRef1, orbRef2, orbRef3];
        const offsets = [0, 2.5, 4.8];
        let frame: number;
        const animate = () => {
            const t = Date.now() / 1000;
            orbs.forEach((ref, i) => {
                if (!ref.current) return;
                const ox = Math.sin(t * 0.28 + offsets[i]) * 38;
                const oy = Math.cos(t * 0.22 + offsets[i]) * 28;
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

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const res = await fetch("https://formspree.io/f/mzdjwpbn", {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" },
        });

        if (res.ok) {
            setSubmitted(true);
        } else {
            alert("Something went wrong. Please try again or email Charles@switchmediaco.com directly.");
        }
    }

    return (
        <main className="relative min-h-screen text-white overflow-hidden" style={{ background: '#000000' }}>
            <style>{`
        @keyframes contactHeadlineShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .contact-shimmer {
          background: linear-gradient(90deg, #2fe8a2, #5fffc2, #2fe8a2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: contactHeadlineShimmer 4s linear infinite;
          display: inline;
        }
        @keyframes pulseSubmit {
          0%, 100% { box-shadow: 0 0 20px rgba(47,232,162,0.35); }
          50%       { box-shadow: 0 0 40px rgba(47,232,162,0.6); }
        }
      `}</style>

            {/* Grid pattern */}
            <div className="absolute inset-0 pointer-events-none z-0" style={{
                backgroundImage: 'linear-gradient(rgba(47,232,162,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,232,162,0.06) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
            }} />

            {/* Floating ambient orbs */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div ref={orbRef1} className="absolute" style={{
                    top: '8%', left: '5%',
                    width: 500, height: 500,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(47,232,162,0.08) 0%, transparent 65%)',
                    willChange: 'transform',
                }} />
                <div ref={orbRef2} className="absolute" style={{
                    top: '40%', right: '3%',
                    width: 460, height: 460,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(47,232,162,0.1) 0%, transparent 65%)',
                    willChange: 'transform',
                }} />
                <div ref={orbRef3} className="absolute" style={{
                    bottom: '5%', left: '40%',
                    width: 380, height: 380,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(47,232,162,0.06) 0%, transparent 65%)',
                    willChange: 'transform',
                }} />
            </div>

            {/* Hero */}
            <section ref={heroRef} className="relative z-10 pt-40 pb-16 px-6 lg:px-8 max-w-6xl mx-auto">
                {/* Pill badge */}
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
                    style={{ background: 'rgba(47,232,162,0.1)', border: '1px solid rgba(47,232,162,0.3)', color: MINT, ...reveal(heroVisible, 0) }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    Contact Us
                </div>

                <h1 className="text-[28px] sm:text-[36px] lg:text-[46px] font-black tracking-tight text-white mb-6 leading-tight max-w-3xl"
                    style={reveal(heroVisible, 100)}>
                    You could be one<br />
                    <span className="contact-shimmer">
                        honest conversation
                    </span>{' '}
                    <span style={{ whiteSpace: 'nowrap' }}>away from real growth.</span>
                </h1>

                <p className="text-base leading-relaxed max-w-xl"
                    style={{ color: 'rgba(240,244,255,0.5)', ...reveal(heroVisible, 200) }}>
                    No pitch decks or sales pitch, we&apos;re just here to listen and find out what is holding your business back from growing. If that sounds reasonable, let&apos;s talk.
                </p>
            </section>

            {/* Two-column layout */}
            <section className="relative z-10 pb-32 px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">

                    {/* Contact form */}
                    <div ref={formRef} className="rounded-2xl p-5 sm:p-8 relative"
                        style={{
                            background: 'rgba(47,232,162,0.06)',
                            border: '1px solid rgba(47,232,162,0.3)',
                            boxShadow: 'inset 0 0 60px rgba(47,232,162,0.08), inset 0 0 120px rgba(47,232,162,0.04), 0 0 40px rgba(47,232,162,0.1)',
                            ...reveal(formVisible, 0),
                        }}>
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                                <span className="w-14 h-14 rounded-full flex items-center justify-center"
                                    style={{ background: MINT }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth={2.5} className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </span>
                                <h3 className="text-xl font-black text-white">Message Sent!</h3>
                                <p className="text-sm" style={{ color: 'rgba(240,244,255,0.5)' }}>We&apos;ll be in touch shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold mb-1.5" style={{ color: '#ffffff' }}>Name <span style={{ color: MINT }}>*</span></label>
                                        <input required name="name" type="text" placeholder="John Smith"
                                            className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2fe8a2] transition-all appearance-none"
                                            style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)' }} />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold mb-1.5" style={{ color: '#ffffff' }}>Email <span style={{ color: MINT }}>*</span></label>
                                        <input required name="email" type="email" placeholder="john@company.com"
                                            className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2fe8a2] transition-all appearance-none"
                                            style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)' }} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold mb-1.5" style={{ color: '#ffffff' }}>Company <span style={{ color: MINT }}>*</span></label>
                                        <input required name="company" type="text" placeholder="Company name"
                                            className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2fe8a2] transition-all appearance-none"
                                            style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)' }} />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold mb-1.5" style={{ color: '#ffffff' }}>Phone <span style={{ color: MINT }}>*</span></label>
                                        <input required name="phone" type="tel" placeholder="+1 (555) 000-0000"
                                            className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2fe8a2] transition-all appearance-none"
                                            style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)' }} />
                                    </div>
                                </div>
                                <ServicePicker />
                                <div>
                                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#ffffff' }}>Monthly Budget <span style={{ color: MINT }}>*</span></label>
                                    <div className="relative">
                                        <select required name="budget" className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#2fe8a2] transition-all appearance-none cursor-pointer"
                                            style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', color: '#374151', paddingRight: '2.5rem' }}>
                                            <option value="">Select budget</option>
                                            <option>Under $2,500/mo</option>
                                            <option>$2,500 – $5,000/mo</option>
                                            <option>$5,000 – $10,000/mo</option>
                                            <option>$10,000 – $25,000/mo</option>
                                            <option>$25,000+/mo</option>
                                        </select>
                                        <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'rgba(240,244,255,0.3)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#ffffff' }}>Message</label>
                                    <textarea name="message" rows={4} placeholder="What's the biggest thing holding your business back right now?"
                                        className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2fe8a2] transition-all appearance-none resize-none"
                                        style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)' }} />
                                </div>

                                <div className="group relative w-full mt-4">
                                    <span className="absolute -inset-[3px] rounded-[16px]" style={{
                                        background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)',
                                        backgroundSize: '300% 300%',
                                        animation: 'contactHeadlineShimmer 3s linear infinite',
                                    }} />
                                    <button
                                        type="submit"
                                        className="relative w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-4 font-bold text-sm sm:text-base transition-all duration-300 group-hover:scale-[1.01] active:scale-100"
                                        style={{ background: '#000000', color: MINT, borderRadius: '0.75rem', border: '1px solid rgba(47,232,162,0.2)', whiteSpace: 'nowrap' }}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 shrink-0">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                        Book Your Free Strategy Call &rarr;
                                    </button>
                                </div>

                                <p className="text-center text-xs italic mt-3" style={{ color: 'rgba(240,244,255,0.25)' }}>
                                    We read every submission personally. No automated responses. No spam.
                                </p>
                            </form>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div ref={sidebarRef} className="flex flex-col gap-5">

                        {/* Location */}
                        <div className="p-6 rounded-2xl flex gap-4 items-start"
                            style={{ background: 'rgba(47,232,162,0.04)', border: '1px solid rgba(47,232,162,0.2)', ...reveal(sidebarVisible, 0) }}>
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                                style={{ background: 'rgba(47,232,162,0.12)', border: '1px solid rgba(47,232,162,0.25)' }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke={MINT} strokeWidth={1.5} className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.15em] mb-1" style={{ color: 'rgba(240,244,255,0.35)' }}>Location</p>
                                <p className="text-sm font-semibold text-white">Houston, TX</p>
                            </div>
                        </div>

                        {/* Book a Strategy Audit */}
                        <Link href="/strategy-call"
                            className="flex items-center justify-between p-6 rounded-2xl transition-all duration-300 group hover:scale-[1.02]"
                            style={{
                                background: 'rgba(47,232,162,0.04)',
                                border: '1px solid rgba(47,232,162,0.2)',
                                ...reveal(sidebarVisible, 200),
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(47,232,162,0.5)';
                                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(47,232,162,0.15)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(47,232,162,0.2)';
                                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                            }}>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.15em] mb-1" style={{ color: 'rgba(240,244,255,0.35)' }}>Direct Access</p>
                                <p className="text-sm font-black text-white">Book a Strategy Call</p>
                            </div>
                            <svg viewBox="0 0 20 20" fill={MINT} className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </Link>

                    </div>
                </div>
            </section>
        </main>
    );
}
