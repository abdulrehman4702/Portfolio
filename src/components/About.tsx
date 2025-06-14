'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section  bg-background text-foreground w-full py-160">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
  className="mt-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  <div className="grid gap-10 md:grid-cols-2">
    {/* Professional Journey */}
    <motion.div 
      className="bg-gradient-to-br from-white via-emerald-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border text-left sm:text-justify border-emerald-100 dark:border-emerald-800"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
        <span className="mr-2">🚀</span> Professional Journey
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
        I'm Abdur Rehman, a passionate Full Stack Developer and Solution Engineer with over 1.5 years of hands-on experience since 2023, crafting innovative and scalable software solutions that transform ideas into reality.
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mt-4">
        I specialize in architecting and implementing robust back-end systems using Flask and Node.js, while delivering seamless front-end experiences with React.js and Next.js — ensuring performance, accessibility, and top-tier user satisfaction.
      </p>
    </motion.div>

    {/* Technical Expertise */}
    <motion.div 
      className="bg-gradient-to-br from-white via-emerald-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border text-left sm:text-justify border-emerald-100 dark:border-emerald-800"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
        <span className="mr-2">⚡</span> Technical Expertise
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
        My expertise spans AI/ML integration, Computer Vision, API testing, and automation platform development — empowering me to craft high-performance web apps built for scalability and intelligence.
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mt-4">
        As Team Lead at PhebSoft Pvt. Ltd., I guide agile teams, mentor developers, and lead projects from ideation to deployment — all while ensuring quality, innovation, and alignment with client expectations.
      </p>
    </motion.div>

    {/* Research Highlight */}
    <motion.div 
      className="md:col-span-2 bg-gradient-to-r from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border text-left sm:text-justify border-emerald-200 dark:border-emerald-700"
      whileHover={{ scale: 1.01, y: -3 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-4 flex items-center">
        <span className="mr-2">💡</span> Research Highlight
      </h3>
      <p className="text-emerald-900 dark:text-emerald-300 text-base md:text-lg leading-relaxed">
        Currently building <strong className="text-emerald-700 dark:text-emerald-400">"Easier Flow"</strong> — a no-code automation platform inspired by Zapier and n8n — designed to empower users with AI-driven workflow automation and beautiful, intuitive UX.
      </p>
    </motion.div>
  </div>
</motion.div>

      </div>
    </section>
  );
}