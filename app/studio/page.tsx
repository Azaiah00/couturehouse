import type { Metadata } from "next";
import Link from "next/link";
import PageSoundtrack from "../PageSoundtrack";

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

const practice = [
  { number: "01", title: "Strategy", copy: "We find the sharpest story, the clearest audience need and the action the experience must earn." },
  { number: "02", title: "Design", copy: "We turn that strategy into an expressive visual language and a journey that feels natural on every screen." },
  { number: "03", title: "Technology", copy: "We build the website, product or workflow with speed, accessibility and future growth in mind." },
  { number: "04", title: "Content", copy: "We create the stills, motion and reusable campaign system that keeps the digital world alive after launch." },
];

export default function StudioPage() {
  return (
    <main className="studio-page">
      <PageSoundtrack src="/audio/destiny-sax.mp3" title="Destiny Sax" />
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
          <Link href="/work">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/studio" aria-current="page">Studio</Link>
        </div>
        <Link className="nav-cta magnetic" href="/start-a-project">
          Start a project <span aria-hidden="true">&#8599;</span>
        </Link>
      </nav>

      <section className="studio-world-opening" aria-labelledby="studio-opening-title">
        <div className="studio-world-opening-copy">
          <span className="kicker">Couture House Co. / The studio</span>
          <h1 id="studio-opening-title">WHERE CULTURE<br />MEETS <em>CRAFT.</em></h1>
          <p>Strategy, technology and moving image shaped around the people, rituals and ambition behind the brand.</p>
          <Link href="#point-of-view">Enter our point of view <span>&darr;</span></Link>
        </div>
        <figure><img src="/brand/studio-world-v1.png" alt="Black woman creative director in the Couture House digital atelier" /></figure>
      </section>

      <section className="studio-hero" id="point-of-view">
        <div className="studio-grid" aria-hidden="true" />
        <div className="studio-orbit studio-orbit-large" aria-hidden="true"><i /></div>
        <div className="studio-orbit studio-orbit-small" aria-hidden="true"><i /></div>
        <div className="studio-meta">
          <span>New York / Everywhere</span>
          <span>Strategy / Design / Development / Motion</span>
        </div>
        <div className="studio-title-wrap">
          <p>The Couture House point of view</p>
          <h2 className="studio-title">
            <span>DIGITAL,</span>
            <span>BUT MAKE IT <em>feel</em></span>
            <span>HUMAN.</span>
          </h2>
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
        <div className="studio-editorial-break" aria-labelledby="studio-direction-title">
          <figure><img src="/brand/studio-culture-craft-v2.png" alt="Black creative director shaping an immersive digital brand world" /></figure>
          <div className="studio-editorial-copy">
            <span className="kicker">Creative direction / Systems / Story</span>
            <h2 id="studio-direction-title">THE VISION<br />HAS AN <em>ENGINE.</em></h2>
            <p>We connect the image people remember to the strategy, interface and systems that make the business move.</p>
          </div>
        </div>
        <div className="studio-collage-copy">
          <span className="kicker">Built for the culture</span>
          <h2>OUR NICHE<br />IS A <em>WORLD.</em></h2>
          <p>
            Salons, stylists and hair-care brands are not a narrow market to
            us. They are a universe of expertise, expression and possibility.
          </p>
          <Link href="/work">See the work <span>&#8599;</span></Link>
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

      <section className="studio-practice section-pad" aria-labelledby="practice-title">
        <header>
          <span className="kicker">One atelier / Four connected disciplines</span>
          <h2 id="practice-title">THE IDEA<br /><em>AND THE ENGINE.</em></h2>
          <p>
            The Studio page is where our point of view becomes a working model:
            culture-aware strategy, expressive design and useful systems in one room.
          </p>
        </header>
        <div className="studio-practice-grid">
          {practice.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <Link className="studio-practice-link" href="/services">Explore every service <span>&#8599;</span></Link>
      </section>

      <section className="studio-final">
        <span className="kicker">Bring the vision</span>
        <h2>LET&apos;S BUILD<br />SOMETHING WITH<br /><em>A PULSE.</em></h2>
        <p>Websites, apps, automations and content shaped around your world.</p>
        <Link href="/start-a-project">
          Start a project <span>&#8599;</span>
        </Link>
      </section>

      <footer>
        <Link className="footer-logo-link" href="/" aria-label="Couture House home">
          <img src="/brand/footer-logo.png" alt="Couture House" />
        </Link>
        <p>Digital atelier for hair, beauty, culture and ambitious businesses.</p>
        <div>
          <Link href="/work">Work &#8599;</Link>
          <Link href="/services">Services &#8599;</Link>
          <a href="https://www.instagram.com/couturehouse.co/" target="_blank" rel="noreferrer">Instagram &#8599;</a>
        </div>
        <small>&copy; 2026 Couture House Co.</small>
      </footer>
    </main>
  );
}
