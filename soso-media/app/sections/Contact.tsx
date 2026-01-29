'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Coffee, Users, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/app/components/ScrollReveal';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agency: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    const form = e.currentTarget;
    const website = (form.elements.namedItem('website') as HTMLInputElement)?.value;
    const { submitDemoRequest } = await import('@/app/lib/demoRequest');
    const result = await submitDemoRequest({
      name: formData.name.trim(),
      email: formData.email.trim(),
      agency: formData.agency.trim() || undefined,
      message: formData.message.trim() || undefined,
      website: website || undefined,
    });
    setIsSubmitting(false);
    if (result.ok) setIsSubmitted(true);
    else setError(result.error ?? 'Bir hata oluştu.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Bir kahve eşliğinde{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-300">
                    tanışalım
                  </span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Ajansınızın ihtiyaçlarını birlikte inceleyelim. SOSO MEDIA
                  CO&apos;nun panelini gerçek verilerle gösterdiğimiz 30
                  dakikalık bir demo randevusu planlayalım.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: 'Tamamen ücretsiz demo' },
                  {
                    icon: Users,
                    text: 'Ajans yapınıza göre özelleştirilmiş panel önerisi',
                  },
                  {
                    icon: MapPin,
                    text: 'Meta API ve AI entegrasyonu için teknik yol haritası',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-lime-400/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-lime-400" />
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-4 p-6 bg-white/[0.03] border border-white/[0.08] rounded-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center">
                  <Coffee className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Ücretsiz Demo</p>
                  <p className="text-sm text-gray-400">
                    30 dakika • Online veya yüz yüze
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-lime-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-lime-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Talebiniz Alındı!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Ekibimiz en kısa sürede size ulaşacak. Demo için
                    sabırsızlıkla bekliyoruz!
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        agency: '',
                        message: '',
                      });
                    }}
                    className="text-lime-400 hover:underline"
                  >
                    Yeni bir talep gönder
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <p className="text-sm text-red-400 bg-red-400/10 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}
                  {/* Honeypot: bot doldurursa API reddeder */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="website-contact">Web sitesi</label>
                    <input type="text" id="website-contact" name="website" tabIndex={-1} autoComplete="off" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50 transition-colors"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50 transition-colors"
                      placeholder="ornek@sirket.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Ajans Adı
                    </label>
                    <input
                      type="text"
                      name="agency"
                      value={formData.agency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50 transition-colors"
                      placeholder="Ajansınızın adı"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Kısa Not
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50 transition-colors resize-none"
                      placeholder="Ajansınız hakkında kısa bir bilgi..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-lime-400 to-lime-500 text-black font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                        />
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Demo Talep Et
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    Form gönderildiğinde{' '}
                    <a href="#" className="text-lime-400 hover:underline">
                      gizlilik politikamızı
                    </a>{' '}
                    kabul etmiş olursunuz.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
