import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-600 dark:bg-gradient-to-br dark:from-rose-500 dark:to-pink-500 shadow-sm text-white font-bold text-xs">
            HA
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Hamayal Ansari
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Full-Stack Web Developer · BS CS Student
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
          <Link href="/#hero" className="hover:text-rose-600 transition-colors">Home</Link>
          <Link href="/#projects" className="hover:text-rose-600 transition-colors">Projects</Link>
          <Link href="/#experience" className="hover:text-rose-600 transition-colors">Experience</Link>
          <Link href="/#education" className="hover:text-rose-600 transition-colors">Education</Link>
          <Link href="/services" className="hover:text-rose-600 transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-rose-600 transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="https://www.linkedin.com/in/hamayal-ansari-a12b10371/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#0A66C2] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/hamayalansari"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/923284024706"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-green-600 transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>
          <a
            href="mailto:hamayalansari10@gmail.com"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-600 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Hamayal Ansari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
