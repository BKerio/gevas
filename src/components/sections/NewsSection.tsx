import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';
import SectionTitle from '@/components/shared/SectionTitle';
import { newsArticles } from '@/data/siteData';

export default function NewsSection() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  const featuredArticles = newsArticles.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          label="Latest News"
          title="News & Insights"
          description="Stay updated with the latest developments, industry insights, and company announcements from Gevas International."
        />

        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredArticles.map((article, index) => (
            <Link
              key={article.id}
              to={`/news/${article.id}`}
              className="group bg-white border border-gray-100 overflow-hidden hover:shadow-card transition-all duration-500"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.5s ease-out ${index * 0.15}s`,
              }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-gold text-white px-3 py-1 font-heading font-semibold text-xs uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <FiCalendar size={12} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiUser size={12} />
                    {article.author}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-darkgray group-hover:text-brand-blue transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-brand-body text-sm mt-3 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-brand-gold font-heading font-semibold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Read More
                  <FiArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/news" className="btn-outline-primary inline-flex items-center gap-2">
            View All Articles
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
