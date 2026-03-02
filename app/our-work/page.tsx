"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const caseStudies = [
  {
    client: "The Oaks Plastic Surgery",
    stat: 4300,
    statPrefix: "",
    statSuffix: "+",
    statLabel: "Inquiries Generated",
    meta: ["2.5+ Years", "Houston, TX", "Plastic Surgery"],
    accentColor: "rgba(255,45,120,0.15)",
    accentBorder: "rgba(255,45,120,0.3)",
    glowColor: "rgba(255,45,120,0.12)",
  },
  {
    client: "Radiant Med Spa",
    stat: 700,
    statPrefix: "$",
    statSuffix: "k+",
    statLabel: "Added Revenue",
    meta: ["4+ Years", "Olathe, KS", "Med Spa"],
    accentColor: "rgba(155,48,255,0.15)",
    accentBorder: "rgba(155,48,255,0.3)",
    glowColor: "rgba(155,48,255,0.12)",
  },
  {
    client: "Illuminate Heights Fitness",
    stat: 2800,
    statPrefix: "",
    statSuffix: "+",
    statLabel: "Inquiries Generated",
    meta: ["2.5+ Years", "Houston, TX", "Fitness"],
    accentColor: "rgba(0,229,255,0.12)",
    accentBorder: "rgba(0,229,255,0.25)",
    glowColor: "rgba(0,229,255,0.10)",
  },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const count = useCountUp(study.stat, 1800, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? study.accentColor : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? study.accentBorder : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered ? `0 0 40px ${study.glowColor}, 0 24px 48px rgba(0,0,0,0.3)` : "none",
        transform: visible
          ? hovered
            ? "translateY(-8px) scale(1.02)"
            : "translateY(0) scale(1)"
          : `translateY(40px) scale(0.97)`,
        opacity: visible ? 1 : 0,
        transition: `all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 120}ms`,
        borderRadius: "1rem",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        cursor: "default",
      }}
    >
      {/* Client name */}
      <p
        className="text-xs font-bold uppercase tracking-[0.2em]"
        style={{ color: "rgba(240,244,255,0.35)" }}
      >
        {study.client}
      </p>

      {/* Primary stat */}
      <div className="flex flex-col gap-1">
        <span
          className="text-5xl font-black tracking-tight"
          style={{
            background: "linear-gradient(90deg, #FF2D78, #9B30FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
          }}
        >
          {study.statPrefix}
          {count.toLocaleString()}
          {study.statSuffix}
        </span>
        <span
          className="text-sm font-bold uppercase tracking-[0.15em]"
          style={{ color: "rgba(240,244,255,0.45)" }}
        >
          {study.statLabel}
        </span>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

      {/* Meta tags */}
      <div className="flex flex-wrap gap-2">
        {study.meta.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{
              background: study.accentColor,
              border: `1px solid ${study.accentBorder}`,
              color: "rgba(240,244,255,0.65)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function RevealSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function OurWorkPage() {
  return (
    <main
      className="relative min-h-screen text-white overflow-hidden"
      style={{ background: "#0A0F1C" }}
    >
      <style>{`
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(30px, -20px) scale(1.05); }
          66%       { transform: translate(-20px, 15px) scale(0.96); }
        }
        @keyframes ctaGlowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255,45,120,0.4), 0 0 50px rgba(155,48,255,0.18); }
          50%       { box-shadow: 0 0 40px rgba(255,45,120,0.75), 0 0 90px rgba(155,48,255,0.38); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
        }
      `}</style>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Animated ambient orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,45,120,0.09) 0%, transparent 65%)",
            animation: "floatOrb 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(155,48,255,0.09) 0%, transparent 65%)",
            animation: "floatOrb 16s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute top-2/3 left-1/2 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 65%)",
            animation: "floatOrb 10s ease-in-out infinite",
            animationDelay: "4s",
          }}
        />
      </div>

      {/* Header section */}
      <section className="relative z-10 pt-40 pb-20 px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <RevealSection delay={0}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]"
              style={{
                background: "rgba(255,45,120,0.1)",
                border: "1px solid rgba(255,45,120,0.25)",
                color: "#FF2D78",
                animation: "badgePulse 3s ease-in-out infinite",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" style={{ animation: "badgePulse 1.5s ease-in-out infinite" }} />
              Case Studies
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <h1
              className="text-5xl lg:text-7xl font-black tracking-tight leading-[1] mb-8 text-white"
            >
              Engineered{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FF2D78 0%, #9B30FF 50%, #FF2D78 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 4s linear infinite",
                  display: "inline-block",
                }}
              >
                Results.
              </span>
            </h1>
          </RevealSection>

          <RevealSection delay={200}>
            <p
              className="text-lg lg:text-xl leading-relaxed max-w-2xl"
              style={{ color: "rgba(240,244,255,0.55)" }}
            >
              We don&apos;t just run ads. We build autonomous growth infrastructure.{" "}
              <span style={{ color: "rgba(240,244,255,0.85)", fontWeight: 600 }}>
                Here is the data to prove it.
              </span>
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Data Grid */}
      <section className="relative z-10 pb-24 px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <StatCard key={study.client} study={study} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 pb-32 px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <RevealSection delay={0}>
          <div
            className="p-12 rounded-3xl"
            style={{
              background: "rgba(255,45,120,0.06)",
              border: "1px solid rgba(255,45,120,0.15)",
              backdropFilter: "blur(12px)",
            }}
          >
            <RevealSection delay={100}>
              <p
                className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
                style={{ color: "rgba(255,45,120,0.8)" }}
              >
                Ready to see your numbers here?
              </p>
            </RevealSection>
            <RevealSection delay={200}>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-10">
                Let&apos;s build your case study.
              </h2>
            </RevealSection>
            <RevealSection delay={300}>
              <Link
                href="https://calendly.com/switchmedia/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-transform duration-300 hover:scale-105 whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #FF2D78, #9B30FF)",
                  animation: "ctaGlowPulse 3s ease-in-out infinite",
                }}
              >
                Book a Strategy Call
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </RevealSection>
          </div>
        </RevealSection>
      </section>
    </main>
  );
}
