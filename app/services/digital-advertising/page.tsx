import Link from 'next/link';

export default function DigitalAdsPage() {
  return (
    <main className="min-h-screen bg-white text-black neural-bg">
      <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-5xl font-bold tracking-tighter mb-6 text-black">Omnichannel <span className="text-black/40">Paid Ads.</span></h1>
        <p className="text-xl text-black/60 max-w-2xl mb-20 font-medium">
          We dominate the world&apos;s most powerful ad platforms—Meta, Google, and TikTok—to scale your Houston business with surgical precision.
        </p>

        {/* The Journey Flow */}
        <div className="grid md:grid-cols-3 gap-8 mb-32 relative">
          <div className="step-card p-8 relative z-10">
            <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold mb-6" style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)' }}>01</div>
            <h3 className="text-xl font-bold mb-4 text-black">Precision Targeting</h3>
            <p className="text-black/55">We identify your ideal customers on Facebook & Instagram, capturing interest where they spend 90% of their digital time.</p>
          </div>
          <div className="step-card step-card-purple p-8 relative z-10">
            <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold mb-6" style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)' }}>02</div>
            <h3 className="text-xl font-bold mb-4 text-black">Search Dominance</h3>
            <p className="text-black/55">When they&apos;re ready to buy, we ensure you appear at the very top of Google Search and Local Services Ads.</p>
          </div>
          <div className="step-card step-card-cyan p-8 relative z-10">
            <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold mb-6" style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)' }}>03</div>
            <h3 className="text-xl font-bold mb-4 text-black">Scale with TikTok</h3>
            <p className="text-black/55">We leverage high-impact TikTok creative to drive viral growth and lower your overall customer acquisition costs.</p>
          </div>
        </div>

        <div className="text-center step-card py-20">
          <h2 className="text-3xl font-bold mb-8 italic text-black">&ldquo;Data-driven growth, not guesswork.&rdquo;</h2>
          <Link href="https://calendly.com/switchmedia/15min" className="px-10 py-4 text-white font-bold rounded-full hover:scale-105 transition-all animate-glow-pulse" style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)' }}>
            Book a Strategy Call
          </Link>
        </div>
      </div>
      </section>
    </main>
  );
}