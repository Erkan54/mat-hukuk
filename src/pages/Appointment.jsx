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

    // Format date for email
    const formattedDate = formData.tarih
      ? new Date(formData.tarih + 'T00:00:00').toLocaleDateString('tr-TR', {
          weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
        })
      : 'Belirtilmedi';

    const timeDisplay = formData.saatAraligi
      ? `${formData.saatAraligi} - ${(parseInt(formData.saatAraligi.split(':')[0]) + 1).toString().padStart(2, '0')}:00`
      : 'Belirtilmedi';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'af4ada9f-beb9-4a10-8995-cf1ff3236478',
          subject: `🗓️ Yeni Randevu Talebi: ${formData.name} - ${formattedDate}`,
          from_name: formData.name,
          replyto: formData.email,
          message: [
            '━━━━ YENİ RANDEVU TALEBİ ━━━━',
            '',
            `👤 Müvekkil Adayı: ${formData.name}`,
            `📞 Telefon: ${formData.phone}`,
            `📧 E-posta: ${formData.email || 'Belirtilmedi'}`,
            '',
            `⚖️ Hukuk Alanı: ${formData.hukukAlani || 'Belirtilmedi'}`,
            `💼 Görüşme Türü: ${formData.gorusmeTuru}`,
            `📅 Tercih Edilen Tarih: ${formattedDate}`,
            `🕐 Saat Aralığı: ${timeDisplay}`,
            '',
            `💬 Mesaj:`,
            formData.mesaj || 'Mesaj girilmedi',
          ].join('\n'),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({
          name: '', phone: '', email: '', hukukAlani: '', gorusmeTuru: '',
          tarih: '', saatAraligi: '', mesaj: '', kvkkOnay: false, iletisimOnay: false
        });
        setErrors({});
      } else {
        throw new Error(data.message || 'Gönderim başarısız');
      }
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
          {/* Görüşme Türleri Bilgisi (Yatay Kartlar) */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-border/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-xl shrink-0">🏢</div>
              <div>
                <h4 className="font-serif text-base font-semibold text-text-primary">Ofiste Görüşme</h4>
                <p className="text-xs text-text-secondary mt-0.5">Büromuzda yüz yüze detaylı görüşme</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-border/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-xl shrink-0">💻</div>
              <div>
                <h4 className="font-serif text-base font-semibold text-text-primary">Online Görüşme</h4>
                <p className="text-xs text-text-secondary mt-0.5">Video konferans ile uzaktan danışmanlık</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-border/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-xl shrink-0">📞</div>
              <div>
                <h4 className="font-serif text-base font-semibold text-text-primary">Telefon Görüşmesi</h4>
                <p className="text-xs text-text-secondary mt-0.5">Telefon üzerinden hızlı danışmanlık</p>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Sol Sütun — 1. Tarih & Saat Seçimi */}
            <motion.div
              className="lg:col-span-2 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 bg-navy text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">1</div>
                <h3 className="font-serif text-xl font-bold text-text-primary">Tarih & Saat Seçimi</h3>
              </div>
              
              <AppointmentCalendar
                selectedDate={formData.tarih}
                selectedTime={formData.saatAraligi}
                onDateSelect={(date) => handleChange('tarih', date)}
                onTimeSelect={(time) => handleChange('saatAraligi', time)}
                dateError={errors.tarih}
                timeError={errors.saatAraligi}
              />
            </motion.div>

            {/* Sağ Sütun — 2. Randevu Formu */}
            <motion.div
              className="lg:col-span-3 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 bg-gold text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">2</div>
                <h3 className="font-serif text-xl font-bold text-text-primary">Bilgilerinizi Girin</h3>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-border/30 shadow-sm">
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

                {/* Önemli Bilgilendirme Kutusu */}
                <div className="p-4 bg-navy/5 text-navy rounded-xl text-xs mb-6 flex items-start gap-2.5">
                  <span className="text-sm shrink-0">ℹ️</span>
                  <p className="leading-normal">
                    <strong>Önemli Bilgilendirme:</strong> Bu sistem doğrudan randevu onaylamaz, bir ön talep oluşturur. Talebiniz avukatlarımızın uygunluk durumuna göre değerlendirilerek en kısa sürede onay için sizinle iletişime geçilecektir.
                  </p>
                </div>

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
