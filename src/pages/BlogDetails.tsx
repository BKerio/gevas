import { useParams, Link, Navigate } from 'react-router-dom';
import { FiCalendar, FiUser, FiTag, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';
import { newsArticles } from '@/data/siteData';

export default function BlogDetails() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = newsArticles.find((a) => a.id === Number(articleId));

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const relatedArticles = newsArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  if (relatedArticles.length < 3) {
    const more = newsArticles
      .filter((a) => a.id !== article.id && !relatedArticles.find((r) => r.id === a.id))
      .slice(0, 3 - relatedArticles.length);
    relatedArticles.push(...more);
  }

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[350px] md:h-[450px] flex items-end overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/30" />
        <div className="relative z-10 container-custom pb-12">
          <span className="inline-block bg-brand-gold text-white px-4 py-1.5 font-heading font-semibold text-xs uppercase tracking-wider mb-4">
            {article.category}
          </span>
          <h1 className="font-heading font-bold text-2xl md:text-4xl text-white max-w-4xl leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 mt-4 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <FiUser size={16} />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar size={16} />
              {article.date}
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
            <Link to="/news" className="text-gray-500 hover:text-brand-blue transition-colors">News</Link>
            <span className="text-gray-400">/</span>
            <span className="text-brand-gold font-heading font-semibold line-clamp-1">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <p className="text-brand-body leading-relaxed text-lg mb-8">
                  {article.excerpt}
                </p>
                <div className="whitespace-pre-line text-brand-body leading-relaxed">
                  {article.content}
                </div>
              </div>

              {/* Tags & Share */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <FiTag size={16} className="text-brand-gold" />
                    <div className="flex gap-2">
                      <span className="bg-brand-surface px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider text-brand-darkgray">
                        {article.category}
                      </span>
                      <span className="bg-brand-surface px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider text-brand-darkgray">
                        Construction
                      </span>
                      <span className="bg-brand-surface px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider text-brand-darkgray">
                        Engineering
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">Share:</span>
                    {[FiFacebook, FiTwitter, FiLinkedin].map((Icon, i) => (
                      <button
                        key={i}
                        className="w-9 h-9 border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all"
                      >
                        <Icon size={14} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author Profile */}
              <div className="mt-12 bg-brand-surface p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-brand-blue flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-2xl text-white">
                      {article.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-brand-darkgray">
                      {article.author}
                    </h4>
                    <p className="text-brand-gold text-xs font-heading font-semibold uppercase tracking-wider mt-1">
                      Gevas International
                    </p>
                    <p className="text-brand-body text-sm mt-3">
                      Contributing insights and updates on engineering, construction, and infrastructure development from the team at Gevas International.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Articles */}
              <div className="bg-brand-surface p-6 mb-6">
                <h4 className="font-heading font-bold text-lg text-brand-darkgray mb-4">
                  Related Articles
                </h4>
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.id}
                      to={`/news/${related.id}`}
                      className="flex gap-4 group"
                    >
                      <div className="w-20 h-16 flex-shrink-0 overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h5 className="font-heading font-semibold text-sm text-brand-darkgray group-hover:text-brand-blue transition-colors line-clamp-2 leading-tight">
                          {related.title}
                        </h5>
                        <span className="text-gray-400 text-xs">{related.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-heading font-bold text-lg text-brand-darkgray mb-4">
                  Categories
                </h4>
                <div className="space-y-2">
                  {['Company News', 'Sustainability', 'Awards', 'Technology', 'Project Update'].map(
                    (cat) => (
                      <Link
                        key={cat}
                        to="/news"
                        className="flex items-center justify-between py-2 border-b border-gray-100 text-sm text-brand-body hover:text-brand-blue transition-colors"
                      >
                        <span>{cat}</span>
                        <span className="text-gray-400 text-xs">
                          {newsArticles.filter((a) => a.category === cat).length}
                        </span>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
