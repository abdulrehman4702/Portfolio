import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'MERN full-stack development, frontend, graphic design, C++, C#, and game prototypes by Hamayal Ansari — UET Lahore.',
  openGraph: {
    title: 'Services | Hamayal Ansari',
    description:
      'MERN apps, UI development, graphic design, and programming projects.',
    url: `${siteUrl}/services`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Hamayal Ansari',
  },
  alternates: { canonical: `${siteUrl}/services` },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
