import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Switch Media Marketing LLC",
  description:
    "Terms of Service for Switch Media Marketing LLC. Governs the use of our digital marketing and autonomous AI infrastructure services.",
};

const terms = [
  {
    number: "1",
    heading: "Services Provided",
    body: "Switch Media Marketing LLC provides digital marketing and autonomous infrastructure services, including Meta Ads, Google Ads, TikTok Ads, Microsoft Advertising, and AI System Integration. Services are subject to change at our discretion.",
    items: [],
  },
  {
    number: "2",
    heading: "AI Infrastructure and Third-Party API Costs",
    body: "",
    items: [
      {
        label: "API Responsibility",
        text: "Clients are responsible for all direct costs associated with third-party API providers required for service delivery, including but not limited to OpenAI, Vapi, Make.com, and ElevenLabs.",
      },
      {
        label: "Account Ownership",
        text: "Clients must maintain active accounts with these providers to ensure the continuity of their autonomous systems.",
      },
    ],
  },
  {
    number: "3",
    heading: "Autonomous System Performance Disclaimer",
    body: "",
    items: [
      {
        label: "System Variances",
        text: "While we engineer for high precision, the Client acknowledges that autonomous AI systems may experience variances in output or hallucinations inherent in large language model technology.",
      },
      {
        label: "Non-Liability",
        text: "Switch Media Marketing LLC is not liable for specific autonomous responses or actions taken by AI agents once deployed into the Client's live environment.",
      },
    ],
  },
  {
    number: "4",
    heading: "Intellectual Property",
    body: "",
    items: [
      {
        label: "Agency IP",
        text: "Any custom code, workflow architecture, or proprietary logic developed by Switch Media Marketing LLC remains our intellectual property until full payment is received.",
      },
      {
        label: "Client IP",
        text: "Clients retain ownership of all pre-existing trademarks and proprietary data provided to us.",
      },
    ],
  },
  {
    number: "5",
    heading: "Payment and Billing",
    body: "",
    items: [
      {
        label: "Non-Refundable",
        text: "All payments are non-refundable unless stated otherwise in writing.",
      },
      {
        label: "Suspension",
        text: "Late payments may result in the immediate suspension of managed ad accounts and autonomous agents.",
      },
    ],
  },
  {
    number: "6",
    heading: "Limitation of Liability",
    body: "Switch Media Marketing LLC is not liable for indirect or consequential damages. Our total liability is limited to the amount paid for services in the preceding three months.",
    items: [],
  },
  {
    number: "7",
    heading: "Governing Law",
    body: "These terms are governed by the laws of the State of Texas.",
    items: [],
  },
  {
    number: "8",
    heading: "Contact Information",
    body: "",
    items: [],
    contact: true,
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen text-white" style={{ background: '#0A0F1C' }}>

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(155,48,255,0.07) 0%, transparent 65%)' }} />
      </div>

      {/* Header */}
      <section className="relative z-10 pt-40 pb-16 px-6 lg:px-8 max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-[0.25em] mb-6" style={{ color: 'rgba(155,48,255,0.8)' }}>
          Legal
        </p>
        <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6">
          Terms of Service
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>
          Switch Media Marketing LLC | Effective Date: 2/9/2019 | Updated: 3/1/2026
        </p>
      </section>

      {/* Intro */}
      <section className="relative z-10 pb-12 px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.6)' }}>
            Welcome to Switch Media Marketing LLC. By accessing our services, you agree to these Terms of Service.
          </p>
        </div>
      </section>

      {/* Terms sections */}
      <section className="relative z-10 pb-32 px-6 lg:px-8 max-w-3xl mx-auto flex flex-col gap-6">
        {terms.map((t) => (
          <div key={t.number} className="p-8 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>

            {/* Section heading */}
            <div className="flex items-start gap-4 mb-4">
              <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                style={{ background: 'rgba(155,48,255,0.15)', border: '1px solid rgba(155,48,255,0.3)', color: '#9B30FF' }}>
                {t.number}
              </span>
              <h2 className="text-base font-black text-white pt-0.5">{t.heading}</h2>
            </div>

            {/* Body paragraph */}
            {t.body && (
              <p className="text-sm leading-relaxed pl-11" style={{ color: 'rgba(240,244,255,0.55)' }}>
                {t.body}
              </p>
            )}

            {/* Bullet items */}
            {t.items.length > 0 && (
              <ul className="pl-11 flex flex-col gap-4">
                {t.items.map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#9B30FF' }} />
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.55)' }}>
                      <span className="font-bold text-white">{item.label}:</span>{" "}{item.text}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            {/* Contact section */}
            {t.contact && (
              <p className="text-sm pl-11" style={{ color: 'rgba(240,244,255,0.55)' }}>
                <a href="mailto:charles@switchmediaco.com"
                  className="underline"
                  style={{ color: '#9B30FF' }}>
                  charles@switchmediaco.com
                </a>
              </p>
            )}
          </div>
        ))}
      </section>

    </main>
  );
}
