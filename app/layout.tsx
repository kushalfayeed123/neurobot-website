import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neurobot.ai - AI-Powered Currency Trading Bot',
  description: 'Advanced AI-powered currency trading bot with 24/7 automation and backtested strategies.',
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#0f172a',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neurobot.ai',
    title: 'Neurobot.ai - AI-Powered Currency Trading Bot',
    description: 'Advanced AI-powered currency trading bot with 24/7 automation and backtested strategies.',
    siteName: 'Neurobot.ai',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 1200,
        alt: 'Neurobot.ai - AI-Powered Currency Trading Bot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neurobot.ai - AI-Powered Currency Trading Bot',
    description: 'Advanced AI-powered currency trading bot with 24/7 automation and backtested strategies.',
    images: ['/logo.png'],
  },
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