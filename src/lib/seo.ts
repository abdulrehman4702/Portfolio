/**
 * SEO constants and base URL for metadata, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yourdomain.com).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://abdur-rehman-portfolio.vercel.app';

export const siteName = 'Abdur Rehman';
export const siteTitle = 'Abdur Rehman - Full Stack Developer (MERN)';
export const siteDescription =
  'Full Stack Developer (MERN) and Solution Engineer. React, Next.js, Node.js, MongoDB, TypeScript. AI/ML integration, GCP deployment. Projects: Mansha Transport, Airec, Talent Sync IQ, Unsh. Islamabad, Pakistan.';

export const defaultKeywords = [
  'Abdur Rehman',
  'Full Stack Developer',
  'MERN Stack',
  'React developer',
  'Node.js developer',
  'Next.js developer',
  'MongoDB',
  'TypeScript',
  'Pakistan developer',
  'Islamabad developer',
  'Lahore developer',
  'AI integration',
  'GCP deployment',
  'Mansha Transport',
  'Airec',
  'Talent Sync IQ',
  'Unsh',
  'VisionGrid',
  'web development',
  'software engineer',
  'hire full stack developer',
  'MERN developer portfolio',
  'React Node.js developer',
  'frontend backend developer',
  'E-commerce developer',
  'recruitment platform developer',
];

export const person = {
  name: 'Abdur Rehman',
  jobTitle: 'Full Stack Developer (MERN)',
  email: 'abdulrehman2001y@gmail.com',
  location: { addressLocality: 'Islamabad', addressRegion: 'Islamabad', addressCountry: 'PK' },
  url: siteUrl,
  image: `${siteUrl}/images/profile.jpg`,
  sameAs: [
    'https://www.linkedin.com/in/abdur-rehman-software-engineer/',
    'https://github.com/Abdur-Rehman-01',
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
