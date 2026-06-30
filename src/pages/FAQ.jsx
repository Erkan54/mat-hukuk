import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';
import { faqData } from '../data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main>
      <PageHero
        title="Sık Sorulan Sorular"
        subtitle="Hukuki süreçlerimiz hakkında merak ettiğiniz sorulara cevaplar."
        breadcrumbs={[
          { label: 'Ana Sayfa', link: '/' },
          { label: 'Sık Sorulan Sorular' }
        ]}
      />

      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white rounded-xl border border-border/30 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'shadow-md' : ''
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-text-primary pr-4">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                  <div className="px-6 pb-6">
                    <div className="h-px bg-border/30 mb-4" />
                    <p className="text-text-secondary leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
