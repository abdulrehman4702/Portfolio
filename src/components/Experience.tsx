'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'PhebSoft Pvt. Ltd.',
    period: 'July 2024 – Present',
    responsibilities: [
      'Designing and developing scalable web applications using React.js and Next.js',
      'Building robust Flask-based backends for real-world solutions',
      'Integrating AI/ML models into production systems',
      'Providing automation services to optimize internal and client workflows'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section bg-background text-foreground w-full py-16">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <div className="mt-8 max-w-3xl mx-auto space-y-8 text-justify dark:text-white">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-emerald-400  ">
                {exp.title} — {exp.company}
              </h3>
              <p className="text-gray-800 dark:text-white">{exp.period}</p>
              <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}