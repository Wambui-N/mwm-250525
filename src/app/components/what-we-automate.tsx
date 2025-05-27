"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Search, Mail, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const WhatWeAutomate = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const automations = [
    {
      icon: Search,
      title: "Lead Generation",
      description:
        "Wake up to fresh, qualified leads—automatically gathered overnight.",
      href: "/services/lead-generation",
      isPopular: false,
    },
    {
      icon: FileText,
      title: "Proposal Generation",
      description:
        "Generate polished proposals instantly with your templates and pricing.",
      href: "/services/proposal-generation",
      isPopular: true,
    },
    {
      icon: Mail,
      title: "Follow-Up Sequences",
      description:
        "Automated emails keep your leads warm and engaged, hands-free.",
      href: "/services/follow-up-sequences",
      isPopular: false,
    },
  ];

  return (
    <section 
      className="padding py-12 sm:py-16 md:py-20"
      aria-labelledby="automations-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 
            id="automations-heading"
            className="mb-4 text-2xl font-semibold sm:text-3xl md:text-4xl"
          >
            What We Automate
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-base text-black/70 sm:text-lg">
            We build custom automation that plugs into your existing tools. No
            learning curves, no new systems.
          </p>
        </div>

        <AnimatePresence>
          {isLoaded && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {automations.map((automation, index) => (
                <motion.div
                  key={automation.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col rounded-xl border border-black/10 bg-white p-6 sm:p-8 transition-all hover:border-black/20 hover:shadow-lg"
                >
                  {automation.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-4 rounded-lg bg-black/5 p-3 w-fit">
                    <automation.icon className="h-6 w-6 text-black" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{automation.title}</h3>
                  <p className="mb-6 text-black/70">{automation.description}</p>
                  <Link
                    href={automation.href}
                    className="mt-auto inline-flex items-center text-sm font-medium text-black hover:text-black/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhatWeAutomate;
