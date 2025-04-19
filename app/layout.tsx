import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neurobot.ai - AI-Powered Currency Trading Bot',
  description: 'Advanced AI-powered currency trading bot with 24/7 automation and backtested strategies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 