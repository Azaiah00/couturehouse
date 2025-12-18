"use client";

import { Shield, Globe, Clock, Mail } from "lucide-react";

const sections = [
  {
    title: "What We Collect",
    body: [
      "Identity and contact details (name, email, brand/company, role).",
      "Campaign inputs (creative briefs, product images, style preferences).",
      "Usage data (device, browser type, pages viewed, time on page, clicks) via cookies/analytics.",
      "Media you upload for rendering or showcasing (photos, videos, references).",
      "Support interactions (emails, forms, chat context).",
    ],
  },
  {
    title: "How We Use It",
    body: [
      "Provide the site experience, language selection, and session continuity.",
      "Process creative requests and deliver rendered content for campaigns.",
      "Match brands with models and present portfolios to interested partners.",
      "Improve performance, security, and reliability of the platform.",
      "Send service notices and optional marketing updates (opt-out anytime).",
    ],
  },
  {
    title: "Cookies & Analytics",
    body: [
      "Essential cookies keep you signed in and remember preferences.",
      "Performance and analytics cookies measure site usage and improve UX.",
      "You can adjust browser settings to limit cookies; essential cookies are required for core functions.",
    ],
  },
  {
    title: "AI, Rendering & UGC",
    body: [
      "Assets you upload may be processed through digital rendering pipelines to place products on models.",
      "We do not sell or share your creative assets with unaffiliated third parties for their own advertising.",
      "You must have rights to any media you provide; avoid sensitive or unlawful content.",
    ],
  },
  {
    title: "Sharing",
    body: [
      "Vetted service providers that support hosting, analytics, rendering, storage, and communications under contract.",
      "Legal, safety, and compliance requirements where we must protect rights, prevent fraud, or respond to lawful requests.",
      "Business transitions (merger, acquisition, or transfer) with notice where feasible.",
    ],
  },
  {
    title: "Retention",
    body: [
      "We keep data only as long as needed for the purposes above, contractual requirements, or legal obligations.",
      "Campaign assets may be retained for brand/model portfolios unless removal is requested (subject to agreed usage rights).",
    ],
  },
  {
    title: "Security",
    body: [
      "Transport encryption (HTTPS) and access controls to protect data in transit.",
      "Principle of least privilege for internal access.",
      "No system is perfectly secure; report issues and we will respond promptly.",
    ],
  },
  {
    title: "Your Choices & Rights",
    body: [
      "Access, update, or delete your personal data, subject to legal limits.",
      "Opt out of marketing emails via footer unsubscribe or by contacting us.",
      "Request restriction or objection to certain processing where applicable.",
    ],
  },
  {
    title: "International Transfers",
    body: [
      "Data may be processed in the U.S. and other locations where our vendors operate.",
      "We use contractual safeguards (e.g., SCCs) where required to protect cross-border transfers.",
    ],
  },
  {
    title: "Children",
    body: [
      "The service is not directed to children under 16. Do not submit data for minors.",
    ],
  },
  {
    title: "Changes",
    body: [
      "We will update this notice when practices change. Continued use means you accept the latest version.",
      "Material changes will be highlighted in-product where feasible.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Email: privacy@couturehouse.co",
      "Office: Couture House Co — New York • Paris • Milan • London • Colombia",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero intro keeps branding concise and clear. */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-rose-gold mb-4">
            <Shield className="w-5 h-5" />
            <span className="tracking-[0.25em] text-xs uppercase">Privacy Policy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Couture House Co Privacy Policy</h1>
          <p className="text-neutral-300 text-lg leading-relaxed">
            This notice explains how Couture House Co (“we”, “us”, “our”) collects, uses, shares, and safeguards your information
            across our website, render workflows, and client/model interactions. Please read it carefully; if you disagree, do not
            use the site or provide data.
          </p>
        </div>

        {/* Quick facts row for confidence cues. */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 mb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-3">
            <Shield className="w-5 h-5 text-rose-gold" />
            <div>
              <p className="text-sm text-neutral-400">Security First</p>
              <p className="text-white font-semibold">Encryption in transit</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-3">
            <Globe className="w-5 h-5 text-rose-gold" />
            <div>
              <p className="text-sm text-neutral-400">Global Partners</p>
              <p className="text-white font-semibold">Contractual safeguards</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-3">
            <Clock className="w-5 h-5 text-rose-gold" />
            <div>
              <p className="text-sm text-neutral-400">Retention</p>
              <p className="text-white font-semibold">Only as long as needed</p>
            </div>
          </div>
        </div>

        {/* Detailed sections */}
        <div className="grid grid-cols-1 gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <h2 className="text-2xl sm:text-3xl font-serif text-white mb-4">{section.title}</h2>
              <ul className="space-y-2 text-neutral-300 leading-relaxed text-sm sm:text-base">
                {section.body.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-rose-gold">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact footer callout */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-rose-gold/15 via-white/5 to-black/30 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-rose-gold mb-2">Questions</p>
            <h3 className="text-xl sm:text-2xl font-serif text-white">Need to exercise a privacy right?</h3>
            <p className="text-neutral-300 mt-2">Email us and include “Privacy” in the subject for fastest routing.</p>
          </div>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white text-sm hover:bg-white/15 transition"
            href="mailto:privacy@couturehouse.co"
          >
            <Mail className="w-4 h-4" />
            privacy@couturehouse.co
          </a>
        </div>
      </div>
    </main>
  );
}

