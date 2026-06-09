import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { companyInfo } from '@/data/siteData';

const footerLinks = {
  services: [
    { label: 'Civil Engineering', href: '/services/civil-engineering' },
    { label: 'Building Construction', href: '/services/building-construction' },
    { label: 'Road Construction', href: '/services/road-construction' },
    { label: 'Industrial Projects', href: '/services/industrial-projects' },
    { label: 'Project Management', href: '/services/project-management' },
    { label: 'Consultancy Services', href: '/services/consultancy-services' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Projects', href: '/projects' },
    { label: 'Careers', href: '/careers' },
    { label: 'News & Blog', href: '/news' },
    { label: 'FAQ', href: '/faq' },
  ],
  contact: [
    { icon: FiPhone, label: companyInfo.phone },
    { icon: FiMail, label: companyInfo.email },
    { icon: FiMapPin, label: companyInfo.address },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-darkgray text-white">
      {/* CTA Banner */}
      <div className="bg-brand-blue">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
                Ready to Build Your Next Project?
              </h3>
              <p className="text-white/70">
                Let's discuss how Gevas International can bring your vision to life.
              </p>
            </div>
            <Link
              to="/quote"
              className="bg-brand-gold text-white px-8 py-4 font-heading font-semibold text-sm uppercase tracking-wider hover:bg-[#c09015] transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Request a Quote
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-blue flex items-center justify-center font-heading font-bold text-xl text-white">
                G
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight text-white">
                  GEVAS
                </span>
                <span className="text-[10px] font-heading font-semibold tracking-[0.2em] uppercase leading-tight text-brand-gold">
                  International
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Global engineering excellence and construction innovation since 1999. 
              Building tomorrow's landmarks across 25 countries.
            </p>
            <div className="flex gap-3">
              {[FiFacebook, FiTwitter, FiLinkedin, FiInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 text-sm hover:text-brand-gold transition-colors flex items-center gap-2"
                  >
                    <FiArrowRight size={12} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 text-sm hover:text-brand-gold transition-colors flex items-center gap-2"
                  >
                    <FiArrowRight size={12} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <item.icon size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-500 text-xs mb-2">Working Hours</p>
              <p className="text-gray-400 text-sm">Mon - Fri: {companyInfo.hours.weekday}</p>
              <p className="text-gray-400 text-sm">Sat: {companyInfo.hours.saturday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Gevas International. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-brand-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-brand-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-500 text-sm hover:text-brand-gold transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="overflow-hidden pb-4">
        <p className="text-center font-heading font-bold text-[80px] md:text-[120px] text-white/[0.02] uppercase tracking-wider leading-none select-none">
          Gevas International
        </p>
      </div>
    </footer>
  );
}
