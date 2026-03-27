"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
  {
    label: "Nextdoor Ads",
    href: "/services/nextdoor-ads",
    description: "Hyperlocal campaigns that reach households in your exact service area.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
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
  {
    label: "AI Lead Nurturing",
    href: "/services/ai-lead-nurturing",
    description: "Predictive follow-up that converts cold leads into booked clients automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    label: "Custom AI Solutions",
    href: "/services/custom-ai",
    description: "Bespoke AI systems built around your exact workflows, data, and goals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM19 8l.5-1.5L21 6l-1.5-.5L19 4l-.5 1.5L17 6l1.5.5L19 8z" />
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

function DesktopDropdown({ label, links, scrolled }: { label: string; links: NavLink[]; scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer"
        style={{ color: '#2fe8a2' }}
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
          <ul className="min-w-[260px] rounded-2xl overflow-hidden py-2"
            style={{ background: 'rgba(0,0,0,0.96)', border: '1px solid rgba(47,232,162,0.25)', boxShadow: '0 0 24px rgba(47,232,162,0.1), 0 8px 32px rgba(0,0,0,0.5)', backdropFilter: 'blur(16px)' }}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-start gap-4 px-5 py-4 transition-colors group"
                  style={{ background: 'transparent' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(47,232,162,0.08)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                  onClick={() => setOpen(false)}
                >
                  <span className="mt-0.5 shrink-0 transition-colors" style={{ color: '#2fe8a2' }}>
                    {link.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-white transition-colors">
                      {link.label}
                    </span>
                    <span className="block text-xs mt-0.5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
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
                <span className="mt-0.5 transition-colors shrink-0" style={{ color: '#2fe8a2' }}>
                  {link.icon}
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">{link.label}</span>
                  <span className="block text-xs mt-0.5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{link.description}</span>
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll(); // run on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-[1000] transition-all duration-500`}
      style={{
        background: 'transparent',
      }}
    >
      <div
        className={`transition-all duration-500 flex items-center justify-between ${scrolled ? 'mx-auto backdrop-blur-xl rounded-full px-5 mt-3' : 'max-w-7xl mx-auto px-6'}`}
        style={{
          background: scrolled ? 'rgba(0,0,0,0.96)' : 'transparent',
          border: scrolled ? '1px solid rgba(47,232,162,0.25)' : 'none',
          boxShadow: scrolled ? '0 0 24px rgba(47,232,162,0.1), 0 4px 16px rgba(0,0,0,0.4)' : 'none',
          height: scrolled ? '48px' : '80px',
          ...(scrolled ? { width: '95vw', maxWidth: '860px', padding: '0.35rem 1rem' } : {}),
        }}>
        {/* Logo */}
        <Link href="/" className={`flex items-center gap-2 group ${scrolled ? 'ml-0' : 'ml-2 lg:ml-4'}`}>
          <Image
            src="/images/logo/Switch Media logo horizontal.png"
            alt="Switch Media Marketing Logo"
            width={240}
            height={60}
            className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <span className={`font-bold whitespace-nowrap transition-all duration-300 hidden md:inline ${scrolled ? 'text-xs' : 'text-sm'}`} style={{ color: '#ffffff' }}>
            Switch Media Marketing
          </span>
        </Link>

        {/* Desktop nav */}
        {scrolled && <div className="hidden md:block w-px h-5 mx-1" style={{ background: 'rgba(47,232,162,0.4)' }} />}
        <div className="hidden md:flex items-center gap-6">
          <DesktopDropdown label="Paid Ads" links={paidAdsLinks} scrolled={scrolled} />
          <DesktopDropdown label="AI Automations" links={aiAutomationLinks} scrolled={scrolled} />

          <Link href="/about" className="text-sm font-medium transition-colors" style={{ color: '#2fe8a2' }}>
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors" style={{ color: '#2fe8a2' }}>
            Contact
          </Link>
          <Link
            href="/strategy-call"
            className="group relative inline-flex items-center justify-center"
          >
            <span
              className="absolute -inset-[4px] rounded-[16px] opacity-100"
              style={{
                background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)',
                backgroundSize: '300% 300%',
                animation: 'heroBorderSpin 3s linear infinite',
              }}
            />
            <span
              className="relative px-6 py-2.5 text-sm font-bold transition-all duration-300 whitespace-nowrap"
              style={{
                background: '#000000',
                color: '#2fe8a2',
                borderRadius: '0.75rem',
                border: '1px solid rgba(47,232,162,0.2)',
              }}
            >
              Book a Strategy Call
            </span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: '#2fe8a2' }} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} style={{ background: '#2fe8a2' }} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: '#2fe8a2' }} />
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6" style={{ background: '#000000', borderTop: '1px solid rgba(47,232,162,0.2)' }}>
          <div className="flex flex-col">
            <MobileAccordion
              label="Paid Ads"
              links={paidAdsLinks}
              onClose={() => setMobileOpen(false)}
            />
            <MobileAccordion
              label="AI Automations"
              links={aiAutomationLinks}
              onClose={() => setMobileOpen(false)}
            />
            <div className="border-b border-white/10">
              <Link
                href="/about"
                className="block w-full text-left py-4 text-base font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </Link>
            </div>
            <div className="border-b border-white/10">
              <Link
                href="/contact"
                className="block w-full text-left py-4 text-base font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/strategy-call"
              className="block w-full text-center px-6 py-3.5 text-sm font-bold rounded-xl transition-all whitespace-nowrap"
              style={{ background: '#000000', color: '#2fe8a2', border: '1px solid #2fe8a2', boxShadow: '0 0 12px rgba(47,232,162,0.15)' }}
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