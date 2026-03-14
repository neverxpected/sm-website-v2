import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: [
          'GPTBot',
          'Google-Extended',
          'Claude-Web',
          'Anthropic-AI',
          'ChatGPT-User',
          'PerplexityBot',
          'Applebot-Extended',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://switchmediaco.com/sitemap.xml',
  }
}
