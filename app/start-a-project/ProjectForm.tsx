"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const serviceOptions = ["Websites", "Apps", "Workflows + Automation", "Content + Music"];

export default function ProjectForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service");
    const requestedService = requested?.toLowerCase();
    const match = serviceOptions.find((service) => {
      const normalized = service.toLowerCase();
      return normalized === requestedService ||
        (requestedService === "content" && normalized === "content + music") ||
        (requestedService === "workflows" && normalized === "workflows + automation");
    });
    if (match) setSelectedServices([match]);
  }, []);

  function toggleService(service: string) {
    setSelectedServices((current) => current.includes(service) ? current.filter((item) => item !== service) : [...current, service]);
  }

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const business = String(form.get("business") ?? "New project");
    form.set("services", selectedServices.length ? selectedServices.join(", ") : "Open to recommendation");
    form.set("_subject", `New Couture House project inquiry — ${business}`);
    form.set("_template", "table");
    form.set("_captcha", "false");
    form.set("_replyto", String(form.get("email") ?? ""));
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@couturehouse.co", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });
      const result = await response.json() as { success?: boolean | string };
      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error("Inquiry could not be sent");
      }
      setStatus("success");
      formElement.reset();
      setSelectedServices([]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="project-form" onSubmit={submitInquiry}>
      <input className="form-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
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

      <div className="project-form-submit">
        <div aria-live="polite">
          {status === "success" ? <p className="form-success">Your brief is in our inbox. Thank you—we&apos;ll be in touch.</p> : null}
          {status === "error" ? <p className="form-error">The form could not send just now. Please email <a href="mailto:hello@couturehouse.co">hello@couturehouse.co</a>.</p> : null}
          {status === "idle" || status === "sending" ? <p>Your message is sent directly to the Couture House studio inbox.</p> : null}
        </div>
        <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send my project brief"} <ArrowUpRight aria-hidden="true" /></button>
      </div>
    </form>
  );
}
