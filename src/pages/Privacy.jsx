import PageHero from '../components/common/PageHero';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <main>
      <PageHero
        title="Gizlilik Politikası"
        breadcrumbs={[
          { label: 'Ana Sayfa', link: '/' },
          { label: 'Gizlilik Politikası' }
        ]}
      />
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl p-8 lg:p-12 border border-border/30 shadow-sm">
            <div className="space-y-6 text-text-secondary leading-relaxed text-sm">
              <h2 className="font-serif text-2xl font-bold text-text-primary">Gizlilik Politikası</h2>
              <p>Yılmaz & Demir Hukuk Bürosu olarak, web sitemizi ziyaret eden kullanıcıların gizliliğini korumayı taahhüt ediyoruz.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">Toplanan Bilgiler</h3>
              <p>Web sitemizi ziyaret ettiğinizde, tarayıcı türü, erişim zamanı ve IP adresi gibi teknik bilgiler otomatik olarak toplanabilir. İletişim ve randevu formları aracılığıyla sağladığınız kişisel bilgiler yalnızca belirtilen amaçlarla kullanılır.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">Bilgilerin Kullanımı</h3>
              <p>Toplanan bilgiler; hizmet kalitesinin artırılması, iletişim taleplerinin yanıtlanması ve yasal yükümlülüklerin yerine getirilmesi amacıyla kullanılır.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">Bilgi Güvenliği</h3>
              <p>Kişisel bilgilerinizin güvenliğini sağlamak için uygun teknik ve idari tedbirler alınmaktadır.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">Üçüncü Taraflar</h3>
              <p>Kişisel bilgileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz.</p>
              <p className="italic">Son güncelleme: Haziran 2026</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
