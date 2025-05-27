"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { Button, ButtonLink } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="footer"
      className="padding rounded-lg bg-black bg-gradient-to-b from-black via-black to-maroon/50 text-white"
      role="contentinfo"
    >
      <footer className="w-full">
        <div className="mx-auto max-w-7xl">
          {/* Main Footer Content */}
          <div className="grid gap-8 sm:gap-12 px-4 sm:px-6 py-8 sm:py-12 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="space-y-4">
              <Link
                href="/"
                className="flex items-center gap-1 text-lg font-bold text-fog focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                aria-label="Made With Make home"
              >
                <Image
                  src="/logo-light.svg"
                  alt=""
                  width={36}
                  height={36}
                  className="mr-2 inline-block"
                  aria-hidden="true"
                />
                <h3>Made With Make</h3>
              </Link>
              <p className="text-sm sm:text-base text-white/70">
                Automating the boring stuff so you can focus on what matters.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://x.com/madewithmake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/company/made-with-make"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <nav aria-labelledby="quick-links-heading">
              <h4 
                id="quick-links-heading"
                className="mb-4 text-sm font-semibold uppercase tracking-wider"
              >
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/blog?tag=Case%20Study"
                    className="text-sm sm:text-base text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm sm:text-base text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm sm:text-base text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Services */}
            <nav aria-labelledby="services-heading">
              <h4 
                id="services-heading"
                className="mb-4 text-sm font-semibold uppercase tracking-wider"
              >
                Services
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/proposal-automation"
                    className="text-sm sm:text-base text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  >
                    Proposal Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lead-generation"
                    className="text-sm sm:text-base text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  >
                    Lead Generation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/follow-up-sequences"
                    className="text-sm sm:text-base text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  >
                    Follow-up Sequences
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h4 
                id="contact-heading"
                className="mb-4 text-sm font-semibold uppercase tracking-wider"
              >
                Get in Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:wambui@madewithmake.com"
                  className="group flex items-center gap-2 text-sm sm:text-base text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  aria-label="Email us at wambui@madewithmake.com"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  <span>wambui@madewithmake.com</span>
                </a>
                <ButtonLink
                  href="https://cal.com/madewithmake/meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 bg-white px-4 text-sm text-black hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  aria-label="Book a call with us"
                >
                  <span>Book a Call</span>
                  <ArrowRight 
                    className="h-4 w-4 transition-transform group-hover:translate-x-1" 
                    aria-hidden="true"
                  />
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-6">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-xs sm:text-sm text-white/50">
                  © {currentYear} MadeWithMake. All rights reserved.
                </p>
                <nav className="flex gap-4 sm:gap-6" aria-label="Legal links">
                  <Link
                    href="/privacy"
                    className="text-xs sm:text-sm text-white/50 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-xs sm:text-sm text-white/50 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  >
                    Terms of Service
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
