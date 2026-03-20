import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { getSiteConfig, getNavigation } from '@/lib/content';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
  weight: ['500', '700', '800', '900'],
});

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  return {
    metadataBase: new URL('https://switchmediaco.com'),
    title: {
      default: config.site_name ?? 'Switch Media Marketing',
      template: `%s | ${config.site_name ?? 'Switch Media Marketing'}`,
    },
    description: config.tagline ?? 'AI-powered advertising and marketing services.',
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await getSiteConfig();
  const navItems = await getNavigation();

  const siteUrl = 'https://switchmediaco.com';

  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.site_name,
    url: siteUrl,
    logo: `${siteUrl}/images/logo/sm-logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: config.contact_email,
      contactType: 'customer service',
    },
    sameAs: config.social_links
      ? Object.values(config.social_links as Record<string, string>)
      : [],
  };

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.site_name,
    url: siteUrl,
  };

  const gtmId = config.gtm_id ?? process.env.NEXT_PUBLIC_GTM_ID!;
  const gaId = config.ga_id ?? process.env.NEXT_PUBLIC_GA_ID!;

  return (
    <html lang="en">
      <GoogleTagManager gtmId={gtmId} />
      <body className={`${inter.variable} ${orbitron.variable} antialiased text-black overflow-x-hidden`}>
        <GoogleAnalytics gaId={gaId} />
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        <Navbar
          siteName={config.site_name ?? 'Switch Media Marketing'}
          navItems={navItems}
          ctaLabel="Book a Strategy Call"
          ctaHref={config.calendly_url ?? '/strategy-call'}
        />
        {children}
        <Footer
          siteName={config.site_name ?? 'Switch Media Marketing'}
          copyrightText={`\u00A9 2019\u2013${new Date().getFullYear()} | ${config.site_name ?? 'Switch Media Marketing'} | All rights reserved`}
          navItems={navItems}
        />
      </body>
    </html>
  );
}
