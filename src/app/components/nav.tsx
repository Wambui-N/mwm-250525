"use client";

import { Button, ButtonLink } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = window.innerHeight * 0.06;

      if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <Link
      href={href}
      className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm"
      aria-label={`Navigate to ${children}`}
    >
      <span className="text-base text-black">{children}</span>
    </Link>
  );

  const services = [
    { name: "Proposal Generation", href: "/services/proposal-generation" },
    { name: "Follow-up Sequences", href: "/services/follow-up-sequences" },
    { name: "Lead Generation", href: "/services/lead-generation" },
  ];

  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Blog", href: "/blog" },
    ],
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-40 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-full bg-fog py-3">
          <div className="padding rounded-lg">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-1 text-lg font-bold text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm"
                aria-label="Home"
              >
                <Image
                  src="/logo.svg"
                  alt="Made With Make logo"
                  width={36}
                  height={36}
                  className="mr-2 inline-block"
                  priority
                />
                <h3>Made With Make</h3>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden items-center space-x-6 md:flex">
                <div className="relative" ref={servicesRef}>
                  <button
                    className="flex items-center gap-1 text-base text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isServicesOpen && (
                    <>
                      <div
                        className="absolute left-0 top-full h-2 w-full"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      />
                      <div
                        className="absolute left-0 top-[calc(100%+0.5rem)] w-48 rounded-lg border border-black/10 bg-white py-2 shadow-lg"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                        role="menu"
                        aria-label="Services menu"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2 text-base text-black hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm"
                            role="menuitem"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <NavLink href="/blog">Blog</NavLink>
                <div className="flex items-center gap-2">
                  <button
                    onClick={scrollToFooter}
                    className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm"
                    aria-label="Scroll to contact section"
                  >
                    <span className="text-base text-black">Contact</span>
                  </button>
                  <ButtonLink
                    href="https://cal.com/madewithmake/meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 bg-black ml-3 px-4 text-sm text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-sm"
                    aria-label="Book a call"
                  >
                    <span>Book a Call</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                ref={menuButtonRef}
                className="rounded-lg p-1.5 text-black transition-colors hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 md:hidden"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] md:hidden"
              onClick={toggleMenu}
              aria-hidden="true"
            />
            
            {/* Slide-in Menu */}
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white z-[101] md:hidden"
              role="menu"
              aria-label="Mobile menu"
            >
              <div className="flex h-full flex-col">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <button
                    onClick={toggleMenu}
                    className="rounded-lg p-1.5 text-black transition-colors hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                {/* Menu Content */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="flex flex-col space-y-6">
                    {/* Services Section */}
                    <div className="space-y-2">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex w-full items-center justify-between text-lg font-medium text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm"
                        aria-expanded={isServicesOpen}
                        aria-controls="mobile-services-menu"
                      >
                        Services
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            id="mobile-services-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                            role="menu"
                            aria-label="Mobile services menu"
                          >
                            <div className="mt-2 space-y-1 pl-4">
                              {services.map((service) => (
                                <motion.div
                                  key={service.href}
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  exit={{ x: -20, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Link
                                    href={service.href}
                                    className="block py-2 text-base text-black/70 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm"
                                    role="menuitem"
                                    onClick={() => {
                                      setIsServicesOpen(false);
                                      setIsMenuOpen(false);
                                    }}
                                  >
                                    {service.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Other Links */}
                    <Link
                      href="/blog"
                      className="text-lg font-medium text-black hover:text-black/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Blog
                    </Link>

                    <button
                      onClick={() => {
                        scrollToFooter();
                        setIsMenuOpen(false);
                      }}
                      className="text-lg font-medium text-black hover:text-black/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm text-left"
                    >
                      Contact
                    </button>

                    {/* Book Call Button */}
                    <ButtonLink
                      href="https://cal.com/madewithmake/meeting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-black text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>Book a Call</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
