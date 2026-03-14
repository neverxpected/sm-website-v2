import { HowItWorksClient } from './HowItWorks.client';

export interface HowItWorksStep {
  number: string;
  title: string;
  bullets: string[];
}

interface HowItWorksProps {
  heading: string;
  subheading: string;
  badge?: string;
  steps: HowItWorksStep[];
}

export function HowItWorks({
  heading,
  subheading,
  badge = 'How It Works',
  steps,
}: HowItWorksProps) {
  return (
    <HowItWorksClient
      heading={heading}
      subheading={subheading}
      badge={badge}
      steps={steps}
    />
  );
}
