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

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-40 pb-8 sm:pb-16">
          <div className="max-w-7xl mx-auto text-center">



            {/* Headline */}
            <h1 className="font-black tracking-tight leading-[1.1] mb-8" style={{ fontWeight: 800, color: '#000000' }}>
              <style>{`
                @keyframes cheatCodeShimmer {
                  0%   { background-position: 200% center; }
                  100% { background-position: -200% center; }
                }
                @keyframes heroBorderSpin {
                  0%   { background-position: 0% 50%; }
                  50%  { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
              `}</style>
              <span className="reveal block text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl reveal-delay-100">
                Your Business Is
              </span>
              <span className="reveal block text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl reveal-delay-200">
                <span style={{ color: '#000000' }}>
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
              Most businesses don&apos;t have a marketing problem. They have a systems problem. WE come in, find where revenue is leak &amp; build ads + AI-powered systems that fill gap so you can scale predictably every month.
            </p>




            {/* CTAs */}
            <div className="reveal reveal-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="/strategy-call"
                className="group relative inline-flex items-center justify-center text-center"
              >
                {/* Gradient border layer — visible on hover */}
                <span
                  className="absolute -inset-[4px] rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
                    backgroundSize: '300% 300%',
                    animation: 'heroBorderSpin 3s linear infinite',
                  }}
                />
                {/* Inner button */}
                <span
                  className="relative inline-flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white rounded-xl transition-transform duration-300 group-hover:scale-[1.01] active:scale-100"
                  style={{ background: '#000000' }}
                >
                  Ready To Scale? Let&apos;s Talk 👉
                </span>
              </Link>
            </div>

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
