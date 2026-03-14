'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

interface StrategyCallClientProps {
  badge: string;
  heading: string;
  subheading: string;
  calendlyUrl: string;
}

export function StrategyCallPageClient({
  badge,
  heading,
  subheading,
  calendlyUrl,
}: StrategyCallClientProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [embedHeight, setEmbedHeight] = useState(900);

  useEffect(() => {
    function calcHeight() {
      const headerH = headerRef.current?.offsetHeight ?? 0;
      const available = window.innerHeight - headerH - 128;
      setEmbedHeight(Math.min(Math.max(available, 580), 750));
    }

    calcHeight();
    window.addEventListener('resize', calcHeight);
    return () => window.removeEventListener('resize', calcHeight);
  }, []);

  const calendlyEmbedUrl = calendlyUrl
    ? `${calendlyUrl}?primary_color=00c2ff&layout=month_view`
    : '';

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute" style={{
          top: '10%', left: '5%',
          width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,45,120,0.08) 0%, transparent 65%)',
        }} />
        <div className="absolute" style={{
          top: '40%', right: '5%',
          width: 480, height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155,48,255,0.09) 0%, transparent 65%)',
        }} />
      </div>

      {/* Page header */}
      <section ref={headerRef} className="relative z-10 pt-40 pb-10 px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
          style={{ background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.25)', color: '#FF2D78' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          {badge}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-tight mb-5">
          Book Your{' '}
          <span style={{
            background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '200% auto',
            animation: 'shimmer 4s linear infinite',
            display: 'inline-block',
          }}>
            Strategy Call
          </span>
        </h1>

        <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: 'rgba(240,244,255,0.55)' }}>
          {subheading || "Pick a time that works for you. We\u2019ll review your current marketing, identify the biggest growth levers, and map out a precision plan \u2014 no fluff, no pressure."}
        </p>
      </section>

      {/* Calendly embed */}
      {calendlyEmbedUrl && (
        <section className="relative z-10 pb-32 px-4 max-w-6xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
          >
            <div
              className="calendly-inline-widget"
              data-url={calendlyEmbedUrl}
              style={{ minWidth: '320px', height: `${embedHeight}px` }}
            />
          </div>
        </section>
      )}

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
