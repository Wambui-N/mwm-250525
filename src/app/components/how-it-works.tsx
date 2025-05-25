"use client";

import React from "react";
import { Phone, Layout, Code, Rocket, ArrowRight } from "lucide-react";

const steps = [
  { icon: Phone, title: "Discovery Call", description: "We learn about your business and goals." },
  { icon: Layout, title: "Workflow Design", description: "We map out your automation process." },
  { icon: Code, title: "Build & Test", description: "We build and test your automation." },
  { icon: Rocket, title: "Launch", description: "You go live with full support." },
];

const HowItWorks = () => {
  return (
    <section className=" py-16 w-full">
      <div className="padding mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold mb-2 text-center text-black">Our Process</h1>
        <p className="text-black/70 text-lg mb-16 text-center">A simple, proven process to automate your business.</p>
        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-12 md:gap-0 relative z-10">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div
                className="flex-1 min-w-[180px] max-w-[260px] mx-auto md:mx-0 py-6 px-4 flex flex-col items-center md:items-start text-center md:text-left relative"
              >
                <div className="mb-4 flex flex-row items-center gap-2 justify-center md:justify-start">
                  <step.icon className="h-7 w-7 stroke-[1.5] text-black" />
                  <h3 className="text-lg md:text-xl font-bold text-black mb-0">{step.title}</h3>
                </div>
                <p className="mb-0 text-base leading-6 text-black/80 font-normal">{step.description}</p>
              </div>
              {/* Arrow divider except after last step */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center self-center h-full">
                  <svg className="mx-4" width="64" height="28" viewBox="0 0 64 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="4" y1="14" x2="60" y2="14" stroke="#183b56" strokeWidth="2" />
                    <polygon points="60,10 64,14 60,18" fill="#183b56" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 