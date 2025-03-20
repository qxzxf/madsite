'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

interface Card {
  title: string;
  description: string;
  gradient: string;
  icon: React.ReactNode;
}

interface CardProps {
  card: Card;
  index: number;
}

const AboutCards = () => {
  const cards: Card[] = [
    {
      title: 'текст',
      description: 'текст',
      gradient: 'from-[#4F46E5] via-[#9333EA] to-[#EC4899]',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'текст',
      description: 'текст',
      gradient: 'from-[#2DD4BF] via-[#3B82F6] to-[#4F46E5]',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'текст',
      description: 'текст',
      gradient: 'from-[#EC4899] via-[#EAB308] to-[#84CC16]',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Обо мне
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>

      {/* Декоративные элементы фона */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-[100px] rounded-full" />
      </div>
    </section>
  );
};

const Card = ({ card, index }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Фоновая подсветка */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
      
      {/* Основная карточка */}
      <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden">
        {/* Градиентный фон */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-20 transition-opacity duration-500 group-hover:opacity-30"
             style={{
               background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to))`
             }} />
        
        {/* Анимированные линии */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute inset-0 bg-gradient-to-r ${card.gradient}`}
              initial={false}
              animate={{
                opacity: isHovered ? [0, 0.03, 0] : 0,
                rotate: isHovered ? [0, 360] : 0,
                scale: isHovered ? [0.8, 1.2] : 0.8,
              }}
              transition={{
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              style={{ borderRadius: '100%' }}
            />
          ))}
        </div>

        {/* Контент */}
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-6">
            <motion.div
              animate={{ 
                rotate: isHovered ? [0, 360] : 0,
                scale: isHovered ? [1, 1.1, 1] : 1,
              }}
              transition={{ 
                rotate: { duration: 5, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity, repeatType: "reverse" }
              }}
              className={`p-3 rounded-2xl bg-gradient-to-r ${card.gradient} relative group-hover:shadow-lg group-hover:shadow-white/10`}
            >
              <div className="text-white relative z-10">
                {card.icon}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20 rounded-2xl" />
            </motion.div>
            
            <h3 className="text-2xl font-bold">
              <span className={`bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                {card.title}
              </span>
            </h3>
          </div>
          
          <p className="text-gray-300/90 leading-relaxed relative z-10">
            {card.description}
          </p>

          {/* Декоративный элемент */}
          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: `conic-gradient(from 0deg, transparent, var(--tw-gradient-from), transparent)`,
              filter: 'blur(40px)',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCards; 