import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* Stagger container for mobile elements */
const mobileContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const mobileItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const mobileItemScale = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-cream overflow-hidden">
      {/* Background Image with Blur and Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/office-bg.jpg"
          alt="Hukuk Bürosu Makam Odası"
          className="w-full h-full object-cover blur-[2px] scale-105 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/60"></div>
        {/* Extra mobile overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/70 via-transparent to-cream/90 lg:hidden"></div>
      </div>

      {/* Animated background lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="hero-line absolute w-px h-40 bg-gradient-to-b from-transparent via-gold/30 to-transparent top-1/4 left-1/4" />
        <div className="hero-line absolute w-px h-60 bg-gradient-to-b from-transparent via-gold/20 to-transparent top-1/3 left-2/3" />
        <div className="hero-line absolute w-px h-32 bg-gradient-to-b from-transparent via-gold/25 to-transparent top-1/2 left-1/2" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-radial from-gold/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-navy/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* ===== MOBILE HERO ===== */}
      <div className="relative z-10 lg:hidden w-full px-4 sm:px-6 py-28 sm:py-32">
        <motion.div
          variants={mobileContainer}
          initial="hidden"
          animate="show"
          className="max-w-lg mx-auto"
        >
          {/* Animated terazi icon for mobile */}
          <motion.div variants={mobileItemScale} className="flex justify-center mb-8">
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center shadow-xl shadow-navy/20"
              >
                <span className="text-4xl">⚖</span>
              </motion.div>
              {/* Pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-2xl border-2 border-gold/40"
              />
              {/* Second ring */}
              <motion.div
                animate={{ scale: [1, 1.7, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="absolute inset-0 rounded-2xl border border-gold/20"
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div variants={mobileItem} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-full">
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-gold rounded-full"
              />
              <span className="text-sm font-medium text-navy">Hukuki Danışmanlık & Dava Takibi</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={mobileItem}
            className="font-serif text-3xl sm:text-4xl font-bold text-text-primary leading-tight text-center"
          >
            Sakarya'da{' '}
            <span className="relative inline-block">
              <span className="relative z-10">hukuki danışmanlık</span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-1 left-0 h-2.5 bg-gold/20 -z-0"
              />
            </span>{' '}
            ve <span className="text-navy">dava takibi</span> hizmetleri
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={mobileItem}
            className="mt-5 text-base text-text-secondary leading-relaxed text-center"
          >
            Ceza, iş, ticaret, aile ve bilişim hukuku alanlarında
            danışmanlık ve dava takibi hizmetleri sunuyoruz.
          </motion.p>

          {/* Animated stats strip */}
          <motion.div variants={mobileItem} className="mt-8 grid grid-cols-3 gap-3">
            {[
              { icon: '⚖️', label: 'Çalışma Alanı', value: '8 Dal' },
              { icon: '📍', label: 'Konum', value: 'Sakarya' },
              { icon: '🎯', label: 'Yaklaşım', value: 'Titiz' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.15, duration: 0.5 }}
                className="glass-effect rounded-xl p-3 text-center"
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-lg block"
                >
                  {stat.icon}
                </motion.span>
                <div className="text-[10px] text-text-secondary mt-1">{stat.label}</div>
                <div className="text-xs font-semibold text-navy">{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={mobileItem} className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/hizmet-alanlari"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-dark transition-all duration-300 shadow-lg shadow-navy/20"
            >
              Hizmet Alanlarımız
              <motion.svg
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </Link>
            <Link
              to="/randevu"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gold/10 text-gold-dark font-semibold rounded-lg border-2 border-gold/30 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
            >
              Randevu Talep Et
            </Link>
          </motion.div>

          {/* Animated gold divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60%' }}
            transition={{ delay: 1.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mt-10"
          />
        </motion.div>
      </div>

      {/* ===== DESKTOP HERO ===== */}
      <div className="relative z-10 hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-gold rounded-full" />
              <span className="text-sm font-medium text-navy">Hukuki Danışmanlık & Dava Takibi</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight"
            >
              Sakarya'da{' '}
              <span className="relative inline-block">
                <span className="relative z-10">hukuki danışmanlık</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-gold/20 -z-0"
                />
              </span>{' '}
              ve <span className="text-navy">dava takibi</span> hizmetleri
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-lg text-text-secondary leading-relaxed max-w-lg"
            >
              Sakarya'da ceza, iş, ticaret, aile ve bilişim hukuku alanlarında
              danışmanlık ve dava takibi hizmetleri sunuyoruz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/hizmet-alanlari"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-dark transition-all duration-300 hover:shadow-xl hover:shadow-navy/20"
              >
                Hizmet Alanlarımız
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/randevu"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold/10 text-gold-dark font-semibold rounded-lg border-2 border-gold/30 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
              >
                Randevu Talep Et
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Abstract Visual (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Main circle */}
              <div className="relative w-80 h-80 mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-gold/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4 rounded-full border border-navy/10"
                />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-navy/5 to-gold/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-serif text-6xl font-bold text-navy/15">⚖</div>
                    <div className="mt-2 text-xs tracking-widest uppercase text-text-secondary/50 font-medium">Hukuk & Adalet</div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 right-0 glass-effect rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="text-xs text-text-secondary">Çalışma Alanı</div>
                <div className="text-sm font-semibold text-navy">8 Hukuk Dalı</div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 left-0 glass-effect rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="text-xs text-text-secondary">Konum</div>
                <div className="text-sm font-semibold text-navy">Sakarya</div>
              </motion.div>

              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-0 right-12 glass-effect rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="text-xs text-text-secondary">Yaklaşım</div>
                <div className="text-sm font-semibold text-navy">Çözüm Odaklı</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-navy/20 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
