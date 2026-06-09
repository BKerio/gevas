import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { heroSlides } from '@/data/siteData';

export default function HeroSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        className="absolute inset-0 w-full h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/60 to-brand-dark/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-brand-dark/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`${swiperRef.current?.activeIndex === index ? 'block' : 'hidden'}`}
                style={{ display: swiperRef.current?.activeIndex === index ? 'block' : 'none' }}
              >
                <span className="inline-block text-brand-gold font-heading font-semibold text-sm uppercase tracking-[0.3em] mb-4">
                  {slide.subtitle}
                </span>
                <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
                  {slide.title}
                </h1>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/projects" className="btn-primary">
                    {slide.cta1}
                  </Link>
                  <Link to="/contact" className="btn-outline">
                    {slide.cta2}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Default first slide content */}
          <div className="max-w-3xl" style={{ display: swiperRef.current ? 'none' : 'block' }}>
            <span className="inline-block text-brand-gold font-heading font-semibold text-sm uppercase tracking-[0.3em] mb-4">
              {heroSlides[0].subtitle}
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              {heroSlides[0].title}
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              {heroSlides[0].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary">
                {heroSlides[0].cta1}
              </Link>
              <Link to="/contact" className="btn-outline">
                {heroSlides[0].cta2}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs uppercase tracking-wider font-heading">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
