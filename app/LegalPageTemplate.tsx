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
  sections?: LegalSection[]
  standalone?: LegalStandalone[]
  terms?: LegalTerm[]
}

export function LegalPageTemplate({
  badge,
  heading,
  lastUpdated,
  sections,
  standalone,
  terms,
}: LegalPageTemplateProps) {
  return (
    <main className="min-h-screen text-white" style={{ background: '#0A0F1C' }}>
      {/* Grid pattern */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient orb */}
      <div
        className="pointer-events-none fixed right-0 top-0 z-0 h-[600px] w-[600px] rounded-full opacity-30 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)',
        }}
      />

      {/* Hero */}
      <section className="relative z-10 pt-40 pb-8 px-6 lg:px-8 max-w-3xl mx-auto">
        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/60">
          {badge}
        </span>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{heading}</h1>
        <p className="mt-3 text-sm" style={{ color: 'rgba(240,244,255,0.45)' }}>
          Last Updated: {lastUpdated}
        </p>
      </section>

      {/* Content */}
      <section className="relative z-10 pb-32 px-6 lg:px-8 max-w-3xl mx-auto space-y-6">
        {sections?.map((section) => (
          <div
            key={section.heading}
            className="p-6 sm:p-8 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <h2 className="text-lg font-black text-white mb-5">{section.heading}</h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-bold text-white mb-1">{item.label}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {standalone?.map((block) => (
          <div
            key={block.heading}
            className="p-6 sm:p-8 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <h2 className="text-lg font-black text-white mb-5">{block.heading}</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>
              {block.body}
            </p>
          </div>
        ))}

        {terms?.map((term) => (
          <div
            key={term.number}
            className="p-6 sm:p-8 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <h2 className="text-lg font-black text-white mb-5">
              {term.number}. {term.heading}
            </h2>
            {term.body && (
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(240,244,255,0.45)' }}>
                {term.body}
              </p>
            )}
            {term.items.length > 0 && (
              <div className="space-y-4">
                {term.items.map((item) => (
                  <div key={item.label}>
                    <p className="text-sm font-bold text-white mb-1">{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  )
}
