import Image from 'next/image';
import { FaClock, FaBookOpen } from 'react-icons/fa';

const content = {
  title: 'Crafting SEO-Optimized Blogs with AI Tools',
  category: 'Content Creation',
  date: 'January 5, 2025',
  readTime: '7 min read',
  image: '/images/SEO.png',
  content: `
    <h2>Introduction</h2>
    <p>AI tools like Writesonic and ChatGPT are revolutionizing content creation. This guide shows how to craft SEO-optimized blogs that rank high on Google.</p>
    
    <h2>Why AI for SEO?</h2>
    <p>AI generates keyword-rich content, optimizes meta tags, and suggests trending topics, saving time and boosting visibility.</p>
    
    <h2>Step-by-Step Process</h2>
    <ul>
      <li><strong>Keyword Research</strong>: Use tools like Ahrefs or SEMrush.</li>
      <li><strong>Content Generation</strong>: Draft with Writesonic, refine with Grammarly.</li>
      <li><strong>Optimization</strong>: Add meta descriptions and alt text.</li>
    </ul>
    
    <h2>Best Practices</h2>
    <p>Ensure content is unique, engaging, and human-edited to avoid Google penalties.</p>
    
    <h2>Conclusion</h2>
    <p>AI-powered content creation is a game-changer for bloggers aiming to dominate search rankings.</p>
  `,
};

export default function SEOContentPage() {
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