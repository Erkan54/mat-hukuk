import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';
import { practiceAreas } from '../data/practiceAreas';

export default function PracticeAreaDetail() {
  const { id } = useParams();
  const area = practiceAreas.find(a => a.id === id);

  if (!area) {
    return (
      <main>
        <PageHero title="Sayfa Bulunamadı" />
        <div className="section-padding bg-cream text-center">
          <p className="text-text-secondary">Aradığınız hizmet alanı bulunamadı.</p>
          <Link to="/hizmet-alanlari" className="inline-block mt-4 text-navy font-semibold hover:text-gold">← Hizmet Alanlarına Dön</Link>
        </div>
      </main>
    );
  }

  const otherAreas = practiceAreas.filter(a => a.id !== id).slice(0, 3);

  return (
    <main>
      <PageHero
        title={area.title}
        subtitle={area.shortDescription}
        breadcrumbs={[
          { label: 'Ana Sayfa', link: '/' },
          { label: 'Hizmet Alanları', link: '/hizmet-alanlari' },
          { label: area.title }
        ]}
      />

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl p-8 lg:p-10 border border-border/30 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{area.icon}</span>
                    <h2 className="font-serif text-2xl font-bold text-text-primary">{area.title}</h2>
                  </div>
                  <div className="space-y-6 text-text-secondary leading-relaxed mb-8 text-justify">
                    <p>{area.description}</p>
                    {area.criticalInfo && (
                      <div className="p-6 bg-gold/5 border-l-4 border-gold rounded-r-xl my-6">
                        <strong className="text-gold-dark block mb-2 font-serif text-base">Kritik Bilgi</strong>
                        <p className="text-sm text-text-secondary">{area.criticalInfo}</p>
                      </div>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-text-primary mb-6">Sunduğumuz Hizmetler</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {area.services.map((service, index) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 p-3 bg-cream rounded-lg"
                      >
                        <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-text-primary">{service}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-10 p-6 bg-navy/5 rounded-xl">
                    <p className="text-sm text-text-secondary">
                      <strong className="text-navy">Not:</strong> Bu alandaki hukuki süreçler hakkında detaylı bilgi almak ve Sakarya'da durumunuza özel değerlendirme için randevu talep edebilirsiniz.
                    </p>
                    <Link
                      to="/randevu"
                      className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-gold-dark transition-colors"
                    >
                      Randevu Talep Et
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 border border-border/30 shadow-sm"
              >
                <h3 className="font-serif text-lg font-semibold text-text-primary mb-4">Diğer Hizmet Alanları</h3>
                <div className="space-y-3">
                  {otherAreas.map((other) => (
                    <Link
                      key={other.id}
                      to={`/hizmet-alanlari/${other.id}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-cream transition-colors group"
                    >
                      <span className="text-xl">{other.icon}</span>
                      <span className="text-sm font-medium text-text-primary group-hover:text-navy transition-colors">{other.title}</span>
                    </Link>
                  ))}
                  <Link
                    to="/hizmet-alanlari"
                    className="block text-center text-sm font-semibold text-navy hover:text-gold transition-colors mt-4 pt-4 border-t border-border/30"
                  >
                    Tümünü Görüntüle →
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-navy rounded-2xl p-6 text-white"
              >
                <h3 className="font-serif text-lg font-semibold mb-3">Hukuki Destek Alın</h3>
                <p className="text-white/70 text-sm mb-4">Bu alandaki hukuki süreçleriniz hakkında uzman desteği almak için bizimle iletişime geçin.</p>
                <Link
                  to="/iletisim"
                  className="inline-block px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-gold-dark transition-colors"
                >
                  İletişime Geçin
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
