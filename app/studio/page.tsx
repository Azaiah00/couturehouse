import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Studio | Couture House Co.",
  description:
    "Meet Couture House Co., the digital atelier creating human-centered websites, apps, automations and content for hair, beauty and culture.",
};

const principles = [
  {
    number: "01",
    title: "Human before hype.",
    copy: "The first question is never what can we animate. It is what should someone feel, understand and do next?",
  },
  {
    number: "02",
    title: "Strategy behind spectacle.",
    copy: "Every beautiful moment earns its place by clarifying the brand, guiding the journey or making action easier.",
  },
  {
    number: "03",
    title: "Systems that hold.",
    copy: "The experience continues behind the screen through thoughtful content systems, workflows and automation.",
  },
];

export default function StudioPage() {
  return (
    <main className="studio-page">
      <div className="grain" aria-hidden="true" />

      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="wordmark" href="/" aria-label="Couture House home">
          <img className="nav-logo" src="/brand/footer-logo.png" alt="" />
          <span className="wordmark-copy">
            Digital atelier
            <small>Beauty / Culture / Business</small>
          </span>
        </Link>
        <div className="nav-links">
          <Link href="/#work">Work</Link>
          <Link href="/#services">Services</Link>
          <Link href="/studio" aria-current="page">Studio</Link>
        </div>
        <a
          className="nav-cta magnetic"
          href="https://www.couturehouse.co/contact"
          target="_blank"
          rel="noreferrer"
        >
          Start a project <span aria-hidden="true">&#8599;</span>
        </a>
      </nav>

      <section className="studio-hero">
        <div className="studio-grid" aria-hidden="true" />
        <div className="studio-orbit studio-orbit-large" aria-hidden="true"><i /></div>
        <div className="studio-orbit studio-orbit-small" aria-hidden="true"><i /></div>
        <div className="studio-meta">
          <span>New York / Everywhere</span>
          <span>Strategy / Design / Development / Motion</span>
        </div>
        <div className="studio-title-wrap">
          <p>The Couture House point of view</p>
          <h1 className="studio-title">
            <span>DIGITAL,</span>
            <span>BUT MAKE IT <em>feel</em></span>
            <span>HUMAN.</span>
          </h1>
        </div>
        <div className="studio-hero-foot">
          <p>
            Technology should never flatten the people, culture or craft behind
            a business. We design digital experiences with a pulse.
          </p>
          <a href="#belief">Our point of view <span>&darr;</span></a>
        </div>
      </section>

      <section className="studio-belief section-pad" id="belief">
        <span className="kicker">What we believe</span>
        <h2>
          Beautiful is the invitation.
          <em>Human is what makes people stay.</em>
        </h2>
        <div className="studio-belief-copy">
          <p>
            Couture House is a digital atelier for businesses with something
            real to say. We bring strategy, design, technology and content into
            one considered world so every screen feels connected to the work.
          </p>
          <p>
            Hair and beauty are our specialty because these businesses carry
            artistry, ritual, identity and community all at once. They deserve
            digital experiences with the same depth.
          </p>
        </div>
      </section>

      <section className="studio-principles section-pad">
        <header>
          <span className="kicker">How the work gets its feeling</span>
          <h2>THE CODE<br /><em>BEHIND THE CRAFT.</em></h2>
        </header>
        <div className="studio-principle-grid">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-collage section-pad">
        <div className="studio-collage-copy">
          <span className="kicker">Built for the culture</span>
          <h2>OUR NICHE<br />IS A <em>WORLD.</em></h2>
          <p>
            Salons, stylists and hair-care brands are not a narrow market to
            us. They are a universe of expertise, expression and possibility.
          </p>
          <Link href="/#work">See the work <span>&#8599;</span></Link>
        </div>
        <div className="studio-collage-grid">
          <figure className="studio-collage-main">
            <img src="/brand/winter-look-02.png" alt="Couture House editorial fashion portrait" />
          </figure>
          <figure>
            <img src="/work/magic-coils/extra/04.webp" alt="Magic Coils campaign portrait" />
          </figure>
          <figure>
            <img src="/work/magic-coils/extra/06.webp" alt="Magic Coils lifestyle campaign" />
          </figure>
        </div>
      </section>

      <section className="studio-poster-break section-pad">
        <img src="/brand/couture-house-poster.png" alt="Couture House digital worlds for hair, beauty and culture campaign" />
      </section>

      <section className="studio-final">
        <span className="kicker">Bring the vision</span>
        <h2>LET&apos;S BUILD<br />SOMETHING WITH<br /><em>A PULSE.</em></h2>
        <p>Websites, apps, automations and content shaped around your world.</p>
        <a href="https://www.couturehouse.co/contact" target="_blank" rel="noreferrer">
          Start a project <span>&#8599;</span>
        </a>
      </section>

      <footer>
        <Link className="footer-logo-link" href="/" aria-label="Couture House home">
          <img src="/brand/footer-logo.png" alt="Couture House" />
        </Link>
        <p>Digital atelier for hair, beauty, culture and ambitious businesses.</p>
        <div>
          <Link href="/#work">Work &#8599;</Link>
          <Link href="/#services">Services &#8599;</Link>
          <a href="https://www.instagram.com/couturehouse.co/" target="_blank" rel="noreferrer">Instagram &#8599;</a>
        </div>
        <small>&copy; 2026 Couture House Co.</small>
      </footer>
    </main>
  );
}
