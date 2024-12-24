export function Skills() {
  const skills = {
    'Backend Development': ['Flask API', 'MongoDB', 'Node.js', 'Express'],
    'Frontend Development': ['React.js', 'Next.js', 'HTML', 'CSS', 'JavaScript'],
    'Specialized Skills': ['Image Processing', 'Computer Vision', 'API Documentation'],
    'Additional Expertise': ['Cross-Platform Compatibility', 'Web Performance Optimization']
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Core Competencies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="text-gray-600 dark:text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}