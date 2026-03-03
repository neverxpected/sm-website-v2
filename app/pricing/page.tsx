import type { Metadata } from 'next';
import Pricing from '@/components/Pricing';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
    title: 'Pricing | Switch Media Marketing',
    description: 'Transparent, performance-aligned pricing for paid advertising and AI automation services. No hidden fees. No long-term contracts. Just results.',
};

export default function PricingPage() {
    return (
        <main style={{ background: '#0A0F1C', minHeight: '100vh' }}>
            {/* Hero header */}
            <section
                className="relative pt-32 pb-4 px-6 lg:px-8 overflow-hidden"
                style={{ background: '#0A0F1C' }}
            >
                {/* Ambient orbs */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(155,48,255,0.1) 0%, transparent 70%)' }} />
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(255,45,120,0.08) 0%, transparent 70%)' }} />
            </section>

            <Pricing />
            <ContactSection />
        </main>
    );
}
