import type { Metadata } from 'next';
import { getPage, getPageSections, getServices, getSiteConfig } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { ContactPageClient } from './page.client';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('/contact');
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

export default async function ContactPage() {
  const [page, services, siteConfig] = await Promise.all([
    getPage('/contact'),
    getServices(),
    getSiteConfig(),
  ]);
  const sections = await getPageSections(page.id);

  const heroSection = sections.find(s => s.section_key === 'hero');

  return (
    <main className="relative min-h-screen text-white overflow-hidden" style={{ background: '#0A0F1C' }}>
      <JsonLd data={page.seo.structured_data} />
      <ContactPageClient
        badge={heroSection?.badge_text ?? 'Get In Touch'}
        heading={heroSection?.heading ?? "Let's Build Something"}
        subheading={heroSection?.subheading ?? ''}
        contactEmail={siteConfig.contact_email ?? ''}
        strategyCallUrl={siteConfig.calendly_url ?? '/strategy-call'}
        services={services}
      />
    </main>
  );
}
