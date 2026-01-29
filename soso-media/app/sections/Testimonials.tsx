'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from '@/app/components/ScrollReveal';

const testimonials = [
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
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />
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
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 hover:border-white/[0.15] transition-all h-full"
              >
                <div className="absolute -top-4 -left-2 w-10 h-10 bg-lime-400 rounded-xl flex items-center justify-center">
                  <Quote className="w-5 h-5 text-black" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-lime-400 text-lime-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex gap-4 mb-6 p-4 bg-white/5 rounded-xl">
                  <div>
                    <p className="text-2xl font-bold text-lime-400">
                      {testimonial.metrics.timeSaved}
                    </p>
                    <p className="text-xs text-gray-400">Zaman Tasarrufu</p>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div>
                    <p className="text-2xl font-bold text-purple-400">
                      {testimonial.metrics.efficiency}
                    </p>
                    <p className="text-xs text-gray-400">Verimlilik</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
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
