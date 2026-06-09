import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { navLinks } from '@/data/siteData';

const serviceLinks = [
  { label: "All Services", href: "/services" },
  { label: "Civil Engineering", href: "/services/civil-engineering" },
  { label: "Building Construction", href: "/services/building-construction" },
  { label: "Road Construction", href: "/services/road-construction" },
  { label: "Industrial Projects", href: "/services/industrial-projects" },
  { label: "Mechanical Engineering", href: "/services/mechanical-engineering" },
  { label: "Electrical Engineering", href: "/services/electrical-engineering" },
  { label: "Water Infrastructure", href: "/services/water-infrastructure" },
  { label: "Project Management", href: "/services/project-management" },
  { label: "Consultancy Services", href: "/services/consultancy-services" },
  { label: "Facility Maintenance", href: "/services/facility-maintenance" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 flex items-center justify-center font-heading font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'bg-brand-blue text-white' : 'bg-white/20 text-white backdrop-blur-sm'
            }`}>
              G
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-brand-darkgray' : 'text-white'
              }`}>
                GEVAS
              </span>
              <span className={`text-[10px] font-heading font-semibold tracking-[0.2em] uppercase leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-brand-blue' : 'text-white/80'
              }`}>
                International
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.label === 'Services') {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 font-heading font-semibold text-xs uppercase tracking-wider transition-colors duration-300 ${
                        isActive(link.href)
                          ? isScrolled ? 'text-brand-gold' : 'text-brand-gold'
                          : isScrolled ? 'text-brand-darkgray hover:text-brand-blue' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <FiChevronDown className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Mega Menu */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                        servicesOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-4'
                      }`}
                    >
                      <div className="bg-white shadow-2xl border border-gray-100 w-[640px] grid grid-cols-2 gap-0">
                        <div className="col-span-2 bg-brand-blue px-6 py-4">
                          <h3 className="text-white font-heading font-bold text-lg">Our Services</h3>
                          <p className="text-white/70 text-sm">Comprehensive engineering and construction solutions</p>
                        </div>
                        {serviceLinks.map((slink) => (
                          <Link
                            key={slink.href}
                            to={slink.href}
                            className={`px-6 py-3 font-body text-sm transition-colors duration-200 border-b border-gray-50 hover:bg-brand-gold hover:text-white ${
                              location.pathname === slink.href ? 'bg-brand-gold text-white' : 'text-brand-darkgray'
                            }`}
                          >
                            {slink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 font-heading font-semibold text-xs uppercase tracking-wider transition-colors duration-300 ${
                    isActive(link.href)
                      ? isScrolled ? 'text-brand-gold' : 'text-brand-gold'
                      : isScrolled ? 'text-brand-darkgray hover:text-brand-blue' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/quote"
              className={`font-heading font-semibold text-xs uppercase tracking-wider px-6 py-3 transition-all duration-300 ${
                isScrolled
                  ? 'bg-brand-gold text-white hover:bg-[#c09015]'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white hover:text-brand-dark backdrop-blur-sm'
              }`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-brand-darkgray' : 'text-white'
            }`}
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-0 z-40 transition-all duration-500 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl transition-transform duration-500 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`py-3 px-4 font-heading font-semibold text-sm uppercase tracking-wider border-b border-gray-100 transition-colors ${
                    isActive(link.href)
                      ? 'text-brand-gold'
                      : 'text-brand-darkgray hover:text-brand-blue'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/quote"
                className="mt-4 bg-brand-gold text-white py-4 px-6 font-heading font-semibold text-sm uppercase tracking-wider text-center hover:bg-[#c09015] transition-colors"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
