import Link from 'next/link'

export interface ServiceSection {
  title: string
  description: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export interface ServicePageTemplateProps {
  accentColor: string
  badge: string
  heading: string
  description: string
  ctaText: string
  ctaUrl: string
  servicesSectionTitle?: string
  servicesSectionBadge?: string
  services?: ServiceSection[]
  technicalSectionTitle?: string
  technicalSectionBadge?: string
  technicalFeatures?: ServiceSection[]
  processSectionTitle?: string
  processSectionBadge?: string
  processSteps?: ProcessStep[]
  ctaSectionBadge?: string
  ctaSectionHeading?: string
  ctaSectionDescription?: string
}

const serviceIcons = [
  <svg key="search" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803z" />
  </svg>,
  <svg key="chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>,
  <svg key="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="bolt" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  <svg key="cpu" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
  </svg>,
  <svg key="globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>,
]

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

export default function ServicePageTemplate({
  accentColor,
  badge,
  heading,
  description,
  ctaText,
  ctaUrl,
  servicesSectionTitle,
  servicesSectionBadge,
  services,
  technicalSectionTitle,
  technicalSectionBadge,
  technicalFeatures,
  processSectionTitle,
  processSectionBadge,
  processSteps,
  ctaSectionBadge,
  ctaSectionHeading,
  ctaSectionDescription,
}: ServicePageTemplateProps) {
  const headingParts = heading.split('\n')

  return (
    <>
      <style>{`
        @keyframes serviceShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${hexToRgba(accentColor, 0.1)} 0%, transparent 70%)` }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(155,48,255,0.08) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]"
            style={{
              background: hexToRgba(accentColor, 0.1),
              border: `1px solid ${hexToRgba(accentColor, 0.25)}`,
              color: accentColor,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {badge}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black tracking-tight leading-[1] mb-8 text-white">
            {headingParts.length > 1 ? (
              <>
                {headingParts[0]}
                <br />
                <span
                  style={{
                    background: `linear-gradient(90deg, ${accentColor}, #9B30FF, ${accentColor})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    backgroundSize: '200% auto',
                    animation: 'serviceShimmer 4s linear infinite',
                    display: 'inline-block',
                    paddingBottom: '0.1em',
                  }}
                >
                  {headingParts[1]}
                </span>
              </>
            ) : (
              <span
                style={{
                  background: `linear-gradient(90deg, ${accentColor}, #9B30FF, ${accentColor})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% auto',
                  animation: 'serviceShimmer 4s linear infinite',
                  display: 'inline-block',
                  paddingBottom: '0.1em',
                }}
              >
                {heading}
              </span>
            )}
          </h1>

          <p
            className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
            style={{ color: 'rgba(240,244,255,0.55)' }}
          >
            {description}
          </p>

          <Link
            href={ctaUrl}
            className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, #9B30FF)`,
              boxShadow: `0 0 30px ${hexToRgba(accentColor, 0.35)}`,
            }}
          >
            {ctaText}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      {services && services.length > 0 && (
        <section className="px-6 lg:px-8 pb-24" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto pt-24">
            <div className="mb-12">
              {servicesSectionBadge && (
                <p
                  className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
                  style={{ color: hexToRgba(accentColor, 0.8) }}
                >
                  {servicesSectionBadge}
                </p>
              )}
              <h2 className="text-3xl lg:text-4xl font-black text-white">{servicesSectionTitle || 'Our Services'}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="p-8 rounded-2xl flex flex-col gap-5"
                  style={{
                    background: hexToRgba(accentColor, 0.06),
                    border: `1px solid ${hexToRgba(accentColor, 0.15)}`,
                  }}
                >
                  <span
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: hexToRgba(accentColor, 0.15), color: accentColor }}
                  >
                    {serviceIcons[i % serviceIcons.length]}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white mb-3">{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technical Features Section */}
      {technicalFeatures && technicalFeatures.length > 0 && (
        <section className="px-6 lg:px-8 pb-24" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto pt-24">
            <div className="mb-12">
              {technicalSectionBadge && (
                <p
                  className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
                  style={{ color: 'rgba(155,48,255,0.8)' }}
                >
                  {technicalSectionBadge}
                </p>
              )}
              <h2 className="text-3xl lg:text-4xl font-black text-white">{technicalSectionTitle || 'Technical Features'}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {technicalFeatures.map((t) => (
                <div
                  key={t.title}
                  className="p-8 rounded-2xl flex flex-col gap-4"
                  style={{
                    background: 'rgba(13,21,38,0.6)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <h3 className="text-base font-bold text-white">{t.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>
                    {t.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Timeline Section */}
      {processSteps && processSteps.length > 0 && (
        <section className="px-6 lg:px-8 pb-24" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto pt-24">
            <div className="mb-12">
              {processSectionBadge && (
                <p
                  className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
                  style={{ color: hexToRgba(accentColor, 0.8) }}
                >
                  {processSectionBadge}
                </p>
              )}
              <h2 className="text-3xl lg:text-4xl font-black text-white">{processSectionTitle || 'Our Process'}</h2>
            </div>

            <div className="flex flex-col gap-0">
              {processSteps.map((p, i) => (
                <div key={p.step} className="flex gap-8 pb-12 relative">
                  {i < processSteps.length - 1 && (
                    <div
                      className="absolute left-6 top-14 bottom-0 w-px"
                      style={{ background: hexToRgba(accentColor, 0.2) }}
                    />
                  )}
                  <div
                    className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-sm z-10"
                    style={{
                      background: hexToRgba(accentColor, 0.15),
                      border: `1px solid ${hexToRgba(accentColor, 0.3)}`,
                      color: accentColor,
                    }}
                  >
                    {p.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                    <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'rgba(240,244,255,0.45)' }}>
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {ctaSectionHeading && (
        <section id="contact" className="px-6 lg:px-8 pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="p-12 rounded-3xl"
              style={{
                background: hexToRgba(accentColor, 0.06),
                border: `1px solid ${hexToRgba(accentColor, 0.15)}`,
              }}
            >
              {ctaSectionBadge && (
                <p
                  className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
                  style={{ color: hexToRgba(accentColor, 0.8) }}
                >
                  {ctaSectionBadge}
                </p>
              )}
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{ctaSectionHeading}</h2>
              {ctaSectionDescription && (
                <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>
                  {ctaSectionDescription}
                </p>
              )}
              <Link
                href={ctaUrl}
                className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}, #9B30FF)`,
                  boxShadow: `0 0 30px ${hexToRgba(accentColor, 0.35)}`,
                }}
              >
                {ctaText}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
