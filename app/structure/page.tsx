import React from "react";
import Image from "next/image";
import OrgChartPyramid from "@/components/OrgChartPyramid";
import CompassDivider from "@/components/CompassDivider";

import { Shield, Users } from "lucide-react";

export const metadata = {
  title: "Organizational Structure | GILD International",
  description: "Meet the delegates and explore the organizational structure of GILD International.",
};

const LEADERSHIP = [
  {
    name: "Suleiman Yusuf Othman",
    image: "/images/founders/Suleiman Yusuf Othman.png",
    role: "High Commissioner & Lead Founder",
    detail: "Executive Council",
  },
  {
    name: "Kashim Hamza",
    image: "/images/founders/Kashim Hamza.jpg",
    role: "Head Delegate",
    detail: "Founding Directorate",
  },
  {
    name: "Abdulaziz Abdulrahman Idris",
    image: "/images/founders/abdulaziz-abdulrahman-idris.png",
    role: "Founding Delegate",
    detail: "Diplomatic Corps",
  },
  {
    name: "Abdulbasid Bashir Muaz",
    image: "/images/founders/abdulbasid-bashir-muaz.png",
    role: "Founding Delegate",
    detail: "Diplomatic Corps",
  },
];

const DELEGATES = [
  ["Abdulmajeed Iliyasu", "Abdulmajeed-Iliyasu.jpg"],
  ["Abdulmalik Hassan", "Abdulmalik Hassan.jpg"],
  ["Adamu Adamu Garba", "Adamu Adamu Garba.jpg"],
  ["Adamu Umar Sambo", "Adamu Umar Sambo.jpg"],
  ["Agunkejoye Glory", "Agunkejoye Glory.jpg"],
  ["Aisha Abubakar Dankanjiba", "Aisha Abubakar Dankanjiba.jpg"],
  ["Sadiq Muhammad Kasum", "Sadiq Muhammad Kasum.jpg"],
  ["Aisha Ahmad Garba", "Aisha Ahmad Garba.jpg"],
  ["Aisha Muhammad Chiroma", "Aisha Muhammad Chiroma.jpg"],
  ["Aisha Ahmed Umar", "Aisha-Ahmed-Umar.jpg"],
  ["Alamin Sanusi", "Alamin Sanusi.png"],
  ["Amina Mukhtar Anka", "Amina Mukhtar Anka.jpg"],
  ["Asiya Abdulkadir", "Asiya-Abdulkadir.jpg"],
  ["Blessing James Tabat", "Blessing James Tabat.jpg"],
  ["Charity Nafama Ephraim", "Charity Nafama Ephraim.jpg"],
  ["Dorcas Daniel", "Dorcas Daniel.jpg"],
  ["Ekumi Miriam", "Ekumi Miriam.jpg"],
  ["Faridat Olorode Motunrayo", "Faridat-Olorode-Motunrayo.jpg"],
  ["Fatima Salisu", "Fatima Salisu.jpg"],
  ["Fatima Gidado", "Fatima-Gidado.jpg"],
  ["Habiba Adamu", "Habiba-Adamu.jpg"],
  ["Hafsat Bashir Babajo", "Hafsat Bashir Babajo.jpg"],
  ["Halima Zakari Chawai", "Halima Zakari Chawai.jpg"],
  ["Hannatu Idris", "Hannatu Idris.jpg"],
  ["Hauwau Abdullahi Salis", "Hauwau Abdullahi Salis.jpg"],
  ["Hindatu Abdullahi Akilu", "Hindatu Abdullahi Akilu.jpg"],
  ["Idris Sanusi", "Idris Sanusi.png"],
  ["Jalila Ibrahim", "Jalila Ibrahim.jpg"],
  ["Jesse Emmanuel", "Jesse Emmanuel.jpg"],
  ["Jewel Gandu", "Jewel Gandu.jpg"],
  ["Johnson Joseph", "Johnson-Joseph.jpg"],
  ["Joshua Lazarus Yushau", "Joshua-Lazarus-Yushau.jpg"],
  ["Maimuna Iman Yazid", "Maimuna-Iman-Yazid.jpg"],
  ["Muhammad Nana Juwairiyya", "Muhammad Nana Juwairiyya.jpg"],
  ["Musab Muhammad Musa", "Musab-Muhammad-Musa.jpg"],
  ["Nafisa Mukhtar Yabo", "Nafisa Mukhtar Yabo.jpg"],
  ["Nana Firdausi Ahmed", "Nana-Firdausi-Ahmed.jpg"],
  ["Niimat Shuaib", "Niimat Shuaib.jpg"],
  ["Praise Afolayan", "Praise Afolayan.jpg"],
  ["Rahma Muhammad Sueiman", "Rahma Muhammad Sueiman.jpg"],
  ["Vanessa Wamju", "Vanessa Wamju.jpg"],
  ["Zaina Baba Ahmed", "Zaina Baba Ahmed.jpg"],
];

export default function StructurePage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="py-20 bg-[#001030] border-b border-[#0B2F63] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001B45] border border-[#D89030]/40 text-[#D89030] text-xs font-ceremonial tracking-widest uppercase">
            <Users className="w-3.5 h-3.5 text-[#0090D8]" />
            Delegates &amp; Governance
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8F8F8]">Organizational Structure</h1>
          <p className="text-sm sm:text-base text-[#F8F8F8]/80 max-w-xl mx-auto">
            Meet the people behind GILD INTERNATIONAL and explore the structure that connects our leadership, founding delegates, and diplomatic corps.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-ceremonial text-xs tracking-widest text-[#D89030] uppercase font-bold">Executive &amp; Founding Leadership</span>
          <h2 className="font-display text-3xl font-bold text-[#F8F8F8]">The Delegates Guiding GILD</h2>
          <p className="text-sm text-[#F8F8F8]/70">Recognized leadership and founding delegates serving the institution.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LEADERSHIP.map((delegate) => (
            <div key={delegate.name} className="seal-frame rounded-xl overflow-hidden border border-[#D89030]/40 group">
              <div className="relative h-72 bg-[#001030]">
                <Image src={delegate.image} alt={delegate.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="p-5 space-y-1">
                <h3 className="font-display text-lg font-bold text-[#F8F8F8]">{delegate.name}</h3>
                <p className="text-xs text-[#F0C050] font-ceremonial uppercase tracking-wider">{delegate.role}</p>
                <p className="text-xs text-[#F8F8F8]/60">{delegate.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CompassDivider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-2">
            <span className="font-ceremonial text-xs tracking-widest text-[#D89030] uppercase font-bold">GILD International</span>
            <h2 className="font-display text-3xl font-bold text-[#F8F8F8]">Delegate Directory</h2>
            <p className="text-sm text-[#F8F8F8]/70">The wider delegate corps represented in the founding archive.</p>
          </div>
          <span className="text-xs text-[#0090D8] font-mono">{DELEGATES.length} DELEGATES</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {DELEGATES.map(([name, filename]) => (
            <div key={name} className="rounded-xl overflow-hidden bg-[#001B45] border border-[#D89030]/25 hover:border-[#F0C050] transition-colors group">
              <div className="relative aspect-[4/5] bg-[#001030]">
                <Image src={`/images/founders/${filename}`} alt={name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw" />
              </div>
              <div className="p-3">
                <h3 className="font-display text-sm font-bold text-[#F8F8F8] leading-tight">{name}</h3>
                <p className="mt-1 text-[10px] text-[#0090D8] font-ceremonial uppercase tracking-wider">Delegate Corps</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs text-[#F0C050] font-ceremonial tracking-wider uppercase">Institutional Pyramid</p>
          <p className="text-xs text-[#F8F8F8]/60 mt-1">Explore the tiers connecting leadership, directorates, and the diplomatic corps.</p>
        </div>
        <OrgChartPyramid />
      </section>

      <CompassDivider />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="seal-frame rounded-xl p-8 border border-[#D89030]/30 space-y-6">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-[#D89030]" />
            <h3 className="font-display text-2xl font-bold text-[#F8F8F8]">Reporting Standards &amp; Multilateral Protocol</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#F8F8F8]/75 leading-relaxed">
            <p>Each Directorate maintains direct reporting authority to the Deputy High Commissioner / Secretary-General, ensuring unified strategic coordination across intergovernmental missions, universities, and sovereign partners.</p>
            <p>The Diplomat Corps operates through independent standing committees, drafting resolutions and presenting bilateral accords under the direct mentorship of our Regional Ambassadors and Council of Directors.</p>
          </div>

        </div>
      </section>
    </div>
  );
}
