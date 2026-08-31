import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import SiteFooter from "../SiteFooter";
import SiteNav from "../SiteNav";
import BookingSuiteDemo from "./BookingSuiteDemo";

export const metadata: Metadata = {
  title: "Interactive Salon Booking System Demo | Couture House Co.",
  description: "Try a branded salon booking flow and owner dashboard designed for appointments, clients, services, staff availability and follow-up.",
  alternates: { canonical: "/booking-suite/" },
  openGraph: {
    title: "Interactive Salon Booking System Demo | Couture House Co.",
    description: "Explore the client experience and private salon dashboard inside the Couture House booking suite.",
    url: "/booking-suite/",
    type: "website",
    images: [{ url: "/og-v2.png", width: 1536, height: 1024, alt: "Couture House interactive salon booking suite" }],
  },
  twitter: { card: "summary_large_image", title: "Interactive Salon Booking System Demo | Couture House Co.", description: "Explore the client experience and private salon dashboard inside the Couture House booking suite.", images: ["/og-v2.png"] },
};

export default function BookingSuitePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Couture House Salon Booking Suite Demo",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://couturehouse.co/booking-suite/",
    description: "An interactive demonstration of a branded salon client booking flow and private owner dashboard.",
    creator: { "@id": "https://couturehouse.co/#organization" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free interactive product demonstration" },
  };

  return (
    <main className="booking-suite-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <div className="grain" aria-hidden="true" />
      <SiteNav />

      <header className="booking-suite-hero section-pad">
        <div>
          <span className="kicker">Couture House / Interactive product demo</span>
          <h1>A BOOKING SYSTEM<br />THAT FEELS LIKE<br /><em>YOUR BUSINESS.</em></h1>
        </div>
        <div className="booking-suite-hero-deck">
          <p>See the complete journey—from a client choosing a service to the owner managing the day. Every screen can be tailored around your brand, team, policies and workflow.</p>
          <a href="#interactive-demo">Enter the demo <ArrowDown aria-hidden="true" /></a>
          <small><ShieldCheck aria-hidden="true" /> Fictional data. No real appointments or client information.</small>
        </div>
      </header>

      <section className="booking-suite-proof" aria-label="Booking suite capabilities">
        <span><Check aria-hidden="true" /> Branded client flow</span>
        <span><Check aria-hidden="true" /> Live availability logic</span>
        <span><Check aria-hidden="true" /> Owner dashboard</span>
        <span><Check aria-hidden="true" /> Deposit-ready workflow</span>
      </section>

      <section className="booking-suite-demo-wrap section-pad" id="interactive-demo" aria-labelledby="booking-suite-demo-title">
        <header>
          <span className="kicker">Explore both sides</span>
          <h2 id="booking-suite-demo-title">CLIENT EXPERIENCE.<br /><em>OWNER CONTROL.</em></h2>
          <p>Switch views at any time. Buttons update this sample experience only.</p>
        </header>
        <BookingSuiteDemo />
      </section>

      <section className="booking-suite-story section-pad">
        <div><span className="kicker">More than a calendar</span><h2>THE SYSTEM<br /><em>BEHIND THE SERVICE.</em></h2></div>
        <div className="booking-suite-story-grid">
          <article><span>01</span><h3>Shape the journey</h3><p>Explain nuanced services, consultations, preparation and policies before the client reaches checkout.</p></article>
          <article><span>02</span><h3>Protect the schedule</h3><p>Control staff hours, service assignments, time blocks and overlap rules from one private workspace.</p></article>
          <article><span>03</span><h3>Keep the context</h3><p>Bring appointment history, client notes, statuses and follow-up into a workflow your team can actually use.</p></article>
          <article><span>04</span><h3>Connect the tools</h3><p>Add deposits, email, SMS, reminders and analytics around the systems your business already trusts.</p></article>
        </div>
      </section>

      <section className="booking-suite-close section-pad">
        <span className="kicker">Built for salons, stylists, barbers and beauty teams</span>
        <h2>YOUR CLIENT JOURNEY<br />SHOULD NOT LOOK<br /><em>OFF THE SHELF.</em></h2>
        <div><p>Bring us the booking bottleneck. We will map the right combination of experience, automation and integrations around it.</p><Link href="/start-a-project/?service=booking-suite">Build my booking system <ArrowUpRight aria-hidden="true" /></Link><Link href="/services/booking-portals-automation/">See what the engagement includes</Link></div>
      </section>

      <SiteFooter />
    </main>
  );
}
