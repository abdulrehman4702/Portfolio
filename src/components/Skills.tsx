'use client';

import { motion } from 'framer-motion';
import { FaPython, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiCplusplus, SiNextdotjs, SiTailwindcss, SiFlask, SiGraphql, SiPostman, SiDjango, SiApachenetbeanside } from 'react-icons/si';

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', icon: <FaPython className="text-[#3776AB] dark:text-[#FFD43B]" /> },
      { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E] dark:text-[#F7DF1E]" /> },
      { name: 'C++', icon: <SiCplusplus className="text-[#00599C] dark:text-[#00599C]" /> },
    ],
  },
  {
    category: 'Front-End Development',
    items: [
      { name: 'React.js', icon: <FaReact className="text-[#61DAFB] dark:text-[#61DAFB]" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: 'HTML, CSS, Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4] dark:text-[#06B6D4]" /> },
    ],
  },
  {
    category: 'Back-End Development',
    items: [
      { name: 'Flask', icon: <SiFlask className="text-black dark:text-white" /> },
      { name: 'Django', icon: <SiDjango className="text-black dark:text-white" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933] dark:text-[#339933]" /> },
    ],
  },
  {
    category: 'API Development & Testing',
    items: [
      { name: 'RESTful APIs', icon: <SiApachenetbeanside className="text-black dark:text-white" /> },
      { name: 'GraphQL', icon: <SiGraphql className="text-[#E10098] dark:text-[#E10098]" /> },
      { name: 'Postman', icon: <SiPostman className="text-[#FF6C37] dark:text-[#FF6C37]" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-background text-foreground w-full py-16">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{skillGroup.category}</h3>
              <ul className="mt-4 space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill.name} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    {skill.icon && <span>{skill.icon}</span>}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}