'use client';

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

// Duplicate for seamless infinite loop
const track = [...logos, ...logos];

export default function LogoBanner() {
  return (
    <div
      className="py-12 overflow-hidden"
      style={{
        background: '#080C18',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <p
        className="text-center text-xs font-bold uppercase tracking-[0.3em] mb-8"
        style={{ color: 'rgba(240,244,255,0.3)' }}
      >
        Trusted by 50+ companies across Houston &amp; beyond
      </p>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul
          className="flex shrink-0 gap-6 items-center animate-marquee"
          style={{ listStyle: 'none', margin: 0, padding: 0 }}
        >
          {track.map((logo, i) => (
            <li
              key={i}
              className="shrink-0 flex items-center justify-center rounded-2xl"
              style={{
                width: 160,
                height: 72,
                padding: '10px 20px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                flexShrink: 0,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxWidth: '120px',
                  maxHeight: '44px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.65,
                  display: 'block',
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
