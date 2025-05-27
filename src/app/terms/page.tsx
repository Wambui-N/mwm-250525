"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";

export default function Terms() {
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
            <h1 className="mb-4 text-4xl font-semibold">Terms of Service</h1>
            <p className="text-black/70">Last updated: 27/05/2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-black/70">
              Welcome to Made With Make. By accessing or using our website and tools — including the interactive proposal generator — you agree to the following Terms of Service.
            </p>
            <p className="text-black/70">Please read them carefully.</p>

            <h2 className="mt-8 text-2xl font-semibold">1. Who We Are</h2>
            <p className="text-black/70">
              Made With Make offers AI-powered automation services to help B2B businesses save time, including tools like proposal generation, lead collection, and custom workflows.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">2. Using Our Tools</h2>
            <p className="text-black/70">
              You may use our website and automation tools (like the proposal generator) for lawful purposes and in accordance with these terms.
            </p>
            <p className="text-black/70">By submitting your information through any of our forms, you agree:</p>
            <ul className="list-disc pl-6 text-black/70">
              <li>That the information is accurate and submitted voluntarily</li>
              <li>That we may use it to generate and send relevant automated documents</li>
              <li>That we may follow up with you regarding services (with an opt-out option at any time)</li>
            </ul>

            <h2 className="mt-8 text-2xl font-semibold">3. Intellectual Property</h2>
            <p className="text-black/70">
              All content on this website — including automations, templates, design, branding, and generated documents — is owned by Made With Make unless otherwise stated.
            </p>
            <p className="text-black/70">
              You are welcome to use generated documents for personal or business use, but you may not resell, distribute, or claim ownership of our tools or underlying systems.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">4. Disclaimer</h2>
            <p className="text-black/70">
              The automated tools on this site (such as the proposal generator) are meant to give you a helpful starting point — they do not replace legal, business, or professional advice.
            </p>
            <p className="text-black/70">
              We do our best to ensure accuracy and reliability, but we can't guarantee that everything generated is error-free or suitable for all use cases.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">5. Limitation of Liability</h2>
            <p className="text-black/70">
              Made With Make will not be held liable for any indirect, incidental, or consequential damages arising out of your use of this site or any tools provided. Use them at your own discretion.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">6. Termination</h2>
            <p className="text-black/70">
              We reserve the right to restrict or terminate access to our services if we believe our tools are being misused or abused.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">7. Changes to These Terms</h2>
            <p className="text-black/70">
              We may update these Terms of Service as our business evolves. If we do, the latest version will always be posted here with a revised date.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">8. Contact</h2>
            <p className="text-black/70">If you have any questions about these terms, reach out anytime:</p>
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