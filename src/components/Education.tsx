'use client';

import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="section bg-background text-foreground w-full py-16">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <motion.div
          className="mt-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-400">Bachelor of Science in Software Engineering</h3>
          <p className="text-gray-800 dark:text-gray-300">Sir Syed CASE Institute of Technology (2020–2024)</p>
          <h4 className="mt-4 font-semibold text-emerald-800 dark:text-emerald-400">Relevant Coursework:</h4>
          <ul className="mt-2 list-disc list-inside text-gray-800 dark:text-gray-300">
            <li>Software Engineering</li>
            <li>Project Management</li>
            <li>Artificial Intelligence</li>
            <li>Computer Networks</li>
            <li>Computer Vision</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}