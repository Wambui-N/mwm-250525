"use client";

import React from "react";
import {
  ArrowRight,
  Clock,
  Zap,
  CheckCircle,
  Scale,
  BarChart,
  Check,
  FileText,
  Calendar,
  MessageSquare,
  Users,
  Star,
} from "lucide-react";
import Link from "next/link";
import { Button, ButtonLink } from "@/components/ui/button";
import { motion } from "motion/react";

const ProposalGeneration = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="padding relative overflow-hidden rounded-xl py-24">
        {/* Background with Tailwind classes */}
        <div 
          className="absolute inset-0 z-0 bg-hero bg-cover bg-center bg-no-repeat"
          style={{ transform: 'scale(1.1)' }}
          role="presentation"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-[1px]"
          aria-hidden="true"
        />

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
                    Automated proposal generation that
                  </span>
                  <span className="text-white underline underline-offset-8">
                    closes more deals
                  </span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-base text-white/90"
                >
                  We help businesses create professional, personalized proposals in minutes—not hours.
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
              Here is what we've noticed
            </h2>
            <p className="text-lg text-black/70">
              Most successful businesses hit the same bottleneck: they're
              spending too much time on proposal creation when they could be
              focusing on what they do best. Meanwhile, opportunities slip away
              because faster responses often win the deal.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="padding py-12">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              How We Solve This For You
            </h2>
            <p className="mb-12 text-lg text-black/70">
              We build you a proposal system that handles the heavy lifting
              while you stay focused on your clients.
            </p>

            <div className="space-y-8">
              <h2 className="text-lg font-semibold">
                The process is straightforward:
              </h2>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  1
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Simple Input</h3>
                  <p className="text-black/70">
                    You answer a few simple questions about your client and
                    project (or simply upload your Terms of Reference file)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  2
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Instant Generation</h3>
                  <p className="text-black/70">
                    Your branded proposal appears instantly—professionally
                    formatted and ready to send
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  3
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Quick Review & Send</h3>
                  <p className="text-black/70">
                    You review and send, or we can send it directly to your
                    client on your behalf
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
              What This Means For Your Business
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl p-6">
                <Clock className="mb-4 h-8 w-8 text-black" />
                <h3 className="mb-2 text-xl font-semibold">Time Savings</h3>
                <p className="text-black/70">
                  Instead of spending 2-3 hours per proposal, you'll spend 5
                  minutes.
                </p>
              </div>

              <div className="rounded-xl p-6">
                <Zap className="mb-4 h-8 w-8 text-black" />
                <h3 className="mb-2 text-xl font-semibold">
                  Faster Response Times
                </h3>
                <p className="text-black/70">
                  You can respond to opportunities the same day they come in.
                </p>
              </div>

              <div className="rounded-xl p-6">
                <CheckCircle className="mb-4 h-8 w-8 text-black" />
                <h3 className="mb-2 text-xl font-semibold">
                  Professional Consistency
                </h3>
                <p className="text-black/70">
                  Every proposal maintains your professional standards and brand
                  voice, whether you're rushing to meet a deadline or not.
                </p>
              </div>

              <div className="rounded-xl p-6">
                <Scale className="mb-4 h-8 w-8 text-black" />
                <h3 className="mb-2 text-xl font-semibold">Scalability</h3>
                <p className="text-black/70">
                  You can handle significantly more opportunities without adding
                  staff or working longer hours.
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
              This Works Well If You
            </h2>
            <ul className="space-y-4 text-lg text-black/70">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-black" />
                Currently spend significant time on proposal creation
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-black" />
                Want to respond faster to new opportunities
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-black" />
                Use similar proposal structures for most clients
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-black" />
                Need completely custom proposals for different situations
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-black" />
                Have team members who could be doing higher-value work instead
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="padding py-12">
        <div className="container flex flex-col items-center mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              Getting Started
            </h2>
            <p className="mb-8 text-lg text-black/70">
              If this sounds like it could help your business, we'd be happy to have a brief conversation about your specific situation and show you how this would work for your proposals.
            </p>
            <p className="mb-8 text-black/70">
              No obligation—just a straightforward discussion about whether this makes sense for you.
            </p>
            <p className="mb-12 text-black/70">
              We handle all the technical setup. You just use the results.
            </p>
            
          </div>
            <ButtonLink
              href="https://cal.com/madewithmake/meeting?service=Proposal%20Generation"
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

export default ProposalGeneration;
