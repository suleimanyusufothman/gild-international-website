"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  CheckCircle,
  User,
  School,
  Landmark,
  Building,
  Shield,
  Award,
  ArrowRight,
  Clock,
  Stamp,
  Sparkles,
  FileText,
} from "lucide-react";
import CompassDivider from "@/components/CompassDivider";

const TRACKS = [
  {
    id: "individual",
    name: "Individual Delegate",
    icon: User,
    tagline: "Emerging Leaders & Scholars",
    description: "For university students, young diplomats, and aspiring policy analysts applying independently for summit sessions.",
    feeNotice: "Merit scholarships and delegate subsidies available.",
  },
  {
    id: "institution",
    name: "Educational Institution",
    icon: School,
    tagline: "Universities & High Schools",
    description: "For academic faculties registering a delegation block of 5 to 25 student envoys with faculty advisor accreditation.",
    feeNotice: "Institutional delegation discounts apply.",
  },
  {
    id: "government",
    name: "Government Partner",
    icon: Landmark,
    tagline: "Ministries & Embassies",
    description: "For sovereign embassies, foreign affairs ministries, and public agencies sponsoring state envoys.",
    feeNotice: "Diplomatic protocol liaison assigned.",
  },
  {
    id: "corporate",
    name: "Corporate & NGO Partner",
    icon: Building,
    tagline: "Multinationals & Foundations",
    description: "For strategic corporate leaders, think tanks, and philanthropic foundations supporting global youth leadership.",
    feeNotice: "Bespoke executive summit participation.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Application Dossier",
    desc: "Submission of personal credentials, academic/professional standing, and statement of diplomatic intent.",
  },
  {
    step: "02",
    title: "Admissions Review",
    desc: "The GILD Admissions Directorate reviews academic background, leadership aptitude, and committee preferences.",
  },
  {
    step: "03",
    title: "Diplomatic Interview",
    desc: "Shortlisted candidates undergo an oral interview evaluating negotiation acumen and multilateral ethics.",
  },
  {
    step: "04",
    title: "Induction & Accreditation",
    desc: "Successful candidates receive their formal Letter of Credentialing and are inducted into the Diplomat Corps.",
  },
];

export default function ApplyPage() {
  const [selectedTrack, setSelectedTrack] = useState("individual");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    institution: "",
    summitChoice: "Class of 2027 Annual Induction",
    committeeChoice: "UN Security Council",
    statement: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory golden confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#D89030", "#F0C050", "#0090D8", "#F8D870"],
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 900);
  };

  return (
    <div className="space-y-16 pb-24">
      {/* 1. Header Banner */}
      <section className="py-20 bg-[#001030] border-b border-[#0B2F63] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001B45] border border-[#D89030]/40 text-[#D89030] text-xs font-ceremonial tracking-widest uppercase">
            Admissions &amp; Diplomatic Credentials
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8F8F8]">
            Apply for Admissions
          </h1>
          <p className="text-sm sm:text-base text-[#F8F8F8]/80 max-w-xl mx-auto">
            Submit your credentials for consideration in the GILD INTERNATIONAL Diplomat Corps.
          </p>
        </div>
      </section>

      {/* 2. Four Application Tracks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-ceremonial text-xs tracking-widest text-[#D89030] uppercase font-bold">
            Select Your Track
          </span>
          <h2 className="font-display text-3xl font-bold text-[#F8F8F8]">
            Four Pathways to Participation
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRACKS.map((track) => {
            const Icon = track.icon;
            const isSelected = selectedTrack === track.id;

            return (
              <button
                key={track.id}
                type="button"
                onClick={() => setSelectedTrack(track.id)}
                className={`text-left seal-frame rounded-xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "border-[#F0C050] bg-gradient-to-b from-[#001B45] via-[#0B2F63]/50 to-[#001030] shadow-[0_0_25px_rgba(240,192,80,0.3)] ring-1 ring-[#F0C050]"
                    : "border-[#D89030]/30 hover:border-[#D89030] opacity-90 hover:opacity-100"
                }`}
              >
                <div className="space-y-3">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center border ${
                      isSelected
                        ? "bg-[#D89030] text-[#000814] border-[#F8D870]"
                        : "bg-[#001030] text-[#0090D8] border-[#0B2F63]"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#0090D8] font-ceremonial uppercase tracking-wider block font-semibold">
                      {track.tagline}
                    </span>
                    <h3 className="font-display text-xl font-bold text-[#F8F8F8]">
                      {track.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#F8F8F8]/70 leading-relaxed">
                    {track.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#0B2F63] flex items-center justify-between text-[11px]">
                  <span className="text-[#D89030]">{track.feeNotice}</span>
                  {isSelected && (
                    <span className="text-[#F0C050] font-bold">Selected ✓</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <CompassDivider />

      {/* 3. Sequential 4-Step Process (Numbering is Earned Here) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-ceremonial text-xs tracking-widest text-[#D89030] uppercase font-bold">
            The Admissions Sequence
          </span>
          <h2 className="font-display text-3xl font-bold text-[#F8F8F8]">
            From Candidate to Commissioned Diplomat
          </h2>
          <p className="text-xs sm:text-sm text-[#F8F8F8]/70">
            A sequential four-stage vetting process ensuring every commissioned delegate upholds the standards of the Institute.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, idx) => (
            <div
              key={s.step}
              className="seal-frame rounded-xl p-6 border border-[#D89030]/30 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-3xl font-bold gold-text-gradient">
                    {s.step}
                  </span>
                  <span className="text-[10px] text-[#0090D8] uppercase tracking-wider font-mono">
                    Stage {idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#F8F8F8] mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-[#F8F8F8]/75 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {idx < STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20 text-[#D89030]">
                  <ArrowRight className="w-5 h-5 drop-shadow" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <CompassDivider />

      {/* 4. Application Form / Wax Seal Confirmation Screen */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isSubmitted ? (
          <div className="seal-frame rounded-2xl p-8 sm:p-12 border border-[#D89030]/40 shadow-2xl space-y-8">
            <div className="text-center space-y-2 border-b border-[#D89030]/25 pb-6">
              <span className="font-ceremonial text-xs tracking-widest text-[#F0C050] uppercase font-bold">
                Official Delegate Dossier
              </span>
              <h3 className="font-display text-3xl font-bold text-[#F8F8F8]">
                Submit Application for {TRACKS.find((t) => t.id === selectedTrack)?.name}
              </h3>
              <p className="text-xs text-[#F8F8F8]/70">
                Please complete all fields with accurate personal and institutional credentials.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#F8F8F8] uppercase tracking-wider mb-2">
                    Full Name (As on Passport) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Adebayo Vance"
                    className="w-full px-4 py-3 rounded bg-[#001030] border border-[#0B2F63] text-sm text-[#F8F8F8] placeholder-[#F8F8F8]/40 focus:outline-none focus:border-[#D89030]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F8F8F8] uppercase tracking-wider mb-2">
                    Diplomatic Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. delegate@institution.edu"
                    className="w-full px-4 py-3 rounded bg-[#001030] border border-[#0B2F63] text-sm text-[#F8F8F8] placeholder-[#F8F8F8]/40 focus:outline-none focus:border-[#D89030]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#F8F8F8] uppercase tracking-wider mb-2">
                    Country of Citizenship / Sovereign Mission *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nationality}
                    onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                    placeholder="e.g. Switzerland, Kenya, UAE"
                    className="w-full px-4 py-3 rounded bg-[#001030] border border-[#0B2F63] text-sm text-[#F8F8F8] placeholder-[#F8F8F8]/40 focus:outline-none focus:border-[#D89030]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F8F8F8] uppercase tracking-wider mb-2">
                    University, Ministry, or Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="e.g. University of Geneva / Ministry of Foreign Affairs"
                    className="w-full px-4 py-3 rounded bg-[#001030] border border-[#0B2F63] text-sm text-[#F8F8F8] placeholder-[#F8F8F8]/40 focus:outline-none focus:border-[#D89030]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#F8F8F8] uppercase tracking-wider mb-2">
                    Preferred Summit / Session *
                  </label>
                  <select
                    value={formData.summitChoice}
                    onChange={(e) => setFormData({ ...formData, summitChoice: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#001030] border border-[#0B2F63] text-sm text-[#F8F8F8] focus:outline-none focus:border-[#D89030]"
                  >

                    <option value="Dubai Diplomatic Conclave 2027">Dubai Diplomatic Conclave 2027</option>
                    <option value="London Peace Symposium 2027">London Peace Symposium 2027</option>
                    <option value="Class of 2027 Annual Induction">Class of 2027 Annual Diplomat Induction</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F8F8F8] uppercase tracking-wider mb-2">
                    Primary Committee Interest *
                  </label>
                  <select
                    value={formData.committeeChoice}
                    onChange={(e) => setFormData({ ...formData, committeeChoice: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#001030] border border-[#0B2F63] text-sm text-[#F8F8F8] focus:outline-none focus:border-[#D89030]"
                  >
                    <option value="UN Security Council">UN Security Council (UNSC)</option>
                    <option value="Climate Treaties">Climate Treaties &amp; Ecological Accords</option>
                    <option value="Global Trade">Global Trade &amp; Debt Sovereignty</option>
                    <option value="Human Rights">Human Rights &amp; Refugee Protocols</option>
                    <option value="Cyber Diplomacy">Cyber Diplomacy &amp; Digital Governance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#F8F8F8] uppercase tracking-wider mb-2">
                  Statement of Diplomatic Intent (150 – 300 words) *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.statement}
                  onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                  placeholder="Outline your diplomatic motivation, international policy background, and how you intend to contribute to multilateral concord..."
                  className="w-full px-4 py-3 rounded bg-[#001030] border border-[#0B2F63] text-sm text-[#F8F8F8] placeholder-[#F8F8F8]/40 focus:outline-none focus:border-[#D89030]"
                />
              </div>

              <div className="pt-4 border-t border-[#0B2F63] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#F8F8F8]/60">
                  <Shield className="w-4 h-4 text-[#0090D8]" />
                  <span>Your information is handled confidentially by GILD INTERNATIONAL.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded bg-gradient-to-r from-[#C07820] via-[#D89030] to-[#F0C050] text-[#000814] font-semibold text-sm hover:shadow-[0_0_25px_rgba(240,192,80,0.5)] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Authenticating Dossier..." : "Apply for the 2027 Class"}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* CONFIRMATION SCREEN WITH ANIMATED GOLD WAX-SEAL STAMP */
          <div className="seal-frame rounded-2xl p-8 sm:p-14 border-2 border-[#D89030] text-center space-y-8 relative overflow-hidden shadow-2xl">
            {/* Wax Seal Stamp Graphic Animated on Screen */}
            <div className="flex justify-center">
              <div className="animate-stamp relative w-36 h-36 rounded-full p-2 bg-gradient-to-tr from-[#C07820] via-[#F8D870] to-[#D89030] shadow-[0_0_50px_rgba(216,144,48,0.7)] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#001030] border-2 border-[#F8D870] flex flex-col items-center justify-center p-3 text-center">
                  <div className="relative w-12 h-12 mb-1">
                    <Image
                      src="/images/logo.png"
                      alt="GILD Crest"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-ceremonial text-[9px] tracking-widest text-[#F0C050] font-bold uppercase">
                    SEAL OF GILD
                  </span>
                  <span className="text-[7px] text-[#F8D870] font-mono">ACCREDITED</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <span className="font-ceremonial text-xs tracking-[0.25em] text-[#0090D8] uppercase font-bold">
                Dossier Formally Registered
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#F8F8F8]">
                Credentials Received, {formData.fullName || "Honored Candidate"}
              </h3>
              <p className="text-sm text-[#F8F8F8]/80 max-w-lg mx-auto leading-relaxed">
                Your application for the <strong className="text-[#F0C050]">{formData.summitChoice}</strong> has been transmitted to the High Commissioner&apos;s Admissions Secretariat.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#001030] border border-[#D89030]/30 max-w-md mx-auto text-xs text-[#F8F8F8]/70 space-y-1 font-mono">
              <p>Reference Code: GILD-2026-APP-{Math.floor(100000 + Math.random() * 900000)}</p>
              <p>Status: Under Preliminary Secretariat Review</p>
              <p>Notification: Within 5 Business Days via Secure Dispatch</p>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    nationality: "",
                    institution: "",
                    summitChoice: "Class of 2027 Annual Induction",
                    committeeChoice: "UN Security Council",
                    statement: "",
                  });
                }}
                className="px-6 py-2.5 rounded border border-[#0B2F63] text-xs text-[#F8F8F8] hover:border-[#D89030]"
              >
                Submit Another Dossier
              </button>
              <Link
                href="/"
                className="px-6 py-2.5 rounded bg-[#D89030] text-[#000814] font-semibold text-xs hover:bg-[#F0C050]"
              >
                Return to Home
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
