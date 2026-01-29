'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { ScrollReveal } from '@/app/components/ScrollReveal';

const faqs = [
  {
    category: 'Genel',
    questions: [
      {
        q: 'SOSO MEDIA CO nedir?',
        a: 'SOSO MEDIA CO, sosyal medya ajansları için geliştirilmiş, AI destekli bir sosyal medya yönetim platformudur. İçerik planlama, performans analizi, raporlama ve müşteri onay süreçlerini tek bir panelde birleştirir.',
      },
      {
        q: 'Hangi sosyal medya platformlarını destekliyorsunuz?',
        a: 'Şu anda Meta (Facebook, Instagram) platformlarını tam entegrasyonla destekliyoruz. LinkedIn, Twitter ve TikTok entegrasyonları yakında geliyor.',
      },
      {
        q: 'Ücretsiz deneme süreniz var mı?',
        a: 'Evet! 14 gün boyunca tüm Pro özelliklerini ücretsiz deneyebilirsiniz. Kredi kartı gerektirmeden başlayabilirsiniz.',
      },
    ],
  },
  {
    category: 'Fiyatlandırma',
    questions: [
      {
        q: 'Fiyatlar vergiler dahil mi?',
        a: 'Gösterilen fiyatlara KDV dahil değildir. Fatura kesiminde %20 KDV eklenecektir.',
      },
      {
        q: 'Paketimi yükseltebilir veya düşürebilir miyim?',
        a: 'Kesinlikle! Paketinizi istediğiniz zaman yükseltebilir veya düşürebilirsiniz. Değişiklikler bir sonraki fatura döneminde geçerli olur.',
      },
      {
        q: 'Yıllık ödeme yaparsam ne kadar tasarruf ederim?',
        a: 'Yıllık ödemede %20 oranında tasarruf edersiniz. Ayrıca 2 ay ücretsiz kullanmış olursunuz.',
      },
    ],
  },
  {
    category: 'Teknik',
    questions: [
      {
        q: 'Meta API entegrasyonu nasıl çalışır?',
        a: 'Facebook Business Manager hesabınızı bağlayarak tüm sayfa ve hesaplarınıza erişim sağlayabilirsiniz. OAuth 2.0 ile güvenli bağlantı kurulur ve veriler gerçek zamanlı olarak senkronize edilir.',
      },
      {
        q: 'Verilerim güvende mi?',
        a: 'Tüm verileriniz banka düzeyinde SSL şifreleme ile korunur. Veri merkezlerimiz ISO 27001 sertifikalıdır ve düzenli güvenlik denetimlerinden geçer.',
      },
      {
        q: 'Mobil uygulamanız var mı?',
        a: 'Şu anda web tabanlı responsive bir platform sunuyoruz. iOS ve Android uygulamalarımız 2025 Q2 içerisinde yayınlanacak.',
      },
    ],
  },
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sıkça Sorulan{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-300">
              Sorular
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <ScrollReveal key={category.category} delay={categoryIndex * 0.1}>
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-lime-400 rounded-full" />
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const id = `${category.category}-${itemIndex}`;
                    const isOpen = openItems.includes(id);
                    return (
                      <div
                        key={id}
                        className="bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/[0.15] transition-colors"
                      >
                        <button
                          onClick={() => toggleItem(id)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="text-white font-medium pr-4">
                            {item.q}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-6 pb-6">
                                <p className="text-gray-400 leading-relaxed">
                                  {item.a}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16 text-center">
          <div className="bg-gradient-to-r from-lime-400/10 to-purple-500/10 border border-white/10 rounded-2xl p-8">
            <MessageCircle className="w-12 h-12 text-lime-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Başka sorularınız mı var?
            </h3>
            <p className="text-gray-400 mb-6">
              Ekibimiz size yardımcı olmaktan mutluluk duyar.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-full hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] transition-all"
            >
              Bize Ulaşın
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
