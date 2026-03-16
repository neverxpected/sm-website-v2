interface TrustedByLogo {
  alt_text: string;
  image_url: string;
}

interface TrustedByProps {
  heading: string;
  logos: TrustedByLogo[];
}

export function TrustedBy({ heading, logos }: TrustedByProps) {
  return (
    <section
      className="relative pt-4 pb-10 sm:py-10 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Left + right fade masks */}
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #000000, transparent)' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #000000, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <p
          className="text-xl uppercase tracking-[0.35em]"
          style={{
            color: '#ffffff',
            fontFamily: 'var(--font-orbitron), sans-serif',
            fontWeight: 500,
          }}
        >
          {heading}
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
                className="inline-flex items-center justify-center mx-3 shrink-0"
                style={{ width: 160, height: 90 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.image_url}
                  alt={logo.alt_text}
                  style={{
                    maxWidth: '200px',
                    maxHeight: '80px',
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
