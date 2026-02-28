import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Full Stack Web Development (MERN), AI/ML integration, automation platforms, and HR & business systems. React, Next.js, Node.js, MongoDB, GCP. Hire Abdur Rehman for web apps, recruitment tools, and e-commerce.',
  openGraph: {
    title: 'Services | Abdur Rehman - Full Stack Developer (MERN)',
    description:
      'Full Stack Web Development, AI/ML integration, automation, HR systems. Mansha Transport, Airec, Talent Sync IQ, Unsh.',
    url: `${siteUrl}/services`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Abdur Rehman',
  },
  alternates: { canonical: `${siteUrl}/services` },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
