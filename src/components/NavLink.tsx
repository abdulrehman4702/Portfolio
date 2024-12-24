import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  isActive: boolean;
  isMobile: boolean;
  onClick: () => void;
}

export function NavLink({ href, icon, label, isActive, isMobile, onClick }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`
        relative flex items-center transition-colors duration-200
        ${isMobile ? 'flex-col text-xs space-y-1' : 'space-x-2'}
        ${isActive 
          ? 'text-blue-500 dark:text-blue-400' 
          : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
        }
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span>{label}</span>
      {isActive && (
        <motion.div
          className={`absolute bg-blue-500 
            ${isMobile ? 'top-0 left-1/2 w-1 h-1 -translate-x-1/2 rounded-full' : 'bottom-0 left-0 w-full h-0.5'}`}
          layoutId="activeSection"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.a>
  );
}