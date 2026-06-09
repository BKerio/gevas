import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  label,
  title,
  description,
  light = false,
  centered = true,
  className = '',
}: SectionTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`${centered ? 'text-center' : ''} ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.6s ease-out',
      }}
    >
      {label && (
        <span className="inline-block text-brand-gold font-heading font-semibold text-xs uppercase tracking-[0.2em] mb-3">
          {label}
        </span>
      )}
      <h2
        className={`font-heading font-bold text-3xl md:text-4xl lg:text-[2.75rem] leading-tight ${
          light ? 'text-white' : 'text-brand-darkgray'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl ${centered ? 'mx-auto' : ''} text-base md:text-lg leading-relaxed ${
            light ? 'text-white/70' : 'text-brand-body'
          }`}
        >
          {description}
        </p>
      )}
      <div className={`mt-6 flex ${centered ? 'justify-center' : ''}`}>
        <div className="w-16 h-1 bg-brand-gold" />
      </div>
    </div>
  );
}
