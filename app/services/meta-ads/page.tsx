import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meta Ads — Precision Facebook & Instagram Advertising",
  description:
    "Switch Media builds high-performance Facebook and Instagram engines that convert passive scrollers into predictable revenue. Specialists in scaling high-ticket aesthetics, healthcare, and wellness brands.",
};

const caseStudies = [
  {
    client: "The Oaks Plastic Surgery",
    location: "Houston, TX",
    niche: "Plastic Surgery",
    duration: "4+ Years",
    stat: "5,000+",
    statLabel: "Leads Generated",
    services: ["Liposuction", "Breast Implants", "Tummy Tucks", "Semaglutide"],
  },
  {
    client: "Radiant Med Spa",
    location: "Olathe, KS",
    niche: "Med Spa",
    duration: "5+ Years",
    stat: "$1M+",
    statLabel: "Added Revenue",
    services: ["Botox", "Lip Filler", "Hydrafacials", "Microneedling"],
  },
  {
    client: "Illuminate Heights Fitness",
    location: "Houston, TX",
    niche: "Fitness",
    duration: "4+ Years",
    stat: "5,000+",
    statLabel: "Leads Generated",
    services: ["Memberships", "Limited Time Specials", "Private Training"],
  },
];

const capabilities = [
  {
    title: "Targeting That Finds Buyers",
    description:
      "We build out a proper funnel from top to bottom so you're targeting people at each stage of the sales journey. Hitting that cold audience with interests based and lookalike audiences so we fill the pipeline and then retarget the warmer audience with specific retargeting ads is the framework we follow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Creative That Converts",
    description:
      "Testing a variety of creative from static to video to UGC at volume is a critical move. Every format is battle tested to find what converts at each stage of your funnel and then we chop off the losers and scale the winners.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9.75l-3 3-1.5-1.5" />
      </svg>
    ),
  },
  {
    title: "Tracking That Works",
    description:
      "Since the iOS restrictions went into place years ago, getting proper attribution has been tough for everyone. Fortunately there are a few ways to still get quality attribution with the proper setup so everyone can be on the same page about what is working and what isn't.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
];

export default function MetaAdsPage() {
  return (
    <main className="relative min-h-screen text-white" style={{ background: '#000000' }}>

      {/* Graph paper grid */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        backgroundImage: 'linear-gradient(rgba(47,232,162,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,232,162,0.06) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        {/* Mint glow orbs */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(47,232,162,0.1) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(47,232,162,0.07) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(47,232,162,0.1)', border: '1px solid rgba(47,232,162,0.3)', color: '#2fe8a2' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Meta Advertising
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.1] mb-8 text-white">
            Your Customers Are on Meta Right Now.{' '}
            <style>{`
              @keyframes metaAdsShimmer {
                0%   { background-position: 200% center; }
                100% { background-position: -200% center; }
              }
              .meta-shimmer-text {
                background: linear-gradient(90deg, #2fe8a2, #5fffc2, #2fe8a2);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                background-size: 200% auto;
                animation: metaAdsShimmer 4s linear infinite;
                display: inline-block;
                padding-bottom: 0.1em;
              }
            `}</style>
            <span className="meta-shimmer-text lg:text-[46px]">Are They Seeing You?</span>
          </h1>

          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
            style={{ color: 'rgba(240,244,255,0.55)' }}>
            The platforms change, the principles don&apos;t. We know what makes people stop scrolling, click, and buy. And we build campaigns around that knowledge personally.
          </p>

          {/* CTA button — animated mint glow border matching home page */}
          <div className="relative inline-flex items-center justify-center">
            <span className="absolute -inset-[4px] rounded-[16px]" style={{
              background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)',
              backgroundSize: '300% 300%',
              animation: 'metaAdsShimmer 3s linear infinite',
            }} />
            <Link
              href="/strategy-call"
              className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-base transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{ background: '#000000', color: '#2fe8a2', borderRadius: '0.75rem', border: '1px solid rgba(47,232,162,0.2)' }}
            >
              Get a Free Meta Account Audit &rarr;
            </Link>
          </div>
          <p className="text-sm mt-4" style={{ color: 'rgba(240,244,255,0.4)' }}>
            We&apos;ll tell you honestly if Meta is right for your business.
          </p>
        </div>
      </section>

      {/* Case Study Data */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#2fe8a2' }}>
              Real Results. Real Businesses.
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
              Meta Ads Done Right.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>
              Across 13 industries and millions in managed spend, these are the kinds of numbers that change what a business can afford to dream about.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {caseStudies.map((s) => (
              <div key={s.client} className="p-8 rounded-2xl flex flex-col gap-4"
                style={{
                  background: 'rgba(47,232,162,0.04)',
                  border: '1px solid rgba(47,232,162,0.2)',
                  boxShadow: '0 0 20px rgba(47,232,162,0.05)',
                }}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgba(240,244,255,0.35)' }}>
                    {s.niche} &middot; {s.location}
                  </p>
                  <p className="text-sm font-bold text-white">{s.client}</p>
                </div>
                <div>
                  <p className="text-4xl font-black" style={{ color: '#2fe8a2' }}>
                    {s.stat}
                  </p>
                  <p className="text-xs font-semibold mt-1" style={{ color: 'rgba(240,244,255,0.45)' }}>
                    {s.statLabel}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(47,232,162,0.12)', color: '#2fe8a2', border: '1px solid rgba(47,232,162,0.25)' }}>
                  {s.duration}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2" style={{ borderTop: '1px solid rgba(47,232,162,0.1)' }}>
                  {s.services.map((svc) => (
                    <span key={svc} className="text-xs px-2.5 py-0.5 rounded-full"
                      style={{ color: 'rgba(240,244,255,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#2fe8a2' }}>
              No Black Box. No Mystery.
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
              Our Meta Framework.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>
              Here&apos;s exactly what we do and why it works.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="p-8 rounded-2xl flex flex-col gap-5"
                style={{
                  background: 'rgba(47,232,162,0.03)',
                  border: '1px solid rgba(47,232,162,0.15)',
                  backdropFilter: 'blur(16px)',
                }}>
                <span className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: '#2fe8a2', color: '#000000' }}>
                  {c.icon}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white mb-3">{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 lg:px-8 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="p-6 sm:p-12 rounded-3xl" style={{
            background: 'rgba(47,232,162,0.04)',
            border: '1px solid rgba(47,232,162,0.2)',
            boxShadow: '0 0 40px rgba(47,232,162,0.06)',
          }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: '#2fe8a2' }}>
              Heard This Before?
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Tired of <span style={{ whiteSpace: 'nowrap' }}>Paying Meta</span><br /> &amp; Wondering Where the Money Went?
            </h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>
              That&apos;s the most common thing we hear on the first call. Budgets burning, results inconsistent, agency blame-shifting the algorithm. We come in, audit what&apos;s actually happening inside your account, and tell you the truth about what needs to change. No obligation. No pitch. Just clarity.
            </p>
            <div className="relative inline-flex items-center justify-center">
              <span className="absolute -inset-[4px] rounded-[16px]" style={{
                background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)',
                backgroundSize: '300% 300%',
                animation: 'metaAdsShimmer 3s linear infinite',
              }} />
              <Link
                href="/strategy-call"
                className="relative inline-flex items-center justify-center px-6 sm:px-10 py-4 font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 whitespace-nowrap"
                style={{ background: '#000000', color: '#2fe8a2', borderRadius: '0.75rem', border: '1px solid rgba(47,232,162,0.2)' }}
              >
                Get a Free Meta Account Audit &rarr;
              </Link>
            </div>
            <p className="text-sm mt-4" style={{ color: 'rgba(240,244,255,0.4)' }}>
              We look at your real account data and tell you exactly what we&apos;d fix first.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
