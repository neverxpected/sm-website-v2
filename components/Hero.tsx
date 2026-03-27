"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
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
  const ROTATING_WORDS = ['More Leads', 'More Bookings', 'More Revenue', 'More ROI', 'More Calls', 'More Traffic'];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [ROTATING_WORDS.length]);

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
    <div className="grain" ref={heroRef} style={{ background: '#000000' }}>

      {/* ── HERO + TRUSTED BY — one unified section ─────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#000000' }}
      >
        {/* CTA glow keyframe */}
        <style>{`
              @keyframes ctaGlowMint {
                0%, 100% { box-shadow: 0 0 16px rgba(47,232,162,0.4), 0 0 44px rgba(47,232,162,0.18); }
                50%       { box-shadow: 0 0 32px rgba(47,232,162,0.75), 0 0 80px rgba(47,232,162,0.38); }
              }
              @keyframes eyebrowGlowMint {
                0%, 100% { box-shadow: 0 0 8px rgba(47,232,162,0.20), 0 0 20px rgba(47,232,162,0.08); border-color: rgba(47,232,162,0.30); }
                50%       { box-shadow: 0 0 16px rgba(47,232,162,0.50), 0 0 40px rgba(47,232,162,0.20); border-color: rgba(47,232,162,0.60); }
              }
            `}</style>

        {/* Subtle radial glow behind headline */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(47,232,162,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Mint green graph paper grid — desktop only, fades out at bottom */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(47,232,162,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(47,232,162,0.18) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 65% at 50% 35%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 60%, transparent 80%)',
            maskImage: 'radial-gradient(ellipse 70% 65% at 50% 35%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 60%, transparent 80%)',
          }}
        />

        {/* Content — fully centered */}
        <div className="relative z-10 w-full hero-content-wrap" style={{ padding: '5rem 2rem 2rem', paddingTop: '9rem' }}>
          <style>{`
            @keyframes heroBorderSpin {
              0%   { background-position: 0% 50%; }
              50%  { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            @media (max-width: 767px) {
              .hero-center-wrap {
                padding: 0.5rem 1rem 0.25rem !important;
                padding-top: 0.5rem !important;
              }
              .hero-headline-main {
                font-size: clamp(2rem, 7.5vw, 3rem) !important;
              }
              .hero-mobile-br {
                display: inline !important;
              }

              .hero-subline-br {
                display: none;
              }
              .hero-subline {
                font-size: 13px !important;
                line-height: 1.6 !important;
                max-width: 100% !important;
                margin-top: 0.75rem !important;
                margin-bottom: 1.25rem !important;
              }
              .hero-cta-inner {
                padding: 0.65rem 1.5rem !important;
                width: auto !important;
                display: inline-flex !important;
              }
              .hero-cta-wrap {
                margin-bottom: 0.5rem !important;
              }
              .hero-qualifier {
                font-size: 10px !important;
                white-space: nowrap !important;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
                padding-bottom: 0 !important;
              }
              .hero-content-wrap {
                padding-bottom: 1.5rem !important;
              }
            }
          `}</style>
          <div className="hero-center-wrap" style={{ margin: '0 auto', textAlign: 'center', position: 'relative', maxWidth: '900px' }}>




            {/* Headline */}
            <h1
              className="reveal reveal-delay-100 tracking-tight hero-headline-main"
              style={{
                fontWeight: 700,
                color: '#ffffff',
                fontSize: 'clamp(2.2rem, 7vw, 5.8rem)',
                lineHeight: 1.1,
                textAlign: 'center',
                width: 'fit-content',
                margin: '0 auto',
                overflow: 'visible',
              }}
            >
              <style>{`
                @keyframes heroWordSlideIn {
                  0%   { opacity: 0; transform: translateY(20px); }
                  15%  { opacity: 1; transform: translateY(0); }
                  85%  { opacity: 1; transform: translateY(0); }
                  100% { opacity: 0; transform: translateY(-20px); }
                }
              `}</style>
              <span style={{ display: 'block', whiteSpace: 'nowrap', padding: '0 0.1em' }}>Stop Guessing.</span>
              <span style={{
                display: 'block',
                whiteSpace: 'nowrap',
                padding: '0 0.15em 0.05em',
                color: 'rgba(255,255,255,0.85)',
              }}>Start Getting</span>
              <span
                key={wordIndex}
                style={{
                  display: 'block',
                  whiteSpace: 'nowrap',
                  padding: '0 0.1em',
                  marginTop: '-0.05em',
                  background: 'linear-gradient(90deg, #2fe8a2, #5fffc2, #2fe8a2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% auto',
                  animation: 'heroWordSlideIn 2.5s ease-in-out forwards, heroBorderSpin 3s linear infinite',
                }}
              >{ROTATING_WORDS[wordIndex]}</span>
            </h1>



            {/* Sub-headline */}
            <p className="reveal reveal-delay-300 hero-subline" style={{ maxWidth: '600px', margin: '1.5rem auto 2.5rem', fontSize: '16px', lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', textAlign: 'center' }}>
              Paid Ads &amp; AI Systems That Make<br className="hero-subline-br" /> Competing Against You Genuinely Frustrating.
            </p>

            {/* CTA */}
            <div className="reveal reveal-delay-400 hero-cta-wrap" style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <Link
                href="/strategy-call"
                className="group relative inline-flex items-center justify-center text-center"
              >
                {/* Mint green border layer */}
                <span
                  className="absolute -inset-[4px] rounded-[16px] opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)',
                    backgroundSize: '300% 300%',
                    animation: 'heroBorderSpin 3s linear infinite',
                  }}
                />
                {/* Inner button */}
                <span
                  className="hero-cta-inner relative inline-flex items-center justify-center text-sm sm:text-base font-bold rounded-xl transition-transform duration-300 group-hover:scale-[1.01] active:scale-100"
                  style={{ background: '#000000', color: '#2fe8a2', padding: '0.85rem 2rem', whiteSpace: 'nowrap', border: '1px solid rgba(47,232,162,0.2)' }}
                >
                  Let&apos;s Build Your Unfair Advantage →
                </span>
              </Link>
            </div>

            {/* Qualifier */}
            <p className="reveal reveal-delay-500 text-xs italic hero-qualifier" style={{ color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>
              <span className="hidden sm:inline">Free call. </span>No pitch. We tell you exactly what&apos;s broken and how to fix it.
            </p>

          </div>
        </div>

      </section>

      {/* ── TRUSTED BY ─────────── */}
      <TrustedBy />

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
