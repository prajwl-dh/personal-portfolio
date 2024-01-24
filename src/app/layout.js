import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import Footer from '@/components/footer/Footer'
import Providers from './provider'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Prajwal's Portfolio",
  description: 'Created using React.js, Next.js, and TailwindCSS',
}

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
      </body>
    </html>
  )
}
