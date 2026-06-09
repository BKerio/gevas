import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiArrowRight, FiSearch } from 'react-icons/fi';
import { newsArticles } from '@/data/siteData';

const categories = ['All', 'Company News', 'Sustainability', 'Awards', 'Technology', 'Project Update'];

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = newsArticles.filter((article) => {
    const matchCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchSearch = !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-1.jpg"
          alt="News & Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="relative z-10 text-center container-custom">
          <span className="inline-block text-brand-gold font-heading font-semibold text-sm uppercase tracking-[0.3em] mb-4">
            Stay Informed
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            News & Insights
          </h1>
        </div>
      </div>

      {/* News Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 font-heading font-semibold text-xs uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-brand-blue text-white'
                      : 'bg-gray-100 text-brand-darkgray hover:bg-brand-blue hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-blue transition-colors"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.id}`}
                className="group bg-white border border-gray-100 overflow-hidden hover:shadow-card transition-all duration-500"
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

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
