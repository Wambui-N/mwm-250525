"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = window.innerHeight * 0.06; // 2vh threshold

      if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY) {
        // if scroll down hide the navbar
        setIsVisible(false);
      } else {
        // if scroll up show the navbar
        setIsVisible(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <Link
      href={href}
      className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
    >
      <span className="text-black">{children}</span>
    </Link>
  );

  return (
    <nav
      className={`sticky top-0 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full bg-fog py-3">
        <div className="padding rounded-lg">
          <div className="flex items-center justify-between">
            {/* <Link href="/">
                <Image src="/logo.png" alt="logo" width={100} height={100} />
            </Link> */}
            <Link
              href="/"
              className="flex items-center gap-1 text-lg font-bold text-black"
            >
              <Image
                src="/logo.svg"
                alt="logo"
                width={36}
                height={36}
                className="mr-2 inline-block"
              />
              <h3>Made With Make</h3>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-6 md:flex">
              <NavLink href="/">Services</NavLink>
              <NavLink href="/">Projects</NavLink>
              <NavLink href="/">About</NavLink>
              <NavLink href="/">Contact</NavLink>
              <Button className="h-8 bg-black px-4 text-sm text-white hover:bg-black/90">
                Get in touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="rounded-lg p-1.5 text-black transition-colors hover:bg-black/5 md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="mt-2 pb-2 md:hidden">
              <div className="flex flex-col space-y-3">
                <NavLink href="/">Services</NavLink>
                <NavLink href="/">Projects</NavLink>
                <NavLink href="/">About</NavLink>
                <NavLink href="/">Contact</NavLink>
                <Button className="h-8 w-full bg-black text-sm text-white hover:bg-black/90">
                  Get in touch
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
