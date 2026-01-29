'use client';

import { ArrowRight } from 'lucide-react';
import type { ServiceItem } from '@/app/types';

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <div
      className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:border-white/[0.15] transition-all duration-300 h-full hover:-translate-y-1"
    >
      <div
        className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-4 leading-snug">{service.title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
      <ul className="space-y-3 mb-6">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
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
    </div>
  );
}
