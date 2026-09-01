'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
  FaCheck,
  FaLayerGroup,
  FaArrowRight,
  FaArrowLeft,
  FaFire,
  FaStar,
  FaCode,
  FaServer,
  FaBrain,
  FaCloud,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
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

const categories = [
  { id: 'all', label: 'All Showcase' },
  { id: 'ai', label: 'AI & Platforms' },
  { id: 'client', label: 'Client & Enterprise' },
  { id: 'fullstack', label: 'Full-Stack Apps' },
  { id: 'research', label: 'Research & ML' },
] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  // Reset index when filter changes if out of bounds
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Automatic slide rotation every 5 seconds (pauses on hover or when modal is open)
  useEffect(() => {
    if (!isAutoPlay || isHovered || selectedModalProject !== null || filteredProjects.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered, selectedModalProject, filteredProjects.length, currentIndex]);

  const activeProject = filteredProjects[currentIndex] || filteredProjects[0] || projects[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section
      id="projects"
      className="relative overflow-x-clip py-20 lg:py-28 min-h-screen flex flex-col justify-between bg-slate-50/70 dark:bg-slate-950/70 border-y border-slate-200/80 dark:border-slate-800/80"
    >
      {/* 1. Dynamic Ambient Background Glows */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1100px] h-[550px] bg-gradient-to-b from-orange-500/15 via-teal-500/10 to-transparent blur-[140px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 top-1/3 w-80 h-80 rounded-full bg-orange-500/10 blur-[120px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-1/4 w-80 h-80 rounded-full bg-teal-500/10 blur-[120px] -z-10"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 flex-1 flex flex-col justify-between">
        
        {/* 2. Top Header & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-600 dark:text-orange-400 ring-1 ring-orange-500/30">
                <FaFire className="w-3 h-3 text-orange-500 animate-pulse" />
                Auto-Showcase
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {String(currentIndex + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')}
              </span>
              {/* Active countdown pulse bar */}
              <div className="w-16 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden ml-1">
                <motion.div
                  key={`${activeProject.title}-${isHovered}`}
                  initial={{ width: '0%' }}
                  animate={{ width: isHovered || !isAutoPlay ? '0%' : '100%' }}
                  transition={{ duration: 5.5, ease: 'linear' }}
                  className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
              Featured Platforms &amp; Systems
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? projects.length
                  : projects.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="projectActiveCategory"
                      className="absolute inset-0 bg-slate-900 dark:bg-orange-500 rounded-xl shadow-md shadow-slate-900/15 dark:shadow-orange-500/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                  <span
                    className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. CENTER HERO STAGE: MASSIVE "PROJECTS" BACKGROUND + ACTIVE PROJECT SHOWCASE */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative my-auto py-8 lg:py-12 flex items-center justify-center min-h-[500px] lg:min-h-[580px]"
        >
          
          {/* Massive Responsive Background Typography: "PROJECTS" */}
          <div
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden"
            aria-hidden="true"
          >
            <span className="w-full font-black tracking-[0.04em] sm:tracking-[0.08em] md:tracking-[0.12em] lg:tracking-[0.16em] text-[12vw] xs:text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[170px] xl:text-[210px] leading-none uppercase text-slate-200/90 dark:text-slate-800/80 text-center whitespace-nowrap block drop-shadow-sm transition-colors duration-300">
              PROJECTS
            </span>
          </div>

          {/* Active Project Hero Showcase Stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              {/* Left Column: Project Overview & Capabilities (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
                
                <div className="flex flex-wrap items-center gap-2">
                  {activeProject.badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20">
                      <FaStar className="w-3 h-3" />
                      {activeProject.badge}
                    </span>
                  )}
                  {activeProject.liveUrl && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Production
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
                    {activeProject.title}
                  </h3>
                  {activeProject.tagline && (
                    <p className="text-xs sm:text-sm font-semibold text-orange-600 dark:text-orange-400 mt-1">
                      {activeProject.tagline}
                    </p>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeProject.description}
                </p>

                {/* Core Capabilities Chips */}
                {activeProject.features && (
                  <div className="pt-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-2">
                      <FaLayerGroup className="w-3 h-3 text-orange-500" />
                      <span>Architecture Modules ({activeProject.features.length}):</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.features.slice(0, 4).map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-medium shadow-xs"
                        >
                          <FaCheck className="w-2.5 h-2.5 text-teal-500" />
                          {f}
                        </span>
                      ))}
                      {activeProject.features.length > 4 && (
                        <span className="text-[11px] px-2 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold">
                          +{activeProject.features.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Direct Action Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-orange-500 dark:hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-slate-900/15 dark:shadow-orange-500/20 transition-transform hover:scale-105"
                    >
                      <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
                      <span>Visit Live Platform</span>
                    </a>
                  )}

                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-white text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-all shadow-sm"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedModalProject(activeProject)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <FaExpand className="w-3 h-3 text-orange-500" />
                    <span>Case Study</span>
                  </button>
                </div>

              </div>

              {/* Center/Right Column: Large High-Res Platform Mockup (7 cols) */}
              <div className="lg:col-span-7 relative flex items-center justify-center">
                
                {/* Backlight Glow */}
                <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-tr from-orange-500/20 via-teal-500/15 to-transparent blur-2xl -z-10" />

                {/* Device Showcase Frame */}
                <div
                  onClick={() => setSelectedModalProject(activeProject)}
                  className="group relative w-full h-[260px] sm:h-[340px] md:h-[400px] lg:h-[430px] rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-2xl cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
                  title="Click to expand case study"
                >
                  {activeProject.image ? (
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl font-black text-orange-500">
                      {activeProject.title.charAt(0)}
                    </div>
                  )}

                  {/* Gradient bottom bar overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/20 pointer-events-none" />

                  {/* Floating Expand Icon */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <FaExpand className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Tech Pills Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-1.5 pointer-events-none">
                    {activeProject.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/85 text-white backdrop-blur-md text-[11px] font-semibold border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {activeProject.technologies.length > 5 && (
                      <span className="px-2 py-1 rounded-lg bg-orange-500/85 text-white backdrop-blur-md text-[11px] font-bold">
                        +{activeProject.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Left/Right Floating Navigation Arrows */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white shadow-xl hover:scale-110 hover:border-orange-500 transition-all z-20"
                  aria-label="Previous project"
                >
                  <FaChevronLeft className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white shadow-xl hover:scale-110 hover:border-orange-500 transition-all z-20"
                  aria-label="Next project"
                >
                  <FaChevronRight className="w-3.5 h-3.5" />
                </button>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* 4. Bottom Interactive Project Switcher Strip */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Quick Switch Projects ({filteredProjects.length})
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 text-slate-700 dark:text-slate-300 transition-all text-xs font-bold flex items-center gap-1"
              >
                <FaArrowLeft className="w-2.5 h-2.5" />
                <span>Prev</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 text-slate-700 dark:text-slate-300 transition-all text-xs font-bold flex items-center gap-1"
              >
                <span>Next</span>
                <FaArrowRight className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>

          {/* Thumbnails list */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {filteredProjects.map((p, idx) => {
              const isCurrent = p.title === activeProject.title;
              return (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`p-2.5 rounded-2xl text-left transition-all duration-200 flex flex-col justify-between border ${
                    isCurrent
                      ? 'bg-white dark:bg-slate-900 border-orange-500 shadow-md shadow-orange-500/10 ring-2 ring-orange-500/20'
                      : 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-orange-400/60'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span
                      className={`text-[10px] font-bold ${
                        isCurrent ? 'text-orange-500' : 'text-slate-400'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {p.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold truncate max-w-[80px]">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white truncate w-full">
                    {p.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* 5. Interactive Full Case Study Modal */}
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
              <div className="relative h-64 sm:h-72 w-full bg-slate-950 overflow-hidden">
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
                      <FaFire className="w-2.5 h-2.5" />
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-orange-500 dark:hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105"
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold border border-slate-300 dark:border-slate-700 transition-all hover:scale-105"
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
