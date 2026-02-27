"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwitchState } from '@/context/SwitchContext';
import { PulsingWire } from './PulsingWire';
import ServiceGrid from './ServiceGrid';
import AIAdvantage from './AIAdvantage';
import CaseStudies from './CaseStudies';
import ContactSection from './ContactSection';
import MeetTheTeam from './MeetTheTeam';
import TrustedBy from './TrustedBy';

/* ── Molten 3D Toggle Switch ─────────────────────────── */
function MoltenSwitch({ isSwitchedOn, onToggle }: { isSwitchedOn: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isSwitchedOn ? 'Switch OFF' : 'Switch ON'}
      className="relative focus:outline-none group"
    >
      {/* Track */}
      <motion.div
        className="relative w-28 h-14 rounded-full cursor-pointer overflow-hidden"
        animate={{
          boxShadow: isSwitchedOn
            ? '0 0 40px rgba(212,175,55,0.6), 0 0 80px rgba(212,175,55,0.3), inset 0 2px 8px rgba(0,0,0,0.6)'
            : '0 0 20px rgba(123,44,191,0.3), inset 0 2px 8px rgba(0,0,0,0.8)',
        }}
        transition={{ duration: 0.5 }}
        style={{
          background: isSwitchedOn
            ? 'linear-gradient(135deg, #1a1400, #3d2e00, #1a1400)'
            : 'linear-gradient(135deg, #0b0b0c, #161618)',
          border: `1.5px solid ${isSwitchedOn ? 'rgba(212,175,55,0.5)' : 'rgba(123,44,191,0.3)'}`,
        }}
      >
        {/* Track inner glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{ opacity: isSwitchedOn ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: 'radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.25) 0%, transparent 70%)',
          }}
        />

        {/* Knob */}
        <motion.div
          className="absolute top-1.5 w-11 h-11 rounded-full"
          animate={{ x: isSwitchedOn ? 60 : 4 }}
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          style={{
            background: isSwitchedOn
              ? 'radial-gradient(circle at 35% 35%, #fff7cc, #d4af37 45%, #a07c1a 100%)'
              : 'radial-gradient(circle at 35% 35%, #9b7fe8, #7b2cbf 45%, #3d1260 100%)',
            boxShadow: isSwitchedOn
              ? '0 0 16px rgba(212,175,55,0.8), 0 4px 12px rgba(0,0,0,0.6), inset 0 1px 3px rgba(255,255,220,0.5)'
              : '0 0 12px rgba(123,44,191,0.7), 0 4px 12px rgba(0,0,0,0.6), inset 0 1px 3px rgba(200,160,255,0.3)',
          }}
        >
          {/* Knob sheen */}
          <div className="absolute top-1 left-2 w-5 h-2 rounded-full opacity-50"
            style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.7), transparent)' }} />
        </motion.div>

        {/* OFF label */}
        <motion.span
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[9px] font-black tracking-widest uppercase"
          animate={{ opacity: isSwitchedOn ? 0 : 0.5 }}
          style={{ color: '#7b2cbf' }}
        >
          OFF
        </motion.span>

        {/* ON label */}
        <motion.span
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-black tracking-widest uppercase"
          animate={{ opacity: isSwitchedOn ? 0.9 : 0 }}
          style={{ color: '#d4af37' }}
        >
          ON
        </motion.span>
      </motion.div>
    </button>
  );
}

/* ── Neon Ripple Pulse ───────────────────────────────── */
function NeonRipple({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              initial={{ scale: 0, opacity: 0.7 }}
              animate={{ scale: 4 + i * 2, opacity: 0 }}
              transition={{ duration: 1.8, delay: i * 0.25, ease: 'easeOut' }}
              style={{
                width: 120,
                height: 120,
                background: `radial-gradient(circle, rgba(212,175,55,${0.5 - i * 0.12}) 0%, transparent 70%)`,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Luminaries (Energy Blobs) ───────────────────────── */
function Luminaries({ isSwitchedOn }: { isSwitchedOn: boolean }) {
  const blobs = [
    { w: 520, h: 520, top: '15%', left: '10%', delay: 0 },
    { w: 400, h: 400, top: '60%', right: '8%', delay: 2 },
    { w: 300, h: 300, top: '40%', left: '55%', delay: 4 },
  ];

  return (
    <>
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          animate={{
            background: isSwitchedOn
              ? `radial-gradient(circle, rgba(212,175,55,${0.22 - i * 0.04}) 0%, transparent 70%)`
              : `radial-gradient(circle, rgba(123,44,191,${0.15 - i * 0.03}) 0%, transparent 70%)`,
            filter: isSwitchedOn ? 'blur(60px)' : 'blur(80px)',
          }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{
            width: b.w,
            height: b.h,
            top: b.top,
            left: (b as { left?: string }).left,
            right: (b as { right?: string }).right,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </>
  );
}

/* ── Service Card ────────────────────────────────────── */
function ServiceCard({ label, icon, delay }: { label: string; icon: string; delay: number }) {
  const { isSwitchedOn } = useSwitchState();
  return (
    <motion.div
      className="flex flex-col items-center gap-2 px-5 py-4 rounded-2xl text-center"
      animate={{
        borderColor: isSwitchedOn ? 'rgba(212,175,55,0.35)' : 'rgba(255,255,255,0.07)',
        background: isSwitchedOn ? 'rgba(212,175,55,0.05)' : 'rgba(22,22,24,0.6)',
        boxShadow: isSwitchedOn ? '0 0 20px rgba(212,175,55,0.1)' : 'none',
      }}
      transition={{ duration: 0.6, delay }}
      style={{ border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)', minWidth: 110 }}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(240,244,255,0.5)' }}>
        {label}
      </span>
    </motion.div>
  );
}

/* ── Main Hero ───────────────────────────────────────── */
export default function HeroSwitch() {
  const { isSwitchedOn, toggle } = useSwitchState();
  const [ripple, setRipple] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  /* Scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Ripple on switch-on */
  const handleToggle = () => {
    toggle();
    if (!isSwitchedOn) {
      setRipple(true);
      setTimeout(() => setRipple(false), 2000);
    }
  };

  const headlineSwitchedOff = 'MARKETING IS A\nFRAGMENTED JUNGLE.';
  const headlineSwitchedOn  = 'AI MAKES MARKETING\nEFFORTLESS.';
  const headline = isSwitchedOn ? headlineSwitchedOn : headlineSwitchedOff;

  return (
    <div className="grain" ref={heroRef}>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'var(--color-obsidian)' }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isSwitchedOn
              ? 'radial-gradient(ellipse at 50% 40%, rgba(212,175,55,0.07) 0%, #0b0b0c 65%)'
              : 'radial-gradient(ellipse at 50% 40%, rgba(123,44,191,0.08) 0%, #0b0b0c 65%)',
          }}
          transition={{ duration: 1.4 }}
        />

        {/* Luminaries */}
        <Luminaries isSwitchedOn={isSwitchedOn} />

        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Radial Neon Ripple */}
        <NeonRipple active={ripple} />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
          <div className="max-w-5xl mx-auto text-center">

            {/* Eyebrow */}
            <motion.div
              className="reveal reveal-delay-100 inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
              animate={{
                borderColor: isSwitchedOn ? 'rgba(212,175,55,0.4)' : 'rgba(123,44,191,0.35)',
                color: isSwitchedOn ? '#d4af37' : '#9b7fe8',
                background: isSwitchedOn ? 'rgba(212,175,55,0.08)' : 'rgba(123,44,191,0.08)',
              }}
              style={{ border: '1px solid' }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Houston&apos;s #1 AI Marketing Agency
            </motion.div>

            {/* Headline */}
            <div className="mb-10">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={headline}
                  className="font-black tracking-tight text-white leading-[1.05] text-4xl sm:text-5xl lg:text-6xl xl:text-[5rem]"
                  style={{ fontStretch: 'expanded', letterSpacing: '-0.02em' }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {headline.split('\n').map((line, i) => (
                    <span key={i} className="block">
                      {i === 0 ? line : (
                        <span
                          style={{
                            background: isSwitchedOn
                              ? 'linear-gradient(90deg, #d4af37, #fff7aa, #d4af37)'
                              : 'linear-gradient(90deg, #7b2cbf, #c084fc, #7b2cbf)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            transition: 'background 0.8s ease',
                          }}
                        >
                          {line}
                        </span>
                      )}
                    </span>
                  ))}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Subheadline */}
            <AnimatePresence mode="wait">
              <motion.p
                key={isSwitchedOn ? 'on' : 'off'}
                className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-10"
                style={{ color: 'rgba(240,244,255,0.5)' }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                {isSwitchedOn
                  ? <>AI-powered ad engines and autonomous systems make your marketing run itself.{' '}<span style={{ color: 'rgba(212,175,55,0.9)' }}>Flip the switch.</span></>
                  : <>Too many platforms. Too little signal. Paid ads, AI tools, analytics — all disconnected.{' '}<span style={{ color: 'rgba(240,244,255,0.8)' }}>There&apos;s a better way.</span></>
                }
              </motion.p>
            </AnimatePresence>

            {/* ── THE SWITCH ───────────────────────────────── */}
            <div className="flex flex-col items-center gap-3 mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'rgba(240,244,255,0.25)' }}>
                {isSwitchedOn ? 'AI mode active' : 'Flip the switch'}
              </p>
              <MoltenSwitch isSwitchedOn={isSwitchedOn} onToggle={handleToggle} />
            </div>

            {/* ── WIRES + SERVICE CARDS ─────────────────────── */}
            <div className="relative flex flex-wrap items-center justify-center gap-6 mb-12">
              {/* Left wire arc */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-10 rotate-180 opacity-60">
                <PulsingWire isSwitchedOn={isSwitchedOn} />
              </div>

              {[
                { label: 'Meta Ads',    icon: '📘', delay: 0 },
                { label: 'Google Ads',  icon: '🔍', delay: 0.1 },
                { label: 'AI Receptionist', icon: '🤖', delay: 0.2 },
                { label: 'AI Workflow', icon: '⚡', delay: 0.3 },
                { label: 'TikTok Ads',  icon: '🎵', delay: 0.4 },
              ].map((card) => (
                <ServiceCard key={card.label} {...card} />
              ))}
            </div>

            {/* CTAs */}
            <div className="reveal reveal-delay-500 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href="https://calendly.com/switchmedia/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: isSwitchedOn
                    ? 'linear-gradient(135deg, #a07c1a, #d4af37, #a07c1a)'
                    : 'linear-gradient(135deg, #FF2D78, #9B30FF)',
                  boxShadow: isSwitchedOn
                    ? '0 0 30px rgba(212,175,55,0.5)'
                    : '0 0 20px rgba(255,45,120,0.35)',
                  color: isSwitchedOn ? '#0b0b0c' : '#fff',
                  transition: 'background 0.6s, box-shadow 0.6s, color 0.3s',
                }}
              >
                Book a Strategy Call
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}
              >
                View Results
              </Link>
            </div>

            {/* Trust badges */}
            <div className="reveal reveal-delay-600 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {['No long-term contracts', 'Results in 30 days', 'Free strategy session'].map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-sm font-medium" style={{ color: 'rgba(240,244,255,0.45)' }}>
                  <motion.span
                    className="w-2 h-2 rounded-full shrink-0"
                    animate={{
                      background: isSwitchedOn ? '#d4af37' : '#7b2cbf',
                      boxShadow: isSwitchedOn ? '0 0 8px rgba(212,175,55,0.8)' : '0 0 8px rgba(123,44,191,0.7)',
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  {badge}
                </span>
              ))}
            </div>

            {/* Stats bar */}
            <div className="reveal reveal-delay-600 flex flex-wrap items-center justify-center gap-8 mt-10 pt-10"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {[
                { value: '$40M+', label: 'Revenue Generated' },
                { value: '300+', label: 'Campaigns Launched' },
                { value: '8x',   label: 'Average ROAS' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-2xl sm:text-3xl font-black mb-1"
                    style={{
                      background: isSwitchedOn
                        ? 'linear-gradient(90deg, #d4af37, #fff7aa)'
                        : 'linear-gradient(90deg, #FF2D78, #9B30FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      transition: 'background 0.8s ease',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(240,244,255,0.35)' }}>{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--color-obsidian))' }} />
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
