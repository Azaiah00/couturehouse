import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfterSlider from "../BeforeAfterSlider";
import PageSoundtrack from "../PageSoundtrack";

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
    title: "Workflows",
    promise: "Quiet systems that keep leads warm, information organized and the business moving while you do the work only you can do.",
    includes: ["Lead and inquiry routing", "CRM and intake systems", "Booking follow-up", "Client communication", "Content operations", "Campaign automation"],
    ideal: "Growing teams losing time to repeated tasks, scattered information or inconsistent follow-up.",
  },
  {
    number: "04",
    title: "Content",
    promise: "A connected image system with enough character to stop the scroll and enough structure to keep working after one post.",
    includes: ["Creative direction", "Campaign concepts", "Archive photo revival", "Still imagery", "Motion and short-form video", "Product placements", "Launch systems", "Social and web assets"],
    ideal: "New brands, product launches, seasonal campaigns and businesses whose current content does not match the quality of their work.",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <PageSoundtrack src="/audio/services.mp3" title="Untitled (Remastered) I" />
      <div className="grain" aria-hidden="true" />
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="wordmark" href="/" aria-label="Couture House home"><img className="nav-logo" src="/brand/footer-logo.png" alt="" /><span className="wordmark-copy">Digital atelier<small>Beauty / Culture / Business</small></span></Link>
        <div className="nav-links"><Link href="/work">Work</Link><Link href="/services" aria-current="page">Services</Link><Link href="/studio">Studio</Link></div>
        <Link className="nav-cta magnetic" href="/start-a-project">Start a project <span aria-hidden="true">&#8599;</span></Link>
      </nav>

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
          <article className="service-detail" id={service.title.toLowerCase()} key={service.number}>
            <div className="service-detail-title"><span>{service.number}</span><h2>{service.title}</h2></div>
            <div className="service-detail-body">
              <p className="service-detail-promise">{service.promise}</p>
              <div className="service-detail-columns"><div><small>What it can include</small><ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul></div><div><small>Best for</small><p>{service.ideal}</p></div></div>
              <Link href={`/start-a-project?service=${service.title.toLowerCase()}`}>Build with us <span>&#8599;</span></Link>
            </div>
          </article>
        ))}
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
          <Link href="/work#content-revival">See the transformations <span>&#8599;</span></Link>
          <small>AI-assisted creative enhancement with human art direction and finishing.</small>
        </div>
        <BeforeAfterSlider
          before="/work/photo-revival/08-precision-flat-loc-design-before.webp"
          after="/work/photo-revival/08-precision-flat-loc-design-after.webp"
          alt="precision flat-loc design photographed from above"
          title="Precision Flat-Loc Design"
          note="From distracting salon snapshot to a focused, brand-ready detail image."
          priority
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

      <section className="page-cta"><span className="kicker">Bring the goal, bottleneck or big idea</span><h2>LET&apos;S SHAPE<br /><em>THE RIGHT SYSTEM.</em></h2><Link href="/start-a-project">Start a project <span>&#8599;</span></Link></section>

      <footer><Link className="footer-logo-link" href="/"><img src="/brand/footer-logo.png" alt="Couture House" /></Link><p>Digital atelier for hair, beauty, culture and ambitious businesses.</p><div><Link href="/work">Work &#8599;</Link><Link href="/studio">Studio &#8599;</Link><a href="https://www.instagram.com/couturehouse.co/" target="_blank" rel="noreferrer">Instagram &#8599;</a></div><small>&copy; 2026 Couture House Co.</small></footer>
    </main>
  );
}
