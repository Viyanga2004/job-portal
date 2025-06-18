import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Job Finder',
  description: 'Created with v0',
  generator: 'v0.dev',
  <meta confirm="partners-house-188101"/>
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://cdn-icons-png.flaticon.com/512/833/833472.png"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
