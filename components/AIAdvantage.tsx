"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    id: "receptionist",
    label: "AI Receptionist",
    tagline: "Never Miss Another Lead",
    iconBg: "bg-blue-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5S10 13.5 13.5 15.5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    heading: "AI Receptionist",
    description: "Your 24/7 virtual receptionist answers calls, qualifies leads, and books appointments—even at 3 AM.",
    bullets: [
      "Answers instantly, no hold times",
      "Qualifies leads with smart questions",
      "Books directly into your calendar",
      "Speaks naturally, not robotic",
      "Handles objections professionally",
    ],
    href: "/services/ai-receptionist",
    visual: (
      <div className="flex flex-col gap-3">
        <div className="self-end bg-white/10 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[220px]">
          <p className="text-xs text-white/70">Hi, I&apos;d like to book a consultation</p>
        </div>
        <div className="self-start bg-blue-600 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[240px]">
          <p className="text-[10px] font-semibold text-blue-200 mb-1">AI Assistant</p>
          <p className="text-xs text-white">I&apos;d be happy to help! May I ask what service you&apos;re interested in?</p>
        </div>
        <div className="self-end bg-white/10 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[220px]">
          <p className="text-xs text-white/70">I&apos;m looking at botox treatments</p>
        </div>
        <div className="self-start bg-blue-600 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[240px]">
          <p className="text-[10px] font-semibold text-blue-200 mb-1">AI Assistant</p>
          <p className="text-xs text-white">Great choice! I have availability this Thursday at 2pm or Friday at 10am. Which works better for you?</p>
        </div>
      </div>
    ),
  },
  {
    id: "automations",
    label: "Smart Automations",
    tagline: "Your Business on Autopilot",
    iconBg: "bg-violet-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.1-1.1m-.757-4.9a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    heading: "Smart Automations",
    description: "Connect your tools, trigger actions automatically, and let AI handle the repetitive tasks.",
    bullets: [
      "CRM auto-updates on new leads",
      "Instant SMS confirmations",
      "Smart follow-up sequences",
      "Calendar sync across platforms",
      "Custom workflow triggers",
    ],
    href: "/services/ai-system-integration",
    visual: (
      <div className="flex items-center justify-center gap-2 py-4">
        {[
          { icon: "💬", label: "Lead\nCaptured", color: "bg-blue-500/20 text-blue-400" },
          { icon: "🗄️", label: "CRM\nUpdated", color: "bg-emerald-500/20 text-emerald-400" },
          { icon: "📅", label: "Appointment\nSet", color: "bg-violet-500/20 text-violet-400" },
          { icon: "⚡", label: "Follow-up\nSent", color: "bg-amber-500/20 text-amber-400" },
        ].map((step, i) => (
          <div key={step.label} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-1.5">
              <span className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center text-lg`}>{step.icon}</span>
              <p className="text-[10px] text-white/40 text-center whitespace-pre-line leading-tight">{step.label}</p>
            </div>
            {i < 3 && <span className="text-white/20 text-xs mb-4">→</span>}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "nurturing",
    label: "AI Lead Nurturing",
    tagline: "Convert More, Automatically",
    iconBg: "bg-pink-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    heading: "AI Lead Nurturing",
    description: "Predictive engagement that knows when and how to follow up—turning cold leads into booked clients.",
    bullets: [
      "Predicts optimal contact times",
      "Personalizes every message",
      "Multi-channel outreach",
      "Learns from responses",
      "Escalates hot leads instantly",
    ],
    href: "/services/ai-system-integration",
    visual: (
      <div className="flex flex-col gap-2 w-full max-w-[240px]">
        {[
          { day: "Day 1", label: "Welcome sequence sent", active: false },
          { day: "Day 3", label: "Value content delivered", active: false },
          { day: "Day 5", label: "Engagement detected", active: false },
          { day: "Day 6", label: "Hot lead → Sales call booked", active: true },
        ].map((row) => (
          <div key={row.day} className={`flex items-center gap-3 px-3 py-2 rounded-xl ${row.active ? "bg-pink-500" : "bg-white/5"}`}>
            <span className={`text-[10px] font-semibold w-10 shrink-0 ${row.active ? "text-white" : "text-white/40"}`}>{row.day}</span>
            <span className={`w-2 h-2 rounded-full shrink-0 ${row.active ? "bg-white" : "bg-white/20"}`} />
            <span className={`text-xs ${row.active ? "text-white font-semibold" : "text-white/60"}`}>{row.label}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function AIAdvantage() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  const accentColors = [
    { bg: 'rgba(0,229,255,0.12)', border: 'rgba(0,229,255,0.3)', text: '#00E5FF' },
    { bg: 'rgba(155,48,255,0.12)', border: 'rgba(155,48,255,0.3)', text: '#9B30FF' },
    { bg: 'rgba(255,45,120,0.12)', border: 'rgba(255,45,120,0.3)', text: '#FF2D78' },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden" style={{ background: '#0D1526' }}>
      {/* Background orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(155,48,255,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(155,48,255,0.1)', border: '1px solid rgba(155,48,255,0.25)', color: '#9B30FF' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            AI Solutions
          </div>
          <h2 className="reveal reveal-delay-100 text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            The{' '}
            <span style={{ background: 'linear-gradient(90deg, #9B30FF, #00E5FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              AI Advantage
            </span>
          </h2>
          <p className="reveal reveal-delay-200 text-base max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>
            See how our AI systems work together to capture, qualify, and convert leads while you focus on what matters.
          </p>
        </div>

        {/* Main layout */}
        <div className="reveal reveal-delay-300 flex flex-col lg:flex-row gap-6 items-start">

          {/* Left — tab buttons */}
          <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-64 shrink-0">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className="flex items-center gap-3 px-4 py-4 rounded-2xl text-left transition-all duration-300 w-full"
                style={active === i ? {
                  background: accentColors[i].bg,
                  border: `1px solid ${accentColors[i].border}`,
                  boxShadow: `0 0 20px ${accentColors[i].bg}`,
                } : {
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <span className={`w-9 h-9 rounded-xl ${t.iconBg} flex items-center justify-center shrink-0`}>
                  {t.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold truncate text-white">{t.label}</p>
                  <p className="text-xs truncate" style={{ color: active === i ? accentColors[i].text : 'rgba(240,244,255,0.35)' }}>{t.tagline}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right — content panel */}
          <div className="flex-1 rounded-2xl p-8 min-h-[360px]"
            style={{ background: 'rgba(13,21,38,0.8)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
            <div className="flex flex-col lg:flex-row gap-8 h-full">

              {/* Text */}
              <div className="flex-1 flex flex-col gap-5">
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">{tab.heading}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>{tab.description}</p>
                </div>
                <ul className="space-y-2.5">
                  {tab.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mt-0.5 shrink-0" stroke="#9B30FF" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm" style={{ color: 'rgba(240,244,255,0.7)' }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <Link
                    href={tab.href}
                    className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #9B30FF, #FF2D78)', boxShadow: '0 0 20px rgba(155,48,255,0.3)' }}
                  >
                    Get Started
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Visual */}
              <div className="lg:w-64 flex items-center justify-center rounded-xl p-5"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                {tab.visual}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
