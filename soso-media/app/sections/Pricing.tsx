'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { PricingCard } from '@/app/components/PricingCard';
import type { PlanItem } from '@/app/types';

const plans: PlanItem[] = [
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
              <PricingCard plan={plan} isYearly={isYearly} />
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
