import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { FiLinkedin, FiMail, FiBriefcase } from 'react-icons/fi';
import SectionTitle from '@/components/shared/SectionTitle';
import { teamMembers } from '@/data/siteData';

const departments = ['All', 'Executive', 'Engineering', 'Project Management', 'Operations'];

export default function Team() {
  const [activeDept, setActiveDept] = useState('All');
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  const filtered = (activeDept === 'All'
    ? teamMembers
    : teamMembers.filter((m) => m.department === activeDept)
  ).slice(0, 4);

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4A017_0%,_transparent_70%)]" />
        </div>
        <div className="relative z-10 text-center container-custom">
          <span className="inline-block text-brand-gold font-heading font-semibold text-sm uppercase tracking-[0.3em] mb-4">
            Our People
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Leadership Team
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Meet the experienced professionals who drive Gevas International's commitment to excellence.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Our Experts"
            title="Meet the Team"
            description="Our leadership team brings decades of combined experience in engineering, construction, and project management."
          />

          {/* Department Filter */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-6 py-3 font-heading font-semibold text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeDept === dept
                    ? 'bg-brand-blue text-white'
                    : 'bg-gray-100 text-brand-darkgray hover:bg-brand-blue hover:text-white'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div
            ref={gridRef}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filtered.map((member, index) => (
              <div
                key={member.id}
                className="group bg-white border border-gray-100 overflow-hidden hover:shadow-card transition-all duration-500"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.5s ease-out ${index * 0.1}s`,
                }}
              >
                <div className="relative aspect-[3/4] bg-brand-surface overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      <FiBriefcase size={40} className="text-brand-blue/30" />
                    </div>
                  </div>
                  {/* Department Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-gold text-white px-3 py-1 font-heading font-semibold text-xs uppercase tracking-wider">
                      {member.department}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-blue/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center p-6">
                      <p className="text-white/90 text-sm leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      <p className="text-brand-gold text-xs font-heading font-semibold uppercase tracking-wider">
                        {member.education}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-brand-darkgray group-hover:text-brand-blue transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-brand-gold text-sm font-heading font-semibold uppercase tracking-wider mt-1">
                    {member.title}
                  </p>
                  <div className="flex gap-3 mt-4">
                    <button className="w-9 h-9 border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all">
                      <FiLinkedin size={14} />
                    </button>
                    <button className="w-9 h-9 border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all">
                      <FiMail size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
