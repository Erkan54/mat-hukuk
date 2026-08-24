import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        onComplete?.();
      }, 600);
    }, 2400);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden touch-none overscroll-none select-none"
          style={{ background: 'linear-gradient(135deg, #1E3A4C 0%, #2F5266 50%, #1E3A4C 100%)' }}
        >
          {/* Central ambient gold glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-light/10 rounded-full blur-2xl pointer-events-none" />

          {/* Ambient gold particles - starts 0.2s after scale */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="absolute inset-0 pointer-events-none overflow-hidden"
          >
            {[...Array(25)].map((_, i) => {
              const size = (i % 4) + 2;
              const left = ((i * 17 + 7) % 100);
              const top = ((i * 23 + 13) % 100);
              const duration = (i % 3) * 1.2 + 2.5;
              const delay = 0.2 + (i % 5) * 0.15;
              const goldColors = ['#D4BC8A', '#C8A96A', '#B08D4A', 'rgba(200, 169, 106, 0.8)'];
              const color = goldColors[i % goldColors.length];

              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: size,
                    height: size,
                    left: `${left}%`,
                    top: `${top}%`,
                    backgroundColor: color,
                    boxShadow: size > 3 ? `0 0 ${size * 2}px ${color}` : 'none',
                  }}
                  animate={{
                    y: [0, -35, 0],
                    x: [0, (i % 2 === 0 ? 12 : -12), 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.7, 1.2, 0.7],
                  }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    delay: delay,
                    ease: 'easeInOut',
                  }}
                />
              );
            })}
          </motion.div>

          <div className="relative flex flex-col items-center">
            {/* Scale / Terazi SVG with liquid fill */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
              <svg
                viewBox="0 0 120 120"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Liquid fill clip - smooth continuous fill */}
                  <clipPath id="liquidFill">
                    <motion.rect
                      x="0"
                      width="120"
                      height="120"
                      initial={{ y: 120 }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 1.7,
                        delay: 0.1,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    />
                  </clipPath>
                  {/* Gold gradient for filled state */}
                  <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4BC8A" />
                    <stop offset="50%" stopColor="#C8A96A" />
                    <stop offset="100%" stopColor="#B08D4A" />
                  </linearGradient>
                </defs>

                {/* Outline version (always visible, faded) */}
                <g opacity="0.15">
                  {/* Pillar */}
                  <rect x="57" y="30" width="6" height="65" rx="3" fill="white" />
                  {/* Base */}
                  <rect x="35" y="90" width="50" height="6" rx="3" fill="white" />
                  {/* Top beam */}
                  <rect x="15" y="27" width="90" height="6" rx="3" fill="white" />
                  {/* Fulcrum triangle */}
                  <polygon points="60,15 52,27 68,27" fill="white" />
                  {/* Left pan strings */}
                  <line x1="25" y1="33" x2="20" y2="58" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="25" y1="33" x2="38" y2="58" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  {/* Left pan */}
                  <path d="M14,58 Q14,68 29,68 Q44,68 44,58 Z" fill="white" />
                  {/* Right pan strings */}
                  <line x1="95" y1="33" x2="82" y2="58" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="95" y1="33" x2="100" y2="58" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  {/* Right pan */}
                  <path d="M76,58 Q76,68 91,68 Q106,68 106,58 Z" fill="white" />
                </g>

                {/* Filled version (clips with liquid animation) */}
                <g clipPath="url(#liquidFill)">
                  {/* Pillar */}
                  <rect x="57" y="30" width="6" height="65" rx="3" fill="url(#goldGrad)" />
                  {/* Base */}
                  <rect x="35" y="90" width="50" height="6" rx="3" fill="url(#goldGrad)" />
                  {/* Top beam */}
                  <rect x="15" y="27" width="90" height="6" rx="3" fill="url(#goldGrad)" />
                  {/* Fulcrum triangle */}
                  <polygon points="60,15 52,27 68,27" fill="url(#goldGrad)" />
                  {/* Left pan strings */}
                  <line x1="25" y1="33" x2="20" y2="58" stroke="#C8A96A" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="25" y1="33" x2="38" y2="58" stroke="#C8A96A" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Left pan */}
                  <path d="M14,58 Q14,68 29,68 Q44,68 44,58 Z" fill="url(#goldGrad)" />
                  {/* Right pan strings */}
                  <line x1="95" y1="33" x2="82" y2="58" stroke="#C8A96A" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="95" y1="33" x2="100" y2="58" stroke="#C8A96A" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Right pan */}
                  <path d="M76,58 Q76,68 91,68 Q106,68 106,58 Z" fill="url(#goldGrad)" />
                </g>
              </svg>
            </div>

            {/* Brand Text - Starts 0.5s after scale appears */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
              className="mt-8 text-center"
            >
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                MAT <span className="text-gold font-sans font-medium">&</span> ALPGÜL
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="h-0.5 bg-gradient-to-r from-gold to-gold-light mx-auto mt-3 rounded-full"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="text-white/60 text-xs tracking-[0.35em] uppercase mt-3 font-medium"
              >
                Hukuk Danışmanlık
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
