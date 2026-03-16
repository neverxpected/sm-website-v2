import type { Metadata } from 'next'
import { getPage, getPageSections } from '@/lib/content'
import { JsonLd } from '@/components/JsonLd'
import { LegalPageTemplate } from '@/app/LegalPageTemplate'

interface LegalTerm {
  number: string
  heading: string
  body: string
  items: { label: string; text: string }[]
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('/terms-of-service')
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

export default async function TermsOfServicePage() {
  const page = await getPage('/terms-of-service')
  const sections = await getPageSections(page.id)

  const header = sections.find((s) => s.section_key === 'header')
  const body = sections.find((s) => s.section_key === 'body')

  const contentData = body?.content_data as {
    terms?: LegalTerm[]
  } | null

  return (
    <>
      <JsonLd data={page.seo.structured_data} />
      <LegalPageTemplate
        badge={header?.badge_text ?? 'Legal'}
        heading={header?.heading ?? 'Terms of Service'}
        lastUpdated={page.updated_at ?? page.created_at ?? ''}
        terms={contentData?.terms}
      />
    </>
  )
}
