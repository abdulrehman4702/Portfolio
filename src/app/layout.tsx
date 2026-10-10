import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';
import { JsonLd } from '../components/JsonLd';
import { siteUrl, siteTitle, siteDescription, defaultKeywords, siteName } from '../lib/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Abdur Rehman',
  },
  description: siteDescription,
  keywords: defaultKeywords,
  authors: [{ name: 'Abdur Rehman', url: siteUrl }],
  creator: 'Abdur Rehman',
  publisher: 'Abdur Rehman',
  applicationName: siteName,
  manifest: '/manifest.json',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Abdur Rehman Portfolio',
    title: 'Abdur Rehman — Full-Stack Developer & AI Solutions Engineer',
    description:
      'Explore projects, SaaS architectures, and full-stack solutions built with React, Next.js 14, Node.js, MongoDB, and GCP Cloud Architecture by Abdur Rehman.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Abdur Rehman — Full-Stack Developer & AI Solutions Engineer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdur Rehman — Full-Stack Developer & AI Solutions Engineer',
    description:
      'Explore projects, SaaS architectures, and full-stack solutions built with React, Next.js 14, Node.js, MongoDB, and GCP Cloud Architecture by Abdur Rehman.',
    images: ['/opengraph-image'],
    creator: '@abdur_rehman',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f172a' },
    { media: '(prefers-color-scheme: dark)', color: '#090d16' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <JsonLd />
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}