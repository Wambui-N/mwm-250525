"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "From Manual to Automated",
      description: "How we helped a marketing agency automate their client onboarding process",
      metrics: "87% time saved",
      image: "/case-studies/marketing.jpg",
      href: "/case-studies/marketing-agency",
    },
    {
      title: "Scaling Operations",
      description: "A SaaS company's journey to automated customer support",
      metrics: "3x efficiency increase",
      image: "/case-studies/saas.jpg",
      href: "/case-studies/saas-company",
    },
  ];

  return (
    <section className=" py-16">
      <div className="padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-semibold">Case Studies</h2>
          <p className="text-black/70">
            See how we've helped businesses transform their operations
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 text-sm font-medium text-black/60">
                  {study.metrics}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{study.title}</h3>
                <p className="mb-4 text-base leading-6 text-black/70">
                  {study.description}
                </p>
                <Link
                  href={study.href}
                  className="group inline-flex items-center text-base font-medium text-black hover:text-black/80"
                >
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 