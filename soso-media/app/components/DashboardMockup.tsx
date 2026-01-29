'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, FileText, Megaphone } from 'lucide-react';

export function DashboardMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-lime-500/20 to-purple-500/20 rounded-3xl blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative bg-[#12121a]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center">
              <span className="text-black font-bold">S</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">Genel Performans</h3>
              <p className="text-sm text-gray-400">Son 30 Gün</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-lime-400/20 text-lime-400 text-sm font-medium rounded-full">
            +%32 Büyüme
          </span>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-3">Etkileşim Trendi</p>
          <div className="h-32 relative">
            <svg viewBox="0 0 400 100" className="w-full h-full">
              <defs>
                <linearGradient
                  id="chartGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#a3e635"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="100%"
                    stopColor="#a3e635"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <path
                d="M0,80 Q50,70 100,60 T200,40 T300,50 T400,20 L400,100 L0,100 Z"
                fill="url(#chartGradient)"
              />
              <path
                d="M0,80 Q50,70 100,60 T200,40 T300,50 T400,20"
                fill="none"
                stroke="#a3e635"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-sm text-gray-400 mb-1">Ortalama CPM</p>
            <p className="text-2xl font-bold text-white">$5.30</p>
            <p className="text-xs text-lime-400">+%8</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-sm text-gray-400 mb-1">Toplam Gönderi</p>
            <p className="text-2xl font-bold text-white">1.482</p>
            <p className="text-xs text-lime-400">+214</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-sm text-gray-400 mb-1">Aktif Kampanya</p>
            <p className="text-2xl font-bold text-white">7</p>
            <p className="text-xs text-lime-400">3 yeni</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#1a1a2e] to-[#252542] border border-white/10 rounded-xl p-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                AI İçerik Önerileri
              </p>
              <p className="text-xs text-gray-400">
                Markanızın tonuna göre hazırlanır.
              </p>
            </div>
            <span className="px-2 py-1 bg-lime-400/20 text-lime-400 text-xs rounded-full">
              Dakikalar içinde
            </span>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute -top-6 -left-6 w-24 h-24 border border-white/10 rounded-full" />
      <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-lime-400/20 rounded-full" />
    </div>
  );
}
