// app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import blogPosts from '../../data/blog.json';
import { Poppins, Inter } from 'next/font/google';
import { Metadata } from 'next';

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });
const inter = Inter({ subsets: ['latin'], weight: ['400'] });

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

const typedBlogPosts: BlogPost[] = blogPosts as BlogPost[];

export const metadata: Metadata = {
  title: 'Blog | Tap’n’Glow',
  description: 'Explore the latest in Y2K fashion, aesthetic decor, and teen girl style trends with Tap’n’Glow’s blog.',
  keywords: ['Y2K fashion', 'teen girl outfits', 'aesthetic decor', 'cozy room', 'trendy style', '2025 trends'],
  openGraph: {
    title: 'Blog | Tap’n’Glow',
    description: 'Explore the latest in Y2K fashion, aesthetic decor, and teen girl style trends with Tap’n’Glow’s blog.',
    url: 'https://tapnglow.vercel.app/blog',
    type: 'website',
    images: [{ url: 'https://tapnglow.vercel.app/products/y2k-aesthetic-hero.webp', width: 1200, height: 630, alt: 'Tap’n’Glow Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Tap’n’Glow',
    description: 'Explore the latest in Y2K fashion, aesthetic decor, and teen girl style trends with Tap’n’Glow’s blog.',
    images: ['https://tapnglow.vercel.app/products/y2k-aesthetic-hero.webp'],
  },
  alternates: {
    canonical: 'https://tapnglow.vercel.app/blog',
  },
};

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const selectedCategory = resolvedSearchParams.category;

  const categories = Array.from(new Set(typedBlogPosts.map((post) => post.category)));
  const filteredPosts = selectedCategory
    ? typedBlogPosts.filter((post) => post.category === selectedCategory)
    : typedBlogPosts;

  return (
    <main className="flex-grow bg-gradient-to-b from-[#FFD1C1] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={`text-3xl md:text-4xl font-semibold text-gray-900 mb-8 text-center ${poppins.className}`}>
          Tap’n’Glow Blog
        </h1>
        <nav className="mb-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog"
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              !selectedCategory
                ? 'bg-[#F28C82] text-white'
                : 'bg-white text-gray-700 hover:bg-[#FFD1C1] hover:text-gray-900'
            } ${inter.className}`}
            aria-label="View all blog posts"
          >
            All
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog?category=${encodeURIComponent(category)}`}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-[#F28C82] text-white'
                  : 'bg-white text-gray-700 hover:bg-[#FFD1C1] hover:text-gray-900'
              } ${inter.className}`}
              aria-label={`View ${category} blog posts`}
            >
              {category}
            </Link>
          ))}
        </nav>
        {filteredPosts.length === 0 ? (
          <p className={`text-center text-gray-600 text-lg ${inter.className}`}>
            No posts found for this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg hover:scale-105 transition-all duration-300"
                aria-label={`Read ${post.title}`}
              >
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-contain"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 384px"
                    loading="lazy"
                  />
                </div>
                <span className={`inline-block px-3 py-1 bg-[#F28C82] text-white text-xs font-medium rounded-full mt-4 ${inter.className}`}>
                  {post.category}
                </span>
                <h2 className={`text-lg font-medium text-gray-900 mt-2 line-clamp-2 ${poppins.className}`}>
                  {post.title}
                </h2>
                <p className={`text-sm text-gray-600 mt-2 line-clamp-3 ${inter.className}`}>
                  {post.description}
                </p>
                <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                  <time dateTime={post.date} className={inter.className}>
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}