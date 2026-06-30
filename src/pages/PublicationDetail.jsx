import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';
import { publications } from '../data/publications';

export default function PublicationDetail() {
  const { slug } = useParams();
  const publication = publications.find(p => p.slug === slug);

  if (!publication) {
    return (
      <main>
        <PageHero title="Yayın Bulunamadı" />
        <div className="section-padding bg-cream text-center">
          <p className="text-text-secondary">Aradığınız yayın bulunamadı.</p>
          <Link to="/yayinlar" className="inline-block mt-4 text-navy font-semibold hover:text-gold">← Yayınlara Dön</Link>
        </div>
      </main>
    );
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const otherPubs = publications.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <main>
      <PageHero
        title={publication.title}
        subtitle={`${publication.category} • ${formatDate(publication.date)}`}
        breadcrumbs={[
          { label: 'Ana Sayfa', link: '/' },
          { label: 'Yayınlar', link: '/yayinlar' },
          { label: publication.title }
        ]}
      />

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-border/30 shadow-sm">
                <div className="prose max-w-none">
                  {publication.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-text-secondary leading-relaxed mb-4">{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border/30">
                  <p className="text-xs text-text-secondary italic">
                    Bu makale bilgilendirme amaçlıdır ve hukuki danışmanlık niteliği taşımaz.
                    Konuyla ilgili hukuki destek almak için bizimle iletişime geçebilirsiniz.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 border border-border/30 shadow-sm"
              >
                <h3 className="font-serif text-lg font-semibold text-text-primary mb-4">Diğer Yayınlar</h3>
                <div className="space-y-4">
                  {otherPubs.map((pub) => (
                    <Link
                      key={pub.slug}
                      to={`/yayinlar/${pub.slug}`}
                      className="block p-3 rounded-lg hover:bg-cream transition-colors"
                    >
                      <span className="text-xs text-gold font-medium">{pub.category}</span>
                      <h4 className="text-sm font-medium text-text-primary mt-1">{pub.title}</h4>
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-navy rounded-2xl p-6 text-white"
              >
                <h3 className="font-serif text-lg font-semibold mb-3">Danışmanlık Alın</h3>
                <p className="text-white/70 text-sm mb-4">Bu konuyla ilgili hukuki danışmanlık almak ister misiniz?</p>
                <Link to="/randevu" className="inline-block px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-gold-dark transition-colors">
                  Randevu Talep Et
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
