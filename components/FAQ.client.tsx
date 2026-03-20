'use client';

import { useEffect, useRef, useState } from 'react';
import type { FAQ as FAQType } from '@/types/database';

interface FAQClientProps {
  heading: string;
  subheading: string;
  badge: string;
  faqs: FAQType[];
}

export function FAQClient({ heading, subheading, badge, faqs }: FAQClientProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const reveal = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <section ref={sectionRef} className="relative z-10 py-24 px-6 lg:px-8" style={{ background: '#0A0F1C', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16" style={reveal(0)}>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.25)', color: '#00E5FF' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            {badge}
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Common{' '}
            <span style={{
              background: 'linear-gradient(90deg, #00E5FF, #9B30FF, #00E5FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Questions.
            </span>
          </h2>
          <p className="text-base" style={{ color: 'rgba(240,244,255,0.5)' }}>
            {subheading}
          </p>
        </div>

        <div className="flex flex-col gap-3" style={reveal(100)}>
          {faqs.map((faq, i) => (
            <div key={faq.id}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: openIndex === i ? 'rgba(155,48,255,0.06)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${openIndex === i ? 'rgba(155,48,255,0.3)' : 'rgba(255,255,255,0.07)'}`,
              }}>
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-sm font-bold text-white">{faq.question}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                  className="w-4 h-4 shrink-0 transition-transform duration-300"
                  style={{ color: '#9B30FF', transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.55)' }}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
