import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Random Reads',
  description: 'Random blogs that might be interesting to you',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-auto flex flex-col min-h-screen min-w-screen items-center`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
