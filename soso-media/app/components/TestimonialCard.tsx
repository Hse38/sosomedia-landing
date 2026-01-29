'use client';

import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import type { TestimonialItem } from '@/app/types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:border-white/[0.15] transition-all h-full hover:-translate-y-0.5"
    >
      <div className="absolute -top-4 -left-2 w-10 h-10 bg-lime-400 rounded-xl flex items-center justify-center">
        <Quote className="w-5 h-5 text-black" />
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-lime-400 text-lime-400" />
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
<Image
          src={testimonial.image}
          alt={testimonial.name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-white font-semibold">{testimonial.name}</p>
          <p className="text-sm text-gray-400">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
