import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';
import { JsonLd } from '../components/JsonLd';
import { siteUrl, siteTitle, siteDescription, defaultKeywords, siteName } from '../lib/seo';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Hamayal Ansari',
  },
  description: siteDescription,
  keywords: defaultKeywords,
  authors: [{ name: 'Hamayal Ansari', url: siteUrl }],
  creator: 'Hamayal Ansari',
  publisher: 'Hamayal Ansari',
  applicationName: siteName,
  manifest: '/manifest.json',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Hamayal Ansari Portfolio',
    title: 'Hamayal Ansari — Full-Stack Web Developer | MERN · C++ · Design',
    description:
      'BS CS student at UET Lahore. Full-Stack Web Developer (MERN), C++, C#, SQL, graphic design, gaming & animation — based in Lahore, Pakistan.',
    images: [
      {
        url: '/images/profile-transparent.webp',
        width: 360,
        height: 480,
        alt: 'Hamayal Ansari — Full-Stack Web Developer',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamayal Ansari — Full-Stack Web Developer | MERN · C++ · Design',
    description:
      'BS CS student at UET Lahore. Full-Stack Web Developer (MERN), C++, C#, SQL, graphic design, gaming & animation — based in Lahore, Pakistan.',
    images: ['/images/profile-transparent.webp'],
    creator: '@hamayal_ansari',
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f43f5e' },
    { media: '(prefers-color-scheme: dark)', color: '#be123c' },
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
                  if (saved !== 'light') {
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