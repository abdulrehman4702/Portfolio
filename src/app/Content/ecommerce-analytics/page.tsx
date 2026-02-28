import type { Metadata } from 'next';
import Image from 'next/image';
import { FaClock, FaBookOpen } from 'react-icons/fa';
import { siteUrl } from '@/lib/seo';

const content = {
  title: 'Data-Driven Insights for E-Commerce Growth',
  category: 'Data Science',
  date: 'December 12, 2024',
  readTime: '9 min read',
  image: '/images/data-driven.jpeg',
  content: `
    <h2>Introduction</h2>
    <p>Predictive analytics drives e-commerce success. This case study examines how data insights boosted sales for an online retailer.</p>
    
    <h2>Methodology</h2>
    <p>We used Python, Pandas, and Scikit-learn to analyze customer behavior and predict purchasing trends.</p>
    
    <h2>Findings</h2>
    <p>Personalized recommendations increased conversion rates by 20%. Dynamic pricing improved margins by 15%.</p>
    
    <h2>Implementation</h2>
    <p>Integrated insights into Shopify using custom APIs and real-time dashboards.</p>
    
    <h2>Conclusion</h2>
    <p>Data-driven strategies are essential for e-commerce growth in a competitive market.</p>
  `,
};

export const metadata: Metadata = {
  title: content.title,
  description:
    'E-commerce analytics: predictive analytics, Python, Pandas, Scikit-learn, customer behavior. By Abdur Rehman.',
  openGraph: {
    title: `${content.title} | Abdur Rehman`,
    description: 'Data-driven e-commerce growth and analytics.',
    url: `${siteUrl}/Content/ecommerce-analytics`,
    type: 'article',
    publishedTime: '2024-12-12',
  },
  alternates: { canonical: `${siteUrl}/Content/ecommerce-analytics` },
};

export default function EcommerceAnalyticsPage() {
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