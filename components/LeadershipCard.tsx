"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Shield, Award, RotateCw, MapPin } from "lucide-react";

interface LeadershipCardProps {
  name: string;
  role: string;
  department?: string;
  location?: string;
  bio: string;
  photo?: string;
  honorific?: string;
  credential?: string;
  isHighCommissioner?: boolean;
}

export default function LeadershipCard({
  name,
  role,
  department,
  location,
  bio,
  photo,
  honorific,
  credential,
  isHighCommissioner = false,
}: LeadershipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`perspective-1000 w-full cursor-pointer select-none group ${
        isHighCommissioner ? "min-h-[460px]" : "min-h-[380px]"
      }`}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Toggle biography for ${name}`}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT OF CARD */}
        <div className="absolute inset-0 backface-hidden seal-frame rounded-lg p-6 flex flex-col justify-between border border-[#D89030]/40 group-hover:border-[#F0C050]/70 transition-colors">
          <div>
            {/* Top ceremonial title plate */}
            <div className="flex items-center justify-between pb-4 border-b border-[#D89030]/25">
              <span className="font-ceremonial text-[11px] tracking-[0.2em] text-[#D89030] uppercase font-semibold">
                {isHighCommissioner ? "APEX GOVERNANCE" : department || "EXECUTIVE COUNCIL"}
              </span>

            </div>

            {/* Medallion Portrait Frame */}
            <div className="flex justify-center my-5">
              <div
                className={`relative rounded-full p-1 bg-gradient-to-tr from-[#C07820] via-[#F8D870] to-[#D89030] shadow-lg shadow-[#000814]/80 ${
                  isHighCommissioner ? "w-36 h-36 sm:w-44 sm:h-44" : "w-28 h-28 sm:w-32 sm:h-32"
                }`}
              >
                <div className="w-full h-full rounded-full overflow-hidden relative bg-[#001030] border-2 border-[#001B45]">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={name}
                      fill
                      className="object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#001B45] text-[#D89030]">
                      <Shield className="w-12 h-12" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Name & Formal Title */}
            <div className="text-center space-y-1">
              {honorific && (
                <span className="font-ceremonial text-xs text-[#0090D8] tracking-widest block font-medium">
                  {honorific}
                </span>
              )}
              <h3
                className={`font-display font-bold text-[#F8F8F8] leading-tight ${
                  isHighCommissioner ? "text-2xl sm:text-3xl" : "text-xl"
                }`}
              >
                {name}
              </h3>
              <p className="font-ceremonial text-xs tracking-wider text-[#F0C050] uppercase pt-1">
                {role}
              </p>
              {location && (
                <p className="text-xs text-[#F8F8F8]/60 flex items-center justify-center gap-1 pt-1">
                  <MapPin className="w-3 h-3 text-[#0090D8]" />
                  {location}
                </p>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-[#0B2F63] flex items-center justify-between text-xs text-[#F8D870]/80">
            <span>{credential || "Credentialed Envoy"}</span>
            <span className="text-[11px] underline decoration-[#D89030]">Read Full Dossier</span>
          </div>
        </div>

        {/* BACK OF CARD (Flipped State) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-b from-[#001B45] to-[#000814] seal-frame rounded-lg p-6 flex flex-col justify-between border border-[#F0C050]/60 shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#D89030]/30">
              <span className="font-ceremonial text-[11px] tracking-widest text-[#F0C050] uppercase font-semibold">
                Diplomatic Record
              </span>
              <span className="text-[10px] text-[#F8F8F8]/50 flex items-center gap-1">
                <RotateCw className="w-3 h-3 text-[#0090D8]" />
                Flip back
              </span>
            </div>

            <div className="mt-4 space-y-3 text-left">
              <div>
                <h4 className="font-display text-lg font-semibold text-[#F8F8F8]">{name}</h4>
                <p className="text-xs text-[#D89030] font-ceremonial uppercase tracking-wider">{role}</p>
              </div>

              <div className="text-xs sm:text-sm text-[#F8F8F8]/80 leading-relaxed max-h-56 overflow-y-auto pr-1">
                {bio}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#0B2F63] flex items-center justify-between text-xs text-[#0090D8]">
            <span className="flex items-center gap-1 font-mono text-[11px]">
              <Shield className="w-3 h-3" />
              Accredited Diplomatic Profile
            </span>
            <span className="text-[#F0C050] font-sans">GILD Official Record</span>
          </div>
        </div>
      </div>
    </div>
  );
}
