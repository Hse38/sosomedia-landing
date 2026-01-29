'use client';

import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import type { PlanItem } from '@/app/types';

interface PricingCardProps {
  plan: PlanItem;
  isYearly: boolean;
}

export function PricingCard({ plan, isYearly }: PricingCardProps) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`relative h-full ${
        plan.popular
          ? 'bg-gradient-to-b from-lime-400/10 to-transparent border-lime-400/30'
          : 'bg-white/[0.03] border-white/[0.08]'
      } border rounded-2xl p-8 hover:border-white/[0.15] transition-all`}
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
        <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
        <p className="text-sm text-gray-400">{plan.description}</p>
      </div>
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">₺{price}</span>
          <span className="text-gray-400">/ay</span>
        </div>
        {isYearly && (
          <p className="text-sm text-lime-400 mt-1">Yıllık faturalandırma</p>
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
  );
}
