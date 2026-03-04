"use client";

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import ServiceGrid from './ServiceGrid';
import AIAdvantage from './AIAdvantage';
import CaseStudies from './CaseStudies';
import ContactSection from './ContactSection';
import MeetTheTeam from './MeetTheTeam';
import TrustedBy from './TrustedBy';
import LightRays from './LightRays';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';


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

      {/* ── HERO + TRUSTED BY shared background ───────────── */}
      <div className="relative overflow-hidden" style={{ background: '#0A0F1C' }}>

        {/* Animated gradient background — spans hero + trusted by */}
        <div
          className="absolute inset-0 animate-gradient-shift pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #0A0F1C 0%, #1a0a2e 25%, #0a1628 50%, #1a0818 75%, #0A0F1C 100%)',
            backgroundSize: '400% 400%',
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none animate-float"
          style={{ background: 'radial-gradient(circle, rgba(155,48,255,0.18) 0%, transparent 70%)', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 left-1/5 w-[400px] h-[400px] rounded-full pointer-events-none animate-float"
          style={{ background: 'radial-gradient(circle, rgba(255,45,120,0.14) 0%, transparent 70%)', animationDelay: '2.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-float"
          style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)', animationDelay: '5s' }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* ── HERO ─────────────────────────────────────────── */}
        <section
          className="relative min-h-0 sm:min-h-[85vh] flex flex-col justify-center"
        >
          {/* Light rays overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.55, zIndex: 1 }}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#FF2D78"
              raysSpeed={1.1}
              lightSpread={0.5}
              rayLength={3}
              followMouse={true}
              mouseInfluence={0.1}
              pulsating={false}
              fadeDistance={1}
              saturation={1}
            />
          </div>

          {/* CTA glow keyframe */}
          <style>{`
              @keyframes ctaGlowPink {
                0%, 100% { box-shadow: 0 0 16px rgba(255,45,120,0.4), 0 0 44px rgba(155,48,255,0.18); }
                50%       { box-shadow: 0 0 32px rgba(255,45,120,0.75), 0 0 80px rgba(155,48,255,0.38); }
              }
              @keyframes eyebrowGlowPink {
                0%, 100% { box-shadow: 0 0 8px rgba(255,45,120,0.20), 0 0 20px rgba(255,45,120,0.08); border-color: rgba(255,45,120,0.30); }
                50%       { box-shadow: 0 0 16px rgba(255,45,120,0.50), 0 0 40px rgba(255,45,120,0.20); border-color: rgba(255,45,120,0.60); }
              }
            `}</style>

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-28 md:pt-28 lg:pt-32 pb-4 sm:pb-12">
            <div className="max-w-7xl mx-auto text-center">

              {/* Eyebrow */}
              <div className="reveal reveal-delay-100 inline-flex items-center gap-2 mb-8 px-3 py-2 rounded-full text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center leading-tight"
                style={{
                  background: 'rgba(255,45,120,0.1)',
                  border: '1px solid rgba(255,45,120,0.35)',
                  color: '#FF2D78',
                  animation: 'eyebrowGlowPink 3s ease-in-out infinite',
                }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0 animate-pulse">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                A HOUSTON BASED DIGITAL MARKETING &amp; AI AGENCY
              </div>

              {/* Headline */}
              <h1 className="font-black tracking-tight text-white leading-[0.95] mb-8" style={{ fontWeight: 800 }}>
                <span className="reveal block text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl reveal-delay-100">
                  THE{' '}
                  <style>{`
                  @keyframes cheatCodeShimmer {
                    0%   { background-position: 200% center; }
                    100% { background-position: -200% center; }
                  }
                `}</style>
                  <span style={{
                    background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    backgroundSize: '200% auto',
                    animation: 'cheatCodeShimmer 4s linear infinite',
                    display: 'inline-block',
                  }}>
                    CHEAT CODE
                  </span>
                </span>
                <span className="reveal block text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl sm:whitespace-nowrap reveal-delay-200">
                  TO DIGITALLY SCALE
                </span>
                <span className="reveal block text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl reveal-delay-300">
                  YOUR BUSINESS
                </span>
              </h1>

              {/* Stats bar — above CTAs */}
              <div className="reveal reveal-delay-400 hidden sm:flex flex-nowrap items-center justify-center gap-3 sm:gap-8 mb-3">
                {[
                  { value: '$20M+', label: 'Revenue Generated' },
                  { value: '50+', label: 'Businesses Worked With' },
                  { value: '7 Years', label: 'In Business' },
                ].map((stat, i) => (
                  <div key={stat.label} className="text-center min-w-0 flex-1 sm:flex-none">
                    <p className="text-lg sm:text-3xl font-black mb-1 whitespace-nowrap"
                      style={{ background: 'linear-gradient(90deg, #FF2D78, #9B30FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {stat.value}
                    </p>
                    <p className="text-[7px] sm:text-xs font-semibold uppercase tracking-[0.08em] sm:tracking-widest" style={{ color: 'rgba(240,244,255,0.4)' }}>{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Trust badges — one row */}
              <div className="reveal reveal-delay-500 hidden sm:flex flex-nowrap items-center justify-center gap-3 sm:gap-6 mb-6">
                {[
                  'No long-term contracts',
                  'Results in 30 days',
                  'Free strategy session',
                ].map((badge) => (
                  <span key={badge} className="flex items-center gap-1.5 text-[10px] sm:text-sm font-medium whitespace-nowrap" style={{ color: 'rgba(240,244,255,0.55)' }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#00E5FF', boxShadow: '0 0 6px rgba(0,229,255,0.7)' }} />
                    {badge}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="reveal reveal-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link
                  href="/strategy-call"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-xl transition-transform duration-300 hover:scale-105 active:scale-100 whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)', animation: 'ctaGlowPink 3s ease-in-out infinite' }}
                >
                  Book a Strategy Call
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>

          {/* Bottom fade into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(10,15,28,0.6))' }} />
        </section>

        {/* ── TRUSTED BY — same background ──────────────────── */}
        <TrustedBy />

      </div > {/* end shared background */}

      {/* ── REST OF PAGE ─────────────────────────────────── */}
      <ServiceGrid />
      <HowItWorks />
      <AIAdvantage />
      <CaseStudies />
      <MeetTheTeam />
      <Testimonials />

      <ContactSection />
    </div >
  );
}
