import type { AIAdvantageTab } from './AIAdvantage.client'
import AIAdvantageClient from './AIAdvantage.client'

export type { AIAdvantageTab }

interface AIAdvantageProps {
  heading: string
  subheading: string
  badge: string
  tabs: AIAdvantageTab[]
}

export default function AIAdvantage({ heading, subheading, badge, tabs }: AIAdvantageProps) {
  return (
    <AIAdvantageClient
      heading={heading}
      subheading={subheading}
      badge={badge}
      tabs={tabs}
    />
  )
}
