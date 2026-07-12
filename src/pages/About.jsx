import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';

const values = [
  {
    title: 'Şeffaflık',
    description: 'Hukuki süreçlerinizin her aşamasında açık ve anlaşılır bir şekilde bilgilendirme yapmayı ilke ediniriz. Müvekkillerimiz sürecin her adımından haberdardır.',
    icon: '🔍'
  },
  {
    title: 'Güvenilirlik',
    description: 'Müvekkil bilgilerinin gizliliğine azami özen gösterir, avukatlık meslek etiği kurallarına titizlikle uyarız.',
    icon: '🤝'
  },
  {
    title: 'Çözüm Odaklılık',
    description: 'Her hukuki sorunu, müvekkilimizin menfaatini en üst düzeyde koruyacak şekilde stratejik bir yaklaşımla ele alırız.',
    icon: '🎯'
  },
  {
    title: 'Sürekli Gelişim',
    description: 'Hukuk alanındaki güncel gelişmeleri ve mevzuat değişikliklerini yakından takip eder, bilgi birikimimizi sürekli güncelleriz.',
    icon: '📚'
  },
  {
    title: 'Erişilebilirlik',
    description: 'Müvekkillerimize her zaman ulaşılabilir olmayı, sorularına ve ihtiyaçlarına hızlı yanıt vermeyi taahhüt ederiz.',
    icon: '📞'
  },
  {
    title: 'Profesyonellik',
    description: 'İşimizi en yüksek mesleki standartlarda yürütür, her dosyaya aynı titizlik ve özenle yaklaşırız.',
    icon: '⚖️'
  }
];

export default function About() {
  return (
    <main>
      <PageHero
        title={
          <span className="inline-block tracking-wider font-extrabold uppercase text-5xl md:text-6xl lg:text-7xl">
            BİZ <span className="text-gold">KİMİZ</span>
          </span>
        }
        subtitle="Şeffaflık, güven ve müvekkil odaklı çalışma anlayışıyla hukuki süreçlerinizde yanınızdayız."
        breadcrumbs={[
          { label: 'Ana Sayfa', link: '/' },
          { label: 'Biz Kimiz' }
        ]}
      />

      {/* About Content */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-text-primary mb-6">Sakarya Avukat - Büro Profili</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  <strong>Sakarya Avukat</strong> MAT & ALPGÜL Hukuk Danışmanlık, Av. Umut Alpgül ve Av. Mehmet Akif Trabzon tarafından kurulmuştur. <strong>Sakarya</strong>'da Avukat olarak sahip olduğumuz kurumsal ve profesyonel çalışma anlayışı ile başta <strong>Sakarya'da Boşanma Avukatı</strong>, <strong>Sakarya'da Ağır Ceza Avukatı</strong>, <strong>Sakarya'da İcra Avukatı</strong>, Şirket Danışmanlığı ve Alacak Davaları olmak üzere müvekkillerimize birçok alanda avukatlık hizmeti vermektedir.
                </p>
                <p>
                  <strong>Sakarya Avukat</strong> MAT & ALPGÜL Hukuk Danışmanlık Merkezi <strong>Sakarya/Adapazarı</strong> olan ofisimiz, uzun yıllardır mesleki birikim ve tecrübeye sahip olmanın yanı sıra kendisini akademik olarak geliştirmiş alanında uzman geniş ve etkili bir kadroya sahiptir. Kurulduğu günden bu yana deneyimli ve aynı zamanda dinamik yapısıyla farklı sektörlerden gelen gerçek ve tüzel kişi müvekkillerine, müvekkillerinin ticari hedeflerini ve gelişme taleplerini de göz önüne alarak en iyi hizmeti vermek gayesiyle çalışmalarına devam etmektedir.
                </p>
                <p>
                  Görünenin ardına bakarak, müvekkilleri için yaratıcı çözümler bulmakta ve müvekkillerle kurulan yakın işbirliği sayesinde onların iş hedeflerine ulaşmalarında büyük destek sağlamaktadır. <strong>Sakarya</strong>'da avukat-müvekkil ilişkileri karşılıklı güven esasına dayanır.
                </p>
              </div>

              <h2 className="font-serif text-3xl font-bold text-text-primary mb-6 mt-12">Sakarya ile Geçmişimiz</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  MAT & ALPGÜL Hukuk Danışmanlık olarak, köklerimiz <strong>Sakarya</strong>'nın tarihine ve kültürel dokusuna derinden bağlıdır. <strong>Sakarya</strong>'nın ticaret hayatından aile yapısına, <strong>Sakarya Adliyesi</strong>'nden <strong>Adapazarı</strong> merkezindeki ofisimize kadar her alanda hukuki ihtiyaçları karşılarken, şehrimizin dinamiklerini çok iyi biliyoruz.
                </p>
                <p>
                  <strong>Sakarya</strong> halkına ve <strong>Sakarya</strong>'daki işletmelere hizmet etmek bizim için bir gurur kaynağıdır. <strong>Sakarya</strong>'nın <strong>Sapanca</strong>, <strong>Hendek</strong>, <strong>Akyazı</strong>, <strong>Geyve</strong>, <strong>Karasu</strong>, <strong>Kocaali</strong> gibi ilçelerinde edindiğimiz tecrübelerle, <strong>Sakarya</strong>lı hemşehrilerimizin haklarını en iyi şekilde savunmayı sürdürüyoruz. <strong>Sakarya</strong>'da avukat arayanlar için güvenilir bir çözüm ortağı olarak hizmet vermeye devam ediyoruz.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl font-bold text-text-primary mb-6">Mesleki İlkelerimiz</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  MAT & ALPGÜL Hukuk Danışmanlık, 21. yüzyılda hukukun ve avukatlık mesleğinin hak arama özgürlüğünün en önemli güvence mekanizması olduğu bilinciyle, avukat-müvekkil arasında temel mesleki ilkelere hassasiyet göstermektedir. Bu sebeple <strong>Sakarya</strong> hukuk ofisimizin en temelinde Avukatlık meslek ilkeleri gelmektedir.
                </p>
                <p>
                  <strong>Sır saklama ve gizlilik</strong>, avukatlık mesleğinin en önemli etik ilkelerinden biridir. <strong>Sakarya</strong>'daki avukatlık ofisimiz, BM Havana Avukatlık Kuralları, AB Avukatlık Meslek Kuralları ve 1136 sayılı Avukatlık Kanunu ile belirlenen gizlilik ve sır saklama ilkesini hassasiyetle uygulamaktadır.
                </p>
                <p>
                  <strong>Adapazarı</strong> hukuk ofisimiz, müvekkillerine ait bilgi ve belgeleri mesleki sır kapsamında özel bir şekilde gizli tutmakta, üçüncü kişi veya kurumlarla hiçbir şekilde paylaşmamaktadır. Hukuk ofisimiz, vekâletini aldığı müvekkillerini dava süreci ve yapılan işin aşamaları hakkında sürekli bir bilgi akışıyla bilgilendirmektedir.
                </p>
                <p>
                  Hak arama özgürlüğünün güvencesi olan avukatlık mesleğinin icrasında <strong>bağımsızlık</strong> etkin bir savunma için zorunludur. <strong>Sakarya</strong>'da avukat, mesleğini ifa ederken tüm kişi ve özellikle kamu kurumlarına karşı bağımsız hareket etmelidir. <strong>Sakarya Adapazarı</strong> Avukatlık ofisimiz, bağımsızlık ilkesini mesleki faaliyetin önemli bir unsuru olarak uygulamaktadır.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-semibold tracking-wider uppercase text-gold"
            >
              Değerlerimiz
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-bold text-text-primary mt-3"
            >
              Temel değerlerimiz
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream rounded-2xl p-8 border border-border/30 hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-4xl">{value.icon}</span>
                <h3 className="font-serif text-xl font-semibold text-text-primary mt-4 mb-3">{value.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
