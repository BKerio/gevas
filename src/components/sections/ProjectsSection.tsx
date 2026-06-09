import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import SectionTitle from '@/components/shared/SectionTitle';
import { projects } from '@/data/siteData';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Infrastructure', 'Water'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          label="Our Portfolio"
          title="Work of Excellence"
          description="Explore our portfolio of landmark projects that demonstrate our commitment to engineering excellence and construction innovation."
        />

        {/* Filter Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 font-heading font-semibold text-xs uppercase tracking-wider transition-all duration-300 ${
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
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group relative overflow-hidden aspect-[4/3]"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.5s ease-out ${index * 0.1}s`,
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-brand-gold font-heading font-semibold text-xs uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-heading font-bold text-xl text-white mt-1 group-hover:text-brand-gold transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 mt-2 text-white/70 text-sm">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-brand-gold font-heading font-semibold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  View Project
                  <FiArrowRight />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/projects" className="btn-outline-primary inline-flex items-center gap-2">
            View All Projects
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
