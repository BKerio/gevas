import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiBriefcase, FiCheck, FiArrowRight } from 'react-icons/fi';
import SectionTitle from '@/components/shared/SectionTitle';
import { jobOpenings, benefits } from '@/data/siteData';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden bg-brand-darkgray">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4A017_0%,_transparent_70%)]" />
        </div>
        <div className="relative z-10 text-center container-custom">
          <span className="inline-block text-brand-gold font-heading font-semibold text-sm uppercase tracking-[0.3em] mb-4">
            Join Our Team
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Careers at Gevas
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Build your career with a global leader in engineering and construction. We're always looking for talented professionals.
          </p>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Why Gevas"
            title="Build Your Future With Us"
            description="We offer more than just a job. At Gevas International, you'll be part of a global team shaping the future of infrastructure."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Global Opportunities', desc: 'Work on landmark projects across 25 countries' },
              { title: 'Professional Growth', desc: 'Continuous learning and career advancement programs' },
              { title: 'Competitive Compensation', desc: 'Industry-leading salaries and comprehensive benefits' },
              { title: 'Innovation Culture', desc: 'Be at the forefront of construction technology' },
            ].map((item, index) => (
              <div key={index} className="bg-brand-surface p-6 border-t-4 border-brand-gold text-center">
                <h3 className="font-heading font-bold text-lg text-brand-darkgray mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-body text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-brand-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-brand-gold font-heading font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Benefits
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-darkgray mb-6">
                What We Offer Our Team
              </h2>
              <p className="text-brand-body leading-relaxed mb-8">
                We believe in taking care of our people. Our comprehensive benefits package is designed 
                to support your health, wealth, and wellbeing, both professionally and personally.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiCheck size={14} className="text-white" />
                    </div>
                    <span className="text-brand-body">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/hero-2.jpg"
                alt="Gevas International Team"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white p-6">
                <div className="font-heading font-bold text-4xl text-brand-gold">2,400+</div>
                <div className="text-sm text-white/80 uppercase tracking-wider">Team Members Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Open Positions"
            title="Current Opportunities"
            description="Explore our current openings and find the perfect role for your skills and career aspirations."
          />

          <div className="mt-16 space-y-4">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white hover:bg-brand-surface transition-colors text-left gap-4"
                >
                  <div>
                    <h3 className="font-heading font-bold text-lg text-brand-darkgray">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-400 text-sm">
                      <span className="flex items-center gap-1">
                        <FiMapPin size={14} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock size={14} />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiBriefcase size={14} />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-brand-blue/10 text-brand-blue px-4 py-2 font-heading font-semibold text-xs uppercase tracking-wider">
                      {job.department}
                    </span>
                    <FiArrowRight
                      size={20}
                      className={`text-brand-gold transition-transform duration-300 ${
                        selectedJob === job.id ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                </button>
                {selectedJob === job.id && (
                  <div className="p-6 bg-brand-surface border-t border-gray-200">
                    <p className="text-brand-body text-sm leading-relaxed mb-6">
                      {job.description}
                    </p>
                    <Link
                      to="/contact"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      Apply for this Position
                      <FiArrowRight />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
