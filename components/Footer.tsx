"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Globe2, ShieldCheck, Award, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#000814] text-[#F8F8F8] border-t border-[#0B2F63] relative overflow-hidden">
      {/* Laurel Wreath & Open Book divider motif */}
      <div className="pt-12 pb-6 px-4 flex flex-col items-center justify-center">
        <div className="flex items-center gap-3 text-[#D89030] opacity-85">
          {/* Laurel branch left */}
          <svg width="48" height="24" viewBox="0 0 60 30" fill="currentColor" className="opacity-70">
            <path d="M60,15 C45,14 30,22 10,28 C18,20 28,14 42,12 C28,10 16,5 5,0 C20,2 35,8 48,10 Z" />
            <circle cx="15" cy="22" r="2" />
            <circle cx="28" cy="18" r="2" />
            <circle cx="40" cy="14" r="2" />
          </svg>

          {/* Open Book Motif */}
          <svg width="32" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>

          {/* Laurel branch right */}
          <svg width="48" height="24" viewBox="0 0 60 30" fill="currentColor" className="opacity-70 scale-x-[-1]">
            <path d="M60,15 C45,14 30,22 10,28 C18,20 28,14 42,12 C28,10 16,5 5,0 C20,2 35,8 48,10 Z" />
            <circle cx="15" cy="22" r="2" />
            <circle cx="28" cy="18" r="2" />
            <circle cx="40" cy="14" r="2" />
          </svg>
        </div>
        <p className="font-ceremonial text-xs tracking-[0.25em] text-[#D89030] uppercase mt-2">
          Global Institute for Leadership &amp; Diplomacy
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Crest & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="GILD International Crest"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-ceremonial text-xl font-bold text-[#F8F8F8] tracking-wider block">
                  GILD INTERNATIONAL
                </span>
                <span className="text-xs text-[#D89030] tracking-widest uppercase">
                  Developing Leaders • Advancing Diplomacy • Connecting Nations
                </span>
              </div>
            </div>
            <p className="text-sm text-[#F8F8F8]/70 leading-relaxed max-w-md pt-2">
              Founded at Kaduna State University (KASU), Nigeria, within the Department of International Relations &amp; Diplomacy and the Department of Political Science. Led by High Commissioner Suleiman Yusuf Othman and 8 Co-Founders.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#F0C050] pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0090D8]" />
                Kaduna State University
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D89030]" />
                ASIRS Affiliated
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-ceremonial text-sm tracking-wider text-[#F0C050] uppercase mb-4">
              Institution
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F8F8F8]/80">
              <li>
                <Link href="/about" className="hover:text-[#F8D870] transition-colors">
                  About the Institute
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-[#F8D870] transition-colors">
                  High Commissioner &amp; Council
                </Link>
              </li>
              <li>
                <Link href="/structure" className="hover:text-[#F8D870] transition-colors">
                  Organizational Hierarchy
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#F8D870] transition-colors">
                  Diplomatic Academy Tracks
                </Link>
              </li>
              <li>
                <Link href="/classes/2026" className="hover:text-[#F8D870] transition-colors">
                  Diplomat Classes (2026)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Summits & Registry */}
          <div>
            <h3 className="font-ceremonial text-sm tracking-wider text-[#F0C050] uppercase mb-4">
              Summits &amp; Envoys
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F8F8F8]/80">
              <li>
                <Link href="/summits" className="hover:text-[#F8D870] transition-colors">
                  Geneva Summit 2026
                </Link>
              </li>
              <li>
                <Link href="/summits#archive" className="hover:text-[#F8D870] transition-colors">
                  Past Summits Archive
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#F8D870] transition-colors">
                  Summit Photography &amp; Press
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-[#F8D870] transition-colors">
                  Admissions Tracks
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F8D870] transition-colors">
                  Regional Bureaus
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Diplomatic Dispatch Newsletter */}
          <div>
            <h3 className="font-ceremonial text-sm tracking-wider text-[#F0C050] uppercase mb-4">
              Diplomatic Dispatch
            </h3>
            <p className="text-xs text-[#F8F8F8]/70 leading-relaxed mb-3">
              Receive accredited treaty briefings, summit announcements, and delegate admissions alerts.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you. You have been registered for GILD Diplomatic Dispatches.");
              }}
              className="space-y-2"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="diplomat@delegation.org"
                  className="w-full px-3.5 py-2 text-xs rounded bg-[#001030] border border-[#0B2F63] text-[#F8F8F8] placeholder-[#F8F8F8]/40 focus:outline-none focus:border-[#D89030]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-3 rounded text-xs font-semibold bg-[#D89030] hover:bg-[#F0C050] text-[#000814] transition-colors"
              >
                Subscribe to Dispatch
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#0B2F63]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F8F8]/60">
          <p>
            &copy; {new Date().getFullYear()} GILD International. All rights reserved. Registered intergovernmental simulation and leadership entity.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about#governance" className="hover:text-[#D89030]">
              Governance Charter
            </Link>
            <Link href="/contact#legal" className="hover:text-[#D89030]">
              Accreditation
            </Link>
            <Link href="/contact" className="hover:text-[#D89030]">
              Secretariat Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
