import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';
import AppointmentCalendar from '../components/appointment/AppointmentCalendar';
import { hukukAlanlari, gorusmeTurleri } from '../data/appointmentOptions';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', hukukAlani: '', gorusmeTuru: '',
    tarih: '', saatAraligi: '', mesaj: '', kvkkOnay: false, iletisimOnay: false
  });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Ad Soyad zorunludur.';
    if (!formData.phone.trim()) errs.phone = 'Telefon zorunludur.';
    if (!formData.email.trim()) errs.email = 'E-posta zorunludur.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Geçerli bir e-posta giriniz.';
    if (!formData.hukukAlani) errs.hukukAlani = 'Hukuk alanı seçiniz.';
    if (!formData.gorusmeTuru) errs.gorusmeTuru = 'Görüşme türü seçiniz.';
    if (!formData.tarih) errs.tarih = 'Tarih seçiniz.';
    if (!formData.saatAraligi) errs.saatAraligi = 'Saat aralığı seçiniz.';
    if (!formData.kvkkOnay) errs.kvkkOnay = 'KVKK onayı zorunludur.';
    if (!formData.iletisimOnay) errs.iletisimOnay = 'İletişim onayı zorunludur.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      
      setStatus('success');
      setFormData({
        name: '', phone: '', email: '', hukukAlani: '', gorusmeTuru: '',
        tarih: '', saatAraligi: '', mesaj: '', kvkkOnay: false, iletisimOnay: false
      });
      setErrors({});
    } catch (error) {
      console.error('Submit error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => { const next = {...prev}; delete next[field]; return next; });
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 bg-cream border rounded-xl text-text-primary placeholder:text-text-secondary/50 ${
      errors[field] ? 'border-error' : 'border-border'
    }`;

  return (
    <main>
      <PageHero
        title="Randevu Talep Et"
        subtitle="Hukuki danışmanlık veya dava takibi süreçleri hakkında görüşme talebi oluşturabilirsiniz."
        breadcrumbs={[
          { label: 'Ana Sayfa', link: '/' },
          { label: 'Randevu Talep Et' }
        ]}
      />

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left side — Info + Calendar */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="font-serif text-2xl font-bold text-text-primary mb-4">Randevu Hakkında</h2>
              <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                <p>Randevu talepleri uygunluk durumuna göre değerlendirildikten sonra tarafınıza dönüş yapılacaktır.</p>
                <p>Bu sistem direkt randevu oluşturmaz, randevu talebi oluşturur. Avukatın uygunluğu doğrulandıktan sonra sizinle iletişime geçilecektir.</p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border/30">
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🏢</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Ofiste Görüşme</p>
                    <p className="text-xs text-text-secondary">Yüz yüze görüşme</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border/30">
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center">
                    <span className="text-lg">💻</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Online Görüşme</p>
                    <p className="text-xs text-text-secondary">Video konferans ile</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border/30">
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Telefon Görüşmesi</p>
                    <p className="text-xs text-text-secondary">Telefonla danışmanlık</p>
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <div className="mt-8">
                <h3 className="font-serif text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Tarih & Saat Seçimi
                </h3>
                <AppointmentCalendar
                  selectedDate={formData.tarih}
                  selectedTime={formData.saatAraligi}
                  onDateSelect={(date) => handleChange('tarih', date)}
                  onTimeSelect={(time) => handleChange('saatAraligi', time)}
                  dateError={errors.tarih}
                  timeError={errors.saatAraligi}
                />
              </div>
            </motion.div>

            {/* Right side — Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 border border-border/30 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-text-primary mb-6">Randevu Formu</h2>

                {status === 'success' && (
                  <div className="mb-6 p-4 bg-success/10 text-success rounded-xl text-sm">
                    <strong>Randevu talebiniz başarıyla alınmıştır.</strong>
                    <br />En kısa sürede tarafınıza dönüş yapılacaktır.
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 bg-error/10 text-error rounded-xl text-sm">
                    Randevu talebi gönderilirken bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Ad Soyad *</label>
                    <input type="text" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} className={inputClass('name')} placeholder="Adınız ve soyadınız" />
                    {errors.name && <p className="text-xs text-error mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Telefon *</label>
                      <input type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} className={inputClass('phone')} placeholder="05xx xxx xx xx" />
                      {errors.phone && <p className="text-xs text-error mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">E-posta *</label>
                      <input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className={inputClass('email')} placeholder="E-posta adresiniz" />
                      {errors.email && <p className="text-xs text-error mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Hukuk Alanı *</label>
                      <select value={formData.hukukAlani} onChange={(e) => handleChange('hukukAlani', e.target.value)} className={inputClass('hukukAlani')}>
                        <option value="">Seçiniz</option>
                        {hukukAlanlari.map(a => <option key={a} value={a}>{a}</option>)}
                      </select>
                      {errors.hukukAlani && <p className="text-xs text-error mt-1">{errors.hukukAlani}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Görüşme Türü *</label>
                      <select value={formData.gorusmeTuru} onChange={(e) => handleChange('gorusmeTuru', e.target.value)} className={inputClass('gorusmeTuru')}>
                        <option value="">Seçiniz</option>
                        {gorusmeTurleri.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.gorusmeTuru && <p className="text-xs text-error mt-1">{errors.gorusmeTuru}</p>}
                    </div>
                  </div>

                  {/* Selected date/time summary badge */}
                  {(formData.tarih || formData.saatAraligi) && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-wrap items-center gap-3 p-4 bg-navy/5 rounded-xl border border-navy/10"
                    >
                      <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-text-primary font-medium">
                        Seçilen:
                      </span>
                      {formData.tarih && (
                        <span className="text-xs bg-navy text-white px-3 py-1 rounded-full">
                          {new Date(formData.tarih + 'T00:00:00').toLocaleDateString('tr-TR', {
                            day: 'numeric', month: 'long', year: 'numeric'
                          })}
                        </span>
                      )}
                      {formData.saatAraligi && (
                        <span className="text-xs bg-gold text-white px-3 py-1 rounded-full">
                          {formData.saatAraligi} - {(parseInt(formData.saatAraligi.split(':')[0]) + 1).toString().padStart(2, '0')}:00
                        </span>
                      )}
                      {!formData.tarih && <span className="text-xs text-text-secondary italic">← Sol taraftan tarih seçin</span>}
                      {formData.tarih && !formData.saatAraligi && <span className="text-xs text-text-secondary italic">← Saat seçin</span>}
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Mesaj / Açıklama</label>
                    <textarea rows={4} value={formData.mesaj} onChange={(e) => handleChange('mesaj', e.target.value)} className="w-full px-4 py-3 bg-cream border border-border rounded-xl text-text-primary placeholder:text-text-secondary/50 resize-none" placeholder="Görüşme konusu hakkında kısa açıklama..." />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3 pt-2">
                    <label className={`flex items-start gap-3 cursor-pointer p-3 rounded-lg border transition-colors ${
                      errors.kvkkOnay ? 'border-error bg-error/5' : 'border-border/30 bg-cream/50'
                    }`}>
                      <input
                        type="checkbox"
                        checked={formData.kvkkOnay}
                        onChange={(e) => handleChange('kvkkOnay', e.target.checked)}
                        className="mt-1 w-4 h-4 accent-navy"
                      />
                      <span className="text-sm text-text-secondary">
                        <a href="/kvkk-aydinlatma-metni" className="text-navy underline font-medium">KVKK Aydınlatma Metni</a>'ni okudum ve randevu talebim kapsamında kişisel verilerimin işlenmesini kabul ediyorum. *
                      </span>
                    </label>

                    <label className={`flex items-start gap-3 cursor-pointer p-3 rounded-lg border transition-colors ${
                      errors.iletisimOnay ? 'border-error bg-error/5' : 'border-border/30 bg-cream/50'
                    }`}>
                      <input
                        type="checkbox"
                        checked={formData.iletisimOnay}
                        onChange={(e) => handleChange('iletisimOnay', e.target.checked)}
                        className="mt-1 w-4 h-4 accent-navy"
                      />
                      <span className="text-sm text-text-secondary">
                        Randevu talebim için tarafıma iletişim bilgilerim üzerinden dönüş yapılmasını kabul ediyorum. *
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3.5 text-white font-semibold rounded-xl transition-all duration-300 mt-2 ${
                      isLoading ? 'bg-gold/70 cursor-not-allowed' : 'bg-gold hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20'
                    }`}
                  >
                    {isLoading ? 'Gönderiliyor...' : 'Randevu Talebini Gönder'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
