import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Blogs - Abdur Rehman',
  description:
    'Explore Abdur Rehman’s articles, research papers, and insights on AI, automation, web development, and content creation.',
};

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}