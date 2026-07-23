import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BeforeAfterSlider from "../BeforeAfterSlider";
import AutoPlayVideo from "../AutoPlayVideo";
import PageSoundtrack from "../PageSoundtrack";
import SiteFooter from "../SiteFooter";
import SiteNav from "../SiteNav";

export const metadata: Metadata = {
  title: "Services | Couture House Co.",
  description: "Website design, apps, workflow automation and content systems for salons, stylists, hair-care brands and ambitious businesses.",
};

const services = [
  {
    number: "01",
    title: "Websites",
    promise: "A digital front door people want to enter—and an easier path from attention to action.",
    includes: ["Brand and audience strategy", "UX architecture and conversion journeys", "Editorial UI design", "Responsive development", "Booking and e-commerce", "SEO and performance foundations"],
    ideal: "Salons, independent stylists, educators, product brands and businesses ready to replace a generic template with a real point of view.",
  },
  {
    number: "02",
    title: "Apps",
    promise: "Useful digital products that turn a strong idea into something clients, communities and teams can use every day.",
    includes: ["Product strategy", "User journeys", "Interface design", "Interactive prototypes", "Client portals", "Mobile-first experiences"],
    ideal: "Memberships, education platforms, internal tools, marketplaces and new digital services that need clarity before code.",
  },
  {
    number: "03",
    title: "Workflows + Automation",
    promise: "Connected systems, business hubs and automations that keep leads warm, information organized and the operation moving while you do the work only you can do.",
    includes: ["Lead and inquiry routing", "CRM and intake systems", "Booking and payment workflows", "Client communication", "Business hubs and dashboards", "Content operations", "AI consulting and integration planning", "Campaign automation"],
    ideal: "Growing businesses losing time to repeated tasks, scattered information, disconnected tools or inconsistent follow-up.",
  },
  {
    number: "04",
    title: "Content",
    promise: "A connected visual and sound system with enough character to stop the scroll and enough structure to keep working after one post.",
    includes: ["Creative direction", "Campaign concepts", "Archive photo revival", "Still imagery", "Motion and short-form video", "Original music and instrumentals", "Audio branding", "Product placements", "Launch systems", "Social and web assets"],
    ideal: "New brands, product launches, seasonal campaigns and businesses whose current content does not match the quality of their work.",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <PageSoundtrack src="/audio/services.mp3" title="Untitled (Remastered) I" />
      <div className="grain" aria-hidden="true" />
      <SiteNav />

      <header className="services-page-hero section-pad">
        <span className="kicker">Design on the surface / systems underneath</span>
        <h1>FROM FIRST<br />IMPRESSION TO<br /><em>DAILY OPERATION.</em></h1>
        <p>One studio for the website people see, the content that brings them there and the systems that keep everything moving.</p>
      </header>

      <section className="services-world section-pad">
        <div className="services-world-copy"><span className="kicker">Built around your real business</span><h2>ONE WORLD.<br /><em>FOUR WAYS IN.</em></h2></div>
        <p>Start with the most urgent need. We will shape the right engagement around the audience, business goal and assets already in place.</p>
      </section>

      <section className="service-detail-list section-pad" aria-label="Couture House services">
        {services.map((service) => (
          <article className="service-detail" id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")} key={service.number}>
            <div className="service-detail-title"><span>{service.number}</span><h2>{service.title}</h2></div>
            <div className="service-detail-body">
              <p className="service-detail-promise">{service.promise}</p>
              <div className="service-detail-columns"><div><small>What it can include</small><ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul></div><div><small>Best for</small><p>{service.ideal}</p></div></div>
              <Link href={`/start-a-project?service=${service.title.toLowerCase()}`}>Build with us <ArrowUpRight className="link-icon" aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </section>

      <section className="service-motion-showcase section-pad" aria-labelledby="service-motion-title">
        <header className="service-motion-head">
          <span className="kicker">Content creation / Sacrificial Conversations</span>
          <h2 id="service-motion-title">STORIES BUILT<br /><em>TO KEEP MOVING.</em></h2>
          <p>Short-form editorial reels that extend a brand beyond a single post—built for launches, social storytelling and a consistent visual presence between every major moment.</p>
        </header>
        <div className="service-motion-grid">
          <figure>
            <AutoPlayVideo src="/services/sacrificial-conversations-reel-01.mp4" ariaLabel="Sacrificial Conversations editorial campaign reel" />
            <figcaption><span>01</span> Editorial motion / Sacrificial Conversations</figcaption>
          </figure>
          <figure>
            <AutoPlayVideo src="/services/sacrificial-conversations-reel-02.mp4" ariaLabel="Sacrificial Conversations short-form social reel" />
            <figcaption><span>02</span> Social storytelling / Sacrificial Conversations</figcaption>
          </figure>
        </div>
      </section>

      <section className="revival-service section-pad" aria-labelledby="revival-service-title">
        <div className="revival-service-copy">
          <span className="kicker">Content revival / Real salon archives</span>
          <h2 id="revival-service-title">OLD PHOTOS.<br /><em>NEW PRESENCE.</em></h2>
          <p>We turn valuable but dated salon photos into polished, brand-ready content—preserving the real person and work while rebuilding the atmosphere around them.</p>
          <ul>
            <li>Art direction + distraction removal</li>
            <li>Background reconstruction + luxury styling</li>
            <li>Color finishing + web-ready presentation</li>
          </ul>
          <Link href="/work#content-revival">See the transformations <ArrowUpRight className="link-icon" aria-hidden="true" /></Link>
          <small>Creative enhancement guided by human art direction, careful finishing and the story already present in the original.</small>
        </div>
        <BeforeAfterSlider
          before="/work/photo-revival/08-precision-flat-loc-design-before.webp"
          after="/work/photo-revival/08-precision-flat-loc-design-after.webp"
          alt="precision flat-loc design photographed from above"
          title="Precision Flat-Loc Design"
          note="From distracting salon snapshot to a focused, brand-ready detail image."
        />
      </section>

      <section className="beauty-business section-pad">
        <div><span className="kicker">Why hair + beauty</span><h2>WE KNOW THE<br /><em>CHAIR AND THE CART.</em></h2></div>
        <div className="beauty-business-grid">
          <article><span>01</span><h3>Service discovery</h3><p>Make expertise, pricing, preparation and the next step easy to understand.</p></article>
          <article><span>02</span><h3>Booking momentum</h3><p>Reduce friction between seeing the work and choosing an appointment.</p></article>
          <article><span>03</span><h3>Product storytelling</h3><p>Turn ingredients, ritual and results into a compelling path to purchase.</p></article>
          <article><span>04</span><h3>Client retention</h3><p>Build thoughtful follow-up and content rhythms around a real relationship.</p></article>
        </div>
      </section>

      <section className="engagement-flow section-pad">
        <header><span className="kicker">What working together feels like</span><h2>VISION IN.<br /><em>MOMENTUM OUT.</em></h2></header>
        <ol><li><span>01</span><h3>Discovery</h3><p>We listen for the business goal, audience truth and emotional target.</p></li><li><span>02</span><h3>Direction</h3><p>You receive a focused recommendation for the experience and scope.</p></li><li><span>03</span><h3>Creation</h3><p>Strategy, design, build and content come together in a visible rhythm.</p></li><li><span>04</span><h3>Launch</h3><p>We refine, release and hand over the tools needed to keep moving.</p></li></ol>
      </section>

      <section className="page-cta"><span className="kicker">Bring the goal, bottleneck or big idea</span><h2>LET&apos;S SHAPE<br /><em>THE RIGHT SYSTEM.</em></h2><Link href="/start-a-project">Start a project <ArrowUpRight className="link-icon" aria-hidden="true" /></Link></section>

      <SiteFooter />
    </main>
  );
}
