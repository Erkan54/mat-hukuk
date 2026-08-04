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

        {/* Desktop Layout - 2 Founders Card Split with Center Line */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-10 items-stretch max-w-5xl mx-auto min-h-[500px]">
          {/* Left Card: Av. Umut Alpgül */}
          <motion.div
            initial={{ opacity: 0, x: 180, rotate: 10, scale: 0.85 }}
            whileInView={{ opacity: 1, x: 0, rotate: -1.5, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, rotate: 0, scale: 1.01 }}
            className="relative bg-white rounded-3xl p-7 shadow-xl shadow-navy/5 border border-border/40 flex flex-col justify-between group overflow-hidden"
          >
            <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <div>
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-navy to-navy-dark shadow-md">
                <img
                  src={team[0].image}
                  alt={team[0].name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="px-3 py-1 bg-gold/90 text-white text-xs font-semibold rounded-full backdrop-blur-md shadow-sm">
                    {team[0].title}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-navy mb-1 group-hover:text-gold transition-colors">
                {team[0].name}
              </h3>
              <p className="text-xs text-text-secondary font-medium mb-4">{team[0].barNumber}</p>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {team[0].shortBio}
              </p>

              <div className="mb-6">
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

          {/* Center Divider Line with Scale Emblem */}
          <div className="relative flex flex-col items-center justify-center py-4">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-[1px] h-full bg-gradient-to-b from-transparent via-gold/50 to-transparent origin-top"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md border border-gold/40 flex items-center justify-center text-gold text-sm z-10"
            >
              ⚖
            </motion.div>
          </div>

          {/* Right Card: Av. Mehmet Akif Trabzon */}
          <motion.div
            initial={{ opacity: 0, x: -180, rotate: -10, scale: 0.85 }}
            whileInView={{ opacity: 1, x: 0, rotate: 1.5, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, rotate: 0, scale: 1.01 }}
            className="relative bg-white rounded-3xl p-7 shadow-xl shadow-navy/5 border border-border/40 flex flex-col justify-between group overflow-hidden"
          >
            <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <div>
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-navy to-navy-dark shadow-md">
                <img
                  src={team[1].image}
                  alt={team[1].name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="px-3 py-1 bg-gold/90 text-white text-xs font-semibold rounded-full backdrop-blur-md shadow-sm">
                    {team[1].title}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-navy mb-1 group-hover:text-gold transition-colors">
                {team[1].name}
              </h3>
              <p className="text-xs text-text-secondary font-medium mb-4">{team[1].barNumber}</p>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {team[1].shortBio}
              </p>

              <div className="mb-6">
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
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {team.map((lawyer, index) => (
            <motion.div
              key={lawyer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-border/30"
            >
              <div className="flex items-center gap-4 mb-4">
                {lawyer.image ? (
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-16 h-16 rounded-xl object-cover object-top border border-gold/30 shrink-0"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center shrink-0">
                    <span className="font-serif text-lg font-bold text-gold">
                      {lawyer.name.split(' ').slice(1).map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy">{lawyer.name}</h3>
                  <p className="text-sm text-gold">{lawyer.title}</p>
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{lawyer.shortBio}</p>
              <div className="flex flex-wrap gap-2">
                {lawyer.expertise.map((exp) => (
                  <span key={exp} className="px-3 py-1 bg-navy/5 text-navy text-xs font-medium rounded-full">
                    {exp}
                  </span>
                ))}
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
