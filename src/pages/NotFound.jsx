import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4"
      >
        <h1 className="font-serif text-8xl font-bold text-navy/10">404</h1>
        <h2 className="font-serif text-2xl font-bold text-text-primary mt-4">Sayfa Bulunamadı</h2>
        <p className="text-text-secondary mt-3 mb-8">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-dark transition-colors"
        >
          ← Ana Sayfaya Dön
        </Link>
      </motion.div>
    </main>
  );
}
