// app/page.tsx
import Hero from './(sections)/Hero';
import FeaturedProducts from './(sections)/FeaturedProducts';
import FeaturedBlog from './(sections)/FeaturedBlog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tap’n’Glow - Vibrant Treasures',
  description: 'Discover glowing treasures with Tap’n’Glow by Tapecode Entertainment. Shop on Temu and explore Y2K style tips on our blog!',
  keywords: ['Y2K fashion', 'aesthetic decor', 'teen girl style', 'Temu shopping', 'blog'],
  openGraph: {
    title: 'Tap’n’Glow - Vibrant Treasures',
    description: 'Discover glowing treasures with Tap’n’Glow by Tapecode Entertainment. Shop on Temu and explore Y2K style tips on our blog!',
    url: 'https://tapnglow.vercel.app',
    type: 'website',
    images: [{ url: 'https://tapnglow.vercel.app/products/y2k-aesthetic-hero.webp', width: 1200, height: 630, alt: 'Tap’n’Glow' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tap’n’Glow - Vibrant Treasures',
    description: 'Discover glowing treasures with Tap’n’Glow by Tapecode Entertainment. Shop on Temu and explore Y2K style tips on our blog!',
    images: ['https://tapnglow.vercel.app/products/y2k-aesthetic-hero.webp'],
  },
  alternates: {
    canonical: 'https://tapnglow.vercel.app',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <FeaturedBlog />
      </main>
    </div>
  );
}