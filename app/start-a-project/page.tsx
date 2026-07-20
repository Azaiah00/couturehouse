import type { Metadata } from "next";
import Link from "next/link";
import PageSoundtrack from "../PageSoundtrack";
import SiteFooter from "../SiteFooter";
import SiteNav from "../SiteNav";
import ProjectForm from "./ProjectForm";

export const metadata: Metadata = {
  title: "Start a Project | Couture House Co.",
  description: "Tell Couture House Co. about your website, app, workflow or content project.",
};

export default function StartProjectPage() {
  return (
    <main className="start-page">
      <PageSoundtrack src="/audio/start-project.mp3" title="Untitled (Remastered) III" />
      <div className="grain" aria-hidden="true" />
      <SiteNav />

      <header className="start-hero section-pad">
        <span className="kicker">Start a project / Couture House Co.</span>
        <h1>BRING THE<br /><em>VISION.</em></h1>
        <div><p>Tell us what you are building, where the business is getting stuck and what the next chapter should feel like.</p><span>Websites / Apps<br />Workflows + Automation<br />Content + Music</span></div>
      </header>

      <section className="project-form-section section-pad" id="project-form">
        <div className="project-form-intro"><span>01 / The brief</span><h2>LET&apos;S FIND<br />THE RIGHT<br /><em>WAY IN.</em></h2><p>You do not need a perfect brief. A clear ambition and a little context are enough to begin.</p></div>
        <ProjectForm />
      </section>

      <section className="start-expect section-pad">
        <span className="kicker">What happens next</span>
        <div><article><span>01</span><h3>We read closely.</h3><p>Your inquiry is reviewed for the goal, fit and most useful starting point.</p></article><article><span>02</span><h3>We reply thoughtfully.</h3><p>Expect a focused response with next questions or a conversation link.</p></article><article><span>03</span><h3>We shape the path.</h3><p>If the fit is right, we recommend a scope, rhythm and clear next step.</p></article></div>
      </section>

      <SiteFooter />
    </main>
  );
}
