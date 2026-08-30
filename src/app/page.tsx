'use client';

import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </motion.div>
    </div>
  );
}