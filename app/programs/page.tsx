import React from "react";
import Link from "next/link";
import { BookOpen, Award, CheckCircle, Clock, Users, ArrowRight, Shield } from "lucide-react";
import CompassDivider from "@/components/CompassDivider";
import programsData from "@/data/programs.json";

export const metadata = {
  title: "Diplomatic Programs & Academy | GILD International",
  description: "Explore accredited training tracks: Leadership Academy, Diplomacy & Negotiation Labs, Global Policy Fellowship, and Summit Simulation Training.",
};

export default function ProgramsPage() {
  const programs = programsData.programs;

  return (
    <div className="space-y-16 pb-24">
      {/* Header Banner */}
      <section className="py-20 bg-[#001030] border-b border-[#0B2F63] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001B45] border border-[#D89030]/40 text-[#D89030] text-xs font-ceremonial tracking-widest uppercase">
            <BookOpen className="w-3.5 h-3.5 text-[#0090D8]" />
            Diplomatic Academies &amp; Masterclasses
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8F8F8]">
            Programs &amp; Initiatives
          </h1>
          <p className="text-sm sm:text-base text-[#F8F8F8]/80 max-w-xl mx-auto">
            Rigorous masterclasses, diplomatic crisis immersions, and policy fellowships designed to transform aspiring leaders into seasoned global envoys.
          </p>
        </div>
      </section>

      {/* Editorial Paper Container for Programs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F6] text-[#14213D] rounded-2xl p-8 sm:p-12 border border-[#D89030]/35 shadow-xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-ceremonial text-xs tracking-widest uppercase text-[#C07820] font-bold">
              Curriculum Tracks
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#001B45]">
              Four Pathways to Diplomatic Excellence
            </h2>
            <p className="text-sm text-[#14213D]/70">
              Each track is led by former ambassadors, international legal scholars, and senior treaty negotiators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-xl p-8 border border-[#D89030]/30 shadow-md flex flex-col justify-between hover:border-[#D89030] transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D89030]/20">
                    <span className="font-ceremonial text-xs font-bold tracking-wider text-[#0048C0] uppercase">
                      {prog.tag}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-[#14213D]/60 font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#C07820]" />
                      {prog.duration}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#001B45]">
                    {prog.title}
                  </h3>

                  <p className="text-sm text-[#14213D]/80 leading-relaxed">
                    {prog.overview}
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className="font-ceremonial text-xs font-bold text-[#C07820] tracking-wide uppercase">
                      Core Syllabus Focus:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#14213D]/80">
                      {prog.curriculum.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#0048C0] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[#D89030]/15">
                    <p className="text-xs text-[#14213D]/70">
                      <strong className="text-[#001B45]">Accreditation Outcome:</strong>{" "}
                      {prog.outcome}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D89030]/20">
                  <Link
                    href={`/apply?program=${prog.id}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#001B45] hover:bg-[#001030] text-[#FAF9F6] font-semibold text-xs tracking-wider uppercase transition-colors"
                  >
                    <span>Apply for Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-[#D89030]/25 text-center space-y-3">
            <p className="font-display text-lg text-[#001B45] italic">
              &ldquo;Through Concord and Wisdom, We Connect the World.&rdquo;
            </p>
            <p className="text-xs text-[#14213D]/70">
              Need custom institutional training for your university delegation or foreign affairs ministry?
            </p>
            <div>
              <Link
                href="/contact"
                className="text-xs font-semibold text-[#C07820] hover:text-[#0048C0] underline decoration-[#D89030]"
              >
                Inquire about Institutional Diplomatic Partnerships
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
