"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const HeadlineSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="relative overflow-hidden rounded-xl py-16 padding">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full rounded-xl object-cover"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <h3 className="mb-6 px-16 text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl md:text-3xl">
          <span className="block">
            Win Back Hours Every Week by Automating Proposal Generation
          </span>
        </h3>
        <p className="mb-8 max-w-2xl text-lg text-white/90">
          Stop rewriting the same proposals from scratch. We'll build you a
          system that creates ready-to-send documents in minutes — so you can
          focus on closing, not formatting.
        </p>
        <Button size="lg" className="rounded-lg bg-fog text-black">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HeadlineSection;
