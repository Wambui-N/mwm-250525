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
        className="mb-4 sm:mb-8 text-3xl sm:text-4xl font-semibold text-center"
      >
        Try Our Automation
      </h2>
      <p className="mb-6 sm:mb-8 text-base sm:text-lg text-center max-w-2xl mx-auto text-black/70">
        Get a free automation audit and discover how much time you could save. We'll analyze your current workflow and provide a personalized report with actionable recommendations.
      </p>

      <div className="w-full max-w-3xl mx-auto">
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
