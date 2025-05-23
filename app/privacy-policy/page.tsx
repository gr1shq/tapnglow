// app/privacy-policy/page.tsx
'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Head>
        <title>Tap’n’Glow - Privacy Policy</title>
        <meta
          name="description"
          content="Learn how Tap’n’Glow by Tapecode Entertainment collects, uses, and protects your personal information."
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
            Privacy Policy
          </h1>
          <p className="text-sm text-[#9CA3AF] mb-4">
            Last updated: May 23, 2025
          </p>
          <p className="text-base text-[#374151] mb-4">
            At Tap’n’Glow, operated by Tapecode Entertainment, we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website, tapnglow.com.
          </p>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            1. Information We Collect
          </h2>
          <p className="text-base text-[#374151] mb-4">
            We collect minimal data to enhance your experience:
          </p>
          <ul className="list-disc pl-6 text-base text-[#374151] mb-4">
            <li>
              <strong>Automatically Collected Data:</strong> We use cookies and analytics tools (e.g., Google Analytics) to collect anonymized data like IP addresses, browser type, and pages visited.
            </li>
            <li>
              <strong>Third-Party Interactions:</strong> Clicking affiliate links (e.g., Temu, Pinterest) may lead to data collection by those platforms, subject to their privacy policies.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            2. How We Use Your Information
          </h2>
          <p className="text-base text-[#374151] mb-4">
            We use collected data to:
          </p>
          <ul className="list-disc pl-6 text-base text-[#374151] mb-4">
            <li>Improve website functionality and user experience.</li>
            <li>Analyze site traffic and performance.</li>
            <li>Provide personalized content and affiliate recommendations.</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            3. Sharing Your Information
          </h2>
          <p className="text-base text-[#374151] mb-4">
            We do not sell or share your personal data, except:
          </p>
          <ul className="list-disc pl-6 text-base text-[#374151] mb-4">
            <li>With third-party platforms (e.g., Temu) when you click affiliate links.</li>
            <li>With analytics providers for anonymized data.</li>
            <li>As required by law or to protect our rights.</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            4. Your Rights
          </h2>
          <p className="text-base text-[#374151] mb-4">
            Depending on your location (e.g., GDPR for EU users, CCPA for California residents), you may have rights to:
          </p>
          <ul className="list-disc pl-6 text-base text-[#374151] mb-4">
            <li>Access, correct, or delete your data.</li>
            <li>Opt out of cookies via browser settings.</li>
            <li>Contact us at gpentertainment28@gmail.com for requests.</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            5. Cookies
          </h2>
          <p className="text-base text-[#374151] mb-4">
            We use cookies to enhance your browsing experience. You can manage cookie preferences in your browser settings.
          </p>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            6. Third-Party Links
          </h2>
          <p className="text-base text-[#374151] mb-4">
            Our website includes affiliate links to third-party sites (e.g., Temu, Pinterest). We are not responsible for their privacy practices. Please review their policies.
          </p>

          <h2 className="text-xl font-semibold text-[#F28C82] mt-6 mb-3">
            7. Contact Us
          </h2>
          <p className="text-base text-[#374151] mb-4">
            For questions about this Privacy Policy, contact us at{' '}
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