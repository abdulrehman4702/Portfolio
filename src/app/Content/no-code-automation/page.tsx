import type { Metadata } from 'next';
import Image from 'next/image';
import { FaClock, FaBookOpen } from 'react-icons/fa';
import { siteUrl } from '@/lib/seo';

const content = {
  title: 'The Future of No-Code Automation Platforms',
  category: 'Automation',
  date: 'March 15, 2025',
  readTime: '6 min read',
  image: '/images/workflow.png',
  content: `
    <h2>Introduction</h2>
    <p>No-code platforms are transforming how businesses automate workflows. This article explores tools like Zapier and Airtable, highlighting their impact on efficiency.</p>
    
    <h2>Key Benefits</h2>
    <p>No-code solutions empower non-technical users to build automations, reducing dependency on developers. They offer rapid deployment and cost savings.</p>
    
    <h2>Popular Tools</h2>
    <ul>
      <li><strong>Zapier</strong>: Connects apps for seamless data flow.</li>
      <li><strong>Airtable</strong>: Combines spreadsheets with database functionality.</li>
      <li><strong>Make</strong>: Advanced automation for complex workflows.</li>
    </ul>
    
    <h2>Challenges</h2>
    <p>Scalability and customization can be limited. Hybrid approaches, combining no-code with custom code, address these issues.</p>
    
    <h2>Conclusion</h2>
    <p>No-code platforms are the future of automation, democratizing technology and accelerating innovation.</p>
  `,
};

export const metadata: Metadata = {
  title: content.title,
  description:
    'No-code automation: Zapier, Airtable, Make. Workflow automation for businesses. By Abdur Rehman.',
  openGraph: {
    title: `${content.title} | Abdur Rehman`,
    description: 'No-code platforms and workflow automation.',
    url: `${siteUrl}/Content/no-code-automation`,
    type: 'article',
    publishedTime: '2025-03-15',
  },
  alternates: { canonical: `${siteUrl}/Content/no-code-automation` },
};

export default function NoCodeAutomationPage() {
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