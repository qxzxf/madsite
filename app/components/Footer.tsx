'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 flex justify-center items-center">
      <motion.a
        href="https://discord.gg/8KWqnBuaxq"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-3 px-6 py-3 rounded-xl overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'linear-gradient(45deg, rgba(88, 101, 242, 0.8), rgba(114, 137, 218, 0.8))'
        }}
      >
        {/* Блик */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
            transform: 'translateX(-100%)',
          }}
          animate={{
            transform: ['translateX(-100%)', 'translateX(100%)'],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
        
        {/* Внутреннее свечение */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 blur-md"
            style={{
              background: 'linear-gradient(45deg, rgba(88, 101, 242, 0.4), rgba(114, 137, 218, 0.4))',
            }}
          />
        </div>

        {/* Иконка Discord */}
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24"
          className="relative"
        >
          <path 
            fill="white" 
            d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
          />
        </svg>

        {/* Текст */}
        <span className="relative text-white font-medium">
          Присоединиться к Discord
        </span>

        {/* Градиентная рамка */}
        <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(45deg, rgba(88, 101, 242, 1), rgba(114, 137, 218, 1))',
            padding: '2px'
          }}
        >
          <div className="h-full w-full bg-black rounded-xl" />
        </div>
      </motion.a>
    </footer>
  );
} 