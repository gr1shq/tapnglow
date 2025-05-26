// app/(sections)/FeaturedBlog.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import blogPosts from '../../data/blog.json';

// Define TypeScript interface for blog post data
interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
}

// Type the imported JSON data
const blogList: BlogPost[] = blogPosts;

// Select up to three blog posts (e.g., latest or specific ones)
const featuredBlogs = blogList.slice(0, 3); // Take first 3 posts

export default function FeaturedBlog() {
  return (
    <section className="bg-[#FFFFFF] py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-[#F28C82] mb-6 text-center">
            Explore Our Y2K Blog
          </h2>
          <p className="text-base font-inter text-[#9CA3AF] mb-8 text-center max-w-2xl mx-auto">
            Get inspired with the latest Y2K fashion tips, aesthetic room decor ideas, and trendy style guides for teen girls.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBlogs.map((post, index) => (
              <motion.div
                key={post.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-full h-48 bg-[#FFFFFF] rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`${post.title} - Tap’n’Glow`}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 384px"
                    loading="lazy"
                  />
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <span className="block mt-2 px-3 py-1 bg-[#F28C82] text-white text-xs font-semibold rounded-full text-center font-inter">
                  {post.category}
                </span>
                <h3 className="text-base font-poppins font-medium text-[#6B7280] mt-2 mb-1 text-center line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm font-inter text-[#9CA3AF] mb-3 text-center line-clamp-3">
                  {post.description}
                </p>
                <div className="text-center">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="inline-block bg-[#F28C82] text-white text-sm font-poppins font-medium px-4 py-1.5 rounded-md hover:bg-[#FFD1C1] hover:text-gray-900 transition-colors duration-200">
                      Read More
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog">
              <span className="inline-block bg-transparent border border-[#F28C82] text-[#F28C82] text-sm font-poppins font-medium px-5 py-2 rounded-md hover:bg-[#F28C82] hover:text-white transition-colors duration-200">
                View All Posts
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}