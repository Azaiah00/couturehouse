import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import AllThingsLocsPreview from "../AllThingsLocsPreview";
import AutoPlayVideo from "../AutoPlayVideo";
import ClickToPlayVideo from "../ClickToPlayVideo";
import BeforeAfterSlider from "../BeforeAfterSlider";
import PageSoundtrack from "../PageSoundtrack";
import SiteFooter from "../SiteFooter";
import SiteNav from "../SiteNav";

export const metadata: Metadata = {
  title: "Hair & Beauty Web Design Portfolio | Couture House Co.",
  description: "Explore salon websites, hair-care commerce, booking journeys, campaigns and content created by Couture House Co.",
  alternates: { canonical: "/work/" },
  openGraph: {
    title: "Hair & Beauty Web Design Portfolio | Couture House Co.",
    description: "Explore salon websites, hair-care commerce, booking journeys, campaigns and content created by Couture House Co.",
    url: "/work/",
    type: "website",
    images: [{ url: "/og-v2.png", width: 1536, height: 1024, alt: "Couture House hair and beauty digital portfolio" }],
  },
};

const work = [
  { number: "01", title: "Magic Coils", type: "Hair care / Commerce / Campaign", scope: "Strategy, website, e-commerce, content, motion", image: "/work/magic-coils/cover.webp", url: "https://magiccoils.net/", position: "center center", previewAspect: "2400 / 1085", width: 2400, height: 1085 },
  { number: "02", title: "The Dreadlocks Salon", type: "Salon / Oakland", scope: "Strategy, UX/UI, development, booking journey", image: "/portfolio/dreadlocks-salon.png", url: "https://the-dreadlocks-salon-oakland-ca.netlify.app/", position: "center top", previewAspect: "1905 / 848", width: 1905, height: 848 },
  { number: "03", title: "Beverly's of Nashville", type: "Legacy salon / Nashville", scope: "Creative direction, web design, development, local discovery", image: "/portfolio/beverlys-feature-2026.webp", url: "https://beverlysofnashville.com/", position: "center center", previewAspect: "1234 / 712", width: 1234, height: 712 },
  { number: "04", title: "All Things Locs", type: "Natural hair / Oakland", scope: "Brand experience, web design, development, service journey", image: "/portfolio/two-tit-experience.png", video: "/portfolio/all-things-locs-hero.mp4", url: "https://2titexperience.netlify.app/", position: "center top", previewAspect: "16 / 9" },
  { number: "05", title: "Divine Textures", type: "Holistic hair care / Columbia", scope: "Web design and development", image: "/portfolio/divine-textures.png", url: "https://divine-textures.netlify.app/", position: "center 18%", previewAspect: "1905 / 848", width: 1905, height: 848 },
  { number: "06", title: "OG Barnes", type: "Wellness / Loc artistry", scope: "Web design and development", image: "/portfolio/og-barnes.png", url: "https://ogbarnes.netlify.app/", position: "center 15%", previewAspect: "1905 / 848", width: 1905, height: 848 },
  { number: "07", title: "Sacrificial Conversations", type: "Faith / Editorial commerce", scope: "E-commerce and campaign world", image: "/portfolio/sacrificial-conversations.jpg", url: "https://sacrificialconversations.shop/", position: "center 30%", previewAspect: "1024 / 571", width: 1024, height: 571 },
  { number: "08", title: "Sodiq Yusuff MMA", type: "Sports / Academy", scope: "Brand platform and website", image: "/portfolio/sodiq-yusuff.png", url: "https://sodiqyusuffmma.com/", position: "center 12%", previewAspect: "1905 / 848", width: 1905, height: 848 },
  { number: "09", title: "Majestic Contracting", type: "Design / Build / Renovate", scope: "Website and motion direction", image: "/portfolio/majestic-contracting-preview.png", url: "https://majesticdbr.com/", position: "center top", previewAspect: "1234 / 712", width: 1234, height: 712 },
  { number: "10", title: "Party Bus R Us", type: "Hospitality / DMV", scope: "Website and booking experience", image: "/portfolio/partybus-r-us.png", url: "https://www.partybusrus.com/", position: "center 9%", previewAspect: "1905 / 848", width: 1905, height: 848 },
];

const revivals = [
  {
    title: "Sculptural Loc Updo",
    before: "/work/photo-revival/02-sculptural-loc-updo-before.webp",
    after: "/work/photo-revival/02-sculptural-loc-updo-after.webp",
    alt: "sculptural loc updo with circular details",
    note: "Editorial polish + background replacement",
  },
  {
    title: "Curly Braided Finish",
    before: "/work/photo-revival/05-curly-braided-finish-before.webp",
    after: "/work/photo-revival/05-curly-braided-finish-after.webp",
    alt: "curly braided finish photographed from behind",
    note: "Backdrop reconstruction + editorial finishing",
  },
  {
    title: "Blue Loc Extensions",
    before: "/work/photo-revival/06-blue-loc-extensions-before.webp",
    after: "/work/photo-revival/06-blue-loc-extensions-after.webp",
    alt: "long blue loc extensions with a coordinating accessory",
    note: "Composition repair + luxury environment",
  },
  {
    title: "Microloc Installation",
    before: "/work/photo-revival/07-microloc-installation-before.webp",
    after: "/work/photo-revival/07-microloc-installation-after.webp",
    alt: "client revealing a detailed microloc installation",
    note: "Detail enhancement + portrait reconstruction",
  },
];

export default function WorkPage() {
  return (
    <main className="work-page">
      <PageSoundtrack src="/audio/soul-trapped.mp3" title="Soul Trapped" />
      <div className="grain" aria-hidden="true" />
      <SiteNav />

      <header className="work-page-hero section-pad">
        <span className="kicker">Selected work / 2024–26</span>
        <h1 aria-label="Worlds built to be felt.">WORLDS BUILT<br />TO BE <em>FELT.</em></h1>
        <div><p>Websites, content, campaigns and motion shaped around the people a business wants to move.</p><span>Hair + beauty first<br />Culture always<br />Built to act</span></div>
      </header>

      <section className="work-page-lead section-pad" aria-labelledby="work-magic-title">
        <div className="work-page-lead-copy">
          <span>01 / Featured world</span>
          <h2 id="work-magic-title">Magic Coils</h2>
          <p>A luxury hair-care world designed across commerce, education, product storytelling and moving image.</p>
          <a href="https://magiccoils.net/" target="_blank" rel="noreferrer">Experience the website <ArrowUpRight className="link-icon" aria-hidden="true" /></a>
          <Link href="/case-studies/magic-coils/">Read the case study <ArrowUpRight className="link-icon" aria-hidden="true" /></Link>
        </div>
        <div className="work-page-lead-media">
          <ClickToPlayVideo src="/work/magic-coils/featured-reel-01.mp4" poster="/work/magic-coils/reel-poster-01-v2.webp" ariaLabel="Magic Coils luxury campaign reel" />
          <ClickToPlayVideo src="/work/magic-coils/featured-reel-02.mp4" poster="/work/magic-coils/reel-poster-02-v2.webp" ariaLabel="Magic Coils product storytelling reel" />
        </div>
      </section>

      <section className="work-asset-story section-pad" aria-labelledby="campaign-depth-title">
        <header className="work-asset-head">
          <span className="kicker">Campaign depth / Magic Coils</span>
          <h2 id="campaign-depth-title">ONE WORLD.<br /><em>EVERY FORMAT.</em></h2>
          <p>Ingredient storytelling and launch content designed as one connected visual system.</p>
        </header>
        <div className="work-asset-grid">
          <figure className="work-asset-graphic"><Image src="/work/magic-coils/ingredient-campaign/ingredient-trinity.webp" alt="Magic Coils ingredient campaign graphic" width={900} height={1117} sizes="(max-width: 760px) 100vw, 25vw" unoptimized /></figure>
          <figure className="work-asset-graphic"><Image src="/work/magic-coils/ingredient-campaign/honey-oil.webp" alt="Magic Coils honey oil ingredient graphic" width={900} height={1117} sizes="(max-width: 760px) 100vw, 25vw" unoptimized /></figure>
          <figure className="work-asset-graphic"><Image src="/work/magic-coils/ingredient-campaign/vitamin-c.webp" alt="Magic Coils vitamin C ingredient graphic" width={900} height={1117} sizes="(max-width: 760px) 100vw, 25vw" unoptimized /></figure>
          <figure className="work-asset-graphic"><Image src="/work/magic-coils/ingredient-campaign/argan-oil.webp" alt="Magic Coils argan oil ingredient graphic" width={900} height={1117} sizes="(max-width: 760px) 100vw, 25vw" unoptimized /></figure>
        </div>
      </section>

      <section className="full-film section-pad" aria-labelledby="full-film-title">
        <div className="full-film-head">
          <div><span className="kicker">Couture House / Campaign film</span><h2 id="full-film-title">SEE THE<br /><em>WHOLE WORLD.</em></h2></div>
          <p>The complete moving image behind the homepage opening, kept here as an intentional click-to-play feature instead of a second automatic download.</p>
        </div>
        <div className="full-film-frame"><ClickToPlayVideo src="/brand/hero-video.mp4" poster="/brand/full-campaign-film-poster-v2.webp" ariaLabel="Couture House full campaign film" /></div>
      </section>

      <section className="revival-work section-pad" id="content-revival" aria-labelledby="revival-work-title">
        <header className="revival-work-head">
          <span className="kicker">The Dreadlocks Salon / Content revival</span>
          <h2 id="revival-work-title">THE MEMORY<br /><em>STAYS. THE IMAGE EVOLVES.</em></h2>
          <p>We preserve the real person, hairstyle and service moment, then rebuild everything that keeps the image from representing the work at its best.</p>
        </header>
        <div className="revival-work-intro">
          <span>Original and enhanced versions, presented together.</span>
          <p>Art direction, distraction removal, background reconstruction, luxury styling, color finishing and responsive web preparation.</p>
        </div>
        <div className="revival-grid">
          {revivals.map((revival, index) => (
            <BeforeAfterSlider
              key={revival.title}
              before={revival.before}
              after={revival.after}
              alt={revival.alt}
              title={`${String(index + 1).padStart(2, "0")} / ${revival.title}`}
              note={revival.note}
            />
          ))}
        </div>
        <p className="revival-disclosure">Creative enhancement shaped and finished through Couture House art direction. Presented as original salon content and its refined, brand-ready version—not a salon-service result.</p>
      </section>

      <section className="work-index section-pad" aria-labelledby="work-index-title">
        <header className="work-index-head"><span className="kicker">The complete gallery</span><h2 id="work-index-title">SELECTED<br /><em>WORLDS.</em></h2><p>Each project is shown through a high-value moment from the experience—not a generic thumbnail.</p></header>
        <div className="work-index-grid">
          {work.slice(1).map((project, index) => (
            <article className={`work-index-card ${index % 5 === 0 ? "work-index-wide" : ""}`} key={project.title}>
              <a href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title} website`}>
                <div className="work-index-media" style={{ aspectRatio: project.previewAspect }}>
                  {project.title === "All Things Locs" ? <AllThingsLocsPreview /> : project.video ? <AutoPlayVideo src={project.video} ariaLabel={`${project.title} website preview`} /> : <Image className="website-preview-image" src={project.image} alt={`${project.title} website preview`} width={project.width} height={project.height} sizes="(max-width: 760px) 100vw, 50vw" unoptimized style={{ objectPosition: project.position }} />}
                  <span>View live <ArrowUpRight aria-hidden="true" /></span>
                </div>
                <div className="work-index-info"><span>{project.number}</span><div><h3>{project.title}</h3><p>{project.type}</p><small>{project.scope}</small></div></div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="partnership-story section-pad" aria-labelledby="partnership-title">
        <header className="partnership-head">
          <span className="kicker">Ongoing partnership / Teddy + Monica</span>
          <h2 id="partnership-title">ONE PARTNERSHIP.<br /><em>MANY WORLDS.</em></h2>
          <p>
            From the Sacrificial Conversations podcast and apparel line to
            every campaign chapter around them, we build connected digital,
            motion and content systems that keep the story moving.
          </p>
        </header>

        <div className="partnership-film">
          <div className="partnership-film-copy">
            <span>Moving image / Campaign direction</span>
            <h3>Stories that move with the partnership.</h3>
            <p>Animated campaign content made for social, launches and the moments between episodes.</p>
          </div>
          <figure>
            <ClickToPlayVideo src="/brand/showreel.mp4" poster="/work/partnership/teddy-monica-campaign-film-poster-v2.webp" ariaLabel="Teddy and Monica campaign film" />
          </figure>
        </div>

        <div className="partnership-chapter">
          <div className="partnership-chapter-copy">
            <span>Chapter 01</span>
            <h3>Sacrificial Conversations</h3>
            <p>Podcast creative, episode promotion, editorial campaigns, e-commerce and an apparel world built to carry the message beyond the microphone.</p>
            <a href="https://sacrificialconversations.shop/" target="_blank" rel="noreferrer">Visit the brand <ArrowUpRight className="link-icon" aria-hidden="true" /></a>
          </div>
          <div className="partnership-poster-grid">
            <figure><Image src="/work/partnership/podcast-new-episode.webp" alt="Sacrificial Conversations new episode campaign flyer" width={1086} height={1448} sizes="(max-width: 760px) 100vw, 33vw" unoptimized /></figure>
            <figure><Image src="/work/partnership/podcast-faith-education.webp" alt="Sacrificial Conversations faith and education episode flyer" width={1200} height={1490} sizes="(max-width: 760px) 100vw, 33vw" unoptimized /></figure>
            <figure><Image src="/work/partnership/podcast-live-merch.webp" alt="Sacrificial Conversations podcast and merchandise campaign flyer" width={1122} height={1402} sizes="(max-width: 760px) 100vw, 33vw" unoptimized /></figure>
          </div>
        </div>

      </section>

      <section className="case-study-links section-pad" aria-labelledby="case-study-links-title">
        <header><span className="kicker">Go behind the work</span><h2 id="case-study-links-title">SELECTED<br /><em>CASE STUDIES.</em></h2></header>
        <div><Link href="/case-studies/magic-coils/"><span>01 / Hair-care e-commerce</span><h3>Magic Coils</h3><ArrowUpRight aria-hidden="true" /></Link><Link href="/case-studies/beverlys-of-nashville/"><span>02 / Legacy salon</span><h3>Beverly&apos;s of Nashville</h3><ArrowUpRight aria-hidden="true" /></Link></div>
      </section>

      <section className="page-cta">
        <span className="kicker">Your work belongs here</span>
        <h2>LET&apos;S BUILD<br /><em>THE NEXT WORLD.</em></h2>
        <Link href="/start-a-project/">Start a project <ArrowUpRight className="link-icon" aria-hidden="true" /></Link>
      </section>

      <SiteFooter />
    </main>
  );
}
