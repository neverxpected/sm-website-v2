"use client";

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import ServiceGrid from './ServiceGrid';
import AIAdvantage from './AIAdvantage';
import CaseStudies from './CaseStudies';
import ContactSection from './ContactSection';
import MeetTheTeam from './MeetTheTeam';
import TrustedBy from './TrustedBy';
import { lime } from '@/lib/cyberLime';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grain" ref={heroRef}>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: lime.bg }}
      >
        {/* Graph paper grid overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(163,230,53,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.04) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />

        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none animate-float"
          style={{ background: `radial-gradient(circle, ${lime.glow} 0%, transparent 70%)`, animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 left-1/5 w-[400px] h-[400px] rounded-full pointer-events-none animate-float"
          style={{ background: `radial-gradient(circle, rgba(163,230,53,0.10) 0%, transparent 70%)`, animationDelay: '2.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-float"
          style={{ background: `radial-gradient(circle, rgba(163,230,53,0.06) 0%, transparent 70%)`, animationDelay: '5s' }} />

        {/* =====================================================
            DATA SPIRIT CHARACTERS — placeholder
            Insert 'Data Spirit' characters with flashlights here.
            Each spirit is an absolutely-positioned animated SVG/PNG
            that sweeps a lime-tinted light cone across the dark bg.
            ===================================================== */}


        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-24 lg:pt-16 pb-16">
          <div className="max-w-5xl mx-auto text-center">

            {/* Eyebrow */}
            <div className="reveal reveal-delay-100 inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap"
              style={{
                background: 'rgba(163,230,53,0.08)',
                border: '1px solid rgba(163,230,53,0.35)',
                color: lime.accent,
                boxShadow: '0 0 12px rgba(163,230,53,0.25), 0 0 30px rgba(163,230,53,0.10)',
                animation: 'eyebrowGlow 3s ease-in-out infinite',
              }}>
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              A HOUSTON BASED DIGITAL MARKETING &amp; AI AGENCY
            </div>

            {/* Headline */}
            <h1 className="font-black tracking-tight text-white leading-[0.95] mb-8">
              <span className="reveal block text-3xl sm:text-5xl lg:text-6xl xl:text-7xl reveal-delay-100">
                THE CHEAT CODE
              </span>
              <span className="reveal block text-3xl sm:text-5xl lg:text-6xl xl:text-7xl reveal-delay-200">
                TO{' '}
                <span style={{
                  background: lime.gradText,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  DIGITALLY SCALE
                </span>
              </span>
              <span className="reveal block text-3xl sm:text-5xl lg:text-6xl xl:text-7xl reveal-delay-300">
                YOUR BUSINESS
              </span>
            </h1>


            {/* Stats bar */}
            <div className="reveal reveal-delay-400 flex flex-wrap items-center justify-center gap-8 mb-8">
              {[
                { value: '$40M+', label: 'Revenue Generated' },
                { value: '300+', label: 'Campaigns Launched' },
                { value: '8x', label: 'Average ROAS' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-black mb-1"
                    style={{ background: lime.gradText, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(240,244,255,0.4)' }}>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="reveal reveal-delay-500 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="https://calendly.com/switchmedia/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black rounded-xl transition-all duration-300 hover:scale-105 active:scale-100 whitespace-nowrap"
                style={{ background: lime.grad, boxShadow: `0 0 24px ${lime.glow}` }}
              >
                Book a Strategy Call
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid rgba(163,230,53,0.20)`, backdropFilter: 'blur(10px)' }}
              >
                View Results
              </Link>
            </div>

            {/* Trust badges */}
            <div className="reveal reveal-delay-600 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {[
                'No long-term contracts',
                'Results in 30 days',
                'Free strategy session',
              ].map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-sm font-medium" style={{ color: 'rgba(240,244,255,0.55)' }}>
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: lime.accent, boxShadow: `0 0 6px ${lime.glowStrong}` }} />
                  {badge}
                </span>
              ))}
            </div>


          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${lime.bg})` }} />
      </section >

      {/* ── REST OF PAGE ─────────────────────────────────── */}
      < TrustedBy />
      <ServiceGrid />
      <AIAdvantage />
      <CaseStudies />
      <MeetTheTeam />
      <ContactSection />
    </div >
  );
}
