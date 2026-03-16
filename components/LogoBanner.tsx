import type { ClientLogo } from '@/types/database'

interface LogoBannerProps {
  heading?: string
  logos: Pick<ClientLogo, 'image_url' | 'alt_text'>[]
}

// Duplicate for seamless infinite loop
const duplicateTrack = <T,>(arr: T[]): T[] => [...arr, ...arr]

export default function LogoBanner({ heading = 'Trusted by 50+ companies across Houston & beyond', logos }: LogoBannerProps) {
  const track = duplicateTrack(logos)

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
        {heading}
      </p>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul
          className="flex shrink-0 gap-6 items-center animate-marquee"
          style={{ listStyle: 'none', margin: 0, padding: 0 }}
        >
          {track.map((logo, i) => (
            <li
              key={`${logo.alt_text}-${i}`}
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
                src={logo.image_url}
                alt={logo.alt_text}
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
  )
}
