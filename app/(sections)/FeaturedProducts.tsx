// app/(sections)/FeaturedProducts.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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

// Select one product per category
const featuredProducts = [
  // Room Decor: Glowing Moon Lamp (lamp)
  productList.find((p) => p.tags.includes('lamp')),
  // Accessories: Women's Stylish Shoulder Bag (bag)
  productList.find((p) => p.tags.includes('bag')),
  // Tops: Y2K Graphic Crop Top (t-shirt)
  productList.find((p) => p.id === 17 && p.tags.includes('t-shirt')),
  // Pants: Stylish Wide-leg Pants (pants)
  productList.find((p) => p.id === 11 && p.tags.includes('pants')),
].filter((p): p is Product => p !== undefined); // Ensure no undefined products

export default function FeaturedProducts() {
  return (
    <section className="bg-[#FFFFFF] py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-[#F28C82] mb-6 text-center">
            Our Featured Products
          </h2>
          <p className="text-base font-inter text-[#9CA3AF] mb-8 text-center max-w-2xl mx-auto">
            Discover our curated collection of glowing treasures, from cozy lamps to stylish accessories.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-full h-64 bg-[#FFFFFF]">
                  <Image
                    src={product.defaultImage}
                    alt={`${product.title} - Tap’n’Glow`}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-300"
                  />
                  <Image
                    src={product.hoverImage}
                    alt={`${product.title} hover view - Tap’n’Glow`}
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
                <h3 className="text-base font-poppins font-medium text-[#6B7280] mt-3 mb-1 text-center">
                  {product.title}
                </h3>
                <p className="text-sm font-inter text-[#9CA3AF] mb-3 text-center line-clamp-2">
                  {product.description}
                </p>
                <div className="text-center">
                  <Link
                    href={product.temuLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="inline-block bg-[#F28C82] text-white text-sm font-poppins font-medium px-4 py-1.5 rounded-md hover:bg-[#FFD1C1] hover:text-gray-900 transition-colors duration-200">
                      Shop on Temu
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/products">
              <span className="inline-block bg-transparent border border-[#F28C82] text-[#F28C82] text-sm font-poppins font-medium px-5 py-2 rounded-md hover:bg-[#F28C82] hover:text-white transition-colors duration-200">
                View All Products
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}