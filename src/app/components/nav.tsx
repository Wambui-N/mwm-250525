"use client";

import { Button, ButtonLink } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

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

  // Close dropdown when clicking outside
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
      className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
    >
      <span className="text-base  text-black">{children}</span>
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
              <div className="relative" ref={servicesRef}>
                <button
                  className="flex items-center gap-1 text-base text-black"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <>
                    {/* Invisible bridge to maintain hover state */}
                    <div
                      className="absolute left-0 top-full h-2 w-full"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    />
                    <div
                      className="absolute left-0 top-[calc(100%+0.5rem)] w-48 rounded-lg border border-black/10 bg-white py-2 shadow-lg"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2 text-base text-black hover:bg-black/5"
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
                  className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  <span className="text-base text-black">Contact</span>
                </button>
                <ButtonLink
                  href="https://cal.com/madewithmake/meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 bg-black ml-3 px-4 text-sm text-white hover:bg-black/90"
                >
                  <span>Book a Call</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </ButtonLink>
              </div>
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
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between text-black"
                  >
                    Services
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isServicesOpen && (
                    <div className="ml-4 flex flex-col space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="text-sm text-black/70 hover:text-black"
                          onClick={() => {
                            setIsServicesOpen(false);
                            setIsMenuOpen(false);
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <NavLink href="/blog">Blog</NavLink>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      scrollToFooter();
                      setIsMenuOpen(false);
                    }}
                    className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    <span className="text-base text-black">Contact</span>
                  </button>
                  <ButtonLink
                    href="https://cal.com/madewithmake/meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 w-full bg-black text-sm text-white hover:bg-black/90"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Book a Call</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </ButtonLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
