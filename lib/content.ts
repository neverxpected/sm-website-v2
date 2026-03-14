import { supabase } from './supabase'
import type {
  Page, PageSeo, PageSection, TeamMember, Testimonial,
  CaseStudy, FAQ, Service, ClientLogo, SiteConfig, Navigation,
} from '@/types/database'

export type PageWithSeo = Page & { seo: PageSeo }

export async function getPage(slug: string): Promise<PageWithSeo> {
  const { data: page, error: pageError } = await supabase
    .from('pages')
    .select('*')
    .eq('slug', slug)
    .single<Page>()

  if (pageError || !page) throw new Error(`Page not found: ${slug}`)

  const { data: seo, error: seoError } = await supabase
    .from('page_seo')
    .select('*')
    .eq('page_id', page.id)
    .single<PageSeo>()

  if (seoError || !seo) throw new Error(`SEO not found for page: ${slug}`)

  return { ...page, seo }
}

export async function getPageSections(pageId: string): Promise<PageSection[]> {
  const { data, error } = await supabase
    .from('page_sections')
    .select('*')
    .eq('page_id', pageId)
    .eq('is_visible', true)
    .order('display_order', { ascending: true })

  if (error) throw new Error(`Failed to fetch sections: ${error.message}`)
  return data ?? []
}

export async function getSiteConfig(): Promise<SiteConfig> {
  const { data, error } = await supabase
    .from('site_config')
    .select('*')
    .single()

  if (error || !data) throw new Error('Site config not found')
  return data
}

export async function getNavigation(groupKey?: string): Promise<Navigation[]> {
  let query = supabase
    .from('navigation')
    .select('*')
    .order('display_order', { ascending: true })

  if (groupKey) {
    query = query.eq('group_key', groupKey)
  }

  const { data, error } = await query
  if (error) throw new Error(`Failed to fetch navigation: ${error.message}`)
  return data ?? []
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) throw new Error(`Failed to fetch team members: ${error.message}`)
  return data ?? []
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) throw new Error(`Failed to fetch testimonials: ${error.message}`)
  return data ?? []
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) throw new Error(`Failed to fetch case studies: ${error.message}`)
  return data ?? []
}

export async function getFaqs(pageId?: string): Promise<FAQ[]> {
  let query = supabase
    .from('faqs')
    .select('*')
    .order('display_order', { ascending: true })

  if (pageId) {
    query = query.or(`page_id.eq.${pageId},page_id.is.null`)
  } else {
    query = query.is('page_id', null)
  }

  const { data, error } = await query
  if (error) throw new Error(`Failed to fetch FAQs: ${error.message}`)
  return data ?? []
}

export async function getServices(): Promise<Service[]> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) throw new Error(`Failed to fetch services: ${error.message}`)
  return data ?? []
}

export async function getClientLogos(): Promise<ClientLogo[]> {
  const { data, error } = await supabase
    .from('client_logos')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) throw new Error(`Failed to fetch client logos: ${error.message}`)
  return data ?? []
}

export async function getAllPublishedPages(): Promise<Page[]> {
  const { data, error } = await supabase
    .from('pages')
    .select('*')
    .eq('status', 'published')
    .order('slug', { ascending: true })

  if (error) throw new Error(`Failed to fetch pages: ${error.message}`)
  return data ?? []
}
