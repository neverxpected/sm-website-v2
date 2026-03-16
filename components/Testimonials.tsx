import type { Testimonial } from '@/types/database';
import TestimonialsClient from './Testimonials.client';

interface TestimonialsProps {
  heading: string;
  subheading: string;
  badge: string;
  testimonials: Testimonial[];
}

export default function Testimonials({
  heading,
  subheading,
  badge,
  testimonials,
}: TestimonialsProps) {
  return (
    <TestimonialsClient
      heading={heading}
      subheading={subheading}
      badge={badge}
      testimonials={testimonials}
    />
  );
}
