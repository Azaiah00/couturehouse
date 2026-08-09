import type { Metadata } from "next";
import SiteFooter from "../SiteFooter";
import SiteNav from "../SiteNav";

export const metadata: Metadata = {
  title: "Website Terms | Couture House Co.",
  description: "Terms for using the Couture House Co. website and portfolio.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="grain" aria-hidden="true" />
      <SiteNav />
      <article className="legal-content section-pad">
        <span className="kicker">Couture House Co. / Legal</span>
        <h1>WEBSITE<br /><em>TERMS.</em></h1>
        <p className="legal-updated">Effective August 8, 2026</p>
        <section><h2>Using this website</h2><p>You may browse this site and contact Couture House Co. about potential services. Do not misuse the site, attempt to interfere with its operation or use its content in a way that violates applicable law.</p></section>
        <section><h2>Portfolio and intellectual property</h2><p>The site design, writing, original media and Couture House Co. brand materials are protected intellectual property. Client names, logos and materials remain the property of their respective owners. Portfolio work may not be copied or presented as your own.</p></section>
        <section><h2>External websites</h2><p>Portfolio links and social links may take you to third-party websites. Couture House Co. does not control those sites and is not responsible for their availability, content or privacy practices.</p></section>
        <section><h2>Project inquiries</h2><p>Submitting an inquiry does not create a client relationship or guarantee availability. Any engagement begins only after both parties agree to a written scope and terms.</p></section>
        <section><h2>Contact</h2><p>Questions about these terms can be sent to <a href="mailto:hello@couturehouse.co">hello@couturehouse.co</a>.</p></section>
      </article>
      <SiteFooter />
    </main>
  );
}
