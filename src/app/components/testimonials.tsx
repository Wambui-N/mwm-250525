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
      <div className="flex min-h-[300px] sm:min-h-[400px] flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg md:flex-row">
        {/* Left: Heading */}
        <div className="relative flex flex-1 flex-col items-start justify-center rounded-t-xl sm:rounded-t-2xl bg-black bg-gradient-to-b from-black via-black to-maroon/50 p-6 sm:p-8 md:p-10 md:rounded-l-2xl md:rounded-br-none md:rounded-tr-none">
          <div className="w-full">
            <h2 
              id="testimonials-heading"
              className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white"
            >
              What Our Customers
              <br />
              Are Saying
            </h2>
          </div>
        </div>
        {/* Right: Testimonial Carousel */}
        <div
          ref={carouselRef}
          className="relative flex flex-1 flex-col items-center justify-center p-6 sm:p-8 md:p-10 text-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          role="region"
          aria-label="Testimonials carousel"
        >
          <div className="absolute left-2 sm:left-4 top-1/2 z-10 -translate-y-1/2">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="rounded-full bg-fog p-1.5 sm:p-2 shadow transition hover:bg-fog/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-black" aria-hidden="true" />
            </button>
          </div>
          <div className="absolute right-2 sm:right-4 top-1/2 z-10 -translate-y-1/2">
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="rounded-full bg-fog p-1.5 sm:p-2 shadow transition hover:bg-fog/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-black" aria-hidden="true" />
            </button>
          </div>
          <div 
            className="w-full transition-all duration-500 ease-in-out"
            role="group"
            aria-roledescription="slide"
            aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
          >
            <blockquote className="mx-auto mb-4 sm:mb-6 max-w-md text-sm sm:text-base text-black/60">
              {t.description}
            </blockquote>

            <div className="font-semibold text-black">{t.author}</div>
            <div className="text-xs sm:text-sm text-black/50">{t.role}</div>
          </div>
          {/* Dots */}
          <div 
            className="mt-4 sm:mt-6 flex justify-center gap-1.5 sm:gap-2"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                  i === index ? "scale-110 bg-[#0a2342]" : "bg-gray-300 hover:bg-gray-400"
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
