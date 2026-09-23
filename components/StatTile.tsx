import React from "react";

interface StatTileProps {
  number: string;
  label: string;
  subtext?: string;
  hasLaurel?: boolean;
  light?: boolean;
}

export default function StatTile({
  number,
  label,
  subtext,
  hasLaurel = false,
  light = false,
}: StatTileProps) {
  return (
    <div
      className={`relative p-6 rounded-md text-center transition-transform hover:-translate-y-0.5 duration-200 ${
        light
          ? "bg-[#FAF9F6] border border-[#D89030]/30 shadow-sm"
          : "seal-frame border border-[#D89030]/35 shadow-lg"
      }`}
    >
      {/* Optional subtle Laurel Wreath SVG framing */}
      {hasLaurel && (
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none text-[#D89030]">
          <svg width="120" height="90" viewBox="0 0 100 80" fill="currentColor">
            <path d="M50,75 C20,70 5,45 10,20 C15,35 25,50 45,60 C30,45 25,25 30,5 C35,25 45,45 50,75 Z" />
            <path
              d="M50,75 C80,70 95,45 90,20 C85,35 75,50 55,60 C70,45 75,25 70,5 C65,25 55,45 50,75 Z"
            />
          </svg>
        </div>
      )}

      <div className="relative z-10">
        <span
          className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold block ${
            light ? "text-[#001B45]" : "gold-text-gradient"
          }`}
        >
          {number}
        </span>
        <span
          className={`font-ceremonial text-xs sm:text-sm tracking-wider uppercase block mt-2 font-semibold ${
            light ? "text-[#C07820]" : "text-[#F0C050]"
          }`}
        >
          {label}
        </span>
        {subtext && (
          <p
            className={`text-xs mt-1.5 max-w-xs mx-auto ${
              light ? "text-[#14213D]/70" : "text-[#F8F8F8]/65"
            }`}
          >
            {subtext}
          </p>
        )}
      </div>
    </div>
  );
}
