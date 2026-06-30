import PageHero from '../components/common/PageHero';
import { motion } from 'framer-motion';

export default function Cookies() {
  return (
    <main>
      <PageHero
        title="Çerez Politikası"
        breadcrumbs={[
          { label: 'Ana Sayfa', link: '/' },
          { label: 'Çerez Politikası' }
        ]}
      />
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl p-8 lg:p-12 border border-border/30 shadow-sm">
            <div className="space-y-6 text-text-secondary leading-relaxed text-sm">
              <h2 className="font-serif text-2xl font-bold text-text-primary">Çerez Politikası</h2>
              <p>Bu web sitesi, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanmaktadır.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">Çerez Nedir?</h3>
              <p>Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza yerleştirilen küçük metin dosyalarıdır.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">Kullanılan Çerez Türleri</h3>
              <p><strong>Zorunlu Çerezler:</strong> Web sitesinin düzgün çalışması için gerekli olan çerezlerdir. Bu çerezler devre dışı bırakılamaz.</p>
              <p><strong>Analitik Çerezler:</strong> Ziyaretçilerin web sitesini nasıl kullandığını anlamamıza yardımcı olan çerezlerdir.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">Çerezleri Yönetme</h3>
              <p>Tarayıcı ayarlarınız üzerinden çerezleri kabul etmeyi veya reddetmeyi tercih edebilirsiniz. Çerezleri devre dışı bırakmanız halinde web sitemizin bazı özelliklerinin düzgün çalışmayabileceğini hatırlatmak isteriz.</p>
              <p className="italic">Son güncelleme: Haziran 2026</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
