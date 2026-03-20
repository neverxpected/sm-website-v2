import { HeroClient } from './Hero.client';
import type { HeadlineLine } from './Hero.client';

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

export function Hero({ headline, ...props }: HeroProps) {
  const gradientWord = headline?.trim() || 'CHEAT CODE';

  const headlineLines: HeadlineLine[] = [
    {
      text: `THE ${gradientWord}`,
      hasGradient: true,
      className: 'text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl',
      delay: 100,
    },
    {
      text: 'TO DIGITALLY SCALE',
      hasGradient: false,
      className: 'text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl',
      delay: 200,
    },
    {
      text: 'YOUR BUSINESS',
      hasGradient: false,
      className: 'text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl',
      delay: 300,
    },
  ];

  return <HeroClient {...props} headlineLines={headlineLines} />;
}
