// Placeholder Terms of Service. Replace with copy reviewed by your counsel
// before launch. The structure mirrors typical SaaS / studio terms.

const sections = [
  {
    title: "Acceptance",
    body: [
      "By using couturehouse.co (the “Site”) or engaging Couture House Co. (“we”, “us”) for services, you agree to these Terms.",
      "If you do not agree, do not use the Site or our services.",
    ],
  },
  {
    title: "Services",
    body: [
      "We provide creative, production, digital and marketing services as described on this Site or in a Statement of Work agreed between the parties.",
      "Specific deliverables, timelines, and pricing are governed by the SOW signed by both parties.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "On full payment, ownership of final, approved deliverables transfers to the client per the terms set in the relevant SOW.",
      "Working files, source materials, and pre-existing tools created or owned by us remain our property unless explicitly licensed in writing.",
      "We retain the right to display delivered work in our portfolio and case studies unless restricted in the SOW.",
    ],
  },
  {
    title: "Confidentiality",
    body: [
      "Each party will protect the other's confidential information using a reasonable standard of care and use it only to perform under the engagement.",
    ],
  },
  {
    title: "Payment",
    body: [
      "Invoices are due net-15 unless otherwise agreed. Late balances accrue interest at the lesser of 1.5% per month or the maximum permitted by law.",
    ],
  },
  {
    title: "Warranty disclaimer",
    body: [
      "The Site and our services are provided on an “as-is” basis. We disclaim all implied warranties to the maximum extent permitted by law.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the maximum extent permitted by law, our aggregate liability under any engagement is limited to the fees paid to us during the three months preceding the claim.",
    ],
  },
  {
    title: "Governing law",
    body: [
      "These Terms are governed by the laws of the State of New York, without regard to conflict of laws principles.",
    ],
  },
  {
    title: "Changes",
    body: [
      "We may update these Terms from time to time. Material changes will be reflected on this page with a new effective date.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="bg-charcoal min-h-screen pt-32 md:pt-40 pb-20 site-inset">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-16">
          <span className="eyebrow mb-6 block">Legal</span>
          <h1 className="display-heading text-white text-[clamp(2.5rem,7vw,7rem)] leading-[0.92]">
            Terms of<br />Service.
          </h1>
          <p className="text-white/55 font-sans text-sm mt-8">
            Effective date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {sections.map((s, i) => (
            <section key={s.title} className="border-t border-line pt-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <span className="text-white/40 font-sans text-xs tracking-[0.22em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h2 className="text-white text-xl md:text-2xl uppercase tracking-tight mb-5 leading-tight">
                    {s.title}
                  </h2>
                  <div className="space-y-4 text-white/70 font-sans text-base leading-relaxed">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
