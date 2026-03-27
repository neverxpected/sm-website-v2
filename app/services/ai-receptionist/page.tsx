import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Voice Receptionist — Autonomous AI Voice Infrastructure",
  description: "Switch Media deploys enterprise-grade AI voice agents that handle inbound and outbound communication with human-level precision. 24/7 autonomous support, CRM sync, and multi-language deployment.",
};

const services = [
  { title: "24/7 Inbound Management", description: "Every inbound call is answered immediately regardless of time, volume, or day. The AI agent qualifies leads, answers service-specific questions, books appointments, and routes escalations based on predefined logic. No voicemail. No missed opportunities." },
  { title: "Autonomous Outbound Flow", description: "Outbound call sequences are deployed for follow-up, reactivation, appointment reminders, and lead nurturing. The system executes outbound campaigns at scale without human labor, maintaining consistent messaging and logging all interaction data automatically." },
  { title: "Multi-Language Deployment", description: "AI voice agents are configured to operate across multiple languages within the same system. Language detection is automatic based on caller input. This enables global businesses to serve diverse markets without building separate call infrastructure for each region." },
];

const technical = [
  { title: "Low-Latency Architecture", description: "Response latency is engineered below 500ms to maintain natural conversation flow. The system uses optimized speech-to-text and text-to-speech pipelines with edge infrastructure to eliminate the processing delays that make AI voice agents sound robotic or unresponsive." },
  { title: "Full CRM Synchronization", description: "Every interaction is logged and pushed to your CRM in real time. Contact records, call transcripts, qualification data, appointment bookings, and disposition tags are written automatically. The AI operates as a fully integrated system component, not an isolated tool." },
  { title: "Custom Knowledge Base Integration", description: "The agent is trained on your specific business data: service offerings, pricing structures, FAQs, objection responses, and escalation rules. Knowledge bases are updated as your business evolves without requiring system redeployment." },
];

const process = [
  { step: "01", title: "Workflow Mapping", description: "We document your existing inbound and outbound call workflows, identify decision trees, escalation paths, and integration requirements. This produces the functional specification the AI agent is built against before any configuration begins." },
  { step: "02", title: "Autonomous Training", description: "The agent is trained on your knowledge base, configured with your business logic, and integrated with your CRM and calendar systems. Voice tone, pacing, and response patterns are calibrated to match your brand standards before live testing." },
  { step: "03", title: "Live Deployment", description: "The system goes live with monitored call routing. We review transcripts and performance data in the first two weeks to identify edge cases, refine responses, and confirm the agent is operating within defined quality parameters." },
];

const badges = ["Answers instantly, no hold times", "Qualifies leads with smart questions", "Books directly into your calendar", "Speaks naturally, not robotic", "Handles objections professionally"];

const MINT = '#2fe8a2';
const SHIMMER = `@keyframes arShimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } } .ar-shimmer { background: linear-gradient(90deg,#2fe8a2,#5fffc2,#2fe8a2); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; background-size:200% auto; animation:arShimmer 4s linear infinite; display:inline-block; padding-bottom:0.1em; }`;

export default function AiReceptionistPage() {
  return (
    <main className="relative min-h-screen text-white" style={{ background: '#000000' }}>
      <style>{SHIMMER}</style>
      <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(47,232,162,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,232,162,0.06) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(47,232,162,0.1) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(47,232,162,0.07) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-[0.25em]" style={{ background: 'rgba(47,232,162,0.1)', border: '1px solid rgba(47,232,162,0.3)', color: MINT }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" /> AI Automations
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.1] mb-8 text-white">
            Autonomous AI<br /><span className="ar-shimmer lg:text-[46px]">Voice Infrastructure.</span>
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-12" style={{ color: 'rgba(240,244,255,0.55)' }}>
            We deploy enterprise-grade AI voice agents that handle inbound and outbound communication with human-level precision. Our systems eliminate missed opportunities by providing 24/7 autonomous support for global businesses.
          </p>
          <div className="relative inline-flex items-center justify-center mb-12">
            <span className="absolute -inset-[4px] rounded-[16px]" style={{ background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)', backgroundSize: '300% 300%', animation: 'arShimmer 3s linear infinite' }} />
            <Link href="/strategy-call" className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-base transition-all duration-300 hover:scale-105 whitespace-nowrap" style={{ background: '#000000', color: MINT, borderRadius: '0.75rem', border: '1px solid rgba(47,232,162,0.2)' }}>
              Book a Strategy Call &rarr;
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {badges.map((b) => (
              <span key={b} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm" style={{ background: 'rgba(47,232,162,0.08)', border: '1px solid rgba(47,232,162,0.2)', color: 'rgba(240,244,255,0.75)' }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 shrink-0" stroke={MINT} strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: MINT }}>Service Coverage</p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-12">What the system handles.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-8 rounded-2xl flex flex-col gap-4" style={{ background: 'rgba(47,232,162,0.04)', border: '1px solid rgba(47,232,162,0.2)' }}>
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: MINT }}>Technical Architecture</p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-12">How the system is built.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {technical.map((t) => (
              <div key={t.title} className="p-8 rounded-2xl flex flex-col gap-4" style={{ background: 'rgba(47,232,162,0.03)', border: '1px solid rgba(47,232,162,0.15)' }}>
                <h3 className="text-base font-bold text-white">{t.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: MINT }}>Deployment Process</p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-12">From spec to live system.</h2>
          <div className="flex flex-col gap-0">
            {process.map((p, i) => (
              <div key={p.step} className="flex gap-8 pb-12 relative">
                {i < process.length - 1 && <div className="absolute left-6 top-14 bottom-0 w-px" style={{ background: 'rgba(47,232,162,0.25)' }} />}
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-sm z-10" style={{ background: MINT, color: '#000000' }}>{p.step}</div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'rgba(240,244,255,0.45)' }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 lg:px-8 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-6 sm:p-12 rounded-3xl" style={{ background: 'rgba(47,232,162,0.04)', border: '1px solid rgba(47,232,162,0.2)', boxShadow: '0 0 40px rgba(47,232,162,0.06)' }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: MINT }}>Ready to Deploy</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Deploy your AI voice agent.</h2>
            <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>We map your call workflow, configure the agent, and deploy a fully integrated system. Schedule a call to begin the scoping process.</p>
            <div className="relative inline-flex items-center justify-center">
              <span className="absolute -inset-[4px] rounded-[16px]" style={{ background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)', backgroundSize: '300% 300%', animation: 'arShimmer 3s linear infinite' }} />
              <Link href="/strategy-call" className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-base transition-all duration-300 hover:scale-105 whitespace-nowrap" style={{ background: '#000000', color: MINT, borderRadius: '0.75rem', border: '1px solid rgba(47,232,162,0.2)' }}>
                Book a Strategy Call &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
