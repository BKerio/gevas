import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { companyInfo } from '@/data/siteData';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const offices = [
    {
      city: 'Nairobi',
      address: 'Nairobi, Kenya',
      phone: '+254 728 932651',
      email: 'info@gevasinternational.co.ke',
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-1.jpg"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="relative z-10 text-center container-custom">
          <span className="inline-block text-brand-gold font-heading font-semibold text-sm uppercase tracking-[0.3em] mb-4">
            Get In Touch
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white -mt-20 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FiMapPin, title: 'Head Office', detail: companyInfo.address },
              { icon: FiPhone, title: 'Phone', detail: companyInfo.phone },
              { icon: FiMail, title: 'Email', detail: companyInfo.email },
              { icon: FiClock, title: 'Working Hours', detail: `${companyInfo.hours.weekday}` },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-brand-surface p-6 border-t-4 border-brand-gold text-center"
              >
                <div className="w-14 h-14 bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-brand-blue" />
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-darkgray mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-body text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-brand-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 md:p-12">
              <h2 className="font-heading font-bold text-2xl text-brand-darkgray mb-2">
                Send Us a Message
              </h2>
              <p className="text-brand-body text-sm mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <FiCheck size={24} className="text-green-600" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-600 text-sm">
                    Thank you for reaching out. We'll respond to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-heading font-semibold text-xs uppercase tracking-wider text-brand-darkgray mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-blue transition-colors"
                        placeholder="John Smith"
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
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-heading font-semibold text-xs uppercase tracking-wider text-brand-darkgray mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-blue transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block font-heading font-semibold text-xs uppercase tracking-wider text-brand-darkgray mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-blue transition-colors bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="quote">Request a Quote</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="careers">Careers</option>
                        <option value="media">Media & Press</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-xs uppercase tracking-wider text-brand-darkgray mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-blue transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <FiSend size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-brand-darkgray mb-8">
                Our Office
              </h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white p-6 border-l-4 border-brand-gold">
                    <h3 className="font-heading font-bold text-lg text-brand-darkgray mb-3">
                      {office.city}
                    </h3>
                    <div className="space-y-2 text-sm text-brand-body">
                      <p className="flex items-start gap-2">
                        <FiMapPin size={16} className="text-brand-gold mt-0.5 flex-shrink-0" />
                        {office.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <FiPhone size={16} className="text-brand-gold flex-shrink-0" />
                        {office.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <FiMail size={16} className="text-brand-gold flex-shrink-0" />
                        {office.email}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-heading font-bold text-lg text-brand-darkgray mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[FiFacebook, FiTwitter, FiLinkedin, FiInstagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 bg-brand-blue flex items-center justify-center text-white hover:bg-brand-gold transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
