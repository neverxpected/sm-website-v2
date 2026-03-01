import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work — Engineered Results",
  description:
    "Real data from real campaigns. Switch Media Marketing builds autonomous growth infrastructure for high-ticket brands.",
};

const caseStudies = [
  {
    client: "The Oaks Plastic Surgery",
    stat: "4,300+",
    statLabel: "Inquiries Generated",
    meta: ["2.5+ Years", "Houston, TX", "Plastic Surgery"],
  },
  {
    client: "Radiant Med Spa",
    stat: "$700k+",
    statLabel: "Added Revenue",
    meta: ["4+ Years", "Olathe, KS", "Med Spa"],
  },
  {
    client: "Illuminate Heights Fitness",
    stat: "2,800+",
    statLabel: "Inquiries Generated",
    meta: ["2.5+ Years", "Houston, TX", "Fitness"],
  },
];

export default function OurWorkPage() {
  return (
    <main className="min-h-screen text-white" style={{ background: '#0A0F1C' }}>

      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,45,120,0.07) 0%, transparent 65%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(155,48,255,0.07) 0%, transparent 65%)' }} />
      </div>

      {/* Header */}
      <section className="relative z-10 pt-40 pb-20 px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.25)', color: '#FF2D78' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Case Studies
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1] mb-8 text-white">
            Engineered{" "}
            <span style={{
              background: 'linear-gradient(90deg, #FF2D78, #9B30FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Results.</span>
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed max-w-2xl" style={{ color: 'rgba(240,244,255,0.55)' }}>
            We don&apos;t just run ads. We build autonomous growth infrastructure. Here is the data to prove it.
          </p>
        </div>
      </section>

      {/* Data Grid */}
      <section className="relative z-10 pb-24 px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.client}
              className="rounded-2xl p-8 flex flex-col gap-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Client name */}
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(240,244,255,0.35)' }}>
                {study.client}
              </p>

              {/* Primary stat */}
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-black tracking-tight text-white">
                  {study.stat}
                </span>
                <span className="text-sm font-bold uppercase tracking-[0.15em]"
                  style={{ color: 'rgba(240,244,255,0.45)' }}>
                  {study.statLabel}
                </span>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />

              {/* Meta tags */}
              <div className="flex flex-wrap gap-2">
                {study.meta.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(155,48,255,0.1)', border: '1px solid rgba(155,48,255,0.2)', color: 'rgba(240,244,255,0.6)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 pb-32 px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="p-12 rounded-3xl" style={{ background: 'rgba(255,45,120,0.06)', border: '1px solid rgba(255,45,120,0.15)' }}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: 'rgba(255,45,120,0.8)' }}>
            Ready to see your numbers here?
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-10">
            Let&apos;s build your case study.
          </h2>
          <Link
            href="https://calendly.com/switchmedia/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)', boxShadow: '0 0 30px rgba(255,45,120,0.35)' }}
          >
            Book a Strategy Call
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
