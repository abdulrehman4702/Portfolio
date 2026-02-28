import type { Metadata } from 'next';
import Image from 'next/image';
import { FaClock, FaBookOpen } from 'react-icons/fa';
import { siteUrl } from '@/lib/seo';

const content = {
  title: 'Ethical Considerations in AI Development',
  category: 'AI Ethics',
  date: 'November 1, 2024',
  readTime: '12 min read',
  image: '/images/ethical.png',
  content: `
    <h2>Introduction</h2>
    <p>AI development raises ethical concerns, especially in sensitive domains like healthcare. This article explores key challenges and solutions.</p>
    
    <h2>Ethical Issues</h2>
    <p>Bias in datasets, lack of transparency, and privacy concerns are major hurdles.</p>
    
    <h2>Solutions</h2>
    <ul>
      <li><strong>Fairness</strong>: Use diverse datasets and bias audits.</li>
      <li><strong>Transparency</strong>: Implement explainable AI models.</li>
      <li><strong>Privacy</strong>: Adopt federated learning techniques.</li>
    </ul>
    
    <h2>Case Study</h2>
    <p>A healthcare AI project improved patient outcomes while addressing ethical concerns through rigorous testing.</p>
    
    <h2>Conclusion</h2>
    <p>Ethical AI development requires a balance of innovation and responsibility.</p>
  `,
};

export const metadata: Metadata = {
  title: content.title,
  description:
    'Ethical AI development: bias, transparency, privacy. Fairness, explainable AI, federated learning. By Abdur Rehman.',
  openGraph: {
    title: `${content.title} | Abdur Rehman`,
    description: 'Ethical considerations in AI: bias, transparency, and privacy.',
    url: `${siteUrl}/Content/ai-ethics`,
    type: 'article',
    publishedTime: '2024-11-01',
  },
  alternates: { canonical: `${siteUrl}/Content/ai-ethics` },
};

export default function AIEthicsPage() {
  return (
    <article className="section bg-background text-foreground w-full py-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container">
        <header className="max-w-3xl mx-auto">
          <span className="inline-block bg-emerald-500/10 text-emerald-500 text-xs font-semibold px-2 py-1 rounded mb-4 dark:bg-emerald-500/20">
            {content.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-emerald-500 dark:text-emerald-400">
            {content.title}
          </h1>
          <div className="mt-4 flex items-center text-sm text-muted-foreground dark:text-gray-400">
            <FaClock className="mr-1" size={14} />
            <span>{content.readTime}</span>
            <span className="mx-2">•</span>
            <span>{content.date}</span>
            <span className="mx-2">•</span>
            <FaBookOpen className="mr-1" size={14} />
            <span>{content.category}</span>
          </div>
        </header>
        <Image
          src={content.image}
          alt={`${content.title} hero image`}
          width={672}
          height={378}
          className="w-full max-w-3xl mx-auto mt-8 rounded-lg object-cover dark:brightness-90"
        />
        <div
          className="mt-8 max-w-3xl mx-auto prose prose-sm text-foreground dark:prose-invert dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />
      </div>
    </article>
  );
}

export const metadata = {
  title: `${content.title} - Abdur Rehman`,
  description: content.content.split('<p>')[1].split('</p>')[0],
};