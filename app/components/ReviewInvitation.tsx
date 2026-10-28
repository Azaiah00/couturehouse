import { ArrowUpRight } from "lucide-react";

export default function ReviewInvitation() {
  return <section className="review-invitation section-pad" aria-label="Free salon website review">
    <div><span className="kicker">A useful place to start / Free</span><h2>SEE WHAT YOUR<br /><em>WEBSITE COULD DO.</em></h2></div>
    <div><p>Send your salon website or booking page. Get three focused observations about trust, booking and discovery, plus a clear next step.</p><a href="/salon-website-audit/" data-track="review_cta">Get my free website review <ArrowUpRight aria-hidden="true" /></a><small>Private feedback. No obligation to commission a project.</small></div>
  </section>;
}
