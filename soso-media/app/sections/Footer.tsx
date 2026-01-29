'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'Özellikler', href: '#services' },
    { label: 'Fiyatlandırma', href: '#pricing' },
    { label: 'API', href: '#' },
    { label: 'Entegrasyonlar', href: '#' },
  ],
  company: [
    { label: 'Hakkımızda', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Kariyer', href: '#' },
    { label: 'İletişim', href: '#contact' },
  ],
  resources: [
    { label: 'Dokümantasyon', href: '#' },
    { label: 'Yardım Merkezi', href: '#' },
    { label: 'SSS', href: '#faq' },
    { label: 'Topluluk', href: '#' },
  ],
  legal: [
    { label: 'Gizlilik Politikası', href: '#' },
    { label: 'Kullanım Koşulları', href: '#' },
    { label: 'Çerez Politikası', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-xl">S</span>
              </div>
              <span className="text-white font-semibold">SOSO MEDIA CO</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              AI destekli sosyal medya yönetim platformu. Ajansınızı bir üst
              seviyeye taşıyın.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-gray-400" />
                </a>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Ürün</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Şirket</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Kaynaklar</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Yasal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 SOSO MEDIA CO. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-500 text-sm">
            Tasarım & geliştirme:{' '}
            <a href="#" className="text-lime-400 hover:underline">
              Haluk Şakir Ekinci
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
