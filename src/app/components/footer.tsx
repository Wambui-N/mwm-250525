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
    >
      <footer className="w-full">
        <div className="mx-auto max-w-7xl">
          {/* Main Footer Content */}
          <div className="grid gap-12 px-6 py-12 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="space-y-4">
              {/* <h3 className="text-2xl font-semibold">MadeWithMake</h3> */}
              <Link
              href="/"
              className="flex items-center gap-1 text-lg font-bold text-fog"
            >
              <Image
                src="/logo-light.svg"
                alt="logo"
                width={36}
                height={36}
                className="mr-2 inline-block"
              />
              <h3>Made With Make</h3>
            </Link>
              <p className="text-white/70">
                Automating the boring stuff so you can focus on what matters.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://x.com/madewithmake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/made-with-make"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
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
                  
                </li>
                <li>
                  <Link
                    href="/blog?tag=Case%20Study"
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
                    href="/follow-up-sequences"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Follow-up Sequences
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
                  href="mailto:wambui@madewithmake.com"
                  className="group flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span>wambui@madewithmake.com</span>
                </a>
                <ButtonLink
                  href="https://cal.com/madewithmake/meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 bg-white px-4 text-sm text-black"
                >
                  <span>Book a Call</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </ButtonLink>
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
