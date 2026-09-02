import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schemaData?: Record<string, unknown> | Array<Record<string, unknown>>;
  type?: 'website' | 'article';
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical = 'https://firstpeaksurf.com',
  ogImage = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80',
  schemaData,
  type = 'website',
}) => {
  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="First Peak Surf" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) for Google Rich Results */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
