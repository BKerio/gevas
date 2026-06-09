import { useParams, Link, Navigate } from 'react-router-dom';
import { FiMapPin, FiCalendar, FiCheck, FiArrowRight, FiUser, FiDollarSign, FiFlag } from 'react-icons/fi';
import { projects } from '@/data/siteData';

export default function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[400px] md:h-[550px] flex items-end overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
        <div className="relative z-10 container-custom pb-12">
          <span className="inline-block bg-brand-gold text-white px-4 py-1.5 font-heading font-semibold text-xs uppercase tracking-wider mb-4">
            {project.category}
          </span>
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-white max-w-3xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 mt-4 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <FiMapPin size={16} />
              {project.location}
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar size={16} />
              Completed {project.year}
            </span>
            <span className="flex items-center gap-2">
              <FiDollarSign size={16} />
              {project.value}
            </span>
            <span className="flex items-center gap-2">
              <FiFlag size={16} />
              {project.status}
            </span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-brand-surface border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/projects" className="text-gray-500 hover:text-brand-blue transition-colors">Projects</Link>
            <span className="text-gray-400">/</span>
            <span className="text-brand-gold font-heading font-semibold">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Gallery */}
              <div className="relative aspect-[16/9] overflow-hidden mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading font-bold text-3xl text-brand-darkgray mb-4">
                Project Overview
              </h2>
              <p className="text-brand-body leading-relaxed text-base mb-8">
                {project.description}
              </p>

              {/* Scope of Work */}
              <div className="mt-12">
                <h3 className="font-heading font-bold text-2xl text-brand-darkgray mb-6">
                  Scope of Work
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.scope.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-brand-surface p-4 border-l-4 border-brand-gold"
                    >
                      <FiCheck size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
                      <span className="text-brand-body text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-12">
                <h3 className="font-heading font-bold text-2xl text-brand-darkgray mb-6">
                  Technologies & Methods
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'BIM Modeling',
                    'Drone Surveying',
                    'Prefabrication',
                    'Lean Construction',
                    'Green Building',
                    'Smart Sensors',
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-brand-blue/10 text-brand-blue px-4 py-2 font-heading font-semibold text-xs uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Info Card */}
              <div className="bg-brand-blue p-8 text-white mb-6">
                <h3 className="font-heading font-bold text-xl mb-6">Project Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FiUser size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white/60 text-xs uppercase tracking-wider">Client</span>
                      <p className="text-white font-heading font-semibold">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiDollarSign size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white/60 text-xs uppercase tracking-wider">Project Value</span>
                      <p className="text-white font-heading font-semibold">{project.value}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiMapPin size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white/60 text-xs uppercase tracking-wider">Location</span>
                      <p className="text-white font-heading font-semibold">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCalendar size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white/60 text-xs uppercase tracking-wider">Year Completed</span>
                      <p className="text-white font-heading font-semibold">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiFlag size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white/60 text-xs uppercase tracking-wider">Status</span>
                      <p className="text-white font-heading font-semibold">{project.status}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Projects */}
              <div className="bg-brand-surface p-8">
                <h4 className="font-heading font-bold text-lg text-brand-darkgray mb-4">
                  Similar Projects
                </h4>
                <div className="space-y-4">
                  {projects
                    .filter((p) => p.id !== project.id && p.category === project.category)
                    .slice(0, 3)
                    .map((similarProject) => (
                      <Link
                        key={similarProject.id}
                        to={`/projects/${similarProject.id}`}
                        className="flex gap-4 group"
                      >
                        <div className="w-20 h-16 flex-shrink-0 overflow-hidden">
                          <img
                            src={similarProject.image}
                            alt={similarProject.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h5 className="font-heading font-semibold text-sm text-brand-darkgray group-hover:text-brand-blue transition-colors line-clamp-1">
                            {similarProject.title}
                          </h5>
                          <span className="text-gray-400 text-xs">{similarProject.location}</span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-surface">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl text-brand-darkgray mb-4">
            Have a Similar Project in Mind?
          </h2>
          <p className="text-brand-body max-w-2xl mx-auto mb-8">
            Let our experienced team help you bring your vision to life. We have the expertise and resources to handle projects of any scale.
          </p>
          <Link to="/quote" className="btn-primary inline-flex items-center gap-2">
            Request a Quote
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
