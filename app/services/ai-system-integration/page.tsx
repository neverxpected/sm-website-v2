import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI System Integration — Autonomous AI Infrastructure",
  description:
    "Switch Media architects custom AI ecosystems that bridge the gap between raw data and operational efficiency. Custom LLMs, workflow automation, and predictive intelligence built for scale.",
};

const processes = [
  {
    number: "01",
    title: "System Architecture",
    description:
      "We map your existing data flows, system dependencies, and operational bottlenecks. The output is a detailed integration blueprint that identifies where AI can replace manual logic, reduce latency, and create compounding efficiency across your stack.",
    accent: "rgba(255,45,120,0.9)",
    glow: "rgba(255,45,120,0.3)",
  },
  {
    number: "02",
    title: "Engineering and Deployment",
    description:
      "Custom models, automation workflows, and API integrations are built and deployed against the approved architecture. All systems are tested in staging environments before production deployment to confirm performance against defined benchmarks.",
    accent: "rgba(155,48,255,0.9)",
    glow: "rgba(155,48,255,0.3)",
  },
  {
    number: "03",
    title: "Governance and Scaling",
    description:
      "Post-deployment monitoring tracks system performance, data quality, and output accuracy. Models are retrained as your data evolves. Infrastructure is scaled horizontally as usage grows, without requiring full system re-architecture.",
    accent: "rgba(0,229,255,0.9)",
    glow: "rgba(0,229,255,0.3)",
  },
];

const capabilities = [
  {
    title: "Custom LLM Fine-Tuning",
    description:
      "Base language models are fine-tuned on your proprietary data to handle industry-specific terminology, decision logic, and edge cases. The result is a model that performs with domain-level accuracy rather than generic approximation.",
    color: "#FF2D78",
    bg: "rgba(255,45,120,0.08)",
    border: "rgba(255,45,120,0.2)",
  },
  {
    title: "Intelligent Workflow Automation",
    description:
      "Multi-step business processes are automated through orchestrated AI agents that read inputs, apply logic, call external systems, and write outputs without human intervention. Workflows are auditable, interruptible, and versioned.",
    color: "#9B30FF",
    bg: "rgba(155,48,255,0.08)",
    border: "rgba(155,48,255,0.2)",
  },
  {
    title: "Predictive Data Intelligence",
    description:
      "Predictive models are built on your historical data to forecast demand, flag anomalies, score leads, and surface actionable signals before they become visible through conventional reporting. Output is integrated directly into your existing dashboards.",
    color: "#00E5FF",
    bg: "rgba(0,229,255,0.08)",
    border: "rgba(0,229,255,0.2)",
  },
];

export default function AISystemIntegrationPage() {
  return (
    <main className="min-h-screen text-white" style={{ background: '#0A0F1C' }}>

      {/* Grid texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(155,48,255,0.1) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(155,48,255,0.1)', border: '1px solid rgba(155,48,255,0.25)', color: '#9B30FF' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            AI Automations
          </div>

          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1] mb-8 text-white">
            Autonomous AI Infrastructure<br />
            <span style={{
              background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00E5FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>and System Integration.</span>
          </h1>

          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
            style={{ color: 'rgba(240,244,255,0.55)' }}>
            We architect custom AI ecosystems that bridge the gap between raw data and operational efficiency. Our integrations are designed to scale business logic through technical precision and secure automation.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)', boxShadow: '0 0 30px rgba(155,48,255,0.35)' }}
          >
            Book a Strategy Call
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 px-6 lg:px-8 pb-24" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto pt-24">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(255,45,120,0.8)' }}>
              Our Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              From blueprint to production.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {processes.map((p) => (
              <div key={p.number} className="p-8 rounded-2xl flex flex-col gap-5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm text-white shrink-0"
                  style={{ background: `linear-gradient(135deg, ${p.accent}, ${p.glow.replace('0.3', '0.6')})`, boxShadow: `0 0 16px ${p.glow}` }}>
                  {p.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative z-10 px-6 lg:px-8 pb-24" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto pt-24">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(0,229,255,0.7)' }}>
              Core Capabilities
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              What we build.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="p-8 rounded-2xl flex flex-col gap-4"
                style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${c.color}20`, border: `1px solid ${c.color}40` }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: c.color }} />
                </div>
                <h3 className="text-base font-bold text-white">{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative z-10 px-6 lg:px-8 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-12 rounded-3xl" style={{ background: 'rgba(155,48,255,0.06)', border: '1px solid rgba(155,48,255,0.15)' }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: 'rgba(155,48,255,0.8)' }}>
              Ready to Build
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Architect your AI system.
            </h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>
              We scope the integration, design the architecture, and deliver a production system built for your specific business logic. Schedule a call to begin.
            </p>
            <Link
              href="https://calendly.com/switchmedia/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)', boxShadow: '0 0 30px rgba(155,48,255,0.35)' }}
            >
              Book a Strategy Call
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}