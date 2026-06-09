import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import StatsCounter from '@/components/shared/StatsCounter';
import { stats } from '@/data/siteData';

export default function StatsSection() {
  const sectionRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let mouseX = 0.5;
    let mouseY = 0.5;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = (e.clientY - rect.top) / rect.height;
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Background
      ctx.fillStyle = '#0B3C6D';
      ctx.fillRect(0, 0, w, h);

      // Golden wave
      time += 0.01;
      const baseColor = { r: 212, g: 160, b: 23 }; // #D4A017

      for (let y = 0; y < h; y += 2) {
        for (let x = 0; x < w; x += 2) {
          const nx = x / w;
          const ny = y / h;

          const mouseDist = Math.sqrt(
            Math.pow(nx - mouseX, 2) + Math.pow(ny - mouseY, 2)
          );

          const wave = Math.sin((nx + mouseDist * 0.1 + time * 0.3) * 8) * 0.08;
          const ribbon = Math.max(0, 1 - Math.abs(ny - 0.5 - wave) / 0.02);
          const glow = Math.exp(-mouseDist * 4) * 0.5;

          const intensity = ribbon + glow * 0.3;

          if (intensity > 0.01) {
            const alpha = Math.min(intensity, 1);
            ctx.fillStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${alpha * 0.6})`;
            ctx.fillRect(x, y, 2, 2);
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${index * 0.15}s`,
              }}
            >
              <StatsCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
