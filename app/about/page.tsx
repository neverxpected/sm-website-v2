import { Metadata } from 'next';
import { getPage, getPageSections } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { AboutPageClient } from './page.client';
import type { Json } from '@/types/database';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('/about');
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

export default async function AboutPage() {
  const page = await getPage('/about');
  const sections = await getPageSections(page.id);

  const heroSection = sections.find(s => s.section_key === 'hero');
  const photoSection = sections.find(s => s.section_key === 'photo');
  const timelineSection = sections.find(s => s.section_key === 'timeline');
  const statsSection = sections.find(s => s.section_key === 'stats');
  const ctaSection = sections.find(s => s.section_key === 'cta');

  const photoData = photoSection?.content_data as { image_url: string; alt: string } | null;
  const milestones = (timelineSection?.content_data ?? []) as { year: string; label: string; body: string }[];
  const stats = (statsSection?.content_data ?? []) as { value: number; prefix?: string; suffix: string; label: string }[];

  return (
    <main className="relative min-h-screen text-white overflow-hidden" style={{ background: '#0A0F1C' }}>
      <JsonLd data={page.seo.structured_data} />
      <AboutPageClient
        badge={heroSection?.badge_text ?? 'About the Founder'}
        heading={heroSection?.heading ?? ''}
        subheading={heroSection?.subheading ?? ''}
        photoUrl={photoData?.image_url ?? '/images/switch-media-founder.webp'}
        photoAlt={photoData?.alt ?? 'Switch Media Marketing founder with family'}
        milestones={milestones}
        stats={stats}
        ctaSubheading={ctaSection?.subheading ?? ''}
        ctaText={ctaSection?.cta_text ?? "Let's Connect"}
        ctaUrl={ctaSection?.cta_url ?? '/strategy-call'}
      />
    </main>
  );
}
