"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Zap,
  CheckCircle,
  Scale,
  BarChart,
  Check,
} from "lucide-react";
import Link from "next/link";
import { Button, ButtonLink } from "@/components/ui/button";
import { motion } from "framer-motion";

const Automation = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
      
      // Handle video loading
      const handleVideoLoad = () => {
        setIsVideoLoaded(true);
      };

      videoRef.current.addEventListener('loadeddata', handleVideoLoad);
      
      // Cleanup
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', handleVideoLoad);
        }
      };
    }
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="padding relative overflow-hidden rounded-xl py-24">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full rounded-xl object-cover"
          >
            <source src="/hero.webm" type="video/webm" />
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div 
            className={`absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        {/* Rest of the component remains the same */}
      </section>
    </main>
  );
};

export default Automation; 