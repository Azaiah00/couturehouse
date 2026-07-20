"use client";

import { useEffect } from "react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import AllThingsLocsPreview from "./AllThingsLocsPreview";
import AutoPlayVideo from "./AutoPlayVideo";
import MobileSwipeHint from "./MobileSwipeHint";
import PageSoundtrack from "./PageSoundtrack";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";

type Project = {
  title: string;
  type: string;
  role: string;
  image: string;
  url: string;
  tone: string;
  video?: string;
  position?: string;
  previewAspect: string;
};

const featuredProjects = [
  {
    number: "02",
    title: "The Dreadlocks Salon",
    eyebrow: "Salon experience / Oakland",
    image: "/portfolio/dreadlocks-salon.png",
    position: "center top",
    fit: "contain" as const,
    previewAspect: "1905 / 848",
    url: "https://the-dreadlocks-salon-oakland-ca.netlify.app/",
    summary:
      "A confident, image-led salon experience that turns loc artistry into a clear journey from discovery to booking.",
    role: ["Strategy", "UX / UI", "Development", "Booking journey"],
  },
  {
    number: "03",
    title: "Beverly's of Nashville",
    eyebrow: "Legacy salon / Nashville",
    image: "/portfolio/beverlys-feature.png",
    position: "center center",
    fit: "contain" as const,
    previewAspect: "1918 / 909",
    url: "https://beverlysofnashville.com/",
    summary:
      "A modern digital home for a trusted Nashville salon, balancing legacy, personality and an easier path to services.",
    role: ["Creative direction", "Web design", "Development", "Local discovery"],
  },
  {
    number: "04",
    title: "All Things Locs",
    eyebrow: "Natural hair / Oakland",
    image: "/portfolio/two-tit-experience.png",
    video: "/portfolio/all-things-locs-hero.mp4",
    position: "center top",
    fit: "contain" as const,
    previewAspect: "16 / 9",
    url: "https://2titexperience.netlify.app/",
    summary:
      "A warm, personality-rich experience that turns specialist loc care, education and service discovery into one inviting digital home.",
    role: ["Brand experience", "Web design", "Development", "Service journey"],
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
    previewAspect: "1905 / 848",
  },
  {
    title: "The 2Tite Xperience",
    type: "Sisterlocks / Oakland",
    role: "Brand experience + website",
    image: "/portfolio/two-tit-experience.png",
    url: "https://2titexperience.netlify.app/",
    tone: "violet",
    position: "center 12%",
    previewAspect: "1909 / 850",
  },
  {
    title: "OG Barnes",
    type: "Wellness / Loc artistry",
    role: "Web design + development",
    image: "/portfolio/og-barnes.png",
    url: "https://ogbarnes.netlify.app/",
    tone: "earth",
    position: "center 15%",
    previewAspect: "1905 / 848",
  },
  {
    title: "Sacrificial Conversations",
    type: "Faith / Editorial commerce",
    role: "E-commerce + campaign world",
    image: "/portfolio/sacrificial-conversations.jpg",
    url: "https://sacrificialconversations.shop/",
    tone: "red",
    position: "center 30%",
    previewAspect: "1024 / 571",
  },
  {
    title: "Sodiq Yusuff MMA",
    type: "Sports / Academy",
    role: "Brand platform + website",
    image: "/portfolio/sodiq-yusuff.png",
    url: "https://sodiqyusuffmma.com/",
    tone: "red",
    position: "center 12%",
    previewAspect: "1905 / 848",
  },
  {
    title: "Majestic Contracting",
    type: "Design / Build / Renovate",
    role: "Website + motion direction",
    image: "/portfolio/majestic-contracting.svg",
    video: "/portfolio/majestic-intro.mp4",
    url: "https://majesticdbr.com/",
    tone: "gold",
    previewAspect: "960 / 594",
  },
  {
    title: "Party Bus R Us",
    type: "Hospitality / DMV",
    role: "Website + booking experience",
    image: "/portfolio/partybus-r-us.png",
    url: "https://www.partybusrus.com/",
    tone: "night",
    position: "center 9%",
    previewAspect: "1905 / 848",
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
    title: "Workflows + Automation",
    description:
      "Connected systems, business hubs and automations that organize the operation and keep work moving without constant manual effort.",
    tags: ["Automation", "Business hubs", "CRM", "AI consulting"],
  },
  {
    number: "04",
    title: "Content",
    description:
      "Campaign concepts, motion, original music and visual stories built to work together—not disappear after one post.",
    tags: ["Creative direction", "Campaigns", "Motion", "Music creation"],
  },
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
      <PageSoundtrack src="/audio/the-saxuation.mp3" title="The Saxuation" />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <SiteNav />

      <section className="hero" id="top">
        <AutoPlayVideo className="hero-video" src="/brand/hero-video.mp4" startAt={3} endAt={15} ariaHidden />
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
                View selected work <ArrowDown className="inline-icon" aria-hidden="true" />
              </a>
              <a
                className="hero-secondary"
                href="/start-a-project"
              >
                Start a project <ArrowUpRight className="inline-icon" aria-hidden="true" />
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
          <span>MAGIC COILS</span><i><Sparkles aria-hidden="true" /></i><span>BEVERLY&apos;S</span><i><Sparkles aria-hidden="true" /></i>
          <span>THE DREADLOCKS SALON</span><i><Sparkles aria-hidden="true" /></i><span>DIVINE TEXTURES</span><i><Sparkles aria-hidden="true" /></i>
          <span>MAJESTIC</span><i><Sparkles aria-hidden="true" /></i><span>SODIQ YUSUFF</span>
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
            Experience Magic Coils <ArrowUpRight className="link-icon" aria-hidden="true" />
          </a>
        </div>
        <div className="case-gallery" data-reveal>
          <figure className="case-hero">
            <img src="/work/magic-coils/cover.webp" alt="Magic Coils Crowned in Magic campaign" />
          </figure>
          <figure className="case-video">
            <AutoPlayVideo src="/work/magic-coils/magicpress.mp4" ariaLabel="Magic Press education reel" />
            <figcaption>Magic press / Education in motion</figcaption>
          </figure>
          <figure className="case-reel">
            <AutoPlayVideo src="/work/magic-coils/reel.mp4" ariaLabel="Magic Coils brand reel" />
            <figcaption>Brand reel / The world in motion</figcaption>
          </figure>
          <figure className="case-product case-wide">
            <img src="/work/magic-coils/03-products.webp" alt="Magic Coils product campaign" />
          </figure>
          <figure className="case-portrait">
            <img src="/work/magic-coils/extra/03.webp" alt="Magic Coils leave-in treatment campaign portrait" />
          </figure>
          <figure className="case-lifestyle">
            <img src="/work/magic-coils/extra/06.webp" alt="Magic Coils strengthening serum lifestyle campaign" />
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
            <a className="featured-browser" style={{ aspectRatio: project.previewAspect }} href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title} website`}>
              <div className="browser-bar" aria-hidden="true">
                <i /><i /><i /><span>{project.url.replace("https://", "").replace(/\/$/, "")}</span>
              </div>
              {project.title === "All Things Locs" ? (
                <AllThingsLocsPreview />
              ) : project.video ? (
                <AutoPlayVideo src={project.video} ariaLabel={`${project.title} website motion preview`} />
              ) : (
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  style={{ objectPosition: project.position, objectFit: project.fit ?? "cover" }}
                />
              )}
              <span className="featured-view">View live <ArrowUpRight aria-hidden="true" /></span>
            </a>
            <div className="featured-copy">
              <span>{project.number}</span>
              <p className="featured-eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul aria-label={`${project.title} project scope`}>
                {project.role.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a href={project.url} target="_blank" rel="noreferrer">Experience the website <ArrowUpRight className="link-icon" aria-hidden="true" /></a>
            </div>
          </article>
        ))}

        <div className="mid-cta" data-reveal>
          <p>Ready for a digital experience that feels like your brand?</p>
          <a href="/start-a-project">
            Build your digital world <ArrowUpRight className="link-icon" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="work-glimpse section-pad" aria-labelledby="glimpse-title">
        <header className="glimpse-heading" data-reveal>
          <div>
            <span className="kicker">More worlds / More range</span>
            <h2 id="glimpse-title">A STUDIO WITH<br /><em>RANGE.</em></h2>
          </div>
          <p>
            Beauty is our home base. The same eye for story, experience and
            conversion travels wherever an ambitious brand needs it.
          </p>
        </header>
        <MobileSwipeHint label="Swipe to explore more websites" />
        <div className="glimpse-grid">
          {projects.filter((project) => project.title !== "The 2Tite Xperience").slice(0, 4).map((project, index) => (
            <a
              className={`glimpse-card glimpse-${index + 1}`}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              style={{ aspectRatio: project.previewAspect }}
              data-reveal
              key={project.title}
            >
              <img src={project.image} alt={`${project.title} website preview`} style={{ objectPosition: project.position ?? "center top" }} />
              <span>{String(index + 4).padStart(2, "0")} / {project.title}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
        <a className="glimpse-link" href="#gallery" data-reveal>
          Explore the complete gallery <ArrowDown className="link-icon" aria-hidden="true" />
        </a>
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
        <a className="services-page-link" href="/services" data-reveal>Explore services in detail <ArrowUpRight className="link-icon" aria-hidden="true" /></a>
      </section>

      <section className="product-world section-pad" aria-labelledby="product-world-title">
        <header className="product-world-head" data-reveal>
          <span className="kicker">Product placement / Content creation</span>
          <h2 id="product-world-title">STYLED<br />TO <em>SELL.</em></h2>
          <p>
            We turn products into visual worlds: editorial still life,
            ingredient storytelling and launch-ready content designed to stop
            the scroll and make the value instantly clear.
          </p>
        </header>
        <MobileSwipeHint label="Swipe to see every product story" />
        <div className="product-world-gallery" data-reveal>
          <figure className="product-shot product-shot-high">
            <img src="/work/magic-coils/product-placement/intense-hydration.webp" alt="Magic Coils intense hydration shampoo product placement" loading="lazy" decoding="async" />
            <figcaption><span>01</span> Ingredient-led art direction</figcaption>
          </figure>
          <figure className="product-shot product-shot-low">
            <img src="/work/magic-coils/product-placement/moisture-conditioner.webp" alt="Magic Coils moisture rich conditioner product placement" loading="lazy" decoding="async" />
            <figcaption><span>02</span> Editorial product worlds</figcaption>
          </figure>
          <figure className="product-shot product-shot-high">
            <img src="/work/magic-coils/product-placement/strengthening-serum.webp" alt="Magic Coils strengthening serum product placement" loading="lazy" decoding="async" />
            <figcaption><span>03</span> Campaign-ready content</figcaption>
          </figure>
          <figure className="product-shot product-shot-low">
            <img src="/work/magic-coils/product-placement/foam-wrap.webp" alt="Magic Coils foam wrap product placement" loading="lazy" decoding="async" />
            <figcaption><span>04</span> Product launch systems</figcaption>
          </figure>
        </div>
        <a className="product-world-link" href="/services">Explore content creation <ArrowUpRight className="link-icon" aria-hidden="true" /></a>
      </section>

      <section className="brand-poster section-pad" aria-label="Couture House editorial campaign">
        <a href="/studio" className="brand-poster-frame" data-reveal>
          <img src="/brand/couture-house-poster.png" alt="Couture House digital worlds for hair, beauty and culture" />
          <span className="brand-poster-enter">Enter the studio <ArrowUpRight aria-hidden="true" /></span>
        </a>
        <div className="brand-poster-meta">
          <span>Studio campaign / Couture House Co.</span>
          <span>Digital, but make it feel human.</span>
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

      <section className="full-film section-pad" aria-labelledby="full-film-title">
        <div className="full-film-head" data-reveal>
          <div>
            <span className="kicker">Couture House / The full film</span>
            <h2 id="full-film-title">SEE THE<br /><em>WHOLE WORLD.</em></h2>
          </div>
          <p>
            The moving image behind our opening moment—presented here in full,
            with space to watch the craft, character and culture unfold.
          </p>
        </div>
        <div className="full-film-frame" data-reveal>
          <AutoPlayVideo src="/brand/hero-video.mp4" ariaLabel="Couture House full campaign film" />
        </div>
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
        <div className="showreel-grid" data-reveal>
          <article className="motion-card motion-card-primary">
            <div className="motion-card-meta"><span>01 / Social motion</span><p>Vertical stories made to hold attention.</p></div>
            <figure className="showreel-frame showreel-primary">
              <AutoPlayVideo src="/brand/work-moves-r01.mp4" ariaLabel="Couture House vertical campaign showreel" />
              <figcaption>Social / Story / Motion</figcaption>
              <span className="showreel-stamp" aria-hidden="true">CH / 85</span>
            </figure>
          </article>
          <article className="motion-card motion-card-secondary">
            <div className="motion-card-meta"><span>02 / Digital motion</span><p>Interfaces that move with intention.</p></div>
            <figure className="showreel-frame showreel-secondary">
              <AutoPlayVideo src="/portfolio/majestic-intro.mp4" ariaLabel="Majestic design and build motion website" />
              <figcaption>Design / Build / Motion</figcaption>
            </figure>
          </article>
        </div>
      </section>

      <section className="work-section more-work" id="gallery" aria-labelledby="more-work-title">
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
                <div className="project-image-wrap" style={{ aspectRatio: project.previewAspect }}>
                  {project.video ? (
                    <AutoPlayVideo src={project.video} ariaHidden />
                  ) : (
                    <img src={project.image} alt={`${project.title} selected website detail`} style={{ objectPosition: project.position ?? "center top" }} />
                  )}
                  <div className="project-screen" aria-hidden="true"><span>View live</span><ArrowUpRight /></div>
                </div>
                <div className="project-info">
                  <span>{String(index + 4).padStart(2, "0")}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.type}</p>
                    <small>{project.role}</small>
                  </div>
                  <ArrowUpRight aria-hidden="true" />
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
        <a href="/start-a-project" className="cta-link">
          <span>Start a project</span><ArrowUpRight aria-hidden="true" />
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
