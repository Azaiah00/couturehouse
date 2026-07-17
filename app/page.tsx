"use client";

import { useEffect } from "react";

const projects = [
  {
    title: "The Dreadlocks Salon",
    type: "Salon experience · Oakland",
    image: "/portfolio/dreadlocks-salon.png",
    url: "https://the-dreadlocks-salon-oakland-ca.netlify.app/",
    tone: "coral",
    className: "project-feature",
  },
  {
    title: "Beverly’s of Nashville",
    type: "Legacy salon · Nashville",
    image: "/portfolio/beverlys-of-nashville.png",
    url: "https://beverlysofnashville.com/",
    tone: "gold",
    className: "project-tall",
  },
  {
    title: "Magic Coils",
    type: "Hair care e-commerce",
    image: "/portfolio/magic-coils.png",
    url: "https://magiccoils.net/",
    tone: "blue",
    className: "project-wide",
  },
  {
    title: "Emblazon Arts",
    type: "Culture · Curatorial studio",
    image: "/portfolio/emblazon-arts-studio.png",
    url: "https://emblazon-arts-studio.netlify.app/",
    tone: "pink",
    className: "",
  },
  {
    title: "Divine Textures",
    type: "Holistic hair care · Columbia",
    image: "/portfolio/divine-textures.png",
    url: "https://divine-textures.netlify.app/",
    tone: "green",
    className: "",
  },
  {
    title: "The 2Tite Xperience",
    type: "Sisterlocks · Oakland",
    image: "/portfolio/two-tit-experience.png",
    url: "https://2titexperience.netlify.app/",
    tone: "violet",
    className: "",
  },
  {
    title: "OG Barnes",
    type: "Wellness · Loc artistry",
    image: "/portfolio/og-barnes.png",
    url: "https://ogbarnes.netlify.app/",
    tone: "earth",
    className: "",
  },
  {
    title: "Sodiq Yusuff MMA",
    type: "Sports · Academy",
    image: "/portfolio/sodiq-yusuff.png",
    url: "https://sodiqyusuffmma.com/",
    tone: "red",
    className: "",
  },
  {
    title: "Party Bus R Us",
    type: "Hospitality · DMV",
    image: "/portfolio/partybus-r-us.png",
    url: "https://www.partybusrus.com/",
    tone: "night",
    className: "",
  },
];

const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "Editorial websites, booking journeys and online stores that make your artistry feel impossible to scroll past.",
    tags: ["Strategy", "UX / UI", "Development", "E-commerce"],
  },
  {
    number: "02",
    title: "Apps",
    description:
      "Useful, beautiful digital products for communities, teams and clients—from first tap to daily habit.",
    tags: ["Product design", "Prototypes", "Client portals", "Mobile"],
  },
  {
    number: "03",
    title: "Workflows",
    description:
      "Quiet systems behind the scenes that follow up, organize, publish and keep the business moving while you create.",
    tags: ["Automation", "CRM", "Booking", "Operations"],
  },
  {
    number: "04",
    title: "Content",
    description:
      "Campaign concepts, motion, social assets and stories built to live together—not disappear after one post.",
    tags: ["Creative direction", "Campaigns", "Motion", "Social"],
  },
];

const proofPoints = [
  ["09", "Selected digital launches"],
  ["05", "Hair + beauty experiences"],
  ["01", "Studio built around your world"],
];

export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
      root.style.setProperty(
        "--pointer-nx",
        `${(event.clientX / window.innerWidth - 0.5).toFixed(3)}`,
      );
      root.style.setProperty(
        "--pointer-ny",
        `${(event.clientY / window.innerHeight - 0.5).toFixed(3)}`,
      );
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    const revealItems = document.querySelectorAll("[data-reveal]");
    revealItems.forEach((item) => revealObserver.observe(item));
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <main>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Couture House home">
          <span className="monogram">CH.</span>
          <span>
            Couture House
            <small>Digital atelier</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#studio">Studio</a>
        </div>
        <a
          className="nav-cta magnetic"
          href="https://www.couturehouse.co/contact"
          target="_blank"
          rel="noreferrer"
        >
          Start a project <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-meta">
          <span>New York · Everywhere</span>
          <span>Digital solutions for beauty, culture &amp; beyond</span>
        </div>
        <div className="hero-title" aria-label="Digital, but make it feel human">
          <span className="hero-line line-one">Digital,</span>
          <span className="hero-line line-two">
            but make it <em>feel</em>
          </span>
          <span className="hero-line line-three">human.</span>
        </div>
        <div className="hero-foot">
          <p>
            We design websites, apps, automations and content for businesses
            ready to look as exceptional as the work they do.
          </p>
          <a className="round-link" href="#work" aria-label="Explore selected work">
            <span>Explore</span>
            <span>the work</span>
            <b aria-hidden="true">↓</b>
          </a>
        </div>
        <div className="intro-wipe" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </section>

      <section className="ticker" aria-label="Our capabilities">
        <div className="ticker-track">
          <span>WEBSITES</span><i>✦</i><span>APPS</span><i>✦</i>
          <span>AUTOMATIONS</span><i>✦</i><span>CONTENT</span><i>✦</i>
          <span>WEBSITES</span><i>✦</i><span>APPS</span><i>✦</i>
          <span>AUTOMATIONS</span><i>✦</i><span>CONTENT</span><i>✦</i>
        </div>
      </section>

      <section className="manifesto section-pad" id="studio">
        <div className="eyebrow" data-reveal>
          <span>( Our point of view )</span>
          <span>Built for the culture</span>
        </div>
        <p className="manifesto-copy" data-reveal>
          Black-owned beauty businesses deserve digital experiences as
          dimensional as the <em>artistry, ritual and culture</em> they carry.
          So we build more than pages. We build worlds people want to enter—and
          reasons to take action once they arrive.
        </p>
        <div className="proof-grid" data-reveal>
          {proofPoints.map(([value, label]) => (
            <div className="proof-item" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <header className="section-head section-pad" data-reveal>
          <div>
            <span className="kicker">Selected work · 2024—26</span>
            <h2>THE DIGITAL<br /><em>GALLERY</em></h2>
          </div>
          <p>
            Nine distinct businesses. Nine distinct worlds. Each built to feel
            original, communicate clearly and move people toward the next step.
          </p>
        </header>

        <div className="project-grid section-pad">
          {projects.map((project, index) => (
            <article
              className={`project-card ${project.className}`}
              data-tone={project.tone}
              data-reveal
              key={project.title}
            >
              <a href={project.url} target="_blank" rel="noreferrer">
                <div className="project-image-wrap">
                  <img src={project.image} alt={`${project.title} website homepage`} />
                  <div className="project-screen" aria-hidden="true">
                    <span>View live</span><b>↗</b>
                  </div>
                </div>
                <div className="project-info">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.type}</p>
                  </div>
                  <b aria-hidden="true">↗</b>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="client-reel" aria-label="Selected collaborators">
        <p>Made with people building memorable things</p>
        <div>
          <span>MAGIC COILS</span><i>◆</i><span>BEVERLY’S</span><i>◆</i>
          <span>EMBLAZON ARTS</span><i>◆</i><span>DIVINE TEXTURES</span><i>◆</i>
          <span>SODIQ YUSUFF</span>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <header className="services-intro" data-reveal>
          <span className="kicker">What we make</span>
          <h2>One studio.<br />A full digital world.</h2>
          <p>
            Bring us the idea, the bottleneck or the next chapter. We shape the
            right mix of design and systems around it.
          </p>
        </header>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" data-reveal key={service.title}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul aria-label={`${service.title} capabilities`}>
                {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="outcomes">
        <div className="outcome-sticky">
          <span className="kicker">Beauty meets business</span>
          <h2>
            Beautiful enough to stop the scroll.
            <em>Sharp enough to fill the chair.</em>
          </h2>
        </div>
        <div className="outcome-list">
          <article data-reveal>
            <span>01</span><h3>Book-first journeys</h3>
            <p>Clear service stories, irresistible work and fewer steps between interest and appointment.</p>
          </article>
          <article data-reveal>
            <span>02</span><h3>Findable by design</h3>
            <p>Fast, mobile-first foundations built to support local search and real-world discovery.</p>
          </article>
          <article data-reveal>
            <span>03</span><h3>Quietly automated</h3>
            <p>Follow-ups and workflows that keep momentum moving without adding more to your day.</p>
          </article>
          <article data-reveal>
            <span>04</span><h3>Content with a system</h3>
            <p>A visual language your team can reuse across launches, campaigns and everyday moments.</p>
          </article>
        </div>
      </section>

      <section className="process section-pad">
        <span className="kicker" data-reveal>How we work</span>
        <div className="process-heading" data-reveal>
          <h2>COME WITH<br />THE VISION.</h2>
          <p>We’ll bring the structure, craft and momentum to turn it into something people can experience.</p>
        </div>
        <div className="process-steps">
          <article data-reveal><span>01</span><h3>Listen</h3><p>Business, audience, ambition and the feeling you want to leave behind.</p></article>
          <article data-reveal><span>02</span><h3>Shape</h3><p>Strategy becomes a visual system, a clear journey and a focused creative direction.</p></article>
          <article data-reveal><span>03</span><h3>Build</h3><p>We design, develop, connect and refine the experience across every important screen.</p></article>
          <article data-reveal><span>04</span><h3>Launch</h3><p>Your new digital world goes live with the tools and confidence to keep it moving.</p></article>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-orb" aria-hidden="true" />
        <span className="kicker">The next world is yours</span>
        <h2>
          LET’S MAKE<br /><em>THE INTERNET</em><br />FEEL SOMETHING.
        </h2>
        <a
          href="https://www.couturehouse.co/contact"
          target="_blank"
          rel="noreferrer"
          className="cta-link"
        >
          <span>Start a project</span><b aria-hidden="true">↗</b>
        </a>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top">
          <span className="monogram">CH.</span>
          <span>Couture House Co.</span>
        </a>
        <p>Digital atelier for beauty, culture &amp; ambitious businesses.</p>
        <div>
          <a href="https://www.instagram.com/couturehouse.co/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="#work">Work ↑</a>
        </div>
        <small>© 2026 Couture House Co.</small>
      </footer>
    </main>
  );
}
