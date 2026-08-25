import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import SiteFooter from "../SiteFooter";
import SiteNav from "../SiteNav";
import AuditForm from "./AuditForm";

export const metadata: Metadata = {
  title: "Free Salon Website Review | Couture House Co.",
  description: "Request a focused three-point website review for your salon, hair-styling business or textured-hair brand from Couture House Co.",
  alternates: { canonical: "/salon-website-audit/" },
  openGraph: {
    title: "Is Your Salon Website Ready for Your Next Client?",
    description: "Get three focused observations about trust, booking and discovery from Couture House Co.",
    url: "/salon-website-audit/",
    type: "website",
    images: [{ url: "/audit/salon-audit-hero-v1.png", width: 1122, height: 1402, alt: "Couture House salon website review" }],
  },
};

const dimensions = [
  { number: "01", title: "Get found", copy: "Can Google and a first-time visitor understand your services, expertise and service area?" },
  { number: "02", title: "Earn trust", copy: "Does the experience organize your strongest work, reviews and point of difference?" },
  { number: "03", title: "Make booking easier", copy: "Does the journey prepare the right client before sending them to the calendar?" },
];

const faqs = [
  ["Is this an automated website score?", "No. Couture House reviews the visible website, mobile journey, Instagram and booking path, then sends three focused human observations."],
  ["Will you redesign the website for free?", "No. The review identifies the first opportunities. Strategy, design, development and implementation are separate engagements."],
  ["Will the review be posted publicly?", "No. A submission is private. Public teardowns or case studies require separate approval."],
  ["Do you guarantee more bookings or Google rankings?", "No. We identify practical opportunities and build stronger foundations, but no responsible studio can guarantee platform rankings or business results."],
];

export default function SalonWebsiteAuditPage() {
  return (
    <main className="audit-page">
      <div className="grain" aria-hidden="true" />
      <SiteNav />
      <header className="audit-hero">
        <Image className="audit-hero-image" src="/audit/salon-audit-hero-v1.png" alt="Abstract sculptural loc forms in warm editorial light" fill priority sizes="100vw" />
        <div className="audit-hero-shade" />
        <div className="audit-hero-copy">
          <span className="kicker">Free / Three-point salon website review</span>
          <h1>IS YOUR WEBSITE<br />READY FOR YOUR<br /><em>NEXT CLIENT?</em></h1>
          <p>Send us your website and the outcome you want. We&apos;ll identify three focused opportunities to improve trust, booking or discovery.</p>
          <a href="#request-review">Request the review <ArrowDown aria-hidden="true" /></a>
        </div>
        <div className="audit-hero-meta"><span>Black-owned salons</span><span>Hair stylists</span><span>Textured-hair brands</span></div>
      </header>

      <section className="audit-dimensions section-pad" aria-labelledby="audit-dimensions-title">
        <header><span className="kicker">What we look for</span><h2 id="audit-dimensions-title">THREE LENSES.<br /><em>ONE CLEARER NEXT STEP.</em></h2></header>
        <div>{dimensions.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="audit-proof section-pad" aria-labelledby="audit-proof-title">
        <div className="audit-proof-copy"><span className="kicker">Built inside the niche</span><h2 id="audit-proof-title">WE KNOW WHAT<br />THE CLIENT NEEDS<br /><em>TO FEEL.</em></h2><p>Couture House builds digital worlds for salons, stylists and hair-care businesses. The review is grounded in real service journeys—not generic design advice.</p><Link href="/work/">Explore selected work <ArrowUpRight aria-hidden="true" /></Link></div>
        <div className="audit-proof-images"><Image src="/portfolio/dreadlocks-salon.png" alt="The Dreadlocks Salon website by Couture House" width={1905} height={848} sizes="(max-width:760px) 100vw, 45vw" unoptimized /><Image src="/portfolio/beverlys-feature-2026.webp" alt="Beverly's of Nashville website by Couture House" width={1234} height={712} sizes="(max-width:760px) 100vw, 45vw" unoptimized /></div>
      </section>

      <section className="audit-request section-pad" id="request-review" aria-labelledby="audit-request-title">
        <div className="audit-request-intro"><span className="kicker">Your website / Our eyes</span><h2 id="audit-request-title">SEND THE LINK.<br /><em>WE'LL FIND THE SIGNAL.</em></h2><p>This is for active salon, stylist and textured-hair businesses that want a more credible, useful and ownable digital presence.</p><ul><li>Three focused observations</li><li>One genuine strength to build on</li><li>A clear next-step recommendation</li></ul></div>
        <AuditForm />
      </section>

      <section className="audit-faq section-pad" aria-labelledby="audit-faq-title"><header><span className="kicker">Before you send it</span><h2 id="audit-faq-title">GOOD<br /><em>QUESTIONS.</em></h2></header><div>{faqs.map(([question,answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></section>
      <SiteFooter />
    </main>
  );
}
