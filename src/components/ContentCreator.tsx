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

const ContentCreator = () => {

  return (
    <section
      id="content-creator"
      className="section bg-background text-foreground w-full py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Research & Blogs
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-500 text-center max-w-2xl mx-auto dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Dive into my latest insights, research papers, and articles on AI, automation, web development, and content creation.
        </motion.p>
        <div className="mt-12">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {contentItems.map((item, index) => (
              <motion.div
                key={item.slug}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-white relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="overflow-hidden rounded-md"
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} cover image`}
                      width={288}
                      height={160}
                      className="w-full h-40 object-cover mb-4 transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-emerald-500/10 text-emerald-600 text-xs font-semibold px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <FaBookOpen className="text-emerald-600 group-hover:rotate-12 transition-transform duration-300" size={16} />
                    </div>
                    <h3 className="text-lg font-semibold text-emerald-600 line-clamp-2 group-hover:text-emerald-500 transition-colors duration-300">
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
                      className="mt-4 inline-block bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-all duration-300 text-sm font-medium transform hover:scale-105 hover:shadow-lg"
                      aria-label={`Read more about ${item.title}`}
                    >
                      Read More
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContentCreator;
