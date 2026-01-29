'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { ReportModal } from '@/app/components/ReportModal';
import { reportData } from '@/app/lib/reportData';

export function AIAnalysis() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="ai-analysis"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/15 rounded-full blur-[40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">Yapay Zeka Destekli</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Veriye Dayalı{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Akıllı Kararlar
                </span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                SOSO MEDIA CO&apos;nun AI motoru, milyonlarca veri noktasını
                analiz ederek size özel öneriler sunar. Hangi içerik türünün ne
                zaman paylaşılacağını artık tahmin etmek zorunda değilsiniz.
              </p>
              <div className="space-y-4">
                {[
                  'Otomatik performans analizi ve raporlama',
                  'Hedef kitlenize özel içerik önerileri',
                  'Rakip analizi ve benchmark raporları',
                  'Tahmine dayalı büyüme stratejileri',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-lime-400/20 rounded-full flex items-center justify-center">
                      <span className="text-lime-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                AI ile Örnek Rapor Görmek İstiyorum
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative">
              <div className="relative bg-[#12121a] border border-white/10 rounded-3xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold">AI Analiz Özeti</h3>
                  <span className="px-3 py-1 bg-lime-400/20 text-lime-400 text-xs rounded-full">
                    Canlı
                  </span>
                </div>
                <div className="space-y-4">
                  {reportData.insights.slice(0, 3).map((insight, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-white/5 rounded-xl"
                    >
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                      </div>
                      <p className="text-sm text-gray-300">{insight}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                  <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                  <span className="text-purple-300 text-sm">
                    AI tarafından analiz edildi
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <ReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
