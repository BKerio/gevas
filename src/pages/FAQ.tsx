import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiMinus, FiArrowRight } from 'react-icons/fi';
import SectionTitle from '@/components/shared/SectionTitle';
import { faqCategories } from '@/data/siteData';

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4A017_0%,_transparent_70%)]" />
        </div>
        <div className="relative z-10 text-center container-custom">
          <span className="inline-block text-brand-gold font-heading font-semibold text-sm uppercase tracking-[0.3em] mb-4">
            Support
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services, project process, and company.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <SectionTitle
            title="Got Questions? We've Got Answers."
            description="Browse through our frequently asked questions or contact us directly for more information."
          />

          <div className="mt-16 space-y-6">
            {faqCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="border border-gray-200 overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() => setOpenCategory(openCategory === catIndex ? null : catIndex)}
                  className="w-full flex items-center justify-between p-6 bg-brand-surface hover:bg-gray-100 transition-colors text-left"
                >
                  <h3 className="font-heading font-bold text-xl text-brand-darkgray">
                    {category.title}
                  </h3>
                  {openCategory === catIndex ? (
                    <FiMinus size={20} className="text-brand-gold" />
                  ) : (
                    <FiPlus size={20} className="text-brand-blue" />
                  )}
                </button>

                {/* Questions */}
                {openCategory === catIndex && (
                  <div className="divide-y divide-gray-100">
                    {category.questions.map((q, qIndex) => {
                      const questionKey = `${catIndex}-${qIndex}`;
                      return (
                        <div key={qIndex} className="bg-white">
                          <button
                            onClick={() =>
                              setOpenQuestion(openQuestion === questionKey ? null : questionKey)
                            }
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-surface/50 transition-colors"
                          >
                            <span className="font-heading font-semibold text-sm text-brand-darkgray pr-8">
                              {q.q}
                            </span>
                            {openQuestion === questionKey ? (
                              <FiMinus size={16} className="text-brand-gold flex-shrink-0" />
                            ) : (
                              <FiPlus size={16} className="text-brand-blue flex-shrink-0" />
                            )}
                          </button>
                          {openQuestion === questionKey && (
                            <div className="px-6 pb-6">
                              <p className="text-brand-body text-sm leading-relaxed pl-0">
                                {q.a}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 bg-brand-blue p-8 md:p-12 text-center">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Our team is ready to answer any questions you may have. Reach out to us and we'll get back to you within 24 hours.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 bg-brand-gold hover:bg-[#c09015]">
              Contact Us
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
