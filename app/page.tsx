import { Metadata } from 'next'
import Hero from './components/Hero'
import AboutCards from './components/AboutCards'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Сайт-визитка MAD_VIST',
  description: 'Создано специально для MAD_VIST by qxzxf',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        <Hero />
      </div>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black">
        <AboutCards />
        <Footer />
      </div>
    </main>
  )
} 
