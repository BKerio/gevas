import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { FiMapPin, FiCalendar, FiArrowRight } from 'react-icons/fi';
import SectionTitle from '@/components/shared/SectionTitle';
import { projects, projectCategories } from '@/data/siteData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-3.jpg"
          alt="Our Projects"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="relative z-10 text-center container-custom">
          <span className="inline-block text-brand-gold font-heading font-semibold text-sm uppercase tracking-[0.3em] mb-4">
            Our Portfolio
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Featured Projects
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Explore our portfolio of landmark projects that demonstrate our commitment to engineering excellence and construction innovation.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Work of Excellence"
            title="Recent Projects"
            description="Browse through our diverse portfolio of completed projects spanning commercial, residential, industrial, and infrastructure sectors."
          />

          {/* Filter Tabs */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-3 font-heading font-semibold text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-brand-blue text-white'
                    : 'bg-gray-100 text-brand-darkgray hover:bg-brand-blue hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div
            ref={gridRef}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group bg-white border border-gray-100 overflow-hidden hover:shadow-card transition-all duration-500"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.5s ease-out ${index * 0.1}s`,
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-blue text-white px-3 py-1.5 font-heading font-semibold text-xs uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-brand-gold text-white px-3 py-1 font-heading font-bold text-sm">
                    {project.value}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-brand-darkgray group-hover:text-brand-blue transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <FiMapPin size={14} />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiCalendar size={14} />
                      {project.year}
                    </span>
                  </div>
                  <p className="text-brand-body text-sm mt-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-brand-gold font-heading font-semibold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project Details
                    <FiArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
