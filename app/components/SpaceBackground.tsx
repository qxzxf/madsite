'use client'

import { useEffect, useRef } from 'react'

export default function SpaceBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Создаем звезды
    const stars = 200;
    for (let i = 0; i < stars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Случайное положение
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Случайный размер
      const size = Math.random() * 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Случайная анимация
      star.style.setProperty('--duration', `${2 + Math.random() * 3}s`);
      star.style.setProperty('--brightness', `${0.5 + Math.random() * 0.5}`);
      star.style.setProperty('--scale', `${1 + Math.random()}`);
      star.style.animationDelay = `${Math.random() * 2}s`;
      
      containerRef.current.appendChild(star);
    }

    // Создаем туманности
    const nebulas = 3;
    for (let i = 0; i < nebulas; i++) {
      const nebula = document.createElement('div');
      nebula.className = 'nebula';
      
      // Случайное положение и размер
      nebula.style.left = `${Math.random() * 100}%`;
      nebula.style.top = `${Math.random() * 100}%`;
      const size = 150 + Math.random() * 200;
      nebula.style.width = `${size}px`;
      nebula.style.height = `${size}px`;
      
      // Случайный цвет
      const colors = [
        'rgba(var(--accent-1), 0.3)',
        'rgba(var(--accent-2), 0.3)',
        'rgba(var(--accent-3), 0.3)'
      ];
      nebula.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      // Случайное движение
      nebula.style.setProperty('--tx', `${(Math.random() - 0.5) * 50}px`);
      nebula.style.setProperty('--ty', `${(Math.random() - 0.5) * 50}px`);
      nebula.style.setProperty('--rotation', `${(Math.random() - 0.5) * 30}deg`);
      
      containerRef.current.appendChild(nebula);
    }

    // Создаем энергетические линии
    const lines = 15;
    const energyLines = document.createElement('div');
    energyLines.className = 'energy-lines';
    
    for (let i = 0; i < lines; i++) {
      const line = document.createElement('div');
      line.className = 'energy-line';
      
      // Случайное положение и размер
      line.style.top = `${(100 / lines) * i + Math.random() * 20}%`;
      line.style.width = '200%';
      line.style.setProperty('--scale', `${0.5 + Math.random()}`);
      line.style.animationDelay = `${Math.random() * 8}s`;
      
      energyLines.appendChild(line);
    }
    
    containerRef.current.appendChild(energyLines);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="space-background" />
      <div className="cosmic-dust" />
      <div className="grid-overlay" />
    </>
  );
} 