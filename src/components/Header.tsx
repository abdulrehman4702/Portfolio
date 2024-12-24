import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProfileImage } from './ProfileImage';

export function Header() {
  const whatsappNumber = '923346828900';
  
  return (
    <header id="home" className="text-center pt-20 md:pt-24 pb-16 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white">
      <ProfileImage />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold mb-2">Abdur Rehman</h1>
        <p className="text-xl mb-6">Solution Engineer | Software Developer | API Integration Specialist</p>
        <p className="mb-2">📍 Lahore, Pakistan</p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-4 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <a 
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer" 
          className="flex items-center hover:text-blue-200 transition-colors"
        >
          <Phone className="w-4 h-4 mr-2" />
          +92-334-6828900
        </a>
        <a 
          href="mailto:abdulrehman2001y@gmail.com" 
          className="flex items-center hover:text-blue-200 transition-colors"
        >
          <Mail className="w-4 h-4 mr-2" />
          Email
        </a>
        <a 
          href="https://linkedin.com/in/abdul-rehman-165430230" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center hover:text-blue-200 transition-colors"
        >
          <Linkedin className="w-4 h-4 mr-2" />
          LinkedIn
        </a>
        <a 
          href="https://github.com/abdulrehman4702" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center hover:text-blue-200 transition-colors"
        >
          <Github className="w-4 h-4 mr-2" />
          GitHub
        </a>
      </motion.div>
    </header>
  );
}