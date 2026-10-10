'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  FaGithub,
  FaTimes,
  FaCheck,
  FaLayerGroup,
  FaStar,
  FaCode,
  FaExpand,
  FaFire,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import type { Project } from '../types';

const projects: Project[] = [
  {
    title: 'TalentSync IQ',
    tagline:
      'All-in-one AI platform for people, work, and knowledge — hire faster, collaborate live, and deliver goals.',
    description:
      'TalentSync IQ is a next-generation enterprise workforce operating system engineered to unify every dimension of human capital and organizational execution. It bridges autonomous AI capabilities with real-time human teamwork across recruitment, OKRs, virtual office collaboration, payroll, and finance.',
    features: [
      'AI-Powered Hiring & Candidate Scoring',
      'OKRs, Milestones & Performance Tracking',
      'Projects, Kanban & Sprint Tasks',
      'HR Operations & Employee Lifecycle',
      'Virtual Office & Real-Time Collaboration',
      'Automated Payroll & Tax Document Flows',
      'Double-Entry Finance Ledger',
      'AI Insights & Automated Workflow Triggers',
      'Multi-Service Integration APIs',
    ],
    technologies: [
      'Next.js 14 App Router',
      'React.js',
      'Node.js & Express',
      'MongoDB Atlas',
      'AI Agents & LLM Pipelines',
      'WebSockets (Live Collab)',
      'Google Cloud Platform (GCP)',
      'TypeScript',
      'Tailwind CSS',
    ],
    image: '/images/talentsync-iq.png',
    liveUrl: 'https://app.tsynciq.com/auth/login',
    featured: true,
    badge: 'Flagship AI Platform',
    category: 'ai',
  },
  {
    title: 'Airec',
    tagline: 'AI-Powered Autonomous Recruitment & Fit Assessment Suite',
    description:
      'An end-to-end recruitment platform with complete automated hiring funnels. Features role-based access control, real-time messaging, instant candidate alerts, and machine-learning assessments to evaluate applicant personality and job-fit dynamics.',
    features: [
      'Automated Multi-Stage Hiring Funnels',
      'AI Candidate Scoring & Personality Fit Evaluation',
      'Granular Role-Based Access Control (RBAC)',
      'Real-Time Chat & Instant Notification Feeds',
      'Interactive Candidate Management Board',
    ],
    technologies: [
      'MERN Stack',
      'React.js',
      'Node.js',
      'MongoDB',
      'AI Evaluation Engine',
      'WebSockets',
      'GCP Cloud',
    ],
    image: '/images/airec.png',
    liveUrl: 'https://airec.io',
    featured: true,
    badge: 'AI Recruitment Platform',
    category: 'ai',
  },
  {
    title: 'Mansha Transport',
    tagline: 'Gulf-Region Fleet Management & Enterprise Logistics Platform',
    description:
      'Comprehensive logistics and transport management portal built for an international Gulf-region enterprise client. Designed for extreme reliability, corporate service showcase, fleet inquiries, and cross-border operational management.',
    features: [
      'Gulf-Wide Logistics Fleet Presentation',
      'Corporate Route & Dynamic Rate Inquiries',
      'High-Performance Mobile-First Interface',
      'Scalable Enterprise Cloud Infrastructure on GCP',
    ],
    technologies: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'Express.js', 'GCP Cloud'],
    image: '/images/mansha-transport.png',
    liveUrl: 'https://manshatransport.com',
    featured: true,
    badge: 'International Client',
    category: 'client',
  },
  {
    title: 'Unsh Handmade',
    tagline: 'Luxury E-Commerce Platform for Artisanal Embroidery Brand',
    description:
      'A sleek, high-conversion online store for handmade embroidery fashion. Includes comprehensive product catalog, responsive shopping cart, dynamic order processing, and administrative inventory controls.',
    features: [
      'Custom Product Showcase & Dynamic Filtering',
      'Frictionless Shopping Cart & Secure Checkout',
      'Mobile-Optimized Luxury Visual Experience',
      'Automated Order Ingestion & Admin Dashboard',
    ],
    technologies: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'GCP Cloud'],
    image: '/images/unsh.png',
    liveUrl: 'https://unshhandmade.com',
    featured: false,
    badge: 'Production E-Commerce',
    category: 'fullstack',
  },
  {
    title: 'Easier Flow',
    tagline: 'Visual No-Code Automation & AI Workflow Engine (Research)',
    description:
      'A cutting-edge visual workflow automation platform enabling users to link tools and orchestrate complex tasks without writing code. Integrates AI-based workflow auto-generation, YAML import/export, and real-time execution graphs.',
    features: [
      'Interactive Drag-and-Drop Node Canvas',
      'AI Workflow Suggestions & Graph Synthesis',
      'YAML Schema Export & Seamless Import',
      'Real-Time Asynchronous Execution Engine',
    ],
    technologies: ['React.js', 'GoLang Backend', 'AI/ML Engines', 'Microservices Architecture'],
    image: '/images/easierflow.png',
    github: 'https://github.com/abdulrehman4702/easier-flow',
    featured: false,
    badge: 'Research Platform',
    category: 'research',
  },
  {
    title: 'Smart Agricultural Vision System',
    tagline: 'Computer Vision & Deep Learning for Crop Diagnosis',
    description:
      'An intelligent agriculture system automating soil analysis and crop health diagnostics using YOLOv8 computer vision models combined with decision-tree recommendation algorithms.',
    features: [
      'Real-Time YOLOv8 Plant Disease Detection',
      'Automated Soil Fertility Diagnostic Module',
      'Data-Driven Crop Yield Optimization Advice',
    ],
    technologies: ['YOLOv8', 'Python', 'OpenCV', 'Next.js', 'Node.js', 'MongoDB'],
    image: '/images/agriculture.jpg',
    github: 'https://github.com/abdulrehman4702/Final-Year-Project',
    featured: false,
    badge: 'AI / CV Research',
    category: 'research',
  },
  {
    title: 'Freeway X Uber (UK)',
    tagline: 'Insurance Policy Portal for UK Uber Drivers',
    description:
      'Independently developed client project delivering a streamlined insurance policy portal tailored specifically for UK-based Uber drivers with instant quotes and verification.',
    features: [
      'Automated Driver Insurance Quotes Generator',
      'Instant Policy Verification & Document Handling',
      'Strict UK Compliance & Security Standards',
    ],
    technologies: ['Fusion.js', '.NET Core', 'MySQL', 'RESTful APIs'],
    image: '/images/freewayxuber.jpg',
    badge: 'UK Client Project',
    category: 'client',
  },
  {
    title: 'Insolvency Dashboard',
    tagline: 'Live UK Insolvency Legal Analytics Dashboard',
    description:
      'A real-time data intelligence portal fetching and indexing UK insolvency legal records with multi-dimensional filtering, search, and dynamic analytics widgets.',
    features: [
      'Live UK Registry Data Ingestion Pipeline',
      'Multi-Parameter Legal Filtration & Fast Search',
      'Responsive Interactive Analytics Charts',
    ],
    technologies: ['React.js', 'Python Backend', 'MySQL', 'Data Analytics'],
    image: '/images/insolvency-dashboard.png',
    liveUrl: 'https://insolvency-dashboard.vercel.app/',
    badge: 'Live Analytics',
    category: 'fullstack',
  },
  {
    title: 'Dental Land Clinic',
    tagline: 'Modern Healthcare Practice & Appointment Booking',
    description:
      'Digital presence for Dental Land Clinic enabling patients to browse dental treatments, review practitioner credentials, and book appointments online.',
    features: [
      'Interactive Clinic Service Directory',
      'Online Patient Appointment Booking Flow',
      'Mobile-First Clinic Portal & CMS',
    ],
    technologies: ['WordPress', 'Elementor', 'PHP', 'Custom Responsive Styling'],
    image: '/images/dental-land.png',
    liveUrl: 'https://dentallands.com',
    badge: 'Clinic Portal',
    category: 'client',
  },
  {
    title: 'Shop Hub',
    tagline: 'Multi-Category E-Commerce Platform',
    description:
      'A scalable web shop created with modern TypeScript and Node.js architecture for streamlined customer product exploration and purchasing.',
    features: [
      'Dynamic Product Inventory & Categories',
      'Cart State Management & Checkout Flow',
      'REST API Backend with MongoDB Storage',
    ],
    technologies: ['TypeScript', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    image: '/images/shop-hub.jpg',
    github: 'https://github.com/abdulrehman4702/Shophub',
    badge: 'Open Source',
    category: 'fullstack',
  },
  {
    title: 'Smart Alarm Clock',
    tagline: 'Web Notification & Time Utility App',
    description:
      'A modern browser alarm utility with custom audio alerts, background notifications, and persistent state management.',
    features: [
      'Web Audio API Sound Synthesizer',
      'Browser Notification Alerts API',
      'Persistent Local & Remote Storage',
    ],
    technologies: ['Next.js', 'Node.js', 'Web Audio API', 'MongoDB'],
    image: '/images/alarm-clock.webp',
    github: 'https://github.com/abdulrehman4702/alarm-clock',
    badge: 'Web App',
    category: 'fullstack',
  },
];

export default function Projects() {
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Initial display shows top 6 projects to keep mobile scroll fast & clean
  const displayedProjects = isExpanded ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="relative overflow-x-clip py-16 sm:py-24 lg:py-28 bg-slate-50/70 dark:bg-slate-950/70 border-y border-slate-200/80 dark:border-slate-800/80"
    >
      {/* Dynamic Ambient Background Glows */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[550px] bg-gradient-to-b from-orange-500/15 via-teal-500/10 to-transparent blur-[150px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 top-1/4 w-80 h-80 rounded-full bg-orange-500/10 blur-[120px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-1/4 w-80 h-80 rounded-full bg-teal-500/10 blur-[120px] -z-10"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* 1. Clean Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-600 dark:text-orange-400 ring-1 ring-orange-500/30 mb-2.5">
              <FaFire className="w-3 h-3 text-orange-500" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
              Featured Projects &amp; Systems
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              Enterprise platforms, autonomous AI pipelines, and production full-stack solutions.
            </p>
          </div>

          <div className="shrink-0 text-xs font-bold text-slate-500 dark:text-slate-400">
            {displayedProjects.length} of {projects.length} Deliverables
          </div>
        </div>

        {/* 2. Projects Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-8 sm:pt-10"
        >
          <AnimatePresence>
            {displayedProjects.map((project, idx) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-orange-500/60 dark:hover:border-orange-500/60 transition-all duration-300"
              >
                {/* Visual Thumbnail Area */}
                <div
                  onClick={() => setSelectedModalProject(project)}
                  className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-950 cursor-pointer"
                  title="Click to view case study"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl font-black text-orange-500">
                      {project.title.charAt(0)}
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none">
                    {project.badge ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-slate-950/80 text-white backdrop-blur-md border border-white/15 shadow-sm">
                        <FaStar className="w-2.5 h-2.5 text-orange-400" />
                        <span>{project.badge}</span>
                      </span>
                    ) : (
                      <span />
                    )}

                    {project.liveUrl && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-emerald-950/80 text-emerald-300 backdrop-blur-md border border-emerald-500/30 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live</span>
                      </span>
                    )}
                  </div>

                  {/* Hover Quick Expand Badge */}
                  <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-900/80 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <FaExpand className="w-3 h-3" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3
                      onClick={() => setSelectedModalProject(project)}
                      className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight hover:text-orange-500 dark:hover:text-orange-400 transition-colors cursor-pointer leading-snug"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {project.tagline || project.description}
                    </p>
                  </div>

                  {/* Key Capabilities / Bullet points */}
                  {project.features && project.features.length > 0 && (
                    <div className="space-y-1 pt-1 border-t border-slate-100 dark:border-slate-800/80">
                      {project.features.slice(0, 2).map((feature) => (
                        <div key={feature} className="flex items-center gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                          <FaCheck className="w-2.5 h-2.5 text-teal-500 shrink-0" />
                          <span className="truncate font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 text-[10px] sm:text-[10.5px] font-semibold border border-slate-200/60 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-bold">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Card Actions Footer */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-orange-500 dark:hover:bg-orange-600 text-white text-[11px] sm:text-xs font-bold transition-all shadow-xs active:scale-95"
                        >
                          <span>Live</span>
                          <FaArrowUpRightFromSquare className="w-2.5 h-2.5" />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-[11px] sm:text-xs font-bold border border-slate-200 dark:border-slate-700 transition-all active:scale-95"
                        >
                          <FaGithub className="w-3 h-3" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedModalProject(project)}
                      className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors ml-auto py-1 px-1.5"
                    >
                      <span>Details</span>
                      <FaExpand className="w-2.5 h-2.5 text-orange-500" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 3. Show More / Show Less Toggle Button (Prevents infinite scrolling) */}
        {projects.length > 6 && (
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-500 shadow-md hover:shadow-lg text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold transition-all active:scale-95"
            >
              <span>
                {isExpanded
                  ? 'Show Less'
                  : `View All ${projects.length} Projects`}
              </span>
              {isExpanded ? (
                <FaChevronUp className="w-3 h-3 text-orange-500 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <FaChevronDown className="w-3 h-3 text-orange-500 transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* 3. High-Detail Interactive Case Study Modal */}
      <AnimatePresence>
        {selectedModalProject && (
          <motion.div
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedModalProject(null)}
          >
            <motion.div
              className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full my-8 max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedModalProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="w-4 h-4" />
              </button>

              {/* Banner Image */}
              <div className="relative h-60 sm:h-72 w-full bg-slate-950 overflow-hidden">
                {selectedModalProject.image ? (
                  <Image
                    src={selectedModalProject.image}
                    alt={selectedModalProject.title}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl font-black text-orange-500">
                    {selectedModalProject.title.charAt(0)}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
                
                <div className="absolute bottom-5 left-6 right-6">
                  {selectedModalProject.badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white mb-2 shadow-lg">
                      <FaStar className="w-2.5 h-2.5" />
                      {selectedModalProject.badge}
                    </span>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {selectedModalProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {selectedModalProject.tagline && (
                  <div className="p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 text-orange-900 dark:text-orange-200 font-medium text-xs sm:text-sm leading-relaxed">
                    {selectedModalProject.tagline}
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    About the Platform
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                    {selectedModalProject.description}
                  </p>
                </div>

                {/* Modules & Key Capabilities Grid */}
                {selectedModalProject.features && selectedModalProject.features.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                      <FaLayerGroup className="w-3.5 h-3.5 text-orange-500" />
                      Key Capabilities &amp; Integrated Modules ({selectedModalProject.features.length})
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedModalProject.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60"
                        >
                          <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-600 dark:text-teal-400 mt-0.5">
                            <FaCheck className="w-2.5 h-2.5" />
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <FaCode className="w-3.5 h-3.5 text-teal-500" />
                    Cloud &amp; Tech Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedModalProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3">
                  {selectedModalProject.liveUrl && (
                    <a
                      href={selectedModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-orange-500 dark:hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      <span>Visit Live Site</span>
                    </a>
                  )}

                  {selectedModalProject.github && (
                    <a
                      href={selectedModalProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold border border-slate-300 dark:border-slate-700 transition-all hover:scale-105 active:scale-95"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedModalProject(null)}
                    className="ml-auto px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
