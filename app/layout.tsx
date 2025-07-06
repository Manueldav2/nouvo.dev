import type { Metadata } from 'next'
import './globals.css'
import { EmbedAI } from './components/EmbedAI'
import { GoogleAnalytics } from './components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'nouvo',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <GoogleAnalytics />
      </head>
      <body>
        {children}
        <EmbedAI />
      </body>
    </html>
  )
}
