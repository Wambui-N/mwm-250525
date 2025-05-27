"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-fog py-16">
      <div className="padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-semibold">Privacy Policy</h1>
            <p className="text-black/70">Last updated: 27/05/2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-black/70">
              At Made With Make, your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your personal data.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">1. Information We Collect</h2>
            <p className="text-black/70">
              When you use our site — especially through forms like our proposal generator — we may collect:
            </p>
            <ul className="list-disc pl-6 text-black/70">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Company name</li>
              <li>Company website (optional)</li>
              <li>Details about your services and target audience</li>
            </ul>
            <p className="text-black/70">
              We collect this information only when you voluntarily provide it to us.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">2. How We Use Your Information</h2>
            <p className="text-black/70">We use the information you submit to:</p>
            <ul className="list-disc pl-6 text-black/70">
              <li>Generate and send you a sample proposal</li>
              <li>Improve our automation systems and services</li>
              <li>Occasionally follow up (if relevant and with consent)</li>
            </ul>
            <p className="text-black/70">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">3. Data Security</h2>
            <p className="text-black/70">
              We take data protection seriously. Your information is stored securely and only accessible to authorized personnel. We use industry-standard tools to protect your data.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">4. Your Rights</h2>
            <p className="text-black/70">You have the right to:</p>
            <ul className="list-disc pl-6 text-black/70">
              <li>Request access to the data we hold about you</li>
              <li>Ask us to delete or correct your data</li>
              <li>Opt out of any follow-up communication at any time</li>
            </ul>
            <p className="text-black/70">
              Just email us at wambui@madewithmake.com— we'll take care of it quickly.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">5. Cookies & Analytics</h2>
            <p className="text-black/70">
              We may use minimal cookies or analytics tools to understand how visitors use our site. These are anonymous and help us improve user experience.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">6. Changes to This Policy</h2>
            <p className="text-black/70">
              We may update this policy as needed. Any changes will be posted on this page with an updated date.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">7. Contact Us</h2>
            <p className="text-black/70">If you have questions about this policy or your data, email us at:</p>
            <a
              href="mailto:wambui@madewithmake.com"
              className="mt-2 inline-flex items-center gap-2 text-black hover:text-black/70"
            >
              <Mail className="h-5 w-5" />
              <span>wambui@madewithmake.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 