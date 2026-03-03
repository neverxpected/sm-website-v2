"use client";

const logos = [
  { src: '/images/client-logos/Elite Dermatology %26 The Oaks Plastic Surgery.png', alt: 'Elite Dermatology & The Oaks Plastic Surgery' },
  { src: '/images/client-logos/illuminate heights fitness.png', alt: 'illumiNate Heights Fitness' },
  { src: '/images/client-logos/radiant med spa.png', alt: 'Radiant Med Spa' },
  { src: '/images/client-logos/makaan investment group.png', alt: 'Makaan Investment Group' },
  { src: '/images/client-logos/the royal med spa.png', alt: 'The Royal Med Spa' },
  { src: '/images/client-logos/lind institute of plastic surgery.png', alt: 'Lind Institute of Plastic Surgery' },
  { src: '/images/client-logos/dance alliance.png', alt: 'Dance Alliance' },
  { src: '/images/client-logos/spindletap brewery and coffee.png', alt: 'Spindletap Brewery & Coffee' },
  { src: '/images/client-logos/axcelsus.png', alt: 'Axcelsus' },
  { src: '/images/client-logos/lesavoy plastic surgery.png', alt: 'LeSavoy Plastic Surgery' },
  { src: '/images/client-logos/outcomes therapy.png', alt: 'Outcomes Therapy' },
];

export default function TrustedBy() {
  const doubled = [...logos, ...logos];

  return (
    <section
      className="relative py-10 overflow-hidden"
      style={{
        background: '#080C18',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
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
              <div
                key={i}
                className="inline-flex items-center justify-center mx-6 shrink-0 rounded-xl"
                style={{
                  width: 140,
                  height: 56,
                  padding: '8px 16px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    maxWidth: '108px',
                    maxHeight: '40px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.6,
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
