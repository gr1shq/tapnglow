// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import blogPosts from '../../../data/blog.json';
import products from '../../../data/products.json';
import { Poppins, Inter } from 'next/font/google';
import { Metadata } from 'next';

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });
const inter = Inter({ subsets: ['latin'], weight: ['400'] });

interface BlogContent {
  type: 'heading' | 'paragraph' | 'highlight';
  text: string;
  temuUrl?: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  defaultImage?: string;
  hoverImage?: string;
}

interface ImageContent {
  type: 'image';
  text: string;
  defaultImage: string;
  hoverImage: string;
}

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  content: Array<BlogContent | ImageContent>;
}

interface Product {
  id: number;
  title: string;
  description: string;
  defaultImage: string;
  hoverImage: string;
  temuLink: string;
  tags: string[];
}

const typedBlogPosts: BlogPost[] = blogPosts as BlogPost[];
const typedProducts: Product[] = products as Product[];

const FALLBACK_IMAGE = '/products/fallback-image.webp';

export async function generateStaticParams() {
  return typedBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = typedBlogPosts.find((post) => post.slug === slug);

  if (!post) {
    return { title: 'Post Not Found | Tap’n’Glow' };
  }

  return {
    title: `${post.title} | Tap’n’Glow`,
    description: post.description,
    keywords: post.tags.concat(['teen girl fashion', 'aesthetic decor', 'Y2K style']),
    openGraph: {
      title: `${post.title} | Tap’n’Glow`,
      description: post.description,
      url: `https://tapnglow.vercel.app/blog/${slug}`,
      type: 'article',
      images: [{ url: `https://tapnglow.vercel.app${post.image}`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Tap’n’Glow`,
      description: post.description,
      images: [`https://tapnglow.vercel.app${post.image}`],
    },
    alternates: {
      canonical: `https://tapnglow.vercel.app/blog/${slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = typedBlogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const tableOfContents = post.content
    .filter((item) => item.type === 'heading')
    .map((item) => ({
      text: item.text,
      id: item.text.toLowerCase().replace(/\s+/g, '-'),
    }));

  const relatedPosts = typedBlogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const relatedProducts = typedProducts
    .filter((product) =>
      post.content.some(
        (item) => item.type !== 'image' && (item as BlogContent).temuUrl && (item as BlogContent).temuUrl === product.temuLink
      )
    )
    .slice(0, 4);

  return (
    <main className="flex-grow bg-gradient-to-b from-[#FFD1C1] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <nav className="mb-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#F28C82] transition-colors">Home</Link> /{' '}
            <Link href="/blog" className="hover:text-[#F28C82] transition-colors">Blog</Link> /{' '}
            <span className="text-gray-900">{post.title}</span>
          </nav>
          <div className="mb-8 bg-white rounded-lg shadow-md p-6">
            <span className="inline-block px-3 py-1 bg-[#F28C82] text-white text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
            <h1 className={`text-3xl md:text-4xl font-semibold text-gray-900 mb-4 ${poppins.className}`}>
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
              <time dateTime={post.date} className={inter.className}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span className={inter.className}>• {Math.ceil(post.content.length / 2)} min read</span>
            </div>
            <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-lg overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-contain"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 896px"
                priority
              />
            </div>
          </div>
          <div className="prose prose-lg max-w-none text-gray-900 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            {post.content.map((item, index) => (
              <div key={index} id={item.type === 'heading' ? item.text.toLowerCase().replace(/\s+/g, '-') : undefined}>
                {item.type === 'heading' && (
                  <div className="mt-10 mb-6">
                    <h2 className={`text-2xl font-semibold text-[#F28C82] ${poppins.className}`}>
                      {item.text}
                    </h2>
                    {(item.image || item.defaultImage) && (
                      <div className="relative w-full max-w-sm mx-auto my-6 rounded-lg overflow-hidden shadow-md group">
                        <Image
                          src={item.image || item.defaultImage || FALLBACK_IMAGE}
                          alt={item.text}
                          width={384}
                          height={384}
                          className="object-contain"
                          quality={75}
                          sizes="(max-width: 768px) 100vw, 384px"
                          loading="lazy"
                        />
                        {item.defaultImage && item.hoverImage && (
                          <Image
                            src={item.hoverImage}
                            alt={`${item.text} hover`}
                            width={384}
                            height={384}
                            className="object-contain absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            quality={75}
                            sizes="(max-width: 768px) 100vw, 384px"
                            loading="lazy"
                          />
                        )}
                      </div>
                    )}
                    {(item as BlogContent).temuUrl && (
                      <Link
                        href={(item as BlogContent).temuUrl!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F28C82] text-white hover:bg-[#FFD1C1] hover:text-gray-900 transition-all duration-200"
                        aria-label={`Shop ${item.text} on Temu`}
                      >
                        <Image src="/img/temu-logo.png" alt="Temu" width={24} height={24} className="object-contain" />
                        <span className="text-sm font-medium">Shop on Temu</span>
                      </Link>
                    )}
                  </div>
                )}
                {item.type === 'paragraph' && (
                  <p className={`mb-6 text-base leading-relaxed text-gray-700 ${inter.className}`}>
                    {item.text}
                  </p>
                )}
                {item.type === 'image' && (
                  <div className="relative w-full max-w-sm mx-auto my-8 rounded-lg overflow-hidden shadow-md group">
                    <Image
                      src={(item as ImageContent).defaultImage || FALLBACK_IMAGE}
                      alt={item.text}
                      width={384}
                      height={384}
                      className="object-contain"
                      quality={75}
                      sizes="(max-width: 768px) 100vw, 384px"
                      loading="lazy"
                    />
                    {(item as ImageContent).hoverImage && (
                      <Image
                        src={(item as ImageContent).hoverImage}
                        alt={`${item.text} hover`}
                        width={384}
                        height={384}
                        className="object-contain absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        quality={75}
                        sizes="(max-width: 768px) 100vw, 384px"
                        loading="lazy"
                      />
                    )}
                  </div>
                )}
                {item.type === 'highlight' && (
                  <section className="bg-[#F28C82] text-white py-8 md:py-12 my-8">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                      <div className="relative w-full max-w-md mx-auto aspect-[4/3] rounded-lg overflow-hidden mb-6">
                        <Image
                          src={item.image || FALLBACK_IMAGE}
                          alt={item.text}
                          fill
                          className="object-contain"
                          quality={75}
                          sizes="(max-width: 768px) 100vw, 448px"
                          loading="lazy"
                        />
                      </div>
                      <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-6 ${inter.className}`}>
                        {item.text}
                      </p>
                      {item.ctaLink && item.ctaText && (
                        <Link
                          href={item.ctaLink}
                          className="inline-block px-6 py-3 text-base font-medium bg-white text-[#F28C82] rounded-full hover:bg-[#FFD1C1] hover:text-gray-900 transition-all duration-200"
                          aria-label={item.ctaText}
                        >
                          {item.ctaText}
                        </Link>
                      )}
                    </div>
                  </section>
                )}
              </div>
            ))}
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className={`text-lg font-semibold text-gray-900 mb-4 ${poppins.className}`}>
                Explore by Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 bg-[#F28C82] text-white text-sm rounded-full hover:bg-[#FFD1C1] hover:text-gray-900 transition-colors duration-200"
                    aria-label={`View posts tagged with ${tag}`}
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h3 className={`text-xl font-semibold text-gray-900 mb-6 ${poppins.className}`}>
                More Aesthetic Inspiration
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg hover:scale-105 transition-all duration-300"
                    aria-label={`Read ${relatedPost.title}`}
                  >
                    <div className="relative w-full h-40 rounded-lg overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-contain"
                        quality={75}
                        sizes="(max-width: 768px) 100vw, 300px"
                        loading="lazy"
                      />
                    </div>
                    <h4 className={`text-lg font-medium text-gray-900 mt-4 line-clamp-2 ${poppins.className}`}>
                      {relatedPost.title}
                    </h4>
                    <p className={`text-sm text-gray-600 mt-2 line-clamp-3 ${inter.className}`}>
                      {relatedPost.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <aside className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start">
          {tableOfContents.length > 0 && (
            <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-md mb-6">
              <h3 className={`text-lg font-semibold text-gray-900 mb-4 ${poppins.className}`}>
                Table of Contents
              </h3>
              <ul className="space-y-2">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className={`text-sm text-gray-700 hover:text-[#F28C82] transition-colors ${inter.className}`}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {relatedProducts.length > 0 && (
            <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-md">
              <h3 className={`text-lg font-semibold text-gray-900 mb-4 ${poppins.className}`}>
                Shop the Look
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {relatedProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={product.temuLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center"
                    aria-label={`Shop ${product.title}`}
                  >
                    <div className="relative w-full h-32 rounded-lg overflow-hidden mb-2">
                      <Image
                        src={product.defaultImage}
                        alt={product.title}
                        fill
                        className="object-contain group-hover:opacity-0 transition-opacity duration-300"
                      />
                      <Image
                        src={product.hoverImage}
                        alt={`${product.title} hover`}
                        fill
                        className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <h4 className={`text-xs font-medium text-gray-900 text-center line-clamp-2 ${poppins.className}`}>
                      {product.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}