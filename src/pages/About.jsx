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
        title="Hakkımızda"
        subtitle="Şeffaflık, güven ve müvekkil odaklı çalışma anlayışıyla hukuki süreçlerinizde yanınızdayız."
        breadcrumbs={[
          { label: 'Ana Sayfa', link: '/' },
          { label: 'Hakkımızda' }
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
              <h2 className="font-serif text-3xl font-bold text-text-primary mb-6">Büro Profili</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Yılmaz & Demir Hukuk Bürosu, 2014 yılında İstanbul'da kurulmuş olup, geniş kapsamlı hukuki danışmanlık ve dava takibi hizmetleri sunmaktadır.
                </p>
                <p>
                  Büromuz, ceza hukuku, aile hukuku, iş hukuku, ticaret hukuku, şirketler hukuku, gayrimenkul hukuku, icra ve iflas hukuku ile bilişim ve KVKK hukuku alanlarında uzmanlaşmış kadrosuyla müvekkillerine etkin hukuki destek sağlamaktadır.
                </p>
                <p>
                  Hukuki uyuşmazlıkların çözümünde müvekkil menfaatini ön planda tutan, şeffaf ve çözüm odaklı yaklaşımımızla güvenilir bir hukuki partner olmayı hedefliyoruz.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl font-bold text-text-primary mb-6">Çalışma Prensipleri</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Müvekkillerimizle ilişkilerimizde karşılıklı güven ve saygı esasını temel alıyoruz. Her hukuki sürecin başlangıcında müvekkilimize sürecin olası sonuçları, riskleri ve maliyetleri hakkında kapsamlı bilgilendirme yapıyoruz.
                </p>
                <p>
                  Dava ve danışmanlık süreçlerinde düzenli bilgilendirme yaparak müvekkillerimizin sürecin her aşamasından haberdar olmasını sağlıyoruz.
                </p>
                <p>
                  Hukuk alanındaki güncel gelişmeleri yakından takip ediyor, sürekli mesleki eğitim ve gelişim faaliyetlerine katılıyoruz.
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
