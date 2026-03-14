import type { Navigation } from '@/types/database'
import NavbarClient from './Navbar.client'

export interface NavDropdownLink {
  label: string
  href: string
  description: string | null
}

export interface NavSimpleLink {
  label: string
  href: string
}

export interface NavDropdownGroup {
  label: string
  links: NavDropdownLink[]
}

function buildNavFromNavigation(navItems: Navigation[]): {
  dropdowns: NavDropdownGroup[]
  simpleLinks: NavSimpleLink[]
} {
  const active = navItems.filter((n) => n.is_active !== false)
  const byParent = new Map<string | null, Navigation[]>()
  for (const n of active) {
    const key = n.parent_id ?? 'null'
    if (!byParent.has(key)) byParent.set(key, [])
    byParent.get(key)!.push(n)
  }

  const sorted = (arr: Navigation[]) =>
    [...arr].sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0))

  const dropdowns: NavDropdownGroup[] = []
  const paidAds = sorted(byParent.get('null') ?? []).find((n) => n.group_key === 'paid_ads')
  const aiAuto = sorted(byParent.get('null') ?? []).find((n) => n.group_key === 'ai_automations')

  if (paidAds) {
    const children = sorted(byParent.get(paidAds.id) ?? [])
    if (children.length) {
      dropdowns.push({
        label: paidAds.label,
        links: children
          .filter((c) => c.href)
          .map((c) => ({ label: c.label, href: c.href!, description: c.description })),
      })
    }
  }
  if (aiAuto) {
    const children = sorted(byParent.get(aiAuto.id) ?? [])
    if (children.length) {
      dropdowns.push({
        label: aiAuto.label,
        links: children
          .filter((c) => c.href)
          .map((c) => ({ label: c.label, href: c.href!, description: c.description })),
      })
    }
  }

  const mainItems = sorted(byParent.get('null') ?? []).filter(
    (n) => n.group_key === 'main' && n.href
  )
  const simpleLinks: NavSimpleLink[] = mainItems.map((n) => ({ label: n.label, href: n.href! }))

  return { dropdowns, simpleLinks }
}

interface NavbarProps {
  siteName: string
  navItems: Navigation[]
  ctaLabel: string
  ctaHref: string
}

export default function Navbar({ siteName, navItems, ctaLabel, ctaHref }: NavbarProps) {
  const { dropdowns, simpleLinks } = buildNavFromNavigation(navItems)
  return (
    <NavbarClient
      siteName={siteName}
      dropdowns={dropdowns}
      simpleLinks={simpleLinks}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
    />
  )
}
