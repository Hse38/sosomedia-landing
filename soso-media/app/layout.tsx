import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  manifest: '/manifest.json',
  title: 'SOSO MEDIA CO | Sosyal Medyada Büyümenin Yeni Yolu',
  description:
    'AI destekli sosyal medya yönetim platformu. Meta API entegrasyonları ve yapay zeka destekli analizlerle veriye dayalı kararlar alın.',
  keywords: [
    'sosyal medya',
    'ajans',
    'AI',
    'Meta API',
    'içerik yönetimi',
    'sosyal medya ajansı',
  ],
  openGraph: {
    title: 'SOSO MEDIA CO | Sosyal Medyada Büyümenin Yeni Yolu',
    description: 'AI destekli sosyal medya yönetim platformu',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.resend.com" />
        <link rel="dns-prefetch" href="https://api.resend.com" />
      </head>
      <body
        className={`${inter.className} bg-[#0a0a0f] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
