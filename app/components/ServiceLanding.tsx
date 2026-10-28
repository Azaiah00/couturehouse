import EngagementDetails from "./EngagementDetails";
import ReviewInvitation from "./ReviewInvitation";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import SiteFooter from "../SiteFooter";
import SiteNav from "../SiteNav";

type ServiceLandingProps = {
  path: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  problem: string;
  outcomes: { title: string; copy: string }[];
  includes: string[];
  bestFor: string;
  projectHref?: string;
  children?: ReactNode;
};

export default function ServiceLanding({ path, eyebrow, title, accent, intro, problem, outcomes, includes, bestFor, projectHref = "/start-a-project/", children }: ServiceLandingProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${title} ${accent}`,
    url: `https://couturehouse.co${path}`,
    description: intro,
    provider: { "@id": "https://couturehouse.co/#organization" },
    audience: { "@type": "Audience", audienceType: "Salons, hair stylists and hair-care brands" },
  };

  return (
    <main className="service-landing">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <div className="grain" aria-hidden="true" />
      <SiteNav />
      <header className="service-landing-hero section-pad">
        <span className="kicker">{eyebrow}</span>
        <h1>{title}<br /><em>{accent}</em></h1>
        <p>{intro}</p>
        <a href={projectHref}>Discuss your project <ArrowUpRight aria-hidden="true" /></a>
      </header>

      <section className="service-landing-problem section-pad">
        <span className="kicker">The opportunity</span>
        <h2>YOUR DIGITAL PRESENCE SHOULD WORK AS HARD AS YOUR <em>ARTISTRY.</em></h2>
        <p>{problem}</p>
      </section>

      <section className="service-landing-outcomes section-pad" aria-label="Expected project outcomes">
        {outcomes.map((outcome, index) => <article key={outcome.title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{outcome.title}</h2><p>{outcome.copy}</p></article>)}
      </section>

      <section className="service-landing-scope section-pad">
        <div><span className="kicker">What the engagement can include</span><h2>A FOCUSED SCOPE.<br /><em>BUILT AROUND YOU.</em></h2></div>
        <div><ul>{includes.map((item) => <li key={item}>{item}</li>)}</ul><p><strong>Best for:</strong> {bestFor}</p></div>
      </section>

      <section className="service-proof section-pad"><span className="kicker">See the work</span><h2>FROM SCOPE TO EXPERIENCE.</h2><p>Explore the details before deciding what your business needs.</p><a href={path.includes("content") ? "/work/#content-revival" : path.includes("booking") ? "/booking-suite/" : path.includes("shopify") ? "/case-studies/magic-coils/" : "/case-studies/beverlys-of-nashville/"}>{path.includes("content") ? "Explore photo revival + campaigns" : path.includes("booking") ? "Try the fictional booking demo" : path.includes("shopify") ? "Explore Magic Coils" : "Explore Beverly’s of Nashville"} <ArrowUpRight aria-hidden="true" /></a></section>
      {children}

      <EngagementDetails />
      <ReviewInvitation />
      <section className="page-cta"><span className="kicker">Start with the business goal</span><h2>LET&apos;S BUILD THE<br /><em>RIGHT NEXT STEP.</em></h2><a href={projectHref}>Start a project <ArrowUpRight aria-hidden="true" /></a></section>
      <SiteFooter />
    </main>
  );
}
