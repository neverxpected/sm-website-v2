"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const paidAdsLinks = [
  {
    label: "Meta Ads",
    href: "/services/meta-ads",
    description: "Scalable Facebook & Instagram campaigns focused on leads and revenue.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Google Ads",
    href: "/services/google-ads",
    description: "High-intent search campaigns built to convert ready buyers.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
  {
    label: "TikTok Ads",
    href: "/services/tiktok-ads",
    description: "Creative-first campaigns designed for viral growth and lower CAC.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    ),
  },
  {
    label: "Bing Ads",
    href: "/services/digital-advertising",
    description: "Capture professional audiences across Microsoft's search ecosystem.",
    icon: (
      <svg viewBox="0 0 20 24" className="w-4 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* Vertical stem */}
        <rect x="2" y="1" width="4" height="22" />
        {/* Main arm: from mid-stem sweeps to bottom-right */}
        <polygon points="6,9 18,15 11,23 6,23" />
        {/* Shadow fold triangle */}
        <polygon points="6,13 14,15 6,18" opacity="0.35" fill="#000" />
      </svg>
    ),
  },
];

const aiAutomationLinks = [
  {
    label: "AI Receptionist",
    href: "/services/ai-receptionist",
    description: "Autonomous 24/7 voice systems that qualify and capture every lead.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5S10 13.5 13.5 15.5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "AI Integrations",
    href: "/services/ai-system-integration",
    description: "End-to-end workflow automation that eliminates manual bottlenecks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" strokeLinecap="round" />
      </svg>
    ),
  },
];

type NavLink = {
  label: string;
  href: string;
  description: string;
  icon: React.ReactNode;
};

function DesktopDropdown({ label, links }: { label: string; links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-white hover:text-white/60 transition-colors cursor-pointer"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
          <ul className="min-w-[260px] bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-start gap-4 px-5 py-4 transition-colors group"
                  style={{ background: 'transparent' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, rgba(255,45,120,0.85), rgba(155,48,255,0.85))'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = ''; }}
                  onClick={() => setOpen(false)}
                >
                  <span className="mt-0.5 text-white/40 group-hover:text-white transition-colors shrink-0">
                    {link.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-white group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                    <span className="block text-xs text-white/40 mt-0.5 leading-relaxed">
                      {link.description}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MobileAccordion({ label, links, onClose }: { label: string; links: NavLink[]; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex items-center justify-between py-4 text-base font-medium text-white"
        onClick={() => setOpen(!open)}
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className="pb-3 space-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-start gap-3 px-2 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                onClick={onClose}
              >
                <span className="mt-0.5 text-white/40 group-hover:text-white/70 transition-colors shrink-0">
                  {link.icon}
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">{link.label}</span>
                  <span className="block text-xs text-white/40 mt-0.5 leading-relaxed">{link.description}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md" style={{ background: "transparent", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
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
          <span className="text-base font-bold tracking-tight text-white">
            Switch Media <span className="text-white/40">Marketing</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-white">
          <DesktopDropdown label="Paid Ads" links={paidAdsLinks} />
          <DesktopDropdown label="AI Automations" links={aiAutomationLinks} />
          <Link href="/our-work" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Results
          </Link>
          <Link href="/about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Contact
          </Link>
          <Link
            href="https://calendly.com/switchmedia/15min"
            className="relative px-6 py-2.5 text-sm font-bold rounded-full text-white transition-all duration-300 hover:scale-105 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #FF2D78, #9B30FF)", boxShadow: "0 0 20px rgba(255,45,120,0.35)" }}
          >
            Book a Strategy Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6" style={{ background: "rgba(11,11,12,0.85)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {[
            { label: 'Meta Ads', href: '/services/meta-ads' },
            { label: 'Google Ads', href: '/services/google-ads' },
            { label: 'TikTok Ads', href: '/services/tiktok-ads' },
            { label: 'Bing Ads', href: '/services/digital-advertising' },
            { label: 'AI Receptionist', href: '/services/ai-receptionist' },
            { label: 'AI Integrations', href: '/services/ai-system-integration' },
            { label: 'Results', href: '/our-work' },
            { label: 'About Us', href: '/about' },
            { label: 'Contact Us', href: '/contact' },
          ].map((link) => (
            <div key={link.href} className="border-b border-white/10">
              <Link
                href={link.href}
                className="flex items-center gap-3 py-4 text-base font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </div>
          ))}

          <div className="pt-6">
            <Link
              href="https://calendly.com/switchmedia/15min"
              className="block w-full text-center px-6 py-3.5 text-sm font-bold rounded-full text-white transition-all"
              style={{ background: "linear-gradient(135deg, #FF2D78, #9B30FF)" }}
              onClick={() => setMobileOpen(false)}
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}