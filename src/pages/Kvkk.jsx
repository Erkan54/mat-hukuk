import PageHero from '../components/common/PageHero';
import { motion } from 'framer-motion';

export default function Kvkk() {
  return (
    <main>
      <PageHero
        title="KVKK Aydınlatma Metni"
        breadcrumbs={[
          { label: 'Ana Sayfa', link: '/' },
          { label: 'KVKK Aydınlatma Metni' }
        ]}
      />
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl p-8 lg:p-12 border border-border/30 shadow-sm">
            <div className="space-y-6 text-text-secondary leading-relaxed text-sm">
              <h2 className="font-serif text-2xl font-bold text-text-primary">Kişisel Verilerin Korunması Hakkında Aydınlatma Metni</h2>
              <p>Yılmaz & Demir Hukuk Bürosu olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, kişisel verilerinizin korunmasına büyük önem vermekteyiz.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">1. Veri Sorumlusu</h3>
              <p>Veri sorumlusu sıfatıyla, kişisel verileriniz Yılmaz & Demir Hukuk Bürosu tarafından aşağıda açıklanan amaçlar doğrultusunda işlenmektedir.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">2. Kişisel Verilerin İşlenme Amacı</h3>
              <p>Kişisel verileriniz; hukuki danışmanlık hizmetlerinin sunulması, randevu talep süreçlerinin yürütülmesi, iletişim faaliyetlerinin yürütülmesi, yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">3. İşlenen Kişisel Veriler</h3>
              <p>Ad soyad, telefon numarası, e-posta adresi, randevu konusu ve mesaj içeriği gibi bilgiler işlenmektedir.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">4. Kişisel Verilerin Aktarılması</h3>
              <p>Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmamaktadır.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h3>
              <p>Kişisel verileriniz, web sitemizdeki formlar aracılığıyla elektronik ortamda, KVKK'nın 5. maddesinde belirtilen açık rıza ve meşru menfaat hukuki sebeplerine dayanılarak toplanmaktadır.</p>
              <h3 className="font-serif text-lg font-semibold text-text-primary">6. İlgili Kişinin Hakları</h3>
              <p>KVKK'nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurtiçinde veya yurtdışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme, silinmesini veya yok edilmesini isteme haklarına sahipsiniz.</p>
              <p className="italic">Son güncelleme: Haziran 2026</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
