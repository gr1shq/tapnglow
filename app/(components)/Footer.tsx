'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    {
      title: 'Explore',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        // { name: 'Categories', href: '/categories' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Affiliate Program', href: '/affiliate' },

      ],
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-50 text-[var(--foreground)] border-t border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-[var(--primary)]">Tap</span>
              <span className="text-2xl font-bold text-[var(--foreground)]">NGlow</span>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Trendy finds for your perfect vibe.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  name: 'TikTok',
                  href: 'https://tiktok.com/@tapnglow',
                  icon: (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  name: 'X',
                  href: 'https://x.com/tapnglow',
                  icon: (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.254 2h3.63L14.41 10.08 23.12 22h-7.35l-5.18-6.97L4.75 22H1.12l8.01-8.87L.88 2h7.5l4.77 6.43L18.254 2Zm-1.27 18.7h2.01L6.11 3.18H4.03L16.984 20.7Z" />
                    </svg>
                  ),
                },
                {
                  name: 'Pinterest',
                  href: 'https://pinterest.com/tapnglow',
                  icon: (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387-.12-1.102-.227-2.793.049-3.993.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.174.265-.402.159-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.93-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.042-1.002 2.349-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12S18.627 0 12 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
              ].map((social) => (
                <motion.div
                  key={social.name}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    className="text-gray-600 hover:text-[var(--primary)] transition-colors"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <h3 className="text-base font-semibold text-[var(--foreground)] mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5, color: 'var(--primary)' }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-[var(--primary)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} TapNGlow. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-600 hover:text-[var(--primary)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 hover:text-[var(--primary)] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}