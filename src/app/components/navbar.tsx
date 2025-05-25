"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "/#what-we-automate" },
  { name: "Projects", href: "/#case-studies" },
  { name: "About", href: "/#why-work-with-me" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-white/60 border-b border-white/20 shadow-sm"
      style={{ WebkitBackdropFilter: "blur(12px)" }}
    >
      <div className="padding flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight text-black">
          MWM
        </Link>
        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2 }}
              className="relative"
            >
              <Link
                href={link.href}
                className="px-2 py-1 text-black font-medium transition-colors hover:text-yellow-600"
              >
                {link.name}
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-yellow-400 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                />
              </Link>
            </motion.div>
          ))}
          {/* CTA Button */}
          <motion.a
            href="/book-call"
            whileHover={{ scale: 1.05, boxShadow: "0 0 0 4px #fde68a55" }}
            className="ml-4 rounded-lg bg-black px-5 py-2 text-white font-semibold shadow transition-all hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Get in touch
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 