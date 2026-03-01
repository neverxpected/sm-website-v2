"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
    }


    return (
        <main
            className="relative min-h-screen text-white"
            style={{ background: "#0A0F1C" }}
        >
            {/* Grid pattern */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            />

            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div
                    className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(255,45,120,0.06) 0%, transparent 65%)",
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(155,48,255,0.07) 0%, transparent 65%)",
                    }}
                />
            </div>

            {/* Hero */}
            <section className="relative z-10 pt-40 pb-16 px-6 lg:px-8 max-w-6xl mx-auto">
                <p
                    className="text-xs font-bold uppercase tracking-[0.25em] mb-6"
                    style={{ color: "rgba(255,45,120,0.8)" }}
                >
                    Contact
                </p>
                <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight max-w-2xl">
                    Initialize Your Strategy.
                </h1>
                <p
                    className="text-base leading-relaxed max-w-xl"
                    style={{ color: "rgba(240,244,255,0.5)" }}
                >
                    Bridge the gap between fragmented data and autonomous growth. Reach
                    out to our engineering team to audit your current infrastructure.
                </p>
            </section>

            {/* Two-column layout */}
            <section className="relative z-10 pb-32 px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">

                    {/* Contact form */}
                    <div className="contact-gold-frame rounded-2xl p-8"
                        style={{ background: 'rgba(13,21,38,0.97)', backdropFilter: 'blur(16px)' }}
                    >
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                                <span className="w-14 h-14 rounded-full flex items-center justify-center"
                                    style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </span>
                                <h3 className="text-xl font-black text-white">Message Sent!</h3>
                                <p className="text-sm" style={{ color: 'rgba(240,244,255,0.5)' }}>We&apos;ll be in touch within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(240,244,255,0.45)' }}>Name <span style={{ color: '#FF2D78' }}>*</span></label>
                                        <input required type="text" placeholder="John Smith"
                                            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none transition-all appearance-none"
                                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }} />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(240,244,255,0.45)' }}>Email <span style={{ color: '#FF2D78' }}>*</span></label>
                                        <input required type="email" placeholder="john@company.com"
                                            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none transition-all appearance-none"
                                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(240,244,255,0.45)' }}>Company</label>
                                        <input type="text" placeholder="Company name"
                                            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none transition-all appearance-none"
                                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }} />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(240,244,255,0.45)' }}>Phone</label>
                                        <input type="tel" placeholder="+1 (555) 000-0000"
                                            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none transition-all appearance-none"
                                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(240,244,255,0.45)' }}>Service Interest</label>
                                        <div className="relative">
                                            <select className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all appearance-none cursor-pointer"
                                                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(240,244,255,0.5)', paddingRight: '2.5rem' }}>
                                                <option value="">Select a service</option>
                                                <option>Meta Ads</option>
                                                <option>Google Ads</option>
                                                <option>TikTok Ads</option>
                                                <option>AI Receptionist</option>
                                                <option>AI Integrations</option>
                                            </select>
                                            <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'rgba(240,244,255,0.3)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(240,244,255,0.45)' }}>Monthly Budget</label>
                                        <div className="relative">
                                            <select className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all appearance-none cursor-pointer"
                                                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(240,244,255,0.5)', paddingRight: '2.5rem' }}>
                                                <option value="">Select budget</option>
                                                <option>Under $5,000/mo</option>
                                                <option>$5,000 – $10,000/mo</option>
                                                <option>$10,000 – $25,000/mo</option>
                                                <option>$25,000+/mo</option>
                                            </select>
                                            <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'rgba(240,244,255,0.3)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(240,244,255,0.45)' }}>Message</label>
                                    <textarea rows={4} placeholder="Tell us about your business and goals..."
                                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none transition-all appearance-none resize-none"
                                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }} />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 text-white text-sm font-black rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-100"
                                    style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)', boxShadow: '0 0 30px rgba(255,45,120,0.3)' }}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Direct Access sidebar */}
                    <div className="flex flex-col gap-5">

                        {/* Location */}
                        <div
                            className="p-6 rounded-2xl flex gap-4 items-start"
                            style={{
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.07)",
                            }}
                        >
                            <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                                style={{
                                    background: "rgba(155,48,255,0.12)",
                                    border: "1px solid rgba(155,48,255,0.2)",
                                }}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="#9B30FF" strokeWidth={1.5} className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
                            <div>
                                <p
                                    className="text-xs font-bold uppercase tracking-[0.15em] mb-1"
                                    style={{ color: "rgba(240,244,255,0.35)" }}
                                >
                                    Location
                                </p>
                                <p className="text-sm font-semibold text-white">Houston, TX</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div
                            className="p-6 rounded-2xl flex gap-4 items-start"
                            style={{
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.07)",
                            }}
                        >
                            <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                                style={{
                                    background: "rgba(155,48,255,0.12)",
                                    border: "1px solid rgba(155,48,255,0.2)",
                                }}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="#9B30FF" strokeWidth={1.5} className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div>
                                <p
                                    className="text-xs font-bold uppercase tracking-[0.15em] mb-1"
                                    style={{ color: "rgba(240,244,255,0.35)" }}
                                >
                                    Email
                                </p>
                                <a
                                    href="mailto:charles@switchmediaco.com"
                                    className="text-sm font-semibold transition-colors duration-200"
                                    style={{ color: "#9B30FF" }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF2D78"; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#9B30FF"; }}
                                >
                                    charles@switchmediaco.com
                                </a>
                            </div>
                        </div>

                        {/* Book a Strategy Audit */}
                        <Link
                            href="https://calendly.com/switchmedia/15min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-6 rounded-2xl transition-all duration-300 group hover:scale-[1.02]"
                            style={{
                                background: "linear-gradient(135deg, rgba(255,45,120,0.1), rgba(155,48,255,0.1))",
                                border: "1px solid rgba(255,45,120,0.2)",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,45,120,0.45)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(255,45,120,0.12)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,45,120,0.2)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                            }}
                        >
                            <div>
                                <p
                                    className="text-xs font-bold uppercase tracking-[0.15em] mb-1"
                                    style={{ color: "rgba(240,244,255,0.35)" }}
                                >
                                    Direct Access
                                </p>
                                <p className="text-sm font-black text-white">
                                    Book a Strategy Audit
                                </p>
                            </div>
                            <svg
                                viewBox="0 0 20 20"
                                fill="#FF2D78"
                                className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>

                    </div>
                </div>
            </section>
        </main>
    );
}
