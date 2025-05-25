// app/products/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  // Filter products by search term (title and description) and category (tags)
  const filteredProducts = productList.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === 'All' ||
      (filterCategory === 'Room Decor' && product.tags.includes('lamp')) ||
      (filterCategory === 'Accessories' &&
        (product.tags.includes('bag') ||
         product.tags.includes('belt') ||
         product.tags.includes('glasses') ||
         product.tags.includes('necklace'))) ||
      (filterCategory === 'Tops' &&
        (product.tags.includes('t-shirt') ||
         product.tags.includes('blouse') ||
         product.tags.includes('bodysuit'))) ||
      (filterCategory === 'Pants' && product.tags.includes('pants'));
    return matchesSearch && matchesCategory;
  });

  // Consolidated filter buttons
  const filterButtons = ['All', 'Room Decor', 'Accessories', 'Tops', 'Pants'];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-poppins font-bold text-[#F28C82] mb-6 text-center">
          Our Vibrant Products
        </h1>
        {/* Search Bar and Filter Buttons */}
        <div className="mb-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search products (e.g., decor, accessories, tops)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 text-sm text-[#374151] bg-white border border-[#9CA3AF] rounded-md focus:outline-none focus:border-[#F28C82] transition-colors duration-200 mb-4"
            aria-label="Search products"
          />
          <div className="flex flex-wrap justify-center gap-2">
            {filterButtons.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-3 py-1 text-sm font-poppins font-medium rounded-full transition-colors duration-200 ${
                  filterCategory === category
                    ? 'bg-[#F28C82] text-white'
                    : 'bg-[#FFD1C1] text-[#374151] hover:bg-[#F28C82] hover:text-white'
                }`}
                whileTap={{ scale: 0.95 }}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Clickable Image with Hover Effect */}
                <Link
                  href={product.temuLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Shop ${product.title} on Temu`}
                >
                  <div className="relative w-full h-64 bg-[#FFFFFF] cursor-pointer">
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
                </Link>
                {/* Product Info */}
                <h2 className="text-base font-poppins font-medium text-[#6B7280] mt-4 mb-1">
                  {product.title}
                </h2>
                <p className="text-sm font-inter text-[#9CA3AF] mb-4">{product.description}</p>
                <Link href={product.temuLink} target="_blank" rel="noopener noreferrer">
                  <span className="inline-block bg-[#F28C82] text-white text-sm font-poppins font-medium px-4 py-1.5 rounded-md hover:bg-[#FFD1C1] hover:text-gray-900 transition-colors duration-200">
                    Shop on Temu
                  </span>
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="text-sm font-inter text-[#9CA3AF] text-center col-span-full">
              No products found. Try a different search or filter!
            </p>
          )}
        </div>
      </section>
    </div>
  );
}