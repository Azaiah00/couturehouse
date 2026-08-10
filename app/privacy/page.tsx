import type { Metadata } from "next";
import SiteFooter from "../SiteFooter";
import SiteNav from "../SiteNav";

export const metadata: Metadata = {
  title: "Privacy Policy | Couture House Co.",
  description: "How Couture House Co. handles information submitted through couturehouse.co.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="grain" aria-hidden="true" />
      <SiteNav />
      <article className="legal-content section-pad">
        <span className="kicker">Couture House Co. / Legal</span>
        <h1>PRIVACY<br /><em>POLICY.</em></h1>
        <p className="legal-updated">Effective August 8, 2026</p>
        <section><h2>What we collect</h2><p>When you submit a project inquiry, we collect the information you choose to provide, such as your name, email address, business name, website, project interests, budget, timing and project details.</p></section>
        <section><h2>How we use it</h2><p>We use inquiry information to review your request, respond to you, recommend services, prepare a scope and communicate about a potential or active project. We do not sell your personal information.</p></section>
        <section><h2>Services that process information</h2><p>This website is hosted by Netlify. Project inquiries are transmitted through FormSubmit and delivered to the Couture House Co. studio inbox. Those providers may process technical or form data as needed to operate their services.</p></section>
        <section><h2>Analytics and storage</h2><p>We use Google Analytics to understand website traffic and interactions, including pages viewed, referral source, approximate location, device and browser information, and actions such as submitting a project inquiry. Google may use cookies or similar technologies to provide this measurement service. Learn more about <a href="https://policies.google.com/technologies/partner-sites">how Google uses information from sites that use its services</a>. The site may also store a small preference in your browser to remember whether you turned the optional soundtrack on. You can clear cookies and browser storage through your browser settings.</p></section>
        <section><h2>Your choices</h2><p>You may ask us to correct or delete inquiry information by emailing us. You can also use browser privacy controls or extensions to limit analytics.</p></section>
        <section><h2>Contact</h2><p>Questions or privacy requests can be sent to <a href="mailto:hello@couturehouse.co">hello@couturehouse.co</a>.</p></section>
      </article>
      <SiteFooter />
    </main>
  );
}
