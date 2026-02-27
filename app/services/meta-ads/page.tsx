import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meta Ads Services",
  description:
    "Switch Media Co runs high-converting Meta (Facebook & Instagram) ad campaigns for Houston businesses. Precision targeting, creative strategy, and measurable ROI.",
};

export default function MetaAdsPage() {
  return (
    <main className="min-h-screen bg-white text-black neural-bg">
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/20 mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-black/50">
              Paid Ads
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-none mb-6">
            Meta Ads
          </h1>
          <p className="text-lg lg:text-xl text-black/50 max-w-2xl leading-relaxed mb-12">
            Reach your ideal customers on Facebook and Instagram with
            data-driven campaigns built for Houston businesses. From awareness
            to conversion, we manage every stage of your Meta funnel.
          </p>
          <Link
            href="https://calendly.com/switchmedia/15min"
            className="inline-flex items-center justify-center px-10 py-5 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 active:scale-100 animate-glow-pulse"
            style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)' }}
          >
            Book a Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}
