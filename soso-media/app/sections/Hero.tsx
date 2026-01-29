'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, CheckCircle } from 'lucide-react';
import { DashboardMockup } from '@/app/components/DashboardMockup';

const features = [
  {
    icon: Sparkles,
    text: 'Yapay Zeka ile içerik & rapor önerileri',
  },
  {
    icon: CheckCircle,
    text: 'Meta, Instagram & Facebook entegrasyonu',
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lime-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
            >
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">
                AI destekli sosyal medya yönetim platformu
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
            >
              Sosyal Medyada{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-300">
                Büyümenin
              </span>{' '}
              Yeni Yolu
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 leading-relaxed max-w-xl"
            >
              SOSO MEDIA CO, markanızın tüm içerik, reklam ve raporlama
              süreçlerini tek bir panelde toplar. Meta API entegrasyonları ve
              yapay zeka destekli analizlerle,{' '}
              <span className="text-lime-400 font-medium">
                tahmin değil, veriye dayalı kararlar
              </span>{' '}
              alırsınız.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-lime-400 to-lime-500 text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                Hemen Tanışalım
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href="#platform"
                className="inline-flex items-center gap-2 px-8 py-4 text-white border border-white/20 rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                Platformu Keşfet
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-400"
                >
                  <feature.icon className="w-5 h-5 text-lime-400" />
                  <span className="text-sm">{feature.text}</span>
                </div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
