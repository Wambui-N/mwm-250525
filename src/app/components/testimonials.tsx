"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Help us improve our productivity",
    description:
      "The automation has saved us countless hours. What used to take days now happens in minutes. The team understood our needs perfectly and delivered a solution that's been running flawlessly for months.",
    author: "Samantha William",
    role: "Senior Designer at Design Studio",
    avatar: "/testimonials/samantha.jpg",
  },
  {
    quote: "Seamless integration and support",
    description:
      "We were able to scale our operations without hiring more staff. The automation just works, and the support is fantastic.",
    author: "Michael Rodriguez",
    role: "CEO at GrowthLabs",
    avatar: "/testimonials/michael.jpg",
  },
  {
    quote: "Immediate ROI for our team",
    description:
      "The ROI was immediate. We're now handling 3x the volume with the same team. Highly recommended!",
    author: "Emma Thompson",
    role: "Founder at ScaleUp Agency",
    avatar: "/testimonials/emma.jpg",
  },
];

const AUTO_ADVANCE = 7000;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      timer.current = setTimeout(() => {
        setIndex((i) => (i + 1) % testimonials.length);
      }, AUTO_ADVANCE);
    }
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [index, paused]);

  const goTo = (i: number) => {
    setIndex(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 10000); // Resume auto after 10s
  };

  const prev = () =>
    goTo((index - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((index + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="padding py-16">
      <div className="flex min-h-[400px] flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:flex-row">
        {/* Left: Heading */}
        <div className="relative flex flex-1 flex-col items-start justify-center rounded-t-2xl bg-black bg-gradient-to-b from-black via-black to-maroon/50 p-10 md:rounded-l-2xl md:rounded-br-none md:rounded-tr-none">
          <div className=" w-full">
            {/* <span className="absolute left-12 top-24 text-white/20">
              <Quote className="w-28 h-28 stroke-[0.75]" />
            </span> */}
            <h2 className="relative z-10 text-3xl font-bold leading-tight text-white md:text-4xl">
              What Our Customers
              <br />
              Are Saying
            </h2>
          </div>
        </div>
        {/* Right: Testimonial Carousel */}
        <div
          className="relative flex flex-1 flex-col items-center justify-center p-10 text-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="rounded-full bg-fog p-2 shadow transition"
            >
              <ChevronLeft className="h-5 w-5 text-black" />
            </button>
          </div>
          <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="rounded-full bg-fog p-2 shadow transition"
            >
              <ChevronRight className="h-5 w-5 text-black" />
            </button>
          </div>
          <div className="w-full transition-all duration-500 ease-in-out">
            <h3 className="mb-2 text-xl font-semibold text-black/90">
              {t.quote}
            </h3>
            <p className="mx-auto mb-6 max-w-md text-black/60">
              {t.description}
            </p>

            <div className="font-semibold text-black">{t.author}</div>
            <div className="text-sm text-black/50">{t.role}</div>
          </div>
          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${i === index ? "scale-110 bg-[#0a2342]" : "bg-gray-300"}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
