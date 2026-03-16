import { HeroClient } from './Hero.client';

export interface HeroStat {
  value: string;
  label: string;
}

interface HeroProps {
  eyebrow: string;
  headline: string;
  stats: HeroStat[];
  trustBadges: string[];
  ctaText: string;
  ctaUrl: string;
}

export function Hero(props: HeroProps) {
  return <HeroClient {...props} />;
}
