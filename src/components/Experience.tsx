export function Experience() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Professional Experience</h2>
        
        <div className="space-y-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Software Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">PhebSoft, Islamabad (July 2024 – Present)</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Extracted insights from API documentation to design workflows.</li>
              <li>Created robust backend solutions using Flask APIs.</li>
              <li>Integrated APIs with React.js front-end, ensuring end-to-end functionality.</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Web Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Punjab Information Technology Board, Lahore (July 2023 – August 2023)</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Developed responsive and interactive web interfaces.</li>
              <li>Optimized cross-browser compatibility and enhanced UI performance.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}