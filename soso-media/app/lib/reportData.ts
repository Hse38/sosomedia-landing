import { Eye, Heart, Users, TrendingUp } from 'lucide-react';
import type { ReportMetric, ReportRecommendation } from '@/app/types';

export const reportData = {
  metrics: [
    { label: 'Toplam Erişim', value: '245.3K', change: '+18.5%', icon: Eye },
    { label: 'Etkileşim', value: '32.1K', change: '+24.2%', icon: Heart },
    { label: 'Yeni Takipçi', value: '4.2K', change: '+12.8%', icon: Users },
    { label: 'Dönüşüm', value: '8.4%', change: '+3.2%', icon: TrendingUp },
  ] as ReportMetric[],
  insights: [
    'Video içerikleriniz görsel içeriklere göre %45 daha fazla etkileşim alıyor.',
    'Cuma günleri saat 18:00-20:00 arası paylaşımlar en yüksek erişimi sağlıyor.',
    'Story formatındaki içerikler feed gönderilerine göre 3x daha fazla görüntüleniyor.',
    'Kullanıcı yorumlarına 2 saat içinde yanıt verildiğinde marka sadakati artıyor.',
  ],
  recommendations: [
    { type: 'İçerik', text: 'Haftada en az 3 video reel paylaşın', priority: 'high' as const },
    { type: 'Zamanlama', text: 'Hafta sonu gönderilerini Cuma akşamına kaydırın', priority: 'medium' as const },
    { type: 'Etkileşim', text: 'Yorumlara otomatik yanıt sistemi kurun', priority: 'high' as const },
  ] as ReportRecommendation[],
};
