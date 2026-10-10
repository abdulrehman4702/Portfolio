import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

const contentSlugs = [
  'ai-ethics',
  'ai-web-apps',
  'computer-vision',
  'ecommerce-analytics',
  'no-code-automation',
  'seo-content',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = {
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  };

  const routes: MetadataRoute.Sitemap = [
    { url: siteUrl, ...base, priority: 1 },
    { url: `${siteUrl}/services`, ...base, priority: 0.9 },
    { url: `${siteUrl}/contact`, ...base, priority: 0.95 },
    { url: `${siteUrl}/testimonials`, ...base, priority: 0.7 },
    ...contentSlugs.map((slug) => ({
      url: `${siteUrl}/Content/${slug}`,
      ...base,
      priority: 0.6,
    })),
  ];

  return routes;
}
