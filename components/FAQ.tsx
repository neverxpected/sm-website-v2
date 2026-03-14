import type { FAQ as FAQType } from '@/types/database'
import { FAQClient } from './FAQ.client'

interface FAQProps {
  heading: string
  subheading: string
  badge: string
  faqs: FAQType[]
}

export function FAQ({ heading, subheading, badge, faqs }: FAQProps) {
  return <FAQClient heading={heading} subheading={subheading} badge={badge} faqs={faqs} />
}
