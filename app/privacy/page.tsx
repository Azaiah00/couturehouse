"use client";

import { Shield, Globe, Clock, Mail } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

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
    <main className="bg-charcoal text-white min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16">
          <div className="flex items-center gap-3 text-rose-gold mb-6">
            <Shield className="w-5 h-5" />
            <span className="tracking-widest text-xs uppercase font-sans">Privacy Policy</span>
          </div>
          <TextReveal as="h1" className="text-5xl md:text-7xl font-serif text-white uppercase tracking-widest mb-6">
            Studio <span className="text-rose-gold">Privacy</span>
          </TextReveal>
          <p className="text-neutral-400 text-lg font-sans leading-relaxed">
            This notice explains how Couture House collects, uses, and safeguards your information as a retail marketing partner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel-dark rounded-xl border border-white/5 p-6 flex items-center gap-4">
            <Shield className="w-6 h-6 text-rose-gold" />
            <div>
              <p className="text-xs text-neutral-500 font-sans uppercase tracking-widest">Security First</p>
              <p className="text-white font-serif text-lg">Asset Protection</p>
            </div>
          </div>
          <div className="glass-panel-dark rounded-xl border border-white/5 p-6 flex items-center gap-4">
            <Globe className="w-6 h-6 text-rose-gold" />
            <div>
              <p className="text-xs text-neutral-500 font-sans uppercase tracking-widest">Compliance</p>
              <p className="text-white font-serif text-lg">Retail Focused</p>
            </div>
          </div>
          <div className="glass-panel-dark rounded-xl border border-white/5 p-6 flex items-center gap-4">
            <Clock className="w-6 h-6 text-rose-gold" />
            <div>
              <p className="text-xs text-neutral-500 font-sans uppercase tracking-widest">Retention</p>
              <p className="text-white font-serif text-lg">Project-Based</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="glass-panel-dark rounded-xl border border-white/5 p-8 md:p-10"
            >
              <h2 className="text-2xl font-serif text-white mb-6 uppercase tracking-wider">{section.title}</h2>
              <ul className="space-y-4 text-neutral-400 font-sans leading-relaxed text-sm md:text-base">
                {section.body.map((line) => (
                  <li key={line} className="flex gap-4">
                    <span className="text-rose-gold mt-1">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-panel border border-rose-gold/20 rounded-xl p-8 md:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-rose-gold mb-2 font-sans">Questions</p>
            <h3 className="text-2xl font-serif text-white uppercase tracking-wider">Privacy Inquiry?</h3>
            <p className="text-neutral-400 mt-2 font-sans">Email us with "Privacy" in the subject line.</p>
          </div>
          <a
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-white text-sm font-sans hover:bg-white hover:text-charcoal transition-all uppercase tracking-widest whitespace-nowrap"
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
