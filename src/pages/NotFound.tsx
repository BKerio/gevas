import { Link } from 'react-router-dom';
import { FiHome, FiArrowRight } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-surface">
      <div className="container-custom text-center">
        {/* 404 Graphic */}
        <div className="mb-8">
          <div className="relative inline-block">
            <span className="font-heading font-bold text-[150px] md:text-[200px] leading-none text-brand-blue/10 select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-blue flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-3xl text-white">G</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="font-heading font-bold text-3xl md:text-4xl text-brand-darkgray mb-4">
          Page Not Found
        </h1>
        <p className="text-brand-body text-lg max-w-lg mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FiHome size={16} />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="btn-outline-primary inline-flex items-center gap-2"
          >
            Contact Support
            <FiArrowRight size={16} />
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm mb-4">Or navigate to:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Services', href: '/services' },
              { label: 'Projects', href: '/projects' },
              { label: 'About Us', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-brand-blue font-heading font-semibold text-sm uppercase tracking-wider hover:text-brand-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
