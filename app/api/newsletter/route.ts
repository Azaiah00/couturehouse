import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
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
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "hello@couturehouse.co";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Couture House <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("[newsletter] RESEND_API_KEY not set");
    return NextResponse.json({ error: "Subscription service is not configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  // For now, route signups as a notification email to the team.
  // When you choose a real list provider (ConvertKit, Beehiiv, Mailchimp,
  // Resend Audiences, etc.), swap this for that provider's add-contact API.
  try {
    const result = await resend.emails.send({
      from,
      to,
      subject: `Newsletter signup — ${parsed.data.email}`,
      text: `New subscriber: ${parsed.data.email}\nAt: ${new Date().toISOString()}`,
    });
    if (result.error) {
      console.error("[newsletter] Resend error:", result.error);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] Unexpected error:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
