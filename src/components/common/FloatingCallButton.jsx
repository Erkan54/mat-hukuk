import { motion } from 'framer-motion';
import { siteInfo } from '../../data/siteInfo';

export default function FloatingCallButton() {
  const formattedTel = siteInfo.phone.replace(/\s+/g, '');

  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 right-5 z-40"
      aria-label="Hızlı Arama Butonu"
    >
      <a
        href={`tel:${formattedTel}`}
        aria-label={`Büromuzu Arayın: ${siteInfo.phone}`}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-[60px] sm:h-[60px] bg-navy text-gold rounded-full shadow-xl shadow-navy/30 border-2 border-gold/40 hover:border-gold hover:bg-navy-dark hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-sm"
      >
        {/* Subtle pulsing gold ring */}
        <span className="absolute inset-0 rounded-full bg-gold/20 animate-ping opacity-60 pointer-events-none" />

        {/* Phone Icon */}
        <svg
          className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>

        {/* Desktop Hover Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-navy/95 text-white text-xs font-medium rounded-lg shadow-md border border-gold/30 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none translate-x-2 group-hover:translate-x-0 transition-all duration-200 hidden sm:block">
          <span className="text-gold mr-1.5">📞</span>
          {siteInfo.phone}
        </span>
      </a>
    </motion.aside>
  );
}
