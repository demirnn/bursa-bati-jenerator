import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ProductSchema {
  name: string;
  description: string;
  image: string;
  brand: string;
  category: string;
  sku?: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  product?: ProductSchema;
}

const BASE_URL = 'https://bursabatijenerator.com.tr';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = 'Bursa Batı Jeneratör';

const SEO: React.FC<SEOProps> = ({ title, description, canonical, ogImage, breadcrumbs, product }) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;
  const image = ogImage || DEFAULT_OG_IMAGE;

  const breadcrumbSchema = breadcrumbs ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${BASE_URL}${item.url}`,
    })),
  } : null;

  const productSchema = product ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'description': product.description,
    'image': product.image,
    'brand': {
      '@type': 'Brand',
      'name': product.brand,
    },
    'category': product.category,
    'sku': product.sku || product.name,
    'manufacturer': {
      '@type': 'Organization',
      'name': SITE_NAME,
      'url': BASE_URL,
    },
    'offers': {
      '@type': 'Offer',
      'availability': 'https://schema.org/InStock',
      'priceCurrency': 'TRY',
      'seller': {
        '@type': 'Organization',
        'name': SITE_NAME,
      },
    },
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:type" content={product ? 'product' : 'website'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {productSchema && (
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
