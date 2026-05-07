import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(1),
  industry: z.string().min(1),
  services: z.array(z.string()).min(1),
  budget: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "hello@couturehouse.co";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Couture House <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 },
    );
  }

  const data = parsed.data;
  const resend = new Resend(apiKey);

  const subject = `New inquiry — ${data.company} (${data.name})`;
  const text = [
    `Name:      ${data.name}`,
    `Email:     ${data.email}`,
    `Company:   ${data.company}`,
    `Industry:  ${data.industry}`,
    `Budget:    ${data.budget}`,
    `Services:  ${data.services.join(", ")}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #111;">
      <h2 style="font-size: 18px; letter-spacing: 0.12em; text-transform: uppercase; margin: 0 0 24px;">New inquiry — Couture House</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding:6px 0; color:#666; width:120px;">Name</td><td>${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding:6px 0; color:#666;">Email</td><td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding:6px 0; color:#666;">Company</td><td>${escapeHtml(data.company)}</td></tr>
        <tr><td style="padding:6px 0; color:#666;">Industry</td><td>${escapeHtml(data.industry)}</td></tr>
        <tr><td style="padding:6px 0; color:#666;">Budget</td><td>${escapeHtml(data.budget)}</td></tr>
        <tr><td style="padding:6px 0; color:#666;">Services</td><td>${data.services.map(escapeHtml).join(", ")}</td></tr>
      </table>
      <h3 style="font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; margin: 32px 0 12px; color:#666;">Message</h3>
      <p style="font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject,
      text,
      html,
    });

    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
