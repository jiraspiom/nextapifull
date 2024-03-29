import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <div className="max-w-3xl mx-auto p-4">
        <Navbar/>
        {/* <body className={inter.className}>{children}</body> */}
        <body className="mt-8">{children}</body>
      </div>
    </html>
  )
}
