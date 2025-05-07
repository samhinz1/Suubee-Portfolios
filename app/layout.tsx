import type { Metadata } from 'next'
import './globals.css'
import { getAssetPath } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Suubee Portfolios',
  description: 'Expertly managed portfolios',
  icons: {
    icon: '/suubee-circle.png',
    apple: '/suubee-circle.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Script for GitHub Pages SPA routing */}
        <script src={getAssetPath('spa-redirect.js')}></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
