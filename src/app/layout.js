import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title:
    'Prajwal Dhungana - Frontend Engineer & Web Developer | Grand Prairie, TX',
  description:
    "Meet Prajwal Dhungana, a dedicated Frontend Engineer based in Grand Prairie, TX, specializing in the MERN stack, Next.js, and Tailwind CSS. With a self-taught background, Prajwal is committed to continuous learning, ensuring his web development skills are both cutting-edge and versatile. Explore Prajwal's portfolio to discover innovative web solutions that blend modern design with functional excellence.",
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
      </body>
    </html>
  );
}
