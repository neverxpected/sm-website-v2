import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Receptionist Service",
  description:
    "Switch Media Co deploys custom AI receptionists that answer every call 24/7, book appointments, and push lead data directly to your CRM — all without human intervention.",
};

const steps = [
  {
    number: "01",
    title: "Instant Engagement",
    description:
      "Every call answered 24/7 with a custom AI voice that knows your business.",
  },
  {
    number: "02",
    title: "Intelligent Scheduling",
    description:
      "The AI syncs with your calendar to book strategy calls without human intervention.",
  },
  {
    number: "03",
    title: "CRM Integration",
    description:
      "Lead data is instantly pushed to your CRM for immediate follow-up.",
  },
];

export default function AiReceptionistPage() {
  return (
    <main className="min-h-screen bg-white text-black neural-bg">
      {/* Hero */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/20 mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-black/50">
              Service
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-none mb-6">
            AI Receptionist
          </h1>
          <p className="text-lg lg:text-xl text-black/50 max-w-2xl leading-relaxed">
            A fully autonomous front desk that never sleeps. Built for Houston
            businesses that can&apos;t afford to miss a single lead.
          </p>
        </div>
      </section>

      {/* 3-Step Journey Flow */}
      <section aria-labelledby="journey-heading" className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2
            id="journey-heading"
            className="text-2xl font-bold uppercase tracking-widest mb-20 text-black/30"
          >
            How It Works
          </h2>

          <ol className="relative list-none p-0 space-y-0">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className="relative flex items-start gap-10 pb-16 last:pb-0"
              >
                {/* Vertical connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[1.625rem] top-14 w-px h-[calc(100%-3.5rem)] bg-black/10" />
                )}

                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full text-white flex items-center justify-center font-bold text-base tracking-tight" style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)' }}>
                  {step.number}
                </div>

                {/* Content card */}
                <div className={`step-card flex-1 pt-4 pb-6 px-6 ${index === 1 ? 'step-card-purple' : index === 2 ? 'step-card-cyan' : ''}`}>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-black/55 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/30 mb-6">
            Ready to automate your front desk?
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-12">
            Your AI Receptionist
            <br />
            is one call away.
          </h2>
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
