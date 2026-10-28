const questions = [
  ["What will my proposal include?", "A defined set of pages, features or content assets, review checkpoints and launch responsibilities. We agree on the deliverables before production begins, so you can see what is included and what would be additional work."],
  ["How are price and timing decided?", "Projects are scoped individually. Page count, content readiness, integrations and the amount of custom design affect the investment and schedule. Share your target launch date and priorities; the proposal confirms the price, milestones and dependencies before you commit."],
  ["What do you need from me?", "Your current website or booking link, service list, goals and any brand assets you already have. For production, we identify the copy, images, policies and account access needed, with clear review points for your feedback."],
  ["Can I keep my booking platform?", "Tell us which platform you use. A direct booking link, an embedded flow and a custom integration involve different levels of access. We review what your platform supports before recommending a connection; replacing it is not automatically necessary."],
  ["What happens to ownership and support?", "Your proposal specifies domain and account access, the deliverables handed over, any third-party licenses or subscriptions, and the scope of launch support. Ongoing updates and maintenance are discussed separately so the responsibilities are clear."],
];

export default function EngagementDetails() {
  return <section className="engagement-details section-pad" aria-labelledby="engagement-details-title">
    <header><span className="kicker">Before we begin</span><h2 id="engagement-details-title">CLEAR SCOPE.<br /><em>CLEAR NEXT STEPS.</em></h2><p>Start with the business goal. We turn it into a proposal you can evaluate.</p></header>
    <div>{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
  </section>;
}
