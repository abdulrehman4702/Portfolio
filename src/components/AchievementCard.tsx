import { motion } from 'framer-motion';

interface AchievementCardProps {
  title: string;
  description: string;
  icon: string;
}

export function AchievementCard({ title, description, icon }: AchievementCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}