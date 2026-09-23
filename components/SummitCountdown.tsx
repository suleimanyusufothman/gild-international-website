"use client";

import React, { useState, useEffect } from "react";

import { Calendar, MapPin } from "lucide-react";
import summitsData from "@/data/summits.json";

export default function SummitCountdown() {
  const summit = summitsData.nextSummit;
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 42, hours: 14, minutes: 28, seconds: 12 });

  useEffect(() => {
    const target = new Date(summit.startDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Summit is live
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [summit.startDate]);

  return (
    <div className="seal-frame rounded-lg p-6 sm:p-8 border border-[#D89030]/40 relative overflow-hidden">
      {/* Decorative Laurel Accent in background */}
      <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none text-[#D89030]">
        <svg width="160" height="160" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="45" stroke="#D89030" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001030] border border-[#0090D8]/40 text-[#0090D8] text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#0090D8] animate-pulse" />
            Next Global Assembly
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F8F8]">
            {summit.name}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#F8F8F8]/80 pt-1">
            <span className="flex items-center gap-1.5 text-[#F0C050]">
              <MapPin className="w-4 h-4 text-[#0090D8]" />
              {summit.venue}, {summit.city}
            </span>
            <span className="text-[#0B2F63] hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#D89030]" />
              {summit.dates}
            </span>
          </div>
        </div>

        {/* Real-time countdown boxes */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex flex-col items-center bg-[#001030] border border-[#D89030]/30 rounded px-3 py-2 sm:px-4 sm:py-3 min-w-[62px]">
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#F0C050]">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#F8F8F8]/60 font-sans">
              Days
            </span>
          </div>
          <span className="font-display text-2xl text-[#D89030]">:</span>
          <div className="flex flex-col items-center bg-[#001030] border border-[#D89030]/30 rounded px-3 py-2 sm:px-4 sm:py-3 min-w-[62px]">
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#F0C050]">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#F8F8F8]/60 font-sans">
              Hours
            </span>
          </div>
          <span className="font-display text-2xl text-[#D89030]">:</span>
          <div className="flex flex-col items-center bg-[#001030] border border-[#D89030]/30 rounded px-3 py-2 sm:px-4 sm:py-3 min-w-[62px]">
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#F0C050]">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#F8F8F8]/60 font-sans">
              Mins
            </span>
          </div>
          <span className="font-display text-2xl text-[#D89030]">:</span>
          <div className="flex flex-col items-center bg-[#001030] border border-[#D89030]/30 rounded px-3 py-2 sm:px-4 sm:py-3 min-w-[62px]">
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#F0C050]">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#F8F8F8]/60 font-sans">
              Secs
            </span>
          </div>
        </div>


      </div>
    </div>
  );
}
