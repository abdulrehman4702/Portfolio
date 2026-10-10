'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { ThemeToggle } from './ThemeToggle';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Education', href: '/#education' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Warm the routes users click most so first open feels instant
  useEffect(() => {
    router.prefetch('/services');
    router.prefetch('/contact');
  }, [router]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const linkClass = (href: string) => {
    const isActive = pathname === href;
    return `rounded-full px-3 py-1.5 text-xs lg:text-sm font-medium transition-all duration-150 ${
      isActive
        ? 'bg-slate-900 text-white dark:bg-rose-950/40 dark:text-rose-300 font-semibold'
        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-rose-400'
    }`;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-[max(0.5rem,env(safe-area-inset-top))] sm:px-4 sm:pt-3 md:px-6 md:pt-4 pointer-events-none">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/85 shadow-md shadow-slate-900/[0.06] backdrop-blur-xl h-14 sm:h-16 px-3.5 sm:px-5 transition-all duration-300">
        <Link href="/" prefetch className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-rose-600 dark:bg-gradient-to-br dark:from-rose-500 dark:to-pink-500 shadow-md shadow-rose-600/25 dark:shadow-rose-500/30 text-white font-bold text-xs sm:text-sm group-hover:scale-105 transition-transform">
            HA
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Hamayal Ansari
            </span>
            <span className="text-[10px] font-semibold text-rose-700 dark:text-rose-400 hidden sm:block">
              Full-Stack · MERN · Design
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Primary">
          {navLinks.map((link) => {
            const isHash = link.href.includes('#');
            return isHash ? (
              <a key={link.name} href={link.href} className={linkClass(link.href)}>
                {link.name}
              </a>
            ) : (
              <Link key={link.name} href={link.href} prefetch className={linkClass(link.href)}>
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <ThemeToggle />

          <Link
            href="/contact"
            prefetch
            className="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-full font-semibold transition-all whitespace-nowrap bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 text-white shadow-md shadow-rose-600/25 dark:shadow-slate-900/15 px-3.5 py-1.5 text-xs sm:text-sm"
          >
            <span>Let&apos;s Talk</span>
            <FaArrowRight className="w-3 h-3" />
          </Link>

          <button
            type="button"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="pointer-events-auto fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 z-50 flex w-[min(18.5rem,85vw)] flex-col border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-500 text-white font-bold text-xs">
                  HA
                </div>
                <span className="font-bold text-sm text-slate-900 dark:text-white">
                  Hamayal Ansari
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
              {navLinks.map((link) => {
                const className =
                  'rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/30 dark:hover:text-rose-400 transition-colors';
                const isHash = link.href.includes('#');
                return isHash ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={className}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    prefetch
                    onClick={() => setIsOpen(false)}
                    className={className}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <a
                href="https://wa.me/923284024706"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                <FaWhatsapp className="w-3.5 h-3.5 text-rose-500" />
                WhatsApp
              </a>
              <Link
                href="/contact"
                prefetch
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-slate-900 text-white dark:bg-rose-500 py-2.5 text-xs font-semibold"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
