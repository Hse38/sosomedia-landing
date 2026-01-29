'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { NAV_LINKS } from '@/app/lib/constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center">
              <span className="text-black font-bold text-xl">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-semibold">SOSO MEDIA CO</span>
              <span className="block text-xs text-gray-400">
                Sosyal Medyada Büyümenin Yeni Yolu
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#login"
              className="px-5 py-2.5 text-sm text-white border border-white/20 rounded-full hover:bg-white/5 transition-all"
            >
              Panel Girişi
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2.5 text-sm bg-lime-400 text-black font-semibold rounded-full hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] transition-all"
            >
              Demo Talep Et
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5"
          >
            <nav className="flex flex-col p-4 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Link
                  href="#login"
                  className="px-5 py-3 text-center text-white border border-white/20 rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Panel Girişi
                </Link>
                <Link
                  href="#contact"
                  className="px-5 py-3 text-center bg-lime-400 text-black font-semibold rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Demo Talep Et
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
