# Phase 01 — Database Setup

**Authority:** This phase inherits from [`sm-website-cms-plan.md`](../sm-website-cms-plan.md) (SSOT). Scope, decisions, evidence, and constraints are defined there. This file contains only the execution detail for Phase 1.

**Supabase Project:** Switch Media Website (`knvgjsjzmzzwaiumfego`)

---

## Phase Summary

Create all 11 database tables and RLS policies in the Switch Media Website Supabase project. This phase produces the empty schema — no data is inserted yet (that is Phase 2).

**What this phase does:**
- Creates the core tables (`pages`, `page_seo`, `page_sections`)
- Creates the shared content tables (`team_members`, `testimonials`, `case_studies`, `faqs`, `services`, `client_logos`)
- Creates the site-wide tables (`site_config`, `navigation`)
- Applies RLS policies for public read-only access

**What this phase does NOT do:**
- No data is seeded (Phase 2)
- No Next.js code is changed (Phase 3)
- No verification against live site (Phase 4)

---

## Checklist

### Core Tables

- [ ] **1. Create `pages` table**
  ```sql
  CREATE TABLE pages (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    slug text UNIQUE NOT NULL,
    title text NOT NULL,
    status text NOT NULL DEFAULT 'draft',
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
  );
  ```

- [ ] **2. Create `page_seo` table**
  ```sql
  CREATE TABLE page_seo (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    page_id uuid UNIQUE NOT NULL REFERENCES pages(id) ON DELETE CASCADE,
    meta_title text,
    meta_description text,
    og_title text,
    og_description text,
    og_image text,
    canonical_url text,
    no_index boolean DEFAULT false,
    structured_data jsonb
  );
  ```

- [ ] **3. Create `page_sections` table**
  ```sql
  CREATE TABLE page_sections (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    page_id uuid NOT NULL REFERENCES pages(id) ON DELETE CASCADE,
    section_key text NOT NULL,
    display_order integer NOT NULL,
    heading text,
    subheading text,
    badge_text text,
    body text,
    cta_text text,
    cta_url text,
    content_data jsonb,
    is_visible boolean DEFAULT true
  );
  ```

### Shared Content Tables

- [ ] **4. Create `team_members` table**
  ```sql
  CREATE TABLE team_members (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    role text,
    location text,
    bio text,
    photo_url text,
    display_order integer,
    is_active boolean DEFAULT true
  );
  ```

- [ ] **5. Create `testimonials` table**
  ```sql
  CREATE TABLE testimonials (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    quote text NOT NULL,
    author_name text NOT NULL,
    author_title text,
    author_location text,
    author_photo_url text,
    stars integer,
    is_featured boolean DEFAULT false,
    display_order integer
  );
  ```

- [ ] **6. Create `case_studies` table**
  ```sql
  CREATE TABLE case_studies (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    category text,
    client_name text NOT NULL,
    description text,
    photo_url text,
    cta_text text,
    cta_url text,
    stats jsonb,
    display_order integer
  );
  ```

- [ ] **7. Create `faqs` table**
  ```sql
  CREATE TABLE faqs (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    question text NOT NULL,
    answer text NOT NULL,
    page_id uuid REFERENCES pages(id) ON DELETE SET NULL,
    display_order integer,
    is_active boolean DEFAULT true
  );
  ```

- [ ] **8. Create `services` table**
  ```sql
  CREATE TABLE services (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    short_description text,
    category text,
    icon text,
    href text,
    display_order integer,
    is_active boolean DEFAULT true
  );
  ```

- [ ] **9. Create `client_logos` table**
  ```sql
  CREATE TABLE client_logos (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    alt_text text NOT NULL,
    image_url text NOT NULL,
    display_order integer,
    is_active boolean DEFAULT true
  );
  ```

### Site-Wide Configuration Tables

- [ ] **10. Create `site_config` table**
  ```sql
  CREATE TABLE site_config (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    site_name text,
    tagline text,
    contact_email text,
    contact_phone text,
    address text,
    copyright_text text,
    social_links jsonb,
    default_og_image text,
    gtm_id text,
    ga_id text,
    calendly_url text
  );
  ```

- [ ] **11. Create `navigation` table**
  ```sql
  CREATE TABLE navigation (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    label text NOT NULL,
    href text,
    description text,
    parent_id uuid REFERENCES navigation(id) ON DELETE CASCADE,
    group_key text,
    display_order integer,
    is_active boolean DEFAULT true
  );
  ```

### RLS Policies

- [ ] **12. Enable RLS and create read-only policies**

  Enable RLS on all tables. Create `SELECT` policies for anonymous access. No `INSERT`, `UPDATE`, or `DELETE` policies for anon.

  **Tables with `status` column (publish-gated):**
  - `pages` — allow select where `status = 'published'`

  **Tables with `is_active` column (active-gated):**
  - `team_members`, `faqs`, `services`, `client_logos`, `navigation` — allow select where `is_active = true`

  **Tables with no filter needed (always readable if parent is accessible):**
  - `page_seo`, `page_sections` — allow select (content is only useful if the parent page is published; FK ensures orphan rows aren't meaningful)
  - `testimonials`, `case_studies` — allow select (no active flag; all rows are public)
  - `site_config` — allow select (singleton, always public)

---

## Indexes

Create indexes for common query patterns:

```sql
CREATE INDEX idx_pages_slug ON pages(slug);
CREATE INDEX idx_pages_status ON pages(status);
CREATE INDEX idx_page_seo_page_id ON page_seo(page_id);
CREATE INDEX idx_page_sections_page_id ON page_sections(page_id);
CREATE INDEX idx_page_sections_order ON page_sections(page_id, display_order);
CREATE INDEX idx_faqs_page_id ON faqs(page_id);
CREATE INDEX idx_navigation_parent ON navigation(parent_id);
CREATE INDEX idx_navigation_group ON navigation(group_key);
```

---

## Exit Criteria

Phase 1 is complete when:
1. All 11 tables exist in the Switch Media Website Supabase project
2. RLS is enabled on every table
3. Read-only policies are active for anonymous access
4. No write policies exist for anonymous access
5. All indexes are created
6. Schema can be verified via `list_tables` MCP call

---

*Inherits from: sm-website-cms-plan.md (SSOT)*
*Updated: 2026-03-13 — jarvis*
