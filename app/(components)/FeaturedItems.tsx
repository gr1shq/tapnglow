// app/(components)/FeaturedItems.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import featuredItems from '../../data/featured-items.json';

// Define TypeScript interface for item data
interface FeaturedItem {
  id: number;
  title: string;
  description: string;
  image: string;
  pinterestLink: string;
}

// Type the imported JSON data
const items: FeaturedItem[] = featuredItems;

export default function FeaturedItems() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  // Cycle items every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const currentItem = items[currentItemIndex];

  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-[#005555] text-center mb-6 animate-glow">
        Our Vibrant Finds
      </h2>
      <div className="relative">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            width={400}
            height={400}
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{currentItem.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{currentItem.description}</p>
            <Link href={currentItem.pinterestLink}>
              <span className="inline-block bg-[#CC9900] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#00A3A3] hover:text-gray-900 transition-all duration-300">
                See on Pinterest
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}