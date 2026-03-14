'use client';

import { useEffect, useRef, useState } from 'react';
import type { HowItWorksStep } from './HowItWorks';

interface HowItWorksClientProps {
  heading: string;
  subheading: string;
  badge: string;
  steps: HowItWorksStep[];
}

const STEP_COLORS = [
  { accent: '#FF2D78', glow: 'rgba(255,45,120,0.35)', orbColor: 'rgba(255,45,120,0.09)' },
  { accent: '#9B30FF', glow: 'rgba(155,48,255,0.35)', orbColor: 'rgba(155,48,255,0.09)' },
  { accent: '#00E5FF', glow: 'rgba(0,229,255,0.35)', orbColor: 'rgba(0,229,255,0.07)' },
] as const;

function getStepStyle(index: number) {
  return STEP_COLORS[index % STEP_COLORS.length];
}

export function HowItWorksClient({
  heading,
  subheading,
  badge,
  steps,
}: HowItWorksClientProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const orbRef1 = useRef<HTMLDivElement>(null);
  const orbRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const orbs = [orbRef1, orbRef2];
    const offsets = [0, 3.1];
    let frame: number;
    const animate = () => {
      const t = Date.now() / 1000;
      orbs.forEach((ref, i) => {
        if (!ref.current) return;
        const ox = Math.sin(t * 0.24 + offsets[i]) * 35;
        const oy = Math.cos(t * 0.19 + offsets[i]) * 25;
        ref.current.style.transform = `translate(${ox}px, ${oy}px)`;
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const reveal = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
  });

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-28 px-6 lg:px-8 overflow-hidden"
      style={{ background: '#000000' }}
    >
      <style>{`
        @keyframes howItWorksShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,45,120,0.0); }
          50%       { box-shadow: 0 0 0 6px rgba(255,45,120,0.0); }
        }
        @keyframes ringPing {
          0%   { transform: scale(1);   opacity: 0.55; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes connectorFlow {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
      `}</style>

      {/* Floating ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          ref={orbRef1}
          className="absolute"
          style={{
            top: '10%',
            left: '0%',
            width: 480,
            height: 480,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,45,120,0.08) 0%, transparent 65%)',
            willChange: 'transform',
          }}
        />
        <div
          ref={orbRef2}
          className="absolute"
          style={{
            bottom: '5%',
            right: '5%',
            width: 440,
            height: 440,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 65%)',
            willChange: 'transform',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
            style={{
              background: 'rgba(255,45,120,0.1)',
              border: '1px solid rgba(255,45,120,0.25)',
              color: '#FF2D78',
              ...reveal(0),
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-3.5 h-3.5 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            {badge}
          </div>

          <h2
            className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4"
            style={reveal(100)}
          >
            {heading}
          </h2>

          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: 'rgba(240,244,255,0.5)', ...reveal(200) }}
          >
            {subheading}
          </p>
        </div>

        {/* Mobile: stacked */}
        <div className="flex flex-col gap-6 lg:hidden">
          {steps.map((step, i) => {
            const style = getStepStyle(i);
            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center p-8 rounded-2xl"
                style={{
                  background: '#000000',
                  border: `1px solid ${style.accent}66`,
                  boxShadow: `0 0 30px ${style.glow.replace('0.35', '0.45')}, 0 0 80px ${style.glow.replace('0.35', '0.15')}, 0 0 160px ${style.glow.replace('0.35', '0.06')}`,
                  ...reveal(300 + i * 150),
                }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                  style={{ background: style.accent, boxShadow: `0 0 8px ${style.accent}` }}
                />
                <div className="relative w-16 h-16 mb-6 shrink-0">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: `2px solid ${style.accent}`,
                      animation: `ringPing 2s ease-out infinite`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-full border-2 flex items-center justify-center font-black text-xl z-10"
                    style={{
                      borderColor: style.accent,
                      color: style.accent,
                      background: `${style.accent}12`,
                      boxShadow: `0 0 18px ${style.glow}`,
                    }}
                  >
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-black text-white mb-4">
                  {step.title}
                </h3>
                <ul className="text-left space-y-2 w-full">
                  {step.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: 'rgba(240,244,255,0.65)' }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-3.5 h-3.5 mt-0.5 shrink-0"
                        stroke={style.accent}
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Desktop: flex row with inline connectors */}
        <div className="hidden lg:flex items-stretch">
          {steps.map((step, i) => {
            const style = getStepStyle(i);
            const nextStyle = i < steps.length - 1 ? getStepStyle(i + 1) : null;
            return (
              <div key={step.number} className="contents">
                <div
                  className="relative flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300"
                  style={{
                    flex: 1,
                    background: '#000000',
                    border: `1px solid ${style.accent}66`,
                    boxShadow: `0 0 30px ${style.glow.replace('0.35', '0.45')}, 0 0 80px ${style.glow.replace('0.35', '0.15')}, 0 0 160px ${style.glow.replace('0.35', '0.06')}`,
                    ...reveal(300 + i * 150),
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 45px ${style.glow}, 0 14px 40px rgba(0,0,0,0.5)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 28px ${style.glow.replace('0.35', '0.2')}, 0 4px 16px rgba(0,0,0,0.4)`;
                  }}
                >
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                    style={{
                      background: style.accent,
                      boxShadow: `0 0 8px ${style.accent}`,
                    }}
                  />

                  <div className="relative w-16 h-16 mb-6 shrink-0">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: `2px solid ${style.accent}`,
                        animation: `ringPing 2s ease-out infinite`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-full border-2 flex items-center justify-center font-black text-xl z-10"
                      style={{
                        borderColor: style.accent,
                        color: style.accent,
                        background: `${style.accent}12`,
                        boxShadow: `0 0 18px ${style.glow}`,
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white mb-4">
                    {step.title}
                  </h3>
                  <ul className="text-left space-y-2 w-full">
                    {step.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: 'rgba(240,244,255,0.65)' }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-3.5 h-3.5 mt-0.5 shrink-0"
                          stroke={style.accent}
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {i < steps.length - 1 && nextStyle && (
                  <div
                    className="flex items-start justify-center shrink-0 pt-[2.6rem]"
                    style={{ width: '3rem' }}
                  >
                    <div
                      className="w-full h-[2px]"
                      style={{
                        background: `linear-gradient(90deg, ${style.accent}, ${nextStyle.accent})`,
                        backgroundSize: '200% 100%',
                        animation: 'connectorFlow 3s linear infinite',
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
