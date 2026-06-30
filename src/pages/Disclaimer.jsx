import PageHero from '../components/common/PageHero';
import { motion } from 'framer-motion';

export default function Disclaimer() {
  return (
    <main>
      <PageHero
        title="Sorumluluk Reddi"
        breadcrumbs={[
          { label: 'Ana Sayfa', link: '/' },
          { label: 'Sorumluluk Reddi' }
        ]}
      />
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl p-8 lg:p-12 border border-border/30 shadow-sm">
            <div className="space-y-6 text-text-secondary leading-relaxed text-sm">
              <h2 className="font-serif text-2xl font-bold text-text-primary">Kullanım Koşulları ve Sorumluluk Reddi</h2>
              <p>Bu web sitesinde yer alan bilgiler genel bilgilendirme amacı taşımakta olup, hukuki danışmanlık niteliği taşımamaktadır.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">Bilgilendirme</h3>
              <p>Web sitesinde yer alan makaleler, yazılar ve içerikler genel hukuki bilgilendirme amacıyla hazırlanmıştır. Bu içerikler, herhangi bir hukuki konuda profesyonel danışmanlık yerine geçmez.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">Avukat-Müvekkil İlişkisi</h3>
              <p>Web sitesinin kullanılması veya iletişim formlarının doldurulması, avukat-müvekkil ilişkisi oluşturmaz. Bu ilişki, ancak taraflar arasında yazılı bir vekâletname ilişkisinin kurulmasıyla başlar.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">Sorumluluk Sınırlaması</h3>
              <p>Yılmaz & Demir Hukuk Bürosu, web sitesindeki bilgilerin doğruluğu, güncelliği ve eksiksizliği konusunda herhangi bir garanti vermemektedir. Bu bilgilere dayanılarak alınan kararlardan doğabilecek zararlardan sorumluluk kabul edilmez.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">Dış Bağlantılar</h3>
              <p>Web sitesinde yer alabilecek üçüncü taraf web sitelerine yönlendiren bağlantılardan, ilgili sitelerin içerikleri ve gizlilik uygulamalarından büromuz sorumlu değildir.</p>
              <p className="italic">Son güncelleme: Haziran 2026</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
