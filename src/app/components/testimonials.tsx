"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    description:
      "I enjoyed working with Wambui on automating our proposal process. She is honest, professional, and ensures that she follows through on what she promises. I would definitely recommend working with her.",
    author: "Joyce Kayima",
    role: "Founder's Freedom",
    avatar: "/testimonials/samantha.jpg",
  },
];

const AUTO_ADVANCE = 7000;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [paused, setPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

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
    <section
      className="padding py-12 sm:py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="flex min-h-[300px] flex-col overflow-hidden rounded-xl bg-white shadow-lg sm:min-h-[400px] sm:rounded-2xl md:flex-row">
        {/* Left: Heading */}
        <div className="relative flex flex-1 flex-col items-start justify-center rounded-t-xl bg-black bg-gradient-to-b from-black via-black to-maroon/50 p-6 sm:rounded-t-2xl sm:p-8 md:rounded-l-2xl md:rounded-br-none md:rounded-tr-none md:p-10">
          <div className="w-full">
            <h2
              id="testimonials-heading"
              className="relative z-10 text-center text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl"
            >
              What Our Customers Are Saying
            </h2>
          </div>
        </div>
        {/* Right: Testimonial Carousel */}
        <div
          ref={carouselRef}
          className="relative flex flex-1 flex-col items-center justify-center p-6 text-center sm:p-8 md:p-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          role="region"
          aria-label="Testimonials carousel"
        >
          <div className="absolute left-2 top-1/2 z-10 -translate-y-1/2 sm:left-4">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="rounded-full bg-fog p-1.5 shadow transition hover:bg-fog/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:p-2"
            >
              <ChevronLeft
                className="h-4 w-4 text-black sm:h-5 sm:w-5"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="absolute right-2 top-1/2 z-10 -translate-y-1/2 sm:right-4">
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="rounded-full bg-fog p-1.5 shadow transition hover:bg-fog/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:p-2"
            >
              <ChevronRight
                className="h-4 w-4 text-black sm:h-5 sm:w-5"
                aria-hidden="true"
              />
            </button>
          </div>
          <div
            className="w-full transition-all duration-500 ease-in-out"
            role="group"
            aria-roledescription="slide"
            aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
          >
            <blockquote className="mx-auto mb-4 max-w-md text-sm text-black sm:mb-6 sm:text-base">
              {t.description}
            </blockquote>

            <div className="font-semibold text-black">{t.author}</div>
            <div className="text-xs text-black/50 sm:text-sm">{t.role}</div>
          </div>
          {/* Dots */}
          <div
            className="mt-4 flex justify-center gap-1.5 sm:mt-6 sm:gap-2"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:h-2.5 sm:w-2.5 ${
                  i === index
                    ? "scale-110 bg-[#0a2342]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
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
