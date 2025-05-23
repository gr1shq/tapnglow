// app/terms-of-service/page.tsx
'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Header from '../(components)/Header';

export default function TermsOfService() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Head>
        <title>Tap’n’Glow - Terms of Service</title>
        <meta
          name="description"
          content="Review the Terms of Service for using Tap’n’Glow by Tapecode Entertainment, including affiliate link usage and disclaimers."
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
            Terms of Service
          </h1>
          <p className="text-sm text-[#9CA3AF] mb-4">
            Last updated: May 23, 2025
          </p>
          <p className="text-base text-[#374151] mb-4">
            Welcome to Tap’n’Glow, operated by Tapecode Entertainment. By accessing tapnglow.com, you agree to these Terms of Service. If you do not agree, please do not use our website.
          </p>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            1. Use of Website
          </h2>
          <p className="text-base text-[#374151] mb-4">
            You may use our website for lawful purposes only. You agree not to:
          </p>
          <ul className="list-disc pl-6 text-base text-[#374151] mb-4">
            <li>Violate any laws or regulations.</li>
            <li>Interfere with website functionality (e.g., hacking, scraping).</li>
            <li>Use content for commercial purposes without permission.</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            2. Affiliate Links
          </h2>
          <p className="text-base text-[#374151] mb-4">
            Our website contains affiliate links to third-party platforms (e.g., Temu). We may earn a commission on purchases made through these links at no extra cost to you. Product availability, pricing, and terms are set by third parties, and we are not responsible for their actions.
          </p>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            3. Intellectual Property
          </h2>
          <p className="text-base text-[#374151] mb-4">
            All content on tapnglow.com, including text, images, and logos, is owned by Tapecode Entertainment or its licensors. You may not reproduce, distribute, or modify content without written consent.
          </p>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            4. Disclaimer of Warranties
          </h2>
          <p className="text-base text-[#374151] mb-4">
            Our website is provided “as is” without warranties. We do not guarantee:
          </p>
          <ul className="list-disc pl-6 text-base text-[#374151] mb-4">
            <li>Uninterrupted or error-free access.</li>
            <li>Accuracy of third-party content (e.g., Temu product listings).</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            5. Limitation of Liability
          </h2>
          <p className="text-base text-[#374151] mb-4">
            Tapecode Entertainment is not liable for any damages arising from your use of the website, including issues with third-party purchases via affiliate links.
          </p>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            6. Changes to Terms
          </h2>
          <p className="text-base text-[#374151] mb-4">
            We may update these Terms at any time. Continued use of the website constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            7. Contact Us
          </h2>
          <p className="text-base text-[#374151] mb-4">
            For questions about these Terms, contact us at{' '}
            <a
              href="mailto:support@tapnglow.com"
              className="text-[#F28C82] hover:underline"
            >
              support@tapnglow.com
            </a>.
          </p>
        </motion.div>
      </section>
    </div>
  );
}