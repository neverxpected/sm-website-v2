# sm-website-cms

## 1. Feature Identity

Touched: YES
Proof: Feature named and scoped from user request on 2026-03-13.

- **Feature name:** sm-website-cms
- **Owner repo:** sm-website-v2
- **Supabase project:** Switch Media Website (`knvgjsjzmzzwaiumfego`, org: Switch Media `twjcjrrncupkhvifpipk`)
- **Task statement:** Move all hardcoded website copy into the Switch Media Website Supabase database. Design a scalable schema that supports all current routes, SEO metadata, structured data (JSON-LD), and future content expansion.

---

## 2. Plain-Language Summary

Touched: YES
Proof: Written from user request and codebase audit.

**What changes:**
The website's text — every heading, paragraph, button label, testimonial, team bio, FAQ, case study, pricing tier, and legal page — currently lives hardcoded inside React component files. This work moves all of that text into a Supabase database so it can be updated without touching code. It also adds the SEO structured data (JSON-LD / schema.org) that is currently missing from every page.

**What it affects:**
- The Switch Media Website Supabase project (currently empty — zero tables)
- Every page and component in the sm-website-v2 codebase (17 routes, 18 components)
- SEO output for all pages (metadata + structured data)
- The sitemap (currently missing most routes)

**What it does NOT touch:**
- The Coverage Creatives Supabase project
- The visual design, layout, animations, or styling of the website
- The Calendly/scheduling integration on the strategy-call page
- The mailto-based contact form submission mechanism (that's a separate concern)

---

## Scope Declaration

### User Request (Verbatim)
"the switch media website is the supabase project we need to connect to this repo here, the owner wants to take the current website and put the word copy in the database form. so we need to create a new-feature type plan. so plan out each route at high level on the schemas and how to set up the database. make sure we are planning for scalability and seo, i know they are missing structured data as well."

### Shared Destinations
| Destination | Type | Description |
|---|---|---|
| Switch Media Website Supabase (`knvgjsjzmzzwaiumfego`) | database | New — will hold all CMS tables for page content, SEO metadata, and structured data |

### Producer Paths
**Switch Media Website Supabase**
- No existing producers — database is empty. Future producers will be:
  - Supabase Dashboard (manual content edits)
  - Potential future admin UI (out of scope for this plan)

### Consumer Paths
**Switch Media Website Supabase**
- No existing consumers — database is empty. Future consumers will be:
  - Every `page.tsx` route in `app/` — will fetch content at build/request time
  - Every component that currently hardcodes copy — will receive content via props from pages

### Cross-Repo Boundaries
None found. This work is contained entirely within `sm-website-v2` and the Switch Media Website Supabase project.

### User-Requested Scope
- Database schema design for all website copy across all routes
- SEO metadata storage (title, description, openGraph)
- Structured data / JSON-LD storage
- Scalability planning for future content

### Tool-Discovered Scope
- `app/sitemap.ts` — currently missing 11 of 15 active routes; will be generated dynamically from the `pages` table — **APPROVED by user 2026-03-13**
- `app/layout.tsx` — root metadata says "Houston AI Agency" instead of "Switch Media Marketing"; brand inconsistency will be resolved when metadata moves to DB — **APPROVED by user 2026-03-13**
- `public/llms.txt` — exists but is incomplete; missing most services (Google Ads, Meta Ads, TikTok Ads, AI Receptionist, AI Lead Nurturing), missing key pages (About, Contact, Our Work, Strategy Call), missing "What We Do Not Do" section; will be rewritten to full llms.txt v1.1.1 spec — **APPROVED by user 2026-03-13**
- `app/robots.ts` — exists but basic; will be updated to include `llms.txt` reference alongside sitemap — **APPROVED by user 2026-03-13**

### Out-of-Scope Items
- `app/pricing/page.tsx` — redirect to `/`, no content to store
- `app/results/page.tsx` — redirect to `/`, no content to store
- Contact form submission mechanism (mailto) — separate concern
- Calendly embed on strategy-call page — external widget, not copy
- Visual animations (LightRays, ParticleBackground) — no text content

### UNVERIFIED Items
None.

### Scope Confirmation Gate
Implementation planning is blocked until both of the following are true:
1. The user has explicitly confirmed that User-Requested Scope is correct
2. The user has explicitly approved or rejected every item in Tool-Discovered Scope

---

## 3. Objective

Touched: YES
Proof: Derived from user request and codebase audit.

Design and implement a Supabase database schema for the Switch Media Website project that:
1. Stores all page-level and component-level copy for every route
2. Stores SEO metadata (title, description, OG tags) per page
3. Stores structured data (JSON-LD) per page for search engine rich results
4. Is scalable for future pages, sections, and content types
5. Connects the sm-website-v2 Next.js app to Supabase for content fetching

---

## 4. Current-State Summary

Touched: YES
Proof: Full codebase audit completed — all 17 routes and 18 components read.

### Routes Inventory (15 active, 2 redirects)

| Route | Lines | Content Type | Has Metadata | Has JSON-LD |
|---|---|---|---|---|
| `/` (home) | 17 + Hero components | Marketing landing | YES | NO |
| `/about` | 289 | Founder story + timeline | NO | NO |
| `/contact` | 319 | Contact form + info | NO | NO |
| `/our-work` | 374 | Case studies | NO | NO |
| `/strategy-call` | 111 | Calendly booking | NO | NO |
| `/services/digital-advertising` | 248 | Bing/Microsoft ads service | YES | NO |
| `/services/google-ads` | 248 | Google ads service | YES | NO |
| `/services/meta-ads` | 257 | Meta ads service | YES | NO |
| `/services/tiktok-ads` | 249 | TikTok ads service | YES | NO |
| `/services/ai-receptionist` | 268 | AI voice agent service | YES | NO |
| `/services/ai-system-integration` | 348 | AI integration service | NO | NO |
| `/services/ai-lead-nurturing` | 229 | AI nurturing service | YES | NO |
| `/cookie-policy` | 138 | Legal | YES | NO |
| `/privacy-policy` | 161 | Legal | YES | NO |
| `/terms-of-service` | 185 | Legal | YES | NO |
| `/pricing` | 6 | REDIRECT to `/` | — | — |
| `/results` | 6 | REDIRECT to `/` | — | — |

### Component Content Inventory

| Component | Hardcoded Copy | Receives Props | Content Types |
|---|---|---|---|
| Hero | YES | NO | Headlines, stats, trust badges, CTA |
| TrustedBy | YES | NO | Heading, client logos |
| ServiceGrid | YES | NO | Headings, service cards, platform links |
| HowItWorks | YES | NO | Steps with bullets |
| CaseStudies | YES | NO | Client results with stats |
| Testimonials | YES | NO | Quotes, names, companies |
| MeetTheTeam | YES | NO | Team bios, roles |
| ContactSection | YES | NO | Form labels, contact info |
| FAQ | YES | NO | Q&A pairs (all PLACEHOLDER) |
| Pricing | YES | NO | Tiers (all PLACEHOLDER) |
| AIAdvantage | YES | NO | Tabs with descriptions |
| LogoBanner | YES | NO | Client logos |
| Navbar | YES | NO | Navigation labels, dropdown items |
| Footer | YES | NO | Column links, brand, copyright |
| ServicePicker | YES | NO | Service option labels |
| AnimatedTimeline | NO | YES | Milestones (from parent) |
| ParticleBackground | N/A | N/A | No text |
| LightRays | N/A | N/A | No text |

### Key Findings
1. **Zero structured data** — no JSON-LD on any page
2. **Inconsistent metadata** — root layout says "Houston AI Agency", some pages have metadata, some don't
3. **Sitemap incomplete** — only 4 of 15 active routes included
4. **All copy hardcoded** — only `AnimatedTimeline` receives text via props
5. **FAQ and Pricing are placeholders** — content not finalized
6. **Brand inconsistency** — package.json says "houston-ai-agency", layout says "Houston AI Agency", UI says "Switch Media Marketing"

---

## 5. Target Files and Reference Files

Touched: YES
Proof: No external target or reference files — this is a greenfield database design for a repo with no existing DB integration.

- **Target files:** None (greenfield schema design)
- **Reference files:** None (no existing CMS pattern in this repo or Coverage Creatives to follow)
- The existing component files are **current-state input** — they define what content must be stored, not how to store it

---

## 6. Database Schema Design

Touched: YES
Proof: Designed from complete content inventory across all 15 active routes and 18 components.

### Design Principles
1. **Page-centric:** Each page/route is a row in the `pages` table
2. **Section-based:** Each page is composed of ordered sections; sections hold the actual copy
3. **Typed content blocks:** Sections contain typed content items (heading, paragraph, stat, bullet, etc.) for flexible rendering
4. **Shared content:** Reusable content (team members, testimonials, case studies, FAQs, services) lives in dedicated tables and can be referenced by any page
5. **SEO-first:** Every page has metadata and optional JSON-LD structured data
6. **Scalable:** Adding a new page = inserting rows, not writing code

### Table Architecture

#### Core Tables

**`pages`** — One row per route
| Column | Type | Description |
|---|---|---|
| `id` | uuid, PK | |
| `slug` | text, UNIQUE, NOT NULL | URL path, e.g. `/about`, `/services/meta-ads` |
| `title` | text, NOT NULL | Display title |
| `status` | text, NOT NULL, DEFAULT 'draft' | `draft` / `published` |
| `created_at` | timestamptz | |
| `updated_at` | timestamptz | |

**`page_seo`** — SEO metadata per page (1:1 with pages)
| Column | Type | Description |
|---|---|---|
| `id` | uuid, PK | |
| `page_id` | uuid, FK → pages.id, UNIQUE | |
| `meta_title` | text | `<title>` tag |
| `meta_description` | text | Meta description |
| `og_title` | text | OpenGraph title |
| `og_description` | text | OpenGraph description |
| `og_image` | text | OpenGraph image URL |
| `canonical_url` | text | Canonical URL |
| `no_index` | boolean, DEFAULT false | Exclude from indexing |
| `structured_data` | jsonb | JSON-LD object(s) for the page |

**`page_sections`** — Ordered content sections within a page
| Column | Type | Description |
|---|---|---|
| `id` | uuid, PK | |
| `page_id` | uuid, FK → pages.id | |
| `section_key` | text, NOT NULL | Machine-readable identifier, e.g. `hero`, `how_it_works`, `cta` |
| `display_order` | integer, NOT NULL | Sort order within the page |
| `heading` | text | Section heading |
| `subheading` | text | Section subheading/description |
| `badge_text` | text | Small badge/eyebrow text above heading |
| `body` | text | Long-form body text (for legal pages, about sections) |
| `cta_text` | text | Call-to-action button text |
| `cta_url` | text | CTA destination URL |
| `content_data` | jsonb | Flexible structured content (bullets, stats, process steps) |
| `is_visible` | boolean, DEFAULT true | Toggle section visibility |

#### Shared Content Tables

**`team_members`** — Reusable across any page
| Column | Type | Description |
|---|---|---|
| `id` | uuid, PK | |
| `name` | text, NOT NULL | |
| `role` | text | Job title |
| `location` | text | |
| `bio` | text | |
| `photo_url` | text | |
| `display_order` | integer | |
| `is_active` | boolean, DEFAULT true | |

**`testimonials`** — Client quotes
| Column | Type | Description |
|---|---|---|
| `id` | uuid, PK | |
| `quote` | text, NOT NULL | |
| `author_name` | text, NOT NULL | |
| `author_title` | text | Company/role |
| `author_location` | text | |
| `author_photo_url` | text | |
| `stars` | integer | Rating (1-5) |
| `is_featured` | boolean, DEFAULT false | |
| `display_order` | integer | |

**`case_studies`** — Client results
| Column | Type | Description |
|---|---|---|
| `id` | uuid, PK | |
| `category` | text | e.g. "Med Spa", "Fitness" |
| `client_name` | text, NOT NULL | |
| `description` | text | |
| `photo_url` | text | |
| `cta_text` | text | |
| `cta_url` | text | |
| `stats` | jsonb | Array of `{ emoji, label, value }` |
| `display_order` | integer | |

**`faqs`** — FAQ items
| Column | Type | Description |
|---|---|---|
| `id` | uuid, PK | |
| `question` | text, NOT NULL | |
| `answer` | text, NOT NULL | |
| `page_id` | uuid, FK → pages.id, NULLABLE | NULL = global, set = page-specific |
| `display_order` | integer | |
| `is_active` | boolean, DEFAULT true | |

**`services`** — Service definitions
| Column | Type | Description |
|---|---|---|
| `id` | uuid, PK | |
| `name` | text, NOT NULL | e.g. "Meta Ads" |
| `short_description` | text | One-line description |
| `category` | text | `paid_ads` or `ai_automation` |
| `icon` | text | Icon identifier |
| `href` | text | Link to service page |
| `display_order` | integer | |
| `is_active` | boolean, DEFAULT true | |

**`client_logos`** — Trusted-by logos
| Column | Type | Description |
|---|---|---|
| `id` | uuid, PK | |
| `alt_text` | text, NOT NULL | |
| `image_url` | text, NOT NULL | |
| `display_order` | integer | |
| `is_active` | boolean, DEFAULT true | |

#### Site-Wide Configuration

**`site_config`** — Global settings (single row or key-value)
| Column | Type | Description |
|---|---|---|
| `id` | uuid, PK | |
| `site_name` | text | "Switch Media Marketing" |
| `tagline` | text | |
| `contact_email` | text | |
| `contact_phone` | text | |
| `address` | text | |
| `copyright_text` | text | |
| `social_links` | jsonb | `{ instagram, facebook, linkedin, ... }` |
| `default_og_image` | text | Fallback OG image |
| `gtm_id` | text | Google Tag Manager ID |
| `ga_id` | text | Google Analytics ID |
| `calendly_url` | text | Strategy call booking URL |

**`navigation`** — Nav menu items
| Column | Type | Description |
|---|---|---|
| `id` | uuid, PK | |
| `label` | text, NOT NULL | |
| `href` | text | |
| `description` | text | Dropdown description |
| `parent_id` | uuid, FK → navigation.id, NULLABLE | NULL = top-level |
| `group_key` | text | e.g. `paid_ads`, `ai_automations`, `main` |
| `display_order` | integer | |
| `is_active` | boolean, DEFAULT true | |

### Schema Diagram (Relationships)

```
pages (1) ──── (1) page_seo
pages (1) ──── (N) page_sections
pages (1) ──── (N) faqs          (nullable FK — NULL = global)
site_config (1 row — singleton)
navigation (self-referencing for parent/child)
team_members (standalone, referenced by section_key)
testimonials (standalone, referenced by section_key)
case_studies (standalone, referenced by section_key)
services (standalone, referenced by section_key)
client_logos (standalone, referenced by section_key)
```

### Structured Data (JSON-LD) Strategy

Each page gets a `structured_data` JSONB column in `page_seo`. The value is an **array** of JSON-LD objects so pages can carry multiple schema types. Every page also inherits a sitewide `BreadcrumbList`.

**Note:** `FAQPage` schema is restricted by Google to government and health websites as of 2026, so it will NOT trigger Google rich results for this marketing agency site. However, AI search engines (ChatGPT, Perplexity, Claude, etc.) still parse and use FAQPage schema when answering user questions about the business. For this reason, FAQPage JSON-LD is included on pages that have FAQ content — it provides value for AI search visibility even without Google rich results.

#### Sitewide JSON-LD (injected on every page via layout)

```json
[
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://switchmediaco.com/#organization",
    "name": "Switch Media Marketing",
    "url": "https://switchmediaco.com",
    "logo": "https://switchmediaco.com/images/logo/sm-logo.png",
    "description": "Switch Media Marketing delivers expert digital advertising and AI system integration services to grow your business.",
    "foundingDate": "2019",
    "founder": {
      "@type": "Person",
      "name": "Charles Snider"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-469-518-0508",
      "email": "Charles@switchmediaco.com",
      "contactType": "sales"
    },
    "sameAs": []
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://switchmediaco.com/#website",
    "name": "Switch Media Marketing",
    "url": "https://switchmediaco.com",
    "publisher": { "@id": "https://switchmediaco.com/#organization" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://switchmediaco.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
]
```

#### Per-Route JSON-LD Templates

**`/` (Home)**
```json
[
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://switchmediaco.com/#localbusiness",
    "name": "Switch Media Marketing",
    "image": "https://switchmediaco.com/images/logo/sm-logo.png",
    "url": "https://switchmediaco.com",
    "telephone": "+1-469-518-0508",
    "email": "Charles@switchmediaco.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "3"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long until I see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients see measurable results within the first 30 days of campaign launch."
        }
      },
      {
        "@type": "Question",
        "name": "Do you require long-term contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No long-term contracts. We earn your business month over month through results."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in service-based businesses including healthcare, home services, legal, real estate, and fitness."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Switch Media different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We combine elite paid advertising with autonomous AI infrastructure — meaning we don't just drive leads, we help you capture and close them automatically."
        }
      },
      {
        "@type": "Question",
        "name": "How does pricing work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer transparent, performance-aligned pricing. Book a strategy call and we'll walk you through the options that match your goals and budget."
        }
      },
      {
        "@type": "Question",
        "name": "Can I see examples of past results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Visit our Results page for documented case studies across multiple industries."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://switchmediaco.com/" }
    ]
  }
]
```

> **Note:** The FAQPage schema above will be dynamically populated from the `faqs` table. The Q&A pairs shown are the current placeholders — once the owner finalizes FAQ content in the database, the JSON-LD will reflect the real answers. Google won't show FAQ rich results for a marketing agency, but AI search engines (ChatGPT, Perplexity, Claude) will use this data when answering questions about Switch Media.

**`/about`**
```json
[
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Switch Media Marketing",
    "url": "https://switchmediaco.com/about",
    "description": "Founded in 2019 by Charles Snider. Switch Media Marketing has generated $20M+ in revenue for 50+ businesses across 12+ industries.",
    "mainEntity": {
      "@type": "Person",
      "name": "Charles Snider",
      "jobTitle": "Founder",
      "worksFor": { "@id": "https://switchmediaco.com/#organization" },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Baylor University"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Houston",
        "addressRegion": "TX"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://switchmediaco.com/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://switchmediaco.com/about" }
    ]
  }
]
```

**`/contact`**
```json
[
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Switch Media Marketing",
    "url": "https://switchmediaco.com/contact",
    "description": "Get in touch with Switch Media Marketing. Located in Houston, TX.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://switchmediaco.com/#localbusiness"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://switchmediaco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://switchmediaco.com/contact" }
    ]
  }
]
```

**`/our-work`**
```json
[
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Work — Client Results",
    "url": "https://switchmediaco.com/our-work",
    "description": "Documented case studies showing real results for service-based businesses.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "CreativeWork",
            "name": "The Oaks Plastic Surgery",
            "description": "4,300+ inquiries generated through paid advertising.",
            "author": { "@id": "https://switchmediaco.com/#organization" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "CreativeWork",
            "name": "Radiant Med Spa",
            "description": "$700k+ added revenue through digital marketing.",
            "author": { "@id": "https://switchmediaco.com/#organization" }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "CreativeWork",
            "name": "illumiNate Heights Fitness",
            "description": "2,800+ inquiries generated for fitness business.",
            "author": { "@id": "https://switchmediaco.com/#organization" }
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://switchmediaco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://switchmediaco.com/our-work" }
    ]
  }
]
```

**`/strategy-call`**
```json
[
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Book a Strategy Call",
    "url": "https://switchmediaco.com/strategy-call",
    "description": "Book a free strategy call with Switch Media Marketing. We'll review your current marketing and map out a precision growth plan.",
    "mainEntity": {
      "@type": "ScheduleAction",
      "name": "Book a Strategy Call",
      "target": "https://switchmediaco.com/strategy-call",
      "agent": { "@id": "https://switchmediaco.com/#organization" }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://switchmediaco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Strategy Call", "item": "https://switchmediaco.com/strategy-call" }
    ]
  }
]
```

**`/services/meta-ads`** (template for all 4 paid ads service pages — adjust name/description per service)
```json
[
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://switchmediaco.com/services/meta-ads#service",
    "name": "Meta Ads — Precision Facebook & Instagram Advertising",
    "description": "Switch Media builds high-performance Facebook and Instagram advertising engines that convert passive scrollers into predictable revenue.",
    "provider": { "@id": "https://switchmediaco.com/#organization" },
    "serviceType": "Digital Advertising",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Meta Ads Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Facebook Advertising",
            "description": "Lead generation and revenue campaigns on Facebook."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instagram Advertising",
            "description": "Visual-first campaigns for brand awareness and conversions."
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://switchmediaco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://switchmediaco.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Meta Ads", "item": "https://switchmediaco.com/services/meta-ads" }
    ]
  }
]
```

**`/services/google-ads`**
```json
[
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://switchmediaco.com/services/google-ads#service",
    "name": "Google Ads — High-Intent Search and Performance Advertising",
    "description": "Switch Media architects Google Ads ecosystems that capture buyers at the exact moment of intent. Search, LSA, Performance Max, and full conversion attribution.",
    "provider": { "@id": "https://switchmediaco.com/#organization" },
    "serviceType": "Digital Advertising",
    "areaServed": { "@type": "Country", "name": "United States" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Google Ads Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Search Ads", "description": "High-intent keyword campaigns on Google Search." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local Services Ads (LSA)", "description": "Google Guaranteed lead generation for local businesses." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Max", "description": "AI-driven cross-channel Google campaigns." } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://switchmediaco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://switchmediaco.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://switchmediaco.com/services/google-ads" }
    ]
  }
]
```

**`/services/tiktok-ads`**
```json
[
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://switchmediaco.com/services/tiktok-ads#service",
    "name": "TikTok Ads — Scalable Short-Form Video Advertising",
    "description": "Switch Media deploys high-impact TikTok campaigns engineered for rapid customer acquisition. Creative-first strategy with technical pixel infrastructure.",
    "provider": { "@id": "https://switchmediaco.com/#organization" },
    "serviceType": "Digital Advertising",
    "areaServed": { "@type": "Country", "name": "United States" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "TikTok Ads Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TikTok In-Feed Ads", "description": "Native short-form video ads in the TikTok feed." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TikTok Spark Ads", "description": "Boosted organic content for authentic reach." } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://switchmediaco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://switchmediaco.com/services" },
      { "@type": "ListItem", "position": 3, "name": "TikTok Ads", "item": "https://switchmediaco.com/services/tiktok-ads" }
    ]
  }
]
```

**`/services/digital-advertising` (Bing/Microsoft Ads)**
```json
[
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://switchmediaco.com/services/digital-advertising#service",
    "name": "Microsoft Advertising — High-Efficiency Bing Search and Audience Ads",
    "description": "Switch Media architects Microsoft Advertising systems that capture high-intent users across Bing Search and the Microsoft Audience Network.",
    "provider": { "@id": "https://switchmediaco.com/#organization" },
    "serviceType": "Digital Advertising",
    "areaServed": { "@type": "Country", "name": "United States" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Microsoft Ads Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bing Search Ads", "description": "Search campaigns on the Bing/Microsoft network." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microsoft Audience Ads", "description": "Display and audience targeting via LinkedIn data integration." } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://switchmediaco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://switchmediaco.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Microsoft Ads", "item": "https://switchmediaco.com/services/digital-advertising" }
    ]
  }
]
```

**`/services/ai-receptionist`**
```json
[
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://switchmediaco.com/services/ai-receptionist#service",
    "name": "AI Voice Receptionist — Autonomous AI Voice Infrastructure",
    "description": "Enterprise-grade AI voice agents that handle inbound and outbound communication with human-level precision. 24/7 autonomous support, CRM sync, and multi-language deployment.",
    "provider": { "@id": "https://switchmediaco.com/#organization" },
    "serviceType": "AI Automation",
    "areaServed": { "@type": "Country", "name": "United States" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Receptionist Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 AI Voice Agent", "description": "Always-on voice receptionist that answers, qualifies, and books." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Integration", "description": "Automatic sync of call data to your CRM." } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://switchmediaco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://switchmediaco.com/services" },
      { "@type": "ListItem", "position": 3, "name": "AI Receptionist", "item": "https://switchmediaco.com/services/ai-receptionist" }
    ]
  }
]
```

**`/services/ai-system-integration`**
```json
[
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://switchmediaco.com/services/ai-system-integration#service",
    "name": "AI System Integration — Autonomous AI Infrastructure",
    "description": "Custom AI integrations that connect with existing business infrastructure. Automate workflows, surface actionable insights, and gain measurable competitive advantage.",
    "provider": { "@id": "https://switchmediaco.com/#organization" },
    "serviceType": "AI Automation",
    "areaServed": { "@type": "Country", "name": "United States" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Integration Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Workflow Automation", "description": "AI-powered workflow orchestration across your business tools." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Auto-Updates", "description": "Automatic CRM updates on new leads and customer actions." } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://switchmediaco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://switchmediaco.com/services" },
      { "@type": "ListItem", "position": 3, "name": "AI System Integration", "item": "https://switchmediaco.com/services/ai-system-integration" }
    ]
  }
]
```

**`/services/ai-lead-nurturing`**
```json
[
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://switchmediaco.com/services/ai-lead-nurturing#service",
    "name": "AI Lead Nurturing — Convert More Leads, Automatically",
    "description": "Predictive AI that knows when and how to follow up — turning cold leads into booked clients through personalized, multi-channel outreach that runs 24/7.",
    "provider": { "@id": "https://switchmediaco.com/#organization" },
    "serviceType": "AI Automation",
    "areaServed": { "@type": "Country", "name": "United States" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Lead Nurturing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Predictive Follow-Up", "description": "AI determines optimal contact timing and channel for each lead." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Multi-Channel Outreach", "description": "Automated sequences across SMS, email, and voice." } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://switchmediaco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://switchmediaco.com/services" },
      { "@type": "ListItem", "position": 3, "name": "AI Lead Nurturing", "item": "https://switchmediaco.com/services/ai-lead-nurturing" }
    ]
  }
]
```

**`/cookie-policy`**
```json
[
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cookie Policy",
    "url": "https://switchmediaco.com/cookie-policy",
    "description": "Cookie policy for Switch Media Marketing LLC.",
    "publisher": { "@id": "https://switchmediaco.com/#organization" },
    "datePublished": "2019-02-09",
    "dateModified": "2026-03-01",
    "inLanguage": "en-US"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://switchmediaco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Cookie Policy", "item": "https://switchmediaco.com/cookie-policy" }
    ]
  }
]
```

**`/privacy-policy`**
```json
[
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "url": "https://switchmediaco.com/privacy-policy",
    "description": "Privacy policy for Switch Media Marketing LLC.",
    "publisher": { "@id": "https://switchmediaco.com/#organization" },
    "datePublished": "2019-02-09",
    "dateModified": "2026-03-01",
    "inLanguage": "en-US"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://switchmediaco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://switchmediaco.com/privacy-policy" }
    ]
  }
]
```

**`/terms-of-service`**
```json
[
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "url": "https://switchmediaco.com/terms-of-service",
    "description": "Terms of Service for Switch Media Marketing LLC.",
    "publisher": { "@id": "https://switchmediaco.com/#organization" },
    "datePublished": "2019-02-09",
    "dateModified": "2026-03-01",
    "inLanguage": "en-US"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://switchmediaco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://switchmediaco.com/terms-of-service" }
    ]
  }
]
```

#### JSON-LD Coverage Summary

| Route | Schema Types | Rich Result Potential |
|---|---|---|
| `/` | `LocalBusiness`, `FAQPage`, `BreadcrumbList` | Knowledge Panel, Maps, breadcrumbs, AI search FAQ |
| `/about` | `AboutPage`, `Person`, `BreadcrumbList` | Author card, breadcrumbs |
| `/contact` | `ContactPage`, `BreadcrumbList` | Contact info in search, breadcrumbs |
| `/our-work` | `CollectionPage`, `ItemList`, `CreativeWork`, `BreadcrumbList` | Portfolio items, breadcrumbs |
| `/strategy-call` | `WebPage`, `ScheduleAction`, `BreadcrumbList` | Booking action, breadcrumbs |
| `/services/meta-ads` | `Service`, `OfferCatalog`, `BreadcrumbList` | Service listing, breadcrumbs |
| `/services/google-ads` | `Service`, `OfferCatalog`, `BreadcrumbList` | Service listing, breadcrumbs |
| `/services/tiktok-ads` | `Service`, `OfferCatalog`, `BreadcrumbList` | Service listing, breadcrumbs |
| `/services/digital-advertising` | `Service`, `OfferCatalog`, `BreadcrumbList` | Service listing, breadcrumbs |
| `/services/ai-receptionist` | `Service`, `OfferCatalog`, `BreadcrumbList` | Service listing, breadcrumbs |
| `/services/ai-system-integration` | `Service`, `OfferCatalog`, `BreadcrumbList` | Service listing, breadcrumbs |
| `/services/ai-lead-nurturing` | `Service`, `OfferCatalog`, `BreadcrumbList` | Service listing, breadcrumbs |
| `/cookie-policy` | `WebPage`, `BreadcrumbList` | Breadcrumbs |
| `/privacy-policy` | `WebPage`, `BreadcrumbList` | Breadcrumbs |
| `/terms-of-service` | `WebPage`, `BreadcrumbList` | Breadcrumbs |
| **Sitewide (layout)** | `Organization`, `WebSite` | Knowledge Panel, sitelinks search box |

**Total: 15 route-specific JSON-LD configs + 1 sitewide config = 16 structured data blocks, 0 pages without JSON-LD.**

### llms.txt Plan

Current `public/llms.txt` is incomplete — it only mentions Digital Advertising and AI System Integration. The rewritten version will follow the llms.txt v1.1.1 spec with all required and recommended sections.

**Target `llms.txt` structure:**
```markdown
# Switch Media Marketing

> Switch Media Marketing is a Houston-based digital marketing and AI automation agency. We help service-based businesses scale through precision paid advertising (Meta, Google, TikTok, Bing) and autonomous AI systems (voice receptionist, system integration, lead nurturing). Founded in 2019, we have generated $20M+ in revenue for 50+ businesses across 12+ industries.

## Core Pages
- [Home](https://switchmediaco.com/): Main landing page with service overview, client results, and team
- [About](https://switchmediaco.com/about): Founder story, company timeline, and team
- [Our Work](https://switchmediaco.com/our-work): Case studies with documented client results
- [Contact](https://switchmediaco.com/contact): Contact form and business information
- [Book a Strategy Call](https://switchmediaco.com/strategy-call): Free consultation booking

## Paid Advertising Services
- [Meta Ads](https://switchmediaco.com/services/meta-ads): Facebook and Instagram advertising campaigns for lead generation and revenue
- [Google Ads](https://switchmediaco.com/services/google-ads): Search, LSA, and Performance Max campaigns capturing high-intent buyers
- [TikTok Ads](https://switchmediaco.com/services/tiktok-ads): Short-form video advertising for rapid customer acquisition
- [Microsoft/Bing Ads](https://switchmediaco.com/services/digital-advertising): Bing Search and Microsoft Audience Network campaigns

## AI Automation Services
- [AI Voice Receptionist](https://switchmediaco.com/services/ai-receptionist): 24/7 autonomous AI voice agents for inbound/outbound communication with CRM sync
- [AI System Integration](https://switchmediaco.com/services/ai-system-integration): Custom AI integrations connecting business tools with automated workflows
- [AI Lead Nurturing](https://switchmediaco.com/services/ai-lead-nurturing): Predictive multi-channel follow-up that converts leads into booked clients

## What We Do Not Do
- We do not offer organic social media management or content creation services
- We do not build websites or apps (we are a marketing and AI automation agency)
- We do not offer SEO-only packages without paid advertising

## Key Information
- Location: Houston, TX, United States
- Founded: 2019
- Clients served: 50+
- Revenue generated: $20M+
- Industries: Healthcare, med spa, plastic surgery, fitness, real estate, home services, legal, and more

## Contact
- Email: Charles@switchmediaco.com
- Phone: (469) 518-0508
- Website: https://switchmediaco.com

## Legal
- [Privacy Policy](https://switchmediaco.com/privacy-policy): How we collect, process, and protect personal data
- [Terms of Service](https://switchmediaco.com/terms-of-service): Terms governing use of our services
- [Cookie Policy](https://switchmediaco.com/cookie-policy): How we use cookies and tracking technologies
```

### robots.txt Plan

Current `app/robots.ts` is functional but will be updated to reference `llms.txt` for AI crawlers.

**Target `robots.ts` output:**
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: https://switchmediaco.com/sitemap.xml
```

### Route-to-Table Mapping

This maps which tables each route will query:

| Route | Tables Used |
|---|---|
| `/` (home) | `pages`, `page_seo`, `page_sections`, `client_logos`, `services`, `case_studies`, `testimonials`, `team_members` |
| `/about` | `pages`, `page_seo`, `page_sections` (timeline milestones in `content_data`) |
| `/contact` | `pages`, `page_seo`, `page_sections`, `services` (for ServicePicker), `site_config` |
| `/our-work` | `pages`, `page_seo`, `case_studies` |
| `/strategy-call` | `pages`, `page_seo`, `page_sections`, `site_config` (calendly_url) |
| `/services/*` (6 pages) | `pages`, `page_seo`, `page_sections`, `case_studies` (for meta-ads) |
| `/cookie-policy` | `pages`, `page_seo`, `page_sections` |
| `/privacy-policy` | `pages`, `page_seo`, `page_sections` |
| `/terms-of-service` | `pages`, `page_seo`, `page_sections` |
| Navbar (all pages) | `navigation`, `site_config` |
| Footer (all pages) | `navigation`, `site_config` |

---

## 7. Research Checklist

Touched: YES
Proof: All items researched via codebase audit and Supabase MCP.

- [x] Inventory all routes and their content types
- [x] Inventory all components and their hardcoded copy
- [x] Verify Switch Media Website Supabase project exists and is empty
- [x] Identify missing SEO metadata across all pages
- [x] Identify missing structured data across all pages
- [x] Identify sitemap gaps
- [x] Identify brand inconsistencies
- [x] Research JSON-LD schema.org best practices for marketing agency sites (2026)
- [x] Confirm FAQPage schema restriction (restricted to health/government — NOT usable)
- [x] Research llms.txt v1.1.1 specification and format requirements
- [x] Audit current `public/llms.txt` for completeness
- [x] Audit current `app/robots.ts` for AI crawler coverage

---

## 8. Evidence Log

Touched: YES
Proof: Evidence collected from tool outputs during research.

| ID | Evidence | Source |
|---|---|---|
| E1 | Switch Media Website project is `knvgjsjzmzzwaiumfego`, ACTIVE_HEALTHY, zero tables | Supabase MCP `list_projects` + `list_tables` |
| E2 | 15 active routes, 2 redirects (pricing, results) | Codebase read of all `page.tsx` files |
| E3 | 18 components, 16 with hardcoded copy, only AnimatedTimeline uses props | Component file read |
| E4 | Zero JSON-LD on any page | Codebase audit — no `application/ld+json` found |
| E5 | Sitemap includes only 4 of 15 active routes | `app/sitemap.ts` read |
| E6 | Root layout metadata says "Houston AI Agency" | `app/layout.tsx` line 8 |
| E7 | FAQ and Pricing components contain PLACEHOLDER text | Component read |
| E8 | No `@supabase` packages installed | `package.json` dependencies |
| E9 | FAQPage JSON-LD restricted to health/government sites as of 2026 — cannot use for marketing agency | Web research: schemavalidator.org, digitalapplied.com |
| E10 | llms.txt v1.1.1 spec requires: H1 name, blockquote summary, sections with linked pages, Contact section | Web research: ai-visibility.org.uk spec |
| E11 | Current `llms.txt` missing: Google Ads, Meta Ads, TikTok Ads, AI Receptionist, AI Lead Nurturing, About, Contact, Our Work, Strategy Call, legal pages, "What We Do Not Do" section | File read: `public/llms.txt` |
| E12 | Current `robots.ts` missing AI crawlers: Claude-Web, Anthropic-AI, ChatGPT-User, PerplexityBot, Applebot-Extended | File read: `app/robots.ts` |

---

## 9. Decisions and Blockers

Touched: YES
Proof: Decisions derived from schema design analysis.

| ID | Decision | Status |
|---|---|---|
| D1 | Use `page_sections` with `content_data` JSONB for flexible per-section content rather than one column per content type | DECIDED |
| D2 | Shared content (team, testimonials, case studies) in dedicated tables rather than embedded in sections JSONB | DECIDED |
| D3 | JSON-LD stored as JSONB in `page_seo.structured_data` rather than generated from code | DECIDED |
| D4 | Navigation stored in DB for Navbar/Footer consistency | DECIDED |
| D5 | `site_config` as singleton row for global settings | DECIDED |
| D6 | No admin UI in this plan — content managed via Supabase Dashboard initially | DECIDED |

| D7 | FAQPage JSON-LD included despite Google restriction — won't trigger Google rich results but AI search engines still parse it for answering questions about the business | DECIDED |
| D8 | llms.txt will be rewritten to v1.1.1 spec with all services, pages, and contact info | DECIDED |
| D9 | robots.ts will be updated to include all major AI crawlers (GPTBot, Claude-Web, Anthropic-AI, ChatGPT-User, PerplexityBot, Applebot-Extended) | DECIDED |
| D10 | Migration strategy: Option C — Parallel Build. New v2 files built alongside old files. Old files stay untouched as reference. Atomic swap at the end. | DECIDED |
| D11 | All interactive components get server/client split: `ComponentName.tsx` (server) + `ComponentName.client.tsx` (client with `"use client"`) | DECIDED |
| D12 | Pages are always server components — no `"use client"` in any `page.tsx` file | DECIDED |

| ID | Blocker | Status |
|---|---|---|
| B1 | ~~User must confirm scope (sitemap fix, brand fix)~~ | RESOLVED — approved 2026-03-13 |

---

## 10. Constraints and Guardrails

Touched: YES
Proof: Derived from project context.

1. No existing Supabase integration — `@supabase/supabase-js` must be added as a dependency
2. All content currently hardcoded — migration requires seeding all current copy into the database
3. No admin UI planned — content edits via Supabase Dashboard
4. RLS policy needed — public read-only access for published content, no authenticated write from the frontend
5. Structured data must be valid schema.org JSON-LD
6. Sitemap should be dynamically generated from `pages` table
7. **Verify-then-bulk rule:** Always verify a single action before running any bulk command. For SQL: run one CREATE TABLE, confirm it exists, then run the rest. For seeds: insert one row, confirm it reads correctly, then insert the batch. For components: build one server/client split, confirm it compiles and renders, then apply the template to the rest. For pages: build one page, confirm it fetches and renders from DB, then build the rest. No bulk operation runs without a verified single-item proof first.

### Migration Strategy: Parallel Build with Server/Client Split (Option C)

**Decision:** Build new versions of every page and component alongside the originals. The old files stay untouched as reference until the new versions are verified. A final swap phase replaces old with new.

**Why this approach:**
- The live site never breaks — old files remain untouched until the final swap
- Old files serve as immediate reference during development
- Forces a clean server/client component split from the start (avoids "use client" boundary issues later)
- The swap is a single atomic operation — rename/delete old, rename new

**Server/Client Split Pattern:**
Every component that needs interactivity (animations, forms, dropdowns, state) gets split into two files:
- `ComponentName.tsx` — server component that fetches data and renders the client component
- `ComponentName.client.tsx` — client component with `"use client"` that receives data as props and handles interactivity

Pages (`page.tsx`) are always server components. They fetch data and pass it to child components.

**File Naming Convention for Parallel Build:**
- New page files: `app-v2/[route]/page.tsx` (separate directory tree)
- New component files: `components-v2/ComponentName.tsx` + `components-v2/ComponentName.client.tsx`
- Old files: untouched in `app/` and `components/`

**Swap Phase:**
Once all v2 files are verified:
1. Rename `app/` → `app-old/` and `components/` → `components-old/`
2. Rename `app-v2/` → `app/` and `components-v2/` → `components/`
3. Verify build passes
4. Delete `app-old/` and `components-old/`

---

## 11. Implementation Checklist

Touched: YES
Proof: Built from schema design, route-to-table mapping, and Option C parallel build strategy with server/client split.

### Phase 1: Database Setup (items 1–12)
- [ ] 1. Create migration: `pages` table
- [ ] 2. Create migration: `page_seo` table with FK to pages
- [ ] 3. Create migration: `page_sections` table with FK to pages
- [ ] 4. Create migration: `team_members` table
- [ ] 5. Create migration: `testimonials` table
- [ ] 6. Create migration: `case_studies` table
- [ ] 7. Create migration: `faqs` table with optional FK to pages
- [ ] 8. Create migration: `services` table
- [ ] 9. Create migration: `client_logos` table
- [ ] 10. Create migration: `site_config` table
- [ ] 11. Create migration: `navigation` table with self-referencing FK
- [ ] 12. Create RLS policies: public read for `status = 'published'` or `is_active = true`; no public write

### Phase 2: Seed Data (items 13–29)
- [ ] 13. Seed `site_config` with current brand info (Switch Media Marketing, contact info, GTM/GA IDs, Calendly URL)
- [ ] 14. Seed `pages` + `page_seo` for all 15 active routes with current metadata
- [ ] 15. Seed `page_seo.structured_data` with appropriate JSON-LD per route
- [ ] 16. Seed `page_sections` for home page (hero, trusted_by, service_grid, how_it_works, case_studies, testimonials, meet_the_team, contact)
- [ ] 17. Seed `page_sections` for about page (hero, timeline, stats, cta)
- [ ] 18. Seed `page_sections` for contact page (hero, form_config, sidebar)
- [ ] 19. Seed `page_sections` for our-work page (header, case_studies_grid, cta)
- [ ] 20. Seed `page_sections` for strategy-call page (header, booking)
- [ ] 21. Seed `page_sections` for all 6 service pages
- [ ] 22. Seed `page_sections` for all 3 legal pages
- [ ] 23. Seed `team_members` (Charles Snider, Chris Kim, Thomas Sanders)
- [ ] 24. Seed `testimonials` (3 current testimonials)
- [ ] 25. Seed `case_studies` (3 current case studies)
- [ ] 26. Seed `faqs` (6 current FAQ items — currently placeholders)
- [ ] 27. Seed `services` (7 services: Meta Ads, Google Ads, TikTok Ads, Bing Ads, AI Receptionist, AI Integrations, AI Lead Nurturing)
- [ ] 28. Seed `client_logos` (11 current logos)
- [ ] 29. Seed `navigation` (Navbar + Footer links)

### Phase 3: Parallel Build — Foundation + Components (items 30–48)

Build new v2 files alongside old ones. Old `app/` and `components/` stay untouched.

**Foundation (30–33)**
- [ ] 30. Install `@supabase/supabase-js` and `@supabase/ssr`
- [ ] 31. Create Supabase client utility (`lib/supabase.ts`) with anon key for public read
- [ ] 32. Create data-fetching helpers (`lib/content.ts`) — `getPage()`, `getPageSections()`, `getSiteConfig()`, etc.
- [ ] 33. Create TypeScript types for all tables (`types/database.ts`)

**Component v2 Files — Server/Client Split (34–42)**

For each component that has interactivity, create two files:
- `components-v2/ComponentName.tsx` — server component (fetches or receives data)
- `components-v2/ComponentName.client.tsx` — client component (`"use client"`, receives props, handles UI/animations)

For components that are purely presentational with no interactivity, a single server component is sufficient.

- [ ] 34. Create `components-v2/Hero.tsx` (server) + `components-v2/Hero.client.tsx` (client — animations, stats counter)
- [ ] 35. Create `components-v2/TrustedBy.tsx` (server) + `components-v2/TrustedBy.client.tsx` (client — scroll animation)
- [ ] 36. Create `components-v2/ServiceGrid.tsx` (server) + `components-v2/ServiceGrid.client.tsx` (client — hover effects)
- [ ] 37. Create `components-v2/HowItWorks.tsx` (server) + `components-v2/HowItWorks.client.tsx` (client — animations)
- [ ] 38. Create `components-v2/CaseStudies.tsx` (server) + `components-v2/CaseStudies.client.tsx` (client — carousel/animations)
- [ ] 39. Create `components-v2/Testimonials.tsx` (server) + `components-v2/Testimonials.client.tsx` (client — carousel)
- [ ] 40. Create `components-v2/MeetTheTeam.tsx` (server) + `components-v2/MeetTheTeam.client.tsx` (client — animations)
- [ ] 41. Create `components-v2/ContactSection.tsx` (server) + `components-v2/ContactSection.client.tsx` (client — form state, mailto)
- [ ] 42. Create `components-v2/FAQ.tsx` (server) + `components-v2/FAQ.client.tsx` (client — accordion toggle)
- [ ] 43. Create `components-v2/Pricing.tsx` (server) + `components-v2/Pricing.client.tsx` (client — hover effects)
- [ ] 44. Create `components-v2/AIAdvantage.tsx` (server) + `components-v2/AIAdvantage.client.tsx` (client — tab switching, animations)
- [ ] 45. Create `components-v2/LogoBanner.tsx` (server) + `components-v2/LogoBanner.client.tsx` (client — scroll animation)
- [ ] 46. Create `components-v2/Navbar.tsx` (server) + `components-v2/Navbar.client.tsx` (client — dropdowns, mobile menu)
- [ ] 47. Create `components-v2/Footer.tsx` (server — no interactivity needed)
- [ ] 48. Create `components-v2/ServicePicker.tsx` (server) + `components-v2/ServicePicker.client.tsx` (client — selection state)
- [ ] 49. Create `components-v2/JsonLd.tsx` (server — reusable structured data renderer)
- [ ] 50. Copy visual-only components unchanged: `components-v2/LightRays.tsx`, `components-v2/ParticleBackground.tsx`, `components-v2/AnimatedTimeline.tsx` (these are already client-only, no split needed)

### Phase 4: Parallel Build — Pages + SEO + AI Visibility (items 51–65)

Build new page files in `app-v2/` that use `components-v2/` and fetch from DB. Old `app/` stays untouched.

**Page v2 Files (51–60)**
- [ ] 51. Create `app-v2/layout.tsx` — fetch site_config + navigation, pass to Navbar/Footer, fix brand metadata, inject sitewide JSON-LD
- [ ] 52. Create `app-v2/page.tsx` — home page fetching all content from DB
- [ ] 53. Create `app-v2/about/page.tsx` — about page fetching from DB
- [ ] 54. Create `app-v2/contact/page.tsx` + `app-v2/contact/layout.tsx` — contact page fetching from DB
- [ ] 55. Create `app-v2/our-work/page.tsx` — our-work page fetching from DB
- [ ] 56. Create `app-v2/strategy-call/page.tsx` — strategy-call page fetching from DB
- [ ] 57. Create `app-v2/services/[all 6 service dirs]/page.tsx` — service pages fetching from DB
- [ ] 58. Create `app-v2/[cookie-policy|privacy-policy|terms-of-service]/page.tsx` — legal pages fetching from DB
- [ ] 59. Create `app-v2/pricing/page.tsx` + `app-v2/results/page.tsx` — redirects (unchanged logic)
- [ ] 60. Copy static files: `app-v2/globals.css`, `app-v2/sitemap.ts`, `app-v2/robots.ts`

**SEO + Structured Data (61–63)**
- [ ] 61. Each page v2 uses `generateMetadata` from `page_seo` — title, description, OG tags
- [ ] 62. Each page v2 renders per-page JSON-LD via `<JsonLd>` component from `page_seo.structured_data`
- [ ] 63. Layout v2 renders sitewide JSON-LD (`Organization` + `WebSite`) from `site_config`

**Sitemap + AI Visibility (64–66)**
- [ ] 64. Create `app-v2/sitemap.ts` — dynamically generates from `pages` table (all published pages)
- [ ] 65. Rewrite `public/llms.txt` to full v1.1.1 spec with all services, pages, contact, and "What We Do Not Do" section
- [ ] 66. Create `app-v2/robots.ts` — includes all major AI crawlers (GPTBot, Google-Extended, Claude-Web, Anthropic-AI, ChatGPT-User, PerplexityBot, Applebot-Extended)

### Phase 5: Swap + Verification (items 67–80)

Swap v2 files into production position and verify everything.

**Swap (67–70)**
- [ ] 67. Rename `app/` → `app-old/` and `components/` → `components-old/`
- [ ] 68. Rename `app-v2/` → `app/` and `components-v2/` → `components/`
- [ ] 69. Update any import paths if needed (should be clean if v2 files use relative imports)
- [ ] 70. Run `npm run build` — confirm zero errors after swap

**Verification (71–80)**
- [ ] 71. Verify all 15 pages render correctly with DB content (visual match to old site)
- [ ] 72. Verify SEO metadata appears in page source for all routes
- [ ] 73. Verify JSON-LD structured data validates via Google Rich Results Test for every route
- [ ] 74. Verify sitewide JSON-LD (Organization + WebSite) present on every page
- [ ] 75. Verify BreadcrumbList present on every page
- [ ] 76. Verify FAQPage JSON-LD present on home page, dynamically populated from `faqs` table
- [ ] 77. Verify sitemap includes all 15 published routes
- [ ] 78. Verify RLS prevents public write access
- [ ] 79. Verify `llms.txt` accessible at `/llms.txt` and contains all services and pages
- [ ] 80. Verify `robots.txt` lists all AI crawlers and links to sitemap
- [ ] 81. Build succeeds with no TypeScript errors
- [ ] 82. Delete `app-old/` and `components-old/` after all verification passes

---

## 12. Acceptance Criteria

Touched: YES
Proof: Derived from user requirements and implementation checklist.

1. All 15 active routes render their content from Supabase, not hardcoded values
2. Every page has complete SEO metadata (title, description, OG tags) stored in DB
3. Every page has valid JSON-LD structured data (per the templates in section 6)
4. Sitewide JSON-LD (`Organization` + `WebSite`) renders on every page via layout
5. `BreadcrumbList` JSON-LD renders on every page
6. `FAQPage` JSON-LD present on pages with FAQ content (for AI search visibility)
7. Sitemap dynamically includes all 15 published pages
8. Brand name is consistently "Switch Media Marketing" across all metadata
9. RLS allows public read-only, blocks public write
10. Content can be updated via Supabase Dashboard without code changes
11. `llms.txt` follows v1.1.1 spec with all services, pages, contact, and exclusions
12. `robots.txt` includes all major AI crawlers
13. Build passes with zero TypeScript errors
14. No visual regression — pages look identical after the switch
15. All interactive components have clean server/client split (`.tsx` server + `.client.tsx` client)
16. No `"use client"` directive in any page file — pages are always server components
17. Old `app/` and `components/` directories are deleted only after all verification passes

---

## 13. Verification Steps

Touched: YES
Proof: Defined from acceptance criteria.

1. Load each route in browser — verify content matches current hardcoded version (visual regression check)
2. View page source — verify `<title>`, `<meta>`, OG tags are present on every page
3. View page source — verify sitewide JSON-LD (`Organization` + `WebSite`) on every page
4. View page source — verify per-page JSON-LD matches the template for that route type
5. View page source — verify `BreadcrumbList` JSON-LD on every page
6. Verify `FAQPage` JSON-LD present on home page and dynamically populated from `faqs` table
7. Validate JSON-LD via Google Rich Results Test for representative pages (home, a service page, about, contact, a legal page)
8. Load `/sitemap.xml` — verify all 15 active routes listed with correct URLs
9. Load `/llms.txt` — verify all services, pages, contact info, and "What We Do Not Do" section present
10. Load `/robots.txt` — verify AI crawler entries and sitemap reference
11. Attempt Supabase insert from browser console with anon key — verify RLS blocks it
12. Change a heading in Supabase Dashboard — verify it appears on next page load
13. Verify all page files are server components (no `"use client"` in any `page.tsx`)
14. Verify all interactive components have clean `.tsx` / `.client.tsx` split
15. Run `npm run build` — verify zero errors
16. Confirm `app-old/` and `components-old/` can be safely deleted

---

## 14. Approval Gate

Touched: YES
Proof: Gate conditions defined.

**Scope confirmed by user on 2026-03-13.**
- User-Requested Scope: CONFIRMED
- Tool-Discovered Scope: ALL APPROVED (sitemap fix, brand fix, llms.txt rewrite, robots.ts update)

**Execution is READY** pending user approval of the implementation checklist (82 items across 5 phases).

### Phase Documents

Phase files inherit from this SSOT and contain execution detail only. They do not replace this plan.

| Phase | File | Items | Summary |
|---|---|---|---|
| Phase 1 | [`plan-phases/phase-01-database-setup.md`](plan-phases/phase-01-database-setup.md) | 1–12 | Create all 11 tables + RLS policies + indexes |
| Phase 2 | [`plan-phases/phase-02-seed-data.md`](plan-phases/phase-02-seed-data.md) | 13–29 | Seed all tables with current hardcoded content + JSON-LD |
| Phase 3 | [`plan-phases/phase-03-parallel-build-components.md`](plan-phases/phase-03-parallel-build-components.md) | 30–50 | Foundation (Supabase client, types, helpers) + build all v2 components with server/client split |
| Phase 4 | [`plan-phases/phase-04-parallel-build-pages.md`](plan-phases/phase-04-parallel-build-pages.md) | 51–66 | Build all v2 pages, layout, SEO, JSON-LD, sitemap, llms.txt, robots.ts |
| Phase 5 | [`plan-phases/phase-05-swap-and-verify.md`](plan-phases/phase-05-swap-and-verify.md) | 67–82 | Swap v2 into production position, verify everything, delete old files |

---

## 15. Execution Log

Touched: NO
Proof: Execution has not begun — awaiting approval.

---

## 16. Verification Record

Touched: NO
Proof: Execution has not begun — awaiting approval.

---

## 17. Final Report

Touched: NO
Proof: Execution has not begun — awaiting approval.

---

*Updated: 2026-03-14 — jarvis*
