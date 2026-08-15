"use client";

import { useEffect } from "react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import AllThingsLocsPreview from "./AllThingsLocsPreview";
import AutoPlayVideo from "./AutoPlayVideo";
import ClickToPlayVideo from "./ClickToPlayVideo";
import PageSoundtrack from "./PageSoundtrack";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";

const featuredProjects = [
  {
    number: "02",
    title: "The Dreadlocks Salon",
    eyebrow: "Salon experience / Oakland",
    image: "/portfolio/dreadlocks-salon.png",
    position: "center top",
    fit: "contain" as const,
    previewAspect: "1905 / 848",
    width: 1905,
    height: 848,
    url: "https://the-dreadlocks-salon-oakland-ca.netlify.app/",
    summary:
      "A confident, image-led salon experience that turns loc artistry into a clear journey from discovery to booking.",
    role: ["Strategy", "UX / UI", "Development", "Booking journey"],
  },
  {
    number: "03",
    title: "Beverly's of Nashville",
    eyebrow: "Legacy salon / Nashville",
    image: "/portfolio/beverlys-feature-2026.webp",
    position: "center center",
    fit: "contain" as const,
    previewAspect: "1234 / 712",
    width: 1234,
    height: 712,
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
  {
    number: "05",
    title: "Washington WizKids",
    eyebrow: "Sports media / Washington, DC",
    image: "/portfolio/washington-wizkids.png",
    position: "center center",
    fit: "cover" as const,
    previewAspect: "1731 / 909",
    width: 1731,
    height: 909,
    url: "https://washingtonwizkids.com/",
    summary:
      "An independent Wizards media hub bringing daily news, original analysis, community conversation and player research into one home court.",
    role: ["Digital strategy", "Web design", "Development", "Interactive data"],
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
        <AutoPlayVideo className="hero-video" src="/brand/hero-loop-v2.mp4" poster="/brand/hero-poster.webp" priority posterOnlyOnMobile ariaHidden />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />

        <div className="hero-meta">
          <span>New York / Everywhere</span>
          <span>Digital atelier for hair, beauty &amp; culture</span>
        </div>

        <div className="hero-lockup">
          <p className="hero-eyebrow">Websites / Apps / Automations / Content</p>
          <h1 className="hero-title" aria-label="Digital worlds for hair, beauty and culture.">
            <span className="hero-line line-one">Digital worlds</span>
            <span className="hero-line line-two">for <em>hair, beauty</em></span>
            <span className="hero-line line-three">&amp; culture.</span>
          </h1>
          <div className="hero-deck">
            <div className="hero-actions">
              <a className="hero-primary" href="#work">
                View selected work <ArrowDown className="inline-icon" aria-hidden="true" />
              </a>
              <a
                className="hero-secondary"
                href="/start-a-project/"
              >
                Start a project <ArrowUpRight className="inline-icon" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <p className="hero-signature">Websites and booking experiences for Black-owned salons, stylists and hair-care brands.</p>
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
          <span>MAJESTIC</span><i><Sparkles aria-hidden="true" /></i><span>SODIQ YUSUFF</span><i><Sparkles aria-hidden="true" /></i>
          <span>WASHINGTON WIZKIDS</span>
        </div>
      </section>

      <section className="outcomes outcomes-early">
        <div className="outcome-sticky">
          <span className="kicker">Beauty meets business</span>
          <h2>Beautiful enough to stop the scroll.<em>Sharp enough to fill the chair.</em></h2>
          <p className="outcome-audience">
            We help Black-owned salons, stylists and hair-care brands get found,
            earn trust and turn attention into appointments and sales.
          </p>
        </div>
        <div className="outcome-list">
          <article data-reveal><span>01</span><h3>Book-first journeys</h3><p>Clear service stories, irresistible work and fewer steps between interest and appointment.</p></article>
          <article data-reveal><span>02</span><h3>Findable by design</h3><p>Fast, mobile-first foundations built to support local search and real-world discovery.</p></article>
          <article data-reveal><span>03</span><h3>Quietly automated</h3><p>Follow-ups and workflows that keep momentum moving without adding more to your day.</p></article>
          <article data-reveal><span>04</span><h3>Content with a system</h3><p>A visual language your team can reuse across launches, campaigns and everyday moments.</p></article>
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
        <div className="case-gallery case-gallery-reels" data-reveal>
          <figure className="case-video">
            <ClickToPlayVideo src="/work/magic-coils/featured-reel-01.mp4" poster="/work/magic-coils/reel-poster-01-v2.webp" ariaLabel="Magic Coils editorial portrait reel" />
            <figcaption>Editorial portrait / Campaign motion</figcaption>
          </figure>
          <figure className="case-reel">
            <ClickToPlayVideo src="/work/magic-coils/featured-reel-02.mp4" poster="/work/magic-coils/reel-poster-02-v2.webp" ariaLabel="Magic Coils salon finish reel" />
            <figcaption>Salon finish / Hair in motion</figcaption>
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
                <Image
                  className="website-preview-image"
                  src={project.image}
                  alt={`${project.title} website preview`}
                  width={project.width}
                  height={project.height}
                  sizes="(max-width: 760px) 100vw, 65vw"
                  unoptimized
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
          <a href="/start-a-project/">
            Build your digital world <ArrowUpRight className="link-icon" aria-hidden="true" />
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
        <a className="services-page-link" href="/services/" data-reveal>Explore services in detail <ArrowUpRight className="link-icon" aria-hidden="true" /></a>
      </section>

      <section className="brand-poster section-pad" aria-label="Couture House editorial campaign">
        <a href="/studio/" className="brand-poster-frame" data-reveal>
          <Image src="/brand/couture-house-poster.webp" alt="Couture House digital worlds for hair, beauty and culture" width={1536} height={1024} sizes="100vw" unoptimized />
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
        <a href="/start-a-project/" className="cta-link">
          <span>Start a project</span><ArrowUpRight aria-hidden="true" />
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
