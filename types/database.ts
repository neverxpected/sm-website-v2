export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      case_studies: {
        Row: {
          category: string | null
          client_name: string
          cta_text: string | null
          cta_url: string | null
          description: string | null
          display_order: number | null
          id: string
          photo_url: string | null
          stats: Json | null
        }
      }
      client_logos: {
        Row: {
          alt_text: string
          display_order: number | null
          id: string
          image_url: string
          is_active: boolean | null
        }
      }
      faqs: {
        Row: {
          answer: string
          display_order: number | null
          id: string
          is_active: boolean | null
          page_id: string | null
          question: string
        }
      }
      navigation: {
        Row: {
          description: string | null
          display_order: number | null
          group_key: string | null
          href: string | null
          id: string
          is_active: boolean | null
          label: string
          parent_id: string | null
        }
      }
      page_sections: {
        Row: {
          badge_text: string | null
          body: string | null
          content_data: Json | null
          cta_text: string | null
          cta_url: string | null
          display_order: number
          heading: string | null
          id: string
          is_visible: boolean | null
          page_id: string
          section_key: string
          subheading: string | null
        }
      }
      page_seo: {
        Row: {
          canonical_url: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          no_index: boolean | null
          og_description: string | null
          og_image: string | null
          og_title: string | null
          page_id: string
          structured_data: Json | null
        }
      }
      pages: {
        Row: {
          created_at: string | null
          id: string
          slug: string
          status: string
          title: string
          updated_at: string | null
        }
      }
      services: {
        Row: {
          category: string | null
          display_order: number | null
          href: string | null
          icon: string | null
          id: string
          is_active: boolean | null
          name: string
          short_description: string | null
        }
      }
      site_config: {
        Row: {
          address: string | null
          calendly_url: string | null
          contact_email: string | null
          contact_phone: string | null
          copyright_text: string | null
          default_og_image: string | null
          ga_id: string | null
          gtm_id: string | null
          id: string
          site_name: string | null
          social_links: Json | null
          tagline: string | null
        }
      }
      team_members: {
        Row: {
          bio: string | null
          display_order: number | null
          id: string
          is_active: boolean | null
          location: string | null
          name: string
          photo_url: string | null
          role: string | null
        }
      }
      testimonials: {
        Row: {
          author_location: string | null
          author_name: string
          author_photo_url: string | null
          author_title: string | null
          display_order: number | null
          id: string
          is_featured: boolean | null
          quote: string
          stars: number | null
        }
      }
    }
  }
}

export type Page = Database['public']['Tables']['pages']['Row']
export type PageSeo = Database['public']['Tables']['page_seo']['Row']
export type PageSection = Database['public']['Tables']['page_sections']['Row']
export type TeamMember = Database['public']['Tables']['team_members']['Row']
export type Testimonial = Database['public']['Tables']['testimonials']['Row']
export type CaseStudy = Database['public']['Tables']['case_studies']['Row']
export type FAQ = Database['public']['Tables']['faqs']['Row']
export type Service = Database['public']['Tables']['services']['Row']
export type ClientLogo = Database['public']['Tables']['client_logos']['Row']
export type SiteConfig = Database['public']['Tables']['site_config']['Row']
export type Navigation = Database['public']['Tables']['navigation']['Row']
