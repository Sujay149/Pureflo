import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: '#0F4C9C',
}

export const metadata: Metadata = {
  title: 'Pureflo Storage Water Tanks | Premium Water Storage Solutions',
  description:
    'Pureflo Storage Water Tanks - ISO certified, food-grade plastic water tanks with 3-layer protection. Durable, leak-proof, and UV-protected water storage solutions for homes and businesses.',
  keywords: [
    'water tanks',
    'storage tanks',
    'water storage',
    'food grade plastic',
    'ISO certified',
    'leak-proof tanks',
    'UV protection',
  ],
  authors: [{ name: 'Pureflo' }],
  creator: 'Pureflo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pureflo.example.com',
    title: 'Pureflo Storage Water Tanks | Premium Water Storage Solutions',
    description:
      'Discover Pureflo Storage Water Tanks - engineered for purity, built for life. ISO certified water tanks with multi-layer protection.',
    siteName: 'Pureflo Water Tanks',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pureflo.example.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
        style={{
          '--font-poppins': 'Poppins, sans-serif',
          '--font-inter': 'Inter, sans-serif',
        } as React.CSSProperties}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
