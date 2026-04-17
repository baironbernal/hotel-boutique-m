import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Hotel M Boutique — Pequenos Hoteles con Encanto',
  description: 'Hotel M Boutique es un santuario de elegancia intima, donde cada detalle ha sido disenado para crear momentos que permanecen contigo para siempre.',
}

export const viewport: Viewport = {
  themeColor: '#0F1B2D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} bg-cream`}>
      <head>
        <link rel="preload" as="image" href="/images/Hotel-mediterraneo-12-1.jpeg" />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
