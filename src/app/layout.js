import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: "Prajwal's Portfolio",
  description: 'Created using React.js, Next.js, and TailwindCSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head></head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
