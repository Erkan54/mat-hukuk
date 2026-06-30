import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import { faqData } from '../../data/faq';

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState(null);
  const previewFaq = faqData.slice(0, 4);

  return (
    <section className="relative section-padding bg-cream overflow-hidden">
      {/* Background Image with Blur and Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1577415124269-b911f140e6c3?auto=format&fit=crop&w=1920&q=80" 
          alt="Hukuk Bürosu SSS" 
          className="w-full h-full object-cover blur-[2px] scale-105 opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 to-cream/85"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="SSS"
          title="Sık sorulan sorular"
          subtitle="Merak ettiğiniz sorulara hızlı cevaplar."
        />

        <div className="space-y-4 mt-4">
          {previewFaq.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl border border-border/30 overflow-hidden transition-colors duration-300 ${
                openIndex === index ? 'bg-cream-dark/30' : ''
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-text-primary pr-4">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`accordion-content ${
                  openIndex === index ? 'open' : ''
                }`}
              >
                <div className="px-5 pb-5">
                  <p className="text-sm text-text-secondary leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            to="/sss"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors group"
          >
            Tüm Soruları Görüntüle
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
