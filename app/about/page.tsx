import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedTimeline from "@/components/AnimatedTimeline";

export const metadata: Metadata = {
    title: "About the Founder | Switch Media Marketing LLC",
    description:
        "The story behind Switch Media Marketing LLC. From a lifelong obsession with digital technology to building autonomous AI infrastructure for growing businesses worldwide.",
};

const milestones = [
    {
        year: "Pre-2018",
        label: "The Origin",
        body: "The obsession started early. From Atari to completing Super Mario Brothers in under eight minutes, the drive to understand, master, and push digital systems to their limit was present long before it had commercial application. That same mindset never left.",
    },
    {
        year: "2018",
        label: "The Pivot",
        body: "After years of scaling two family-owned businesses in Houston spanning Senior Living and Home Health, the focus shifted to the digital engine underneath every great business. Managing operations at that scale made one thing clear: without precision marketing, the best service in the world stays invisible.",
    },
    {
        year: "2019",
        label: "The Breakthrough",
        body: "The first paid campaign launched for a local business generated hundreds of qualified inquiries within 48 hours. The model was proven. Switch Media Marketing LLC was founded in February 2019 to deliver that result at scale for service-based businesses across every major market.",
    },
    {
        year: "2019–Now",
        label: "The Track Record",
        body: "Since founding, the agency has partnered with 50+ businesses across more than a dozen industries, including home services, healthcare, legal, real estate, and fitness. The cumulative result: over $20 million in documented new revenue generated for clients through precision paid advertising and growth systems.",
    },
    {
        year: "Today",
        label: "The Switch Era",
        body: "The agency has evolved well beyond traditional marketing. Switch Media now architects autonomous AI infrastructure for global brands, including AI voice receptionists, automated lead qualification systems, and integrated CRM workflows. The goal is unchanged: scalable, predictable revenue. The tools are now more powerful than ever.",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen text-white" style={{ background: '#0A0F1C' }}>

            {/* Ambient glow */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div
                    className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(255,45,120,0.06) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(155,48,255,0.07) 0%, transparent 65%)' }}
                />
            </div>

            {/* Header */}
            <section className="relative z-10 pt-40 pb-16 px-6 lg:px-8 max-w-3xl mx-auto">
                <p
                    className="text-xs font-bold uppercase tracking-[0.25em] mb-6"
                    style={{ color: 'rgba(255,45,120,0.8)' }}
                >
                    About the Founder
                </p>
                <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
                    Built by Someone Who Has Been Obsessed With Digital Since Day One
                </h1>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>
                    Switch Media Marketing LLC | Founded February 2019 | Houston, TX
                </p>
            </section>

            {/* Founder photo */}
            <section className="relative z-10 pb-10 px-6 lg:px-8 max-w-3xl mx-auto">
                <Image
                    src="/images/switch-media-founder.webp"
                    alt="Switch Media Marketing founder with family"
                    width={1200}
                    height={840}
                    priority
                    className="w-full h-auto rounded-xl"
                />
            </section>

            {/* Intro card */}
            <section className="relative z-10 pb-16 px-6 lg:px-8 max-w-3xl mx-auto">
                <div
                    className="p-8 rounded-2xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.65)' }}>
                        Switch Media is not a marketing agency built on theory. It was built by a founder who has spent a lifetime studying digital systems, tested every dollar in real markets, and built the track record to prove the model works. The following is that record.
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className="relative z-10 pb-16 px-6 lg:px-8 max-w-3xl mx-auto">
                <AnimatedTimeline milestones={milestones} />
            </section>

            {/* Stats bar */}
            <section className="relative z-10 pb-16 px-6 lg:px-8 max-w-3xl mx-auto">
                <div
                    className="rounded-2xl p-8 grid grid-cols-2 sm:grid-cols-3 gap-8"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                    {[
                        { value: '50+', label: 'Businesses Served' },
                        { value: '$20M+', label: 'Revenue Generated' },
                        { value: '12+', label: 'Industries' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p
                                className="text-3xl font-black mb-1"
                                style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                            >
                                {stat.value}
                            </p>
                            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(240,244,255,0.4)' }}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10 pb-32 px-6 lg:px-8 max-w-3xl mx-auto text-center">
                <p className="text-sm mb-8" style={{ color: 'rgba(240,244,255,0.45)' }}>
                    Ready to see what precision marketing and autonomous AI infrastructure can do for your business?
                </p>
                <Link
                    href="https://calendly.com/switchmedia/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-full transition-all duration-300 hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)', boxShadow: '0 0 30px rgba(255,45,120,0.3)' }}
                >
                    Let&apos;s Connect
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </Link>
            </section>

        </main>
    );
}
