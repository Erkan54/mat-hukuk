import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';
import { team } from '../data/team';

export default function Team() {
  return (
    <main>
      <PageHero
        title="Ekibimiz"
        subtitle="Büromuzda görev yapan avukatlar hakkında bilgi."
        breadcrumbs={[
          { label: 'Ana Sayfa', link: '/' },
          { label: 'Ekibimiz' }
        ]}
      />

      <section className="relative section-padding bg-cream overflow-hidden">
      {/* Background Image with Blur and Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/images/team-bg.jpg" 
          alt="Ekibimiz Arka Plan" 
          className="w-full h-full object-cover blur-[2px] scale-105 opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 to-cream/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {team.map((lawyer, index) => (
              <motion.div
                key={lawyer.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border/30"
              >
                <div className={`grid lg:grid-cols-3 ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  {/* Photo area */}
                  <div className="bg-gradient-to-br from-navy to-navy-dark p-8 flex items-center justify-center">
                    {lawyer.image ? (
                      <div className="text-center">
                        <div className="w-36 h-44 rounded-2xl overflow-hidden shadow-2xl mx-auto mb-4 border-2 border-gold/40">
                          <img
                            src={lawyer.image}
                            alt={lawyer.name}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-white">{lawyer.name}</h3>
                        <p className="text-gold mt-1 font-medium">{lawyer.title}</p>
                        <p className="text-white/50 text-sm mt-1">{lawyer.barNumber}</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold/40">
                          <span className="font-serif text-4xl font-bold text-gold">
                            {(lawyer.name.startsWith('Av.') ? lawyer.name.split(' ').slice(1) : lawyer.name.split(' ')).map(n => n[0]).join('')}
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-white">{lawyer.name}</h3>
                        <p className="text-gold mt-2 font-medium">{lawyer.title}</p>
                        {lawyer.barNumber && lawyer.barNumber !== '-' && (
                          <p className="text-white/50 text-sm mt-2">{lawyer.barNumber}</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <p className="text-text-secondary leading-relaxed mb-8">{lawyer.shortBio}</p>

                    <div className="grid sm:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">Çalışma Alanları</h4>
                        <div className="flex flex-wrap gap-2">
                          {lawyer.expertise.map((exp) => (
                            <span key={exp} className="px-3 py-1.5 bg-navy/5 text-navy text-sm font-medium rounded-lg">
                              {exp}
                            </span>
                          ))}
                        </div>
                      </div>

                      {lawyer.education && lawyer.education.length > 0 && (
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">Eğitim</h4>
                          <ul className="space-y-2">
                            {lawyer.education.map((edu) => (
                              <li key={edu} className="text-sm text-text-secondary flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 shrink-0" />
                                {edu}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">Diller</h4>
                        <p className="text-sm text-text-secondary">{lawyer.languages.join(', ')}</p>
                      </div>

                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">Deneyim</h4>
                        <p className="text-sm text-text-secondary">{lawyer.experience}</p>
                      </div>
                    </div>
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
