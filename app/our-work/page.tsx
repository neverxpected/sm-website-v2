import type { Metadata } from 'next';
import { getPage, getPageSections, getCaseStudies } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { OurWorkPageClient } from './page.client';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('/our-work');
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

export default async function OurWorkPage() {
  const [page, caseStudies] = await Promise.all([
    getPage('/our-work'),
    getCaseStudies(),
  ]);
  const sections = await getPageSections(page.id);

  const headerSection = sections.find(s => s.section_key === 'header');
  const ctaSection = sections.find(s => s.section_key === 'cta');

  return (
    <main className="relative min-h-screen text-white overflow-hidden" style={{ background: '#0A0F1C' }}>
      <JsonLd data={page.seo.structured_data} />
      <OurWorkPageClient
        badge={headerSection?.badge_text ?? 'Case Studies'}
        heading={headerSection?.heading ?? 'Our Work'}
        subheading={headerSection?.subheading ?? ''}
        caseStudies={caseStudies}
        ctaHeading={ctaSection?.heading ?? "Ready to become our next success story?"}
        ctaText={ctaSection?.cta_text ?? 'Book a Strategy Call'}
        ctaUrl={ctaSection?.cta_url ?? '/strategy-call'}
      />
    </main>
  );
}
