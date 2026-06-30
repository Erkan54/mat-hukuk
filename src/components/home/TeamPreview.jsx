import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { team } from '../../data/team';

export default function TeamPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const leftX = useTransform(scrollYProgress, [0.2, 0.5], [0, -60]);
  const rightX = useTransform(scrollYProgress, [0.2, 0.5], [0, 60]);
  const centerOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const centerY = useTransform(scrollYProgress, [0.3, 0.5], [30, 0]);

  const activeLawyer = team[activeIndex];

  return (
    <section ref={sectionRef} className="relative section-padding bg-cream overflow-hidden">
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
            Deneyimli kadromuz
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-0.5 bg-gradient-to-r from-gold to-gold-light mt-6 rounded-full mx-auto"
          />
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative flex items-center justify-center min-h-[500px]">
            {/* Left Lawyer */}
            <motion.div
              style={{ x: leftX }}
              className="absolute left-8 xl:left-16"
              onMouseEnter={() => setActiveIndex(0)}
            >
              <div
                className={`team-photo relative w-56 h-72 rounded-2xl overflow-hidden cursor-pointer shadow-xl ${
                  activeIndex !== 0 ? 'blurred' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-serif text-2xl font-bold text-gold">AY</span>
                    </div>
                    <p className="text-white text-sm font-medium">{team[0].name}</p>
                    <p className="text-white/60 text-xs mt-1">{team[0].title}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center CV Card */}
            <motion.div
              style={{ opacity: centerOpacity, y: centerY }}
              className="relative z-10 glass-effect rounded-2xl p-8 max-w-md shadow-2xl"
            >
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-2xl font-bold text-navy">{activeLawyer.name}</h3>
                <p className="text-gold font-medium mt-1">{activeLawyer.title}</p>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-text-secondary font-semibold mb-2">Uzmanlık Alanları</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeLawyer.expertise.map((exp) => (
                        <span key={exp} className="px-3 py-1 bg-navy/5 text-navy text-xs font-medium rounded-full">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-text-secondary font-semibold mb-2">Eğitim</h4>
                    {activeLawyer.education.map((edu) => (
                      <p key={edu} className="text-sm text-text-primary">{edu}</p>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <div>
                      <span className="text-xs text-text-secondary">Deneyim</span>
                      <p className="text-sm font-semibold text-navy">{activeLawyer.experience}</p>
                    </div>
                    <div>
                      <span className="text-xs text-text-secondary">Yayın</span>
                      <p className="text-sm font-semibold text-navy">{activeLawyer.publications} Makale</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/ekibimiz"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-navy hover:text-gold transition-colors group"
                >
                  Profili İncele
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Lawyer */}
            <motion.div
              style={{ x: rightX }}
              className="absolute right-8 xl:right-16"
              onMouseEnter={() => setActiveIndex(1)}
            >
              <div
                className={`team-photo relative w-56 h-72 rounded-2xl overflow-hidden cursor-pointer shadow-xl ${
                  activeIndex !== 1 ? 'blurred' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-serif text-2xl font-bold text-gold">ZD</span>
                    </div>
                    <p className="text-white text-sm font-medium">{team[1].name}</p>
                    <p className="text-white/60 text-xs mt-1">{team[1].title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-gold">
                    {lawyer.name.split(' ').slice(1).map(n => n[0]).join('')}
                  </span>
                </div>
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
