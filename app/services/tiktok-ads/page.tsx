import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TikTok Ads Services",
  description:
    "Switch Media Co creates and manages high-impact TikTok ad campaigns that drive viral growth and lower customer acquisition costs for Houston businesses.",
};

export default function TikTokAdsPage() {
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
            TikTok Ads
          </h1>
          <p className="text-lg lg:text-xl text-black/50 max-w-2xl leading-relaxed mb-12">
            Leverage TikTok&apos;s explosive reach to build brand awareness and
            drive conversions. Our creative-first approach produces scroll-stopping
            content that lowers your cost per acquisition and scales fast.
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
