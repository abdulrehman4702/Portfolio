import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Client and colleague testimonials about Abdur Rehman: full-stack development, AI/ML integration, automation platforms, and computer vision.',
  openGraph: {
    title: 'Testimonials | Abdur Rehman - Full Stack Developer',
    url: `${siteUrl}/testimonials`,
  },
  alternates: { canonical: `${siteUrl}/testimonials` },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
