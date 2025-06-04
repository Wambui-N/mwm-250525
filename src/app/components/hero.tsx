"use client";

import React from "react";
import { ArrowRight, Clock, Zap, BarChart } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="padding relative overflow-hidden rounded-xl py-12 sm:py-16 md:py-20 lg:py-24"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          className="rounded-xl object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-6"
            >
              <h1 className="text-balance pb-2 text-4xl font-semibold leading-tight tracking-tight text-white sm:pb-4 md:text-5xl lg:text-6xl">
                <span className="block">Stop wasting time on</span>
                <span className="text-white underline decoration-2 underline-offset-8">
                  repetitive tasks
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base md:leading-normal"
              >
                Most B2B teams waste{" "}
                <span className="font-bold text-white">40+ hours monthly</span>{" "}
                on the same repetitive tasks: writing proposals, finding leads,
                sending follow-ups. What if AI could handle all of that for you?
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              >
                <ButtonLink
                  href="https://cal.com/madewithmake/meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="flex flex-row items-center justify-center rounded-lg bg-fog text-black transition-colors hover:bg-fog/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  aria-label="Book a free consultation to save 40+ hours"
                >
                  Save 40+ hours — Book a free consultation
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              </motion.div>
            </motion.div>

            {/* Right Column - Feature Points */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 sm:space-y-6"
            >
              <div className="rounded-xl bg-gradient-to-r from-white/10 to-white/5 p-4 backdrop-blur-md sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div
                    className="rounded-full bg-white/90 p-2"
                    aria-hidden="true"
                  >
                    <Clock className="h-5 w-5 text-maroon sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-white sm:mb-2 sm:text-lg">
                      Seamless Integration
                    </h3>
                    <p className="text-sm text-white/80 sm:text-base">
                      We build invisible AI-powered business automations that
                      plugs into your existing tools. No learning curves, no new
                      systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-white/10 to-white/5 p-4 backdrop-blur-md sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div
                    className="rounded-full bg-white/90 p-2"
                    aria-hidden="true"
                  >
                    <BarChart className="h-5 w-5 text-maroon sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-white sm:mb-2 sm:text-lg">
                      Smart Workflows
                    </h3>
                    <p className="text-sm text-white/80 sm:text-base">
                      Custom workflow automation solutions that turn your
                      busywork into background processes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
