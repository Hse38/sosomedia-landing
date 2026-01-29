'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Sparkles } from 'lucide-react';
import { reportData } from '@/app/lib/reportData';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReportModal({ isOpen, onClose }: ReportModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-[#0a0a0f] border border-white/10 rounded-3xl p-8"
          >
            <button
              onClick={onClose}
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
                    <div key={index} className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{metric.label}</span>
                      </div>
                      <p className="text-2xl font-bold text-white">{metric.value}</p>
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
                    <div key={index} className="flex gap-3 p-4 bg-white/5 rounded-xl">
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
                        {rec.priority === 'high' ? 'Yüksek Öncelik' : 'Orta Öncelik'}
                      </span>
                      <span className="text-sm text-gray-400">{rec.type}:</span>
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
  );
}
