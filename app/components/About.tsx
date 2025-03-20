'use client'

import { motion } from 'framer-motion'

export default function About() {
  const cards = [
    {
      title: "Опыт",
      description: "5+ лет в веб-разработке",
      icon: "💼"
    },
    {
      title: "Навыки",
      description: "Современный стек технологий",
      icon: "⚡"
    },
    {
      title: "Проекты",
      description: "Более 50 успешных проектов",
      icon: "🚀"
    }
  ]

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text glow">
          Обо мне
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl neon-border hover-glow"
            >
              <div className="text-5xl mb-4 gradient-text">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2 gradient-text">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Декоративные элементы */}
      <div className="absolute -left-32 top-1/3 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl" />
      <div className="absolute -right-32 bottom-1/3 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl" />
    </section>
  )
} 