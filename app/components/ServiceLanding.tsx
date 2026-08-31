import Link from "next/link";
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
        <Link href={projectHref}>Discuss your project <ArrowUpRight aria-hidden="true" /></Link>
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

      {children}

      <section className="page-cta"><span className="kicker">Start with the business goal</span><h2>LET&apos;S BUILD THE<br /><em>RIGHT NEXT STEP.</em></h2><Link href={projectHref}>Start a project <ArrowUpRight aria-hidden="true" /></Link></section>
      <SiteFooter />
    </main>
  );
}
