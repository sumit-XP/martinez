import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://martinezlandscaping.com'),
  title: 'Martinez Landscaping | Columbus, Indiana Lawn Care & Landscaping',
  description: 'Residential and commercial landscaping, lawn maintenance, seasonal cleanup, mulch installation, gutter cleaning, and snow removal in Columbus, Indiana.',
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Martinez Landscaping | Columbus, Indiana',
    description: 'Dependable lawn care and landscaping services for residential and commercial properties in Columbus, Indiana.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Martinez Landscaping',
  },
  twitter: { card: 'summary_large_image', title: 'Martinez Landscaping | Columbus, Indiana', description: 'Lawn care and landscaping for Columbus, Indiana.' },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#173b2b',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
