"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

function attribution() {
  const params = new URLSearchParams(window.location.search);
  return {
    traffic_source: params.get("utm_source") || "direct",
    traffic_medium: params.get("utm_medium") || "none",
    campaign: params.get("utm_campaign") || "salon_audit",
    content: params.get("utm_content") || "page",
  };
}

function track(name: string, detail: Record<string, string> = {}) {
  window.dispatchEvent(new CustomEvent(`couture:${name}`, { detail: { ...attribution(), ...detail } }));
}

export default function AuditForm() {
  const [status, setStatus] = useState<Status>("idle");
  const started = useRef(false);

  useEffect(() => { track("audit_view"); }, []);

  function markStarted() {
    if (started.current) return;
    started.current = true;
    track("audit_start");
  }

  async function submitAudit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const business = String(form.get("business") || "Salon website audit");
    const businessType = String(form.get("business_type") || "Not specified");
    const primaryGoal = String(form.get("primary_goal") || "Not specified");
    const source = attribution();

    form.set("_subject", `New salon website audit request — ${business}`);
    form.set("_template", "table");
    form.set("_captcha", "false");
    form.set("_replyto", String(form.get("email") || ""));
    Object.entries(source).forEach(([key, value]) => form.set(key, value));
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@couturehouse.co", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });
      const result = await response.json() as { success?: boolean | string };
      if (!response.ok || result.success === false || result.success === "false") throw new Error("Audit request failed");
      track("audit_complete", { business_type: businessType, primary_goal: primaryGoal });
      setStatus("success");
      formElement.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="audit-success" role="status">
        <Check aria-hidden="true" />
        <span>Request received</span>
        <h2>Your website is in the studio.</h2>
        <p>We&apos;ll review the trust, booking and discovery experience and respond with three focused observations. If the opportunity looks like a strong fit, we may also invite you to a short conversation about the next step.</p>
      </div>
    );
  }

  return (
    <form className="audit-form" onSubmit={submitAudit} onFocus={markStarted}>
      <input className="form-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="audit-form-grid">
        <label><span>Your name *</span><input name="name" required autoComplete="name" placeholder="Name" /></label>
        <label><span>Email *</span><input name="email" type="email" required autoComplete="email" placeholder="you@business.com" /></label>
        <label><span>Salon / business *</span><input name="business" required autoComplete="organization" placeholder="Business name" /></label>
        <label><span>Instagram *</span><input name="instagram" required placeholder="@handle" /></label>
        <label><span>Website *</span><input name="website" type="url" inputMode="url" required placeholder="https://" /></label>
        <label><span>City + state</span><input name="location" autoComplete="address-level2" placeholder="Atlanta, GA" /></label>
        <label><span>Business type *</span><select name="business_type" required defaultValue=""><option value="" disabled>Select one</option><option>Salon owner</option><option>Independent stylist</option><option>Loctician / natural-hair specialist</option><option>Hair-care brand</option><option>Other beauty business</option></select></label>
        <label><span>Primary goal *</span><select name="primary_goal" required defaultValue=""><option value="" disabled>Select one</option><option>More qualified bookings</option><option>Stronger trust</option><option>Better Google visibility</option><option>Product sales</option><option>Easier operations</option><option>Not sure yet</option></select></label>
      </div>
      <label className="audit-form-details"><span>What frustrates you most about the current website?</span><textarea name="frustration" rows={5} placeholder="A sentence or two is enough." /></label>
      <label className="audit-consent"><input name="privacy_consent" type="checkbox" required /><span>I agree that Couture House may use this information to review my business and respond. Read the <a href="/privacy/">privacy policy</a>.</span></label>
      <label className="audit-consent"><input name="public_teardown_permission" type="checkbox" /><span>I&apos;m open to being contacted separately about a future public website review. This is optional and is not permission to publish anything yet.</span></label>
      <div className="audit-form-action">
        <p>{status === "error" ? <>The form could not send just now. Please email <a href="mailto:hello@couturehouse.co">hello@couturehouse.co</a>.</> : "A focused review—not a generic automated score."}</p>
        <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request my review"}<ArrowUpRight aria-hidden="true" /></button>
      </div>
    </form>
  );
}

