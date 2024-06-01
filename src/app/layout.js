import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AnimeList',
  description: 'Website untuk mencari anime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>TESTING</div>
        {children}
        </body>
    </html>
  )
}
