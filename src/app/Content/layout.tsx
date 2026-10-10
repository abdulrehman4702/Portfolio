import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Research & Blogs',
  description:
    'Articles and insights by Abdur Rehman on AI, automation, computer vision, web development, no-code automation, and content creation.',
  openGraph: {
    title: 'Research & Blogs | Abdur Rehman - Full Stack Developer',
    description: 'Explore articles on AI, automation, computer vision, and web development.',
    url: `${siteUrl}/Content`,
  },
};

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
