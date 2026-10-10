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
    title: 'JobConnect',
    tagline: 'Full-stack Job Portal & Freelance Marketplace (MERN).',
    description:
      'A secure, modern platform connecting job seekers with employers — JWT auth, role-based access, resume uploads, dashboards, and real-time application status tracking.',
    features: [
      'JWT auth with Job Seeker / Employer roles',
      'Job posting, browse, search & filtering',
      'Resume upload with Cloudinary',
      'Dedicated dashboards & status tracking',
      'Protected API routes & responsive Tailwind UI',
    ],
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Tailwind'],
    image: '/images/projects/portfolio-web.webp',
    github: 'https://github.com/hamayalansari',
    featured: true,
    badge: '01 · MERN',
    category: 'fullstack',
  },
  {
    title: 'Aetheria — Ping Pong',
    tagline: 'Console-based interactive game design and development.',
    description:
      'Ping Pong game prototype — turning creative ideas into an engaging interactive experience with solid C++ programming fundamentals.',
    features: [
      'Interactive gameplay loops',
      'Custom game feel & polish',
      'C++-driven logic',
      'Design-to-build pipeline',
    ],
    technologies: ['C++', 'Game Dev'],
    image: '/images/projects/aetheria-pong.webp',
    featured: true,
    badge: '02 · Game Dev',
    category: 'gamedev',
  },
  {
    title: 'Super Market System',
    tagline: 'C# GUI Supermarket Management with database integration.',
    description:
      'Desktop supermarket management system with clear information hierarchy, practical workflows, and database-backed inventory flows.',
    features: [
      'Windows desktop GUI patterns',
      'Inventory-focused layouts',
      'Database integration',
      'C# application structure',
    ],
    technologies: ['C#', 'SQL', 'Desktop UI'],
    image: '/images/projects/supermarket.webp',
    featured: true,
    badge: '03 · Desktop',
    category: 'client',
  },
  {
    title: 'The Roast House',
    tagline: 'Coffee Shop Promotional Poster Design.',
    description:
      'Warm, premium promotional poster for The Roast House — cozy coffee-house aesthetic through typography, composition, and visual hierarchy.',
    features: [
      'Premium warm visual aesthetic',
      'Creative typography pairing',
      'Product-focused composition',
      'Branding-focused design',
    ],
    technologies: ['Graphic Design', 'Canva', 'Branding'],
    image: '/images/projects/black-sunday.webp',
    featured: false,
    badge: 'Poster Design',
    category: 'design',
  },
  {
    title: 'Crumble Cookie',
    tagline: 'Premium social media poster — black & gold brand concept.',
    description:
      'Modern black & gold social media poster for a Crumble Cookie brand concept — elegant typography and product presentation for digital campaigns.',
    features: [
      'Black & gold luxury aesthetic',
      'Product branding focus',
      'Social-media ready layout',
      'Typography & composition craft',
    ],
    technologies: ['Canva', 'Brand Identity', 'Social Design'],
    image: '/images/projects/chocolato.webp',
    featured: false,
    badge: 'Brand Design',
    category: 'design',
  },
  {
    title: 'Portfolio Landing Page',
    tagline: 'Premium black & gold personal portfolio UI.',
    description:
      'Personal portfolio landing page with clean UI, modern typography, and a responsive layout showcasing web development and graphic design skills.',
    features: [
      'Premium visual aesthetic',
      'Responsive layout',
      'Personal branding focus',
      'Clean typography & UI',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
    image: '/images/projects/novaarc.webp',
    featured: false,
    badge: 'Web Design',
    category: 'design',
  },
  {
    title: 'Ice Cream Brand Site',
    tagline: 'Modern brand website concept.',
    description:
      'A modern ice cream brand website concept combining creative design with functional, user-friendly web development.',
    features: [
      'Brand-forward visual design',
      'Responsive product pages',
      'Clean interactive UI',
      'Creative + technical blend',
    ],
    technologies: ['Web Design', 'Frontend'],
    image: '/images/projects/archiform.webp',
    featured: false,
    badge: 'Brand Web',
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
      className="relative overflow-x-clip py-16 sm:py-24 lg:py-28 bg-slate-50 dark:bg-slate-950/70 border-y border-slate-200 dark:border-slate-800/80"
    >
      {/* Ambient glows — subtle slate in light, rose in dark */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[550px] bg-gradient-to-b from-slate-200/50 via-transparent to-transparent dark:from-rose-500/15 dark:via-pink-500/10 dark:to-transparent blur-[150px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 top-1/4 w-80 h-80 rounded-full bg-slate-100 dark:bg-rose-500/10 blur-[120px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-1/4 w-80 h-80 rounded-full bg-slate-100 dark:bg-pink-500/10 blur-[120px] -z-10"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* 1. Clean Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 dark:bg-rose-500/20 px-3 py-1 text-xs font-bold text-rose-700 dark:text-rose-400 ring-1 ring-rose-200 dark:ring-rose-500/30 mb-2.5">
              <FaFire className="w-3 h-3 text-rose-600 dark:text-rose-500" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
              Selected Work
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              Web sites, game prototypes, desktop tools, and brand design — crafted with care.
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
                className="group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm shadow-slate-900/[0.04] hover:shadow-lg hover:border-rose-300 dark:hover:shadow-xl dark:hover:border-rose-500/60 transition-all duration-300"
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
                      loading="lazy"
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl font-black text-rose-500">
                      {project.title.charAt(0)}
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none">
                    {project.badge ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-slate-950/80 text-white backdrop-blur-md border border-white/15 shadow-sm">
                        <FaStar className="w-2.5 h-2.5 text-rose-400" />
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
                      className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight hover:text-rose-500 dark:hover:text-rose-400 transition-colors cursor-pointer leading-snug"
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
                          <FaCheck className="w-2.5 h-2.5 text-pink-500 shrink-0" />
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
                      <span className="px-1.5 py-0.5 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[10px] font-bold">
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
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-rose-500 dark:hover:bg-rose-600 text-white text-[11px] sm:text-xs font-bold transition-all shadow-xs active:scale-95"
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
                      className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors ml-auto py-1 px-1.5"
                    >
                      <span>Details</span>
                      <FaExpand className="w-2.5 h-2.5 text-rose-500" />
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
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-500 dark:hover:border-rose-500 shadow-md hover:shadow-lg text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold transition-all active:scale-95"
            >
              <span>
                {isExpanded
                  ? 'Show Less'
                  : `View All ${projects.length} Projects`}
              </span>
              {isExpanded ? (
                <FaChevronUp className="w-3 h-3 text-rose-500 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <FaChevronDown className="w-3 h-3 text-rose-500 transition-transform group-hover:translate-y-0.5" />
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
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl font-black text-rose-500">
                    {selectedModalProject.title.charAt(0)}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
                
                <div className="absolute bottom-5 left-6 right-6">
                  {selectedModalProject.badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-rose-500 to-pink-500 text-white mb-2 shadow-lg">
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
                  <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200 font-medium text-xs sm:text-sm leading-relaxed">
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
                      <FaLayerGroup className="w-3.5 h-3.5 text-rose-500" />
                      Key Capabilities &amp; Integrated Modules ({selectedModalProject.features.length})
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedModalProject.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60"
                        >
                          <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink-500/15 text-pink-600 dark:text-pink-400 mt-0.5">
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
                    <FaCode className="w-3.5 h-3.5 text-pink-500" />
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-rose-500 dark:hover:bg-rose-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95"
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
