import type { Service } from '@/types/database';
import ContactSectionClient from './ContactSection.client';

interface ContactSectionProps {
  heading: string;
  subheading: string;
  badge: string;
  contactEmail: string;
  strategyCallUrl: string;
  services: Service[];
}

export default function ContactSection({
  heading,
  subheading,
  badge,
  contactEmail,
  strategyCallUrl,
  services,
}: ContactSectionProps) {
  return (
    <ContactSectionClient
      heading={heading}
      subheading={subheading}
      badge={badge}
      contactEmail={contactEmail}
      strategyCallUrl={strategyCallUrl}
      services={services}
    />
  );
}
