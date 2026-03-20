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
    <div className="grain" ref={heroRef} style={{ background: '#ffffff' }}>

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

        {/* Graph paper grid background */}
        <div
          className="hero-grid absolute inset-0 z-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 40px)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Bottom fade to white */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to bottom, transparent 40%, white 100%)',
            pointerEvents: 'none',
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
                color: '#000000',
                fontSize: 'clamp(2.2rem, 7vw, 5.8rem)',
                lineHeight: 1.1,
                textAlign: 'center',
                width: 'fit-content',
                margin: '0 auto',
                overflow: 'visible',
              }}
            >
              <span style={{ display: 'block', whiteSpace: 'nowrap', padding: '0 0.1em' }}>Stop Guessing.</span>
              <span style={{
                display: 'block',
                whiteSpace: 'nowrap',
                padding: '0 0.15em 0.05em',
                background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% auto',
                animation: 'heroBorderSpin 3s linear infinite',
              }}>Start Printing</span>
              <span style={{
                display: 'block',
                whiteSpace: 'nowrap',
                padding: '0 0.1em',
                background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% auto',
                animation: 'heroBorderSpin 3s linear infinite',
              }}>Revenue.</span>
            </h1>



            {/* Sub-headline */}
            <p className="reveal reveal-delay-300 hero-subline" style={{ maxWidth: '600px', margin: '1.5rem auto 2.5rem', fontSize: '16px', lineHeight: 1.85, color: 'rgba(26,26,46,0.55)', textAlign: 'center' }}>
              Paid Ads &amp; AI Systems That Make<br className="hero-subline-br" /> Competing Against You Genuinely Frustrating.
            </p>

            {/* CTA */}
            <div className="reveal reveal-delay-400 hero-cta-wrap" style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <Link
                href="/strategy-call"
                className="group relative inline-flex items-center justify-center text-center"
              >
                {/* Gradient border layer — visible on hover */}
                <span
                  className="absolute -inset-[4px] rounded-[16px] opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
                    backgroundSize: '300% 300%',
                    animation: 'heroBorderSpin 3s linear infinite',
                  }}
                />
                {/* Inner button */}
                <span
                  className="hero-cta-inner relative inline-flex items-center justify-center text-sm sm:text-base font-bold text-white rounded-xl transition-transform duration-300 group-hover:scale-[1.01] active:scale-100"
                  style={{ background: '#000000', padding: '0.85rem 2rem', whiteSpace: 'nowrap' }}
                >
                  Let&apos;s Build Your Unfair Advantage →
                </span>
              </Link>
            </div>

            {/* Qualifier */}
            <p className="reveal reveal-delay-500 text-xs italic hero-qualifier" style={{ color: 'rgba(26,26,46,0.4)', textAlign: 'center' }}>
              Free strategy call. No pitch.<br className="sm:hidden" /> Just an honest look at your business.
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
