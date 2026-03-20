import type { Metadata } from 'next'
import {
  getPage,
  getPageSections,
  getSiteConfig,
  getTeamMembers,
  getTestimonials,
  getCaseStudies,
  getFaqs,
  getServices,
  getClientLogos,
} from '@/lib/content'
import type { PageSection } from '@/types/database'
import type { HeroStat } from '@/components/Hero'
import type { AIAdvantageTab } from '@/components/AIAdvantage'
import type { HowItWorksStep } from '@/components/HowItWorks'
import { Hero } from '@/components/Hero'
import { TrustedBy } from '@/components/TrustedBy'
import { ServiceGrid } from '@/components/ServiceGrid'
import { HowItWorks } from '@/components/HowItWorks'
import { CaseStudies } from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import MeetTheTeam from '@/components/MeetTheTeam'
import ContactSection from '@/components/ContactSection'
import { FAQ } from '@/components/FAQ'
import AIAdvantage from '@/components/AIAdvantage'
import { JsonLd } from '@/components/JsonLd'
import LogoBanner from '@/components/LogoBanner'

function findSection(sections: PageSection[], key: string): PageSection | undefined {
  return sections.find((s) => s.section_key === key)
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('/')

  return {
    title: page.seo.meta_title ?? page.title,
    description: page.seo.meta_description ?? undefined,
    openGraph: {
      title: page.seo.og_title ?? page.seo.meta_title ?? page.title,
      description: page.seo.og_description ?? page.seo.meta_description ?? undefined,
      images: page.seo.og_image ? [{ url: page.seo.og_image }] : undefined,
    },
    alternates: {
      canonical: page.seo.canonical_url ?? undefined,
    },
    robots: page.seo.no_index ? { index: false, follow: false } : undefined,
  }
}

export default async function HomePage() {
  const [page, config, teamMembers, testimonials, caseStudies, services, clientLogos] =
    await Promise.all([
      getPage('/'),
      getSiteConfig(),
      getTeamMembers(),
      getTestimonials(),
      getCaseStudies(),
      getServices(),
      getClientLogos(),
    ])

  const [sections, faqs] = await Promise.all([
    getPageSections(page.id),
    getFaqs(page.id),
  ])

  const hero = findSection(sections, 'hero')
  const trustedBy = findSection(sections, 'trusted_by')
  const serviceGrid = findSection(sections, 'service_grid')
  const howItWorks = findSection(sections, 'how_it_works')
  const caseStudiesSec = findSection(sections, 'case_studies')
  const testimonialsSec = findSection(sections, 'testimonials')
  const meetTheTeam = findSection(sections, 'meet_the_team')
  const contact = findSection(sections, 'contact')
  const faqSec = findSection(sections, 'faq')
  const aiAdvantage = findSection(sections, 'ai_advantage')

  const heroData = hero?.content_data as {
    stats?: HeroStat[]
    trustBadges?: string[]
  } | null

  const howItWorksSteps = (howItWorks?.content_data ?? []) as unknown as HowItWorksStep[]
  const aiAdvantageTabs = (aiAdvantage?.content_data ?? []) as unknown as AIAdvantageTab[]

  return (
    <div className="grain">
    <main className="relative min-h-screen overflow-hidden">
      <JsonLd data={page.seo.structured_data} />

      {hero && (
        <Hero
          eyebrow={hero.badge_text ?? ''}
          headline={hero.heading ?? ''}
          stats={heroData?.stats ?? []}
          trustBadges={heroData?.trustBadges ?? []}
          ctaText={hero.cta_text ?? 'Book a Strategy Call'}
          ctaUrl={hero.cta_url ?? config.calendly_url ?? '#'}
        />
      )}

      {trustedBy && (
        <TrustedBy
          heading={trustedBy.heading ?? 'Trusted By'}
          logos={clientLogos.map((l) => ({ alt_text: l.alt_text, image_url: l.image_url }))}
        />
      )}

      {serviceGrid && (
        <ServiceGrid
          heading={serviceGrid.heading ?? 'What We Do Best'}
          subheading={serviceGrid.subheading ?? ''}
          services={services.map((s) => ({
            name: s.name,
            short_description: s.short_description ?? '',
            category: s.category ?? '',
            href: s.href ?? '#',
          }))}
        />
      )}

      {howItWorks && (
        <HowItWorks
          heading={howItWorks.heading ?? 'How it Works'}
          subheading={howItWorks.subheading ?? ''}
          badge={howItWorks.badge_text ?? undefined}
          steps={howItWorksSteps}
        />
      )}

      {caseStudiesSec && (
        <CaseStudies
          heading={caseStudiesSec.heading ?? ''}
          subheading={caseStudiesSec.subheading ?? ''}
          badge={caseStudiesSec.badge_text ?? ''}
          cases={caseStudies}
        />
      )}

      {testimonialsSec && (
        <Testimonials
          heading={testimonialsSec.heading ?? ''}
          subheading={testimonialsSec.subheading ?? ''}
          badge={testimonialsSec.badge_text ?? ''}
          testimonials={testimonials}
        />
      )}

      {meetTheTeam && (
        <MeetTheTeam
          heading={meetTheTeam.heading ?? ''}
          subheading={meetTheTeam.subheading ?? ''}
          badge={meetTheTeam.badge_text ?? ''}
          teamMembers={teamMembers}
        />
      )}

      {contact && (
        <ContactSection
          heading={contact.heading ?? ''}
          subheading={contact.subheading ?? ''}
          badge={contact.badge_text ?? ''}
          contactEmail={config.contact_email ?? ''}
          strategyCallUrl={config.calendly_url ?? '#'}
          services={services}
        />
      )}

      {faqSec && (
        <FAQ
          heading={faqSec.heading ?? ''}
          subheading={faqSec.subheading ?? ''}
          badge={faqSec.badge_text ?? ''}
          faqs={faqs}
        />
      )}

      {aiAdvantage && (
        <AIAdvantage
          heading={aiAdvantage.heading ?? ''}
          subheading={aiAdvantage.subheading ?? ''}
          badge={aiAdvantage.badge_text ?? ''}
          tabs={aiAdvantageTabs}
        />
      )}

      <LogoBanner
        logos={clientLogos.map((l) => ({ alt_text: l.alt_text, image_url: l.image_url }))}
      />
    </main>
    </div>
  )
}
