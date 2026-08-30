'use client';

import { motion } from 'framer-motion';
import {
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaBrain,
  FaCloud,
  FaCode,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiPostman,
  SiMongodb,
  SiTypescript,
  SiGooglecloud,
  SiExpress,
  SiPostgresql,
} from 'react-icons/si';

const skillCategories = [
  {
    category: 'Frontend & UI Architecture',
    description: 'Modern responsive interfaces, state management, and design systems.',
    icon: <FaReact className="w-5 h-5 text-[#61DAFB]" />,
    items: [
      { name: 'React.js', icon: <FaReact className="text-[#61DAFB] w-4 h-4" /> },
      { name: 'Next.js 14', icon: <SiNextdotjs className="text-slate-900 dark:text-white w-4 h-4" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6] w-4 h-4" /> },
      { name: 'JavaScript (ES6+)', icon: <FaJs className="text-[#F7DF1E] w-4 h-4" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4] w-4 h-4" /> },
      { name: 'Framer Motion', icon: <FaCode className="text-orange-500 w-4 h-4" /> },
    ],
  },
  {
    category: 'Backend & APIs',
    description: 'Scalable microservices, REST endpoints, and WebSocket communication.',
    icon: <FaNodeJs className="w-5 h-5 text-[#339933]" />,
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933] w-4 h-4" /> },
      { name: 'Express.js', icon: <SiExpress className="text-slate-900 dark:text-white w-4 h-4" /> },
      { name: 'Python', icon: <FaPython className="text-[#3776AB] w-4 h-4" /> },
      { name: 'Flask', icon: <SiFlask className="text-slate-900 dark:text-white w-4 h-4" /> },
      { name: 'RESTful APIs', icon: <FaCode className="text-orange-500 w-4 h-4" /> },
      { name: 'WebSockets / Realtime', icon: <FaCode className="text-teal-600 w-4 h-4" /> },
    ],
  },
  {
    category: 'AI, LLMs & Automation',
    description: 'Autonomous agents, candidate evaluation models, and workflow engines.',
    icon: <FaBrain className="w-5 h-5 text-orange-500" />,
    items: [
      { name: 'AI Agents & Automation', icon: <FaBrain className="text-orange-500 w-4 h-4" /> },
      { name: 'LLM Pipelines & Prompts', icon: <FaBrain className="text-amber-500 w-4 h-4" /> },
      { name: 'AI Candidate Fit Scoring', icon: <FaCode className="text-teal-600 w-4 h-4" /> },
      { name: 'Computer Vision (YOLOv8)', icon: <FaCode className="text-teal-500 w-4 h-4" /> },
      { name: 'No-Code Workflow Engines', icon: <FaCode className="text-orange-500 w-4 h-4" /> },
    ],
  },
  {
    category: 'Database, Cloud & DevOps',
    description: 'Cloud deployment on GCP, containerization, and data stores.',
    icon: <FaCloud className="w-5 h-5 text-teal-600" />,
    items: [
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248] w-4 h-4" /> },
      { name: 'PostgreSQL / SQL', icon: <SiPostgresql className="text-[#4169E1] w-4 h-4" /> },
      { name: 'Google Cloud (GCP)', icon: <SiGooglecloud className="text-[#4285F4] w-4 h-4" /> },
      { name: 'Docker', icon: <FaDocker className="text-[#2496ED] w-4 h-4" /> },
      { name: 'Git & GitHub Actions', icon: <FaGitAlt className="text-[#F05032] w-4 h-4" /> },
      { name: 'Postman & API QA', icon: <SiPostman className="text-[#FF6C37] w-4 h-4" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-white dark:bg-slate-900/40 text-foreground w-full py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-teal-50 dark:bg-teal-950/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 ring-1 ring-teal-200/80 dark:ring-teal-800 mb-3">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical Arsenal &amp; Stack
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A comprehensive overview of the full-stack engineering, AI technologies, and cloud tools I leverage to build scalable software.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, groupIndex) => (
            <motion.div
              key={cat.category}
              className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-orange-400/60 dark:hover:border-orange-500/50 transition-all duration-300 relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: groupIndex * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3.5 mb-2">
                <div className="p-2.5 rounded-2xl bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800 text-orange-600">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-50 dark:bg-slate-800/80 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-orange-400 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-all duration-150"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
