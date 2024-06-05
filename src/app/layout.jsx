import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

// KASIH NAMA DI ATAS WEBNYA
export const metadata = {
  title: 'CloneNimeList',
  description: 'Website untuk mencari anime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
