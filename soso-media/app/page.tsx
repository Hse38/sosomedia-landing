import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/sections/Hero';
import { Services } from '@/app/sections/Services';
import { AIAnalysis } from '@/app/sections/AIAnalysis';
import { Pricing } from '@/app/sections/Pricing';
import { Testimonials } from '@/app/sections/Testimonials';
import { FAQ } from '@/app/sections/FAQ';
import { Contact } from '@/app/sections/Contact';
import { Footer } from '@/app/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <Services />
      <AIAnalysis />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
