import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { FiCheck, FiTarget, FiEye, FiAward, FiShield, FiUsers, FiStar } from 'react-icons/fi';
import SectionTitle from '@/components/shared/SectionTitle';
import StatsSection from '@/components/sections/StatsSection';
import { coreValues, certifications } from '@/data/siteData';

const valueIcons = [FiShield, FiUsers, FiStar];

const milestones = [
  { year: "2017", title: "Company Founded", description: "Gevas International established in Nairobi, Kenya" },
  { year: "2019", title: "Regional Expansion", description: "Expanded operations across East Africa" },
  { year: "2021", title: "Sustainability Initiative", description: "Committed to net-zero carbon by 2035" },
  { year: "2024", title: "Global Reach", description: "Operating in multiple countries with over 2,400 professionals" },
];

export default function About() {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/about-building.jpg"
          alt="About Gevas International"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="relative z-10 text-center container-custom">
          <span className="inline-block text-brand-gold font-heading font-semibold text-sm uppercase tracking-[0.3em] mb-4">
            About Us
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Building Tomorrow's Landmarks
          </h1>
        </div>
      </div>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionTitle
                label="Company Overview"
                title="Global Engineering Excellence"
                description="Since 2017, Gevas International has been at the forefront of engineering and construction innovation, delivering landmark projects that define skylines and transform communities."
                centered={false}
              />
              <div className="mt-8 space-y-4">
                <p className="text-brand-body leading-relaxed">
                  Founded in 2017, Gevas International began as a specialized civil engineering firm in Nairobi, Kenya. 
                  Through unwavering commitment to quality, safety, and innovation, we have grown into a global 
                  engineering conglomerate operating across 25 countries with 2,400+ dedicated professionals.
                </p>
                <p className="text-brand-body leading-relaxed">
                  Our integrated approach combines world-class design capabilities with construction excellence, 
                  leveraging cutting-edge BIM technology, sustainable building practices, and advanced project 
                  management methodologies to deliver projects on time, within budget, and above expectations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FiTarget, title: 'Vision', text: 'To be the world\'s most trusted engineering and construction partner, shaping sustainable infrastructure for generations to come.' },
                { icon: FiEye, title: 'Mission', text: 'Delivering exceptional engineering solutions through innovation, integrity, and an unwavering commitment to safety and quality.' },
              ].map((item, i) => (
                <div key={i} className="bg-brand-surface p-6 border-l-4 border-brand-gold">
                  <item.icon size={28} className="text-brand-gold mb-4" />
                  <h3 className="font-heading font-bold text-lg text-brand-darkgray mb-2">{item.title}</h3>
                  <p className="text-brand-body text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-brand-surface">
        <div className="container-custom">
          <SectionTitle
            label="Our Values"
            title="What Drives Us Forward"
            description="Our core values are the foundation of every decision we make and every project we deliver."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = valueIcons[index] || FiCheck;
              return (
                <div
                  key={index}
                  className="bg-white p-8 border border-gray-100 hover:shadow-card transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-brand-blue/10 flex items-center justify-center mb-6">
                    <IconComponent size={28} className="text-brand-blue" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-brand-darkgray mb-4">
                    {value.title}
                  </h3>
                  <p className="text-brand-body text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Milestones */}
      <section ref={timelineRef} className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Our Journey"
            title="Company Milestones"
            description="Key milestones that have shaped Gevas International's growth from a regional firm to a global engineering leader."
          />
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative border-l-2 border-brand-blue ml-4 md:ml-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative pl-8 md:pl-12 pb-12 last:pb-0"
                  style={{
                    opacity: isTimelineInView ? 1 : 0,
                    transform: isTimelineInView ? 'translateX(0)' : 'translateX(-30px)',
                    transition: `all 0.5s ease-out ${index * 0.1}s`,
                  }}
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-brand-gold -translate-x-[9px]" />
                  <span className="font-heading font-bold text-2xl text-brand-gold">
                    {milestone.year}
                  </span>
                  <h4 className="font-heading font-bold text-lg text-brand-darkgray mt-1">
                    {milestone.title}
                  </h4>
                  <p className="text-brand-body text-sm mt-1">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-brand-blue">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
              Certifications & Accreditations
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-1 bg-brand-gold" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-brand-gold flex items-center justify-center flex-shrink-0">
                  <FiAward size={24} className="text-white" />
                </div>
                <span className="text-white font-heading font-semibold text-sm">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
