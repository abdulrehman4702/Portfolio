'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBookOpen, FaClock } from 'react-icons/fa';

// Define TypeScript interface for content items
interface ContentItem {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

const contentItems: ContentItem[] = [
  {
    title: 'Building Scalable AI-Powered Web Applications',
    slug: 'ai-web-apps',
    excerpt:
      'Explore how to integrate AI models into web apps using Flask, Node.js, and TensorFlow for real-time predictions.',
    category: 'AI & Web Development',
    date: 'April 10, 2025',
    readTime: '8 min read',
    image: '/images/ai-automate.webp',
  },
  {
    title: 'The Future of No-Code Automation Platforms',
    slug: 'no-code-automation',
    excerpt:
      'A deep dive into no-code tools like Zapier and Airtable, and their impact on business workflows.',
    category: 'Automation',
    date: 'March 15, 2025',
    readTime: '6 min read',
    image: '/images/workflow.png',
  },
  {
    title: 'Advances in Computer Vision for Autonomous Systems',
    slug: 'computer-vision',
    excerpt:
      'Research on optimizing convolutional neural networks for real-time object detection in self-driving cars.',
    category: 'Computer Vision',
    date: 'February 20, 2025',
    readTime: '10 min read',
    image: '/images/vision.webp',
  },
  {
    title: 'Crafting SEO-Optimized Blogs with AI Tools',
    slug: 'seo-content',
    excerpt:
      'Learn how to use AI tools like Writesonic and ChatGPT to create engaging, high-ranking blog content.',
    category: 'Content Creation',
    date: 'January 5, 2025',
    readTime: '7 min read',
    image: '/images/SEO.png',
  },
  {
    title: 'Data-Driven Insights for E-Commerce Growth',
    slug: 'ecommerce-analytics',
    excerpt:
      'A case study on leveraging predictive analytics to boost sales in online retail platforms.',
    category: 'Data Science',
    date: 'December 12, 2024',
    readTime: '9 min read',
    image: '/images/data-driven.jpeg',
  },
  {
    title: 'Ethical Considerations in AI Development',
    slug: 'ai-ethics',
    excerpt:
      'Examining the ethical challenges of deploying AI systems in sensitive domains like healthcare.',
    category: 'AI Ethics',
    date: 'November 1, 2024',
    readTime: '12 min read',
    image: '/images/ethical.png',
  },
];

export default function ContentCreator() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="content-creator"
      className="section bg-background text-foreground w-full py-16 overflow-x-hidden"
    >
      <div className="container">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-emerald-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Research & Blogs
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-emerald-700/80 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Dive into my latest insights, research papers, and articles on AI, automation, web development, and content creation.
        </motion.p>
        <div className="mt-12 relative">
          <motion.div 
            className="flex gap-6"
            animate={{
              x: isPaused ? "0" : [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {contentItems.map((item, index) => (
              <motion.div
                key={item.slug}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex-none w-80 border border-emerald-200 relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setIsPaused(true);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setIsPaused(false);
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <Image
                    src={item.image}
                    alt={`${item.title} cover image`}
                    width={288}
                    height={160}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-emerald-500/10 text-emerald-600 text-xs font-semibold px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <FaBookOpen className="text-emerald-600" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-600 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-emerald-700/80 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="mt-3 flex items-center text-xs text-emerald-700/80">
                    <FaClock className="mr-1" size={12} />
                    <span>{item.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{item.date}</span>
                  </div>
                  <Link
                    href={`/Content/${item.slug}`}
                    className="mt-4 inline-block bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition text-sm font-medium"
                    aria-label={`Read more about ${item.title}`}
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
