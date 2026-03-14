'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import type { NavDropdownGroup, NavSimpleLink } from './Navbar'

interface NavbarClientProps {
  siteName: string
  dropdowns: NavDropdownGroup[]
  simpleLinks: NavSimpleLink[]
  ctaLabel: string
  ctaHref: string
}

function DesktopDropdown({ label, links, onClose }: { label: string; links: { label: string; href: string; description: string | null }[]; onClose?: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-white/70 hover:text-[#FF2D78] transition-colors cursor-pointer"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
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
                  className="flex items-start gap-4 px-5 py-4 transition-colors group hover:bg-gradient-to-br hover:from-[rgba(255,45,120,0.85)] hover:to-[rgba(155,48,255,0.85)]"
                  onClick={() => { setOpen(false); onClose?.() }}
                >
                  <span className="mt-0.5 text-white/40 group-hover:text-white transition-colors shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-white group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                    {link.description && (
                      <span className="block text-xs text-white/40 mt-0.5 leading-relaxed">
                        {link.description}
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function MobileAccordion({
  label,
  links,
  onClose,
}: {
  label: string
  links: { label: string; href: string; description: string | null }[]
  onClose: () => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex items-center justify-between py-4 text-base font-medium text-white"
        onClick={() => setOpen(!open)}
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">{link.label}</span>
                  {link.description && (
                    <span className="block text-xs text-white/40 mt-0.5 leading-relaxed">
                      {link.description}
                    </span>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function NavbarClient({
  siteName,
  dropdowns,
  simpleLinks,
  ctaLabel,
  ctaHref,
}: NavbarClientProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="fixed w-full z-50 backdrop-blur-md"
      style={{ background: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span
            className="rounded-xl flex items-center justify-center shrink-0 p-1 transition-all duration-300 group-hover:scale-110"
            style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)' }}
          >
            <Image
              src="/images/logo/sm-logo.png"
              alt={`${siteName} Logo`}
              width={40}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </span>
          <span className="text-base font-bold tracking-tight text-white">
            {siteName}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-white">
          {dropdowns.map((d) => (
            <DesktopDropdown key={d.label} label={d.label} links={d.links} />
          ))}
          {simpleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-[#FF2D78] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            className="relative px-6 py-2.5 text-sm font-bold rounded-full text-white transition-all duration-300 hover:scale-105 overflow-hidden whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #FF2D78, #9B30FF)',
              boxShadow: '0 0 20px rgba(255,45,120,0.35)',
            }}
          >
            {ctaLabel}
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6"
          style={{
            background: 'rgba(11,11,12,0.85)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div className="flex flex-col">
            {dropdowns.map((d) => (
              <MobileAccordion
                key={d.label}
                label={d.label}
                links={d.links}
                onClose={() => setMobileOpen(false)}
              />
            ))}
            {simpleLinks.map((link) => (
              <div key={link.href} className="border-b border-white/10">
                <Link
                  href={link.href}
                  className="block w-full text-left py-4 text-base font-medium text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Link
              href={ctaHref}
              className="block w-full text-center px-6 py-3.5 text-sm font-bold rounded-full text-white transition-all whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)' }}
              onClick={() => setMobileOpen(false)}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
