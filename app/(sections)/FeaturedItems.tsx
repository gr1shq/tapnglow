// app/(components)/FeaturedItems.tsx
'use client';

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
    <div className="animate-fade-in">
      <Image
        src={currentItem.image}
        alt={currentItem.title}
        width={280}
        height={280}
        className="w-full h-44 object-cover"
      />
      <h3 className="text-base font-medium text-[#6B7280] mt-3 mb-1">{currentItem.title}</h3>
      <p className="text-sm text-[#9CA3AF] mb-3">{currentItem.description}</p>
      <Link href={currentItem.pinterestLink}>
        <span className="inline-block bg-[#F28C82] text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-[#FFD1C1] hover:text-gray-900 transition-colors duration-200">
          See on Pinterest
        </span>
      </Link>
    </div>
  );
}