"use client";

import React from "react";
import {
  ArrowRight,
  Zap,
  CheckCircle,
  Scale,
  BarChart,
  Check,
} from "lucide-react";
import Link from "next/link";
import { Button, ButtonLink } from "@/components/ui/button";
import { motion } from "framer-motion";

const Automation = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="padding relative overflow-hidden rounded-xl py-24">
        {/* Background with Tailwind classes */}
        <div 
          className="absolute inset-0 z-0 bg-hero bg-cover bg-center bg-no-repeat"
          style={{ transform: 'scale(1.1)' }}
          role="presentation"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-[1px]"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center text-center">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl space-y-4"
              >
                <h1 className="text-balance capitalize pb-4 text-xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                  <span className="block">
                    Automated customer support systems that never
                  </span>
                  <span className="text-white underline underline-offset-8">
                    drop the ball
                  </span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-base text-white/90"
                >
                  We help businesses maintain consistent follow-up with leads and clients—automatically.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
    </main>
  );
};

export default Automation; 