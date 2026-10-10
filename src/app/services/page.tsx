import Link from 'next/link';
import {
  FaCode,
  FaPalette,
  FaGamepad,
  FaLaptopCode,
  FaArrowRight,
  FaWhatsapp,
  FaCheck,
} from 'react-icons/fa';

export const dynamic = 'force-static';

const serviceList = [
  {
    number: '01',
    title: 'Full-Stack Web Development',
    subtitle: 'MERN Stack',
    icon: FaLaptopCode,
    summary: 'End-to-end apps from API to polished UI — built to ship.',
    items: [
      'MongoDB, Express, React & Node.js',
      'JWT auth, RBAC & protected routes',
      'Dashboards, uploads & REST APIs',
    ],
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    number: '02',
    title: 'Frontend & UI Development',
    subtitle: 'Responsive interfaces',
    icon: FaCode,
    summary: 'Clean layouts that feel effortless on every screen.',
    items: [
      'HTML, CSS, JavaScript & React',
      'Usability-first visual polish',
      'Internship-built real project flow',
    ],
    tags: ['React', 'Tailwind', 'Responsive', 'UI'],
  },
  {
    number: '03',
    title: 'Graphic Design & Branding',
    subtitle: 'Visual identity',
    icon: FaPalette,
    summary: 'Posters and creatives that make a brand feel premium.',
    items: [
      'Promo posters & social creatives',
      'Typography & visual hierarchy',
      'Brand-focused composition',
    ],
    tags: ['Canva', 'Branding', 'Posters', 'Social'],
  },
  {
    number: '04',
    title: 'C++ · C# · Game Prototypes',
    subtitle: 'Code + play',
    icon: FaGamepad,
    summary: 'Interactive systems and desktop tools with solid logic.',
    items: [
      'C++ game prototypes (Ping Pong)',
      'C# desktop apps with SQL',
      'DSA, gaming & animation growth',
    ],
    tags: ['C++', 'C#', 'SQL', 'Game Dev'],
  },
];

const processSteps = [
  { step: '01', label: 'Discover', text: 'Goals, audience & scope' },
  { step: '02', label: 'Design', text: 'UI, flow & visual direction' },
  { step: '03', label: 'Build', text: 'Clean code & solid features' },
  { step: '04', label: 'Ship', text: 'Polish, deploy & iterate' },
];

export default function Services() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-50 text-foreground dark:bg-slate-950">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-rose-100/70 via-slate-50 to-transparent dark:from-rose-500/[0.08] dark:via-slate-950 dark:to-transparent"
        aria-hidden
      />

      <section className="relative z-10 pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-rose-700 dark:text-rose-400 mb-4">
              <span className="h-px w-6 bg-rose-500/50" aria-hidden />
              What I Offer
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Skills &amp; services that turn ideas into products
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              BS CS student at UET Lahore — open to internships, freelance, and collaborative
              projects across web, design, and interactive development.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                prefetch
                className="inline-flex items-center gap-2 rounded-full bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-rose-600/25 transition-colors"
              >
                Let&apos;s Talk
                <FaArrowRight className="h-3 w-3" />
              </Link>
              <a
                href="https://wa.me/923284024706"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 hover:border-rose-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-rose-500/40 transition-colors"
              >
                <FaWhatsapp className="h-3.5 w-3.5 text-green-600" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {serviceList.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.number}
                  className="group relative flex flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-7 shadow-sm shadow-slate-900/[0.04] transition-all duration-300 hover:border-rose-300 hover:shadow-lg dark:border-slate-700/80 dark:bg-slate-900 dark:shadow-none dark:hover:border-rose-500/45"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span className="font-black text-4xl sm:text-5xl leading-none tracking-tighter text-slate-200 dark:text-white/10 select-none group-hover:text-rose-200 dark:group-hover:text-rose-500/25 transition-colors">
                      {service.number}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-md shadow-rose-600/25 dark:bg-rose-500 dark:shadow-rose-500/30 group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-rose-700 dark:text-rose-400 mb-1.5">
                    {service.subtitle}
                  </p>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {service.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5 list-none p-0 m-0 flex-1">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400">
                          <FaCheck className="h-2 w-2" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700/80 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 sm:mt-16 rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-700/80 dark:bg-slate-900">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-rose-700 dark:text-rose-400 mb-2">
                  How I work
                </p>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  A simple process, clear results
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xs sm:text-right">
                From first conversation to a shipped product — focused and collaborative.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 dark:border-slate-700/80 dark:bg-slate-950/60"
                >
                  <span className="text-xs font-black text-rose-600 dark:text-rose-400">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-sm font-bold text-slate-900 dark:text-white">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 sm:mt-10 relative overflow-hidden rounded-[1.75rem] bg-slate-900 dark:bg-gradient-to-r dark:from-rose-600 dark:to-pink-600 px-6 py-8 sm:px-10 sm:py-10">
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-rose-500/30 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Have a project in mind?
                </h2>
                <p className="mt-2 text-sm text-slate-300 dark:text-white/85 max-w-md">
                  Tell me what you&apos;re building — I&apos;d love to help bring it to life.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  prefetch
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-900 hover:bg-rose-50 transition-colors"
                >
                  Get in Touch
                  <FaArrowRight className="h-3 w-3" />
                </Link>
                <a
                  href="https://wa.me/923284024706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-white/15 transition-colors"
                >
                  <FaWhatsapp className="h-3.5 w-3.5" />
                  +92 328 4024706
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
