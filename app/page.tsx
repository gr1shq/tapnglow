// app/page.tsx
import Head from 'next/head';
import Hero from './(sections)/Hero';

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <Head>
        <title>Tap’n’Glow - Building Unique Finds</title>
        <meta
          name="description"
          content="Tap’n’Glow by Tapecode Entertainment is under construction. Discover unique, glowing treasures on Pinterest!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
    </div>
  );
}