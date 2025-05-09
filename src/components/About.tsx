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
          className="mt-8 text-lg text-justify text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            I'm Abdur Rehman, a dedicated Full Stack Developer and Solution Engineer with over 1.5 years of hands-on experience since 2023, delivering innovative and scalable software solutions.
          </p>
          <p className="mt-4">
            I specialize in building robust back-end systems using Flask and Node.js, and crafting seamless, responsive front-end experiences with React.js and Next.js.
          </p>
          <p className="mt-4">
            My expertise spans AI/ML integration, Computer Vision, API testing, and automation platform development—enabling the creation of intelligent, high-performance web applications tailored for modern demands.
          </p>
          <p className="mt-4">
            As Team Lead at PhebSoft Pvt. Ltd., I lead cross-functional teams, drive agile development processes, and spearhead innovative projects from concept to deployment.
          </p>
          <p className="mt-4 text-emerald-900 dark:text-emerald-400">
            <span className="font-bold">Research Highlight:</span>
            <br />
            Currently developing <strong>"Easier Flow"</strong> — a no-code automation platform inspired by Zapier and n8n — designed to simplify workflow orchestration through AI-driven automation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}