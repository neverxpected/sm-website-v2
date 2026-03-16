'use client';

import { useEffect, useRef, useState } from 'react';
import type { Testimonial } from '@/types/database';

const ACCENT_COLORS = ['#FF2D78', '#9B30FF', '#00E5FF'];

function Stars({ count, color }: { count: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill={color} className="w-4 h-4">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

interface TestimonialsClientProps {
  heading: string;
  subheading: string;
  badge: string;
  testimonials: Testimonial[];
}

export default function TestimonialsClient({
  heading,
  subheading,
  badge,
  testimonials,
}: TestimonialsClientProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const reveal = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  const featured = testimonials.find((t) => t.is_featured) ?? testimonials[0];
  const side = testimonials.filter((t) => t.id !== featured?.id);

  if (!featured) return null;

  const getAccent = (index: number) => ACCENT_COLORS[index % ACCENT_COLORS.length];
  const featuredAccent = getAccent(0);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-24 px-6 lg:px-8"
      style={{ background: '#000000' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" style={reveal(0)}>
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
            style={{
              background: 'rgba(155,48,255,0.1)',
              border: '1px solid rgba(155,48,255,0.25)',
              color: '#9B30FF',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-3.5 h-3.5 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            {badge}
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {heading}
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: 'rgba(240,244,255,0.5)' }}
          >
            {subheading}
          </p>
        </div>

        {/* Asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Featured */}
          <div
            className="lg:col-span-3 rounded-3xl flex flex-col overflow-hidden"
            style={{
              border: `1px solid ${featuredAccent}55`,
              boxShadow: `0 0 30px ${featuredAccent}55, 0 0 80px ${featuredAccent}20, 0 0 160px ${featuredAccent}08`,
              ...reveal(100),
            }}
          >
            <div
              className="p-6 flex items-center gap-4"
              style={{
                background: '#000000',
                borderBottom: `1px solid ${featuredAccent}22`,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl overflow-hidden shrink-0"
                style={{ border: `2px solid ${featuredAccent}60` }}
              >
                <img
                  src={featured.author_photo_url ?? ''}
                  alt={featured.author_name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-white">{featured.author_name}</p>
                <p className="text-xs" style={{ color: featuredAccent }}>
                  {featured.author_title ?? ''}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: 'rgba(240,244,255,0.35)' }}
                >
                  {featured.author_location ?? ''}
                </p>
              </div>
              <Stars
                count={featured.stars ?? 5}
                color={featuredAccent}
              />
            </div>
            <div
              className="relative flex-1 p-8 flex flex-col"
              style={{ background: '#FFFFFF' }}
            >
              <span
                className="absolute top-5 right-7 text-8xl font-black leading-none select-none"
                style={{
                  color: `${featuredAccent}18`,
                  fontFamily: 'Georgia, serif',
                }}
              >
                &ldquo;
              </span>
              <p
                className="text-base lg:text-lg leading-relaxed font-medium relative z-10"
                style={{ color: '#111827' }}
              >
                &ldquo;{featured.quote}&rdquo;
              </p>
            </div>
          </div>

          {/* Side cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {side.map((t, i) => {
              const accent = getAccent(i + 1);
              return (
                <div
                  key={t.id}
                  className="card-hover flex-1 rounded-3xl flex flex-col overflow-hidden"
                  style={{
                    border: `1px solid ${accent}66`,
                    boxShadow: `0 0 30px ${accent}55, 0 0 80px ${accent}20, 0 0 160px ${accent}08`,
                    ...reveal(200 + i * 120),
                  }}
                >
                  <div
                    className="p-4 flex items-center gap-3"
                    style={{
                      background: '#000000',
                      borderBottom: `1px solid ${accent}22`,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl overflow-hidden shrink-0"
                      style={{ border: `2px solid ${accent}50` }}
                    >
                      <img
                        src={t.author_photo_url ?? ''}
                        alt={t.author_name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-white">
                        {t.author_name}
                      </p>
                      <p
                        className="text-[11px]"
                        style={{ color: accent }}
                      >
                        {t.author_title ?? ''}
                      </p>
                    </div>
                    <Stars count={t.stars ?? 5} color={accent} />
                  </div>
                  <div
                    className="relative flex-1 p-5 flex flex-col"
                    style={{ background: '#FFFFFF' }}
                  >
                    <span
                      className="absolute top-3 right-5 text-6xl font-black leading-none select-none"
                      style={{
                        color: `${accent}18`,
                        fontFamily: 'Georgia, serif',
                      }}
                    >
                      &ldquo;
                    </span>
                    <p
                      className="text-sm leading-relaxed relative z-10"
                      style={{ color: '#374151' }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
