import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SiteFooter from "../SiteFooter";
import SiteNav from "../SiteNav";

type Props = { path: string; client: string; category: string; headline: string; summary: string; challenge: string; approach: string[]; image: string; imageAlt: string; imageWidth: number; imageHeight: number; liveUrl: string; scope: string[] };

export default function CaseStudyLanding({ path, client, category, headline, summary, challenge, approach, image, imageAlt, imageWidth, imageHeight, liveUrl, scope }: Props) {
  const schema = { "@context": "https://schema.org", "@type": "CreativeWork", name: `${client} case study`, url: `https://couturehouse.co${path}`, creator: { "@id": "https://couturehouse.co/#organization" }, about: client, description: summary, image: `https://couturehouse.co${image}` };
  return <main className="case-study-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <div className="grain" aria-hidden="true" /><SiteNav />
    <header className="case-study-hero section-pad"><span className="kicker">Case study / {category}</span><h1>{client}</h1><p>{headline}</p><a href={liveUrl} target="_blank" rel="noreferrer">View live website <ArrowUpRight aria-hidden="true" /></a></header>
    <figure className="case-study-cover section-pad"><Image src={image} alt={imageAlt} width={imageWidth} height={imageHeight} sizes="100vw" unoptimized /></figure>
    <section className="case-study-story section-pad"><div><span className="kicker">The brief</span><h2>BUILD THE WORLD AROUND THE <em>WORK.</em></h2></div><div><p className="case-study-summary">{summary}</p><h3>The challenge</h3><p>{challenge}</p></div></section>
    <section className="case-study-approach section-pad"><div><span className="kicker">Our approach</span><ol>{approach.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></div><aside><span className="kicker">Scope</span><ul>{scope.map((item) => <li key={item}>{item}</li>)}</ul></aside></section>
    <section className="page-cta"><span className="kicker">Build the next case study</span><h2>YOUR BUSINESS.<br /><em>YOUR DIGITAL WORLD.</em></h2><Link href="/start-a-project/">Start a project <ArrowUpRight aria-hidden="true" /></Link></section>
    <SiteFooter />
  </main>;
}
