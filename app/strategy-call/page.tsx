import type { Metadata } from 'next';
import { getPage, getPageSections, getSiteConfig } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { StrategyCallPageClient } from './page.client';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('/strategy-call');
  return {
    title: page.seo.meta_title,
    description: page.seo.meta_description,
    openGraph: {
      title: page.seo.og_title ?? page.seo.meta_title ?? undefined,
      description: page.seo.og_description ?? page.seo.meta_description ?? undefined,
      images: page.seo.og_image ? [page.seo.og_image] : [],
    },
  };
}

export default async function StrategyCallPage() {
  const [page, siteConfig] = await Promise.all([
    getPage('/strategy-call'),
    getSiteConfig(),
  ]);
  const sections = await getPageSections(page.id);

  const headerSection = sections.find(s => s.section_key === 'header');
  const bookingSection = sections.find(s => s.section_key === 'booking');

  const bookingData = bookingSection?.content_data as { calendly_url?: string } | null;
  const calendlyUrl = bookingData?.calendly_url ?? siteConfig.calendly_url ?? '';

  return (
    <main className="relative min-h-screen text-white overflow-hidden" style={{ background: '#0A0F1C' }}>
      <JsonLd data={page.seo.structured_data} />
      <StrategyCallPageClient
        badge={headerSection?.badge_text ?? 'Free Consultation'}
        heading={headerSection?.heading ?? 'Book Your Strategy Call'}
        subheading={headerSection?.subheading ?? ''}
        calendlyUrl={calendlyUrl}
      />
    </main>
  );
}
