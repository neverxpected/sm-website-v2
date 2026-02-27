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
    revenue: "$450k+",
    roas: "22x ROAS",
    scope: "Meta Ads & Search Dominance for Breast Augmentation & Rhinoplasty.",
  },
  {
    client: "Radiant Med Spa",
    revenue: "$286k+",
    roas: "15x ROAS",
    scope: "Omnichannel Ads & Funnel Architecture for High-Ticket Aesthetics.",
  },
  {
    client: "Illuminate Heights Fitness",
    revenue: "$180k+",
    roas: "8x ROAS",
    scope: "High-Volume Lead Generation & Nurture for 6-Week Challenges.",
  },
];

export default function OurWorkPage() {
  return (
    <main className="min-h-screen bg-white text-black neural-bg">
      {/* Header */}
      <section className="pt-36 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40 mb-6">
            Case Studies
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-none mb-6 text-black">
            Engineered Results.
          </h1>
          <p className="text-lg lg:text-xl text-black/50 leading-relaxed max-w-2xl">
            We don&apos;t just run ads. We build autonomous growth infrastructure. Here is the data to prove it.
          </p>
        </div>
      </section>

      {/* Data Grid */}
      <section className="pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.client}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 flex flex-col gap-6"
            >
              {/* Client name */}
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                {study.client}
              </p>

              {/* Highlight numbers */}
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-bold tracking-tight text-black">
                  {study.revenue}
                </span>
                <span className="text-2xl font-bold tracking-tight text-blue-600">
                  {study.roas}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-black/10" />

              {/* Scope */}
              <p className="text-sm text-black/50 leading-relaxed">
                {study.scope}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-black/40 text-sm uppercase tracking-[0.2em] font-semibold mb-8">
          Ready to see your numbers here?
        </p>
        <Link
          href="https://calendly.com/switchmedia/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-zinc-800 hover:scale-105 transition-all duration-300"
        >
          Audit My Ad Account
        </Link>
      </section>
    </main>
  );
}
