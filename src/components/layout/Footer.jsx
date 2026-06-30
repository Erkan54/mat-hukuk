import { Link } from 'react-router-dom';
import { siteInfo } from '../../data/siteInfo';

const footerLinks = [
  { name: 'Hakkımızda', path: '/hakkimizda' },
  { name: 'Hizmet Alanları', path: '/hizmet-alanlari' },
  { name: 'Ekibimiz', path: '/ekibimiz' },
  { name: 'Yayınlar', path: '/yayinlar' },
  { name: 'İletişim', path: '/iletisim' },
  { name: 'Kariyer', path: '/kariyer' },
];

const legalLinks = [
  { name: 'KVKK Aydınlatma Metni', path: '/kvkk-aydinlatma-metni' },
  { name: 'Gizlilik Politikası', path: '/gizlilik-politikasi' },
  { name: 'Çerez Politikası', path: '/cerez-politikasi' },
  { name: 'Sorumluluk Reddi', path: '/sorumluluk-reddi' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold text-white">
                MAT <span className="text-gold">Hukuk</span>
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-white/60 mt-0.5">
                Hukuk Bürosu
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              {siteInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-6">Sayfalar</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-6">Yasal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-6">İletişim</h4>
            <div className="space-y-4 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{siteInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${siteInfo.phone}`} className="hover:text-gold transition-colors">{siteInfo.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${siteInfo.email}`} className="hover:text-gold transition-colors">{siteInfo.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{siteInfo.workingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} {siteInfo.name}. Tüm hakları saklıdır.
            </p>
            <p className="text-white/30 text-xs">
              Bu site bilgilendirme amaçlıdır ve hukuki danışmanlık niteliği taşımaz.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
