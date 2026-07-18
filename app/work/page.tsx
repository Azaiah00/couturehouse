import type { Metadata } from "next";
import Link from "next/link";
import FastLoopVideo from "../components/FastLoopVideo";

export const metadata: Metadata = {
  title: "Selected Work | Couture House Co.",
  description: "Websites, digital experiences, campaigns and motion created by Couture House Co. for hair, beauty, culture and ambitious businesses.",
};

const work = [
  { number: "01", title: "Magic Coils", type: "Hair care / Commerce / Campaign", scope: "Strategy, website, e-commerce, content, motion", image: "/work/magic-coils/cover.webp", url: "https://magiccoils.net/", position: "center center" },
  { number: "02", title: "The Dreadlocks Salon", type: "Salon / Oakland", scope: "Strategy, UX/UI, development, booking journey", image: "/portfolio/dreadlocks-salon.png", url: "https://the-dreadlocks-salon-oakland-ca.netlify.app/", position: "center top", contain: true },
  { number: "03", title: "Beverly's of Nashville", type: "Legacy salon / Nashville", scope: "Creative direction, web design, development, local discovery", image: "/portfolio/beverlys-feature.png", url: "https://beverlysofnashville.com/", position: "center center", contain: true },
  { number: "04", title: "All Things Locs", type: "Natural hair / Oakland", scope: "Brand experience, web design, development, service journey", image: "/portfolio/two-tit-experience.png", url: "https://2titexperience.netlify.app/", position: "center top", contain: true },
  { number: "05", title: "Divine Textures", type: "Holistic hair care / Columbia", scope: "Web design and development", image: "/portfolio/divine-textures.png", url: "https://divine-textures.netlify.app/", position: "center 18%" },
  { number: "06", title: "OG Barnes", type: "Wellness / Loc artistry", scope: "Web design and development", image: "/portfolio/og-barnes.png", url: "https://ogbarnes.netlify.app/", position: "center 15%" },
  { number: "07", title: "Sacrificial Conversations", type: "Faith / Editorial commerce", scope: "E-commerce and campaign world", image: "/portfolio/sacrificial-conversations.jpg", url: "https://sacrificialconversations.shop/", position: "center 30%" },
  { number: "08", title: "Sodiq Yusuff MMA", type: "Sports / Academy", scope: "Brand platform and website", image: "/portfolio/sodiq-yusuff.png", url: "https://sodiqyusuffmma.com/", position: "center 12%" },
  { number: "09", title: "Majestic Contracting", type: "Design / Build / Renovate", scope: "Website and motion direction", image: "/portfolio/majestic-contracting.svg", video: "/portfolio/majestic-intro.mp4", url: "https://majesticdbr.com/", position: "center center" },
  { number: "10", title: "Party Bus R Us", type: "Hospitality / DMV", scope: "Website and booking experience", image: "/portfolio/partybus-r-us.png", url: "https://www.partybusrus.com/", position: "center 9%" },
];

export default function WorkPage() {
  return (
    <main className="work-page">
      <div className="grain" aria-hidden="true" />
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="wordmark" href="/" aria-label="Couture House home">
          <img className="nav-logo" src="/brand/footer-logo.png" alt="" />
          <span className="wordmark-copy">Digital atelier<small>Beauty / Culture / Business</small></span>
        </Link>
        <div className="nav-links"><Link href="/work" aria-current="page">Work</Link><Link href="/services">Services</Link><Link href="/studio">Studio</Link></div>
        <Link className="nav-cta magnetic" href="/start-a-project">Start a project <span aria-hidden="true">&#8599;</span></Link>
      </nav>

      <header className="work-page-hero section-pad">
        <span className="kicker">Selected work / 2024–26</span>
        <h1>WORLDS BUILT<br />TO BE <em>FELT.</em></h1>
        <div><p>Websites, content, campaigns and motion shaped around the people a business wants to move.</p><span>Hair + beauty first<br />Culture always<br />Built to act</span></div>
      </header>

      <section className="work-page-lead section-pad" aria-labelledby="work-magic-title">
        <div className="work-page-lead-copy">
          <span>01 / Featured world</span>
          <h2 id="work-magic-title">Magic Coils</h2>
          <p>A luxury hair-care world designed across commerce, education, product storytelling and moving image.</p>
          <a href="https://magiccoils.net/" target="_blank" rel="noreferrer">Experience the website <span>&#8599;</span></a>
        </div>
        <div className="work-page-lead-media">
          <video autoPlay muted loop playsInline preload="metadata" poster="/work/magic-coils/extra/04.webp"><source src="/work/magic-coils/magicpress.mp4" type="video/mp4" /></video>
          <FastLoopVideo src="/work/magic-coils/reel.webm" poster="/work/magic-coils/04-collection.webp" label="Magic Coils campaign reel" />
        </div>
      </section>

      <section className="work-index section-pad" aria-labelledby="work-index-title">
        <header className="work-index-head"><span className="kicker">The complete gallery</span><h2 id="work-index-title">SELECTED<br /><em>WORLDS.</em></h2><p>Each project is shown through a high-value moment from the experience—not a generic thumbnail.</p></header>
        <div className="work-index-grid">
          {work.slice(1).map((project, index) => (
            <article className={`work-index-card ${index % 5 === 0 ? "work-index-wide" : ""}`} key={project.title}>
              <a href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title} website`}>
                <div className="work-index-media">
                  {project.video ? <video autoPlay muted loop playsInline preload="metadata" poster={project.image}><source src={project.video} type="video/mp4" /></video> : <img src={project.image} alt={`${project.title} website preview`} style={{ objectPosition: project.position, objectFit: project.contain ? "contain" : "cover" }} />}
                  <span>View live &#8599;</span>
                </div>
                <div className="work-index-info"><span>{project.number}</span><div><h3>{project.title}</h3><p>{project.type}</p><small>{project.scope}</small></div></div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="page-cta">
        <span className="kicker">Your work belongs here</span>
        <h2>LET&apos;S BUILD<br /><em>THE NEXT WORLD.</em></h2>
        <Link href="/start-a-project">Start a project <span>&#8599;</span></Link>
      </section>

      <footer><Link className="footer-logo-link" href="/"><img src="/brand/footer-logo.png" alt="Couture House" /></Link><p>Digital atelier for hair, beauty, culture and ambitious businesses.</p><div><Link href="/services">Services &#8599;</Link><Link href="/studio">Studio &#8599;</Link><a href="https://www.instagram.com/couturehouse.co/" target="_blank" rel="noreferrer">Instagram &#8599;</a></div><small>&copy; 2026 Couture House Co.</small></footer>
    </main>
  );
}
