"use client";

import React from "react";
import { Camera } from "lucide-react";

export default function GalleryPage() {

  return (
    <div className="space-y-16 pb-24">
      {/* Header Banner */}
      <section className="py-20 bg-[#001030] border-b border-[#0B2F63] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001B45] border border-[#D89030]/40 text-[#D89030] text-xs font-ceremonial tracking-widest uppercase">
            <Camera className="w-3.5 h-3.5 text-[#0090D8]" />
            Diplomatic Media Archive
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8F8F8]">
            Summit Gallery &amp; Press
          </h1>
          <p className="text-sm sm:text-base text-[#F8F8F8]/80 max-w-xl mx-auto">
            Visual dispatches documenting multilateral plenaries, treaty signings, crisis negotiations, and formal diplomatic galas.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-xl border border-[#D89030]/30 bg-[#001B45] p-12">
          <p className="text-sm text-[#F8F8F8]/70">Gallery updates coming soon.</p>
        </div>
      </section>
    </div>
  );
}
