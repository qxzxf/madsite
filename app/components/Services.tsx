'use client'

import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: "Веб-разработка",
      description: "Создание современных и отзывчивых веб-приложений с использованием передовых технологий",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "UI/UX Дизайн",
      description: "Разработка интуитивных и привлекательных пользовательских интерфейсов",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Мобильная разработка",
      description: "Создание нативных и кроссплатформенных мобильных приложений",
      gradient: "from-green-400 to-cyan-500"
    }
  ]

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text glow">
          Мои услуги
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {/* Эффект свечения при наведении */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`}
              />
              
              {/* Карточка услуги */}
              <div className="glass p-8 rounded-2xl h-full neon-border hover-glow relative z-10">
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
                
                {/* Декоративная линия */}
                <div className={`h-1 w-20 bg-gradient-to-r ${service.gradient} rounded-full mt-6 group-hover:w-full transition-all duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Декоративные элементы */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
    </section>
  )
} 