"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <section className="padding py-16">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-4xl font-semibold">Try Our Automation</h2>
          <p className="text-black/70">
            Experience the power of automation firsthand. We'll generate a custom proposal for your business in seconds.
          </p>
        </motion.div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg max-w-md mx-auto px-4">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  {step === 1 && (
                    <>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-black/10 border border-black/20 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black/30"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-black/10 border border-black/20 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black/30"
                          placeholder="john@example.com"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-black text-white font-medium text-lg hover:bg-black/90 transition-colors shadow focus:ring-2 focus:ring-black/30"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div>
                        <label htmlFor="offer" className="block text-sm font-medium mb-2">
                          What's your offer/service?
                        </label>
                        <textarea
                          id="offer"
                          name="offer"
                          value={formData.offer}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg bg-black/10 border border-black/20 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black/30"
                          placeholder="e.g., Digital Marketing Services for Small Businesses"
                        />
                      </div>
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium mb-2">
                          Who's your target client/industry?
                        </label>
                        <textarea
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg bg-black/10 border border-black/20 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black/30"
                          placeholder="e.g., Small businesses in the healthcare industry"
                        />
                      </div>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="flex-1 px-6 py-3 rounded-lg border border-black/20 text-black font-medium hover:bg-black/5 transition-colors focus:ring-2 focus:ring-black/30"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-black text-white font-medium text-lg hover:bg-black/90 transition-colors shadow focus:ring-2 focus:ring-black/30 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Generating...
                            </>
                          ) : (
                            <>
                              Test the Automation
                              <ArrowRight className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 border border-green-200 bg-green-50 rounded-xl"
                aria-live="polite"
              >
                <div className="mb-6 flex justify-center">
                  <CheckCircle2 className="h-20 w-20 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Your AI-generated draft is on its way</h3>
                <p className="text-black/70 mb-8">
                  We've sent your custom proposal to {formData.email}. It should arrive in a few seconds.
                </p>
                <div className="bg-black/5 rounded-xl p-8 mb-8">
                  <p className="text-lg mb-6">
                    If you're thinking, "this is exactly what I need, but fully integrated into my business" — that's what I do.
                  </p>
                  <p className="text-black/70 mb-8">
                    I help B2B founders automate repetitive, time-draining tasks like this — so you can scale without doing more.
                  </p>
                  <a
                    href="/book-call"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-black text-white font-medium text-lg hover:bg-black/90 transition-colors shadow focus:ring-2 focus:ring-black/30"
                  >
                    Book a Discovery Call
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet; 