import Image from 'next/image';
import { FaClock, FaBookOpen } from 'react-icons/fa';

const content = {
  title: 'Building Scalable AI-Powered Web Applications',
  category: 'AI & Web Development',
  date: 'April 10, 2025',
  readTime: '8 min read',
  image: '/images/ai-automate.webp',
  content: `
    <h2>Introduction</h2>
    <p>Artificial Intelligence (AI) is revolutionizing web development, enabling dynamic, personalized user experiences. In this article, we explore how to build scalable AI-powered web applications using Flask, Node.js, and TensorFlow.</p>
    
    <h2>Why AI in Web Apps?</h2>
    <p>AI enhances web applications by enabling features like real-time predictions, chatbots, and personalized recommendations. For example, integrating a TensorFlow model can power product suggestions in e-commerce platforms.</p>
    
    <h2>Technical Implementation</h2>
    <ul>
      <li><strong>Backend with Flask</strong>: Use Flask to serve API endpoints for AI model predictions.</li>
      <li><strong>Node.js for Scalability</strong>: Leverage Node.js for handling asynchronous requests and real-time updates.</li>
      <li><strong>TensorFlow Integration</strong>: Deploy pre-trained models for tasks like image recognition or NLP.</li>
    </ul>
    
    <h2>Challenges and Solutions</h2>
    <p>Scaling AI models requires efficient resource management. Techniques like model quantization and cloud deployment (e.g., AWS SageMaker) can optimize performance.</p>
    
    <h2>Conclusion</h2>
    <p>Building AI-powered web apps combines the power of modern frameworks with cutting-edge machine learning. By following best practices, developers can create robust, scalable solutions.</p>
  `,
};

export default function AIWebAppsPage() {
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