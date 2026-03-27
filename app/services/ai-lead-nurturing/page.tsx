import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Lead Nurturing — Convert More Leads, Automatically | Houston Agency",
  description: "Predictive AI that knows when and how to follow up — turning cold leads into booked clients through personalized, multi-channel outreach that runs 24/7.",
};

const features = [
  { title: "Predicts Optimal Contact Times", description: "Our AI analyzes each lead's behavior patterns and historical engagement data to determine the precise moment they're most likely to respond. Outreach is deployed at that exact window — not on a generic schedule." },
  { title: "Personalizes Every Message", description: "Every message is generated dynamically based on the lead's source, behavior, service interest, and prior interactions. No merge-tag templates — real contextual messaging that feels human and relevant." },
  { title: "Multi-Channel Outreach", description: "Leads are nurtured across SMS, email, and voicemail drops simultaneously. The system coordinates channel sequencing based on where each lead is most responsive — not a one-size-fits-all broadcast." },
  { title: "Learns From Responses", description: "Every reply, click, open, and ignore feeds back into the model. The system continuously improves its sequencing, messaging, and timing based on what actually converts — getting smarter with every lead processed." },
  { title: "Escalates Hot Leads Instantly", description: "When a lead signals high intent — a reply, a link click, or repeated engagement — the system flags them immediately and routes them to your sales team in real time. No lead sits cold while you're busy." },
];

const process = [
  { step: "01", title: "Lead Intake & Tagging", description: "Every new lead is ingested from your CRM, ads platform, or web forms and automatically tagged with source, service interest, and intent score. This data drives all downstream personalization." },
  { step: "02", title: "Sequence Design & Deployment", description: "We build your nurturing sequences — timing, channel mix, message frameworks — and deploy them against your lead segments. All sequences are tested before going live." },
  { step: "03", title: "Continuous Optimization", description: "Performance data is reviewed weekly. Open rates, reply rates, and booking rates are tracked by sequence and segment. Underperforming steps are replaced. High-converting patterns are amplified." },
];

const sequence = [
  { day: "Day 1", label: "Welcome sequence sent", active: false },
  { day: "Day 3", label: "Value content delivered", active: false },
  { day: "Day 5", label: "Engagement detected", active: false },
  { day: "Day 6", label: "Hot lead → Sales call booked", active: true },
];

const MINT = '#2fe8a2';
const SHIMMER = `@keyframes lnShimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } } .ln-shimmer { background: linear-gradient(90deg,#2fe8a2,#5fffc2,#2fe8a2); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; background-size:200% auto; animation:lnShimmer 4s linear infinite; display:inline-block; padding-bottom:0.1em; }`;

export default function AILeadNurturingPage() {
  return (
    <main style={{ background: '#000000', color: '#F0F4FF' }} className="relative min-h-screen">
      <style>{SHIMMER}</style>
      <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(47,232,162,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,232,162,0.06) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <section className="pt-40 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full" style={{ background: 'radial-gradient(ellipse at center, rgba(47,232,162,0.1) 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest" style={{ background: 'rgba(47,232,162,0.1)', border: '1px solid rgba(47,232,162,0.3)', color: MINT }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>
            AI Lead Nurturing
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight mb-6">
            Convert More.{' '}<span className="ln-shimmer">Automatically.</span>
          </h1>
          <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(240,244,255,0.55)' }}>
            Predictive engagement that knows when and how to follow up — turning cold leads into booked clients through personalized, multi-channel outreach that runs 24/7.
          </p>
          <div className="relative inline-flex items-center justify-center">
            <span className="absolute -inset-[4px] rounded-[16px]" style={{ background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)', backgroundSize: '300% 300%', animation: 'lnShimmer 3s linear infinite' }} />
            <Link href="/strategy-call" className="relative inline-flex items-center gap-2.5 px-8 py-4 font-bold text-sm transition-all duration-300 hover:scale-105" style={{ background: '#000000', color: MINT, borderRadius: '0.75rem', border: '1px solid rgba(47,232,162,0.2)' }}>
              Start Nurturing Leads &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-8 text-white">How a Lead Moves Through the System</h2>
          <div className="flex flex-col gap-3">
            {sequence.map((row) => (
              <div key={row.day} className="flex items-center gap-4 px-5 py-3.5 rounded-2xl" style={{
                background: row.active ? MINT : 'rgba(47,232,162,0.05)',
                border: row.active ? 'none' : '1px solid rgba(47,232,162,0.15)',
              }}>
                <span className="text-xs font-bold w-12 shrink-0" style={{ color: row.active ? '#000' : 'rgba(240,244,255,0.35)' }}>{row.day}</span>
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: row.active ? '#000' : 'rgba(47,232,162,0.4)' }} />
                <span className="text-sm" style={{ color: row.active ? '#000000' : 'rgba(240,244,255,0.6)', fontWeight: row.active ? 700 : 400 }}>{row.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8" style={{ background: 'rgba(47,232,162,0.02)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black text-center mb-14">
            What the System <span className="ln-shimmer">Does</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: 'rgba(47,232,162,0.04)', border: '1px solid rgba(47,232,162,0.15)' }}>
                <h3 className="text-base font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black text-center mb-14">
            How We <span className="ln-shimmer">Set It Up</span>
          </h2>
          <div className="flex flex-col gap-6">
            {process.map((p) => (
              <div key={p.step} className="flex gap-6 items-start rounded-2xl p-6" style={{ background: 'rgba(47,232,162,0.04)', border: '1px solid rgba(47,232,162,0.15)' }}>
                <span className="text-3xl font-black shrink-0" style={{ color: 'rgba(47,232,162,0.4)' }}>{p.step}</span>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 text-center" style={{ background: 'rgba(47,232,162,0.02)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black mb-5 text-white">Ready to stop losing leads?</h2>
          <p className="text-base mb-10" style={{ color: 'rgba(240,244,255,0.5)' }}>Book a free strategy call and we&apos;ll walk you through exactly how AI lead nurturing would work for your business.</p>
          <div className="relative inline-flex items-center justify-center">
            <span className="absolute -inset-[4px] rounded-[16px]" style={{ background: 'linear-gradient(135deg, #2fe8a2, #5fffc2, #2fe8a2)', backgroundSize: '300% 300%', animation: 'lnShimmer 3s linear infinite' }} />
            <Link href="/strategy-call" className="relative inline-flex items-center gap-2.5 px-8 py-4 font-bold text-sm transition-all duration-300 hover:scale-105" style={{ background: '#000000', color: MINT, borderRadius: '0.75rem', border: '1px solid rgba(47,232,162,0.2)' }}>
              Book a Free Call &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
