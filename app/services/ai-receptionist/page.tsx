import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Voice Receptionist — Autonomous AI Voice Infrastructure",
  description:
    "Switch Media deploys enterprise-grade AI voice agents that handle inbound and outbound communication with human-level precision. 24/7 autonomous support, CRM sync, and multi-language deployment.",
};

const services = [
  {
    title: "24/7 Inbound Management",
    description:
      "Every inbound call is answered immediately regardless of time, volume, or day. The AI agent qualifies leads, answers service-specific questions, books appointments, and routes escalations based on predefined logic. No voicemail. No missed opportunities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: "Autonomous Outbound Flow",
    description:
      "Outbound call sequences are deployed for follow-up, reactivation, appointment reminders, and lead nurturing. The system executes outbound campaigns at scale without human labor, maintaining consistent messaging and logging all interaction data automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.055.902-.417 1.173l-1.293.97a1.125 1.125 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
      </svg>
    ),
  },
  {
    title: "Multi-Language Deployment",
    description:
      "AI voice agents are configured to operate across multiple languages within the same system. Language detection is automatic based on caller input. This enables global businesses to serve diverse markets without building separate call infrastructure for each region.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
  },
];

const technical = [
  {
    title: "Low-Latency Architecture",
    description:
      "Response latency is engineered below 500ms to maintain natural conversation flow. The system uses optimized speech-to-text and text-to-speech pipelines with edge infrastructure to eliminate the processing delays that make AI voice agents sound robotic or unresponsive.",
  },
  {
    title: "Full CRM Synchronization",
    description:
      "Every interaction is logged and pushed to your CRM in real time. Contact records, call transcripts, qualification data, appointment bookings, and disposition tags are written automatically. The AI operates as a fully integrated system component, not an isolated tool.",
  },
  {
    title: "Custom Knowledge Base Integration",
    description:
      "The agent is trained on your specific business data: service offerings, pricing structures, FAQs, objection responses, and escalation rules. Knowledge bases are updated as your business evolves without requiring system redeployment.",
  },
];

const process = [
  {
    step: "01",
    title: "Workflow Mapping",
    description:
      "We document your existing inbound and outbound call workflows, identify decision trees, escalation paths, and integration requirements. This produces the functional specification the AI agent is built against before any configuration begins.",
  },
  {
    step: "02",
    title: "Autonomous Training",
    description:
      "The agent is trained on your knowledge base, configured with your business logic, and integrated with your CRM and calendar systems. Voice tone, pacing, and response patterns are calibrated to match your brand standards before live testing.",
  },
  {
    step: "03",
    title: "Live Deployment",
    description:
      "The system goes live with monitored call routing. We review transcripts and performance data in the first two weeks to identify edge cases, refine responses, and confirm the agent is operating within defined quality parameters.",
  },
];

export default function AiReceptionistPage() {
  return (
    <main className="min-h-screen text-white" style={{ background: '#0A0F1C' }}>

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(155,48,255,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(155,48,255,0.1)', border: '1px solid rgba(155,48,255,0.25)', color: '#9B30FF' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            AI Automations
          </div>

          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1] mb-8 text-white">
            Autonomous AI<br />
            <span style={{
              background: 'linear-gradient(90deg, #9B30FF, #00E5FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Voice Infrastructure.</span>
          </h1>

          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
            style={{ color: 'rgba(240,244,255,0.55)' }}>
            We deploy enterprise-grade AI voice agents that handle inbound and outbound communication with human-level precision. Our systems eliminate missed opportunities by providing 24/7 autonomous support for global businesses.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #9B30FF, #00E5FF)', boxShadow: '0 0 30px rgba(155,48,255,0.35)' }}
          >
            Book a Strategy Call
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Service Sections */}
      <section className="px-6 lg:px-8 pb-24" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto pt-24">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(155,48,255,0.8)' }}>
              Service Coverage
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              What the system handles.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-8 rounded-2xl flex flex-col gap-5"
                style={{ background: 'rgba(155,48,255,0.06)', border: '1px solid rgba(155,48,255,0.15)' }}>
                <span className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(155,48,255,0.15)', color: '#9B30FF' }}>
                  {s.icon}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="px-6 lg:px-8 pb-24" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto pt-24">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(0,229,255,0.7)' }}>
              Technical Architecture
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              How the system is built.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {technical.map((t) => (
              <div key={t.title} className="p-8 rounded-2xl flex flex-col gap-4"
                style={{ background: 'rgba(13,21,38,0.6)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(16px)' }}>
                <h3 className="text-base font-bold text-white">{t.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="px-6 lg:px-8 pb-24" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto pt-24">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(155,48,255,0.8)' }}>
              Deployment Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              From spec to live system.
            </h2>
          </div>

          <div className="flex flex-col gap-0">
            {process.map((p, i) => (
              <div key={p.step} className="flex gap-8 pb-12 relative">
                {i < process.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px" style={{ background: 'rgba(155,48,255,0.2)' }} />
                )}
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-sm z-10"
                  style={{ background: 'rgba(155,48,255,0.15)', border: '1px solid rgba(155,48,255,0.3)', color: '#9B30FF' }}>
                  {p.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'rgba(240,244,255,0.45)' }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 lg:px-8 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-12 rounded-3xl" style={{ background: 'rgba(155,48,255,0.06)', border: '1px solid rgba(155,48,255,0.15)' }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: 'rgba(155,48,255,0.8)' }}>
              Ready to Deploy
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Deploy your AI voice agent.
            </h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>
              We map your call workflow, configure the agent, and deploy a fully integrated system. Schedule a call to begin the scoping process.
            </p>
            <Link
              href="https://calendly.com/switchmedia/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #9B30FF, #00E5FF)', boxShadow: '0 0 30px rgba(155,48,255,0.35)' }}
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
