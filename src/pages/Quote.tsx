import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSend, FiCheck, FiArrowRight, FiFileText, FiDollarSign, FiCalendar } from 'react-icons/fi';
import { services } from '@/data/siteData';

export default function Quote() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: [] as string[],
    budget: '',
    timeline: '',
    projectDescription: '',
  });

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      services: [],
      budget: '',
      timeline: '',
      projectDescription: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4A017_0%,_transparent_70%)]" />
        </div>
        <div className="relative z-10 text-center container-custom">
          <span className="inline-block text-brand-gold font-heading font-semibold text-sm uppercase tracking-[0.3em] mb-4">
            Start Your Project
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
            Request a Quote
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Tell us about your project and we'll provide a comprehensive proposal tailored to your needs.
          </p>
        </div>
      </div>

      {/* Quote Form */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 p-12 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-6">
                <FiCheck size={32} className="text-green-600" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-green-800 mb-4">
                Quote Request Submitted!
              </h2>
              <p className="text-green-600 mb-8">
                Thank you for your interest. Our team will review your requirements and respond within 24 hours with a detailed proposal.
              </p>
              <Link to="/" className="btn-primary inline-flex items-center gap-2">
                Back to Home
                <FiArrowRight />
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Contact Information */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-brand-blue flex items-center justify-center text-white font-heading font-bold">
                    1
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-brand-darkgray">
                    Contact Information
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-0 sm:pl-14">
                  <div>
                    <label className="block font-heading font-semibold text-xs uppercase tracking-wider text-brand-darkgray mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-blue transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-xs uppercase tracking-wider text-brand-darkgray mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-blue transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-xs uppercase tracking-wider text-brand-darkgray mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-blue transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-xs uppercase tracking-wider text-brand-darkgray mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-blue transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-brand-blue flex items-center justify-center text-white font-heading font-bold">
                    2
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-brand-darkgray">
                    Services Required
                  </h2>
                </div>
                <div className="pl-0 sm:pl-14">
                  <p className="text-brand-body text-sm mb-4">Select all services relevant to your project:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceToggle(service.id)}
                        className={`p-4 border text-left transition-all duration-300 ${
                          formData.services.includes(service.id)
                            ? 'border-brand-gold bg-brand-gold/5'
                            : 'border-gray-200 hover:border-brand-blue'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                              formData.services.includes(service.id)
                                ? 'border-brand-gold bg-brand-gold'
                                : 'border-gray-300'
                            }`}
                          >
                            {formData.services.includes(service.id) && (
                              <FiCheck size={12} className="text-white" />
                            )}
                          </div>
                          <span className="font-heading font-semibold text-sm text-brand-darkgray">
                            {service.title}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-brand-blue flex items-center justify-center text-white font-heading font-bold">
                    3
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-brand-darkgray">
                    Project Details
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-0 sm:pl-14">
                  <div>
                    <label className="block font-heading font-semibold text-xs uppercase tracking-wider text-brand-darkgray mb-2">
                      <FiDollarSign className="inline mr-1" size={14} />
                      Estimated Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-blue transition-colors bg-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1m">Under $1 Million</option>
                      <option value="1m-5m">$1 Million - $5 Million</option>
                      <option value="5m-25m">$5 Million - $25 Million</option>
                      <option value="25m-100m">$25 Million - $100 Million</option>
                      <option value="over-100m">Over $100 Million</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-xs uppercase tracking-wider text-brand-darkgray mb-2">
                      <FiCalendar className="inline mr-1" size={14} />
                      Expected Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-blue transition-colors bg-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="under-6m">Under 6 Months</option>
                      <option value="6m-1y">6 Months - 1 Year</option>
                      <option value="1y-2y">1 - 2 Years</option>
                      <option value="2y-5y">2 - 5 Years</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-heading font-semibold text-xs uppercase tracking-wider text-brand-darkgray mb-2">
                      <FiFileText className="inline mr-1" size={14} />
                      Project Description *
                    </label>
                    <textarea
                      name="projectDescription"
                      required
                      rows={6}
                      value={formData.projectDescription}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-blue transition-colors resize-none"
                      placeholder="Describe your project scope, requirements, goals, and any specific challenges..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center gap-2 px-12 py-4 text-base"
                >
                  <FiSend size={18} />
                  Submit Quote Request
                </button>
                <p className="text-gray-400 text-sm mt-4">
                  Our team will respond within 24 hours with a comprehensive proposal.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
