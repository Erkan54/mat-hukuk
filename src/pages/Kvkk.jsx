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
              <h2 className="font-serif text-2xl font-bold text-text-primary">Kişisel Verilerin Korunması ve İşlenmesi Aydınlatma Metni</h2>
              <p>
                <strong>MAT Hukuk Danışmanlık</strong> olarak, kişisel verilerinizin güvenliği ve gizliliği bizim için en önemli önceliklerden biridir. 6698 sayılı Kişisel Verilerin Korunması Kanunu ("<strong>KVKK</strong>") kapsamında, "Veri Sorumlusu" sıfatıyla, tarafımıza sağladığınız kişisel verilerin ne şekilde, hangi amaçlarla ve hangi hukuki sebeplere dayanarak işlendiği, kimlere aktarılabileceği ve bu kapsamdaki haklarınız konusunda sizi bilgilendirmek isteriz.
              </p>

              <h3 className="font-serif text-lg font-semibold text-text-primary border-b border-border/30 pb-2">1. Veri Sorumlusunun Kimliği</h3>
              <p>
                KVKK uyarınca muhatabınız; hukuk danışmanlığı, dava takibi ve hukuki süreç yönetimi faaliyetlerini yürüten <strong>MAT Hukuk Danışmanlık</strong> ("Büro") veri sorumlusudur.
              </p>

              <h3 className="font-serif text-lg font-semibold text-text-primary border-b border-border/30 pb-2">2. İşlenen Kişisel Verileriniz</h3>
              <p>Hukuki danışmanlık hizmetlerimizden yararlanmanız, randevu oluşturmanız veya web sitemizdeki iletişim formlarını kullanmanız dolayısıyla aşağıdaki kişisel verileriniz işlenebilmektedir:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Kimlik Verileri:</strong> Adınız, soyadınız.</li>
                <li><strong>İletişim Verileri:</strong> E-posta adresiniz, telefon numaranız.</li>
                <li><strong>Hukuki İşlem ve Süreç Verileri:</strong> Hukuki danışmanlık veya dava takibi için paylaştığınız mesaj, dosya özeti, hukuki uyuşmazlığa dair detaylar ve randevu talebinize konu edilen diğer bilgiler.</li>
                <li><strong>İşlem Güvenliği Verileri:</strong> Web sitesi kullanımınız sırasında toplanan IP adresi, log kayıtları.</li>
              </ul>

              <h3 className="font-serif text-lg font-semibold text-text-primary border-b border-border/30 pb-2">3. Kişisel Verilerin İşlenme Amaçları</h3>
              <p>Toplanan kişisel verileriniz; KVKK'nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartlarına uygun olarak aşağıdaki amaçlarla işlenmektedir:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Randevu taleplerinizin alınması, değerlendirilmesi ve tarafınıza dönüş sağlanması,</li>
                <li>Talep ettiğiniz hukuki danışmanlık ve avukatlık hizmetlerinin sunulabilmesi için ön değerlendirme yapılması,</li>
                <li>İletişim formları aracılığıyla ilettiğiniz soru, şikayet ve taleplerin yanıtlanması,</li>
                <li>Büromuzun yasal yükümlülüklerinin (örneğin; bilgi güvenliği, loglama) yerine getirilmesi,</li>
                <li>İleride doğabilecek hukuki uyuşmazlıklarda delil olarak kullanılabilmesi.</li>
              </ul>

              <h3 className="font-serif text-lg font-semibold text-text-primary border-b border-border/30 pb-2">4. Kişisel Verilerin Aktarılması</h3>
              <p>
                Kişisel verileriniz, avukat-müvekkil gizliliği prensibi gereğince kural olarak üçüncü kişilerle <strong>paylaşılmamaktadır.</strong> Ancak, yasal süreçlerin yürütülmesi ve hizmetin ifası zorunlulukları kapsamında;
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Yetkili kamu kurum ve kuruluşları (Mahkemeler, İcra Daireleri, Savcılıklar vb.),</li>
                <li>Bilişim altyapımızı sağlayan ve sunucu/hosting hizmeti aldığımız iş ortaklarımız (verilerin bulut ortamında tutulması amacıyla),</li>
                <li>Kanunen bilgi talep etmeye yetkili merciler ile,</li>
              </ul>
              <p>KVKK'nın 8. ve 9. maddelerinde belirtilen şartlar dahilinde, gerekli güvenlik önlemleri alınarak paylaşılabilecektir.</p>

              <h3 className="font-serif text-lg font-semibold text-text-primary border-b border-border/30 pb-2">5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h3>
              <p>
                Kişisel verileriniz, web sitemiz (randevu formu, iletişim formu vb.) üzerinden elektronik ortamda doğrudan tarafınızca beyan edilmesi suretiyle toplanmaktadır. Bu veriler;
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>KVKK Madde 5/2(c) uyarınca "Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması" (Örn: Hukuki danışmanlık ilişkisi kurulması),</li>
                <li>KVKK Madde 5/2(f) uyarınca "İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması",</li>
                <li>Gereken durumlarda KVKK Madde 5/1 uyarınca açık rızanızın bulunması hukuki sebeplerine dayanılarak işlenmektedir.</li>
              </ul>

              <h3 className="font-serif text-lg font-semibold text-text-primary border-b border-border/30 pb-2">6. İlgili Kişi Olarak Haklarınız (KVKK Madde 11)</h3>
              <p>KVKK'nın 11. maddesi uyarınca veri sorumlusuna başvurarak aşağıdaki haklarınızı kullanabilirsiniz:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Kişisel veri işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme,</li>
                <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
                <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
                <li>KVKK ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme.</li>
              </ul>
              
              <div className="mt-8 p-6 bg-cream rounded-xl border border-border/50">
                <h4 className="font-semibold text-text-primary mb-2">Başvuru ve İletişim</h4>
                <p className="text-sm">
                  KVKK kapsamındaki haklarınıza ilişkin taleplerinizi, kimliğinizi tevsik edici belgeler ile birlikte <strong>ahmetnurullaherkan@gmail.com</strong> adresine e-posta yoluyla iletebilirsiniz. Talepleriniz, niteliğine göre en kısa sürede ve en geç otuz (30) gün içinde ücretsiz olarak sonuçlandırılacaktır.
                </p>
              </div>

              <p className="italic text-xs opacity-70 mt-4 text-right">Son güncelleme: {new Date().toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' })}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
