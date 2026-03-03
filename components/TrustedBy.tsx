"use client";

const logos = [
  { src: '/images/client-logos/elite dermatology and the oaks plastic surgery logo.png', alt: 'Elite Dermatology & The Oaks Plastic Surgery' },
  { src: '/images/client-logos/illuminate heights fitness logo.png', alt: 'illumiNate Heights Fitness' },
  { src: '/images/client-logos/radiant with rebecca med spa logo.png', alt: 'Radiant With Rebecca Med Spa' },
  { src: '/images/client-logos/makaan investment group logo.png', alt: 'Makaan Investment Group' },
  { src: '/images/client-logos/the royal med spa logo.png', alt: 'The Royal Med Spa' },
  { src: '/images/client-logos/lind institute of plastic surgery logo.png', alt: 'Lind Institute of Plastic Surgery' },
  { src: '/images/client-logos/dance alliance kingwood logo.png', alt: 'Dance Alliance of Kingwood' },
  { src: '/images/client-logos/spindletap brewery and coffee logo.png', alt: 'Spindletap Brewery & Coffee' },
  { src: '/images/client-logos/lesavoy plastic surgery logo.png', alt: 'LeSavoy Plastic Surgery' },
  { src: '/images/client-logos/outcomes therapy logo.png', alt: 'Outcomes Therapy' },
  { src: '/images/client-logos/rosa mexicano logo.png', alt: 'Rosa Mexicano' },
];

export default function TrustedBy() {
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.35em]" style={{ color: 'rgba(240,244,255,0.5)' }}>
          Trusted By
        </p>
      </div>

      {/* Marquee — two identical tracks for seamless loop */}
      <div className="flex overflow-hidden">
        {[0, 1].map((trackIdx) => (
          <div
            key={trackIdx}
            className="animate-marquee flex shrink-0 items-center"
            aria-hidden={trackIdx === 1}
          >
            {logos.map((logo, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center mx-5 shrink-0 rounded-xl"
                style={{
                  width: 200,
                  height: 84,
                  padding: '10px 20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    maxWidth: '160px',
                    maxHeight: '60px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'invert(1) brightness(2) contrast(1.4)',
                    opacity: 1,
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
