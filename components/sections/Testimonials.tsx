"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="bg-panel py-24 border-t border-line">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">
          Client Voices
        </p>
        <h2 className="text-4xl font-display italic text-ivory mb-14">
          What our clients say
        </h2>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <Quote
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 text-gold/20"
            strokeWidth={1.5}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <p className="text-ivory text-lg md:text-xl leading-relaxed text-balance mb-8">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gold/30">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-ivory text-sm font-medium">
                    {current.name}
                  </p>
                  <p className="text-slate text-xs">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-slate hover:text-gold hover:border-gold/40 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-gold" : "bg-line"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-slate hover:text-gold hover:border-gold/40 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}