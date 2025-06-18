import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Job Finder',
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
        <meta confirm="partners-house-188101" />
        <link
          rel="icon"
          type="image/png"
          href="https://cdn-icons-png.flaticon.com/512/833/833472.png"
        />
      </head>
      <body>
        {children}

        {/* ✅ Script added here for async load after page interaction */}
        <Script
          src="https://hotbzuwino.today/process.js?id=1379884709&p1=sub1&p2=sub2&p3=sub3&p4=sub4"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
