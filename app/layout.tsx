import type { Metadata } from 'next'
import './globals.css'
import ClientWrapper from './components/ClientWrapper'
import AnimatedBackground from './components/AnimatedBackground'

export const metadata: Metadata = {
  title: 'Сайт-визитка',
  description: 'Современный сайт-визитка с анимациями',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <AnimatedBackground />
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  )
}
