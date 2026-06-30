import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';
import { siteInfo } from '../data/siteInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Submit error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <PageHero
        title="İletişim"
        subtitle="Hukuki süreçleriniz hakkında bizimle iletişime geçin."
        breadcrumbs={[
          { label: 'Ana Sayfa', link: '/' },
          { label: 'İletişim' }
        ]}
      />

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="font-serif text-2xl font-bold text-text-primary mb-6">İletişim Bilgileri</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Adres</h3>
                    <p className="text-sm text-text-secondary mt-1">{siteInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Telefon</h3>
                    <p className="text-sm text-text-secondary mt-1">{siteInfo.phone}</p>
                    <p className="text-sm text-text-secondary">Faks: {siteInfo.fax}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">E-posta</h3>
                    <p className="text-sm text-text-secondary mt-1">{siteInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Çalışma Saatleri</h3>
                    <p className="text-sm text-text-secondary mt-1">{siteInfo.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl p-2 border border-border/30 shadow-sm">
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    src={siteInfo.mapEmbedUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Büro Konumu"
                  />
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 border border-border/30 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-text-primary mb-6">İletişim Formu</h2>

                {status === 'success' && (
                  <div className="mb-6 p-4 bg-success/10 text-success rounded-xl text-sm">
                    Mesajınız başarıyla gönderildi. En kısa sürede tarafınıza dönüş yapılacaktır.
                  </div>
                )}
                {status === 'error' && (
                  <div className="mb-6 p-4 bg-error/10 text-error rounded-xl text-sm">
                    Mesaj gönderilirken bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Ad Soyad *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-cream border border-border rounded-xl text-text-primary placeholder:text-text-secondary/50"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">E-posta *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-cream border border-border rounded-xl text-text-primary placeholder:text-text-secondary/50"
                        placeholder="E-posta adresiniz"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Telefon</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-cream border border-border rounded-xl text-text-primary placeholder:text-text-secondary/50"
                        placeholder="05xx xxx xx xx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Konu *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 bg-cream border border-border rounded-xl text-text-primary placeholder:text-text-secondary/50"
                      placeholder="Mesaj konusu"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Mesajınız *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 bg-cream border border-border rounded-xl text-text-primary placeholder:text-text-secondary/50 resize-none"
                      placeholder="Mesajınızı buraya yazınız..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3.5 text-white font-semibold rounded-xl transition-all duration-300 ${
                      isLoading ? 'bg-navy/70 cursor-not-allowed' : 'bg-navy hover:bg-navy-dark hover:shadow-lg'
                    }`}
                  >
                    {isLoading ? 'Gönderiliyor...' : 'Gönder'}
                  </button>

                  <p className="text-xs text-text-secondary text-center">
                    Bu formu göndererek <a href="/kvkk-aydinlatma-metni" className="text-navy underline">KVKK Aydınlatma Metni</a>'ni okuduğunuzu kabul etmiş olursunuz.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
