import { motion } from 'framer-motion';

export default function SectionTitle({ label, title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${
            light ? 'text-gold-light' : 'text-gold'
          }`}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-serif text-3xl md:text-4xl font-bold ${
          light ? 'text-white' : 'text-text-primary'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-lg max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${
            light ? 'text-white/70' : 'text-text-secondary'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: centered ? 60 : 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-0.5 bg-gradient-to-r from-gold to-gold-light mt-6 rounded-full ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
