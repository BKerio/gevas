import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Users, Award, TrendingUp, Sparkles } from 'lucide-react';
import { heroSlides } from '@/data/siteData';

const stats = [
  {
    value: "150+",
    label: "Projects Completed",
    desc: "Delivering landmark structures",
    icon: <TrendingUp className="w-5 h-5 text-brand-gold" />
  },
  {
    value: "25+",
    label: "Countries Active",
    desc: "Global engineering solutions",
    icon: <Globe className="w-5 h-5 text-brand-gold" />
  },
  {
    value: "2,400+",
    label: "Experts Globally",
    desc: "Engineers, architects & builders",
    icon: <Users className="w-5 h-5 text-brand-gold" />
  },
  {
    value: "25 Yrs",
    label: "of Excellence",
    desc: "Shaping skylines since 1999",
    icon: <Award className="w-5 h-5 text-brand-gold" />
  }
];

export default function HeroSection() {
  const slide = heroSlides[0];
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/images/Video-1.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/60 to-brand-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-brand-dark/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navbar clearance spacer — top bar (~48px) + nav (~90px) + breathing room */}
        <div className="shrink-0 h-[140px] sm:h-[150px] lg:h-[160px]" />

        {/* Centered text block — fills remaining space and centers within it */}
        <div className="flex-1 flex items-center pb-[220px] sm:pb-[240px] md:pb-[260px]">
          <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
            <div className="max-w-3xl">
              <span className="inline-block text-brand-gold font-heading font-semibold text-sm uppercase tracking-[0.3em] mb-4 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                {slide.subtitle}
              </span>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.5s_forwards]">
                {slide.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl opacity-0 animate-[fade-in-up_0.8s_ease-out_0.8s_forwards]">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left Dynamic CTA Panel */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-0 right-0 z-20 pointer-events-none">
        <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-5xl pointer-events-auto flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
            
            {/* Left Column: Active Badge & CTA Buttons */}
            <div className="flex flex-col gap-4 max-w-xl opacity-0 animate-[fade-in-up_0.8s_ease-out_1.1s_forwards]">
              
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Explore Projects Button */}
                <Link
                  to="/projects"
                  className="btn-primary group relative overflow-hidden rounded-md shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2 min-w-[200px]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {slide.cta1}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                  {/* Shimmer element */}
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] animate-shimmer pointer-events-none" />
                </Link>

                {/* Get a Quote Button */}
                <Link
                  to="/contact"
                  className="btn-outline group relative overflow-hidden rounded-md backdrop-blur-sm bg-white/5 border border-white/20 hover:border-brand-gold/50 flex items-center justify-center gap-2 min-w-[200px]"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {slide.cta2}
                  </span>
                  <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>
            </div>

            {/* Right Column: Rotating Stats Panel */}
            <div className="hidden md:block w-80 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl opacity-0 animate-[fade-in-up_0.8s_ease-out_1.4s_forwards]">
              <div className="relative h-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStat}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                      {stats[currentStat].icon}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-heading font-extrabold text-2xl md:text-3xl text-white">
                          {stats[currentStat].value}
                        </span>
                        <span className="font-heading font-semibold text-xs text-brand-gold uppercase tracking-wider">
                          {stats[currentStat].label}
                        </span>
                      </div>
                      <p className="text-white/60 text-xs mt-0.5 leading-snug">
                        {stats[currentStat].desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Progress bar */}
              <div className="w-full h-[2px] bg-white/10 rounded-full mt-3 overflow-hidden">
                <motion.div
                  key={currentStat}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  className="h-full bg-brand-gold"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2">
        <span className="text-white/50 text-xs uppercase tracking-wider font-heading">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
