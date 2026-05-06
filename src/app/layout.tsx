import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Mostafa Abdalraheem | Front-end Developer',
  description: 'Portfolio of Mostafa Abdalraheem, a Front-end Developer specializing in React.js and Next.js. Building interactive, high-performance web applications.',
  keywords: ['Front-end Developer', 'React.js', 'Next.js', 'Web Developer', 'Mostafa Abdalraheem', 'Egypt', 'Portfolio'],
  authors: [{ name: 'Mostafa Abdalraheem' }],
  openGraph: {
    title: 'Mostafa Abdalraheem | Front-end Developer',
    description: 'Portfolio of Mostafa Abdalraheem, a Front-end Developer specializing in React.js and Next.js.',
    url: 'https://yourdomain.com', // استبدله برابط موقعك بعد الرفع
    siteName: 'Mostafa Portfolio',
    images: [
      {
        url: '/myImg.jpg', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
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


