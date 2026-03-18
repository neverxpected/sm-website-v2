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

      {/* ── HERO + TRUSTED BY — one unified section ─────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#FFFFFF' }}
      >



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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-40 pb-8 sm:pb-16">
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
            <h1 className="font-black tracking-tight leading-[1.1] mb-8" style={{ fontWeight: 800, color: '#1a1a2e' }}>
              <style>{`
                @keyframes cheatCodeShimmer {
                  0%   { background-position: 200% center; }
                  100% { background-position: -200% center; }
                }
              `}</style>
              <span className="reveal block text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl reveal-delay-100">
                Your Business Is
              </span>
              <span className="reveal block text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl reveal-delay-200">
                <span style={{
                  background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% auto',
                  animation: 'cheatCodeShimmer 4s linear infinite',
                  display: 'inline-block',
                  paddingBottom: '0.15em',
                }}>
                  One System Away
                </span>
              </span>
              <span className="reveal block text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl reveal-delay-300">
                From Never Chasing
              </span>
              <span className="reveal block text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl reveal-delay-400">
                Growth Again
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="reveal reveal-delay-500 hidden sm:block max-w-2xl mx-auto text-xs sm:text-sm md:text-base mb-10" style={{ color: 'rgba(26,26,46,0.6)', lineHeight: 1.7 }}>
              Most businesses don&apos;t have a marketing problem. They have a systems problem. I come in, find where the revenue is leaking, and build the AI-powered infrastructure that fills it — so you can scale predictably instead of guessing every month.
            </p>




            {/* CTAs */}
            <div className="reveal reveal-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="/strategy-call"
                className="inline-flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white rounded-xl transition-transform duration-300 hover:scale-105 active:scale-100 text-center"
                style={{ background: '#000000' }}
              >
                Let&apos;s Figure Out What&apos;s Holding You Back →
              </Link>
            </div>

          </div>
        </div>

      </section>

      {/* ── TRUSTED BY — light standalone section ─────────── */}
      <section style={{ background: '#ffffff' }}>
        <div className="relative z-10">
          <TrustedBy />
        </div>
      </section>

      {/* ── REST OF PAGE ─────────────────────────────────── */}
      <ServiceGrid />
      <HowItWorks />

      <CaseStudies />
      <Testimonials />
      <MeetTheTeam />

      <ContactSection />
    </div >
  );
}
