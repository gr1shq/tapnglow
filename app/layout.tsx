import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './(components)/Header';
import Footer from './(components)/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TapNGlow - Curated Room Decor, Fashion, Phones & Setups',
  description:
    'Discover minimalistic and trendy room decor, fashion, phones, and setups at TapNGlow. Explore our blog for inspiration.',
  keywords: [
    'ecommerce',
    'room decor',
    'fashion',
    'phones',
    'setups',
    'blog',
    'minimalistic',
    'trendy',
  ],
  openGraph: {
    title: 'TapNGlow',
    description:
      'Curated finds for room decor, fashion, phones, and setups with a trendy, minimalistic vibe.',
    url: 'https://tapnglow.vercel.app',
    images: ['/og-image.jpg'],
    siteName: 'TapNGlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TapNGlow',
    description:
      'Shop curated, trendy products and read our blog at TapNGlow.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}