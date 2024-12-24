import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Award, Phone } from 'lucide-react';
import { NavLink } from './NavLink';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  const links = [
    { href: '#home', icon: <Home className="w-5 h-5" />, label: 'Home' },
    { href: '#about', icon: <User className="w-5 h-5" />, label: 'About' },
    { href: '#projects', icon: <Briefcase className="w-5 h-5" />, label: 'Projects' },
    { href: '#achievements', icon: <Award className="w-5 h-5" />, label: 'Achievements' },
    { href: '#contact', icon: <Phone className="w-5 h-5" />, label: 'Contact' }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`
      fixed z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm
      ${isMobile ? 'bottom-0 border-t dark:border-gray-700' : 'top-0 border-b dark:border-gray-700'}
    `}>
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: isMobile ? 20 : -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`
          flex items-center h-16
          ${isMobile ? 'justify-around' : 'justify-center space-x-8'}
        `}>
          {links.map(({ href, icon, label }) => (
            <NavLink
              key={href}
              href={href}
              icon={icon}
              label={label}
              isActive={activeSection === href.slice(1)}
              isMobile={isMobile}
              onClick={() => handleClick(href)}
            />
          ))}
        </div>
      </motion.div>
    </nav>
  );
}