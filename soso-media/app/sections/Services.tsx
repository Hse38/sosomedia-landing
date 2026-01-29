'use client';

import { BarChart3, Brain, Calendar } from 'lucide-react';
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { ServiceCard } from '@/app/components/ServiceCard';
import type { ServiceItem } from '@/app/types';

const services: ServiceItem[] = [
  {
    icon: BarChart3,
    title: 'Performans Analizi',
    description:
      'Meta API ile gelen tüm veriler tek panelde. Erişim, etkileşim, dönüşüm ve CPM gibi metrikleri canlı takip edin.',
    features: [
      'Gerçek zamanlı dashboard',
      'Kampanya bazlı filtreleme',
      'Otomatik raporlama',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'AI Destekli İçerik',
    description:
      'Yapay zeka, markanızın tonuna ve hedef kitlenize uygun post, başlık ve açıklama önerileri üretir.',
    features: [
      "Brief'ten otomatik içerik taslağı",
      'Farklı platformlara göre metin varyasyonları',
      'Hashtag önerileri',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Calendar,
    title: 'İçerik Takvimi & Onay',
    description:
      'Ajans ve müşteri aynı takvim üzerinden çalışır; içerikler yorumlanır, düzenlenir ve tek tıkla onaylanır.',
    features: [
      'Sürükle-bırak içerik planlama',
      'Onay bekleyen gönderi listesi',
      'Otomatik paylaşım',
    ],
    color: 'from-lime-500 to-green-500',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ajansınız için tasarlanmış{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-300">
              tek panel.
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            SOSO MEDIA CO; içerik üretimi, reklam yönetimi, raporlama ve onay
            süreçlerini tek bir ekranda toplar.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
