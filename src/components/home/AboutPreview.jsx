import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';

const principles = [
  {
    number: '01',
    title: 'Şeffaf Bilgilendirme',
    description: 'Hukuki süreçleriniz hakkında her aşamada açık ve anlaşılır bilgilendirme yapıyoruz.'
  },
  {
    number: '02',
    title: 'Süreç Takibi',
    description: 'Davanızın veya danışmanlık sürecinizin her adımını titizlikle takip ediyor ve raporluyoruz.'
  },
  {
    number: '03',
    title: 'Çözüm Odaklı Yaklaşım',
    description: 'Müvekkillerimizin haklarını en etkin şekilde korumak için stratejik çözümler geliştiriyoruz.'
  }
];

export default function AboutPreview() {
  return (
    <section className="relative section-padding bg-cream overflow-hidden">
      {/* Background Image with Blur and Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80" 
          alt="Hukuk Bürosu Arka Plan" 
          className="w-full h-full object-cover blur-[2px] scale-105 opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 to-cream/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionTitle
              label="Hakkımızda"
              title="Güvenilir hukuki destek"
              subtitle="Büromuz, hukuki uyuşmazlıkların çözümünde şeffaflık, güven ve müvekkil odaklı çalışma anlayışını esas alır."
              centered={false}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/hakkimizda"
                className="inline-flex items-center gap-2 px-6 py-3 mt-2 bg-navy text-white font-semibold rounded-lg hover:bg-navy-dark transition-all duration-300 group"
              >
                Detaylı İnceleme
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right - Principle Cards */}
          <div className="space-y-6">
            {principles.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/30"
              >
                <div className="flex items-start gap-5">
                  <span className="font-serif text-3xl font-bold text-gold/30">{item.number}</span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
