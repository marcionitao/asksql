import './globals.css'
import type { Metadata } from 'next'
import { Inter, Ubuntu_Mono as UbuntuMono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
// new font
const ubuntuMono = UbuntuMono({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'My AskSQL',
  description:
    'AskSQL is a question and answer site for people who ask questions about SQL queries.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Obs: add className to <html>
    <html lang="en" className={`${inter.variable} ${ubuntuMono.variable}`}>
      <body className="bg-bluebarry-900">{children}</body>
    </html>
  )
}
