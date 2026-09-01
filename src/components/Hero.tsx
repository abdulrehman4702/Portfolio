'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import {
  FaArrowRight,
  FaFileDownload,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaExpand,
  FaTimes,
  FaCode,
  FaServer,
  FaBrain,
  FaCloud,
} from 'react-icons/fa';

export default function Hero() {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll Parallax & Animation Hooks
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const yText = useTransform(smoothProgress, [0, 1], [0, 85]);
  const yImage = useTransform(smoothProgress, [0, 1], [0, 35]);
  const scaleImage = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.03, 0.96]);
  const glowY = useTransform(smoothProgress, [0, 1], [0, 140]);

  const techBadges = [
    { label: 'Next.js 14 & React', icon: FaCode, color: 'text-orange-500' },
    { label: 'Node.js & Express APIs', icon: FaServer, color: 'text-emerald-500' },
    { label: 'AI Agents & LLM Workflows', icon: FaBrain, color: 'text-purple-500' },
    { label: 'GCP Cloud & Microservices', icon: FaCloud, color: 'text-teal-500' },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-x-clip pt-16 sm:pt-18 lg:pt-20 pb-3 sm:pb-4 lg:pb-5 min-h-[100dvh] lg:h-screen lg:max-h-[1080px] flex flex-col justify-between"
    >
      {/* Dynamic Background Ambient Glows reacting to scroll */}
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 w-full max-w-[1500px] h-[50vh] max-h-[500px] bg-gradient-to-b from-orange-500/15 via-teal-500/10 to-transparent blur-[140px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 top-24 w-80 h-80 rounded-full bg-orange-500/10 blur-[120px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-40 w-80 h-80 rounded-full bg-teal-500/10 blur-[120px] -z-10"
        aria-hidden="true"
      />

      {/* FULL-WIDTH VIEWPORT-FIT CONTAINER (No artificial max-w-7xl restriction) */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 relative z-10 flex-1 flex flex-col justify-between gap-2.5 sm:gap-3.5 lg:gap-4 min-h-0">
        
        {/* 1. CENTER STAGE: FULL-WIDTH 100% SPAN "DEVELOPER" TEXT + PARALLAX CUTOUT IMAGE */}
        <div className="relative flex-1 flex items-center justify-center min-h-[200px] sm:min-h-[260px] lg:min-h-[300px] max-h-[46vh] my-auto">
          
          {/* Full Screen Width Edge-to-Edge "DEVELOPER" Typography (Zero Clipping Guaranteed) */}
          <motion.div
            style={{ y: yText }}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full flex items-center justify-center select-none pointer-events-none z-0 px-2 sm:px-4"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1000 140"
              className="w-full h-auto max-h-[36vh] overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              <text
                x="500"
                y="85"
                textAnchor="middle"
                dominantBaseline="middle"
                textLength="970"
                lengthAdjust="spacingAndGlyphs"
                className="font-black fill-slate-200/90 dark:fill-slate-800/85 transition-colors duration-300 uppercase tracking-wide"
                style={{
                  fontWeight: 900,
                  fontSize: '120px',
                }}
              >
                DEVELOPER
              </text>
            </svg>
          </motion.div>

          {/* Floating Live Tech Badges (Left & Right) on wide screens */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:flex justify-between w-full max-w-7xl mx-auto px-4 z-20">
            {/* Left Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -35, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/5 max-w-[190px]"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                <span className="p-1.5 rounded-lg bg-orange-500/10 text-orange-500">
                  <FaCode className="w-3 h-3" />
                </span>
                <span>Full-Stack Core</span>
              </div>
              <p className="text-[10.5px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                React, Next.js 14 App Router, TypeScript, Node.js &amp; MongoDB.
              </p>
            </motion.div>

            {/* Right Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 35, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/5 max-w-[190px] text-right"
            >
              <div className="flex items-center justify-end gap-2 text-xs font-bold text-slate-900 dark:text-white">
                <span>AI &amp; Cloud Infra</span>
                <span className="p-1.5 rounded-lg bg-teal-500/10 text-teal-500">
                  <FaCloud className="w-3 h-3" />
                </span>
              </div>
              <p className="text-[10.5px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                GCP Deployments, AI Agent Pipelines &amp; Docker CI/CD.
              </p>
            </motion.div>
          </div>

          {/* Center Cutout Portrait (Layered with viewport-fitting height) */}
          <motion.div
            style={{ y: yImage, scale: scaleImage }}
            initial={{ opacity: 0, y: 30, scale: 0.94, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 h-full flex flex-col items-center justify-end"
          >
            <div
              className="relative group cursor-pointer h-full flex items-end justify-center"
              onClick={() => setIsPhotoModalOpen(true)}
              title="Click to expand photo"
            >
              {/* Soft atmospheric backlight halo */}
              <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-b from-orange-500/25 via-teal-500/15 to-transparent blur-2xl group-hover:scale-110 transition-transform duration-500 -z-10" />

              {/* Transparent Cutout Image */}
              <div className="relative h-[210px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[min(44vh,400px)] xl:h-[min(46vh,430px)] w-auto aspect-[3/4] flex items-end justify-center">
                <Image
                  src="/images/profile-transparent.png"
                  alt="Abdur Rehman - Full Stack Developer & AI Solutions Engineer"
                  width={600}
                  height={800}
                  priority
                  className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{
                    filter:
                      'drop-shadow(0 15px 25px rgba(0, 0, 0, 0.45)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
                  }}
                />

                {/* Hover Expand Badge */}
                <div className="absolute top-4 right-2 p-2 rounded-full bg-slate-900/80 dark:bg-black/80 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <FaExpand className="w-3 h-3" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. TECH HIGHLIGHTS PILL ROW */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 z-20 shrink-0"
        >
          {techBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.span
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.06 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur-md hover:border-orange-500/60 hover:shadow transition-all"
              >
                <Icon className={`w-3 h-3 ${badge.color}`} />
                <span>{badge.label}</span>
              </motion.span>
            );
          })}
        </motion.div>

        {/* 3. BOTTOM ROW: Social Badges (Left) | Bold Headline (Right) */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-3 sm:gap-4 z-20 shrink-0 text-center md:text-left">
          
          {/* Bottom Left: Social Badges & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2.5"
          >
            {/* LinkedIn Badge */}
            <a
              href="https://www.linkedin.com/in/abdul-rehman-solution-engineer/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0A66C2] dark:hover:border-[#0A66C2] shadow-sm hover:shadow transition-all text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200"
              aria-label="LinkedIn Profile"
            >
              <span className="flex h-4.5 w-4.5 items-center justify-center rounded bg-[#0A66C2] text-white text-[10px]">
                <FaLinkedinIn />
              </span>
              <span>LinkedIn</span>
            </a>

            {/* GitHub Badge */}
            <a
              href="https://github.com/abdulrehman4702"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-white shadow-sm hover:shadow transition-all text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200"
              aria-label="GitHub Profile"
            >
              <span className="flex h-4.5 w-4.5 items-center justify-center rounded bg-slate-900 dark:bg-slate-800 text-white text-[10px]">
                <FaGithub />
              </span>
              <span>GitHub</span>
            </a>

            {/* Email Contact Pill */}
            <a
              href="mailto:abdulrehman2001y@gmail.com"
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 shadow-sm hover:shadow transition-all text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200"
              aria-label="Email Abdur Rehman"
            >
              <span className="flex h-4.5 w-4.5 items-center justify-center rounded bg-orange-500 text-white text-[9px]">
                <FaEnvelope />
              </span>
              <span>Get in Touch</span>
            </a>

            {/* CV Download Pill */}
            <a
              href="/Rehman_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800/60 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-all text-[11px] sm:text-xs font-bold text-orange-700 dark:text-orange-300 shadow-sm"
            >
              <FaFileDownload className="w-3 h-3 text-orange-500" />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Bottom Right: Big Bold Role Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="text-center md:text-right"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white leading-none">
              FULL-STACK ARCHITECT
            </h2>
            <p className="text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.16em] text-orange-600 dark:text-orange-400 mt-1">
              &amp; AI Solutions Engineer
            </p>
          </motion.div>
        </div>

        {/* 4. BOTTOM BIO QUOTE & STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2.5 sm:pt-3 border-t border-slate-200/80 dark:border-slate-800/80 text-center md:text-left z-20 flex flex-col lg:flex-row items-center justify-between gap-2.5 sm:gap-3 lg:gap-6 shrink-0"
        >
          <div className="max-w-5xl space-y-1">
            <p className="text-[11px] sm:text-xs md:text-[13px] lg:text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
              &ldquo;Specializing in high-performance Full-Stack development across the{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">
                MERN Stack, Next.js 14, and GCP Cloud Architecture
              </strong>
              . I architect scalable microservices, resilient REST &amp; WebSocket APIs, and intelligent AI
              workflows designed for concurrency and security.&rdquo;
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                ⚡ 15+ Production Deliverables
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                🔒 Multi-Tenant &amp; Role-Based Security
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                🌐 International Client Platforms
              </span>
            </div>
          </div>

          <a
            href="#projects"
            className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-orange-500 dark:hover:bg-orange-600 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold text-white shadow-md shadow-slate-900/15 dark:shadow-orange-500/20 transition-all hover:scale-[1.02]"
          >
            <span>Explore Projects</span>
            <FaArrowRight className="h-3 w-3" />
          </a>
        </motion.div>

      </div>

      {/* Lightbox / High-Res Photo Modal */}
      <AnimatePresence>
        {isPhotoModalOpen && (
          <motion.div
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPhotoModalOpen(false)}
          >
            <motion.div
              className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-sm sm:max-w-md w-full shadow-2xl text-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsPhotoModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="w-4 h-4" />
              </button>

              <div className="relative w-64 h-80 mx-auto rounded-2xl overflow-hidden flex items-center justify-center mt-2">
                <Image
                  src="/images/profile-transparent.png"
                  alt="Abdur Rehman"
                  width={400}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="mt-4 text-xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                Abdur Rehman
              </h3>
              <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold mt-1">
                Full-Stack Developer &amp; AI Solution Engineer
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-3">
                <a
                  href="/Rehman_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-colors"
                >
                  Download CV
                </a>
                <button
                  type="button"
                  onClick={() => setIsPhotoModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
