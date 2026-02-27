"use client";

const logos = [
  { name: "Acme Corp", abbr: "AC" },
  { name: "Vertex Media", abbr: "VM" },
  { name: "NovaSpa", abbr: "NS" },
  { name: "PeakFit", abbr: "PF" },
  { name: "ClearSkin Clinic", abbr: "CC" },
  { name: "Apex Legal", abbr: "AL" },
  { name: "Blaze Auto", abbr: "BA" },
  { name: "Summit Health", abbr: "SH" },
  { name: "Lux Dental", abbr: "LD" },
  { name: "Urban Realty", abbr: "UR" },
];

export default function TrustedBy() {
  const doubled = [...logos, ...logos];

  return (
    <section className="relative py-10 overflow-hidden" style={{ background: '#080C18', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>

      {/* Left + right fade masks */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #080C18, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #080C18, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: 'rgba(240,244,255,0.25)' }}>
          Trusted by 50+ companies across Houston &amp; beyond
        </p>
      </div>

      {/* Marquee — two identical tracks for seamless loop */}
      <div className="flex overflow-hidden">
        {[0, 1].map((trackIdx) => (
          <div
            key={trackIdx}
            className="animate-marquee flex shrink-0"
            aria-hidden={trackIdx === 1}
          >
            {logos.map((logo, i) => (
              <div key={i} className="inline-flex items-center gap-3 mx-8 shrink-0">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black shrink-0"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(240,244,255,0.4)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {logo.abbr}
                </div>
                <span className="text-sm font-semibold" style={{ color: 'rgba(240,244,255,0.3)' }}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

    </section>
  );
}
