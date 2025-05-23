// app/(components)/Header.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    // { name: 'Categories', href: '/categories' },
    // { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Animation for logo letters
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="sticky top-0 bg-[#FFFFFF] z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.span
                className="text-2xl sm:text-3xl font-poppins font-bold text-[var(--primary)]"
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                Tap
              </motion.span>
              <motion.span
                className="text-2xl sm:text-3xl font-poppins font-bold text-[var(--foreground)]"
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                NGlow
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-5">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm font-poppins font-medium text-[#374151] hover:text-[#F28C82] transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1">
                <span
                  className={`h-0.5 w-full bg-[#374151] transition-all ${
                    isOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-[#374151] transition-all ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-[#374151] transition-all ${
                    isOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#FFFFFF] transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden pt-16 px-6`}
      >
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-poppins font-medium text-[#374151] hover:text-[#F28C82] transition-colors py-1"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}