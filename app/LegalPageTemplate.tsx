interface LegalSection {
  heading: string
  items: { label: string; body: string }[]
}

interface LegalStandalone {
  heading: string
  body: string
}

interface LegalTerm {
  number: string
  heading: string
  body: string
  items: { label: string; text: string }[]
}

interface LegalPageTemplateProps {
  badge: string
  heading: string
  lastUpdated: string
  introText?: string
  sections?: LegalSection[]
  standalone?: LegalStandalone[]
  terms?: LegalTerm[]
}

export function LegalPageTemplate({
  badge,
  heading,
  lastUpdated,
  introText,
  sections,
  standalone,
  terms,
}: LegalPageTemplateProps) {
  return (
    <main className="min-h-screen text-white" style={{ background: '#0A0F1C' }}>
      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 33% 33%, rgba(155,48,255,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Header */}
      <section className="relative z-10 pt-40 pb-16 px-6 lg:px-8 max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-[0.25em] mb-6" style={{ color: 'rgba(155,48,255,0.8)' }}>
          {badge}
        </p>
        <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6">
          {heading}
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>
          {lastUpdated}
        </p>
      </section>

      {/* Intro card */}
      {introText && (
        <section className="relative z-10 pb-12 px-6 lg:px-8 max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.6)' }}>
              {introText}
            </p>
          </div>
        </section>
      )}

      {/* Bulleted sections */}
      {sections && sections.length > 0 && (
        <section className="relative z-10 pb-12 px-6 lg:px-8 max-w-3xl mx-auto flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2
                className="text-lg font-black text-white mb-5 pb-4"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              >
                {s.heading}
              </h2>
              <ul className="flex flex-col gap-5">
                {s.items.map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: '#9B30FF' }}
                    />
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.55)' }}>
                      <span className="font-bold text-white">{item.label}:</span>{' '}{item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Standalone cards */}
      {standalone && standalone.length > 0 && (
        <section className="relative z-10 pb-12 px-6 lg:px-8 max-w-3xl mx-auto flex flex-col gap-8">
          {standalone.map((s) => (
            <div
              key={s.heading}
              className="p-8 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h2 className="text-base font-black text-white mb-3">{s.heading}</h2>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.55)' }}>
                {s.body}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Terms sections */}
      {terms && terms.length > 0 && (
        <section className="relative z-10 pb-12 px-6 lg:px-8 max-w-3xl mx-auto flex flex-col gap-10">
          {terms.map((term) => (
            <div key={term.number}>
              <h2
                className="text-lg font-black text-white mb-5 pb-4"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              >
                {term.number}. {term.heading}
              </h2>
              {term.body && (
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(240,244,255,0.55)' }}>
                  {term.body}
                </p>
              )}
              {term.items.length > 0 && (
                <ul className="flex flex-col gap-5">
                  {term.items.map((item) => (
                    <li key={item.label} className="flex gap-4">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: '#9B30FF' }}
                      />
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.55)' }}>
                        <span className="font-bold text-white">{item.label}:</span>{' '}{item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      <div className="pb-32" />
    </main>
  )
}
