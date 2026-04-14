import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { LangProvider } from './context/LangContext';
import ScrollTop from './components/ScrollTop';

export const metadata: Metadata = {
  title: 'Cacofonie — Osteuropäische Baufirmen für den deutschen Markt',
  description:
    'Cacofonie vermittelt spezialisierte Baufirmen aus Osteuropa — Schwerpunkt Rumänien — an deutsche Auftraggeber. Glasfaser, Stromtrassen, Hochbau, Tiefbau, Straßen- und Brückenbau. Mehrsprachig, erfahren, gut vernetzt.',
  keywords: [
    'rumänische Baufirmen', 'osteuropäische Baufirmen', 'Subunternehmer Deutschland',
    'Glasfaserausbau Subunternehmer', 'Tiefbau Rumänien', 'Hochbau Subunternehmer',
    'Baukapazitäten Deutschland', 'firme constructii Romania Germania',
    'firme constructii Europa de Est Germania', 'Netzausbau Subunternehmer',
    'Stromtrassen Bau', 'Brückenbau Subunternehmer', 'serbische Baufirmen Deutschland',
    'polnische Baufirmen Deutschland', 'Cacofonie', 'Bauunternehmen Osteuropa',
  ],
  metadataBase: new URL('https://cacofonie.ro'),
  alternates: { canonical: 'https://cacofonie.ro' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: [
      { url: '/favicon2.ico', sizes: 'any' },
      { url: '/favicon-32v2.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: '/apple-touch-icon2.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon2.ico',
  },
  openGraph: {
    title: 'Cacofonie — Rumänische Baufirmen für den deutschen Markt',
    description: 'Ihr Weg zu deutschen Bauprojekten. Glasfaser, Hochbau, Tiefbau, Straßenbau. Mehrsprachig, erfahren, gut vernetzt.',
    url: 'https://cacofonie.ro',
    siteName: 'Cacofonie',
    locale: 'de_DE',
    type: 'website',
    images: [{
      url: '/hero.jpg',
      width: 1400,
      height: 933,
      alt: 'Glasfaser-Messe Deutschland — Cacofonie verbindet rumänische Baufirmen mit deutschen Auftraggebern',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cacofonie — Rumänische Baufirmen für den deutschen Markt',
    description: 'Ihr Weg zu deutschen Bauprojekten. Glasfaser, Hochbau, Tiefbau, Straßenbau.',
    images: ['/hero.jpg'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://cacofonie.ro/#organization',
      name: 'Cacofonie',
      alternateName: 'Cacofonie Consulting',
      description:
        'Cacofonie vermittelt spezialisierte Baufirmen aus Osteuropa — Schwerpunkt Rumänien — an deutsche Auftraggeber in den Bereichen Glasfaser, Stromtrassen, Hochbau, Tiefbau, Straßen- und Brückenbau sowie Hallenbau.',
      url: 'https://cacofonie.ro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cacofonie.ro/logo-v2.png',
        width: 180,
        height: 140,
      },
      image: 'https://cacofonie.ro/hero.jpg',
      telephone: '+491711666615',
      email: 'info@cacofonie.ro',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'RO',
      },
      areaServed: [
        { '@type': 'Country', name: 'Germany' },
        { '@type': 'Country', name: 'Romania' },
      ],
      availableLanguage: [
        { '@type': 'Language', name: 'German', alternateName: 'de' },
        { '@type': 'Language', name: 'Romanian', alternateName: 'ro' },
        { '@type': 'Language', name: 'English', alternateName: 'en' },
        { '@type': 'Language', name: 'Serbian', alternateName: 'sr' },
        { '@type': 'Language', name: 'Polish', alternateName: 'pl' },
      ],
      sameAs: [
        'https://www.youtube.com/channel/UCQbpOxoYLknBR77D7MAv5dw',
        'https://www.tiktok.com/@cacofonie_',
        'https://wa.me/491711666615',
      ],
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 5 },
      foundingDate: '2022',
      knowsAbout: [
        'Glasfaserausbau',
        'Subunternehmer Deutschland',
        'Osteuropäische Baufirmen',
        'Netzausbau',
        'Rumänische Bauunternehmen',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://cacofonie.ro/#service',
      name: 'Cacofonie — Bauvermittlung Osteuropa',
      url: 'https://cacofonie.ro',
      provider: { '@id': 'https://cacofonie.ro/#organization' },
      serviceType: [
        'Glasfaser & Netzausbau',
        'Stromtrassen',
        'Hochbau',
        'Tiefbau',
        'Straßen- und Brückenbau',
        'Hallenbau',
      ],
      areaServed: 'DE',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Bausektoren',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Glasfaser & Netzausbau', description: 'Tiefbau, Kabelverlegung, FTTH-Ausbau für deutsche Netzbetreiber' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stromtrassen', description: 'Hochspannungsleitungen und Netzinfrastruktur' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hochbau', description: 'Gewerbe- und Industriebau durch spezialisierte osteuropäische Baufirmen' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tiefbau', description: 'Erdarbeiten, Fundamente, Ver- und Entsorgungsinfrastruktur' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Straßen- und Brückenbau', description: 'Infrastrukturprojekte für öffentliche Auftraggeber' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hallenbau', description: 'Industrie- und Lagerhallen schlüsselfertig' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://cacofonie.ro/#website',
      url: 'https://cacofonie.ro',
      name: 'Cacofonie',
      description: 'Osteuropäische Baufirmen für den deutschen Markt',
      publisher: { '@id': 'https://cacofonie.ro/#organization' },
      inLanguage: ['de', 'ro', 'en', 'sr', 'pl'],
      potentialAction: {
        '@type': 'CommunicateAction',
        target: 'https://zcal.co/lore/projekt',
        name: 'Termin vereinbaren',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://cacofonie.ro/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Welche Bausektoren deckt Cacofonie ab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cacofonie vermittelt Baufirmen für Glasfaser & Netzausbau, Stromtrassen, Hochbau, Tiefbau, Straßen- und Brückenbau sowie Hallenbau.',
          },
        },
        {
          '@type': 'Question',
          name: 'Aus welchen Ländern kommen die vermittelten Baufirmen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Schwerpunkt ist Rumänien, ergänzt durch Partner aus Serbien und Polen. Alle Firmen sind zertifiziert und für den deutschen Markt qualifiziert.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie läuft der Vermittlungsprozess ab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Der Prozess umfasst vier Schritte: (1) Kostenloses 30-minütiges Erstgespräch, (2) Marktpositionierung & Profilaufbau, (3) Matching mit deutschen Auftraggebern, (4) Dauerhafter Support durch Vertragsverhandlungen und Projektbetrieb.',
          },
        },
        {
          '@type': 'Question',
          name: 'In welchen Sprachen arbeitet Cacofonie?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cacofonie arbeitet mehrsprachig: Deutsch, Română, English, Srpski und Polski.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        {/* Favicon — versioned to bust cache */}
        <link rel="icon" href="/favicon2.ico" sizes="any" />
        <link rel="icon" href="/favicon-32v2.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon2.png" />
        {/* Preload self-hosted fonts for PageSpeed */}
        <link rel="preload" href="/fonts/satoshi-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/satoshi-500.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* PageSpeed: preconnect for analytics */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* hreflang — multilingual signals for Google */}
        <link rel="alternate" hrefLang="de" href="https://cacofonie.ro/" />
        <link rel="alternate" hrefLang="ro" href="https://cacofonie.ro/" />
        <link rel="alternate" hrefLang="en" href="https://cacofonie.ro/" />
        <link rel="alternate" hrefLang="sr" href="https://cacofonie.ro/" />
        <link rel="alternate" hrefLang="pl" href="https://cacofonie.ro/" />
        <link rel="alternate" hrefLang="x-default" href="https://cacofonie.ro/" />
        {/* AI / LLM discovery */}
        <link rel="ai" type="text/plain" href="https://cacofonie.ro/llms.txt" />
        <link rel="ai-data" type="application/json" href="https://cacofonie.ro/ai.json" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        {/* Viewport for mobile */}
        <meta name="theme-color" content="#131313" />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ScrollTop />
        <LangProvider>{children}</LangProvider>

        {/* Google Analytics — deferred, non-blocking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WS5J9NXTCW"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WS5J9NXTCW', { anonymize_ip: true });
          `}
        </Script>
      </body>
    </html>
  );
}
