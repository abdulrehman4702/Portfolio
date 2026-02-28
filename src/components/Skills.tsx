"use client";

import { motion } from "framer-motion";
import { FaPython, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiCplusplus,
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiGraphql,
  SiPostman,
  SiDjango,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: <FaPython className="text-[#3776AB] dark:text-[#FFD43B] w-5 h-5 flex-shrink-0" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E] w-5 h-5 flex-shrink-0" /> },
      { name: "C++", icon: <SiCplusplus className="text-[#00599C] w-5 h-5 flex-shrink-0" /> },
    ],
  },
  {
    category: "Front-End Development",
    items: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB] w-5 h-5 flex-shrink-0" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-foreground w-5 h-5 flex-shrink-0" /> },
      { name: "HTML, CSS, Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] w-5 h-5 flex-shrink-0" /> },
    ],
  },
  {
    category: "Back-End Development",
    items: [
      { name: "Flask", icon: <SiFlask className="text-foreground w-5 h-5 flex-shrink-0" /> },
      { name: "Django", icon: <SiDjango className="text-foreground w-5 h-5 flex-shrink-0" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933] w-5 h-5 flex-shrink-0" /> },
    ],
  },
  {
    category: "Development & Testing",
    items: [
      { name: "RESTful APIs", icon: <FaCode className="text-emerald-500 w-5 h-5 flex-shrink-0" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-[#E10098] w-5 h-5 flex-shrink-0" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37] w-5 h-5 flex-shrink-0" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section bg-background text-foreground w-full py-16"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              className="rounded-2xl border border-border bg-card p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base font-bold text-emerald-600 dark:text-emerald-400 mb-4 pb-2 border-b border-border">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-lg bg-muted/80 dark:bg-muted/40 px-3 py-2 text-sm font-medium text-foreground border border-border/50 hover:border-emerald-400/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 dark:hover:border-emerald-500/50 transition-colors"
                  >
                    {skill.icon}
                    <span className="truncate max-w-[140px]">{skill.name}</span>
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
