import type { Metadata } from "next";
import Link from "next/link";
import ProjectForm from "./ProjectForm";

export const metadata: Metadata = {
  title: "Start a Project | Couture House Co.",
  description: "Tell Couture House Co. about your website, app, workflow or content project.",
};

export default function StartProjectPage() {
  return (
    <main className="start-page">
      <div className="grain" aria-hidden="true" />
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="wordmark" href="/" aria-label="Couture House home"><img className="nav-logo" src="/brand/footer-logo.png" alt="" /><span className="wordmark-copy">Digital atelier<small>Beauty / Culture / Business</small></span></Link>
        <div className="nav-links"><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/studio">Studio</Link></div>
        <a className="nav-cta magnetic" href="mailto:hello@couturehouse.co">Email the studio <span aria-hidden="true">&#8599;</span></a>
      </nav>

      <header className="start-hero section-pad">
        <span className="kicker">Start a project / Couture House Co.</span>
        <h1>BRING THE<br /><em>VISION.</em></h1>
        <div><p>Tell us what you are building, where the business is getting stuck and what the next chapter should feel like.</p><span>Websites / Apps<br />Workflows / Content</span></div>
      </header>

      <section className="project-form-section section-pad">
        <div className="project-form-intro"><span>01 / The brief</span><h2>LET&apos;S FIND<br />THE RIGHT<br /><em>WAY IN.</em></h2><p>You do not need a perfect brief. A clear ambition and a little context are enough to begin.</p></div>
        <ProjectForm />
      </section>

      <section className="start-expect section-pad">
        <span className="kicker">What happens next</span>
        <div><article><span>01</span><h3>We read closely.</h3><p>Your inquiry is reviewed for the goal, fit and most useful starting point.</p></article><article><span>02</span><h3>We reply thoughtfully.</h3><p>Expect a focused response with next questions or a conversation link.</p></article><article><span>03</span><h3>We shape the path.</h3><p>If the fit is right, we recommend a scope, rhythm and clear next step.</p></article></div>
      </section>

      <footer><Link className="footer-logo-link" href="/"><img src="/brand/footer-logo.png" alt="Couture House" /></Link><p>Digital atelier for hair, beauty, culture and ambitious businesses.</p><div><Link href="/work">Work &#8599;</Link><Link href="/services">Services &#8599;</Link><a href="https://www.instagram.com/couturehouse.co/" target="_blank" rel="noreferrer">Instagram &#8599;</a></div><small>&copy; 2026 Couture House Co.</small></footer>
    </main>
  );
}
