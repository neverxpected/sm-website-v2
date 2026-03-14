# Phase 02 — Seed Data

**Authority:** This phase inherits from [`sm-website-cms-plan.md`](../sm-website-cms-plan.md) (SSOT). Scope, decisions, evidence, and constraints are defined there. This file contains only the execution detail for Phase 2.

**Supabase Project:** Switch Media Website (`knvgjsjzmzzwaiumfego`)

**Prerequisite:** Phase 1 (Database Setup) must be complete — all tables and RLS policies must exist.

---

## Phase Summary

Seed all 11 tables with the current hardcoded content from the codebase. After this phase, every piece of text currently in the React components and page files will have a corresponding database row.

**What this phase does:**
- Seeds `site_config` with global brand/contact settings
- Seeds `pages` + `page_seo` for all 15 active routes (including JSON-LD structured data)
- Seeds `page_sections` for every route's content blocks
- Seeds all shared content tables (team, testimonials, case studies, FAQs, services, logos)
- Seeds `navigation` for Navbar and Footer

**What this phase does NOT do:**
- No Next.js code changes (Phase 3)
- No verification against live site (Phase 4)

---

## Checklist

### Global Configuration

- [ ] **13. Seed `site_config`**
  Single row with:
  | Field | Value |
  |---|---|
  | `site_name` | Switch Media Marketing |
  | `tagline` | AI-Powered Advertising |
  | `contact_email` | Charles@switchmediaco.com |
  | `contact_phone` | (469) 518-0508 |
  | `address` | Houston, TX |
  | `copyright_text` | © 2019–{year} \| Switch Media Marketing \| All rights reserved |
  | `social_links` | `{}` (empty — populate when social URLs are provided) |
  | `default_og_image` | /images/logo/sm-logo.png |
  | `gtm_id` | value from `NEXT_PUBLIC_GTM_ID` env var |
  | `ga_id` | value from `NEXT_PUBLIC_GA_ID` env var |
  | `calendly_url` | current Calendly embed URL from strategy-call page |

### Pages + SEO

- [ ] **14. Seed `pages` + `page_seo` for all 15 active routes**

  Each route gets one row in `pages` (status = `published`) and one row in `page_seo` with current metadata.

  | Slug | Title | meta_title | meta_description |
  |---|---|---|---|
  | `/` | Home | Switch Media Marketing — AI-Powered Advertising | Switch Media Marketing delivers expert digital advertising and AI system integration services to grow your business. |
  | `/about` | About | About Switch Media Marketing | Founded in 2019 by Charles Snider. $20M+ revenue generated for 50+ businesses. |
  | `/contact` | Contact | Contact Switch Media Marketing | Get in touch with Switch Media Marketing. Located in Houston, TX. |
  | `/our-work` | Our Work | Our Work — Client Results | Documented case studies showing real results for service-based businesses. |
  | `/strategy-call` | Strategy Call | Book a Strategy Call | Book a free strategy call with Switch Media Marketing. |
  | `/services/digital-advertising` | Microsoft Ads | Microsoft Advertising — High-Efficiency Bing Search and Audience Ads | (current meta_description from page) |
  | `/services/google-ads` | Google Ads | Google Ads — High-Intent Search and Performance Advertising | (current meta_description from page) |
  | `/services/meta-ads` | Meta Ads | Meta Ads — Precision Facebook & Instagram Advertising | (current meta_description from page) |
  | `/services/tiktok-ads` | TikTok Ads | TikTok Ads — Scalable Short-Form Video Advertising | (current meta_description from page) |
  | `/services/ai-receptionist` | AI Receptionist | AI Voice Receptionist — Autonomous AI Voice Infrastructure | (current meta_description from page) |
  | `/services/ai-system-integration` | AI System Integration | AI System Integration — Autonomous AI Infrastructure | (to be created — currently missing) |
  | `/services/ai-lead-nurturing` | AI Lead Nurturing | AI Lead Nurturing — Convert More Leads, Automatically | (current meta_description from page) |
  | `/cookie-policy` | Cookie Policy | Cookie Policy \| Switch Media Marketing LLC | (current meta_description from page) |
  | `/privacy-policy` | Privacy Policy | Privacy Policy \| Switch Media Marketing LLC | (current meta_description from page) |
  | `/terms-of-service` | Terms of Service | Terms of Service \| Switch Media Marketing LLC | (current meta_description from page) |

- [ ] **15. Seed `page_seo.structured_data` with JSON-LD per route**
  Use the exact JSON-LD templates from the SSOT plan (section 6, "Per-Route JSON-LD Templates"). Each route's `structured_data` column gets the corresponding JSON array.

### Page Sections

- [ ] **16. Seed `page_sections` for home page**
  Sections (in display_order):
  1. `hero` — eyebrow, headlines, stats, trust badges, CTA
  2. `trusted_by` — heading ("Trusted By")
  3. `service_grid` — heading, subheading, two service cards with platform links
  4. `how_it_works` — heading, subheading, 3 process steps with bullets
  5. `case_studies` — heading, subheading (references `case_studies` table)
  6. `testimonials` — heading, subheading (references `testimonials` table)
  7. `meet_the_team` — heading, subheading (references `team_members` table)
  8. `contact` — heading, subheading, form config, contact info
  9. `faq` — heading, subheading (references `faqs` table)
  10. `ai_advantage` — heading, subheading, 3 tabs with descriptions

- [ ] **17. Seed `page_sections` for about page**
  Sections:
  1. `hero` — badge ("About the Founder"), headline, subtext, founding info
  2. `timeline` — content_data with milestones array (Pre-2018, 2018, 2019, 2019–Now, Today)
  3. `stats` — content_data with stats array ($20M+, 50+, 12+)
  4. `cta` — heading, CTA text, CTA url

- [ ] **18. Seed `page_sections` for contact page**
  Sections:
  1. `hero` — badge ("Contact Us"), headline, subtext
  2. `form_config` — content_data with form fields, budget options, placeholders
  3. `sidebar` — content_data with location, email, strategy audit link

- [ ] **19. Seed `page_sections` for our-work page**
  Sections:
  1. `header` — badge ("Case Studies"), headline, subtext
  2. `case_studies_grid` — references `case_studies` table with extended stats
  3. `cta` — heading, subheading, CTA text, CTA url

- [ ] **20. Seed `page_sections` for strategy-call page**
  Sections:
  1. `header` — badge ("Free Consultation"), headline, subtext
  2. `booking` — content_data with Calendly config (URL from site_config)

- [ ] **21. Seed `page_sections` for all 6 service pages**

  Each service page follows a similar structure. Sections per page:
  1. `hero` — badge, headline, subtext
  2. `service_coverage` or `case_studies_inline` — content_data with bullet items or case study references
  3. `technical_execution` or `capabilities` — content_data with bullet items
  4. `process` — content_data with 3-step process
  5. `cta` — heading, CTA text, CTA url

  Pages: `/services/digital-advertising`, `/services/google-ads`, `/services/meta-ads`, `/services/tiktok-ads`, `/services/ai-receptionist`, `/services/ai-system-integration`, `/services/ai-lead-nurturing`

- [ ] **22. Seed `page_sections` for all 3 legal pages**

  Each legal page uses a single `body` section with the full legal text. Sections:
  1. `header` — badge ("Legal"), heading (policy name), subtext (company + dates)
  2. `body` — full legal text in the `body` column

  Pages: `/cookie-policy`, `/privacy-policy`, `/terms-of-service`

### Shared Content Tables

- [ ] **23. Seed `team_members`**
  | name | role | location | bio | photo_url | display_order |
  |---|---|---|---|---|---|
  | Charles Snider | Founder | Houston, Texas | Father of 3... Baylor University... motorcycle... | /images/team/charles.jpg | 1 |
  | Chris Kim | CIO | Houston, Texas | Cyber security expert... Bitcoin at $300... | /images/team/chris.jpg | 2 |
  | Thomas Sanders | CSO | Houston, Texas | Nicest person... TCU Graduate... League of Legends... | /images/team/thomas.jpg | 3 |

- [ ] **24. Seed `testimonials`**
  | author_name | author_title | author_location | stars | quote (truncated) |
  |---|---|---|---|---|
  | Nate Bran | illumiNate Heights Fitness | Houston, TX | 5 | "We started using Switch Media Marketing prior to our gym opening up..." |
  | Rebecca Appelgren | Radiant With Rebecca Med Spa | Olathe, KS | 5 | "In 1 year my business has doubled the revenue..." |
  | Tracey T | Makaan Investment Group | Houston, TX | 5 | "Chuck has been great to work with..." |

- [ ] **25. Seed `case_studies`**
  | client_name | category | stats (jsonb) | description (truncated) |
  |---|---|---|---|
  | The Oaks Plastic Surgery | Plastic Surgery | `[{"label":"Inquiries","value":"4,300+"},...]` | "We started working with Dr. Wijay & Dr. Andry..." |
  | Radiant Med Spa | Med Spa | `[{"label":"Worked Together","value":"5+ Years"},{"label":"Added Revenue","value":"$1M+"}]` | "We've worked with Rebecca at Radiant Med Spa..." |
  | illumiNate Heights Fitness | Fitness | `[{"label":"Inquiries","value":"2,800+"},...]` | "Owners Nate and Jourdan have been absolutely awesome..." |

- [ ] **26. Seed `faqs`**
  6 FAQ items (currently placeholders — page_id = NULL for global):
  | question | answer | display_order |
  |---|---|---|
  | How long until I see results? | Most clients see measurable results within the first 30 days... | 1 |
  | Do you require long-term contracts? | No long-term contracts... | 2 |
  | What industries do you work with? | We specialize in service-based businesses... | 3 |
  | What makes Switch Media different? | We combine elite paid advertising with autonomous AI infrastructure... | 4 |
  | How does pricing work? | We offer transparent, performance-aligned pricing... | 5 |
  | Can I see examples of past results? | Absolutely. Visit our Results page... | 6 |

- [ ] **27. Seed `services`**
  | name | category | short_description | href | display_order |
  |---|---|---|---|---|
  | Meta Ads | paid_ads | Scalable Facebook & Instagram campaigns | /services/meta-ads | 1 |
  | Google Ads | paid_ads | High-intent search campaigns | /services/google-ads | 2 |
  | TikTok Ads | paid_ads | Short-form video advertising | /services/tiktok-ads | 3 |
  | Bing Ads | paid_ads | Microsoft Search & Audience Network | /services/digital-advertising | 4 |
  | AI Receptionist | ai_automation | 24/7 AI voice agent | /services/ai-receptionist | 5 |
  | AI Integrations | ai_automation | Custom workflow automation | /services/ai-system-integration | 6 |
  | AI Lead Nurturing | ai_automation | Predictive multi-channel follow-up | /services/ai-lead-nurturing | 7 |

- [ ] **28. Seed `client_logos`**
  11 logos from TrustedBy component:
  | alt_text | image_url | display_order |
  |---|---|---|
  | Elite Dermatology & The Oaks Plastic Surgery | (current src) | 1 |
  | illumiNate Heights Fitness | (current src) | 2 |
  | Radiant With Rebecca Med Spa | (current src) | 3 |
  | Makaan Investment Group | (current src) | 4 |
  | The Royal Med Spa | (current src) | 5 |
  | Lind Institute of Plastic Surgery | (current src) | 6 |
  | Dance Alliance of Kingwood | (current src) | 7 |
  | Spindletap Brewery & Coffee | (current src) | 8 |
  | LeSavoy Plastic Surgery | (current src) | 9 |
  | Outcomes Therapy | (current src) | 10 |
  | Rosa Mexicano | (current src) | 11 |

### Navigation

- [ ] **29. Seed `navigation`**

  **Navbar groups:**

  `group_key: main` (top-level):
  | label | href | parent_id | display_order |
  |---|---|---|---|
  | Paid Ads | NULL | NULL | 1 |
  | AI Automations | NULL | NULL | 2 |
  | About | /about | NULL | 3 |
  | Contact | /contact | NULL | 4 |
  | Book a Strategy Call | /strategy-call | NULL | 5 |

  `group_key: paid_ads` (children of "Paid Ads"):
  | label | href | description | parent_id | display_order |
  |---|---|---|---|---|
  | Meta Ads | /services/meta-ads | Scalable Facebook & Instagram campaigns focused on leads and revenue. | (Paid Ads id) | 1 |
  | Google Ads | /services/google-ads | High-intent Search, LSA, and Performance Max campaigns. | (Paid Ads id) | 2 |
  | TikTok Ads | /services/tiktok-ads | Creative-first short-form video advertising. | (Paid Ads id) | 3 |
  | Bing Ads | /services/digital-advertising | Microsoft Search & Audience Network campaigns. | (Paid Ads id) | 4 |

  `group_key: ai_automations` (children of "AI Automations"):
  | label | href | description | parent_id | display_order |
  |---|---|---|---|---|
  | AI Receptionist | /services/ai-receptionist | 24/7 autonomous AI voice infrastructure. | (AI Automations id) | 1 |
  | AI Integrations | /services/ai-system-integration | Custom AI workflow automation. | (AI Automations id) | 2 |
  | AI Lead Nurturing | /services/ai-lead-nurturing | Predictive multi-channel lead follow-up. | (AI Automations id) | 3 |

  **Footer groups:**

  `group_key: footer_paid_ads`, `footer_ai`, `footer_company`, `footer_legal` — mirror the footer column structure from the Footer component.

---

## Exit Criteria

Phase 2 is complete when:
1. `site_config` has exactly 1 row with all fields populated
2. `pages` has 15 rows (one per active route), all with `status = 'published'`
3. `page_seo` has 15 rows, each with `meta_title`, `meta_description`, and `structured_data` populated
4. `page_sections` has rows for every section of every page (estimated 60–80 rows)
5. `team_members` has 3 rows
6. `testimonials` has 3 rows
7. `case_studies` has 3 rows
8. `faqs` has 6 rows
9. `services` has 7 rows
10. `client_logos` has 11 rows
11. `navigation` has ~20 rows covering Navbar and Footer
12. All JSON-LD in `page_seo.structured_data` matches the templates from the SSOT plan
13. Content in the database matches the current hardcoded content exactly (no text drift)

---

*Inherits from: sm-website-cms-plan.md (SSOT)*
*Updated: 2026-03-13 — jarvis*
