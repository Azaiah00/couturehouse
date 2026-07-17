"use client";

import { useEffect, type SyntheticEvent } from "react";

type Project = {
  title: string;
  type: string;
  role: string;
  image: string;
  url: string;
  tone: string;
  video?: string;
  position?: string;
};

const featuredProjects = [
  {
    number: "02",
    title: "The Dreadlocks Salon",
    eyebrow: "Salon experience / Oakland",
    image: "/portfolio/dreadlocks-salon.png",
    position: "center top",
    url: "https://the-dreadlocks-salon-oakland-ca.netlify.app/",
    summary:
      "A confident, image-led salon experience that turns loc artistry into a clear journey from discovery to booking.",
    role: ["Strategy", "UX / UI", "Development", "Booking journey"],
  },
  {
    number: "03",
    title: "Beverly's of Nashville",
    eyebrow: "Legacy salon / Nashville",
    image: "/portfolio/beverlys-of-nashville.png",
    position: "center 12%",
    url: "https://beverlysofnashville.com/",
    summary:
      "A modern digital home for a trusted Nashville salon, balancing legacy, personality and an easier path to services.",
    role: ["Creative direction", "Web design", "Development", "Local discovery"],
  },
];

const projects: Project[] = [
  {
    title: "Divine Textures",
    type: "Holistic hair care / Columbia",
    role: "Web design + development",
    image: "/portfolio/divine-textures.png",
    url: "https://divine-textures.netlify.app/",
    tone: "green",
    position: "center 18%",
  },
  {
    title: "The 2Tite Xperience",
    type: "Sisterlocks / Oakland",
    role: "Brand experience + website",
    image: "/portfolio/two-tit-experience.png",
    url: "https://2titexperience.netlify.app/",
    tone: "violet",
    position: "center 12%",
  },
  {
    title: "OG Barnes",
    type: "Wellness / Loc artistry",
    role: "Web design + development",
    image: "/portfolio/og-barnes.png",
    url: "https://ogbarnes.netlify.app/",
    tone: "earth",
    position: "center 15%",
  },
  {
    title: "Sacrificial Conversations",
    type: "Faith / Editorial commerce",
    role: "E-commerce + campaign world",
    image: "/portfolio/sacrificial-conversations.jpg",
    url: "https://sacrificialconversations.shop/",
    tone: "red",
    position: "center 30%",
  },
  {
    title: "Emblazon Arts",
    type: "Culture / Curatorial studio",
    role: "Editorial website",
    image: "/portfolio/emblazon-arts-studio.png",
    url: "https://emblazon-arts-studio.netlify.app/",
    tone: "pink",
    position: "center 16%",
  },
  {
    title: "Sodiq Yusuff MMA",
    type: "Sports / Academy",
    role: "Brand platform + website",
    image: "/portfolio/sodiq-yusuff.png",
    url: "https://sodiqyusuffmma.com/",
    tone: "red",
    position: "center 12%",
  },
  {
    title: "Majestic Contracting",
    type: "Design / Build / Renovate",
    role: "Website + motion direction",
    image: "/portfolio/majestic-contracting.svg",
    video: "/portfolio/majestic-intro.mp4",
    url: "https://majesticdbr.com/",
    tone: "gold",
  },
  {
    title: "Party Bus R Us",
    type: "Hospitality / DMV",
    role: "Website + booking experience",
    image: "/portfolio/partybus-r-us.png",
    url: "https://www.partybusrus.com/",
    tone: "night",
    position: "center 9%",
  },
];

const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "Editorial websites, booking journeys and online stores that make your artistry impossible to scroll past.",
    tags: ["Strategy", "UX / UI", "Development", "E-commerce"],
  },
  {
    number: "02",
    title: "Apps",
    description:
      "Useful, beautiful digital products for communities, teams and clients - from first tap to daily habit.",
    tags: ["Product design", "Prototypes", "Client portals", "Mobile"],
  },
  {
    number: "03",
    title: "Workflows",
    description:
      "Quiet systems that follow up, organize, publish and keep the business moving while you create.",
    tags: ["Automation", "CRM", "Booking", "Operations"],
  },
  {
    number: "04",
    title: "Content",
    description:
      "Campaign concepts, motion, social assets and stories built to work together - not disappear after one post.",
    tags: ["Creative direction", "Campaigns", "Motion", "Social"],
  },
];

function loopBetween(
  event: SyntheticEvent<HTMLVideoElement>,
  start: number,
  end: number,
) {
  const video = event.currentTarget;
  if (video.currentTime < start || video.currentTime >= end) {
    video.currentTime = start;
    void video.play().catch(() => undefined);
  }
}

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
      { threshold: 0.1 },
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
          <img className="nav-logo" src="/brand/footer-logo.png" alt="" />
          <span className="wordmark-copy">
            Digital atelier
            <small>Beauty / Culture / Business</small>
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
          Start a project <span aria-hidden="true">&#8599;</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/brand/winter-look-01.png"
          aria-hidden="true"
          onLoadedMetadata={(event) => loopBetween(event, 3, 15)}
          onTimeUpdate={(event) => loopBetween(event, 3, 15)}
        >
          <source src="/brand/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />

        <div className="hero-meta">
          <span>New York / Everywhere</span>
          <span>Digital atelier for hair, beauty &amp; culture</span>
        </div>

        <div className="hero-lockup">
          <p className="hero-eyebrow">Websites / Apps / Automations / Content</p>
          <h1 className="hero-title">
            <span className="hero-line line-one">Digital worlds</span>
            <span className="hero-line line-two">for <em>hair, beauty</em></span>
            <span className="hero-line line-three">&amp; culture.</span>
          </h1>
          <div className="hero-deck">
            <p>
              We help Black-owned salons, stylists and hair-care brands look as
              exceptional online as the work they do in the real world.
            </p>
            <div className="hero-actions">
              <a className="hero-primary" href="#work">
                View selected work <span aria-hidden="true">&darr;</span>
              </a>
              <a
                className="hero-secondary"
                href="https://www.couturehouse.co/contact"
                target="_blank"
                rel="noreferrer"
              >
                Start a project <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </div>
        </div>

        <p className="hero-signature">Digital, but make it feel human.</p>
        <div className="intro-wipe" aria-hidden="true"><i /><i /><i /></div>
      </section>

      <section className="ticker" aria-label="Our capabilities">
        <div className="ticker-track">
          <span>WEBSITES</span><i>+</i><span>APPS</span><i>+</i>
          <span>AUTOMATIONS</span><i>+</i><span>CONTENT</span><i>+</i>
          <span>WEBSITES</span><i>+</i><span>APPS</span><i>+</i>
          <span>AUTOMATIONS</span><i>+</i><span>CONTENT</span><i>+</i>
        </div>
      </section>

      <section className="client-reel client-reel-early" aria-label="Selected collaborators">
        <p>Selected work for brands building memorable things</p>
        <div>
          <span>MAGIC COILS</span><i>◆</i><span>BEVERLY&apos;S</span><i>◆</i>
          <span>THE DREADLOCKS SALON</span><i>◆</i><span>DIVINE TEXTURES</span><i>◆</i>
          <span>MAJESTIC</span><i>◆</i><span>SODIQ YUSUFF</span>
        </div>
      </section>

      <section className="case-study section-pad" id="work" aria-labelledby="magic-title">
        <div className="case-copy" data-reveal>
          <span className="kicker">01 / Featured world / Magic Coils</span>
          <h2 id="magic-title">CROWNED<br />IN <em>MAGIC.</em></h2>
          <p>
            A complete luxury hair-care world spanning commerce, campaign
            direction, product storytelling and motion - built around the
            beauty of textured hair.
          </p>
          <ul>
            <li>Website design + development</li>
            <li>E-commerce experience</li>
            <li>Campaign content + motion</li>
          </ul>
          <a href="https://magiccoils.net/" target="_blank" rel="noreferrer">
            Experience Magic Coils <span>&#8599;</span>
          </a>
        </div>
        <div className="case-gallery" data-reveal>
          <figure className="case-hero">
            <img src="/work/magic-coils/cover.webp" alt="Magic Coils Crowned in Magic campaign" />
          </figure>
          <figure className="case-video">
            <video autoPlay muted loop playsInline preload="metadata" poster="/work/magic-coils/extra/04.webp">
              <source src="/work/magic-coils/magicpress.mp4" type="video/mp4" />
            </video>
          </figure>
          <figure className="case-product">
            <img src="/work/magic-coils/03-products.webp" alt="Magic Coils product campaign" />
          </figure>
          <figure className="case-portrait">
            <img src="/work/magic-coils/extra/03.webp" alt="Magic Coils leave-in treatment campaign portrait" />
          </figure>
        </div>
      </section>

      <section className="featured-projects section-pad" aria-labelledby="featured-title">
        <header className="featured-heading" data-reveal>
          <span className="kicker">Hair + beauty first</span>
          <h2 id="featured-title">WORK THAT<br /><em>EARNS ATTENTION.</em></h2>
          <p>
            Every featured experience begins with the audience, then turns
            strategy, image and interaction into a reason to act.
          </p>
        </header>

        {featuredProjects.map((project, index) => (
          <article className={`featured-card ${index % 2 ? "featured-reverse" : ""}`} data-reveal key={project.title}>
            <a className="featured-browser" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title} website`}>
              <div className="browser-bar" aria-hidden="true">
                <i /><i /><i /><span>{project.url.replace("https://", "").replace(/\/$/, "")}</span>
              </div>
              <img src={project.image} alt={`${project.title} website preview`} style={{ objectPosition: project.position }} />
              <span className="featured-view">View live <b>&#8599;</b></span>
            </a>
            <div className="featured-copy">
              <span>{project.number}</span>
              <p className="featured-eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul aria-label={`${project.title} project scope`}>
                {project.role.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a href={project.url} target="_blank" rel="noreferrer">Experience the website <span>&#8599;</span></a>
            </div>
          </article>
        ))}

        <div className="mid-cta" data-reveal>
          <p>Ready for a digital experience that feels like your brand?</p>
          <a href="https://www.couturehouse.co/contact" target="_blank" rel="noreferrer">
            Build your digital world <span>&#8599;</span>
          </a>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <header className="services-intro" data-reveal>
          <span className="kicker">What you can build with us</span>
          <h2>One studio.<br />A full digital world.</h2>
          <p>
            Bring us the idea, the bottleneck or the next chapter. We shape the
            right mix of design, content and systems around it.
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

      <section className="manifesto manifesto-compact section-pad" id="studio">
        <div className="eyebrow" data-reveal>
          <span>( Our point of view )</span>
          <span>Built for the culture</span>
        </div>
        <p className="manifesto-copy" data-reveal>
          Black-owned beauty businesses deserve digital experiences as
          dimensional as the <em>artistry, ritual and culture</em> they carry.
        </p>
        <p className="manifesto-note" data-reveal>
          We build more than pages. We build worlds people want to enter - and
          give them a clear reason to take action once they arrive.
        </p>
      </section>

      <section className="showreel showreel-compact section-pad" aria-labelledby="showreel-title">
        <div className="showreel-head" data-reveal>
          <span className="kicker">Digital experiences / Campaigns / Motion</span>
          <h2 id="showreel-title">THE WORK<br /><em>MOVES.</em></h2>
          <p>
            A concentrated edit of brand worlds, campaign moments and digital
            details designed to hold attention.
          </p>
        </div>
        <div className="showreel-frame" data-reveal>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/brand/winter-look-02.png"
            aria-label="Couture House selected work showreel"
            onLoadedMetadata={(event) => loopBetween(event, 0, 26)}
            onTimeUpdate={(event) => loopBetween(event, 0, 26)}
          >
            <source src="/brand/showreel.mp4" type="video/mp4" />
          </video>
          <span className="showreel-stamp" aria-hidden="true">CH / 26</span>
        </div>
      </section>

      <section className="work-section more-work" aria-labelledby="more-work-title">
        <header className="section-head section-pad" data-reveal>
          <div>
            <span className="kicker">More selected work / 2024-26</span>
            <h2 id="more-work-title">BEYOND<br /><em>THE SALON.</em></h2>
          </div>
          <p>
            The same strategic eye, applied across commerce, culture,
            hospitality, sport and the spaces where people gather.
          </p>
        </header>

        <div className="project-grid section-pad">
          {projects.map((project, index) => (
            <article className="project-card" data-tone={project.tone} data-reveal key={project.title}>
              <a href={project.url} target="_blank" rel="noreferrer">
                <div className="project-image-wrap">
                  {project.video ? (
                    <video autoPlay muted loop playsInline preload="metadata" poster={project.image} aria-hidden="true">
                      <source src={project.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={project.image} alt={`${project.title} selected website detail`} style={{ objectPosition: project.position ?? "center top" }} />
                  )}
                  <div className="project-screen" aria-hidden="true"><span>View live</span><b>&#8599;</b></div>
                </div>
                <div className="project-info">
                  <span>{String(index + 4).padStart(2, "0")}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.type}</p>
                    <small>{project.role}</small>
                  </div>
                  <b aria-hidden="true">&#8599;</b>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="outcomes">
        <div className="outcome-sticky">
          <span className="kicker">Beauty meets business</span>
          <h2>Beautiful enough to stop the scroll.<em>Sharp enough to fill the chair.</em></h2>
        </div>
        <div className="outcome-list">
          <article data-reveal><span>01</span><h3>Book-first journeys</h3><p>Clear service stories, irresistible work and fewer steps between interest and appointment.</p></article>
          <article data-reveal><span>02</span><h3>Findable by design</h3><p>Fast, mobile-first foundations built to support local search and real-world discovery.</p></article>
          <article data-reveal><span>03</span><h3>Quietly automated</h3><p>Follow-ups and workflows that keep momentum moving without adding more to your day.</p></article>
          <article data-reveal><span>04</span><h3>Content with a system</h3><p>A visual language your team can reuse across launches, campaigns and everyday moments.</p></article>
        </div>
      </section>

      <section className="process section-pad">
        <span className="kicker" data-reveal>How we work</span>
        <div className="process-heading" data-reveal>
          <h2>COME WITH<br />THE VISION.</h2>
          <p>We&apos;ll bring the structure, craft and momentum to turn it into something people can experience.</p>
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
        <h2>LET&apos;S MAKE<br /><em>THE INTERNET</em><br />FEEL SOMETHING.</h2>
        <a href="https://www.couturehouse.co/contact" target="_blank" rel="noreferrer" className="cta-link">
          <span>Start a project</span><b aria-hidden="true">&#8599;</b>
        </a>
      </section>

      <footer>
        <a className="footer-logo-link" href="#top" aria-label="Couture House home">
          <img src="/brand/footer-logo.png" alt="Couture House" />
        </a>
        <p>Digital atelier for hair, beauty, culture and ambitious businesses.</p>
        <div>
          <a href="https://www.instagram.com/couturehouse.co/" target="_blank" rel="noreferrer">Instagram &#8599;</a>
          <a href="#work">Work &uarr;</a>
        </div>
        <small>&copy; 2026 Couture House Co.</small>
      </footer>
    </main>
  );
}
