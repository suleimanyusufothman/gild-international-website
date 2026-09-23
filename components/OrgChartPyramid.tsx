"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Users, Shield, Award } from "lucide-react";
import orgData from "@/data/orgchart.json";

export default function OrgChartPyramid() {
  const [expandedTier, setExpandedTier] = useState<number | null>(1);

  const toggleTier = (tierLevel: number) => {
    setExpandedTier(expandedTier === tierLevel ? null : tierLevel);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      {/* Visual Stepped Pyramid Structure */}
      <div className="flex flex-col items-center gap-4">
        {orgData.tiers.map((tier) => {
          const isExpanded = expandedTier === tier.tierLevel;

          return (
            <div
              key={tier.tierLevel}
              className="w-full flex flex-col items-center transition-all duration-300"
              style={{
                maxWidth: `${Math.max(45, tier.widthPercent)}%`,
              }}
            >
              {/* Stepped Pyramid Tier Bar Button */}
              <button
                type="button"
                onClick={() => toggleTier(tier.tierLevel)}
                className={`w-full group relative text-left p-4 sm:p-5 rounded-lg border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0C050] ${
                  isExpanded
                    ? "bg-gradient-to-r from-[#001B45] via-[#0B2F63] to-[#001B45] border-[#F0C050] shadow-[0_0_25px_rgba(240,192,80,0.2)]"
                    : "bg-[#001030] hover:bg-[#001B45] border-[#D89030]/35 hover:border-[#D89030] shadow-md"
                }`}
                aria-expanded={isExpanded}
                aria-controls={`tier-panel-${tier.tierLevel}`}
              >
                {/* Visual apex badge for Tier 1 */}
                {tier.tierLevel === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#D89030] text-[#000814] text-[10px] font-ceremonial font-bold uppercase tracking-widest shadow">
                    Apex Sovereignty
                  </div>
                )}

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-ceremonial text-xs font-bold border transition-colors ${
                        isExpanded
                          ? "bg-[#D89030] text-[#000814] border-[#F8D870]"
                          : "bg-[#000814] text-[#F0C050] border-[#D89030]/40 group-hover:border-[#D89030]"
                      }`}
                    >
                      {tier.tierLevel}
                    </div>
                    <div>
                      <span className="font-ceremonial text-xs tracking-wider text-[#D89030] uppercase block">
                        Tier {tier.tierLevel} • {tier.tierName}
                      </span>
                      <h4 className="font-display text-lg sm:text-xl font-bold text-[#F8F8F8]">
                        {tier.roleTitle}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs px-2.5 py-1 rounded bg-[#000814] border border-[#0B2F63] text-[#0090D8] font-mono hidden sm:inline-block">
                      {tier.count} {tier.count === 1 ? "Official" : "Positions"}
                    </span>
                    <div className="text-[#F0C050] group-hover:scale-110 transition-transform">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#F8F8F8]/65 mt-2 hidden sm:block pl-11">
                  {tier.summary}
                </p>
              </button>

              {/* Connecting vertical SVG Line between tiers */}
              {tier.tierLevel < orgData.tiers.length && (
                <div className="h-5 flex items-center justify-center py-1">
                  <svg width="2" height="20" className="text-[#D89030]/50">
                    <line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="3,3"
                    />
                  </svg>
                </div>
              )}

              {/* Expanded Personnel Cards for this Tier */}
              {isExpanded && (
                <div
                  id={`tier-panel-${tier.tierLevel}`}
                  className="w-full mt-3 p-4 sm:p-5 rounded-lg bg-[#000814]/90 border border-[#D89030]/30 backdrop-blur-md animate-in fade-in slide-in-from-top-3 duration-300"
                >
                  <p className="text-xs text-[#F0C050] font-ceremonial uppercase tracking-wider mb-4 border-b border-[#0B2F63] pb-2">
                    Accredited Appointees in this Tier ({tier.members.length})
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tier.members.map((member, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3.5 p-3 rounded bg-[#001030] border border-[#0B2F63] hover:border-[#D89030]/40 transition-colors"
                      >
                        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-[#D89030]/50 bg-[#001B45]">
                          <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <div className="min-w-0 flex-1 text-left">
                          <p className="font-display font-semibold text-sm text-[#F8F8F8] truncate">
                            {member.name}
                          </p>
                          <p className="text-[11px] text-[#D89030] font-ceremonial uppercase tracking-wider truncate">
                            {member.role}
                          </p>
                          <p className="text-[11px] text-[#F8F8F8]/60 truncate mt-0.5">
                            {member.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
