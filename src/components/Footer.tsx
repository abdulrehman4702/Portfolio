'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="section bg-background text-foreground w-full py-16">
      <div className="container text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Abdur Rehman. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}