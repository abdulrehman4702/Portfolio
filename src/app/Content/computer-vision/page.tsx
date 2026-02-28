import type { Metadata } from 'next';
import Image from 'next/image';
import { FaClock, FaBookOpen } from 'react-icons/fa';
import { siteUrl } from '@/lib/seo';

const content = {
  title: 'Advances in Computer Vision for Autonomous Systems',
  category: 'Computer Vision',
  date: 'February 20, 2025',
  readTime: '10 min read',
  image: '/images/vision.webp',
  content: `
    <h2>Introduction</h2>
    <p>Computer vision is critical for autonomous systems like self-driving cars. This research paper discusses optimizing convolutional neural networks (CNNs) for real-time object detection.</p>
    
    <h2>Technical Approach</h2>
    <p>We used YOLOv5 and EfficientDet models, fine-tuned on custom datasets. Techniques like transfer learning improved accuracy.</p>
    
    <h2>Results</h2>
    <p>Our optimized CNNs achieved 95% accuracy in real-time detection, with a latency of under 50ms.</p>
    
    <h2>Applications</h2>
    <p>Beyond autonomous vehicles, these models apply to robotics and surveillance.</p>
    
    <h2>Conclusion</h2>
    <p>Advancements in computer vision are paving the way for safer, more reliable autonomous systems.</p>
  `,
};

export const metadata: Metadata = {
  title: content.title,
  description:
    'Research on computer vision for autonomous systems: CNNs, YOLOv5, EfficientDet, real-time object detection. By Abdur Rehman.',
  openGraph: {
    title: `${content.title} | Abdur Rehman`,
    description: 'Computer vision, real-time object detection, and autonomous systems.',
    url: `${siteUrl}/Content/computer-vision`,
    type: 'article',
    publishedTime: '2025-02-20',
  },
  alternates: { canonical: `${siteUrl}/Content/computer-vision` },
};

export default function ComputerVisionPage() {
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
