import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      </div>

      {/* Animated background lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="hero-line absolute w-px h-40 bg-gradient-to-b from-transparent via-gold/30 to-transparent top-1/4 left-1/4" />
        <div className="hero-line absolute w-px h-60 bg-gradient-to-b from-transparent via-gold/20 to-transparent top-1/3 left-2/3" />
        <div className="hero-line absolute w-px h-32 bg-gradient-to-b from-transparent via-gold/25 to-transparent top-1/2 left-1/2" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-radial from-gold/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-navy/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
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
              Hukuki süreçlerinizde{' '}
              <span className="text-navy">güvenilir</span> ve{' '}
              <span className="relative inline-block">
                <span className="relative z-10">çözüm odaklı</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-gold/20 -z-0"
                />
              </span>{' '}
              destek
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-lg text-text-secondary leading-relaxed max-w-lg"
            >
              Ceza, iş, ticaret, aile ve bilişim hukuku alanlarında
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

          {/* Right Side - Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
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
                    <div className="mt-2 text-xs tracking-widest uppercase text-text-secondary/50 font-medium">Adalet & Güven</div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 right-0 glass-effect rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="text-xs text-text-secondary">Uzmanlık Alanı</div>
                <div className="text-sm font-semibold text-navy">8 Hukuk Dalı</div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 left-0 glass-effect rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="text-xs text-text-secondary">Mesleki Deneyim</div>
                <div className="text-sm font-semibold text-navy">12+ Yıl</div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
