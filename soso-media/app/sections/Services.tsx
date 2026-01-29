'use client';

import {
  Crown,
  Palette,
  Camera,
  Share2,
  TrendingUp,
  BarChart3,
} from 'lucide-react';
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { ServiceCard } from '@/app/components/ServiceCard';
import type { ServiceItem } from '@/app/types';

const services: ServiceItem[] = [
  {
    icon: Crown,
    title: 'Kurumsal Marka Danışmanlığı ve Strateji Geliştirme',
    description:
      'Marka konumlandırma, kimlik çalışmaları ve pazar hedeflerine uygun iletişim stratejileri.',
    features: [
      'Marka Denetimi ve Rekabet Analizi',
      'Hedef Kitle ve Değer Önerisi (Value Proposition) Geliştirme',
      'Pazar hedeflerine uygun iletişim ve kampanya stratejileri',
      'Kriz İletişimi Planlaması ve Yönetimi',
    ],
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Palette,
    title: 'Kurumsal ve Dijital Kimlik Tasarımı',
    description:
      'Logodan kartvizite, web arayüzünden e-posta şablonlarına kadar görsel kimlik hizmetleri.',
    features: [
      'Logo Tasarımı ve Uygulamaları',
      'Kartvizit, Antetli Kağıt ve Kurumsal Döküman Şablonları',
      'Kurumsal Kıyafet ve Materyal (Ajanda, Kalem vb.) Tasarımları',
      'Web sitesi Arayüz Tasarımı (UI/UX) ve Geliştirme',
      'E-posta Pazarlama Şablonları Tasarımı',
    ],
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Camera,
    title: 'Prodüksiyon ve Görsel İçerik Üretimi',
    description:
      'Fotoğraf, drone çekimi ve kurumsal tanıtım filmi ile görsel içerik prodüksiyonu.',
    features: [
      'Yönetici Portreleri, Ekip ve Ofis/Tesis/Ürün Fotoğrafçılığı',
      'Kurumsal tanıtım videoları için drone çekimi',
      'Şantiye, emlak ve geniş alan projeleri için hava fotoğrafçılığı',
      'Kurumsal Tanıtım Filmi ve Video İçerik Prodüksiyonu',
    ],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Share2,
    title: 'Sosyal Medya Yönetimi ve İçerik Üretimi',
    description:
      'Strateji, içerik takvimi ve platformlara özel içerik üretimi ile topluluk yönetimi.',
    features: [
      'Sosyal Medya Stratejisi ve İçerik Takvimi Yönetimi',
      'Platformlara özel görsel, video (Reels/Hikayeler) ve metin içerikleri',
      'Grafik Tasarım Hizmetleri (Sosyal medya postları için)',
      'Topluluk Yönetimi (Yorum ve mesaj takibi, etkileşim yönetimi)',
    ],
    color: 'from-lime-500 to-green-500',
  },
  {
    icon: TrendingUp,
    title: 'Dijital Reklam Yönetimi (Performans Pazarlaması)',
    description:
      'Meta ve LinkedIn reklamları ile hedef belirleme, kampanya kurulumu ve bütçe optimizasyonu.',
    features: [
      'Meta Reklam Yönetimi (Facebook & Instagram): Hedef belirleme, A/B testleri',
      'LinkedIn Reklam Yönetimi: B2B odaklı reklam ve hassas hedefleme',
      'Reklam Bütçesi Optimizasyonu ve Raporlama',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Ölçümleme ve Analiz',
    description:
      'KPI takibi, performans raporları ve dijital varlıkların dönüşüm optimizasyonu.',
    features: [
      'Aylık/Dönemsel Performans Raporları',
      'KPI (Temel Performans Göstergeleri) Belirleme ve İzleme',
      'Dijital Varlıkların Dönüşüm Optimizasyonu (CRO)',
    ],
    color: 'from-teal-500 to-emerald-500',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hizmetlerimiz
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-300">
              .
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Kurumsal marka danışmanlığından dijital reklam yönetimine, prodüksiyondan
            ölçümlemeye kadar geniş hizmet yelpazesi.
          </p>
        </ScrollReveal>

        <div className="flex gap-6 overflow-x-auto pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 snap-x snap-mandatory scroll-smooth [scrollbar-width:thin] [contain:layout]">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex-shrink-0 w-[min(340px,85vw)] snap-center [contain:layout paint]"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
