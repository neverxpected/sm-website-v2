import Link from "next/link";
import type { CaseStudy } from "@/types/database";

const ACCENT_COLORS = ["#FF2D78", "#00C8FF", "#9B30FF"] as const;
const ACCENT_COLORS_2 = ["#9B30FF", "#9B30FF", "#FF2D78"] as const;

type StatItem = { emoji: string; label: string; value: string };

interface CaseStudiesProps {
  heading: string;
  subheading: string;
  badge: string;
  cases: CaseStudy[];
}

export function CaseStudies({ heading, subheading, badge, cases }: CaseStudiesProps) {
  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden" style={{ background: "#000000" }}>
      {/* Ambient orbs */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,45,120,0.06) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="reveal inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
            style={{
              background: "rgba(0,229,255,0.08)",
              border: "1px solid rgba(0,229,255,0.2)",
              color: "#00E5FF",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
              />
            </svg>
            {badge}
          </div>
          <style>{`
            @keyframes realGrowthShimmer {
              0%   { background-position: 200% center; }
              100% { background-position: -200% center; }
            }
          `}</style>
          <h2 className="reveal reveal-delay-100 text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            {heading}
            <span
              style={{
                background: "linear-gradient(90deg, #FF2D78, #9B30FF, #FF2D78)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% auto",
                animation: "realGrowthShimmer 4s linear infinite",
                display: "inline-block",
              }}
            >
              Real Growth.
            </span>
          </h2>
          <p
            className="reveal reveal-delay-200 text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(240,244,255,0.5)" }}
          >
            {subheading}
          </p>
        </div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-6">
          {cases.map((c, i) => {
            const isReversed = i % 2 === 1;
            const accentHex = ACCENT_COLORS[i % 3] ?? "#FF2D78";
            const accentHex2 = ACCENT_COLORS_2[i % 3] ?? "#9B30FF";
            const stats = (c.stats as StatItem[] | null) ?? [];
            const photo = c.photo_url ?? "";
            const href = c.cta_url ?? "/contact";
            return (
              <div
                key={c.id}
                className={`reveal reveal-delay-${(i + 1) * 100} flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} rounded-3xl overflow-hidden`}
                style={{
                  background: "#000000",
                  border: `1px solid ${accentHex}88`,
                  boxShadow: `0 0 30px ${accentHex}55, 0 0 80px ${accentHex}20, 0 0 160px ${accentHex}08`,
                  minHeight: "180px",
                }}
              >
                {/* Photo */}
                <div className="relative lg:w-[32%] shrink-0 overflow-hidden" style={{ minHeight: "140px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo}
                    alt={c.client_name}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: "center top" }}
                  />
                  {/* Gradient bleed toward content side */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isReversed
                        ? "linear-gradient(to left, rgba(0,0,0,0.85) 0%, transparent 50%)"
                        : "linear-gradient(to right, rgba(0,0,0,0.85) 0%, transparent 50%)",
                    }}
                  />
                  {/* Category badge */}
                  {c.category && (
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                        style={{
                          background: "rgba(0,0,0,0.6)",
                          backdropFilter: "blur(8px)",
                          color: "rgba(240,244,255,0.9)",
                          border: "1px solid rgba(255,255,255,0.15)",
                        }}
                      >
                        {c.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center gap-3 p-4 lg:p-6 flex-1" style={{ background: "#ffffff" }}>
                  {/* Accent line */}
                  <div
                    className="w-10 h-0.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${accentHex}, ${accentHex2})` }}
                  />

                  <div>
                    <h3 className="text-base lg:text-lg font-black mb-1" style={{ color: "#111827" }}>
                      {c.client_name}
                    </h3>
                    <p className="text-xs leading-relaxed line-clamp-3" style={{ color: "#4B5563" }}>
                      {c.description ?? ""}
                    </p>
                  </div>

                  {/* Stats — horizontal pills */}
                  {stats.length > 0 && (
                    <div className="flex flex-nowrap gap-2">
                      {stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg"
                          style={{ background: "#F3F4F6", border: "1px solid rgba(0,0,0,0.08)" }}
                        >
                          <span className="text-sm">{stat.emoji}</span>
                          <div>
                            <p
                              className="text-[9px] uppercase tracking-widest font-bold"
                              style={{ color: "#6B7280" }}
                            >
                              {stat.label}
                            </p>
                            <p className="text-base font-black leading-tight" style={{ color: "#111827" }}>
                              {stat.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA link */}
                  <div>
                    <Link
                      href={href}
                      className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:gap-3"
                      style={{ color: accentHex }}
                    >
                      {c.cta_text ?? "Work with us"}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
