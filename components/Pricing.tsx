import type { PricingPlan } from './Pricing.client'
import PricingClient from './Pricing.client'

interface PricingProps {
  badge?: string
  heading?: string
  subheading?: string
  plans: PricingPlan[]
  disclaimer?: string
  ctaHref?: string
}

export default function Pricing({
  badge = 'Pricing',
  heading = 'Transparent',
  subheading = 'No hidden fees. No long-term lock-ins. Just results.',
  plans,
  disclaimer = 'All plans include a free onboarding strategy session. Cancel anytime.',
  ctaHref = '/strategy-call',
}: PricingProps) {
  return (
    <PricingClient
      badge={badge}
      heading={heading}
      subheading={subheading}
      plans={plans}
      disclaimer={disclaimer}
      ctaHref={ctaHref}
    />
  )
}
