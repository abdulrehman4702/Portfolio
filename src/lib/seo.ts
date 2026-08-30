/**
 * SEO constants and base URL for metadata, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yourdomain.com).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-abdur-rehman.vercel.app';

export const siteName = 'Abdur Rehman';
export const siteTitle = 'Abdur Rehman - Full Stack Developer & AI Solutions Engineer';
export const siteDescription =
  'Full Stack Developer (MERN) and AI Solutions Engineer. React, Next.js, Node.js, MongoDB, TypeScript, AI Agents & LLMs, GCP. Flagship projects: TalentSync IQ (All-in-one AI platform), Airec, Mansha Transport, Unsh.';

export const defaultKeywords = [
  'Abdur Rehman',
  'Full Stack Developer',
  'AI Solutions Engineer',
  'MERN Stack',
  'React developer',
  'Node.js developer',
  'Next.js developer',
  'MongoDB',
  'TypeScript',
  'TalentSync IQ',
  'Airec',
  'Mansha Transport',
  'Unsh',
  'VisionGrid',
  'AI integration',
  'GCP deployment',
  'web development',
  'software engineer',
];

export const person = {
  name: 'Abdur Rehman',
  jobTitle: 'Full Stack Developer & AI Solutions Engineer',
  email: 'abdulrehman2001y@gmail.com',
  location: { addressLocality: 'Islamabad', addressRegion: 'Islamabad', addressCountry: 'PK' },
  url: siteUrl,
  image: `${siteUrl}/images/profile.jpg`,
  sameAs: [
    'https://www.linkedin.com/in/abdul-rehman-solution-engineer/',
    'https://github.com/abdulrehman4702',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'Node.js',
    'MongoDB',
    'TypeScript',
    'RESTful APIs',
    'AI/ML integration',
    'GCP',
    'Computer Vision',
  ],
  worksFor: { name: 'VisionGrid', url: 'https://vision-grid.vercel.app/' },
  alumniOf: [
    { name: 'Sir Syed CASE Institute of Technology', url: 'https://case.edu.pk' },
    { name: 'Punjab Group of Colleges, Mianwali' },
  ],
};

export const organization = {
  name: 'VisionGrid',
  url: 'https://vision-grid.vercel.app/',
  description: 'Your Vision, Our Code. Building scalable solutions with AI, automation, and modern web technologies.',
  founder: person.name,
};
