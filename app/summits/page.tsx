import React from "react";
import Link from "next/link";

import { Calendar, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import SummitCountdown from "@/components/SummitCountdown";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CompassDivider from "@/components/CompassDivider";
import summitsData from "@/data/summits.json";

export const metadata = {
  title: "Global Summits & Assemblies | GILD International",
  description: "Explore GILD International summits, diplomatic assemblies, past events, and delegate testimonials."
};

export default function SummitsPage() {
  const nextSummit = summitsData.nextSummit;
  const pastSummits = summitsData.pastSummits;

  return (
    <div className="space-y-20 pb-24">
      {/* Header Banner */}
      <section className="py-20 bg-[#001030] border-b border-[#0B2F63] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001B45] border border-[#D89030]/40 text-[#D89030] text-xs font-ceremonial tracking-widest uppercase">
            Multilateral Plenary Assemblies
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8F8F8]">
            Diplomatic Summits
          </h1>
          <p className="text-sm sm:text-base text-[#F8F8F8]/80 max-w-xl mx-auto">
            High-level assemblies where delegates deliberate international crises, draft sovereign accords, and defend national positions before the global rostrum.
          </p>
        </div>
      </section>

      {/* 1. Next Summit Spotlight with Live Countdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <SummitCountdown />

        {/* Detailed Next Summit Card */}
        <div className="seal-frame rounded-xl p-8 sm:p-10 border border-[#D89030]/35 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-ceremonial text-xs tracking-widest text-[#0090D8] uppercase font-semibold">
                Summit Theme &amp; Framework
              </span>
              <h2 className="font-display text-3xl font-bold text-[#F8F8F8]">
                &ldquo;{nextSummit.theme}&rdquo;
              </h2>
              <p className="text-sm text-[#F8F8F8]/80 leading-relaxed">
                {nextSummit.description}
              </p>

              <div className="space-y-2 pt-2">
                <p className="font-ceremonial text-xs text-[#F0C050] uppercase tracking-wider font-semibold">
                  Active Simulation Committees:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F8F8F8]/85">
                  {nextSummit.committees.map((comm, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded bg-[#001030] border border-[#0B2F63] flex items-center gap-2"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#D89030] flex-shrink-0" />
                      <span>{comm}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#001030] p-6 rounded-lg border border-[#0B2F63] space-y-4">
              <h3 className="font-ceremonial text-xs tracking-widest text-[#F0C050] uppercase font-bold">
                Delegate Logistics
              </h3>
              <div className="space-y-3 text-xs text-[#F8F8F8]/80">
                <div className="flex justify-between border-b border-[#0B2F63] pb-2">
                  <span>Capacity:</span>
                  <span className="font-semibold text-[#F8F8F8]">{nextSummit.capacity} Envoys</span>
                </div>
                <div className="flex justify-between border-b border-[#0B2F63] pb-2">
                  <span>Confirmed:</span>
                  <span className="font-semibold text-[#0090D8]">{nextSummit.confirmedDelegates} Delegates</span>
                </div>
                <div className="flex justify-between border-b border-[#0B2F63] pb-2">
                  <span>Nations:</span>
                  <span className="font-semibold text-[#F0C050]">{nextSummit.participatingNations} Countries</span>
                </div>
                <div className="flex justify-between">
                  <span>Deadline:</span>
                  <span className="font-semibold text-[#E8A840]">{nextSummit.registrationDeadline}</span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      <CompassDivider />

      {/* 2. What is a GILD Summit? (Short Explainer) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="seal-frame-paper rounded-xl p-8 sm:p-12 text-[#14213D] space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-ceremonial text-xs tracking-widest text-[#C07820] uppercase font-bold">
              The Assembly Blueprint
            </span>
            <h2 className="font-display text-3xl font-bold text-[#001B45]">
              What is a GILD Summit?
            </h2>
            <p className="text-sm text-[#14213D]/75">
              Unlike generic Model UN conferences, a GILD Summit is an intergovernmental simulation governed by accredited diplomatic mentors, unscripted crisis escalation, and enforceable bilateral treaty drafting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-lg bg-[#FAF9F6] border border-[#D89030]/20 space-y-2">
              <span className="font-ceremonial text-xs font-bold text-[#0048C0]">01. PROTOCOL</span>
              <h4 className="font-display text-lg font-bold text-[#001B45]">Strict Diplomatic Order</h4>
              <p className="text-xs text-[#14213D]/75">
                Parliamentary procedure aligned strictly with the United Nations Palais des Nations code of conduct.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-[#FAF9F6] border border-[#D89030]/20 space-y-2">
              <span className="font-ceremonial text-xs font-bold text-[#C07820]">02. CRISIS</span>
              <h4 className="font-display text-lg font-bold text-[#001B45]">Unscripted Scenarios</h4>
              <p className="text-xs text-[#14213D]/75">
                Real-time escalations, breaking media briefings, and midnight emergency caucuses.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-[#FAF9F6] border border-[#D89030]/20 space-y-2">
              <span className="font-ceremonial text-xs font-bold text-[#0090D8]">03. TREATIES</span>
              <h4 className="font-display text-lg font-bold text-[#001B45]">Accredited Accords</h4>
              <p className="text-xs text-[#14213D]/75">
                Resolutions officially published and shared with intergovernmental missions and university libraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CompassDivider />

      {/* 3. Past Summits Archive */}
      <section id="archive" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-ceremonial text-xs tracking-widest text-[#D89030] uppercase font-bold">
            Historical Records
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F8F8F8]">
            Past Summits Archive
          </h2>
          <p className="text-xs sm:text-sm text-[#F8F8F8]/70">
            A track record of assemblies connecting sovereign delegations across continents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastSummits.map((summit) => (
            <div
              key={summit.id}
              className="seal-frame rounded-xl p-6 sm:p-8 border border-[#D89030]/30 hover:border-[#D89030] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#0B2F63]">
                  <span className="font-ceremonial text-xs text-[#0090D8] tracking-widest uppercase font-semibold">
                    {summit.edition}
                  </span>
                  <span className="font-mono text-xs text-[#F0C050] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {summit.dates}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#F8F8F8]">
                  {summit.name}
                </h3>
                <p className="text-xs text-[#F8F8F8]/60 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0090D8]" />
                  {summit.venue}, {summit.city}, {summit.country}
                </p>
                <p className="text-sm text-[#F8F8F8]/80 leading-relaxed pt-1">
                  {summit.summary}
                </p>

                <div className="grid grid-cols-3 gap-2 pt-3">
                  <div className="p-2 rounded bg-[#001030] border border-[#0B2F63] text-center">
                    <span className="font-display text-lg font-bold text-[#F0C050] block">
                      {summit.delegatesCount}
                    </span>
                    <span className="text-[10px] text-[#F8F8F8]/60 uppercase">Delegates</span>
                  </div>
                  <div className="p-2 rounded bg-[#001030] border border-[#0B2F63] text-center">
                    <span className="font-display text-lg font-bold text-[#F0C050] block">
                      {summit.countriesCount}
                    </span>
                    <span className="text-[10px] text-[#F8F8F8]/60 uppercase">Nations</span>
                  </div>
                  <div className="p-2 rounded bg-[#001030] border border-[#0B2F63] text-center">
                    <span className="font-display text-lg font-bold text-[#F0C050] block">
                      {summit.resolutionsAdopted}
                    </span>
                    <span className="text-[10px] text-[#F8F8F8]/60 uppercase">Treaties</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-[#0B2F63] flex items-center justify-between">
                <Link
                  href="/gallery"
                  className="text-xs font-semibold text-[#F0C050] hover:text-[#F8D870] flex items-center gap-1"
                >
                  <span>View Summit Media</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-[#0090D8] font-mono">Archived Plenary</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CompassDivider />

      {/* 4. Delegate Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialCarousel />
      </section>
    </div>
  );
}
