"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const WhyWorkWithMe = () => {
  return (
    <section className="padding py-24 bg-white">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-4xl font-semibold">Why B2B Founders Work With Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div className="text-center">
            <p className="text-xl font-medium mb-6">
              I'm not here to sell you AI hype.
            </p>
            <p className="text-black/70 text-lg leading-relaxed">
              I work with serious founders who want to save hours a week and scale what already works — faster, cleaner, and hands-off.
            </p>
          </div>

          <div className="text-center">
            <p className="text-black/70 text-lg leading-relaxed mb-8">
              I've helped clients automate proposals, lead gen, onboarding, follow-ups, and fulfillment.
              <br />
              If you're drowning in repetition, I'll build systems that give you time back — and let you focus on what actually moves the business.
            </p>
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-black text-white font-medium hover:bg-black/90 transition-colors text-lg"
            >
              Let's Talk
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe; 