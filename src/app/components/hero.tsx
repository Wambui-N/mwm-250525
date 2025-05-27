"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Clock, Zap, BarChart } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { motion } from "motion/react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section 
      className="padding relative overflow-hidden rounded-xl py-12 sm:py-16 md:py-20 lg:py-24"
      aria-label="Hero section"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full rounded-xl object-cover"
          aria-hidden="true"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" aria-hidden="true"></div>
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-2">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-6"
            >
              <h1 className="text-balance pb-2 sm:pb-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white">
                <span className="block">Stop wasting time on</span>
                <span className="text-white underline underline-offset-8 decoration-2">
                  repetitive tasks
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm sm:text-base text-white/90 max-w-2xl"
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
                  className="flex flex-row items-center justify-center rounded-lg bg-fog text-black hover:bg-fog/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors"
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
              className="space-y-4 sm:space-y-6"
            >
              <div className="rounded-xl bg-gradient-to-r from-white/10 to-white/5 p-4 sm:p-6 backdrop-blur-md">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="rounded-full bg-white/90 p-2" aria-hidden="true">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-maroon" />
                  </div>
                  <div>
                    <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-semibold text-white">
                      Seamless Integration
                    </h3>
                    <p className="text-sm sm:text-base text-white/80">
                      We build invisible automation that plugs into your
                      existing tools. No learning curves, no new systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-white/10 to-white/5 p-4 sm:p-6 backdrop-blur-md">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="rounded-full bg-white/90 p-2" aria-hidden="true">
                    <BarChart className="h-5 w-5 sm:h-6 sm:w-6 text-maroon" />
                  </div>
                  <div>
                    <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-semibold text-white">
                      Smart Workflows
                    </h3>
                    <p className="text-sm sm:text-base text-white/80">
                      Smart workflows that turn your busywork into background
                      processes. Stop chasing deals. Start closing them.
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
