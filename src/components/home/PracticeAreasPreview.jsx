import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import { practiceAreas } from '../../data/practiceAreas';

export default function PracticeAreasPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Hizmet Alanları"
          title="Uzmanlık alanlarımız"
          subtitle="Geniş kapsamlı hukuki hizmetlerimizle her alanda yanınızdayız."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            >
              <Link
                to={`/hizmet-alanlari/${area.id}`}
                className="practice-card block bg-cream rounded-2xl p-6 h-full border border-border/30"
              >
                <span className="text-3xl">{area.icon}</span>
                <h3 className="font-serif text-lg font-semibold text-text-primary mt-4 mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {area.shortDescription}
                </p>
                <div className="card-line h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-full mb-4" />
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy">
                  İncele
                  <svg className="w-4 h-4 card-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/hizmet-alanlari"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors group"
          >
            Tüm Hizmet Alanlarını Görüntüle
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
