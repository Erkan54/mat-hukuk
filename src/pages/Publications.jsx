import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import { publications } from '../data/publications';

const categories = ['Tümü', 'Makaleler', 'Güncel Kararlar', 'Mevzuat Değişiklikleri'];

export default function Publications() {
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filteredPubs = activeCategory === 'Tümü'
    ? publications
    : publications.filter(p => p.category === activeCategory);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <main>
      <PageHero
        title="Yayınlar"
        subtitle="Hukuki gelişmeler, makaleler ve güncel kararlar hakkında bilgilendirici içerikler."
        breadcrumbs={[
          { label: 'Ana Sayfa', link: '/' },
          { label: 'Yayınlar' }
        ]}
      />

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-navy text-white'
                    : 'bg-white text-text-secondary hover:bg-navy/5 hover:text-navy border border-border/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Publications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPubs.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                layout
              >
                <Link
                  to={`/yayinlar/${pub.slug}`}
                  className="publication-card block bg-white rounded-2xl p-6 h-full border border-border/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-navy/5 text-navy text-xs font-semibold rounded-full">
                      {pub.category}
                    </span>
                    <span className="text-xs text-text-secondary">{formatDate(pub.date)}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-text-primary mb-3">{pub.title}</h3>
                  <div className="pub-line h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-full mb-3" />
                  <p className="text-sm text-text-secondary leading-relaxed">{pub.excerpt}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-navy">
                    Devamını Oku
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
