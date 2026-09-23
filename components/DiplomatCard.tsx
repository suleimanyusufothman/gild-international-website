"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Shield, RotateCw, Globe, CheckCircle } from "lucide-react";

interface DiplomatProps {
  id: string;
  name: string;
  countryCode: string;
  countryName: string;
  committee: string;
  role: string;
  badgeId: string;
  bio: string;
  photo: string;
}

// Convert 2-letter ISO country code into Unicode flag emoji
function getFlagEmoji(countryCode: string) {
  if (!countryCode || countryCode.length !== 2) return "🌐";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export default function DiplomatCard({
  diplomat,
  imageClassName,
}: {
  diplomat: DiplomatProps;
  imageClassName?: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`perspective-1000 w-full h-[360px] cursor-pointer select-none group relative z-0 ${isFlipped ? "z-30" : "hover:z-10"}`}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Toggle credential for Diplomat ${diplomat.name}`}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT OF ID BADGE */}
        <div className="absolute inset-0 backface-hidden seal-frame rounded-lg p-5 flex flex-col justify-between border border-[#D89030]/40 group-hover:border-[#F0C050] transition-colors shadow-lg">
          {/* Top ID Lanyard slot & Crest */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#D89030]/25">
              <div className="flex items-center gap-2">
                <span className="text-xl" title={diplomat.countryName} aria-label={diplomat.countryName}>
                  {getFlagEmoji(diplomat.countryCode)}
                </span>
                <span className="font-mono text-[11px] text-[#F0C050] font-semibold tracking-wider">
                  {diplomat.badgeId}
                </span>
              </div>

            </div>

            {/* Photo & Badge Clip Look */}
            <div className="flex justify-center my-4">
              <div className="relative w-28 h-28 rounded-md overflow-hidden border border-[#D89030]/60 p-0.5 bg-gradient-to-b from-[#D89030] to-[#001030] shadow-md">
                <div className="relative w-full h-full rounded overflow-hidden">
                  <Image
                    src={diplomat.photo}
                    alt={diplomat.name}
                    fill
                    className={`${imageClassName ?? "object-cover object-top"} group-hover:scale-105 transition-transform duration-300`}
                  />
                </div>
              </div>
            </div>

            <p className="text-[10px] text-[#0090D8] text-center uppercase tracking-wider font-semibold mb-2">
              Tap the card to flip and view credentials
            </p>

            {/* Diplomat Details */}
            <div className="text-center space-y-1">
              <h3 className="font-display text-lg font-bold text-[#F8F8F8] leading-snug">
                {diplomat.name}
              </h3>
              <p className="text-xs text-[#0090D8] font-medium flex items-center justify-center gap-1">
                <span>{diplomat.countryName}</span>
                <span>•</span>
                <span className="text-[#F0C050]">{diplomat.role}</span>
              </p>

            </div>
          </div>

          <div className="pt-3 border-t border-[#0B2F63] flex items-center justify-between text-[11px] text-[#F8F8F8]/60">
            <span className="flex items-center gap-1 text-[#F0C050]">
              <CheckCircle className="w-3 h-3 text-[#0090D8]" />
              Founding Class
            </span>
            <span>Accredited 2026</span>
          </div>
        </div>

        {/* BACK OF ID BADGE */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-b from-[#001B45] to-[#000814] seal-frame rounded-lg p-5 flex flex-col justify-between border border-[#F0C050]/60 shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-2.5 border-b border-[#D89030]/30">
              <span className="font-ceremonial text-[10px] tracking-widest text-[#F0C050] uppercase font-semibold">
                Diplomatic Dossier
              </span>
              <span className="text-[10px] text-[#F8F8F8]/50 flex items-center gap-1">
                <RotateCw className="w-3 h-3 text-[#0090D8]" />
                Tap to flip back
              </span>
            </div>

            <div className="mt-3 space-y-2 text-left">
              <div>
                <h4 className="font-display text-base font-semibold text-[#F8F8F8]">
                  {diplomat.name}
                </h4>
                <p className="text-xs text-[#D89030] font-sans">
                  {diplomat.countryName} Delegation
                </p>
              </div>

              <div className="p-2 rounded bg-[#001030]/80 border border-[#0B2F63] text-[11px] text-[#F8F8F8]/80 leading-relaxed max-h-36 overflow-y-auto">
                <p className="font-semibold text-[#F0C050] mb-1">Dossier Summary:</p>
                <p>{diplomat.bio}</p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#0B2F63] flex items-center justify-between text-[10px] text-[#F8F8F8]/60 font-mono">
            <span>ID: {diplomat.badgeId}</span>
            <span className="text-[#0090D8]">GILD GENEVA SEAL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
