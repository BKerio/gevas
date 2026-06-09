import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { clientLogos } from '@/data/siteData';

export default function ClientsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-16 bg-brand-surface border-t border-gray-200">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="text-brand-gold font-heading font-semibold text-xs uppercase tracking-[0.2em]">
            Trusted Partners
          </span>
          <h3 className="font-heading font-bold text-2xl text-brand-darkgray mt-2">
            Our Valued Clients
          </h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(10px)',
                transition: `all 0.5s ease-out ${index * 0.1}s`,
              }}
            >
              <div className="font-heading font-bold text-lg md:text-xl text-gray-300 hover:text-brand-blue transition-colors duration-300 uppercase tracking-wider whitespace-nowrap">
                {client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
