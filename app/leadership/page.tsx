import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, MapPin, ExternalLink, Users } from "lucide-react";
import CompassDivider from "@/components/CompassDivider";
import LeadershipCard from "@/components/LeadershipCard";
import leadershipData from "@/data/leadership.json";

export const metadata = {
  title: "Leadership & Governance | GILD International",
  description: "Meet the High Commissioner, Executive Council, Global Advisory Board, and Regional Ambassadors governing GILD International.",
};

export default function LeadershipPage() {
  const hc = leadershipData.highCommissioner;
  const council = leadershipData.executiveCouncil;
  const advisory = leadershipData.advisoryBoard;
  const ambassadors = leadershipData.regionalAmbassadors;

  return (
    <div className="space-y-16 pb-24">
      {/* Header Banner */}
      <section className="py-20 bg-[#001030] border-b border-[#0B2F63] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001B45] border border-[#D89030]/40 text-[#D89030] text-xs font-ceremonial tracking-widest uppercase">
            Sovereign Directorate
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8F8F8]">
            Leadership &amp; Governance
          </h1>
          <p className="text-sm sm:text-base text-[#F8F8F8]/80 max-w-xl mx-auto">
            Diplomats, international jurists, and policy architects guiding GILD International&apos;s global mission.
          </p>
        </div>
      </section>

      {/* 1. The High Commissioner Spotlight */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="font-ceremonial text-xs tracking-[0.25em] text-[#D89030] uppercase font-bold">
            Apex of the Institute
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F8F8F8] mt-1">
            The High Commissioner
          </h2>
        </div>

        <div className="seal-frame rounded-2xl p-8 sm:p-12 border border-[#D89030] shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Medallion Photo */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-tr from-[#C07820] via-[#F8D870] to-[#D89030] shadow-2xl">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#001030] border-4 border-[#001B45]">
                  <Image
                    src={hc.photo}
                    alt={hc.name}
                    fill
                    sizes="300px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
              <div className="mt-4 px-4 py-1.5 rounded-full bg-[#001030] border border-[#D89030]/40 text-[#F0C050] font-mono text-xs">
                Credential: {hc.credential} • {hc.tenure}
              </div>
            </div>

            {/* Content & Quote */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div>
                <span className="font-ceremonial text-xs tracking-widest text-[#0090D8] uppercase font-semibold">
                  {hc.honorific}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#F8F8F8]">
                  {hc.name}
                </h3>
                <p className="font-ceremonial text-sm tracking-wider text-[#D89030] uppercase mt-1">
                  {hc.title}
                </p>
              </div>

              <blockquote className="font-display text-lg sm:text-xl italic text-[#F8D870] border-l-3 border-[#D89030] pl-5 py-1 leading-relaxed">
                &ldquo;{hc.quote}&rdquo;
              </blockquote>

              <p className="text-sm text-[#F8F8F8]/85 leading-relaxed">
                {hc.bio}
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                {hc.decorations.map((dec, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#001030] border border-[#0B2F63] text-xs text-[#F0C050]"
                  >
                    <Award className="w-3.5 h-3.5 text-[#0090D8]" />
                    {dec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompassDivider />

      {/* 2. Executive Council (Flip Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-ceremonial text-xs tracking-[0.2em] text-[#D89030] uppercase font-bold">
            The Founding Directorate &bull; KASU
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F8F8F8]">
            The 8 Co-Founders &amp; Executive Council
          </h2>
          <p className="text-xs sm:text-sm text-[#F8F8F8]/70">
            Student leaders and scholars from the Department of International Relations &amp; Diplomacy and the Department of Political Science at Kaduna State University. Tap any card to flip and view their portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {council.map((member) => (
            <LeadershipCard
              key={member.id}
              name={member.name}
              role={member.role}
              department={member.department}
              location={member.location}
              bio={member.bio}
              photo={member.photo}
            />
          ))}
        </div>
      </section>

      <CompassDivider />

      {/* 3. Global Advisory Board & Regional Ambassadors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Global Advisory Board */}
          <div className="seal-frame rounded-xl p-8 border border-[#D89030]/30 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#D89030]/25">
              <Shield className="w-6 h-6 text-[#F0C050]" />
              <div>
                <h3 className="font-display text-2xl font-bold text-[#F8F8F8]">
                  Global Advisory Board
                </h3>
                <p className="text-xs text-[#F8F8F8]/60 font-sans">
                  Eminent diplomats, jurists, and academic deans
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {advisory.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded bg-[#001030] border border-[#0B2F63] hover:border-[#D89030]/40 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="font-display text-base font-semibold text-[#F8F8F8]">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-[#0090D8] font-mono">{item.location}</span>
                  </div>
                  <p className="text-xs text-[#D89030] font-ceremonial uppercase tracking-wider mt-0.5">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#F8F8F8]/70 mt-1">{item.affiliation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Ambassadors by Continent */}
          <div className="seal-frame rounded-xl p-8 border border-[#D89030]/30 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#D89030]/25">
              <Users className="w-6 h-6 text-[#0090D8]" />
              <div>
                <h3 className="font-display text-2xl font-bold text-[#F8F8F8]">
                  Regional Ambassadors
                </h3>
                <p className="text-xs text-[#F8F8F8]/60 font-sans">
                  Heads of continental diplomatic bureaus
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {ambassadors.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded bg-[#001030] border border-[#0B2F63] hover:border-[#D89030]/40 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="font-display text-base font-semibold text-[#F8F8F8]">
                      {item.lead}
                    </h4>
                    <span className="text-[11px] text-[#F0C050] font-ceremonial uppercase font-bold tracking-wider">
                      {item.region}
                    </span>
                  </div>
                  <p className="text-xs text-[#0090D8] font-sans flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    Station: {item.station}
                  </p>
                  <p className="text-xs text-[#F8F8F8]/70 mt-1">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
