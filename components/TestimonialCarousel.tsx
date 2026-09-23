"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import summitsData from "@/data/summits.json";

export default function TestimonialCarousel() {
  const testimonials = summitsData.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto seal-frame rounded-xl p-8 sm:p-12 border border-[#D89030]/40 shadow-2xl relative">
      {/* Decorative large quotation mark */}
      <div className="absolute top-6 left-6 opacity-10 text-[#D89030] pointer-events-none">
        <Quote className="w-20 h-20" />
      </div>

      <div className="relative z-10 text-center space-y-6">
        <div className="inline-block px-3 py-1 rounded-full bg-[#001030] border border-[#D89030]/30 text-xs font-ceremonial tracking-wider text-[#F0C050] uppercase">
          {current.summit}
        </div>

        <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-[#F8F8F8] italic leading-relaxed max-w-2xl mx-auto min-h-[120px] flex items-center justify-center">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        <div className="pt-4 border-t border-[#D89030]/25 flex flex-col items-center">
          <h4 className="font-display text-lg font-bold text-[#F8D870]">
            {current.author}
          </h4>
          <p className="text-xs text-[#0090D8] font-sans">
            {current.title} • {current.country}
          </p>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={prev}
            className="p-2 rounded-full border border-[#0B2F63] bg-[#001030] text-[#F8F8F8] hover:border-[#D89030] hover:text-[#F0C050] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F0C050]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? "w-8 bg-[#F0C050]"
                    : "w-2 bg-[#0B2F63] hover:bg-[#D89030]/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            className="p-2 rounded-full border border-[#0B2F63] bg-[#001030] text-[#F8F8F8] hover:border-[#D89030] hover:text-[#F0C050] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F0C050]"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
