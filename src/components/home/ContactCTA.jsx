import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteInfo } from '../../data/siteInfo';

export default function ContactCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl font-bold text-text-primary"
            >
              Hukuki süreciniz için
              <br />
              <span className="text-navy">bizimle iletişime geçin</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-0.5 bg-gradient-to-r from-gold to-gold-light mt-6 rounded-full"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 space-y-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary text-sm">Adres</h4>
                  <p className="text-sm text-text-secondary mt-1">{siteInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary text-sm">Telefon</h4>
                  <p className="text-sm text-text-secondary mt-1">{siteInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary text-sm">Çalışma Saatleri</h4>
                  <p className="text-sm text-text-secondary mt-1">{siteInfo.workingHours}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/iletisim"
                className="px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-dark transition-all duration-300"
              >
                İletişim
              </Link>
              <Link
                to="/randevu"
                className="px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all duration-300"
              >
                Randevu Talep Et
              </Link>
            </motion.div>
          </div>

          {/* Right - Map placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-cream rounded-2xl p-2 shadow-lg border border-border/30"
          >
            <div className="rounded-xl overflow-hidden">
              <iframe
                src={siteInfo.mapEmbedUrl}
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Büro Konumu"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
