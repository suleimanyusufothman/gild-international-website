"use client";

import React, { useState, useMemo, use } from "react";

import Image from "next/image";
import { Search, Filter, Shield, Award, Users, BookOpen, ArrowRight, RotateCcw } from "lucide-react";
import StatTile from "@/components/StatTile";
import DiplomatCard from "@/components/DiplomatCard";
import CompassDivider from "@/components/CompassDivider";
import diplomatsData from "@/data/diplomats-2026.json";

export default function DiplomatClassesPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const unwrappedParams = use(params);
  const year = unwrappedParams.year || "2026";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("ALL");


  // Extract unique countries
  const countries = useMemo(() => {
    const list = diplomatsData.diplomats.map((d) => d.countryName);
    return ["ALL", ...Array.from(new Set(list))];
  }, []);


  // Filtered diplomats list
  const filteredDiplomats = useMemo(() => {
    return diplomatsData.diplomats.filter((d) => {
      const matchesSearch =
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.badgeId.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCountry =
        selectedCountry === "ALL" || d.countryName === selectedCountry;

      return matchesSearch && matchesCountry;
    });
  }, [searchQuery, selectedCountry]);

  return (
    <div className="space-y-16 pb-24">
      {/* 1. Header Banner */}
      <section className="py-20 bg-[#001030] border-b border-[#0B2F63] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#001B45] border border-[#D89030]/40 text-[#D89030] text-xs font-ceremonial tracking-widest uppercase">
            Sovereign Diplomatic Cohort
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8F8F8]">
            Class of {year}
          </h1>
          <p className="text-sm sm:text-base text-[#F8F8F8]/80 max-w-xl mx-auto">
            {diplomatsData.subtitle} — formally commissioned through the GILD International founding delegate assembly at Kaduna State University.
          </p>
        </div>
      </section>

      {/* 2. Banner Photo & Motto Strip */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="seal-frame rounded-2xl overflow-hidden border border-[#D89030]/40">
          <div className="relative h-64 sm:h-80 w-full">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&auto=format&fit=crop&q=80"
              alt="GILD Diplomatic Corps Assembly"
              fill
              className="object-cover brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-[#001030]/60 to-transparent flex items-end p-6 sm:p-10">
              <div className="space-y-2">
                <span className="font-ceremonial text-xs tracking-widest text-[#F0C050] uppercase font-bold">
                  Class Motto
                </span>
                <p className="font-display text-xl sm:text-2xl lg:text-3xl italic text-[#F8F8F8]">
                  &ldquo;{diplomatsData.motto}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Separate Stat Tiles (Not a dotted string) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatTile
            number={String(diplomatsData.stats.diplomats)}
            label="Commissioned Diplomats"
            subtext="Trained in bilateral treaty negotiation and crisis mediation."
            hasLaurel
          />
          <StatTile
            number={String(diplomatsData.stats.countries)}
            label="Sovereign Nations"
            subtext="Spanning Africa, Europe, the Americas, and Asia-Pacific."
            hasLaurel
          />
          <StatTile
            number={String(diplomatsData.stats.committees)}
            label="Standing Committees"
            subtext="Deliberating Security Council, Climate, and Trade Accords."
            hasLaurel
          />
        </div>
      </section>

      <CompassDivider />

      {/* 4. Search and Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="p-5 rounded-xl bg-[#001B45]/90 border border-[#D89030]/30 shadow-lg space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Live Search */}
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 text-[#D89030] absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search diplomat name, dossier, or ID..."
                className="w-full pl-10 pr-4 py-2.5 rounded bg-[#001030] border border-[#0B2F63] text-[#F8F8F8] text-xs placeholder-[#F8F8F8]/40 focus:outline-none focus:border-[#D89030]"
              />
            </div>

            {/* Country & Committee Dropdowns */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#F8F8F8]/70">Country:</span>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="px-3 py-2 rounded bg-[#001030] border border-[#0B2F63] text-[#F8F8F8] text-xs focus:outline-none focus:border-[#D89030]"
                >
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c === "ALL" ? "All Countries" : c}
                    </option>
                  ))}
                </select>
              </div>


              {(searchQuery || selectedCountry !== "ALL") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCountry("ALL");

                  }}
                  className="px-3 py-2 rounded text-xs text-[#F0C050] hover:bg-[#001030] flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              )}
            </div>
          </div>

          <div className="text-xs text-[#F8F8F8]/60 flex items-center justify-between border-t border-[#0B2F63] pt-3">
            <span>
              Displaying {filteredDiplomats.length} of {diplomatsData.diplomats.length} Diplomats
            </span>
            <span className="text-[#0090D8]">Tap any card to flip and view credentials</span>
          </div>
        </div>

        {/* Diplomat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDiplomats.map((diplomat) => (
            <DiplomatCard
              key={diplomat.id}
              diplomat={diplomat}
              imageClassName={
                diplomat.name === "Dorcas Daniel" || diplomat.name === "Hauwau Abdullahi Salis"
                  ? "object-cover object-center"
                  : diplomat.name === "Jewel Gandu"
                    ? "object-cover object-[center_25%]"
                  : diplomat.name === "Alamin Sanusi" || diplomat.name === "Rahma Muhammad Suleiman" || diplomat.name === "Niimat Shuaib" || diplomat.name === "Fatima Salisu" || diplomat.name === "Adamu Adamu Garba"
                    ? "object-cover object-[center_25%]"
                    : diplomat.name === "Fatima Gidado"
                      ? "object-cover object-center"
                      : undefined
              }
            />
          ))}
        </div>

        {filteredDiplomats.length === 0 && (
          <div className="text-center py-16 seal-frame rounded-xl p-8">
            <p className="font-display text-xl text-[#F8F8F8]">No diplomats matched your query.</p>
            <p className="text-xs text-[#F8F8F8]/60 mt-1">
              Try adjusting your search criteria or resetting filters.
            </p>
          </div>
        )}
      </section>

      <CompassDivider />

      {/* 5. The Induction Oath & Apply CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="seal-frame rounded-2xl p-8 sm:p-12 border border-[#D89030] text-center space-y-6">
          <span className="font-ceremonial text-xs tracking-[0.25em] text-[#D89030] uppercase font-bold">
            The Induction Oath of GILD
          </span>
          <blockquote className="font-display text-xl sm:text-2xl italic text-[#F8D870] leading-relaxed max-w-2xl mx-auto">
            &ldquo;{diplomatsData.oath}&rdquo;
          </blockquote>

          <div className="pt-6 border-t border-[#D89030]/25" />
        </div>
      </section>
    </div>
  );
}
