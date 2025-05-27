"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Clock,
  Zap,
  CheckCircle,
  Scale,
  BarChart,
  Check,
  Calendar,
  Target,
  MessageSquare,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button, ButtonLink } from "@/components/ui/button";
import { motion } from "motion/react";

const LeadGeneration = () => {
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

        <div className="relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center text-center">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl space-y-4"
              >
                <h1 className="text-balance pb-4 text-xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                  <span className="block">Lead Generation That Actually</span>
                  <span className="text-white underline underline-offset-8">
                    Brings You Qualified Conversations
                  </span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-base text-white/90"
                >
                  We handle the entire outreach process so qualified prospects
                  reach out to you, ready to talk business.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="padding py-12">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-3xl font-bold capitalize md:text-4xl">
              The Reality Most Business Owners Face
            </h2>
            <p className="text-lg text-black/70">
              Finding new clients often means choosing between two difficult
              options: spend your valuable time on outreach and research, or
              hire someone internally who may not understand your business well
              enough to represent it properly. Meanwhile, your expertise is
              needed elsewhere to serve existing clients and grow the business.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="padding py-12">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              Our Approach
            </h2>
            <p className="mb-12 text-lg text-black/70">
              We become an extension of your business development team, handling
              the research, outreach, and initial qualification so you only talk
              to prospects who are genuinely interested and fit your criteria.
            </p>

            <div className="space-y-8">
              <h2 className="text-lg font-semibold">Here's the process:</h2>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  1
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">We learn your business</h3>
                  <p className="text-black/70">
                    We identify exactly who your ideal clients are
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  2
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">
                    We craft personalized outreach
                  </h3>
                  <p className="text-black/70">
                    That sounds authentically like your business
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  3
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">
                    We manage the campaigns
                  </h3>
                  <p className="text-black/70">
                    And follow-ups while you focus on your current work
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  4
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">
                    We qualify interested responses
                  </h3>
                  <p className="text-black/70">
                    Based on your specific requirements
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  5
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">
                    We introduce you to ready prospects
                  </h3>
                  <p className="text-black/70">
                    Who want to discuss working together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="padding py-12">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-12 text-3xl font-bold md:text-4xl">
              What This Means Day-to-Day
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl p-6">
                <Calendar className="mb-4 h-8 w-8 text-black" />
                <h3 className="mb-2 text-xl font-semibold">
                  Your Calendar Fills Naturally
                </h3>
                <p className="text-black/70">
                  Instead of wondering where your next client will come from,
                  you have a steady flow of discovery calls with qualified
                  prospects.
                </p>
              </div>

              <div className="rounded-xl p-6">
                <Target className="mb-4 h-8 w-8 text-black" />
                <h3 className="mb-2 text-xl font-semibold">
                  You Stay in Your Zone
                </h3>
                <p className="text-black/70">
                  Your time remains focused on serving clients and running your
                  business, not chasing leads or managing outreach campaigns.
                </p>
              </div>

              <div className="rounded-xl p-6">
                <MessageSquare className="mb-4 h-8 w-8 text-black" />
                <h3 className="mb-2 text-xl font-semibold">
                  Better Conversations
                </h3>
                <p className="text-black/70">
                  When prospects reach out, they already understand what you do
                  and have expressed genuine interest, making your sales
                  conversations more productive.
                </p>
              </div>

              <div className="rounded-xl p-6">
                <TrendingUp className="mb-4 h-8 w-8 text-black" />
                <h3 className="mb-2 text-xl font-semibold">
                  Predictable Growth
                </h3>
                <p className="text-black/70">
                  You can plan and scale your business around a consistent flow
                  of qualified opportunities rather than hoping referrals will
                  continue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="padding py-12">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              This Works Well For Businesses That
            </h2>
            <ul className="space-y-4 text-lg text-black/70">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-black" />
                Have a clear understanding of their ideal client
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-black" />
                Want growth without adding internal sales staff
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-black" />
                Prefer having prospects come to them rather than cold calling
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-black" />
                Value their time and want it focused on delivery and strategy
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-black" />
                Are ready to have more discovery conversations each month
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="padding py-12">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              How We Work Together
            </h2>
            <p className="text-lg text-black/70">
              This is a partnership where we handle the technical execution
              while you focus on what you do best. We provide monthly updates on
              campaign performance and qualified leads delivered, with full
              transparency on what's working and what we're adjusting.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="padding py-12">
        <div className="container mx-auto flex flex-col items-center">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              Getting Started
            </h2>
            <p className="mb-8 text-lg text-black/70">
              If consistent lead flow has been a challenge and you'd prefer to
              focus your time on serving clients rather than finding them, let's
              discuss whether this approach fits your situation.
            </p>
            <p className="mb-8 text-black/70">
              We can walk through how this would work specifically for your
              business and what kind of results you might expect.
            </p>
            <p className="mb-12 text-black/70">
              We handle the strategy, execution, and technology. You handle the
              conversations that matter.
            </p>
          </div>
          <ButtonLink
            href="https://cal.com/madewithmake/meeting?service=Lead%20Generation"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="flex flex-row items-center rounded-lg bg-black text-fog"
          >
            Schedule Your Call
          </ButtonLink>
        </div>
      </section>
    </main>
  );
};

export default LeadGeneration;
