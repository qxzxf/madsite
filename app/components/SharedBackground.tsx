'use client';
import { useEffect, useRef, useState } from 'react';

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 2; // Увеличиваем размер частиц
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.color = `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3})`; // Увеличиваем яркость
  }

  update(width: number, height: number) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > width) this.x = 0;
    else if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    else if (this.y < 0) this.y = height;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function SharedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const observerRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      );
      
      canvas.width = window.innerWidth;
      canvas.height = docHeight;
      
      // Увеличиваем количество частиц
      const particleCount = Math.floor((canvas.width * canvas.height) / 6000);
      setParticles(Array.from({ length: particleCount }, () => 
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      ));
    };

    const handleResize = () => {
      updateCanvasSize();
    };

    observerRef.current = new ResizeObserver(updateCanvasSize);
    observerRef.current.observe(document.body);

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`; // Увеличиваем яркость линий
            ctx.lineWidth = 1.5; // Увеличиваем толщину линий
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [particles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full pointer-events-none"
      style={{ 
        zIndex: 1,
        mixBlendMode: 'screen',
        opacity: 1 // Максимальная видимость
      }}
    />
  );
} 