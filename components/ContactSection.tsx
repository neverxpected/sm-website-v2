"use client";

import { useState } from "react";
import ServicePicker from "./ServicePicker";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const res = await fetch("https://formspree.io/f/mzdjwpbn", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again or email Charles@switchmediaco.com directly.");
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none transition-all appearance-none";
  const inputStyle = {
    background: '#F9FAFB',
    border: '1px solid rgba(0,0,0,0.12)',
  };
  const labelClass = "block text-xs font-semibold mb-1.5" as const;

  return (
    <section className="py-12 lg:py-16 px-4 lg:px-8 relative overflow-hidden" style={{ background: '#ffffff' }}>
      {/* Ambient orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,45,120,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(155,48,255,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5%', alignItems: 'flex-start' }}>

          {/* Left */}
          <div className="contact-left" style={{ flex: '0 0 40%', maxWidth: '40%' }}>
            <div className="reveal inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
              style={{ background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.25)', color: '#FF2D78' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Get In Touch
            </div>
            <h2 className="reveal reveal-delay-100 font-black tracking-tight mb-6 contact-headline" style={{ color: '#111827', fontSize: '2rem', lineHeight: 1.15 }}>
              Done Watching Your Competitors Pull Ahead?
              <br />
              <style>{`
                @keyframes letsTalkShimmer {
                  0%   { background-position: 200% center; }
                  100% { background-position: -200% center; }
                }
                @media (max-width: 767px) {
                  .contact-headline {
                    font-size: 1.5rem !important;
                    line-height: 1.2 !important;
                  }
                  .contact-left, .contact-right {
                    flex: 0 0 100% !important;
                    max-width: 100% !important;
                  }
                  .contact-subline {
                    margin-bottom: 1.5rem !important;
                  }
                  .contact-btn {
                    font-size: 14px !important;
                  }
                }
              `}</style>
              <span style={{ color: '#000000' }}>
                Let&apos;s Fix That.
              </span>
            </h2>
            <p className="reveal reveal-delay-200 text-base leading-relaxed mb-10 max-w-md contact-subline" style={{ color: '#374151' }}>
              This isn&apos;t a sales call, it&apos;s an honest conversation about where your business currently stands and what it would take to move the needle. No high pressure pitch, just a meeting to find out if you&apos;re a good fit for our services.
            </p>

            {/* Contact info — desktop only */}
            <div className="reveal reveal-delay-300 space-y-5 hidden lg:block">
              {[
                {
                  label: 'Email', value: 'Charles@switchmediaco.com', href: 'mailto:Charles@switchmediaco.com',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
                  color: 'rgba(255,45,120,0.15)', borderColor: 'rgba(255,45,120,0.25)', iconColor: '#FF2D78',
                },
                {
                  label: 'Phone', value: '(469) 518-0508', href: 'tel:4695180508',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5s1.5 3 5 5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                  color: 'rgba(155,48,255,0.15)', borderColor: 'rgba(155,48,255,0.25)', iconColor: '#9B30FF',
                },
                {
                  label: 'Headquarters', value: 'Houston, TX', href: null,
                  icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
                  color: 'rgba(0,229,255,0.12)', borderColor: 'rgba(0,229,255,0.2)', iconColor: '#00E5FF',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: item.color, border: `1px solid ${item.borderColor}` }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke={item.iconColor} strokeWidth={1.5} className="w-5 h-5">
                      {item.icon}
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: '#9CA3AF' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold transition-colors" style={{ color: '#111827' }}>{item.value}</a>
                    ) : (
                      <p className="text-sm font-semibold" style={{ color: '#111827' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-200 contact-right" style={{ flex: '0 0 55%', maxWidth: '55%' }}>
            <div className="contact-gold-frame rounded-2xl p-8"
              style={{
                background: '#ffffff',
              }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <span className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <h3 className="text-xl font-black" style={{ color: '#111827' }}>Message Sent!</h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>We&apos;ll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-xs italic" style={{ color: '#9CA3AF' }}>
                    We read every submission personally. No automated responses. No spam.
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass} style={{ color: '#374151' }}>Name <span style={{ color: '#FF2D78' }}>*</span></label>
                      <input required name="name" type="text" placeholder="John Smith" className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label className={labelClass} style={{ color: '#374151' }}>Email <span style={{ color: '#FF2D78' }}>*</span></label>
                      <input required name="email" type="email" placeholder="john@company.com" className={inputClass} style={inputStyle} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass} style={{ color: '#374151' }}>Company <span style={{ color: '#FF2D78' }}>*</span></label>
                      <input required name="company" type="text" placeholder="Company name" className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label className={labelClass} style={{ color: '#374151' }}>Phone <span style={{ color: '#FF2D78' }}>*</span></label>
                      <input required name="phone" type="tel" placeholder="+1 (555) 000-0000" className={inputClass} style={inputStyle} />
                    </div>
                  </div>
                  <ServicePicker />
                  <div>
                    <label className={labelClass} style={{ color: '#374151' }}>Monthly Budget <span style={{ color: '#FF2D78' }}>*</span></label>
                    <div className="relative">
                      <select required name="budget" className={inputClass} style={{ ...inputStyle, color: '#374151', paddingRight: '2.5rem' }}>
                        <option value="">Select budget</option>
                        <option>Under $2,500/mo</option>
                        <option>$2,500 – $5,000/mo</option>
                        <option>$5,000 – $10,000/mo</option>
                        <option>$10,000 – $25,000/mo</option>
                        <option>$25,000+/mo</option>
                      </select>
                      <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: '#374151' }}>Message</label>
                    <textarea name="message" rows={4} placeholder="What's the biggest thing holding your business back right now?" className={inputClass + " resize-none"} style={inputStyle} />
                  </div>
                  <div className="group relative w-full">
                    <span
                      className="absolute -inset-[3px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #FF2D78, #9B30FF, #00E5FF, #FF2D78)',
                        backgroundSize: '300% 300%',
                        animation: 'heroBorderSpin 3s linear infinite',
                      }}
                    />
                    <button
                      type="submit"
                      className="contact-btn relative w-full flex items-center justify-center gap-2 px-6 py-4 text-white font-black rounded-xl transition-all duration-300 group-hover:scale-[1.01] active:scale-100"
                      style={{ background: '#000000', whiteSpace: 'nowrap', fontSize: '15px' }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                      Book Your Free Strategy Call &rarr;
                    </button>
                  </div>
                  <p className="text-center text-xs mt-3" style={{ color: '#9CA3AF' }}>
                    15 minutes. Charles picks up the phone himself.
                  </p>
                </form>
              )}
          </div>
          </div>

        </div>
      </div>
    </section>
  );
}
