import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import SectionTitle from '@/components/shared/SectionTitle';
import { aboutFeatures } from '@/data/siteData';

export default function AboutSection() {
  const imageRef = useRef<HTMLImageElement>(null);
  const triggerRef = useRef(null);
  const isInView = useInView(triggerRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-brand-surface" ref={triggerRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out 0.2s',
            }}
          >
            <SectionTitle
              label="About Us"
              title="We Deliver Landmark Projects"
              description="We are a global engineering and construction leader with experience delivering landmark projects since 2017 that shape skylines and transform communities worldwide."
              centered={false}
              className="mb-8"
            />
            <p className="text-brand-body leading-relaxed mb-6">
              From our founding in 2017, Gevas International has grown from a regional construction firm 
              into a global engineering conglomerate with 2,400+ team members across 25 countries. 
              Our integrated approach combines architectural excellence with engineering precision, 
              utilizing cutting-edge technology and sustainable practices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {aboutFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiCheck size={14} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-brand-darkgray">
                      {feature.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="btn-outline-primary inline-flex items-center gap-2"
            >
              Learn More About Us
              <FiArrowRight />
            </Link>
          </div>

          {/* Image with Mask Reveal */}
          <div className="relative">
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
              <img
                ref={imageRef}
                src="/images/about-building.jpg"
                alt="Gevas International Construction"
                className="w-full h-full object-cover transition-all duration-[1.5s] ease-out"
                style={{
                  clipPath: isInView
                    ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                    : 'polygon(20% 0%, 80% 0%, 80% 100%, 20% 100%)',
                  filter: isInView ? 'brightness(100%)' : 'brightness(200%)',
                }}
              />
              {/* Experience Badge */}
              <div
                className="absolute -bottom-6 -left-6 bg-brand-blue text-white p-6 shadow-xl"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease-out 0.8s',
                }}
              >
                <div className="font-heading font-bold text-4xl text-brand-gold">9+</div>
                <div className="text-sm text-white/80 uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
