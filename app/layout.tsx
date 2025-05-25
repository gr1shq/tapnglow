// app/layout.tsx
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import Script from 'next/script'; // Import Script component
import './globals.css';
import Header from './(components)/Header';
import Footer from './(components)/Footer';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Regular, Semi-bold, Bold for headings/buttons
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500'], // Regular, Medium for body text
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
  icons: {
    icon: '/favicon.ico', // Favicon already handled here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} font-inter antialiased min-h-screen flex flex-col`}
      >
        <link rel="icon" href="/favicon.ico"/>
        {/* Google Analytics: Load gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZM8TK4262M"
          strategy="lazyOnload"
          async
        />
        {/* Google Analytics: Inline configuration */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZM8TK4262M');
          `}
        </Script>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}