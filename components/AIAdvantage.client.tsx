'use client'

import { useState } from 'react'
import Link from 'next/link'

export interface AIAdvantageTab {
  id: string
  label: string
  tagline: string
  heading: string
  description: string
  bullets: string[]
  href: string
  iconBg?: string
}

interface AIAdvantageClientProps {
  heading: string
  subheading: string
  badge: string
  tabs: AIAdvantageTab[]
}

const defaultIconBgs = ['bg-blue-500', 'bg-violet-600', 'bg-pink-500']
const accentColors = [
  { bg: 'rgba(0,229,255,0.12)', border: 'rgba(0,229,255,0.3)', text: '#00E5FF' },
  { bg: 'rgba(155,48,255,0.12)', border: 'rgba(155,48,255,0.3)', text: '#9B30FF' },
  { bg: 'rgba(255,45,120,0.12)', border: 'rgba(255,45,120,0.3)', text: '#FF2D78' },
]

export default function AIAdvantageClient({ heading, subheading, badge, tabs }: AIAdvantageClientProps) {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  if (!tab) return null

  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden" style={{ background: '#141B2E' }}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(155,48,255,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(155,48,255,0.1)', border: '1px solid rgba(155,48,255,0.25)', color: '#9B30FF' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            {badge}
          </div>
          <style>{`
            @keyframes aiAdvantageShimmer {
              0%   { background-position: 200% center; }
              100% { background-position: -200% center; }
            }
          `}</style>
          <h2 className="reveal reveal-delay-100 text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            <span style={{ background: 'linear-gradient(90deg, #9B30FF, #00E5FF, #9B30FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', backgroundSize: '200% auto', animation: 'aiAdvantageShimmer 4s linear infinite', display: 'inline-block', paddingBottom: '0.1em' }}>
              {heading}
            </span>
          </h2>
          <p className="reveal reveal-delay-200 text-base max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>
            {subheading}
          </p>
        </div>

        <div className="reveal reveal-delay-300 flex flex-col lg:flex-row gap-6 items-start">
          <div className="flex flex-col gap-2 w-full lg:w-64 shrink-0">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all duration-300 w-full"
                style={active === i ? {
                  background: accentColors[i % accentColors.length].bg,
                  border: `1px solid ${accentColors[i % accentColors.length].border}`,
                  boxShadow: `0 0 20px ${accentColors[i % accentColors.length].bg}`,
                } : {
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <span className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${t.iconBg ?? defaultIconBgs[i % defaultIconBgs.length]}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold truncate text-white">{t.label}</p>
                  <p className="text-xs truncate" style={{ color: active === i ? accentColors[i % accentColors.length].text : 'rgba(240,244,255,0.35)' }}>{t.tagline}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="flex-1 rounded-2xl p-8 min-h-[360px]"
            style={{ background: 'rgba(13,21,38,0.8)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
            <div className="flex flex-col lg:flex-row gap-8 h-full">
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
              <div className="lg:w-64 flex items-center justify-center rounded-xl p-5"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                {/* Visual placeholder when no custom visual from CMS */}
                <div className="text-sm text-white/40 text-center">Preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
