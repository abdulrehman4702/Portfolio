import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  overview?: string;
  objective?: string;
  technologies: string;
  features?: string;
  keyContributions?: string;
  imageUrl: string;
}

export function ProjectCard({ 
  title, 
  overview, 
  objective, 
  technologies, 
  features,
  keyContributions,
  imageUrl
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-md transition-shadow hover:shadow-xl overflow-hidden"
    >
      <motion.div
        className="h-48 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h3>
        
        <div className="space-y-4">
          {overview && (
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-200">Overview:</h4>
              <p className="text-gray-600 dark:text-gray-300">{overview}</p>
            </div>
          )}
          
          {objective && (
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-200">Objective:</h4>
              <p className="text-gray-600 dark:text-gray-300">{objective}</p>
            </div>
          )}
          
          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-200">Technologies:</h4>
            <p className="text-gray-600 dark:text-gray-300">{technologies}</p>
          </div>
          
          {features && (
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-200">Features:</h4>
              <p className="text-gray-600 dark:text-gray-300">{features}</p>
            </div>
          )}

          {keyContributions && (
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-200">Key Contributions:</h4>
              <p className="text-gray-600 dark:text-gray-300">{keyContributions}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}