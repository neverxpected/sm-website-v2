import type { Metadata } from 'next'
import { getPage, getPageSections } from '@/lib/content'
import { JsonLd } from '@/components/JsonLd'
import type { PageSection } from '@/types/database'
import ServicePageTemplate from '@/app/services/ServicePageTemplate'
import type { ServiceSection, ProcessStep } from '@/app/services/ServicePageTemplate'

function findSection(sections: PageSection[], key: string) {
  return sections.find((s) => s.section_key === key)
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('/services/ai-lead-nurturing')
  return {
    title: page.seo.meta_title ?? page.title,
    description: page.seo.meta_description ?? undefined,
    openGraph: {
      title: page.seo.og_title ?? page.seo.meta_title ?? page.title,
      description: page.seo.og_description ?? page.seo.meta_description ?? undefined,
      images: page.seo.og_image ? [{ url: page.seo.og_image }] : undefined,
    },
    alternates: { canonical: page.seo.canonical_url ?? undefined },
    robots: page.seo.no_index ? { index: false, follow: false } : undefined,
  }
}

export default async function AILeadNurturingPage() {
  const page = await getPage('/services/ai-lead-nurturing')
  const sections = await getPageSections(page.id)

  const hero = findSection(sections, 'hero')
  const sequenceSec = findSection(sections, 'sequence')
  const featuresSec = findSection(sections, 'features')
  const processSec = findSection(sections, 'process')
  const ctaSec = findSection(sections, 'cta')

  const sequences = (sequenceSec?.content_data ?? []) as unknown as ServiceSection[]
  const features = (featuresSec?.content_data ?? []) as unknown as ServiceSection[]
  const processSteps = (processSec?.content_data ?? []) as unknown as ProcessStep[]

  return (
    <main className="min-h-screen text-white" style={{ background: '#0A0F1C' }}>
      <JsonLd data={page.seo.structured_data} />
      <ServicePageTemplate
        accentColor="#FF2D78"
        badge={hero?.badge_text ?? 'AI Lead Nurturing'}
        heading={hero?.heading ?? 'AI-Driven Lead Nurturing\nThat Closes Deals.'}
        description={hero?.subheading ?? ''}
        ctaText={hero?.cta_text ?? 'Book a Strategy Call'}
        ctaUrl={hero?.cta_url ?? '/strategy-call'}
        servicesSectionTitle={sequenceSec?.heading ?? undefined}
        servicesSectionBadge={sequenceSec?.badge_text ?? undefined}
        services={sequences.length > 0 ? sequences : undefined}
        technicalSectionTitle={featuresSec?.heading ?? undefined}
        technicalSectionBadge={featuresSec?.badge_text ?? undefined}
        technicalFeatures={features.length > 0 ? features : undefined}
        processSectionTitle={processSec?.heading ?? undefined}
        processSectionBadge={processSec?.badge_text ?? undefined}
        processSteps={processSteps.length > 0 ? processSteps : undefined}
        ctaSectionBadge={ctaSec?.badge_text ?? undefined}
        ctaSectionHeading={ctaSec?.heading ?? undefined}
        ctaSectionDescription={ctaSec?.subheading ?? undefined}
      />
    </main>
  )
}
