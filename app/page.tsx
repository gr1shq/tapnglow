// app/page.tsx
import Hero from './(sections)/Hero';
import FeaturedProducts from './(sections)/FeaturedProducts';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Tap’n’Glow - Vibrant Treasures</title>
        <meta
          name="description"
          content="Discover glowing treasures with Tap’n’Glow by Tapecode Entertainment. Shop now on Temu and explore on Pinterest!"
        />
      </Head>
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
      </main>
    </div>
  );
}