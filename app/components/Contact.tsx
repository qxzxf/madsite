'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formState)
  }

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text glow">
          Связаться со мной
        </h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass p-8 rounded-2xl neon-border space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 gradient-text">
              Имя
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              id="name"
              value={formState.name}
              onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-2 glass border border-gray-700/50 rounded-lg focus:outline-none focus:border-purple-500 transition-colors hover-glow"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 gradient-text">
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-2 glass border border-gray-700/50 rounded-lg focus:outline-none focus:border-purple-500 transition-colors hover-glow"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 gradient-text">
              Сообщение
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              id="message"
              value={formState.message}
              onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
              rows={4}
              className="w-full px-4 py-2 glass border border-gray-700/50 rounded-lg focus:outline-none focus:border-purple-500 transition-colors hover-glow"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-glow pulse"
          >
            Отправить
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Декоративные элементы */}
      <div className="absolute -left-32 top-1/3 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
      <div className="absolute -right-32 bottom-1/3 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl" />
    </section>
  )
} 