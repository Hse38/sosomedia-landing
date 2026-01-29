'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  X,
  Download,
  TrendingUp,
  Users,
  Eye,
  Heart,
} from 'lucide-react';
import { ScrollReveal } from '@/app/components/ScrollReveal';

const reportData = {
  metrics: [
    { label: 'Toplam Erişim', value: '245.3K', change: '+18.5%', icon: Eye },
    { label: 'Etkileşim', value: '32.1K', change: '+24.2%', icon: Heart },
    { label: 'Yeni Takipçi', value: '4.2K', change: '+12.8%', icon: Users },
    { label: 'Dönüşüm', value: '8.4%', change: '+3.2%', icon: TrendingUp },
  ],
  insights: [
    'Video içerikleriniz görsel içeriklere göre %45 daha fazla etkileşim alıyor.',
    'Cuma günleri saat 18:00-20:00 arası paylaşımlar en yüksek erişimi sağlıyor.',
    'Story formatındaki içerikler feed gönderilerine göre 3x daha fazla görüntüleniyor.',
    'Kullanıcı yorumlarına 2 saat içinde yanıt verildiğinde marka sadakati artıyor.',
  ],
  recommendations: [
    {
      type: 'İçerik',
      text: 'Haftada en az 3 video reel paylaşın',
      priority: 'high' as const,
    },
    {
      type: 'Zamanlama',
      text: 'Hafta sonu gönderilerini Cuma akşamına kaydırın',
      priority: 'medium' as const,
    },
    {
      type: 'Etkileşim',
      text: 'Yorumlara otomatik yanıt sistemi kurun',
      priority: 'high' as const,
    },
  ],
};

export function AIAnalysis() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="ai-analysis"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
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
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-[#12121a]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold">AI Analiz Özeti</h3>
                  <span className="px-3 py-1 bg-lime-400/20 text-lime-400 text-xs rounded-full">
                    Canlı
                  </span>
                </div>
                <div className="space-y-4">
                  {reportData.insights.slice(0, 3).map((insight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex gap-4 p-4 bg-white/5 rounded-xl"
                    >
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                      </div>
                      <p className="text-sm text-gray-300">{insight}</p>
                    </motion.div>
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

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-[#0a0a0f] border border-white/10 rounded-3xl p-8"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Kapat"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Örnek AI Performans Raporu
                  </h3>
                  <p className="text-gray-400">
                    @ornekmarka için oluşturuldu • Son 30 gün
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {reportData.metrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                    <div
                      key={index}
                      className="bg-white/5 rounded-xl p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">
                          {metric.label}
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-white">
                        {metric.value}
                      </p>
                      <p className="text-sm text-lime-400">{metric.change}</p>
                    </div>
                    );
                  })}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    AI İçgörüleri
                  </h4>
                  <div className="space-y-3">
                    {reportData.insights.map((insight, index) => (
                      <div
                        key={index}
                        className="flex gap-3 p-4 bg-white/5 rounded-xl"
                      >
                        <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300">{insight}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    AI Önerileri
                  </h4>
                  <div className="space-y-3">
                    {reportData.recommendations.map((rec, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-xl"
                      >
                        <span
                          className={`px-3 py-1 text-xs rounded-full ${
                            rec.priority === 'high'
                              ? 'bg-red-500/20 text-red-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}
                        >
                          {rec.priority === 'high'
                            ? 'Yüksek Öncelik'
                            : 'Orta Öncelik'}
                        </span>
                        <span className="text-sm text-gray-400">
                          {rec.type}:
                        </span>
                        <span className="text-gray-300">{rec.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-lime-400 text-black font-semibold rounded-xl hover:bg-lime-300 transition-colors">
                  <Download className="w-5 h-5" />
                  Raporu PDF Olarak İndir
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
