'use client';

import { motion } from 'framer-motion';
import { BarChart3, Brain, Calendar, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/app/components/ScrollReveal';

const services = [
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
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 hover:border-white/[0.15] transition-all duration-300 h-full"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-lime-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-lime-400 text-sm font-medium group-hover:gap-3 transition-all"
                >
                  Detayları Gör
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}
                />
              </motion.div>
            </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
