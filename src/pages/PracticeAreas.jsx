import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import { practiceAreas } from '../data/practiceAreas';

export default function PracticeAreas() {
  return (
    <main>
      <PageHero
        title="Hizmet Alanları"
        subtitle="Geniş kapsamlı hukuki hizmetlerimizle her alanda yanınızdayız."
        breadcrumbs={[
          { label: 'Ana Sayfa', link: '/' },
          { label: 'Hizmet Alanları' }
        ]}
      />

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <Link
                  to={`/hizmet-alanlari/${area.id}`}
                  className="practice-card block bg-white rounded-2xl p-8 h-full border border-border/30"
                >
                  <span className="text-4xl">{area.icon}</span>
                  <h3 className="font-serif text-xl font-semibold text-text-primary mt-5 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {area.shortDescription}
                  </p>
                  <div className="card-line h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-full mb-4" />
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                    Detaylı Bilgi
                    <svg className="w-4 h-4 card-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
