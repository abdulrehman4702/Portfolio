/**
 * SEO constants and base URL for metadata, sitemap, and JSON-LD.
 */
export const siteUrl = 'https://hamayalansari.dev';

export const linkedInUrl = 'https://www.linkedin.com/in/hamayal-ansari-a12b10371/';

export const siteName = 'Hamayal Ansari';
export const siteTitle =
  'Hamayal Ansari — Full-Stack Web Developer | MERN · C++ · C# · Design';
export const siteDescription =
  'BS CS student at UET Lahore. Full-Stack Web Developer (MERN), C++, C#, SQL, graphic design, gaming & animation — building modern, creative digital experiences from Lahore, Pakistan.';

export const defaultKeywords = [
  'Hamayal Ansari',
  'Full-Stack Web Developer',
  'MERN Stack',
  'UET Lahore',
  'C++',
  'C#',
  'SQL',
  'React',
  'Node.js',
  'Game Development',
  'Graphic Designer',
  'Web Development',
  'Lahore',
  'BS CS Student',
];

export const person = {
  name: 'Hamayal Ansari',
  jobTitle: 'Full-Stack Web Developer | BS CS Student',
  email: 'hamayalansari10@gmail.com',
  location: {
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  url: siteUrl,
  image: `${siteUrl}/images/profile-transparent.webp`,
  sameAs: [linkedInUrl, 'https://github.com/hamayalansari'],
  knowsAbout: [
    'MERN Stack',
    'Web Development',
    'C++',
    'C#',
    'SQL',
    'React',
    'Node.js',
    'Game Development',
    'Graphic Design',
    'DSA',
  ],
  worksFor: { name: 'Hamayal Ansari', url: siteUrl },
  alumniOf: [
    {
      name: 'University of Engineering and Technology, Lahore',
      url: 'https://www.uet.edu.pk',
    },
    { name: 'Lahore College for Women University' },
  ],
};

export const organization = {
  name: 'Hamayal Ansari',
  url: siteUrl,
  description:
    'Full-stack web development, graphic design, and creative game projects by Hamayal Ansari.',
  founder: person.name,
};
