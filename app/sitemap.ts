import type { MetadataRoute } from 'next'
import { getAllPublishedPages } from '@/lib/content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getAllPublishedPages()
  const baseUrl = 'https://switchmediaco.com'

  return pages.map((page) => ({
    url: `${baseUrl}${page.slug === '/' ? '' : page.slug}`,
    lastModified: page.updated_at ?? page.created_at ?? new Date().toISOString(),
    changeFrequency: page.slug === '/'
      ? ('weekly' as const)
      : ('monthly' as const),
    priority: page.slug === '/'
      ? 1.0
      : page.slug?.startsWith('/services')
        ? 0.8
        : 0.6,
  }))
}
