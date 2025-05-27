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
          <div className="w-full">
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
