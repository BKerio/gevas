import { useRef } from 'react';
import { useInView } from 'framer-motion';

const clients = [
  { name: 'KenGen', logo: '/images/kengen.png' },
  { name: 'Kenya Pipeline', logo: '/images/kenya-pipeline.jpg' },
  { name: 'Kenya Power', logo: '/images/kenya-power.png' },
  { name: 'Kenya Railways', logo: '/images/kenya-railways.png' },
  { name: 'KeRRA', logo: '/images/kerra.png' },
  { name: 'KETRACO', logo: '/images/ketraco.png' },
  { name: 'Kisumu Water', logo: '/images/kisumu-water.png' },
  { name: 'KURA', logo: '/images/kura.png' },
  { name: 'Nairobi Water', logo: '/images/nairobi-water.png' },
];

export default function ClientsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="font-heading font-bold text-3xl md:text-4xl text-[#c09015] tracking-wide">
            Some of Our Clientage
          </h3>
          <div className="w-24 h-1 bg-[#c09015]/20 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-full max-w-[200px] bg-white border border-gray-100 p-5 flex flex-col items-center justify-between h-40 hover:shadow-md transition-all duration-300 group"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`,
              }}
            >
              <div className="flex-1 flex items-center justify-center w-full">
                <img
                  src={client.logo}
                  draggable={false}
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-xs font-semibold text-gray-500 mt-3 group-hover:text-[#c09015] transition-colors duration-300 text-center uppercase tracking-wider">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
