import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, BookOpen, Compass, Award, Users, CheckCircle, Scale, Globe2, Building2, GraduationCap } from "lucide-react";
import CompassDivider from "@/components/CompassDivider";

export const metadata = {
  title: "About Us | GILD International",
  description: "Learn about the origins, mission, and founders of GILD International at Kaduna State University (KASU), Department of International Relations & Diplomacy and Department of Political Science.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Editorial Header Banner - Navy 900 */}
      <section className="relative py-20 bg-[#001030] border-b border-[#0B2F63] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001B45] border border-[#D89030]/40 text-[#D89030] text-xs font-ceremonial tracking-widest uppercase">
            <GraduationCap className="w-3.5 h-3.5 text-[#0090D8]" />
            Founded at Kaduna State University (KASU)
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8F8F8]">
            Sovereign Diplomacy &amp; Principled Governance
          </h1>
          <p className="font-display italic text-lg sm:text-xl text-[#F0C050] max-w-2xl mx-auto">
            &ldquo;Developing Leaders. Advancing Diplomacy. Connecting Nations.&rdquo;
          </p>
        </div>
      </section>

      {/* Editorial Body: Paper Section (#FAF9F6) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F6] text-[#14213D] rounded-2xl p-8 sm:p-14 border border-[#D89030]/30 shadow-xl space-y-14">
          {/* Who We Are & The True Foundation Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="font-ceremonial text-xs tracking-widest uppercase text-[#C07820] font-bold">
                The Kaduna State University Heritage
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#001B45] leading-tight">
                Born in Kaduna, Nigeria — From the Departments of International Relations &amp; Political Science
              </h2>
              <p className="text-base text-[#14213D]/85 leading-relaxed">
                <strong>GILD International</strong> (Global Institute for Leadership &amp; Diplomacy) is an incorporated diplomatic simulation and youth leadership institute founded in <strong>Kaduna, Nigeria</strong>. It was birthed inside <strong>Kaduna State University (KASU)</strong> through the joint vision of the <strong>Department of International Relations &amp; Diplomacy</strong> and the <strong>Department of Political Science</strong>.
              </p>
              <p className="text-sm text-[#14213D]/75 leading-relaxed">
                Led by <strong>Suleiman Yusuf Othman</strong> — High Commissioner of the African Society of International Relations Students (ASIRS) and President of the Department of International Relations and Diplomacy at KASU — along with <strong>8 visionary co-founders</strong>, GILD was established to provide African students and emerging envoys with an authentic, rigorous crucible for parliamentary debate, diplomatic negotiations, and statecraft.
              </p>
              <div className="p-3.5 rounded-lg bg-white border border-[#D89030]/30 text-xs text-[#001B45] font-medium space-y-1">
                <p>📍 <strong>Headquarters &amp; Academic Seat:</strong> Kaduna State University (KASU), Tafawa Balewa Way, Kaduna, Nigeria.</p>
                <p>🏛️ <strong>Departments:</strong> International Relations &amp; Diplomacy &bull; Political Science</p>
                <p>🌍 <strong>Scope of Operations:</strong> Operating actively across Nigeria (Kaduna, Abuja, Kano, Lagos) and African university networks.</p>
              </div>
            </div>

            {/* Emblem and High Commissioner Portrait Side-by-Side */}
            <div className="lg:col-span-5 flex flex-col items-center gap-4">
              <div className="relative w-56 h-56 p-2 rounded-2xl bg-gradient-to-tr from-[#C07820] via-[#FAF9F6] to-[#D89030] shadow-xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#001030] flex items-center justify-center p-4">
                  <Image
                    src="/images/logo.png"
                    alt="GILD Official Seal"
                    width={180}
                    height={180}
                    className="object-contain filter drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* ASIRS Logo Badge */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#D89030]/40 shadow-sm">
                <div className="relative w-7 h-7">
                  <Image
                    src="/images/asirs-logo.png"
                    alt="ASIRS Emblem"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-ceremonial font-bold text-[#001B45] uppercase tracking-wider">
                  Affiliated with ASIRS • KASU Chapter
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D89030]/25" />

          {/* The 8 Co-Founders Honor Roll */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="font-ceremonial text-xs tracking-widest uppercase text-[#C07820] font-bold">
                The Founding Directorate
              </span>
              <h3 className="font-display text-3xl font-bold text-[#001B45]">
                The Founding Directorate of GILD International
              </h3>
              <p className="text-sm text-[#14213D]/70">
                Led by Head Delegates Suleiman Yusuf Othman and Kashim Hamza, alongside pioneering student leaders and scholars from Kaduna State University.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#D89030]/30 shadow-sm text-center space-y-1">
                <div className="w-16 h-16 mx-auto rounded-full overflow-hidden relative border-2 border-[#D89030]">
                  <Image src="/images/high-commissioner.png" alt="Suleiman Yusuf Othman" fill className="object-cover object-top" />
                </div>
                <h4 className="font-display font-bold text-sm text-[#001B45] pt-1">Suleiman Yusuf Othman</h4>
                <p className="text-[10px] text-[#C07820] font-ceremonial uppercase font-bold">High Commissioner &amp; Lead Founder</p>
                <p className="text-[10px] text-[#14213D]/65">President, Dept of IR&amp;D (KASU) &bull; High Commissioner, ASIRS</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D89030]/30 shadow-sm text-center space-y-1">
                <div className="w-16 h-16 mx-auto rounded-full overflow-hidden relative border-2 border-[#D89030]">
                  <Image src="/images/founders/Kashim Hamza.jpg" alt="Kashim Hamza" fill className="object-cover object-top" />
                </div>
                <h4 className="font-display font-bold text-sm text-[#001B45] pt-1">Kashim Hamza</h4>
                <p className="text-[10px] text-[#C07820] font-ceremonial uppercase font-bold">Head Delegate</p>
                <p className="text-[10px] text-[#14213D]/65">Founding Directorate &bull; GILD International</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D89030]/25 shadow-sm text-center space-y-1">
                <div className="w-16 h-16 mx-auto rounded-full overflow-hidden relative border-2 border-[#D89030]">
                  <Image src="/images/founders/abdulaziz-abdulrahman-idris.png" alt="Abdulaziz Abdulrahman Idris" fill className="object-cover object-top" />
                </div>
                <h4 className="font-display font-bold text-sm text-[#001B45] pt-1">Abdulaziz Abdulrahman Idris</h4>
                <p className="text-[10px] text-[#0048C0] font-ceremonial uppercase font-bold">Secretary-General</p>
                <p className="text-[10px] text-[#14213D]/65">Dept of International Relations &amp; Diplomacy, KASU</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D89030]/25 shadow-sm text-center space-y-1">
                <div className="w-16 h-16 mx-auto rounded-full overflow-hidden relative border-2 border-[#D89030]">
                  <Image src="/images/founders/abdulbasid-bashir-muaz.png" alt="Abdulbasid Bashir Muaz" fill className="object-cover object-top" />
                </div>
                <h4 className="font-display font-bold text-sm text-[#001B45] pt-1">Abdulbasid Bashir Muaz</h4>
                <p className="text-[10px] text-[#0048C0] font-ceremonial uppercase font-bold">Parliamentary Simulations</p>
                <p className="text-[10px] text-[#14213D]/65">Dept of Political Science, KASU</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D89030]/25 shadow-sm text-center space-y-1">
                <div className="w-16 h-16 mx-auto rounded-full overflow-hidden relative border-2 border-[#D89030]">
                  <Image src="/images/founders/abdulmalik-bashir-sakadadi.png" alt="Abdulmalik Bashir Sakadadi" fill className="object-cover object-top" />
                </div>
                <h4 className="font-display font-bold text-sm text-[#001B45] pt-1">Abdulmalik Bashir Sakadadi</h4>
                <p className="text-[10px] text-[#0048C0] font-ceremonial uppercase font-bold">Policy &amp; Treaties</p>
                <p className="text-[10px] text-[#14213D]/65">Dept of International Relations &amp; Diplomacy, KASU</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D89030]/25 shadow-sm text-center space-y-1">
                <div className="w-16 h-16 mx-auto rounded-full overflow-hidden relative border-2 border-[#D89030]">
                  <Image src="/images/founders/aliyu-alto-sada.png" alt="Aliyu Alto Sada" fill className="object-cover object-top" />
                </div>
                <h4 className="font-display font-bold text-sm text-[#001B45] pt-1">Aliyu Alto Sada</h4>
                <p className="text-[10px] text-[#0048C0] font-ceremonial uppercase font-bold">Public Diplomacy</p>
                <p className="text-[10px] text-[#14213D]/65">Dept of Political Science, KASU</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D89030]/25 shadow-sm text-center space-y-1">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#001B45] flex items-center justify-center text-[#F0C050] font-bold font-display text-xl">
                  CF
                </div>
                <h4 className="font-display font-bold text-sm text-[#001B45] pt-1">Co-Founder &amp; Dir. Protocol</h4>
                <p className="text-[10px] text-[#0048C0] font-ceremonial uppercase font-bold">Envoys Protocol</p>
                <p className="text-[10px] text-[#14213D]/65">Dept of International Relations &amp; Diplomacy, KASU</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D89030]/25 shadow-sm text-center space-y-1">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#001B45] flex items-center justify-center text-[#F0C050] font-bold font-display text-xl">
                  CF
                </div>
                <h4 className="font-display font-bold text-sm text-[#001B45] pt-1">Co-Founder &amp; Dir. Liaisons</h4>
                <p className="text-[10px] text-[#0048C0] font-ceremonial uppercase font-bold">Inter-University Affairs</p>
                <p className="text-[10px] text-[#14213D]/65">Dept of Political Science, KASU</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D89030]/25 shadow-sm text-center space-y-1">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#001B45] flex items-center justify-center text-[#F0C050] font-bold font-display text-xl">
                  CF
                </div>
                <h4 className="font-display font-bold text-sm text-[#001B45] pt-1">Co-Founder &amp; Dir. Finance</h4>
                <p className="text-[10px] text-[#0048C0] font-ceremonial uppercase font-bold">Fiduciary Governance</p>
                <p className="text-[10px] text-[#14213D]/65">Dept of International Relations &amp; Diplomacy, KASU</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D89030]/25" />

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-[#D89030]/20 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#001B45] text-[#F0C050] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#001B45]">
                Our Mission
              </h3>
              <p className="text-sm text-[#14213D]/80 leading-relaxed">
                To equip emerging Nigerian and African student leaders with mastery over multilateral diplomacy, parliamentary crisis simulations, ECOWAS/AU treaty mechanisms, and sovereign statecraft through student-led assemblies at Kaduna State University and national university summits.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-[#D89030]/20 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#001B45] text-[#0090D8] flex items-center justify-center">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#001B45]">
                Our Vision
              </h3>
              <p className="text-sm text-[#14213D]/80 leading-relaxed">
                To serve as the premier student-driven diplomatic institute in Africa, fostering sovereign intellectual capacity, continental integration, and ethical statesmanship that connects Nigerian tertiary institutions with the global diplomatic community.
              </p>
            </div>
          </div>

          <div className="border-t border-[#D89030]/25" />

          {/* Research – Dialogue – Action Pillars */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="font-ceremonial text-xs tracking-widest uppercase text-[#C07820] font-bold">
                The Methodology
              </span>
              <h3 className="font-display text-3xl font-bold text-[#001B45]">
                Research • Dialogue • Action
              </h3>
              <p className="text-sm text-[#14213D]/70">
                The tripartite framework governing all GILD curriculums, KASU assemblies, and simulation resolutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-[#D89030]/25 shadow-sm space-y-3">
                <span className="font-ceremonial text-xs font-bold text-[#0048C0]">
                  PILLAR I
                </span>
                <h4 className="font-display text-xl font-bold text-[#001B45]">
                  Academic Research
                </h4>
                <p className="text-xs text-[#14213D]/75 leading-relaxed">
                  Rooted in the academic excellence of KASU&apos;s Department of International Relations &amp; Diplomacy and Political Science, analyzing sovereign treaties, regional security, and African foreign policy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#D89030]/25 shadow-sm space-y-3">
                <span className="font-ceremonial text-xs font-bold text-[#C07820]">
                  PILLAR II
                </span>
                <h4 className="font-display text-xl font-bold text-[#001B45]">
                  Principled Dialogue
                </h4>
                <p className="text-xs text-[#14213D]/75 leading-relaxed">
                  Parliamentary simulations governed by international diplomatic rules of procedure, empowering delegates to caucus, negotiate, and defend sovereign positions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#D89030]/25 shadow-sm space-y-3">
                <span className="font-ceremonial text-xs font-bold text-[#0090D8]">
                  PILLAR III
                </span>
                <h4 className="font-display text-xl font-bold text-[#001B45]">
                  Actionable Resolutions
                </h4>
                <p className="text-xs text-[#14213D]/75 leading-relaxed">
                  Delivering real policy communiqués and resolution drafts to student assemblies, faculty departments, and youth foreign policy symposiums across Nigeria.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Citadels & Student Unions */}
          <div className="pt-6 border-t border-[#D89030]/25 text-center space-y-4">
            <p className="font-ceremonial text-xs tracking-widest uppercase text-[#C07820] font-bold">
              Academic &amp; Student Union Citadels
            </p>
            <p className="text-sm text-[#14213D]/75 max-w-xl mx-auto">
              Proudly collaborating with student associations, departmental societies, and academic forums across Kaduna State University, Ahmadu Bello University, UniAbuja, and Nigerian tertiary institutions.
            </p>
            <div className="pt-2">

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
