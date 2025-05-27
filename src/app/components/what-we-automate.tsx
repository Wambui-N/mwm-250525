"use client";

import React from "react";
import { motion } from "motion/react";
import { FileText, Search, Mail, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const WhatWeAutomate = () => {
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
      className="padding py-12 sm:py-16"
      aria-labelledby="automation-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 
            id="automation-heading" 
            className="mb-2 text-3xl sm:text-4xl font-semibold"
          >
            What We Automate
          </h2>
          <p className="text-base sm:text-lg text-black/70">
            The work that used to take hours now happens automatically:
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {automations.map((automation, index) => (
            <motion.div
              key={automation.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-lg p-5 sm:p-6 sm:py-8 ${
                automation.isPopular
                  ? "bg-black bg-gradient-to-b from-black via-black to-maroon/50"
                  : "bg-none text-maroon"
              }`}
            >
              <div className="mb-6 sm:mb-10 w-fit rounded-full" aria-hidden="true">
                <automation.icon
                  className={`h-8 w-8 sm:h-10 sm:w-10 stroke-[1.2] ${
                    automation.isPopular ? "text-white" : "text-black"
                  }`}
                />
              </div>
              <h3
                className={`mb-2 text-lg font-semibold ${
                  automation.isPopular ? "text-white" : "text-black"
                }`}
              >
                {automation.title}
              </h3>
              <p
                className={`mb-4 text-sm sm:text-base leading-6 ${
                  automation.isPopular ? "text-white/70" : "text-black/70"
                }`}
              >
                {automation.description}
              </p>
              <Link
                href={automation.href}
                className={`group mt-auto inline-flex items-center text-sm sm:text-base font-medium leading-6 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm ${
                  automation.isPopular
                    ? "text-white hover:text-white/80 focus:ring-white"
                    : "text-black hover:text-black/80 focus:ring-black"
                }`}
                aria-label={`Learn more about ${automation.title}`}
              >
                Learn more
                <ArrowRight 
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeAutomate;
