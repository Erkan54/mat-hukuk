import { motion } from 'framer-motion';

export default function TrustBand() {
  return (
    <section className="py-10 md:py-12 bg-white border-y border-border/40 relative overflow-hidden bg-watermark">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-center">
          
          {/* 1. Dava Takibi */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -3 }}
            className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-gold/25 hover:border-gold/60 shadow-sm hover:shadow-xl hover:shadow-gold/10 transition-all duration-300 flex items-center gap-5 cursor-default overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 via-transparent to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-gold/15 via-gold/5 to-transparent border border-gold/30 text-gold flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-gold group-hover:border-navy transition-all duration-300 shadow-sm">
              <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
                <path d="M7 21h10"/>
                <path d="M12 3v18"/>
                <path d="M3 7h18"/>
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-gold">HUKUKİ HİZMET</span>
                <span className="w-1 h-1 rounded-full bg-gold/50"></span>
                <span className="text-[11px] text-text-secondary/70">Yargısal Süreçler</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy group-hover:text-gold transition-colors duration-300">
                Dava Takibi
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-1 line-clamp-1">
                Tüm adli, idari ve icra süreçlerinde titiz ve etkin hukuki temsil
              </p>
            </div>
          </motion.div>

          {/* 2. Danışmanlık */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-gold/25 hover:border-gold/60 shadow-sm hover:shadow-xl hover:shadow-gold/10 transition-all duration-300 flex items-center gap-5 cursor-default overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 via-transparent to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-gold/15 via-gold/5 to-transparent border border-gold/30 text-gold flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-gold group-hover:border-navy transition-all duration-300 shadow-sm">
              <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-gold">HUKUKİ HİZMET</span>
                <span className="w-1 h-1 rounded-full bg-gold/50"></span>
                <span className="text-[11px] text-text-secondary/70">Önleyici Hukuk</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy group-hover:text-gold transition-colors duration-300">
                Danışmanlık
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-1 line-clamp-1">
                Bireysel ve kurumsal müvekkillere stratejik ve önleyici hukuki danışmanlık
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
