import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Switch Media Marketing LLC",
  description:
    "Privacy policy for Switch Media Marketing LLC. Learn how we collect, process, and protect your personal data across our AI and advertising services.",
};

const sections = [
  {
    heading: "Information We Collect",
    items: [
      {
        label: "Contact Data",
        body: "Name, email address, phone number, and billing information provided during service registration.",
      },
      {
        label: "Audio and Voice Data",
        body: "Voice recordings and text transcriptions resulting from interactions with our AI Voice Receptionist systems.",
      },
      {
        label: "System Metadata",
        body: "Technical information including IP addresses, browser types, and API call logs generated during your use of our integrated AI workflows.",
      },
    ],
  },
  {
    heading: "How We Use Your Information",
    items: [
      {
        label: "Autonomous Service Delivery",
        body: "To train and deploy custom AI agents, optimize ad targeting, and manage billing.",
      },
      {
        label: "Communication",
        body: "To respond to inquiries and send technical or marketing updates.",
      },
      {
        label: "System Refinement",
        body: "To improve the natural language understanding (NLU) and latency of our voice and automation engines.",
      },
    ],
  },
  {
    heading: "Information Sharing and AI Sub-Processors",
    items: [
      {
        label: "AI Model Providers",
        body: "We share necessary data with third-party AI providers (including OpenAI, Vapi, and ElevenLabs) to facilitate autonomous services. These providers are not authorized to use your personal data for their own marketing purposes.",
      },
      {
        label: "Compliance",
        body: "We share information with law enforcement only as required by law to protect our legal interests.",
      },
    ],
  },
];

const standalone = [
  {
    heading: "SMS and Mobile Communications",
    body: "By providing a phone number, you consent to receive automated messages from our systems. You may opt-out at any time by replying 'STOP'.",
  },
  {
    heading: "Security and Liability",
    body: "We implement technical measures to protect your data. However, Switch Media Marketing LLC is not liable for unauthorized third-party interceptions or breaches beyond our reasonable technical control.",
  },
  {
    heading: "Your Rights",
    body: "You have the right to access, correct, or delete your data. Additionally, you may request human intervention for any significant decision made by our autonomous AI systems.",
  },
  {
    heading: "Contact Us",
    body: "For privacy inquiries, contact charles@switchmediaco.com.",
  },
];

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>
          Switch Media Marketing LLC | Last updated March 2025
        </p>
      </section>

      {/* Intro */}
      <section className="relative z-10 pb-12 px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.6)' }}>
            At Switch Media Marketing LLC, we are committed to protecting your privacy while delivering high-performance autonomous solutions. This policy outlines the specific types of personal information we collect, how we process that data through our AI infrastructure, and your rights as a user.
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

      {/* Standalone sections */}
      <section className="relative z-10 pb-32 px-6 lg:px-8 max-w-3xl mx-auto flex flex-col gap-8">
        {standalone.map((s) => (
          <div key={s.heading} className="p-8 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <h2 className="text-base font-black text-white mb-3">{s.heading}</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.55)' }}>
              {s.heading === "Contact Us" ? (
                <>For privacy inquiries, contact{" "}
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
