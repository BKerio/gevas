import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { FiStar, FiMessageSquare } from 'react-icons/fi';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonials } from '@/data/siteData';

export default function Testimonials() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4A017_0%,_transparent_70%)]" />
        </div>
        <div className="relative z-10 text-center container-custom">
          <span className="inline-block text-brand-gold font-heading font-semibold text-sm uppercase tracking-[0.3em] mb-4">
            Client Feedback
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Testimonials
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Hear from industry leaders and organizations who have trusted us with their most important projects.
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="What Our Clients Say About Us"
            description="Our clients' success is our success. Here's what they have to say about working with Gevas International."
          />

          <div
            ref={gridRef}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white border border-gray-100 p-8 hover:shadow-card transition-all duration-500"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.5s ease-out ${index * 0.1}s`,
                }}
              >
                <FiMessageSquare size={32} className="text-brand-gold mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} size={14} className="text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="text-brand-body text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-heading font-bold text-sm text-brand-darkgray">
                    {testimonial.name}
                  </h4>
                  <p className="text-brand-gold text-xs font-heading font-semibold uppercase tracking-wider">
                    {testimonial.title}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    {testimonial.company}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Project:</span>
                  <p className="text-sm text-brand-darkgray font-heading font-semibold">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-brand-blue">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '98%', label: 'Client Satisfaction' },
              { value: '150+', label: 'Projects Delivered' },
              { value: '85%', label: 'Repeat Business Rate' },
              { value: '25', label: 'Countries Served' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-heading font-bold text-4xl md:text-5xl text-brand-gold">
                  {stat.value}
                </div>
                <div className="mt-2 text-white/70 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
