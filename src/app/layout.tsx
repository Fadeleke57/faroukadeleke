import type { Metadata } from 'next'
import { Anton } from 'next/font/google'
import './globals.css'

const anton = Anton({ weight: '400',
                      preload: false,
                    })

export const metadata: Metadata = {
  title: "Farouk's Portfolio",
  description: 'Portfolio Page Created With NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={anton.className}>{children}</body>
    </html>
  )
}
