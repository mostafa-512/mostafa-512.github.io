import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {

  title: 'Mostafa Abdalraheem | Front-end Developer',

  description: 'Portfolio of Mostafa Abdalraheem, a Front-end Developer specializing in React.js and Next.js. Building interactive, high-performance web applications.',

  keywords: ['Front-end Developer', 'React.js', 'Next.js', 'Web Developer', 'Mostafa Abdalraheem', 'Egypt', 'Portfolio'],

  authors: [{ name: 'Mostafa Abdalraheem' }],

  // 1. Google Site Verification (Added)

  verification: {

    google: 'J6jwNRu1fkQBYQ-482U_YRKx-zZqb2mc4xvKFxdU4hk',

  },

  

  // 3. Crawler Instructions (Added - Ensures Google indexes the site correctly)

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

  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mostafa-abdalraheem.netlify.app/'),

  openGraph: {

    title: 'Mostafa Abdalraheem | Front-end Developer',

    description: 'Portfolio of Mostafa Abdalraheem, a Front-end Developer specializing in React.js and Next.js.',

    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mostafa-abdalraheem.netlify.app/',

    siteName: 'Mostafa Portfolio',

    images: [

      {

        url: '/IMG.JPG',

        width: 1200,

        height: 630,

      },

    ],

    locale: 'en_US',

    type: 'website',

  },

  twitter: {

    card: 'summary_large_image',

    title: 'Mostafa Abdalraheem | Front-end Developer',

    description: 'Portfolio of Mostafa Abdalraheem, a Front-end Developer specializing in React.js and Next.js.',

    images: ['/IMG.JPG'],

  },

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {

  return (

    // ضفنا scroll-smooth هنا عشان يطبق على الموقع كله

    <html lang="en" className="scroll-smooth">

      <body className="bg-gradient-to-b from-[#14005c] to-[#7d00ff] text-white font-sans selection:bg-indigo-300 selection:text-[#14005c] overflow-x-hidden min-h-screen">

        {children}

      </body>

    </html>

  );

}





