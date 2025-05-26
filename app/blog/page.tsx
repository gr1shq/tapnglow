// app/blog/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import blogPosts from '../../data/blog.json';
import { Poppins, Inter } from 'next/font/google';
import type { Metadata } from 'next';

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });
const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Tap’n’Glow Blog - Y2K Fashion & Aesthetic Decor',
  description: 'Dive into the world of Y2K fashion and cozy room decor with Tap’n’Glow’s blog. Find inspiration for teen girls outfits, aesthetic vibes, and more!',
  keywords: ['Y2K fashion', 'teen girl outfits', 'aesthetic decor', 'cozy room', 'trendy style'],
  openGraph: {
    title: 'Tap’n’Glow Blog - Y2K Fashion & Aesthetic Decor',
    description: 'Explore Y2K-inspired outfits and cozy decor ideas for teen girls at Tap’n’Glow.',
    url: 'https://tapnglow.vercel.app/blog',
    type: 'website',
    images: [
      {
        url: 'https://tapnglow.vercel.app/products/women-tshirt13.webp',
        width: 1200,
        height: 630,
        alt: 'Tap’n’Glow Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tap’n’Glow Blog - Y2K Fashion & Aesthetic Decor',
    description: 'Explore Y2K-inspired outfits and cozy decor at Tap’n’Glow.',
    images: ['https://tapnglow.vercel.app/products/women-tshirt13.webp'],
  },
  alternates: {
    canonical: 'https://tapnglow.vercel.app/blog',
  },
};

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
}

const typedBlogPosts: BlogPost[] = blogPosts as BlogPost[];

export default async function Blog({ searchParams }: { searchParams: { category?: string } }) {
  const filterCategory = searchParams.category || 'All';

  const categories = ['All', 'Fashion', 'Room Decor', 'Lifestyle'];

  const filteredPosts = typedBlogPosts
    .filter((post) => (filterCategory === 'All' ? true : post.category === filterCategory))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="flex-grow bg-gradient-to-b from-[#FFD1C1] to-white">
      <section className="bg-[#F28C82] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-5xl font-semibold mb-4 ${poppins.className}`}>
            Tap’n’Glow Blog
          </h1>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-6 ${inter.className}`}>
            Welcome to the ultimate destination for Y2K-inspired fashion and aesthetic room decor! Our blog is packed with tips, tricks, and curated Temu finds to help teen girls create a vibrant wardrobe and cozy space that reflect their unique style. From bold crop tops to dreamy moon lamps, we’ve got everything you need to glow up in 2025.
          </p>
          <Link
            href="/products"
            className="inline-block px-6 py-3 text-base font-medium bg-white text-[#F28C82] rounded-full hover:bg-[#FFD1C1] hover:text-gray-900 transition-all duration-200"
            aria-label="Shop Now"
          >
            Shop the Aesthetic
          </Link>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog${category === 'All' ? '' : `?category=${encodeURIComponent(category)}`}`}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${poppins.className} ${
                filterCategory === category
                  ? 'bg-[#F28C82] text-white'
                  : 'bg-[#FFD1C1] text-gray-900 hover:bg-[#F28C82] hover:text-white'
              }`}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article
                key={post.id}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-all duration-300"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <Link href={`/blog/${post.slug}`} className="block" itemProp="url">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={post.id === filteredPosts[0].id}
                      itemProp="image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-4 left-4 bg-[#F28C82] text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <time
                      className={`text-sm text-gray-600 ${inter.className}`}
                      dateTime={post.date}
                      itemProp="datePublished"
                    >
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <h2
                      className={`text-xl font-semibold text-gray-900 mt-2 mb-3 line-clamp-2 ${poppins.className}`}
                      itemProp="headline"
                    >
                      {post.title}
                    </h2>
                    <p
                      className={`text-base text-gray-600 line-clamp-3 ${inter.className}`}
                      itemProp="description"
                    >
                      {post.description}
                    </p>
                    <span className="inline-block mt-4 px-4 py-2 text-sm font-medium text-[#F28C82] border border-[#F28C82] rounded-full hover:bg-[#F28C82] hover:text-white transition-all duration-200">
                      Read More
                    </span>
                  </div>
                </Link>
              </article>
            ))
          ) : (
            <p className={`text-base text-gray-600 text-center col-span-full ${inter.className}`}>
              No posts found. Try a different category or check back soon for more inspiration!
            </p>
          )}
        </div>
      </section>
    </main>
  );
}