"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="padding rounded-lg bg-black bg-gradient-to-b from-black via-black to-maroon/50 text-white">
      <footer className="w-full">
        <div className="mx-auto max-w-7xl">
          {/* Main Footer Content */}
          <div className="grid gap-12 px-6 py-12 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">MadeWithMake</h3>
              <p className="text-white/70">
                Automating the boring stuff so you can focus on what matters.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/proposal-automation"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Proposal Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lead-generation"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Lead Generation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/onboarding"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Client Onboarding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/workflows"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Custom Workflows
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Get in Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:hello@madewithmake.com"
                  className="group flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span>hello@madewithmake.com</span>
                </a>
                <Link
                  href="/book-call"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-white/90"
                >
                  Book a Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-6">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-sm text-white/50">
                  © {currentYear} MadeWithMake. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <Link
                    href="/privacy"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
