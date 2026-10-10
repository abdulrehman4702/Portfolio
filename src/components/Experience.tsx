'use client';

import { motion } from 'framer-motion';
import { Briefcase, Code2, Sparkles } from 'lucide-react';

const experiences = [
  {
    number: '01',
    role: 'Web Development Intern',
    company: 'Arch Technology Company',
    period: 'Jul 2025 – Present',
    description:
      'Working on real-world projects to build scalable, responsive, and user-friendly web applications with HTML, CSS, JavaScript, React.js, Node.js, and modern development practices.',
    skills: ['React.js', 'Node.js', 'JavaScript', 'Git', 'Responsive UI'],
    icon: Briefcase,
  },
  {
    number: '02',
    role: 'Frontend Development Intern',
    company: 'CodeAlpha',
    period: 'Jul 2025',
    description:
      'Hands-on frontend internship focused on real projects — strengthening HTML, CSS, JavaScript, React.js, and responsive web design while learning from experienced professionals.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'UI Design'],
    icon: Code2,
  },
  {
    number: '03',
    role: 'Full-Stack Project Builder',
    company: 'Personal · Open to Work',
    period: 'Ongoing',
    description:
      'Building production-minded apps like JobConnect (MERN job portal), C# desktop tools, game prototypes, and brand design — learning the full flow from UI to secure APIs and deployment.',
    skills: ['MERN', 'C++', 'C#', 'Graphic Design', 'DSA'],
    icon: Sparkles,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-x-clip w-full py-20 sm:py-24 lg:py-28 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-slate-200/50 to-transparent dark:from-rose-500/[0.07] dark:to-transparent"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-rose-700 dark:text-rose-400 mb-4">
            <span className="h-px w-6 bg-rose-500/50 dark:bg-rose-400/60" aria-hidden />
            Experience
            <span className="h-px w-6 bg-rose-500/50 dark:bg-rose-400/60" aria-hidden />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Internships &amp; growth
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Learning by building — real projects, real stacks, continuous improvement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-7 lg:p-8 shadow-sm shadow-slate-900/[0.04] transition-all duration-300 hover:border-slate-300 hover:shadow-lg dark:border-slate-700/80 dark:bg-slate-900 dark:shadow-none dark:hover:border-rose-500/50 dark:hover:bg-slate-900 dark:hover:shadow-[0_0_0_1px_rgba(244,63,94,0.15)]"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span className="font-black text-5xl sm:text-6xl leading-none tracking-tighter text-slate-200 dark:text-white/10 select-none group-hover:text-rose-200 dark:group-hover:text-rose-500/25 transition-colors">
                    {item.number}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-md shadow-rose-600/25 dark:bg-rose-500 dark:shadow-rose-500/30 group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                </div>

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-rose-700 dark:text-rose-400 mb-2">
                  {item.period}
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                  {item.role}
                </h3>
                <p className="mt-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {item.company}
                </p>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700/80 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
