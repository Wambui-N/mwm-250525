"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

// Add type declaration for Tally
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const LeadMagnet = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    offer: "",
    industry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call and email sending
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      className="padding flex flex-col items-center justify-center py-12 sm:py-16"
      aria-labelledby="lead-magnet-heading"
    >
      <h2
        id="lead-magnet-heading"
        className="mb-4 text-center text-3xl font-semibold sm:mb-8 sm:text-4xl"
      >
        Try Our Automation
      </h2>
      <p className="mx-auto mb-3 max-w-2xl text-center text-base text-black/70 sm:mb-8 sm:text-lg">
        This is a lightweight version of the system I build for clients — the
        kind that turns hours of writing into a few clicks.
      </p>
      <p className="mx-auto mb-3 max-w-2xl text-center text-base text-black/70 sm:mb-8 sm:text-lg">
        Fill in a few quick details, hit submit, and watch what happens. In less
        than a minute, you’ll get a simple, personalized proposal in your inbox.
      </p>

      <div className="mx-auto w-full max-w-3xl">
        <iframe
          data-tally-src="https://tally.so/embed/3j2Ng9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="176"
          frameBorder="0"
          style={{ margin: 0 }}
          title="Automation Audit Form"
          aria-label="Automation audit form"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default LeadMagnet;
