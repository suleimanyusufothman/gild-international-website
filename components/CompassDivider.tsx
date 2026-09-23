import React from "react";

interface CompassDividerProps {
  light?: boolean;
  className?: string;
}

export default function CompassDivider({ light = false, className = "" }: CompassDividerProps) {
  const strokeColor = light ? "rgba(216, 144, 48, 0.4)" : "rgba(216, 144, 48, 0.5)";
  const starFill = light ? "#C07820" : "#D89030";

  return (
    <div className={`flex items-center justify-center gap-4 py-8 w-full max-w-4xl mx-auto opacity-80 ${className}`} aria-hidden="true">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D89030]/40 to-[#D89030]/80" />
      <div className="relative flex items-center justify-center">
        {/* 8-point compass star glyph echoing the apex of the GILD emblem */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#D89030] drop-shadow-[0_0_8px_rgba(216,144,48,0.5)]"
        >
          {/* Main 4 points */}
          <polygon
            points="12,1 14.5,9.5 23,12 14.5,14.5 12,23 9.5,14.5 1,12 9.5,9.5"
            fill={starFill}
            stroke="#F8D870"
            strokeWidth="0.5"
          />
          {/* Diagonal 4 smaller points */}
          <polygon
            points="12,5 13.8,10.2 19,12 13.8,13.8 12,19 10.2,13.8 5,12 10.2,10.2"
            fill="#F0C050"
          />
          <circle cx="12" cy="12" r="1.5" fill="#001030" stroke="#F8D870" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D89030]/40 to-[#D89030]/80" />
    </div>
  );
}
