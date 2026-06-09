import { useRef } from 'react';
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

export default function ServicesSection() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          label="Our Services"
          title="We Are Specialists In What We Do"
          description="Comprehensive engineering and construction services delivered with precision, innovation, and unwavering commitment to quality."
        />

        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FiBox;
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-white border border-gray-100 p-8 transition-all duration-500 hover:shadow-card hover:-translate-y-1"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.5s ease-out ${index * 0.1}s`,
                }}
              >
                <div className="w-14 h-14 bg-brand-blue/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-gold">
                  <IconComponent
                    size={28}
                    className="text-brand-blue transition-colors duration-300 group-hover:text-white"
                  />
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-darkgray mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-body text-sm leading-relaxed">
                  {service.shortDesc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-brand-gold font-heading font-semibold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn-outline-primary inline-flex items-center gap-2">
            View All Services
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
