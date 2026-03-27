"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ParticleField from './ParticleField';

const cases = [
  {
    category: "Med Spa",
    name: "Radiant with Rebecca",
    description: "Rebecca came to us in 2021 running a mobile med spa. We built her Meta ad campaigns from scratch and focused on building a real patient pipeline. Over the next few years those ads helped generate over $1M in added revenue and enough demand that she opened a second location. She is still a client today.",
    href: "/contact",
    photo: "/images/client-results/radiant med spa olathe kansas.webp",
    accentHex: "#2fe8a2",
    accentHex2: "#5fffc2",
    stats: [
      { emoji: "⏱️", label: "Worked Together", value: "5+ Years" },
      { emoji: "💰", label: "Added Revenue", value: "$1M+" },
    ],
  },
  {
    category: "Fitness",
    name: "illumiNate Heights Fitness",
    description: "Nate and Jourdan run one of the best gyms in Houston and they needed a lead pipeline that matched their ambition. Over 5 years we've generated more than 5,000 qualified leads for their membership programs. Their gym keeps growing and so does our partnership.",
    href: "/contact",
    photo: "/images/client-results/illuminate heights fitness.webp",
    accentHex: "#2fe8a2",
    accentHex2: "#5fffc2",
    stats: [
      { emoji: "⏱️", label: "Worked Together", value: "4+ Years" },
      { emoji: "👥", label: "Leads Generated", value: "5,000+" },
    ],
  },
  {
    category: "Plastic Surgery",
    name: "The Oaks Plastic Surgery",
    description: "Dr. Wijay and Dr. Andry are two of Houston's top plastic surgeons. Since 2022 we've helped them book over 5,000 consultations through paid advertising -- for procedures like liposuction, breast augmentations, tummy tucks and Semaglutide. They've since partnered with Elite Dermatology and we've scaled with them every step of the way.",
    href: "/contact",
    photo: "/images/client-results/oaks plastic surgery.webp",
    accentHex: "#2fe8a2",
    accentHex2: "#5fffc2",
    stats: [
      { emoji: "⏱️", label: "Worked Together", value: "4+ Years" },
      { emoji: "👥", label: "Leads Generated", value: "4,500+" },
    ],
  },
];

function CountUpStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState('0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Parse the numeric part
          const prefix = value.match(/^\$/)?.[0] || '';
          const suffix = value.match(/[+M]*$/)?.[0] || '';
          const numStr = value.replace(/[^0-9.]/g, '');
          const target = parseFloat(numStr) || 0;
          const isDecimal = numStr.includes('.');
          const duration = 2500;
          const steps = 60;
          const stepTime = duration / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += target / steps;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            const formatted = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString();
            setDisplay(`${prefix}${formatted}${suffix}`);
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-black" style={{
        fontSize: 'clamp(28px, 5vw, 48px)',
        lineHeight: 1,
        background: 'linear-gradient(135deg, #2fe8a2, #5fffc2)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        filter: 'drop-shadow(0 0 20px rgba(47,232,162,0.5))',
      }}>
        {display}
      </p>
      <p className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] font-bold mt-2" style={{ color: 'rgba(240,244,255,0.4)' }}>
        {label}
      </p>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="py-10 lg:py-16 px-4 lg:px-8 relative overflow-hidden" style={{ background: '#000000' }}>
      <ParticleField count={50} />
      {/* Ambient orbs */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,45,120,0.06) 0%, transparent 70%)' }} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(47,232,162,0.08)', border: '1px solid rgba(47,232,162,0.2)', color: '#2fe8a2' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
            </svg>
            Client Results
          </div>
          <style>{`
            @keyframes realGrowthShimmer {
              0%   { background-position: 200% center; }
              100% { background-position: -200% center; }
            }
          `}</style>
          <h2 className="reveal reveal-delay-100 text-3xl lg:text-5xl font-black text-white tracking-tight mb-5">
            We Let the Numbers<br className="lg:hidden" />{' '}
            <span style={{ background: 'linear-gradient(90deg, #2fe8a2, #5fffc2, #2fe8a2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', backgroundSize: '200% auto', animation: 'realGrowthShimmer 4s linear infinite', display: 'inline-block', paddingBottom: '0.1em' }}>
              Do the Talking.
            </span>
          </h2>
          <p className="reveal reveal-delay-200 text-base lg:text-lg max-w-2xl lg:max-w-none mx-auto leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>
            Here&apos;s what actually happened when real businesses trusted us with their growth.
          </p>

          {/* Business summary stats */}
          {/* Mobile: card with title */}
          <div className="reveal reveal-delay-300 lg:hidden mt-10 relative rounded-2xl py-8 pt-10 px-3"
            style={{
              background: 'rgba(47,232,162,0.04)',
              border: '1px solid rgba(47,232,162,0.35)',
            }}>
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] whitespace-nowrap"
              style={{ background: '#2fe8a2', color: '#000000' }}>
              Our Track Record
            </span>
            <div className="grid grid-cols-3 gap-0">
              {[
                { value: '$20M+', label: 'In Client Sales' },
                { value: '50+', label: 'Businesses Scaled' },
                { value: '7', label: 'Years in Business' },
              ].map((stat, idx) => (
                <div key={stat.label} className="text-center relative px-1">
                  {idx > 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-10"
                      style={{ background: 'linear-gradient(to bottom, transparent, rgba(47,232,162,0.5), rgba(47,232,162,0.5), transparent)' }} />
                  )}
                  <CountUpStat value={stat.value} label={stat.label} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: bare stats */}
          <div className="reveal reveal-delay-300 hidden lg:flex items-center justify-center mt-10">
            <div className="relative flex items-center justify-center px-12 py-8 pt-10 rounded-2xl"
              style={{ border: '1px solid rgba(47,232,162,0.35)', background: 'rgba(47,232,162,0.04)' }}>
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap"
                style={{ background: '#2fe8a2', color: '#000000' }}>
                Our Track Record
              </span>
              {[
                { value: '$20M+', label: 'In Client Sales' },
                { value: '50+', label: 'Businesses Scaled' },
                { value: '7', label: 'Years in Business' },
              ].map((stat, idx) => (
                <div key={stat.label} className="flex items-center">
                  {idx > 0 && (
                    <div className="w-px h-16 mx-8 shrink-0"
                      style={{ background: 'linear-gradient(to bottom, transparent, rgba(47,232,162,0.3), rgba(47,232,162,0.3), transparent)' }} />
                  )}
                  <div className="min-w-[160px] text-center">
                    <CountUpStat value={stat.value} label={stat.label} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case study cards with connected stats tabs */}
        <div className="flex flex-col gap-16">
          {cases.map((c, i) => {
            const isReversed = i % 2 === 1;
            // Stats tab position: right for 0, left for 1, right for 2
            const statsOnRight = i % 2 === 0;
            return (
              <div key={c.name} className={`reveal reveal-delay-${(i + 1) * 100}`}>
                {/* Mobile: connected stats + card */}
                <div className="lg:hidden overflow-hidden rounded-3xl"
                  style={{
                    border: `1px solid ${c.accentHex}88`,
                    boxShadow: `0 0 14px ${c.accentHex}28, 0 0 40px ${c.accentHex}0e`,
                  }}
                >
                  {/* Stats panel on top */}
                  <div className="flex items-center justify-center gap-8 py-5 px-4"
                    style={{ background: 'rgba(0,0,0,0.95)' }}
                  >
                    {c.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="font-black" style={{
                          fontSize: '32px',
                          lineHeight: 1,
                          background: `linear-gradient(135deg, ${c.accentHex}, ${c.accentHex2})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: `drop-shadow(0 0 20px ${c.accentHex}60)`,
                        }}>
                          {stat.value}
                        </p>
                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold mt-1.5" style={{ color: 'rgba(240,244,255,0.4)' }}>
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Glow seam between stats and photo */}
                  <div style={{
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${c.accentHex}, ${c.accentHex2}, transparent)`,
                    boxShadow: `0 0 12px ${c.accentHex}80, 0 0 30px ${c.accentHex}40, 0 4px 20px ${c.accentHex2}30`,
                    position: 'relative',
                    zIndex: 10,
                  }} />

                  {/* Photo */}
                  <div className="relative shrink-0 overflow-hidden" style={{ minHeight: '140px' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.photo}
                      alt={c.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ objectPosition: 'center top' }}
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                        style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', color: 'rgba(240,244,255,0.9)', border: '1px solid rgba(255,255,255,0.15)' }}>
                        {c.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center gap-3 p-4 flex-1" style={{ background: '#ffffff' }}>
                    <div className="w-10 h-0.5 rounded-full" style={{ background: `linear-gradient(90deg, ${c.accentHex}, ${c.accentHex2})` }} />
                    <div>
                      <h3 className="text-base font-black mb-1" style={{ color: '#111827' }}>{c.name}</h3>
                      <p className="text-xs leading-relaxed line-clamp-3" style={{ color: '#4B5563' }}>{c.description}</p>
                    </div>
                    <div className="text-right">
                      <Link
                        href={c.href}
                        className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:gap-3"
                        style={{ color: c.accentHex }}
                      >
                        Work with us
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Desktop: card + connected stats tab */}
                <div className={`hidden lg:flex items-stretch ${statsOnRight ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Main card */}
                  <div
                    className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} overflow-hidden flex-1`}
                    style={{
                      background: '#000000',
                      border: `1px solid ${c.accentHex}88`,
                      borderRadius: statsOnRight ? '1.5rem 0 0 1.5rem' : '0 1.5rem 1.5rem 0',
                      boxShadow: `0 0 14px ${c.accentHex}28, 0 0 40px ${c.accentHex}0e`,
                      minHeight: '180px',
                    }}
                  >
                    {/* Photo */}
                    <div className="relative lg:w-[35%] shrink-0 overflow-hidden" style={{ minHeight: '140px' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.photo}
                        alt={c.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectPosition: 'center top' }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: isReversed
                            ? 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 50%)'
                            : 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 50%)',
                        }}
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', color: 'rgba(240,244,255,0.9)', border: '1px solid rgba(255,255,255,0.15)' }}>
                          {c.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center gap-3 p-4 lg:p-6 flex-1" style={{ background: '#ffffff' }}>
                      <div className="w-10 h-0.5 rounded-full" style={{ background: `linear-gradient(90deg, ${c.accentHex}, ${c.accentHex2})` }} />
                      <div>
                        <h3 className="text-base lg:text-lg font-black mb-1" style={{ color: '#111827' }}>{c.name}</h3>
                        <p className="text-xs leading-relaxed line-clamp-3" style={{ color: '#4B5563' }}>{c.description}</p>
                      </div>
                      <div className="text-left">
                        <Link
                          href={c.href}
                          className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:gap-3"
                          style={{ color: c.accentHex }}
                        >
                          Work with us
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Stats tab — connected side panel */}
                  <div
                    className="relative flex flex-col items-center justify-center gap-6 px-8 py-6 shrink-0"
                    style={{
                      background: 'rgba(0,0,0,0.95)',
                      border: `1px solid ${c.accentHex}88`,
                      borderLeft: statsOnRight ? 'none' : `1px solid ${c.accentHex}88`,
                      borderRight: statsOnRight ? `1px solid ${c.accentHex}88` : 'none',
                      borderRadius: statsOnRight ? '0 1.5rem 1.5rem 0' : '1.5rem 0 0 1.5rem',
                      boxShadow: `0 0 14px ${c.accentHex}28, 0 0 40px ${c.accentHex}0e`,
                      minWidth: '180px',
                    }}
                  >
                    {/* Vertical glow seam on connecting edge */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      [statsOnRight ? 'left' : 'right']: '-1px',
                      width: '2px',
                      background: `linear-gradient(to bottom, transparent, ${c.accentHex}, ${c.accentHex2}, transparent)`,
                      boxShadow: `0 0 12px ${c.accentHex}80, 0 0 30px ${c.accentHex}40`,
                      zIndex: 10,
                    }} />
                    {c.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="font-black" style={{
                          fontSize: '42px',
                          lineHeight: 1,
                          background: `linear-gradient(135deg, ${c.accentHex}, ${c.accentHex2})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: `drop-shadow(0 0 20px ${c.accentHex}60)`,
                        }}>
                          {stat.value}
                        </p>
                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold mt-2" style={{ color: 'rgba(240,244,255,0.4)' }}>
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
