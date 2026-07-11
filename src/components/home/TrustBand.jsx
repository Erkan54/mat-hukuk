import { motion } from 'framer-motion';

const trustItems = [
  { icon: '📋', label: 'Danışmanlık' },
  { icon: '⚖️', label: 'Dava Takibi' },
  { icon: '📝', label: 'Sözleşme İncelemesi' },
  { icon: '🏢', label: 'Kurumsal Hukuk' },
  { icon: '🔒', label: 'KVKK & Bilişim' },
];

export default function TrustBand() {
  return (
    <section className="py-12 bg-white border-y border-border/50 relative overflow-hidden bg-watermark">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 py-4"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-sm font-semibold text-text-primary text-center">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
