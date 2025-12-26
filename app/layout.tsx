import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unified – All Your Money. One Dashboard.',
  description: 'Securely connect your banks, track balances in real time, and understand your spending – without switching apps.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CLN4SGYW8L"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CLN4SGYW8L');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-charcoal text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
