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
  Mail,
  Calendar,
  MessageSquare,
  Users,
  Star,
} from "lucide-react";
import Link from "next/link";
import { Button, ButtonLink } from "@/components/ui/button";
import { motion } from "motion/react";

const FollowUpSequences = () => {
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
                <h1 className="text-balance capitalize pb-4 text-xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                  <span className="block">
                    Automated customer support systems that never
                  </span>
                  <span className="text-white underline underline-offset-8">
                    drop the ball
                  </span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-base text-white/90"
                >
                  We help businesses maintain consistent follow-up with leads and clients—automatically.
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
              What We Keep Seeing
            </h2>
            <p className="text-lg text-black/70">
              Great businesses often lose deals not because of their service quality, but because follow-up gets inconsistent when things get busy. Leads go cold, clients feel forgotten, and opportunities slip away during the busiest periods when you need them most.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="padding py-12">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              How We Approach This
            </h2>
            <p className="mb-12 text-lg text-black/70">
              We work with your existing CRM system to create intelligent follow-up sequences that maintain consistent communication without adding to your workload.
            </p>

            <div className="space-y-8">
              <h2 className="text-lg font-semibold">
                Here's how it typically works:
              </h2>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  1
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Your CRM becomes smarter</h3>
                  <p className="text-black/70">
                    It already tracks where each lead or client stands, now it acts on that information
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  2
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Emails go out at the right time</h3>
                  <p className="text-black/70">
                    Welcome messages, meeting reminders, progress updates, and check-ins happen automatically based on where someone is in your process
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  3
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Everything stays personal</h3>
                  <p className="text-black/70">
                    We write the emails in your voice and customize them for your business
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
              What This Handles For You
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl p-6">
                <Mail className="mb-4 h-8 w-8 text-black" />
                <h3 className="mb-2 text-xl font-semibold">Welcome Sequences</h3>
                <p className="text-black/70">
                  Making great first impressions while you're focused elsewhere
                </p>
              </div>

              <div className="rounded-xl p-6">
                <Calendar className="mb-4 h-8 w-8 text-black" />
                <h3 className="mb-2 text-xl font-semibold">Meeting Reminders</h3>
                <p className="text-black/70">
                  Reducing no-shows and keeping your calendar productive
                </p>
              </div>

              <div className="rounded-xl p-6">
                <MessageSquare className="mb-4 h-8 w-8 text-black" />
                <h3 className="mb-2 text-xl font-semibold">Follow-ups</h3>
                <p className="text-black/70">
                  Reaching out to quiet prospects who might just need the right timing or message
                </p>
              </div>

              <div className="rounded-xl p-6">
                <Users className="mb-4 h-8 w-8 text-black" />
                <h3 className="mb-2 text-xl font-semibold">Client Updates</h3>
                <p className="text-black/70">
                  Keeping people informed during projects without you having to remember to update everyone
                </p>
              </div>

              <div className="rounded-xl p-6 md:col-span-2">
                <Star className="mb-4 h-8 w-8 text-black" />
                <h3 className="mb-2 text-xl font-semibold">Post-project Check-ins</h3>
                <p className="text-black/70">
                  Naturally leading to reviews, referrals, or additional work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Changes Section */}
      <section className="padding py-12">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              What Changes
            </h2>
            <ul className="space-y-4 text-lg text-black/70">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-black" />
                Your Follow-Up Becomes Reliable: No more wondering if you forgot to contact someone or worrying about leads going cold during busy periods.
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-black" />
                Sales Cycles Move Faster: Consistent, well-timed communication tends to move decisions along more smoothly.
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-black" />
                Client Experience Improves: People feel more informed and valued when communication is consistent and timely.
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-black" />
                Your Mental Load Decreases: One less thing to track and remember, especially during your busiest periods.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section className="padding py-12">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              This Works Well With Most Systems
            </h2>
            <p className="text-lg text-black/70">
              We typically work with ClickUp, HubSpot, Pipedrive, and Zoho, but can adapt to most CRM systems you're already using. The goal is to enhance what you have, not replace it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="padding py-12">
        <div className="container flex flex-col items-center mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              Next Steps
            </h2>
            <p className="mb-8 text-lg text-black/70">
              If inconsistent follow-up has been a challenge for your business, we'd be glad to discuss how this might work with your current setup.
            </p>
            <p className="mb-8 text-black/70">
              A quick conversation can help determine if this approach makes sense for your situation and what it might look like in practice.
            </p>
            <p className="mb-12 text-black/70">
              We handle the technical setup and email writing. You get the results.
            </p>
          </div>
          <ButtonLink
            href="https://cal.com/madewithmake/meeting?service=Follow-up%20Sequences"
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

export default FollowUpSequences;
