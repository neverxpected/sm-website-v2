"use client";

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import ServiceGrid from './ServiceGrid';
import AIAdvantage from './AIAdvantage';
import CaseStudies from './CaseStudies';
import ContactSection from './ContactSection';
import MeetTheTeam from './MeetTheTeam';
import TrustedBy from './TrustedBy';

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

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-24 lg:pt-16 pb-16">
          <div className="max-w-5xl mx-auto text-center">

            {/* Eyebrow */}
            <div className="reveal reveal-delay-100 inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
              style={{ background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.25)', color: '#FF2D78' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Houston&apos;s #1 AI Marketing Agency
            </div>

            {/* Headline — Level 1 motion, staggered by line */}
            <h1 className="font-black tracking-tight text-white leading-[0.95] mb-8">
              <span className="reveal block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl reveal-delay-100">
                THE CHEAT CODE
              </span>
              <span className="reveal block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl reveal-delay-200">
                TO{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  DIGITALLY SCALE
                </span>
              </span>
              <span className="reveal block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl reveal-delay-300">
                YOUR BUSINESS
              </span>
            </h1>

            {/* Subheadline — Level 2, slide from left */}
            <p className="reveal reveal-left reveal-delay-400 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-10"
              style={{ color: 'rgba(240,244,255,0.55)' }}>
              Switch Media Co builds autonomous systems and high-performance ad engines that scale revenue across every timezone.{' '}
              <span style={{ color: 'rgba(240,244,255,0.85)' }}>Stop guessing. Start scaling.</span>
            </p>

            {/* CTAs — Level 3, slide up last */}
            <div className="reveal reveal-delay-500 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://calendly.com/switchmedia/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-xl transition-all duration-300 hover:scale-105 active:scale-100 animate-glow-pulse whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)' }}
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

            {/* Trust badges */}
            <div className="reveal reveal-delay-600 flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-8">
              {[
                'No long-term contracts',
                'Results in 30 days',
                'Free strategy session',
              ].map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-sm font-medium" style={{ color: 'rgba(240,244,255,0.55)' }}>
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#00E5FF', boxShadow: '0 0 6px rgba(0,229,255,0.7)' }} />
                  {badge}
                </span>
              ))}
            </div>

            {/* Stats bar */}
            <div className="reveal reveal-delay-600 flex flex-wrap items-center justify-center gap-8 mt-6 pt-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {[
                { value: '$40M+', label: 'Revenue Generated' },
                { value: '300+', label: 'Campaigns Launched' },
                { value: '8x', label: 'Average ROAS' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-white mb-1"
                    style={{ background: 'linear-gradient(90deg, #FF2D78, #9B30FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(240,244,255,0.4)' }}>{stat.label}</p>
                </div>
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
