"use client";

import Link from "next/link";
import { useState } from "react";

const interests = [
    { value: "", label: "Select primary interest" },
    { value: "paid-ads", label: "Paid Ads" },
    { value: "ai-voice", label: "AI Voice" },
    { value: "ai-workflow", label: "AI Workflow" },
    { value: "full-infrastructure", label: "Full Infrastructure" },
];

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        website: "",
        interest: "",
    });
    const [submitted, setSubmitted] = useState(false);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

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
                    <div
                        className="p-8 lg:p-10 rounded-2xl"
                        style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.07)",
                        }}
                    >
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgba(255,45,120,0.15), rgba(155,48,255,0.15))",
                                        border: "1px solid rgba(255,45,120,0.3)",
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#FF2D78"
                                        strokeWidth={2.5}
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-black text-white">
                                    Request Received
                                </h2>
                                <p
                                    className="text-sm leading-relaxed max-w-sm"
                                    style={{ color: "rgba(240,244,255,0.45)" }}
                                >
                                    Our team will review your infrastructure and respond within
                                    one business day.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <h2 className="text-lg font-black text-white mb-2">
                                    Start the Conversation
                                </h2>

                                {/* Name */}
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="name"
                                        className="text-xs font-bold uppercase tracking-[0.15em]"
                                        style={{ color: "rgba(240,244,255,0.4)" }}
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Charles Johnson"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                                        style={{
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.09)",
                                        }}
                                        onFocus={(e) => {
                                            e.currentTarget.style.border = "1px solid rgba(255,45,120,0.5)";
                                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,45,120,0.08)";
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.09)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="email"
                                        className="text-xs font-bold uppercase tracking-[0.15em]"
                                        style={{ color: "rgba(240,244,255,0.4)" }}
                                    >
                                        Company Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="you@yourcompany.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                                        style={{
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.09)",
                                        }}
                                        onFocus={(e) => {
                                            e.currentTarget.style.border = "1px solid rgba(255,45,120,0.5)";
                                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,45,120,0.08)";
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.09)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    />
                                </div>

                                {/* Website */}
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="website"
                                        className="text-xs font-bold uppercase tracking-[0.15em]"
                                        style={{ color: "rgba(240,244,255,0.4)" }}
                                    >
                                        Website URL
                                    </label>
                                    <input
                                        id="website"
                                        name="website"
                                        type="url"
                                        placeholder="https://yoursite.com"
                                        value={form.website}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                                        style={{
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.09)",
                                        }}
                                        onFocus={(e) => {
                                            e.currentTarget.style.border = "1px solid rgba(255,45,120,0.5)";
                                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,45,120,0.08)";
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.09)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    />
                                </div>

                                {/* Interest dropdown */}
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="interest"
                                        className="text-xs font-bold uppercase tracking-[0.15em]"
                                        style={{ color: "rgba(240,244,255,0.4)" }}
                                    >
                                        Primary Integration Interest
                                    </label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        required
                                        value={form.interest}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
                                        style={{
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.09)",
                                            color: form.interest ? "white" : "rgba(255,255,255,0.2)",
                                        }}
                                        onFocus={(e) => {
                                            e.currentTarget.style.border = "1px solid rgba(255,45,120,0.5)";
                                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,45,120,0.08)";
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.09)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        {interests.map((opt) => (
                                            <option
                                                key={opt.value}
                                                value={opt.value}
                                                disabled={opt.value === ""}
                                                style={{ background: "#0A0F1C", color: "white" }}
                                            >
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="mt-2 w-full py-4 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
                                    style={{
                                        background: "linear-gradient(135deg, #FF2D78, #9B30FF)",
                                        boxShadow: "0 0 24px rgba(255,45,120,0.25)",
                                    }}
                                >
                                    Send Inquiry
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
