'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
  FaCheck,
  FaLayerGroup,
  FaArrowRight,
  FaFire,
} from 'react-icons/fa';
import type { Project } from '../types';

const projects: Project[] = [
  {
    title: 'TalentSync IQ',
    tagline:
      'All-in-one AI platform for people, work, and knowledge — hire faster, collaborate live, and deliver goals without switching tools.',
    description:
      'TalentSync IQ is a next-generation enterprise workforce operating system engineered to unify every dimension of human capital and organizational execution. It bridges autonomous AI capabilities with real-time human teamwork across recruitment, OKRs, tasks, virtual office collaboration, payroll, and finance.',
    features: [
      'AI-Powered Hiring',
      'OKRs & Performance',
      'Projects & Tasks',
      'HR Operations',
      'Virtual Office & Collaboration',
      'Payroll, Docs & More',
      'Finance Ledger',
      'AI Insights & Automation',
      'Seamless Integrations',
    ],
    technologies: [
      'Next.js 14',
      'React.js',
      'Node.js',
      'MongoDB',
      'AI Agents & LLM Integration',
      'WebSockets',
      'Google Cloud Platform (GCP)',
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
      'Automated Hiring Funnels',
      'AI Candidate Scoring & Personality Fit',
      'Role-Based Access Control (RBAC)',
      'Real-Time Chat & Instant Notifications',
    ],
    technologies: [
      'MERN Stack',
      'React.js',
      'Node.js',
      'MongoDB',
      'AI Candidate Assessment',
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
      'Gulf-Wide Logistics Presentation',
      'Corporate Route & Rate Inquiries',
      'High-Performance Mobile-First UI',
      'Scalable Cloud Architecture on GCP',
    ],
    technologies: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'Express', 'GCP'],
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
      'Custom Product Showcase & Filtering',
      'Frictionless Shopping Cart & Checkout',
      'Responsive Mobile-Optimized Interface',
      'Secure Order Ingestion Flow',
    ],
    technologies: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'GCP'],
    image: '/images/unsh.png',
    liveUrl: 'https://unshhandmade.com',
    featured: false,
    category: 'fullstack',
  },
  {
    title: 'Easier Flow',
    tagline: 'Visual No-Code Automation & AI Workflow Engine (Research)',
    description:
      'A cutting-edge visual workflow automation platform enabling users to link tools and orchestrate complex tasks without writing code. Integrates AI-based workflow auto-generation, YAML import/export, and real-time execution graphs.',
    features: [
      'Drag-and-Drop Node Canvas',
      'AI Workflow Suggestions & Graph Synthesis',
      'YAML Schema Export & Import',
      'Real-Time Execution Engine',
    ],
    technologies: ['React.js', 'GoLang Backend', 'AI/ML Engines', 'Microservices'],
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
      'Real-Time YOLOv8 Object Detection',
      'Automated Soil Fertility Diagnostic',
      'Crop Yield Optimization Suggestions',
    ],
    technologies: ['YOLOv8', 'Python', 'OpenCV', 'Next.js', 'Node.js', 'MongoDB'],
    image: '/images/agriculture.jpg',
    github: 'https://github.com/abdulrehman4702/Final-Year-Project',
    category: 'research',
  },
  {
    title: 'Freeway X Uber (UK)',
    tagline: 'Insurance Policy Portal for UK Uber Drivers',
    description:
      'Independently developed client project delivering a streamlined insurance policy portal tailored specifically for UK-based Uber drivers with instant quotes and verification.',
    features: [
      'Automated Driver Insurance Quotes',
      'Policy Verification & Document Handling',
      'UK Compliance Standards',
    ],
    technologies: ['Fusion.js', '.NET Core', 'MySQL', 'REST APIs'],
    image: '/images/freewayxuber.jpg',
    category: 'client',
  },
  {
    title: 'Insolvency Dashboard',
    tagline: 'Live UK Insolvency Legal Analytics Dashboard',
    description:
      'A real-time data intelligence portal fetching and indexing UK insolvency legal records with multi-dimensional filtering, search, and dynamic analytics widgets.',
    features: [
      'Live UK Registry Data Ingestion',
      'Multi-Parameter Filtration & Search',
      'Responsive Analytics Visualizations',
    ],
    technologies: ['React.js', 'Python Backend', 'MySQL', 'Data Analytics'],
    image: '/images/insolvency-dashboard.png',
    liveUrl: 'https://insolvency-dashboard.vercel.app/',
    category: 'fullstack',
  },
  {
    title: 'Dental Land Clinic',
    tagline: 'Modern Healthcare Practice & Appointment Booking',
    description:
      'Digital presence for Dental Land Clinic enabling patients to browse dental treatments, review practitioner credentials, and book appointments online.',
    features: [
      'Interactive Service Directory',
      'Online Appointment Booking Flow',
      'Mobile-First Clinic Portal',
    ],
    technologies: ['WordPress', 'Elementor', 'PHP', 'Custom Styling'],
    image: '/images/dental-land.png',
    liveUrl: 'https://dentallands.com',
    category: 'client',
  },
  {
    title: 'Shop Hub',
    tagline: 'Multi-Category E-Commerce Platform',
    description:
      'A scalable web shop created with modern TypeScript and Node.js architecture for streamlined customer product exploration and purchasing.',
    technologies: ['TypeScript', 'Node.js', 'MongoDB', 'Express'],
    image: '/images/shop-hub.jpg',
    github: 'https://github.com/abdulrehman4702/Shophub',
    category: 'fullstack',
  },
  {
    title: 'Smart Alarm Clock',
    tagline: 'Web Notification & Time Utility App',
    description:
      'A modern browser alarm utility with custom audio alerts, background notifications, and persistent state management.',
    technologies: ['Next.js', 'Node.js', 'Web Audio API', 'MongoDB'],
    image: '/images/alarm-clock.webp',
    github: 'https://github.com/abdulrehman4702/alarm-clock',
    category: 'fullstack',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Platforms' },
  { id: 'client', label: 'Client & Enterprise' },
  { id: 'fullstack', label: 'Full Stack Apps' },
  { id: 'research', label: 'Research & ML' },
] as const;

function ProjectImage({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  return (
    <div
      className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 flex items-center justify-center text-4xl font-bold text-orange-500"
      aria-hidden
    >
      {project.title.charAt(0)}
    </div>
  );
}

const INITIAL_VISIBLE = 6;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const visibleProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_VISIBLE);
  const hasMore = filteredProjects.length > INITIAL_VISIBLE && !showAllProjects;

  return (
    <section id="projects" className="section bg-slate-50/50 dark:bg-slate-950/50 text-foreground w-full py-20 border-y border-slate-200/70 dark:border-slate-800/70">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300 text-xs font-bold uppercase tracking-wider mb-3">
            <FaFire className="w-3 h-3 text-orange-500" />
            Production SaaS &amp; AI Systems
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Projects &amp; Platforms
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Enterprise-grade platforms, full-stack applications, and AI integrations engineered for high performance and live production environments.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setShowAllProjects(false);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-orange-500 dark:text-white shadow-md shadow-slate-900/10'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => {
            const isFeatured = project.featured;

            return (
              <motion.div
                key={project.title}
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col cursor-pointer ${
                  isFeatured
                    ? 'bg-white dark:bg-slate-900 border-orange-300 dark:border-orange-500/40 hover:border-orange-500 shadow-lg shadow-orange-500/5 hover:shadow-xl hover:shadow-orange-500/10'
                    : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 hover:border-orange-400/60 shadow-sm hover:shadow-md'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                  <ProjectImage project={project} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    {project.badge ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md">
                        <FaFire className="w-2.5 h-2.5" />
                        {project.badge}
                      </span>
                    ) : (
                      <span />
                    )}

                    {project.liveUrl && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-900/80 text-white backdrop-blur-md border border-white/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>

                  {/* Bottom Title on Image */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 pointer-events-none">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-orange-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {project.tagline && (
                      <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-2 line-clamp-1">
                        {project.tagline}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features Preview (like TalentSync IQ 9 modules) */}
                    {project.features && project.features.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-1 text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-2">
                          <FaLayerGroup className="w-3 h-3 text-orange-500" />
                          <span>Core Capabilities ({project.features.length}):</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.features.slice(0, 4).map((f) => (
                            <span
                              key={f}
                              className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 font-semibold border border-teal-200/60 dark:border-teal-800"
                            >
                              <FaCheck className="w-2 h-2 text-teal-600" />
                              {f}
                            </span>
                          ))}
                          {project.features.length > 4 && (
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold">
                              +{project.features.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech stack & Action Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="rounded-md bg-slate-100 dark:bg-slate-800/80 px-1.5 py-0.5 text-[11px] font-medium text-slate-500">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-orange-600 dark:text-orange-400 group-hover:translate-x-0.5 transition-transform">
                      <span>View Details &amp; Full Tech Stack</span>
                      <FaArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAllProjects(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 hover:bg-orange-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold text-xs sm:text-sm transition-all shadow-sm"
            >
              <span>Explore All {filteredProjects.length} Projects</span>
              <FaArrowRight className="w-3.5 h-3.5 text-orange-500" />
            </button>
          </div>
        )}

        {/* Interactive Detailed Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
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
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur-md transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes className="w-4 h-4" />
                </button>

                {/* Banner Image */}
                <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
                  <ProjectImage project={selectedProject} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    {selectedProject.badge && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white mb-2 shadow-md">
                        <FaFire className="w-2.5 h-2.5" />
                        {selectedProject.badge}
                      </span>
                    )}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {selectedProject.tagline && (
                    <div className="p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 text-orange-900 dark:text-orange-200 font-medium text-xs sm:text-sm leading-relaxed">
                      {selectedProject.tagline}
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      About the Platform
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Modules & Key Capabilities Grid */}
                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                        <FaLayerGroup className="w-3.5 h-3.5 text-orange-500" />
                        Key Capabilities &amp; Integrated Modules ({selectedProject.features.length})
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedProject.features.map((feat) => (
                          <div
                            key={feat}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60"
                          >
                            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 mt-0.5">
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
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Cloud &amp; Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-orange-500 dark:hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        <span>Visit Live Site</span>
                      </a>
                    )}

                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold border border-slate-300 dark:border-slate-700 transition-all"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="ml-auto px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
