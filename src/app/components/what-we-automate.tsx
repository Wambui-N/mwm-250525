"use client";

import React from "react";
import { motion } from "motion/react";
import { FileText, Search, Mail, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const WhatWeAutomate = () => {
  const automations = [
    {
      icon: Search,
      title: "Web Scraping for Leads",
      description:
        "Wake up to fresh, qualified leads—automatically gathered overnight.",
      href: "/web-scraping",
      isPopular: false,
    },
    {
      icon: FileText,
      title: "Proposal Generation",
      description:
        "Generate polished proposals instantly with your templates and pricing.",
      href: "/proposal-generation",
      isPopular: true,
    },
    {
      icon: Mail,
      title: "Follow-Up Sequences",
      description:
        "Automated emails keep your leads warm and engaged, hands-free.",
      href: "/follow-up-sequences",
      isPopular: false,
    },
  ];

  return (
    <section className="padding py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-4xl font-semibold">What We Automate</h2>
          <p className="text-lg text-black/70">
            The work that used to take hours now happens automatically:
          </p>
        </motion.div>
        <div className="flex flex-col gap-12 md:flex-row md:items-stretch md:justify-center">
          {automations.map((automation, index) => (
            <motion.div
              key={automation.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`min-w-[280px] max-w-xs flex-shrink-0 py-8 md:max-w-sm rounded-lg p-6 relative ${
                automation.isPopular ? 'bg-black' : 'bg-none text-maroon'
              }`}
            >
              {/* {automation.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-maroon text-white px-3 py-1 rounded-lg text-sm font-medium">
                  Popular
                </div>
              )} */}
              <div className="mb-10 w-fit rounded-full">
                <automation.icon className={`h-10 w-10 stroke-[1.2] ${
                  automation.isPopular ? 'text-white' : 'text-black'
                }`} />
              </div>
              <h3 className={`mb-2 text-lg font-semibold ${
                automation.isPopular ? 'text-white' : 'text-black'
              }`}>
                {automation.title}
              </h3>
              <p className={`mb-4 text-base leading-6 ${
                automation.isPopular ? 'text-white/70' : 'text-black/70'
              }`}>
                {automation.description}
              </p>
              <Link
                href={automation.href}
                className={`group inline-flex items-center text-base font-medium leading-6  ${
                  automation.isPopular ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'
                }`}
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeAutomate;
