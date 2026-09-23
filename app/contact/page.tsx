"use client";

import React, { useState } from "react";
import { CheckCircle, Mail, MapPin, Phone, Send, Shield } from "lucide-react";

const CONTACT = {
  name: "GILD INTERNATIONAL",
  email: "contact@gild-international.org",
  phone: "07075737733",
  address: "Kaduna State University (KASU) Main Campus, Tafawa Balewa Way, Kaduna, Nigeria",
};

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="space-y-16 pb-24">
      <section className="py-20 bg-[#001030] border-b border-[#0B2F63] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001B45] border border-[#D89030]/40 text-[#D89030] text-xs font-ceremonial tracking-widest uppercase">
            <Shield className="w-3.5 h-3.5 text-[#0090D8]" />
            Official Contact
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8F8F8]">
            Contact GILD INTERNATIONAL
          </h1>
          <p className="text-sm sm:text-base text-[#F8F8F8]/80 max-w-xl mx-auto">
            Connect directly with GILD INTERNATIONAL for institutional inquiries, partnerships, delegate registration, and general correspondence.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="seal-frame rounded-2xl p-8 sm:p-10 border border-[#D89030]/40">
          <div className="text-center space-y-2 mb-8">
            <span className="font-ceremonial text-xs tracking-widest text-[#D89030] uppercase font-bold">
              One Official Contact
            </span>
            <h2 className="font-display text-3xl font-bold text-[#F8F8F8]">{CONTACT.name}</h2>
            <p className="text-sm text-[#F8F8F8]/70">The central contact for all GILD INTERNATIONAL communications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href={`mailto:${CONTACT.email}`} className="rounded-xl bg-[#001030] border border-[#0B2F63] p-5 hover:border-[#F0C050] transition-colors">
              <Mail className="w-5 h-5 text-[#D89030] mb-3" />
              <p className="text-[11px] uppercase tracking-wider text-[#F8F8F8]/50 mb-1">Email</p>
              <p className="text-sm text-[#F8F8F8] break-words">{CONTACT.email}</p>
            </a>
            <a href={`tel:${CONTACT.phone.replaceAll(" ", "")}`} className="rounded-xl bg-[#001030] border border-[#0B2F63] p-5 hover:border-[#F0C050] transition-colors">
              <Phone className="w-5 h-5 text-[#D89030] mb-3" />
              <p className="text-[11px] uppercase tracking-wider text-[#F8F8F8]/50 mb-1">Phone</p>
              <p className="text-sm text-[#F8F8F8]">{CONTACT.phone}</p>
            </a>
            <div className="rounded-xl bg-[#001030] border border-[#0B2F63] p-5">
              <MapPin className="w-5 h-5 text-[#D89030] mb-3" />
              <p className="text-[11px] uppercase tracking-wider text-[#F8F8F8]/50 mb-1">Headquarters</p>
              <p className="text-sm text-[#F8F8F8]">Kaduna, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 seal-frame rounded-2xl p-8 border border-[#D89030]/40">
            <div className="mb-6 space-y-2">
              <span className="font-ceremonial text-xs tracking-widest text-[#D89030] uppercase font-bold">Direct Message</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F8F8]">Send an Inquiry</h2>
              <p className="text-xs text-[#F8F8F8]/70">Your message will be directed to {CONTACT.name}.</p>
            </div>

            {!formSent ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block text-[#F8F8F8] font-semibold uppercase tracking-wide">
                    Full Name *
                    <input type="text" required value={inquiry.name} onChange={(event) => setInquiry({ ...inquiry, name: event.target.value })} className="mt-1.5 w-full px-3.5 py-2.5 rounded bg-[#001030] border border-[#0B2F63] text-sm font-normal normal-case tracking-normal text-[#F8F8F8] focus:outline-none focus:border-[#D89030]" />
                  </label>
                  <label className="block text-[#F8F8F8] font-semibold uppercase tracking-wide">
                    Email Address *
                    <input type="email" required value={inquiry.email} onChange={(event) => setInquiry({ ...inquiry, email: event.target.value })} className="mt-1.5 w-full px-3.5 py-2.5 rounded bg-[#001030] border border-[#0B2F63] text-sm font-normal normal-case tracking-normal text-[#F8F8F8] focus:outline-none focus:border-[#D89030]" />
                  </label>
                </div>
                <label className="block text-[#F8F8F8] font-semibold uppercase tracking-wide">
                  Subject *
                  <input type="text" required value={inquiry.subject} onChange={(event) => setInquiry({ ...inquiry, subject: event.target.value })} className="mt-1.5 w-full px-3.5 py-2.5 rounded bg-[#001030] border border-[#0B2F63] text-sm font-normal normal-case tracking-normal text-[#F8F8F8] focus:outline-none focus:border-[#D89030]" />
                </label>
                <label className="block text-[#F8F8F8] font-semibold uppercase tracking-wide">
                  Message *
                  <textarea rows={5} required value={inquiry.message} onChange={(event) => setInquiry({ ...inquiry, message: event.target.value })} className="mt-1.5 w-full px-3.5 py-2.5 rounded bg-[#001030] border border-[#0B2F63] text-sm font-normal normal-case tracking-normal text-[#F8F8F8] focus:outline-none focus:border-[#D89030]" />
                </label>
                <button type="submit" className="inline-flex items-center gap-2 px-7 py-3 rounded bg-gradient-to-r from-[#C07820] to-[#F0C050] text-[#000814] font-semibold text-xs uppercase tracking-wider hover:shadow-lg transition-all">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            ) : (
              <div className="p-8 text-center space-y-4 bg-[#001030] rounded-xl border border-[#D89030]">
                <CheckCircle className="w-12 h-12 text-[#F0C050] mx-auto" />
                <h3 className="font-display text-2xl font-bold text-[#F8F8F8]">Message Received</h3>
                <p className="text-xs text-[#F8F8F8]/80">Thank you for contacting GILD INTERNATIONAL. We will respond to your inquiry.</p>
                <button type="button" onClick={() => setFormSent(false)} className="text-xs text-[#F0C050] underline decoration-[#D89030]">Send another message</button>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 seal-frame rounded-2xl p-8 border border-[#D89030]/40 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <span className="font-ceremonial text-xs tracking-widest text-[#0090D8] uppercase font-bold">Official Headquarters</span>
              <h2 className="font-display text-2xl font-bold text-[#F8F8F8]">GILD INTERNATIONAL Secretariat</h2>
              <p className="text-xs text-[#F8F8F8]/75 leading-relaxed">{CONTACT.address}</p>
            </div>
            <div className="pt-5 border-t border-[#0B2F63] space-y-3 text-xs text-[#F8F8F8]/70">
              <p className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#D89030] shrink-0" /> Kaduna, Nigeria</p>
              <p className="flex items-start gap-2"><Mail className="w-4 h-4 text-[#D89030] shrink-0" /> {CONTACT.email}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
