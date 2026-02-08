"use client";

import { Shield, Globe, Clock, Mail } from "lucide-react";

const sections = [
  {
    title: "What We Collect",
    body: [
      "Identity and contact details (name, email, brand/retailer, goals).",
      "Creative inputs (briefs, product images, industry context).",
      "Usage data (device, browser type, pages viewed, time on page) via cookies.",
      "Media assets provided for creative production or optimization.",
      "Studio interactions (emails, form submissions, strategy calls).",
    ],
  },
  {
    title: "How We Use It",
    body: [
      "Deliver studio services, creative production, and performance marketing.",
      "Process strategy requests and manage client campaigns.",
      "Improve the performance and creative quality of our retail solutions.",
      "Maintain security and operational reliability.",
      "Communicate project updates and studio insights.",
    ],
  },
  {
    title: "Cookies & Analytics",
    body: [
      "Essential cookies maintain site functionality and session state.",
      "Performance cookies help us measure studio site engagement.",
      "You can manage cookie preferences via your browser settings.",
    ],
  },
  {
    title: "Creative Assets & Production",
    body: [
      "Assets provided are used solely for the production of client creative and campaigns.",
      "We do not share your proprietary creative assets with third parties for their own use.",
      "Clients must have full rights to any media provided for production.",
    ],
  },
  {
    title: "Sharing & Compliance",
    body: [
      "We share data with trusted vendors that support our production and hosting.",
      "Compliance with legal requests or protection of rights where required.",
      "Cannabis: Clients are responsible for compliance with local regulations and platform policies.",
    ],
  },
  {
    title: "Security & Retention",
    body: [
      "We use standard encryption (HTTPS) to protect data in transit.",
      "Data is retained only as long as necessary for production or legal compliance.",
      "Client assets are managed with secure internal access controls.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "Access, update, or request deletion of your data.",
      "Opt out of studio marketing communications at any time.",
      "Exercise any applicable privacy rights by contacting our studio.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Email: privacy@couturehouse.co",
      "Studio: Couture House — New York • Paris • Milan • London • Colombia",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-rose-gold mb-4">
            <Shield className="w-5 h-5" />
            <span className="tracking-[0.25em] text-xs uppercase">Privacy Policy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Studio Privacy Policy</h1>
          <p className="text-neutral-300 text-lg leading-relaxed">
            This notice explains how Couture House collects, uses, and safeguards your information as a retail marketing partner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 mb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-3">
            <Shield className="w-5 h-5 text-rose-gold" />
            <div>
              <p className="text-sm text-neutral-400">Security First</p>
              <p className="text-white font-semibold">Asset Protection</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-3">
            <Globe className="w-5 h-5 text-rose-gold" />
            <div>
              <p className="text-sm text-neutral-400">Compliance</p>
              <p className="text-white font-semibold">Retail Focused</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-3">
            <Clock className="w-5 h-5 text-rose-gold" />
            <div>
              <p className="text-sm text-neutral-400">Retention</p>
              <p className="text-white font-semibold">Project-Based</p>
            </div>
          </div>
        </div>

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

        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-rose-gold/15 via-white/5 to-black/30 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-rose-gold mb-2">Questions</p>
            <h3 className="text-xl sm:text-2xl font-serif text-white">Privacy Inquiry?</h3>
            <p className="text-neutral-300 mt-2">Email us with "Privacy" in the subject line.</p>
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
