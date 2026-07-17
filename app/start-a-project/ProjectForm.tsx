"use client";

import { useEffect, useState, type FormEvent } from "react";

const serviceOptions = ["Websites", "Apps", "Workflows", "Content"];

export default function ProjectForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service");
    const match = serviceOptions.find((service) => service.toLowerCase() === requested?.toLowerCase());
    if (match) setSelectedServices([match]);
  }, []);

  function toggleService(service: string) {
    setSelectedServices((current) => current.includes(service) ? current.filter((item) => item !== service) : [...current, service]);
  }

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const business = String(form.get("business") ?? "New project");
    const body = [
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Business: ${business}`,
      `Current website: ${form.get("website") || "Not provided"}`,
      `Services: ${selectedServices.length ? selectedServices.join(", ") : "Open to recommendation"}`,
      `Investment range: ${form.get("budget")}`,
      `Ideal timing: ${form.get("timeline")}`,
      "",
      "Project vision:",
      String(form.get("details") ?? ""),
    ].join("\n");

    window.location.href = `mailto:hello@couturehouse.co?subject=${encodeURIComponent(`New Couture House project inquiry — ${business}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="project-form" onSubmit={submitInquiry}>
      <div className="project-form-grid">
        <label><span>Your name *</span><input name="name" required autoComplete="name" placeholder="Name" /></label>
        <label><span>Email *</span><input name="email" type="email" required autoComplete="email" placeholder="you@business.com" /></label>
        <label><span>Business / brand *</span><input name="business" required autoComplete="organization" placeholder="Business name" /></label>
        <label><span>Current website</span><input name="website" type="url" inputMode="url" placeholder="https://" /></label>
      </div>

      <fieldset className="project-form-services">
        <legend>What are we creating?</legend>
        <div>{serviceOptions.map((service) => <button className={selectedServices.includes(service) ? "is-selected" : ""} type="button" aria-pressed={selectedServices.includes(service)} onClick={() => toggleService(service)} key={service}>{service}<span aria-hidden="true">+</span></button>)}</div>
      </fieldset>

      <div className="project-form-grid">
        <label><span>Investment range *</span><select name="budget" required defaultValue=""><option value="" disabled>Select a range</option><option>Under $5,000</option><option>$5,000–$10,000</option><option>$10,000–$25,000</option><option>$25,000+</option><option>Not sure yet</option></select></label>
        <label><span>Ideal timing *</span><select name="timeline" required defaultValue=""><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1–2 months</option><option>Within 3–6 months</option><option>Later this year</option><option>Still exploring</option></select></label>
      </div>

      <label className="project-form-details"><span>Tell us about the vision *</span><textarea name="details" required rows={7} placeholder="What are you building, what needs to change and what should people feel or do?" /></label>

      <div className="project-form-submit"><p>This opens a ready-to-send email in your preferred mail app. You can also write directly to <a href="mailto:hello@couturehouse.co">hello@couturehouse.co</a>.</p><button type="submit">Prepare my project brief <span aria-hidden="true">&#8599;</span></button></div>
    </form>
  );
}
