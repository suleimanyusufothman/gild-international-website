"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/structure", label: "Structure" },
  { href: "/programs", label: "Programs" },
  { href: "/summits", label: "Summits" },
  { href: "/classes/2026", label: "Classes" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#001B45]/95 backdrop-blur-md border-b border-[#D89030]/35 shadow-lg shadow-[#000814]/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Crest & Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0C050] rounded-lg"
          aria-label="GILD International Home"
        >
          <div className="relative w-11 h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="GILD International Crest"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-ceremonial text-lg sm:text-xl font-bold tracking-wider text-[#F8F8F8] group-hover:text-[#F0C050] transition-colors flex items-center gap-1.5">
              GILD
              <span className="text-[#D89030] font-normal text-xs sm:text-sm tracking-widest uppercase">
                International
              </span>
            </span>
            <span className="text-[10px] tracking-widest text-[#D89030]/80 font-sans uppercase hidden sm:block">
              Global Institute for Leadership &amp; Diplomacy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-hover text-sm font-medium transition-colors py-1 ${
                  isActive
                    ? "text-[#F0C050] nav-link-active"
                    : "text-[#F8F8F8]/85 hover:text-[#F8D870]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>


        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F8F8F8] hover:text-[#F0C050] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0C050] rounded"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#001B45]/98 border-b border-[#D89030]/30 px-6 py-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-3 pt-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#001030] text-[#F0C050] border-l-2 border-[#D89030]"
                      : "text-[#F8F8F8]/90 hover:bg-[#001030]/50 hover:text-[#F8D870]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

        </div>
      )}
    </header>
  );
}
