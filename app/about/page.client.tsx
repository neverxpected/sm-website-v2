'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedTimeline from '@/components/AnimatedTimeline';
import { useEffect, useRef, useState } from 'react';

interface AboutPageClientProps {
  badge: string;
  heading: string;
  subheading: string;
  photoUrl: string;
  photoAlt: string;
  milestones: { year: string; label: string; body: string }[];
  stats: { value: number; prefix?: string; suffix: string; label: string }[];
  ctaSubheading: string;
  ctaText: string;
  ctaUrl: string;
}

function useCounter(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

function StatCard({ stat, started }: { stat: AboutPageClientProps['stats'][0]; started: boolean }) {
  const count = useCounter(stat.value, 1800, started);
  return (
    <div className="text-center">
      <p className="text-xl sm:text-3xl font-black mb-1" style={{
        background: 'linear-gradient(135deg, #FF2D78, #9B30FF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        {stat.prefix ?? ''}{count}{stat.suffix}
      </p>
      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest sm:tracking-widest" style={{ color: 'rgba(240,244,255,0.4)', letterSpacing: '0.1em' }}>
        {stat.label}
      </p>
    </div>
  );
}

export function AboutPageClient({
  badge, heading, subheading, photoUrl, photoAlt,
  milestones, stats, ctaSubheading, ctaText, ctaUrl,
}: AboutPageClientProps) {
  const heroRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const [heroVisible, setHeroVisible] = useState(false);
  const [photoVisible, setPhotoVisible] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const orbRef1 = useRef<HTMLDivElement>(null);
  const orbRef2 = useRef<HTMLDivElement>(null);
  const orbRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const makeObserver = (setter: (v: boolean) => void) =>
      new IntersectionObserver(([e]) => { if (e.isIntersecting) setter(true); }, { threshold: 0.15 });

    const pairs: [React.RefObject<HTMLElement | null>, (v: boolean) => void][] = [
      [heroRef, setHeroVisible],
      [photoRef, setPhotoVisible],
      [timelineRef, setTimelineVisible],
      [statsRef, setStatsVisible],
      [ctaRef, setCtaVisible],
    ];

    const observers = pairs.map(([ref, setter]) => {
      const obs = makeObserver(setter);
      if (ref.current) obs.observe(ref.current);
      return obs;
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    const orbs = [orbRef1, orbRef2, orbRef3];
    const offsets = [0, 2.1, 4.2];
    let frame: number;
    const animate = () => {
      const t = Date.now() / 1000;
      orbs.forEach((ref, i) => {
        if (!ref.current) return;
        const ox = Math.sin(t * 0.3 + offsets[i]) * 40;
        const oy = Math.cos(t * 0.25 + offsets[i]) * 30;
        ref.current.style.transform = `translate(${ox}px, ${oy}px)`;
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const reveal = (visible: boolean, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <>
      <style>{`
        @keyframes aboutHeadlineShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes pulseCta {
          0%, 100% { box-shadow: 0 0 30px rgba(255,45,120,0.35); }
          50%       { box-shadow: 0 0 55px rgba(155,48,255,0.6); }
        }
        @keyframes photoReveal {
          from { opacity: 0; transform: scale(0.96) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none z-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div ref={orbRef1} className="absolute" style={{ top: '15%', left: '10%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,45,120,0.09) 0%, transparent 65%)', willChange: 'transform' }} />
        <div ref={orbRef2} className="absolute" style={{ top: '50%', right: '5%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(155,48,255,0.1) 0%, transparent 65%)', willChange: 'transform' }} />
        <div ref={orbRef3} className="absolute" style={{ bottom: '10%', left: '35%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 65%)', willChange: 'transform' }} />
      </div>

      <section ref={heroRef} className="relative z-10 pt-40 pb-16 px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
          style={{ background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.25)', color: '#FF2D78', ...reveal(heroVisible, 0) }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {badge}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-tight mb-6"
          style={reveal(heroVisible, 100)}>
          We didn&apos;t learn marketing from a textbook.{' '}
          <span style={{
            background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '200% auto',
            animation: 'aboutHeadlineShimmer 4s linear infinite',
            display: 'inline',
          }}>
            We&apos;ve been living it from the start.
          </span>
        </h1>
        <p className="text-base leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)', ...reveal(heroVisible, 200) }}>
          {subheading}
        </p>
      </section>

      <section ref={photoRef} className="relative z-10 pb-10 px-6 lg:px-8 max-w-3xl mx-auto">
        <div style={{
          borderRadius: '1rem',
          overflow: 'hidden',
          boxShadow: photoVisible ? '0 0 60px rgba(155,48,255,0.2), 0 0 120px rgba(255,45,120,0.1)' : 'none',
          animation: photoVisible ? 'photoReveal 0.8s ease forwards' : 'none',
          opacity: photoVisible ? 1 : 0,
          transition: 'box-shadow 1s ease',
        }}>
          <Image src={photoUrl} alt={photoAlt} width={1200} height={840} priority className="w-full h-auto" style={{ display: 'block' }} />
        </div>
      </section>

      <section ref={timelineRef} className="relative z-10 pb-16 px-6 lg:px-8 max-w-3xl mx-auto"
        style={reveal(timelineVisible, 0)}>
        <AnimatedTimeline milestones={milestones} />
      </section>

      <section ref={statsRef} className="relative z-10 pb-16 px-6 lg:px-8 max-w-3xl mx-auto"
        style={reveal(statsVisible, 0)}>
        <div className="rounded-2xl p-6 sm:p-8 grid grid-cols-3 gap-4 sm:gap-8"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: statsVisible ? '0 0 60px rgba(155,48,255,0.07)' : 'none',
            transition: 'box-shadow 1s ease',
          }}>
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={statsVisible} />
          ))}
        </div>
      </section>

      <section ref={ctaRef} className="relative z-10 pb-32 px-6 lg:px-8 max-w-3xl mx-auto text-center"
        style={reveal(ctaVisible, 0)}>
        <p className="text-sm mb-8" style={{ color: 'rgba(240,244,255,0.45)' }}>
          {ctaSubheading}
        </p>
        <Link
          href={ctaUrl}
          className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-full transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #FF2D78, #9B30FF)',
            animation: 'pulseCta 3s ease-in-out infinite',
          }}
        >
          {ctaText}
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </Link>
      </section>
    </>
  );
}
