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
      className="trusted-by-section relative pt-4 pb-4 sm:py-10 overflow-hidden"
      style={{
        background: '#000000',
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .trusted-by-section {
            padding-top: 1.5rem !important;
            padding-bottom: 1rem !important;
          }
          .trusted-by-label {
            font-size: 11px !important;
            letter-spacing: 0.15em !important;
          }
          .trusted-by-label-wrap {
            margin-bottom: 0.25rem !important;
          }
        }
      `}</style>
      <div className="trusted-by-label-wrap max-w-7xl mx-auto px-4 lg:px-8 mb-4 text-center">
        <p className="trusted-by-label text-xl uppercase tracking-[0.35em]" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-orbitron), sans-serif', fontWeight: 500 }}>
          Trusted By
        </p>
      </div>

      {/* Marquee — constrained to same max-w-6xl as ServiceGrid cards */}
      <div className="max-w-6xl mx-auto">
        <div className="flex overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          {[0, 1].map((trackIdx) => (
            <div
              key={trackIdx}
              className="animate-marquee flex shrink-0 items-center"
              aria-hidden={trackIdx === 1}
            >
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="inline-flex items-center justify-center mx-1 sm:mx-3 shrink-0"
                  style={{ width: 160, height: 90 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{
                      maxWidth: '200px',
                      maxHeight: '80px',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)',
                      opacity: 1,
                      display: 'block',
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
