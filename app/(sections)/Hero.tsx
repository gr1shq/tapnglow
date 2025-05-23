// app/(sections)/Hero.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import products from '../../data/products.json';

// Define TypeScript interface for product data
interface Product {
  id: number;
  title: string;
  description: string;
  defaultImage: string;
  hoverImage: string;
  temuLink: string;
  tags: string[];
}

// Type the imported JSON data
const productList: Product[] = products;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through products every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % productList.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const currentProduct = productList[currentIndex];

  return (
    <section className="bg-[#FFFFFF] py-4 md:py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left: Text Content */}
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-[#F28C82] mb-2 tracking-tight">
              Tap’n’Glow: Building Unique Finds!
            </h1>
            <p className="text-base md:text-lg text-[#9CA3AF] mb-3 max-w-sm leading-relaxed">
              We’re crafting a vibrant hub for glowing treasures. Launching soon—discover our finds on Pinterest now!
            </p>
            <Link href="/products">
              <span className="inline-block bg-[#F28C82] text-white text-sm md:text-base font-medium px-5 py-2 rounded-md hover:bg-[#FFD1C1] hover:text-gray-900 transition-colors duration-200">
                Explore our Products
              </span>
            </Link>
          </div>

          {/* Right: Featured Product */}
          {currentProduct && (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id} // Key ensures animation on product change
                className="text-center md:text-right"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full max-w-sm mx-auto md:ml-auto group">
                  {/* Product Image with Hover Effect */}
                  <div className="relative w-full h-64 bg-[#FFFFFF]">
                    <Image
                      src={currentProduct.defaultImage}
                      alt={currentProduct.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-300"
                    />
                    <Image
                      src={currentProduct.hoverImage}
                      alt={`${currentProduct.title} hover`}
                      width={400}
                      height={400}
                      className="absolute top-0 left-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  {/* Product Info */}
                  <h2 className="text-base font-medium text-[#6B7280] mt-3 mb-1">
                    {currentProduct.title}
                  </h2>
                  <p className="text-sm text-[#9CA3AF] mb-3">
                    {currentProduct.description}
                  </p>
                  <Link
                    href={currentProduct.temuLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="inline-block bg-[#F28C82] text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-[#FFD1C1] hover:text-gray-900 transition-colors duration-200">
                      Shop on Temu
                    </span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}