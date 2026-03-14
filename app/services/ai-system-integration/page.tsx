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
  const page = await getPage('/services/ai-system-integration')
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

export default async function AISystemIntegrationPage() {
  const page = await getPage('/services/ai-system-integration')
  const sections = await getPageSections(page.id)

  const hero = findSection(sections, 'hero')
  const processSec = findSection(sections, 'process')
  const capabilitiesSec = findSection(sections, 'capabilities')
  const ctaSec = findSection(sections, 'cta')

  const processSteps = (processSec?.content_data ?? []) as unknown as ProcessStep[]
  const capabilities = (capabilitiesSec?.content_data ?? []) as unknown as ServiceSection[]

  return (
    <main className="min-h-screen text-white" style={{ background: '#0A0F1C' }}>
      <JsonLd data={page.seo.structured_data} />
      <ServicePageTemplate
        accentColor="#00E5FF"
        badge={hero?.badge_text ?? 'AI System Integration'}
        heading={hero?.heading ?? 'Enterprise AI Integration\nSeamless and Scalable.'}
        description={hero?.subheading ?? ''}
        ctaText={hero?.cta_text ?? 'Book a Strategy Call'}
        ctaUrl={hero?.cta_url ?? '/strategy-call'}
        processSectionTitle={processSec?.heading ?? undefined}
        processSectionBadge={processSec?.badge_text ?? undefined}
        processSteps={processSteps.length > 0 ? processSteps : undefined}
        technicalSectionTitle={capabilitiesSec?.heading ?? undefined}
        technicalSectionBadge={capabilitiesSec?.badge_text ?? undefined}
        technicalFeatures={capabilities.length > 0 ? capabilities : undefined}
        ctaSectionBadge={ctaSec?.badge_text ?? undefined}
        ctaSectionHeading={ctaSec?.heading ?? undefined}
        ctaSectionDescription={ctaSec?.subheading ?? undefined}
      />
    </main>
  )
}
