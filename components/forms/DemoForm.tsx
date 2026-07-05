"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/siteData";

const field =
  "w-full rounded-[12px] border border-line2 bg-white/[0.02] px-4 py-3.5 text-[15px] text-white placeholder:text-muted focus:border-gold focus:outline-none transition-colors";

export function DemoForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const salon = String(data.get("salon") ?? "");
    const phone = String(data.get("phone") ?? "");
    const notes = String(data.get("notes") ?? "");

    const subject = encodeURIComponent(`Demo request — ${salon || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nSalon / brand: ${salon}\nPhone: ${phone}\n\nWhat's broken about my online presence right now:\n${notes}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3.5">
      <div className="grid gap-3.5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[12px] uppercase tracking-[0.1em] text-muted">
            Your name
          </span>
          <input required name="name" autoComplete="name" className={field} placeholder="Teddy Chisom" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[12px] uppercase tracking-[0.1em] text-muted">
            Salon / brand
          </span>
          <input required name="salon" className={field} placeholder="Beverly's of Nashville" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-[12px] uppercase tracking-[0.1em] text-muted">Phone</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} placeholder="(615) 555-0123" />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-[12px] uppercase tracking-[0.1em] text-muted">
          What&apos;s broken about your online presence right now?
        </span>
        <textarea
          name="notes"
          rows={4}
          className={`${field} resize-none`}
          placeholder="No site, an old one, booking by DM, hard to find on Google…"
        />
      </label>

      <button
        type="submit"
        className="mt-1 flex w-full items-center justify-center rounded-full bg-[linear-gradient(180deg,#EBD08C,#C9A24B)] py-4 text-[15px] font-bold text-[#22190b] shadow-[0_8px_30px_rgba(201,162,75,0.32)] transition-transform hover:-translate-y-0.5"
      >
        Book my 15-min demo →
      </button>

      {sent && (
        <p className="text-center text-[13.5px] text-gold-hi">
          Your email is ready to send — hit send and we&apos;ll be in touch fast.
        </p>
      )}
      <p className="text-center text-[12.5px] text-muted">
        No pressure, no jargon, no invoice for showing up.
      </p>
    </form>
  );
}
