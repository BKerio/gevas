import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FiMessageSquare, FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonials } from '@/data/siteData';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section-padding bg-brand-surface">
      <div className="container-custom">
        <SectionTitle
          label="Testimonials"
          title="What Our Clients Say"
          description="Hear from the industry leaders and organizations who have trusted Gevas International to deliver their most important projects."
        />

        <div
          className="mt-16 relative"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out 0.3s',
          }}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-4"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-8 h-full border border-gray-100 hover:shadow-card transition-shadow duration-500">
                  <FiMessageSquare size={32} className="text-brand-gold mb-4" />
                  <p className="text-brand-body text-sm leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} size={14} className="text-brand-gold fill-brand-gold" />
                    ))}
                  </div>
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="testimonial-prev w-12 h-12 border-2 border-brand-blue flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors duration-300">
              <FiChevronLeft size={20} />
            </button>
            <button className="testimonial-next w-12 h-12 border-2 border-brand-blue flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors duration-300">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
