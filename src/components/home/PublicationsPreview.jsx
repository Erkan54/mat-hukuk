import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import { publications } from '../../data/publications';

export default function PublicationsPreview() {
  const recentPubs = publications.slice(0, 3);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Yayınlar"
          title="Güncel yayınlarımız"
          subtitle="Hukuki gelişmeler ve bilgilendirici içeriklerimiz."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-4">
          {recentPubs.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/yayinlar/${pub.slug}`}
                className="publication-card block bg-cream rounded-2xl p-6 h-full border border-border/30"
              >
                <span className="inline-block px-3 py-1 bg-navy/5 text-navy text-xs font-semibold rounded-full">
                  {pub.category}
                </span>
                <h3 className="font-serif text-lg font-semibold text-text-primary mt-4 mb-3">
                  {pub.title}
                </h3>
                <div className="pub-line h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-full mb-3" />
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {pub.excerpt}
                </p>
                <span className="text-xs text-text-secondary">
                  {formatDate(pub.date)}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/yayinlar"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors group"
          >
            Tüm Yayınları Görüntüle
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
