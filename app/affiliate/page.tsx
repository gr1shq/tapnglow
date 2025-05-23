// app/affiliate-program/page.tsx
'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Header from '../(components)/Header';

export default function AffiliateProgram() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Head>
        <title>Tap’n’Glow - Affiliate Program</title>
        <meta
          name="description"
          content="Join the Tap’n’Glow affiliate program through our Temu partnership and earn commissions on vibrant products."
        />
      </Head>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-[#F28C82] mb-6">
            Affiliate Program
          </h1>
          <p className="text-base text-[#374151] mb-4">
            At Tap’n’Glow, operated by Tapecode Entertainment, we partner with Temu’s affiliate program to bring you vibrant, glowing products. Join us to earn commissions by promoting our curated finds!
          </p>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            1. How It Works
          </h2>
          <p className="text-base text-[#374151] mb-4">
            Tap’n’Glow uses affiliate links to Temu, a trusted e-commerce platform. By sharing these links, you can earn commissions on purchases made through your referrals.
          </p>
          <ul className="list-disc pl-6 text-base text-[#374151] mb-4">
            <li>Sign up for Temu’s affiliate program.</li>
            <li>Promote Tap’n’Glow products using our affiliate links.</li>
            <li>Earn commissions (typically 5-20% per sale, depending on Temu’s terms).</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            2. Why Partner with Tap’n’Glow?
          </h2>
          <p className="text-base text-[#374151] mb-4">
            Our curated selection of glowing treasures, from moon lamps to chic accessories, makes it easy to attract customers. Benefits include:
          </p>
          <ul className="list-disc pl-6 text-base text-[#374151] mb-4">
            <li>Access to high-quality product images and descriptions.</li>
            <li>Vibrant branding that resonates with style-conscious audiences.</li>
            <li>Support through our Pinterest community (@TapNGlow).</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            3. How to Join
          </h2>
          <p className="text-base text-[#374151] mb-4">
            To participate, join Temu’s affiliate program and start promoting Tap’n’Glow products:
          </p>
          <ul className="list-disc pl-6 text-base text-[#374151] mb-4">
            <li>
              Visit{' '}
              <a
                href="https://www.temu.com/affiliate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F28C82] hover:underline"
              >
                Temu’s affiliate page
              </a>{' '}
              to sign up.
            </li>
            <li>Contact us at support@tapnglow.com for promotional materials.</li>
            <li>Share links on your blog, social media, or Pinterest.</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            4. Commission Structure
          </h2>
          <p className="text-base text-[#374151] mb-4">
            Commissions are set by Temu, typically ranging from 5% for low-cost items (e.g., necklaces) to 20% for higher-value products (e.g., bags, lamps), capped at $100 per order. Check Temu’s affiliate dashboard for details.
          </p>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            5. Contact Us
          </h2>
          <p className="text-base text-[#374151] mb-4">
            For questions about our affiliate program, contact us at{' '}
            <a
              href="mailto:support@tapnglow.com"
              className="text-[#F28C82] hover:underline"
            >
              gpentertainment28@gmail.com
            </a>.
          </p>
        </motion.div>
      </section>
    </div>
  );
}