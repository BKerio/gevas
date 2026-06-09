import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function StatsCounter({ value, suffix = '', label, duration = 2000 }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-white/70 font-body text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
