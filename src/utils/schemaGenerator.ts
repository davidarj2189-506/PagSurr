import type {
  SportsActivityLocation,
  Service,
  FAQPage,
  WebPage,
  WithContext,
  Offer,
  PostalAddress,
  GeoCoordinates,
  Question,
  Answer,
} from 'schema-dts';

export interface LocalBusinessSchemaOptions {
  url?: string;
  telephone?: string;
  name?: string;
}

/**
 * Generates Schema.org SportsActivityLocation / LocalBusiness markup
 * Validated for Google Rich Results Test
 */
export function generateLocalBusinessSchema(options?: LocalBusinessSchemaOptions): WithContext<SportsActivityLocation> {
  const siteUrl = options?.url || 'https://firstpeaksurf.com';
  const phone = options?.telephone || '+506-8899-7873';
  const brandName = options?.name || 'First Peak Surf';

  const address: PostalAddress = {
    '@type': 'PostalAddress',
    streetAddress: 'Main Beach Entrance, Playa Guiones',
    addressLocality: 'Nosara',
    addressRegion: 'Guanacaste',
    postalCode: '50206',
    addressCountry: 'CR',
  };

  const geo: GeoCoordinates = {
    '@type': 'GeoCoordinates',
    latitude: 9.9833,
    longitude: -85.6500,
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    '@id': `${siteUrl}/#organization`,
    name: brandName,
    alternateName: 'First Peak Surf School Nosara',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80',
    description:
      'Boutique surf school in Playa Guiones, Nosara, Costa Rica, specializing in safe, personalized sunset surf lessons for kids (ages 6-12) and families with a strict 1:3 ratio and video analysis in the Blue Zone.',
    telephone: phone,
    email: 'info@firstpeaksurf.com',
    priceRange: '$$',
    currenciesAccepted: 'USD, CRC',
    paymentAccepted: 'Cash, Credit Card, PayPal',
    address,
    geo,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '06:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Playa Guiones',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Nosara',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Guanacaste',
      },
      {
        '@type': 'Country',
        name: 'Costa Rica',
      },
    ],
  };
}

export interface ServiceSchemaOptions {
  serviceName?: string;
  price?: string;
  currency?: string;
  duration?: string;
}

/**
 * Generates Schema.org Service markup for Kids Surf Lessons
 */
export function generateServiceSchema(options?: ServiceSchemaOptions): WithContext<Service> {
  const serviceName = options?.serviceName || 'Kids Surf Lessons';
  const price = options?.price || '90';
  const priceCurrency = options?.currency || 'USD';
  const duration = options?.duration || 'PT1H30M';

  const offer: Offer = {
    '@type': 'Offer',
    price,
    priceCurrency,
    priceValidUntil: '2027-12-31',
    availability: 'https://schema.org/InStock',
    url: 'https://firstpeaksurf.com/booking',
    validFrom: '2025-01-01',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://firstpeaksurf.com/#service-kids-surf',
    name: serviceName,
    serviceType: 'Children Surfing Lessons',
    description:
      'Safe, progressive surf coaching for kids ages 6-12 at Playa Guiones, Nosara with a strict 1:3 instructor ratio, high-buoyancy soft-top boards, and 4K telephoto video analysis in Costa Rica’s Blue Zone.',
    provider: {
      '@type': 'SportsActivityLocation',
      name: 'First Peak Surf',
      url: 'https://firstpeaksurf.com',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Playa Guiones, Nosara, Guanacaste, Costa Rica',
    },
    offers: offer,
    termsOfService: `Session Duration: ${duration} (1 Hour 30 Minutes)`,
  };
}

/**
 * Generates Schema.org FAQPage markup optimized for AEO / Featured Snippets
 */
export function generateFAQSchema(): WithContext<FAQPage> {
  const questions: Question[] = [
    {
      '@type': 'Question',
      name: 'Do kids need to know how to swim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, children do not need to be advanced swimmers to learn to surf at Playa Guiones in Nosara, Costa Rica. Lessons take place in gentle waist-deep whitewater over a soft sand bottom with ISA-certified instructors right beside them. We maintain a strict 1:3 ratio and provide Coast Guard-approved flotation vests for complete peace of mind.',
      } as Answer,
    },
    {
      '@type': 'Question',
      name: 'What should my child bring to surf lessons?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your child only needs swimwear, a towel, and dry clothes. First Peak Surf provides everything else at Playa Guiones in Nosara, Costa Rica, including custom high-buoyancy soft-top boards, UPF 50+ rashguards, and reef-safe mineral zinc sunblock. We also provide cold drinking water and fresh organic Costa Rican coconuts after every lesson.',
      } as Answer,
    },
    {
      '@type': 'Question',
      name: "What's the best time of day for kids surf lessons in Nosara?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time of day is two hours before low tide, with late afternoon sunset surf lessons being the most magical in Nosara, Costa Rica. Afternoon sessions at Playa Guiones offer calm offshore breezes, gentle peeling waves, and breathtaking Pacific sunsets across the Nicoya Peninsula Blue Zone, creating an inspiring and safe ocean experience.',
      } as Answer,
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://firstpeaksurf.com/#faq',
    mainEntity: questions,
  };
}

/**
 * Generates SpeakableSpecification schema targeting voice assistants and AI answer engines
 */
export function generateSpeakableSchema(): WithContext<WebPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://firstpeaksurf.com/#webpage',
    url: 'https://firstpeaksurf.com',
    name: 'First Peak Surf | Kids & Family Surf Lessons Nosara',
    description:
      'Where first waves become forever memories. Family surf coaching at sunset in Playa Guiones, Nosara, Costa Rica.',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#main-heading', '#hero-summary'],
    },
  };
}

/**
 * Combined JSON-LD graph for Home Page satisfying LocalBusiness, Service, FAQPage and Speakable
 */
export function getHomePageSchema(): Record<string, unknown> {
  const localBusiness: Record<string, unknown> = {
    ...((generateLocalBusinessSchema() as unknown) as Record<string, unknown>),
  };
  const service: Record<string, unknown> = {
    ...((generateServiceSchema() as unknown) as Record<string, unknown>),
  };
  const faq: Record<string, unknown> = {
    ...((generateFAQSchema() as unknown) as Record<string, unknown>),
  };
  const speakableWebPage: Record<string, unknown> = {
    ...((generateSpeakableSchema() as unknown) as Record<string, unknown>),
  };

  delete localBusiness['@context'];
  delete service['@context'];
  delete faq['@context'];
  delete speakableWebPage['@context'];

  return {
    '@context': 'https://schema.org',
    '@graph': [localBusiness, service, faq, speakableWebPage],
  };
}
