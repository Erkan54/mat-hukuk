import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { team } from '../../data/team';

export default function TeamPreview() {
  return (
    <section className="relative section-padding bg-cream overflow-hidden">
      {/* Background Image with Blur and Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/images/team-bg.jpg" 
          alt="Hukuk Bürosu Ekip" 
          className="w-full h-full object-cover blur-[2px] scale-105 opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 to-cream/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-gold"
          >
            Ekibimiz
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl font-bold text-text-primary"
          >
            Ekibimizi tanıyın
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-0.5 bg-gradient-to-r from-gold to-gold-light mt-6 rounded-full mx-auto"
          />
        </div>

        {/* Desktop Layout - Straight Cards Spread Wide Across Screen */}
        <div className="hidden lg:flex items-center justify-between gap-6 max-w-[1400px] mx-auto min-h-[460px] py-4">
          
          {/* 1. Umut Alpgül Photo Frame (Far-Left Edge) */}
          <motion.div
            initial={{ opacity: 0, x: 160 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
            className="w-64 h-[440px] rounded-3xl overflow-hidden shadow-xl border-2 border-gold/40 relative group shrink-0 bg-gradient-to-br from-navy to-navy-dark cursor-pointer -ml-2.5"
          >
            <img
              src={team[0].image}
              alt={team[0].name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="px-3 py-1 bg-gold/90 text-white text-[11px] font-semibold rounded-full backdrop-blur-md shadow-sm">
                {team[0].title}
              </span>
              <h3 className="font-serif text-xl font-bold text-white mt-2 leading-tight">
                {team[0].name}
              </h3>
            </div>
          </motion.div>

          {/* 2. Umut Alpgül Translucent Info Card (Left Inner) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
            className="flex-1 max-w-[360px] h-[440px] glass-effect bg-white/90 backdrop-blur-xl border border-border/50 rounded-3xl p-6 shadow-xl shadow-navy/5 flex flex-col justify-between group overflow-hidden cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gold tracking-wider uppercase">Kurucu Ortak</span>
                <span className="text-[11px] text-text-secondary font-medium">{team[0].barNumber}</span>
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                {team[0].name}
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {team[0].shortBio}
              </p>

              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold mb-2.5">
                  Çalışma Alanları
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {team[0].expertise.map((exp) => (
                    <span
                      key={exp}
                      className="px-2.5 py-1 bg-navy/5 text-navy text-xs font-medium rounded-lg group-hover:bg-navy/10 transition-colors"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50 flex items-center justify-between">
              <span className="text-xs font-semibold text-navy">{team[0].experience}</span>
              <Link
                to="/ekibimiz"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold group-hover:text-navy transition-colors"
              >
                Profili İncele
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* 3. Center Divider Line with Scale Emblem */}
          <div className="relative flex flex-col items-center justify-center h-[440px] px-2 shrink-0">
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-[1px] h-full bg-gradient-to-b from-transparent via-gold/60 to-transparent origin-top"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md border border-gold/40 flex items-center justify-center text-gold text-sm z-10"
            >
              ⚖
            </motion.div>
          </div>

          {/* 4. Mehmet Akif Trabzon Translucent Info Card (Right Inner) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
            className="flex-1 max-w-[360px] h-[440px] glass-effect bg-white/90 backdrop-blur-xl border border-border/50 rounded-3xl p-6 shadow-xl shadow-navy/5 flex flex-col justify-between group overflow-hidden cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gold tracking-wider uppercase">Kurucu Ortak</span>
                <span className="text-[11px] text-text-secondary font-medium">{team[1].barNumber}</span>
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                {team[1].name}
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {team[1].shortBio}
              </p>

              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold mb-2.5">
                  Çalışma Alanları
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {team[1].expertise.map((exp) => (
                    <span
                      key={exp}
                      className="px-2.5 py-1 bg-navy/5 text-navy text-xs font-medium rounded-lg group-hover:bg-navy/10 transition-colors"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50 flex items-center justify-between">
              <span className="text-xs font-semibold text-navy">{team[1].experience}</span>
              <Link
                to="/ekibimiz"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold group-hover:text-navy transition-colors"
              >
                Profili İncele
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* 5. Mehmet Akif Trabzon Photo Frame (Far-Right Edge) */}
          <motion.div
            initial={{ opacity: 0, x: -160 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
            className="w-64 h-[440px] rounded-3xl overflow-hidden shadow-xl border-2 border-gold/40 relative group shrink-0 bg-gradient-to-br from-navy to-navy-dark cursor-pointer -mr-2.5"
          >
            <img
              src={team[1].image}
              alt={team[1].name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="px-3 py-1 bg-gold/90 text-white text-[11px] font-semibold rounded-full backdrop-blur-md shadow-sm">
                {team[1].title}
              </span>
              <h3 className="font-serif text-xl font-bold text-white mt-2 leading-tight">
                {team[1].name}
              </h3>
            </div>
          </motion.div>

        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-5">
          {team.filter(lawyer => lawyer.role !== 'assistant' && lawyer.name !== 'Eyüp Ensar Sayılı').map((lawyer, index) => (
            <motion.div
              key={lawyer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-border/30"
            >
              <div className="flex items-start gap-4 mb-4">
                {lawyer.image ? (
                  <div className="w-28 h-36 rounded-xl overflow-hidden border border-gold/30 shrink-0 bg-navy-dark shadow-sm">
                    <img
                      src={lawyer.image}
                      alt={lawyer.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-28 h-36 rounded-xl bg-gradient-to-br from-navy to-navy-dark flex flex-col items-center justify-center shrink-0 border border-gold/30">
                    <span className="font-serif text-2xl font-bold text-gold mb-1">
                      {lawyer.name.split(' ').slice(1).map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <div className="flex-1 min-w-0 pt-1">
                  <span className="inline-block px-2.5 py-0.5 bg-gold/10 text-gold text-[11px] font-semibold rounded-full mb-1.5">
                    {lawyer.title}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-navy leading-snug">{lawyer.name}</h3>
                  {lawyer.barNumber && lawyer.barNumber !== '-' && (
                    <p className="text-[11px] text-text-secondary mt-1">{lawyer.barNumber}</p>
                  )}
                  <p className="text-xs text-navy font-semibold mt-2.5">{lawyer.experience}</p>
                </div>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-4">{lawyer.shortBio}</p>

              <div className="pt-3 border-t border-border/40 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5 min-w-0">
                  {lawyer.expertise.map((exp) => (
                    <span key={exp} className="px-2 py-0.5 bg-navy/5 text-navy text-[11px] font-medium rounded-md">
                      {exp}
                    </span>
                  ))}
                </div>
                <Link
                  to="/ekibimiz"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-gold hover:text-navy transition-colors shrink-0 ml-auto"
                >
                  İncele
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/ekibimiz"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors group"
          >
            Tüm Ekibi Görüntüle
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
