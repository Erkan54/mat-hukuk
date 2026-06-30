import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';
import { siteInfo } from '../data/siteInfo';

export default function Career() {
  return (
    <main>
      <PageHero
        title="Kariyer"
        subtitle="Ekibimize katılmak ve birlikte çalışmak için açık pozisyonlarımızı inceleyin."
        breadcrumbs={[
          { label: 'Ana Sayfa', link: '/' },
          { label: 'Kariyer' }
        ]}
      />

      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-12 border border-border/30 shadow-sm"
          >
            <span className="text-5xl">📋</span>
            <h2 className="font-serif text-2xl font-bold text-text-primary mt-6 mb-4">Açık Pozisyonlar</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Şu anda aktif bir ilan bulunmamaktadır. Ancak stajyer avukat ve avukat pozisyonları için
              başvurularınızı her zaman değerlendirmekteyiz.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Başvurularınızı özgeçmişinizle birlikte aşağıdaki e-posta adresine iletebilirsiniz:
            </p>
            <a
              href={`mailto:${siteInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-dark transition-colors"
            >
              {siteInfo.email}
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
