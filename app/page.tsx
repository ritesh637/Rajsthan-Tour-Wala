import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Destinations from '@/components/Destinations';
import Pricing from '@/components/Pricing';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <Pricing />
      <BlogSection />
      <Footer />
    </main>
  );
}