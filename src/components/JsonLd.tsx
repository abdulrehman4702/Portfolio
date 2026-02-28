import { siteUrl, person, siteName, organization } from '@/lib/seo';

/**
 * JSON-LD structured data for Person, Organization, and WebSite (rich results, knowledge panel).
 */
export function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    url: person.url,
    image: person.image,
    email: person.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: person.location.addressLocality,
      addressRegion: person.location.addressRegion,
      addressCountry: person.location.addressCountry,
    },
    sameAs: person.sameAs,
    knowsAbout: person.knowsAbout,
    worksFor: {
      '@type': 'Organization',
      name: person.worksFor.name,
      url: person.worksFor.url,
    },
    alumniOf: person.alumniOf?.map((org) =>
      typeof org === 'object' && 'name' in org
        ? { '@type': 'EducationalOrganization', name: org.name, ...(org.url && { url: org.url }) }
        : { '@type': 'EducationalOrganization', name: org }
    ),
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organization.name,
    url: organization.url,
    description: organization.description,
    founder: { '@type': 'Person', name: organization.founder },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: 'Portfolio of Abdur Rehman - Full Stack Developer (MERN), React, Next.js, Node.js, AI/ML, GCP.',
    author: personSchema,
    publisher: organizationSchema,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
