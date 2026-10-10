import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = {
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  };

  return [
    { url: siteUrl, ...base, priority: 1 },
    { url: `${siteUrl}/services`, ...base, priority: 0.9 },
    { url: `${siteUrl}/contact`, ...base, priority: 0.95 },
  ];
}
