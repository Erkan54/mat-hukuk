import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Hakkımızda', path: '/hakkimizda' },
  { name: 'Hizmet Alanları', path: '/hizmet-alanlari' },
  { name: 'Ekibimiz', path: '/ekibimiz' },
  { name: 'Yayınlar', path: '/yayinlar' },
  { name: 'SSS', path: '/sss' },
  { name: 'İletişim', path: '/iletisim' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'navbar-scrolled py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span className={`font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled || !isHome ? 'text-navy' : 'text-navy'
              }`}>
                MAT <span className="text-gold">Hukuk</span>
              </span>
              <span className={`text-[10px] sm:text-xs tracking-[0.3em] uppercase font-medium transition-colors duration-300 ${
                isScrolled || !isHome ? 'text-text-secondary' : 'text-text-secondary'
              }`}>
                Hukuk Bürosu
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 gold-line ${
                    location.pathname === link.path || location.pathname.startsWith(link.path + '/')
                      ? 'text-navy'
                      : 'text-text-secondary hover:text-navy'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/randevu"
                className="ml-4 px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                Randevu Talep Et
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-navy"
              aria-label="Menü"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-navy transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-navy transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-navy transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-3 px-4 text-lg font-medium border-b border-border/50 transition-colors ${
                      location.pathname === link.path ? 'text-navy bg-cream/50' : 'text-text-secondary hover:text-navy'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  to="/randevu"
                  className="block mt-4 py-3 px-6 bg-gold text-white text-center text-lg font-semibold rounded-lg"
                >
                  Randevu Talep Et
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
