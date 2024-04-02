import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title:
    'Prajwal Dhungana - Frontend Engineer | MERN Specialist | Full-Stack Skills with Node.js and Next.js | Open Source Contributor ',
  description:
    "Meet Prajwal Dhungana, a dedicated Frontend Engineer and Open Source Contributor specializing in the MERN stack, Next.js, and Tailwind CSS. With full-stack skills including Node.js, Prajwal is committed to continuous learning, ensuring his web development expertise remains cutting-edge and versatile. Explore Prajwal's portfolio for innovative web solutions blending modern design with functional excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.className}>
      <head></head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
