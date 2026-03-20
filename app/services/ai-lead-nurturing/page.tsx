import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "AI Lead Nurturing — Convert More Leads, Automatically | Houston Agency",
    description:
        "Predictive AI that knows when and how to follow up — turning cold leads into booked clients through personalized, multi-channel outreach that runs 24/7.",
};

const features = [
    {
        title: "Predicts Optimal Contact Times",
        description:
            "Our AI analyzes each lead's behavior patterns and historical engagement data to determine the precise moment they're most likely to respond. Outreach is deployed at that exact window — not on a generic schedule.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: "Personalizes Every Message",
        description:
            "Every message is generated dynamically based on the lead's source, behavior, service interest, and prior interactions. No merge-tag templates — real contextual messaging that feels human and relevant.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
        ),
    },
    {
        title: "Multi-Channel Outreach",
        description:
            "Leads are nurtured across SMS, email, and voicemail drops simultaneously. The system coordinates channel sequencing based on where each lead is most responsive — not a one-size-fits-all broadcast.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
        ),
    },
    {
        title: "Learns From Responses",
        description:
            "Every reply, click, open, and ignore feeds back into the model. The system continuously improves its sequencing, messaging, and timing based on what actually converts — getting smarter with every lead processed.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
        ),
    },
    {
        title: "Escalates Hot Leads Instantly",
        description:
            "When a lead signals high intent — a reply, a link click, or repeated engagement — the system flags them immediately and routes them to your sales team in real time. No lead sits cold while you're busy.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
];

const process = [
    {
        step: "01",
        title: "Lead Intake & Tagging",
        description:
            "Every new lead is ingested from your CRM, ads platform, or web forms and automatically tagged with source, service interest, and intent score. This data drives all downstream personalization.",
    },
    {
        step: "02",
        title: "Sequence Design & Deployment",
        description:
            "We build your nurturing sequences — timing, channel mix, message frameworks — and deploy them against your lead segments. All sequences are tested before going live.",
    },
    {
        step: "03",
        title: "Continuous Optimization",
        description:
            "Performance data is reviewed weekly. Open rates, reply rates, and booking rates are tracked by sequence and segment. Underperforming steps are replaced. High-converting patterns are amplified.",
    },
];

const sequence = [
    { day: "Day 1", label: "Welcome sequence sent", active: false },
    { day: "Day 3", label: "Value content delivered", active: false },
    { day: "Day 5", label: "Engagement detected", active: false },
    { day: "Day 6", label: "Hot lead → Sales call booked", active: true },
];

export default function AILeadNurturingPage() {
    return (
        <main style={{ background: "#0A0F1C", color: "#F0F4FF" }} className="relative min-h-screen">

            {/* Grid */}
            <div className="absolute inset-0 pointer-events-none z-0" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
            }} />

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
                        style={{ background: "radial-gradient(ellipse at center, rgba(255,45,120,0.12) 0%, transparent 70%)" }} />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                        style={{ background: "rgba(255,45,120,0.1)", border: "1px solid rgba(255,45,120,0.25)", color: "#FF2D78" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                        </svg>
                        AI Lead Nurturing
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight mb-6">
                        Convert More.{" "}
                        <span style={{ background: "linear-gradient(135deg, #FF2D78, #9B30FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            Automatically.
                        </span>
                    </h1>
                    <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "rgba(240,244,255,0.55)" }}>
                        Predictive engagement that knows when and how to follow up — turning cold leads into booked clients through personalized, multi-channel outreach that runs 24/7.
                    </p>
                    <Link href="/contact"
                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white font-bold text-sm transition-all duration-300 hover:scale-105"
                        style={{ background: "linear-gradient(135deg, #FF2D78, #9B30FF)", boxShadow: "0 0 30px rgba(255,45,120,0.35)" }}>
                        Start Nurturing Leads
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* Sequence visual */}
            <section className="py-16 px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-black text-center mb-8 text-white">How a Lead Moves Through the System</h2>
                    <div className="flex flex-col gap-3">
                        {sequence.map((row) => (
                            <div key={row.day}
                                className="flex items-center gap-4 px-5 py-3.5 rounded-2xl"
                                style={{
                                    background: row.active ? "linear-gradient(135deg, #FF2D78, #9B30FF)" : "rgba(255,255,255,0.04)",
                                    border: row.active ? "none" : "1px solid rgba(255,255,255,0.07)",
                                }}>
                                <span className="text-xs font-bold w-12 shrink-0" style={{ color: row.active ? "#fff" : "rgba(240,244,255,0.35)" }}>{row.day}</span>
                                <span className={`w-2 h-2 rounded-full shrink-0 ${row.active ? "bg-white" : "bg-white/20"}`} />
                                <span className={`text-sm ${row.active ? "text-white font-bold" : "text-white/60"}`}>{row.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-6 lg:px-8" style={{ background: "#0D1526" }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-black text-center mb-14">
                        What the System{" "}
                        <span style={{ background: "linear-gradient(90deg, #FF2D78, #9B30FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Does</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <div key={f.title} className="rounded-2xl p-6 flex flex-col gap-4"
                                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,45,120,0.12)" }}>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                    style={{ background: "rgba(255,45,120,0.12)", color: "#FF2D78" }}>
                                    {f.icon}
                                </div>
                                <h3 className="text-base font-bold text-white">{f.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,244,255,0.5)" }}>{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-black text-center mb-14">
                        How We{" "}
                        <span style={{ background: "linear-gradient(90deg, #FF2D78, #9B30FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Set It Up</span>
                    </h2>
                    <div className="flex flex-col gap-6">
                        {process.map((p) => (
                            <div key={p.step} className="flex gap-6 items-start rounded-2xl p-6"
                                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                                <span className="text-3xl font-black shrink-0" style={{ color: "rgba(255,45,120,0.3)" }}>{p.step}</span>
                                <div>
                                    <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: "rgba(240,244,255,0.5)" }}>{p.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 lg:px-8 text-center" style={{ background: "#0D1526" }}>
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-black mb-5 text-white">
                        Ready to stop losing leads?
                    </h2>
                    <p className="text-base mb-10" style={{ color: "rgba(240,244,255,0.5)" }}>
                        Book a free strategy call and we&apos;ll walk you through exactly how AI lead nurturing would work for your business.
                    </p>
                    <Link href="/contact"
                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white font-bold text-sm transition-all duration-300 hover:scale-105"
                        style={{ background: "linear-gradient(135deg, #FF2D78, #9B30FF)", boxShadow: "0 0 30px rgba(255,45,120,0.35)" }}>
                        Book a Free Call
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>
            </section>

        </main>
    );
}
