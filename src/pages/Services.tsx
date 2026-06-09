import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import {
  FiBox,
  FiHome,
  FiMap,
  FiLayout,
  FiSettings,
  FiZap,
  FiDroplet,
  FiClipboard,
  FiSun,
  FiTool,
  FiArrowRight,
  FiCheck,
} from 'react-icons/fi';
import SectionTitle from '@/components/shared/SectionTitle';
import { services } from '@/data/siteData';

const iconMap: Record<string, React.ElementType> = {
  Building2: FiBox,
  Home: FiHome,
  Road: FiMap,
  Factory: FiLayout,
  Cog: FiSettings,
  Zap: FiZap,
  Droplets: FiDroplet,
  ClipboardList: FiClipboard,
  Lightbulb: FiSun,
  Wrench: FiTool,
};

export default function Services() {
  const [, setHoveredService] = useState<string | null>(null);
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-2.jpg"
          alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="relative z-10 text-center container-custom">
          <span className="inline-block text-brand-gold font-heading font-semibold text-sm uppercase tracking-[0.3em] mb-4">
            What We Offer
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Our Services
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive engineering and construction solutions delivered with precision, innovation, and an unwavering commitment to quality.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="We Are Specialists In What We Do"
            description="From civil engineering to facility maintenance, we provide end-to-end solutions for projects of any scale and complexity."
          />

          <div
            ref={gridRef}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || FiBox;
              return (
                <div
                  key={service.id}
                  className="group relative bg-white border border-gray-100 overflow-hidden hover:shadow-card transition-all duration-500"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.5s ease-out ${index * 0.1}s`,
                  }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-brand-blue/40 transition-colors duration-500" />
                    </div>
                    <div className="md:w-3/5 p-6 md:p-8">
                      <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-gold transition-colors duration-300">
                        <IconComponent
                          size={22}
                          className="text-brand-blue group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-brand-darkgray group-hover:text-brand-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-brand-body text-sm mt-3 leading-relaxed line-clamp-3">
                        {service.shortDesc}
                      </p>
                      <div className="mt-4 space-y-2">
                        {service.benefits.slice(0, 2).map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-brand-body">
                            <FiCheck size={14} className="text-brand-gold mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        to={`/services/${service.id}`}
                        className="mt-6 inline-flex items-center gap-2 text-brand-gold font-heading font-semibold text-xs uppercase tracking-wider group-hover:gap-3 transition-all"
                      >
                        Learn More
                        <FiArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-surface">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-darkgray mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-brand-body text-lg max-w-2xl mx-auto mb-8">
            Our team of experts is ready to discuss your specific requirements and develop a tailored approach for your project.
          </p>
          <Link to="/quote" className="btn-primary inline-flex items-center gap-2">
            Request a Quote
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
