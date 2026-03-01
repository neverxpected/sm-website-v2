"use client";

import Link from "next/link";
import Image from "next/image";
import { lime } from "@/lib/cyberLime";

const columns = [
  {
    heading: "Paid Ads",
    links: [
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "TikTok Ads", href: "/services/tiktok-ads" },
      { label: "Bing Ads", href: "/services/digital-advertising" },
    ],
  },
  {
    heading: "AI Solutions",
    links: [
      { label: "AI Receptionist", href: "/services/ai-receptionist" },
      { label: "AI Integrations", href: "/services/ai-system-integration" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/our-work" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: lime.bg, borderTop: `1px solid rgba(163,230,53,0.18)` }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="rounded-xl flex items-center justify-center shrink-0 p-1 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)' }}>
                <Image
                  src="/images/logo/sm-logo.png"
                  alt="Switch Media Marketing Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </span>
              <span className="text-base font-bold text-white tracking-tight">Switch Media</span>
            </Link>

            <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.35)' }}>
              We help service-based businesses generate predictable leads and scale revenue with paid ads and AI automation.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { href: 'https://www.linkedin.com/company/switch-media-marketing/', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { href: 'https://www.facebook.com/switchyourmedia', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { href: 'https://www.instagram.com/switchmediamarketing', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
              ].map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(240,244,255,0.45)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = lime.accent; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(163,230,53,0.3)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(240,244,255,0.45)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: 'rgba(240,244,255,0.35)' }}>{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'rgba(240,244,255,0.5)' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FF2D78'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(240,244,255,0.5)'; }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <p className="text-xs text-center sm:text-left" style={{ color: 'rgba(240,244,255,0.25)' }}>
            &copy; 2019&ndash;{new Date().getFullYear()} | Switch Media Marketing | All rights reserved | Psalm 127:1
          </p>
          <Link
            href="https://calendly.com/switchmedia/15min"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-black rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ background: lime.grad }}
          >
            Book a Strategy Call
          </Link>
        </div>

      </div>
    </footer>
  );
}
