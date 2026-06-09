import { useParams, Link, Navigate } from 'react-router-dom';
import {
  FiBox,
  FiHome,
  FiMap,
  FiLayout,
  FiSettings,
  FiZap,
  FiDroplet,
  FiClipboard,
  FiSun,
  FiTool,
  FiCheck,
  FiArrowRight,
  FiDownload,
  FiPhone,
} from 'react-icons/fi';
import SectionTitle from '@/components/shared/SectionTitle';
import { services } from '@/data/siteData';

const iconMap: Record<string, React.ElementType> = {
  Building2: FiBox,
  Home: FiHome,
  Road: FiMap,
  Factory: FiLayout,
  Cog: FiSettings,
  Zap: FiZap,
  Droplets: FiDroplet,
  ClipboardList: FiClipboard,
  Lightbulb: FiSun,
  Wrench: FiTool,
};

export default function ServiceDetails() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = iconMap[service.icon] || FiBox;

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="relative z-10 text-center container-custom">
          <span className="inline-block text-brand-gold font-heading font-semibold text-sm uppercase tracking-[0.3em] mb-4">
            Our Services
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-brand-surface border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-brand-blue transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-brand-gold font-heading font-semibold">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Service Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <SectionTitle
                title={service.title}
                description={service.shortDesc}
                centered={false}
                className="mb-8"
              />
              <div className="prose max-w-none">
                <p className="text-brand-body leading-relaxed text-base">
                  {service.fullDesc}
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-12">
                <h3 className="font-heading font-bold text-2xl text-brand-darkgray mb-6">
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-brand-surface p-4 border-l-4 border-brand-gold"
                    >
                      <FiCheck size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
                      <span className="text-brand-body text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              <div className="mt-12">
                <h3 className="font-heading font-bold text-2xl text-brand-darkgray mb-6">
                  Related Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services
                    .filter((s) => s.id !== service.id)
                    .slice(0, 4)
                    .map((relatedService) => {
                      const RelatedIcon = iconMap[relatedService.icon] || FiBox;
                      return (
                        <Link
                          key={relatedService.id}
                          to={`/services/${relatedService.id}`}
                          className="flex items-center gap-4 p-4 bg-white border border-gray-100 hover:shadow-card hover:border-brand-gold transition-all duration-300 group"
                        >
                          <div className="w-10 h-10 bg-brand-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold transition-colors">
                            <RelatedIcon size={18} className="text-brand-blue group-hover:text-white transition-colors" />
                          </div>
                          <span className="font-heading font-semibold text-sm text-brand-darkgray group-hover:text-brand-blue transition-colors">
                            {relatedService.title}
                          </span>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Service Icon Card */}
              <div className="bg-brand-blue p-8 text-center mb-6">
                <div className="w-20 h-20 bg-brand-gold flex items-center justify-center mx-auto mb-4">
                  <IconComponent size={36} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm mt-2">
                  Professional solutions for your project needs
                </p>
              </div>

              {/* Contact CTA */}
              <div className="bg-brand-surface p-8 mb-6">
                <h4 className="font-heading font-bold text-lg text-brand-darkgray mb-4">
                  Need This Service?
                </h4>
                <p className="text-brand-body text-sm mb-6">
                  Contact our team to discuss how we can help with your {service.title.toLowerCase()} needs.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <FiPhone size={16} />
                  Contact Us
                </Link>
              </div>

              {/* Download */}
              <div className="bg-white border border-gray-200 p-8">
                <h4 className="font-heading font-bold text-lg text-brand-darkgray mb-4">
                  Company Profile
                </h4>
                <p className="text-brand-body text-sm mb-6">
                  Download our comprehensive company profile to learn more about our capabilities and track record.
                </p>
                <button className="w-full border-2 border-brand-blue text-brand-blue py-3 font-heading font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-blue hover:text-white transition-colors">
                  <FiDownload size={16} />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-20 bg-brand-surface">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl text-brand-darkgray mb-4">
            Get a Quote for {service.title}
          </h2>
          <p className="text-brand-body max-w-2xl mx-auto mb-8">
            Request a detailed quotation for your project. Our team will respond within 24 hours with a comprehensive proposal.
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
