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
              <a
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7335370475994255361"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-[200px] items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black shadow transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Subscribe to our LinkedIn Newsletter"
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-5 w-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg> */}
                Subscribe to our Newsletter
              </a>
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
                {/* <li>
                  <Link
                    href="/about"
                    className="text-sm sm:text-base text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  >
                    About
                  </Link>
                </li> */}
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
                    href="/services/proposal-generation"
                    className="text-sm sm:text-base text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  >
                    Proposal Generation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/lead-generation"
                    className="text-sm sm:text-base text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  >
                    Lead Generation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/follow-up-sequences"
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
