import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials - Abdur Rehman',
  description:
    'Read testimonials from clients and colleagues about Abdur Rehman’s work in full-stack development, AI/ML integration, automation platforms, and computer vision solutions.',
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}