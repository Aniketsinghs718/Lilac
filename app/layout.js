import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA',
  description: 'Licensed Clinical Psychologist in Santa Monica specializing in anxiety, panic, trauma, and burnout for high-achieving adults. CBT, EMDR, and mindfulness-based therapy. In-person and telehealth available for California residents.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
