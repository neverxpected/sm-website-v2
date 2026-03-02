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
        style={{ background: '#0A0F1C' }}
      >
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 animate-gradient-shift"
          style={{
            background: 'linear-gradient(135deg, #0A0F1C 0%, #1a0a2e 25%, #0a1628 50%, #1a0818 75%, #0A0F1C 100%)',
            backgroundSize: '400% 400%',
          }}
        />

        {/* Floating orbs — Level 4 ambient */}
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-24 lg:pt-0 pb-4 lg:-mt-10">
          <div className="max-w-5xl mx-auto text-center">

            {/* Eyebrow */}
            <div className="reveal reveal-delay-100 inline-flex items-center gap-2 mb-8 px-3 py-2 rounded-full text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center leading-tight"
              style={{
                background: 'rgba(255,45,120,0.1)',
                border: '1px solid rgba(255,45,120,0.35)',
                color: '#FF2D78',
                animation: 'eyebrowGlowPink 3s ease-in-out infinite',
              }}>
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse shrink-0" />
              A HOUSTON BASED DIGITAL MARKETING &amp; AI AGENCY
            </div>

            {/* Headline */}
            <h1 className="font-black tracking-tight text-white leading-[0.95] mb-8">
              <span className="reveal block text-3xl sm:text-5xl lg:text-6xl xl:text-7xl reveal-delay-100">
                THE CHEAT CODE
              </span>
              <span className="reveal block text-3xl sm:text-5xl lg:text-6xl xl:text-7xl reveal-delay-200">
                TO{' '}
                <style>{`
                  @keyframes digitallyScaleShimmer {
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
                  animation: 'digitallyScaleShimmer 4s linear infinite',
                  display: 'inline-block',
                }}>
                  DIGITALLY SCALE
                </span>
              </span>
              <span className="reveal block text-3xl sm:text-5xl lg:text-6xl xl:text-7xl reveal-delay-300">
                YOUR BUSINESS
              </span>
            </h1>

            {/* Stats bar — above CTAs */}
            <div className="reveal reveal-delay-400 flex flex-nowrap items-center justify-center gap-4 sm:gap-8 mb-8">
              {[
                { value: '$20M+', label: 'Revenue Generated', mobileHide: false },
                { value: '50+', label: 'Businesses Worked With', mobileHide: false },
                { value: '7 Years', label: 'In Business', mobileHide: true },
              ].map((stat) => (
                <div key={stat.label} className={`text-center min-w-0 ${stat.mobileHide ? 'hidden sm:block' : ''}`}>
                  <p className="text-2xl sm:text-3xl font-black mb-1 whitespace-nowrap"
                    style={{ background: 'linear-gradient(90deg, #FF2D78, #9B30FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {stat.value}
                  </p>
                  <p className="text-[9px] sm:text-xs font-semibold uppercase tracking-widest whitespace-nowrap" style={{ color: 'rgba(240,244,255,0.4)' }}>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="reveal reveal-delay-500 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="https://calendly.com/switchmedia/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-xl transition-transform duration-300 hover:scale-105 active:scale-100 whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)', animation: 'ctaGlowPink 3s ease-in-out infinite' }}
              >
                Book a Strategy Call
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
              >
                View Results
              </Link>
            </div>

            {/* Trust badges — one row */}
            <div className="reveal reveal-delay-600 flex flex-nowrap items-center justify-center gap-3 sm:gap-6">
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

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #0A0F1C)' }} />
      </section>


      {/* ── REST OF PAGE ─────────────────────────────────── */}
      <TrustedBy />
      <ServiceGrid />
      <AIAdvantage />
      <CaseStudies />
      <MeetTheTeam />
      <ContactSection />
    </div>
  );
}
