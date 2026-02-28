'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCode, FaRobot, FaTools, FaBriefcase } from 'react-icons/fa';

const serviceList = [
  {
    title: 'Full Stack Web Development (MERN)',
    icon: <FaCode className="h-6 w-6" />,
    items: [
      'End-to-end web apps with React, Next.js, Node.js, Express, and MongoDB.',
      'Client and product work: e.g. Mansha Transport (Gulf), Unsh (e-commerce), and internal tools.',
      'RESTful APIs, authentication (JWT/OAuth), and deployment on GCP.',
      'Responsive, accessible UIs with TypeScript and modern tooling.',
    ],
  },
  {
    title: 'AI/ML Integration',
    icon: <FaRobot className="h-6 w-6" />,
    items: [
      'AI-powered assessment and fit scoring in recruitment platforms (e.g. applicant personality and job fit).',
      'Integration of ML models into production systems with clear APIs and monitoring.',
      'Background in computer vision and data-driven apps from research and internships (CARE).',
    ],
  },
  {
    title: 'Automation & Workflow Platforms',
    icon: <FaTools className="h-6 w-6" />,
    items: [
      'No-code / low-code automation (e.g. Easier Flow — Zapier/n8n-style) with AI-driven workflow suggestions.',
      'Real-time notifications, role-based access, and automated hiring flows.',
      'YAML support, workflow orchestration, and execution monitoring.',
    ],
  },
  {
    title: 'HR & Business Systems',
    icon: <FaBriefcase className="h-6 w-6" />,
    items: [
      'HR platforms: company hierarchy, OKR systems, attendance, and payroll (e.g. Talent Sync IQ).',
      'Recruitment platforms: full hiring flow, applicant tracking, and real-time collaboration.',
      'Computer vision solutions (e.g. agriculture, object detection) when required.',
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="section w-full py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Services
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Based on my experience building production apps for clients and product companies, here’s what I offer.
          </motion.p>

          <ul className="mt-12 space-y-6 list-none p-0 m-0">
            {serviceList.map((service, index) => (
              <motion.li
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
                    {service.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-bold text-foreground">
                      {service.title}
                    </h2>
                    <ul className="mt-3 space-y-2 list-none p-0 m-0">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-14 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-3 font-semibold text-white shadow-sm hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
              aria-label="Contact me to discuss services"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
