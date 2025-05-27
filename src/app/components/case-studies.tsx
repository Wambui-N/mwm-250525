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
    <section className="py-16">
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
          {caseStudies.map((post, index) => (
            <motion.div
              key={post.sys.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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