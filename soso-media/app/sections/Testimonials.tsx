'use client';

import { ScrollReveal } from '@/app/components/ScrollReveal';
import { TestimonialCard } from '@/app/components/TestimonialCard';
import type { TestimonialItem } from '@/app/types';

const testimonials: TestimonialItem[] = [
  {
    name: 'Ayşe Yılmaz',
    role: 'CEO',
    company: 'Pixel Ajans',
    image: 'https://i.pravatar.cc/150?img=1',
    content:
      'SOSO MEDIA CO ile içerik üretim süremizi %60 kısalttık. AI önerileri gerçekten markamızın tonunu yakalıyor. Müşterilerimiz onay sürecini çok sevdi.',
    rating: 5,
    metrics: { timeSaved: '%60', efficiency: '3x' },
  },
  {
    name: 'Mehmet Kaya',
    role: 'Sosyal Medya Müdürü',
    company: 'Trend Digital',
    image: 'https://i.pravatar.cc/150?img=3',
    content:
      'Meta API entegrasyonu muazzam. Tüm veriler tek panelde, raporlama artık saatler sürmüyor. AI analizleri sayesinde stratejimizi çok daha verimli hale getirdik.',
    rating: 5,
    metrics: { timeSaved: '%75', efficiency: '4x' },
  },
  {
    name: 'Zeynep Demir',
    role: 'Kurucu',
    company: 'Socially',
    image: 'https://i.pravatar.cc/150?img=5',
    content:
      '10 müşterimizin hesabını tek panelden yönetiyoruz. Müşteri onay sistemi sayesinde iletişim karmaşası tamamen bitti. Kesinlikle tavsiye ederim!',
    rating: 5,
    metrics: { timeSaved: '%50', efficiency: '2.5x' },
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-lime-500/10 rounded-full blur-[30px]" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-[30px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ajansların{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-300">
              Tercihi
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Türkiye&apos;nin önde gelen dijital ajansları SOSO MEDIA CO ile büyüyor.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.1}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white/[0.03] border border-white/[0.08] rounded-2xl">
            {[
              { value: '500+', label: 'Aktif Ajans' },
              { value: '50K+', label: 'Yönetilen Hesap' },
              { value: '10M+', label: 'Planlanan İçerik' },
              { value: '%98', label: 'Müşteri Memnuniyeti' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
