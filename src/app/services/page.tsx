'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCode, FaRobot, FaTools, FaBriefcase, FaArrowRight } from 'react-icons/fa';

const serviceList = [
  {
    title: 'Full Stack Web Development (MERN)',
    icon: <FaCode className="h-6 w-6" />,
    items: [
      'End-to-end web apps with React, Next.js 14, Node.js, Express, and MongoDB.',
      'Client and enterprise work: e.g. Mansha Transport (Gulf), Unsh (e-commerce), and internal platforms.',
      'RESTful APIs, secure authentication (JWT/OAuth), and deployment on Google Cloud Platform (GCP).',
      'Responsive, accessible UIs with TypeScript, Tailwind CSS, and modern tooling.',
    ],
  },
  {
    title: 'AI/ML Integration & LLM Pipelines',
    icon: <FaRobot className="h-6 w-6" />,
    items: [
      'AI-powered candidate assessment and fit scoring in recruitment platforms (e.g. Airec).',
      'Autonomous agent integration, prompt orchestration, and intelligent automation systems.',
      'Background in computer vision and data-driven applications from research (CARE, YOLOv8).',
    ],
  },
  {
    title: 'Automation & Workflow Platforms',
    icon: <FaTools className="h-6 w-6" />,
    items: [
      'Visual no-code / low-code workflow engines (e.g. Easier Flow) with AI workflow synthesis.',
      'Real-time notifications, role-based access control (RBAC), and automated business funnels.',
      'YAML schema export/import, graph synthesis, and real-time execution monitoring.',
    ],
  },
  {
    title: 'Enterprise Web Solutions & Business Platforms',
    icon: <FaBriefcase className="h-6 w-6" />,
    items: [
      'Custom HR, OKR systems, task management, and organization hierarchy platforms.',
      'Recruitment platforms with automated evaluation pipelines and real-time collaboration.',
      'Enterprise cloud deployment on GCP with high-availability MongoDB and WebSocket realtime streaming.',
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950/50 text-foreground pt-24 pb-20">
      <section className="section w-full">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-teal-50 dark:bg-teal-950/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 ring-1 ring-teal-200/80 dark:ring-teal-800 mb-3">
              What I Offer
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Engineering &amp; AI Services
            </h1>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
              Based on my experience building production applications for international clients and high-growth SaaS companies.
            </p>
          </div>

          <ul className="mt-12 space-y-6 list-none p-0 m-0">
            {serviceList.map((service, index) => (
              <motion.li
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-orange-400/60 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800 text-orange-600">
                    {service.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h2>
                    <ul className="mt-3 space-y-2 list-none p-0 m-0">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="mt-14 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-orange-500 dark:hover:bg-orange-600 px-8 py-3.5 font-bold text-white shadow-lg shadow-slate-900/15 transition-all text-sm"
              aria-label="Contact me to discuss services"
            >
              <span>Get in Touch</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
