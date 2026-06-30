import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle, breadcrumbs }) {
  return (
    <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-navy-light rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-white/50 mb-6"
          >
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && <span>/</span>}
                {crumb.link ? (
                  <a href={crumb.link} className="hover:text-gold transition-colors">{crumb.label}</a>
                ) : (
                  <span className="text-gold">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-white"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-white/70 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Gold line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 bg-gradient-to-r from-gold to-gold-light mt-8 rounded-full"
        />
      </div>
    </section>
  );
}
