import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type PropsWithChildren } from 'react';

import './main.css';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    template: '%s | Nature of Code Course',
    default: 'Home',
  },
  description:
    'Site to archive and demonstrate work done while working through the Nature of Code course',
  metadataBase: new URL('https://www.siteurl.com'),
  keywords: [
    'nature of code',
    'p5',
    'p5.js',
    'creative coding',
    'generative art',
    'generative design',
  ],
  openGraph: {
    title: 'Nature of Code Course',
    description:
      'Site to archive and demonstrate work done while working through the Nature of Code course',
    siteName: 'Nature of Code Course',
    url: 'https://www.siteurl.com',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} bg-gray-800 font-sans text-gray-200 antialiased selection:bg-gray-300 selection:text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
