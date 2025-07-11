import type { Metadata } from 'next'
import './globals.css'
import { EmbedAI } from './components/EmbedAI'
import { GoogleAnalytics } from './components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Nouvo | Custom Web Development',
  description: 'Professional web development services specializing in athletic portfolios, business websites, and professional resume websites. Transform your online presence with Nouvo.',
  generator: 'Next.js',
  openGraph: {
    title: 'Nouvo | Custom Web Development',
    description: 'Professional web development services specializing in athletic portfolios, business websites, and professional resume websites.',
    url: 'https://nouvo.dev',
    siteName: 'Nouvo',
    images: [
      {
        url: '/nouvo_logo.PNG',
        width: 1200,
        height: 630,
        alt: 'Nouvo Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nouvo | Custom Web Development',
    description: 'Professional web development services specializing in athletic portfolios, business websites, and professional resume websites.',
    images: ['/nouvo_logo.PNG'],
    creator: '@nouvo',
  },
  icons: {
    icon: '/nouvo_logo.PNG',
    shortcut: '/nouvo_logo.PNG',
    apple: '/nouvo_logo.PNG',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        {children}
        <EmbedAI />
      </body>
    </html>
  )
}
