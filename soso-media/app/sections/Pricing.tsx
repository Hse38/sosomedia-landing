'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { ScrollReveal } from '@/app/components/ScrollReveal';

const plans = [
  {
    name: 'Starter',
    description: 'Küçük ekipler ve freelancerlar için',
    monthlyPrice: 299,
    yearlyPrice: 249,
    features: [
      '5 sosyal medya hesabı',
      'Temel analiz raporları',
      'AI içerik önerileri (100/ay)',
      'İçerik takvimi',
      'E-posta desteği',
    ],
    cta: 'Başla',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'Büyüyen ajanslar için',
    monthlyPrice: 799,
    yearlyPrice: 649,
    features: [
      '20 sosyal medya hesabı',
      'Gelişmiş analiz raporları',
      'AI içerik önerileri (sınırsız)',
      'Müşteri onay sistemi',
      'Rakip analizi',
      'Öncelikli destek',
    ],
    cta: "Pro'ya Yükselt",
    popular: true,
  },
  {
    name: 'Agency',
    description: 'Büyük ajanslar ve kurumlar için',
    monthlyPrice: 1999,
    yearlyPrice: 1649,
    features: [
      'Sınırsız sosyal medya hesabı',
      'Özel dashboard',
      'API erişimi',
      'Beyaz etiket çözümü',
      'Özel entegrasyonlar',
      '7/24 telefon desteği',
      'Dedicated account manager',
    ],
    cta: 'İletişime Geç',
    popular: false,
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Basit ve{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-300">
              Şeffaf Fiyatlandırma
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            İhtiyaçlarınıza uygun paketi seçin, hemen başlayın.
          </p>
        </ScrollReveal>

        <ScrollReveal className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 p-1 bg-white/5 rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? 'bg-lime-400 text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              Aylık
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly ? 'bg-lime-400 text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              Yıllık
              <span className="px-2 py-0.5 bg-lime-400/20 text-lime-400 text-xs rounded-full">
                %20 Tasarruf
              </span>
            </button>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`relative h-full ${
                  plan.popular
                    ? 'bg-gradient-to-b from-lime-400/10 to-transparent border-lime-400/30'
                    : 'bg-white/[0.03] border-white/[0.08]'
                } backdrop-blur-xl border rounded-2xl p-8 hover:border-white/[0.15] transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-1.5 bg-lime-400 text-black text-sm font-semibold rounded-full">
                      <Zap className="w-4 h-4" />
                      En Popüler
                    </div>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      ₺{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400">/ay</span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-lime-400 mt-1">
                      Yıllık faturalandırma
                    </p>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-lime-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-lime-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-lime-400 text-black hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] hover:scale-[1.02]'
                      : 'bg-white/5 text-white border border-white/20 hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <p className="text-gray-400">
            Özel ihtiyaçlarınız mı var?{' '}
            <a href="#contact" className="text-lime-400 hover:underline">
              Kurumsal çözümlerimizi inceleyin
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
