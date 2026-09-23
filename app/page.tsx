import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe2,
  Award,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  Users,
  Compass,
  CheckCircle,
} from "lucide-react";
import HeroGlobe from "@/components/HeroGlobe";
import SummitCountdown from "@/components/SummitCountdown";
import StatTile from "@/components/StatTile";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CompassDivider from "@/components/CompassDivider";
import leadershipData from "@/data/leadership.json";
import diplomatsData from "@/data/diplomats-2026.json";

export default function HomePage() {
  const hc = leadershipData.highCommissioner;
  const foundingCohort = [
    diplomatsData.diplomats[0],
    {
      id: "home-head-delegate-kashim-hamza",
      name: "Kashim Hamza",
      countryName: "Nigeria (KASU)",
      photo: "/images/founders/Kashim Hamza.jpg",
    },
    ...diplomatsData.diplomats.slice(1, 5),
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION - Full-bleed Navy 900 */}
      <section className="relative min-h-[90vh] bg-[#001030] flex items-center overflow-hidden border-b border-[#0B2F63]">
        {/* Subtle background longitude/latitude radial watermark */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] rounded-full border border-[#D89030]" />
          <div className="w-[1100px] h-[1100px] rounded-full border border-[#0090D8]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Real Tagline & CTAs */}
            <div className="lg:col-span-6 space-y-6 text-left z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#001B45] border border-[#D89030]/40 text-[#F0C050] text-xs font-ceremonial tracking-widest uppercase shadow">
                <Compass className="w-3.5 h-3.5 text-[#0090D8]" />
                Founded at Kaduna State University (KASU), Nigeria
              </div>

              <div className="space-y-2">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F8F8] leading-[1.1]">
                  DEVELOPING LEADERS. <br />
                  <span className="gold-text-gradient">ADVANCING DIPLOMACY.</span> <br />
                  CONNECTING NATIONS.
                </h1>
                <p className="text-base sm:text-lg text-[#F8F8F8]/80 max-w-xl font-normal pt-2 leading-relaxed">
                  Founded in Kaduna, Nigeria, at Kaduna State University within the Department of International Relations &amp; Diplomacy and the Department of Political Science. Led by High Commissioner Suleiman Yusuf Othman and 8 Co-Founders, GILD International trains, commissions, and convenes student envoys through sovereign parliamentary simulations and diplomatic masterclasses.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/about"
                  className="px-6 py-3.5 rounded bg-[#001B45] hover:bg-[#0B2F63] border border-[#D89030]/40 text-[#F8F8F8] font-medium text-sm transition-colors"
                >
                  Learn About GILD
                </Link>
              </div>

              {/* Institutional Assurance */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#F8F8F8]/70">
                <span className="flex items-center gap-1.5 text-[#F0C050]">
                  <CheckCircle className="w-4 h-4 text-[#0090D8]" />
                  Kaduna State University
                </span>
                <span>•</span>
                <span>ASIRS Affiliated</span>
                <span>•</span>
                <span>Dept. of IR&amp;D &bull; Dept. of Political Science</span>
              </div>
            </div>

            {/* Right Column: Interactive 3D Globe */}
            <div className="lg:col-span-6 flex items-center justify-center z-10">
              <HeroGlobe />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREDIBILITY STRIP - Standalone Stat Tiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatTile
            number="Kaduna, NG"
            label="Founding Academic Seat"
            subtext="Kaduna State University, Dept of IR&amp;D and Dept of Political Science."
          />
          <StatTile
            number="8"
            label="Visionary Co-Founders"
            subtext="Student leaders and diplomatic scholars establishing the sovereign institute."
            hasLaurel
          />
          <StatTile
            number="ASIRS"
            label="African Society Affiliation"
            subtext="African Society of International Relations Students continental partnership."
          />
          <StatTile
            number="48"
            label="Delegates / Diplomats"
            subtext="Founding cohort inducted across standing simulation committees."
            hasLaurel
          />
        </div>
      </section>

      <CompassDivider />

      {/* 3. WHAT WE DO - 3-4 Seal-framed Cards Mirroring the 3 Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-ceremonial text-xs tracking-[0.2em] text-[#D89030] uppercase font-semibold">
            Institutional Pillars
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F8F8F8]">
            The Three Foundations of GILD
          </h2>
          <p className="text-sm text-[#F8F8F8]/70">
            Grounding emerging statesmen and international diplomats in rigorous theory, real-time crisis deliberation, and sovereign global assemblies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Leadership Development */}
          <div className="seal-frame rounded-xl p-8 flex flex-col justify-between border border-[#D89030]/30 hover:border-[#F0C050] transition-all group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#001030] border border-[#D89030]/50 flex items-center justify-center text-[#F0C050] group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#F8F8F8]">
                Leadership Development
              </h3>
              <p className="text-sm text-[#F8F8F8]/75 leading-relaxed">
                Comprehensive training in sovereign protocol, ethical leadership, multilateral negotiation strategy, and geopolitical risk forecasting delivered by seasoned diplomats.
              </p>
            </div>
            <div className="pt-6 border-t border-[#0B2F63] mt-6">
              <Link
                href="/programs"
                className="text-xs font-semibold text-[#F0C050] hover:text-[#F8D870] flex items-center justify-between"
              >
                <span>Explore Academy Tracks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Diplomatic Simulation */}
          <div className="seal-frame rounded-xl p-8 flex flex-col justify-between border border-[#D89030]/30 hover:border-[#F0C050] transition-all group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#001030] border border-[#D89030]/50 flex items-center justify-center text-[#0090D8] group-hover:scale-110 transition-transform">
                <Globe2 className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#F8F8F8]">
                Diplomatic Simulation
              </h3>
              <p className="text-sm text-[#F8F8F8]/75 leading-relaxed">
                Unscripted, high-stakes simulations of the UN Security Council, World Health Assembly, and multilateral treaty conclaves using strict parliamentary procedure.
              </p>
            </div>
            <div className="pt-6 border-t border-[#0B2F63] mt-6">
              <Link
                href="/classes/2026"
                className="text-xs font-semibold text-[#F0C050] hover:text-[#F8D870] flex items-center justify-between"
              >
                <span>View Active Committees</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Global Summits */}
          <div className="seal-frame rounded-xl p-8 flex flex-col justify-between border border-[#D89030]/30 hover:border-[#F0C050] transition-all group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#001030] border border-[#D89030]/50 flex items-center justify-center text-[#D89030] group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#F8F8F8]">
                Global Summits
              </h3>
              <p className="text-sm text-[#F8F8F8]/75 leading-relaxed">
                International assemblies convening delegates to debate resolutions, build cross-border coalitions, and present treaties.
              </p>
            </div>
            <div className="pt-6 border-t border-[#0B2F63] mt-6">
              <Link
                href="/summits"
                className="text-xs font-semibold text-[#F0C050] hover:text-[#F8D870] flex items-center justify-between"
              >
                <span>Inspect Summit Calendars</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. UPCOMING SUMMIT TEASER WITH LIVE COUNTDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SummitCountdown />
      </section>

      <CompassDivider />

      {/* 5. MEET THE LEADERSHIP (TEASER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="seal-frame rounded-xl p-8 sm:p-12 border border-[#D89030]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Seal Frame Medallion Portrait */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1.5 bg-gradient-to-tr from-[#C07820] via-[#F8D870] to-[#D89030] shadow-2xl">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#001030] border-2 border-[#001B45]">
                  <Image
                    src={hc.photo}
                    alt={hc.name}
                    fill
                    sizes="250px"
                    className="object-cover object-top filter brightness-95"
                  />
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block px-3 py-0.5 rounded bg-[#001030] border border-[#D89030]/40 text-[#D89030] font-ceremonial text-xs uppercase tracking-widest font-semibold">
                  High Commissioner &amp; Founder
                </span>
                <span className="inline-block px-2.5 py-0.5 rounded bg-[#001030] border border-[#0090D8]/40 text-[#0090D8] text-xs font-sans">
                  High Commissioner, ASIRS
                </span>
                <span className="inline-block px-2.5 py-0.5 rounded bg-[#001030] border border-[#D89030]/40 text-[#F0C050] text-xs font-sans">
                  President, Dept of IR&amp;D (KASU)
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F8F8]">
                {hc.name}
              </h3>
              <blockquote className="font-display text-lg italic text-[#F0C050] border-l-2 border-[#D89030] pl-4 py-1">
                &ldquo;{hc.quote}&rdquo;
              </blockquote>
              <p className="text-sm text-[#F8F8F8]/80 leading-relaxed max-w-2xl">
                High Commissioner of GILD International, High Commissioner of the African Society of International Relations Students (ASIRS), and President of the Department of International Relations &amp; Diplomacy at Kaduna State University (KASU). Leading 8 visionary co-founders to build the premier diplomatic simulation platform in Nigeria.
              </p>
              <div className="pt-2">
                <Link
                  href="/leadership"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#F0C050] hover:text-[#F8D870] underline decoration-[#D89030]"
                >
                  Read Full Profiles of the 8 Founders &amp; Executive Council
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLASS OF 2026 TEASER - Founding Cohort Roster Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-ceremonial text-xs tracking-[0.2em] text-[#D89030] uppercase font-semibold">
              The Sovereign Roster
            </span>
            <h2 className="font-display text-3xl font-bold text-[#F8F8F8] mt-1">
              Meet the Founding Class of Delegates &amp; Diplomats
            </h2>
          </div>
          <Link
            href="/classes/2026"
            className="text-xs font-semibold text-[#F0C050] hover:text-[#F8D870] flex items-center gap-1.5"
          >
            <span>Explore Full 48 Diplomats Roster</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {foundingCohort.map((diplomat) => (
            <Link
              key={diplomat.id}
              href="/classes/2026"
              className="seal-frame rounded-lg p-3 text-center border border-[#D89030]/25 hover:border-[#F0C050] transition-all group"
            >
              <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border border-[#D89030]/50 mb-2.5 bg-[#001030]">
                <Image
                  src={diplomat.photo}
                  alt={diplomat.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-display font-semibold text-xs text-[#F8F8F8] truncate">
                {diplomat.name}
              </p>
              <p className="text-[10px] text-[#0090D8] truncate">{diplomat.countryName}</p>
            </Link>
          ))}
        </div>
      </section>

      <CompassDivider />

      {/* 7. TESTIMONIALS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialCarousel />
      </section>
    </div>
  );
}
