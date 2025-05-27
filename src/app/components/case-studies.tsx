"use client";

import React from "react";
import { motion } from "motion/react";
import { BlogPost } from "@/lib/contentful";
import { BlogCard } from "./blog-card";
import { Entry } from "contentful";

interface CaseStudiesProps {
  posts: Entry<BlogPost>[];
}

const CaseStudies = ({ posts }: CaseStudiesProps) => {
  const caseStudies = posts.filter(post => {
    const tags = post.fields.tags as string[] | undefined;
    return tags?.includes('Case Study') || tags?.includes('case study');
  });

  if (caseStudies.length === 0) {
    return null; // Don't show the section if there are no case studies
  }

  return (
    <section 
      className="py-12 sm:py-16"
      aria-labelledby="case-studies-heading"
    >
      <div className="padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 
            id="case-studies-heading" 
            className="mb-3 sm:mb-4 text-3xl sm:text-4xl font-semibold"
          >
            Case Studies
          </h2>
          <p className="text-base sm:text-lg text-black/70 max-w-2xl mx-auto">
            See how we've helped businesses transform their operations
          </p>
        </motion.div>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          role="list"
          aria-label="Case studies list"
        >
          {caseStudies.map((post, index) => (
            <motion.div
              key={post.sys.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="listitem"
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 