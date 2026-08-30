'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaFileDownload, FaArrowRight } from 'react-icons/fa';
import { ThemeToggle } from './ThemeToggle';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-[max(0.5rem,env(safe-area-inset-top))] sm:px-4 sm:pt-3 md:px-6 md:pt-4 pointer-events-none">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-slate-900/85 shadow-lg shadow-slate-900/5 backdrop-blur-xl h-14 sm:h-16 px-3.5 sm:px-5 transition-all duration-300">
        {/* Left: Brand Monogram & Name */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-md shadow-orange-500/30 text-white font-bold text-xs sm:text-sm group-hover:scale-105 transition-transform">
            AR
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Abdur Rehman
            </span>
            <span className="text-[10px] font-semibold text-orange-600 dark:text-orange-400 hidden sm:block">
              Full Stack & AI Engineer
            </span>
          </div>
        </Link>

        {/* Center: Nav Pills */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`rounded-full px-3 py-1.5 text-xs lg:text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-slate-800 dark:hover:text-orange-400'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-full font-semibold transition-all whitespace-nowrap bg-slate-900 hover:bg-slate-800 dark:bg-orange-500 dark:hover:bg-orange-600 text-white shadow-md shadow-slate-900/15 px-3.5 py-1.5 text-xs sm:text-sm"
          >
            <span>Hire Me</span>
            <FaArrowRight className="w-3 h-3" />
          </Link>

          <button
            type="button"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="pointer-events-auto fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="fixed inset-y-0 right-0 z-50 flex w-[min(18.5rem,85vw)] flex-col border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-4"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500 text-white font-bold text-xs">
                    AR
                  </div>
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    Abdur Rehman
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-orange-950/30 dark:hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200"
                >
                  <FaFileDownload className="w-3.5 h-3.5 text-orange-500" />
                  View CV
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-slate-900 text-white dark:bg-orange-500 py-2.5 text-xs font-semibold"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
