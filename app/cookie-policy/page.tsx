import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Switch Media Marketing LLC",
  description:
    "Cookie policy for Switch Media Marketing LLC. Learn how we use cookies and similar tracking technologies across our autonomous infrastructure and marketing services.",
};

const sections = [
  {
    heading: "Types of Cookies We Use",
    items: [
      {
        label: "Essential Infrastructure Cookies",
        body: "Necessary for the technical operation of our site and AI integrations.",
      },
      {
        label: "Performance and AI Analytics",
        body: "We use these to monitor the latency and accuracy of our AI Voice agents and automated workflows.",
      },
      {
        label: "Marketing and Retargeting",
        body: "These cookies help us deliver precision ads via Meta, Google, and TikTok based on your previous interactions with our site.",
      },
    ],
  },
];

const standalone = [
  {
    heading: "What are Cookies?",
    body: "Cookies are small text files stored on your device that help us recognize your preferences and provide a seamless user experience.",
  },
  {
    heading: "Third-Party Tracking",
    body: "Our site utilizes tracking pixels from third-party partners including Meta, Google, and Microsoft to measure campaign performance. We also utilize session monitoring for our AI interfaces to ensure natural language processing (NLP) quality.",
  },
  {
    heading: "Managing Your Preferences",
    body: "You can manage or disable cookies through your browser settings. Note that disabling essential cookies may impact the functionality of our autonomous tools and client portals.",
  },
  {
    heading: "Contact",
    body: "For questions regarding our cookie usage, contact charles@switchmediaco.com.",
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen text-white" style={{ background: '#0A0F1C' }}>

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(155,48,255,0.07) 0%, transparent 65%)' }} />
      </div>

      {/* Header */}
      <section className="relative z-10 pt-40 pb-16 px-6 lg:px-8 max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-[0.25em] mb-6" style={{ color: 'rgba(155,48,255,0.8)' }}>
          Legal
        </p>
        <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6">
          Cookie Policy
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>
          Switch Media Marketing LLC | Effective Date: March 1, 2026
        </p>
      </section>

      {/* Intro */}
      <section className="relative z-10 pb-12 px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.6)' }}>
            This Cookie Policy explains how Switch Media Marketing LLC uses cookies and similar tracking technologies to provide, optimize, and secure our autonomous infrastructure and marketing services.
          </p>
        </div>
      </section>

      {/* Standalone sections rendered before the bulleted list */}
      <section className="relative z-10 pb-10 px-6 lg:px-8 max-w-3xl mx-auto flex flex-col gap-8">
        <div className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <h2 className="text-base font-black text-white mb-3">{standalone[0].heading}</h2>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.55)' }}>
            {standalone[0].body}
          </p>
        </div>
      </section>

      {/* Bulleted sections */}
      <section className="relative z-10 pb-12 px-6 lg:px-8 max-w-3xl mx-auto flex flex-col gap-10">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="text-lg font-black text-white mb-5 pb-4"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {s.heading}
            </h2>
            <ul className="flex flex-col gap-5">
              {s.items.map((item) => (
                <li key={item.label} className="flex gap-4">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#9B30FF' }} />
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.55)' }}>
                    <span className="font-bold text-white">{item.label}:</span>{" "}{item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Remaining standalone sections */}
      <section className="relative z-10 pb-32 px-6 lg:px-8 max-w-3xl mx-auto flex flex-col gap-8">
        {standalone.slice(1).map((s) => (
          <div key={s.heading} className="p-8 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <h2 className="text-base font-black text-white mb-3">{s.heading}</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.55)' }}>
              {s.heading === "Contact" ? (
                <>For questions regarding our cookie usage, contact{" "}
                  <a href="mailto:charles@switchmediaco.com"
                    className="underline transition-colors duration-200"
                    style={{ color: '#9B30FF' }}>
                    charles@switchmediaco.com
                  </a>.
                </>
              ) : s.body}
            </p>
          </div>
        ))}
      </section>

    </main>
  );
}
