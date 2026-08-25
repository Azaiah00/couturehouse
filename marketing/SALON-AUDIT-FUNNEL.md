# Salon Website Audit Funnel

Status: ready for local implementation  
Proposed route: `/salon-website-audit/`  
Primary traffic: Instagram and TikTok organic content  
Primary conversion: qualified audit request

## Offer

### Name

The Three-Point Salon Website Review

### Promise

> Send us your website and the outcome you want. Couture House will identify three focused opportunities to improve trust, booking, or discovery.

### Boundaries

- It is a focused review, not a comprehensive strategy engagement.
- No guaranteed rankings, traffic, bookings, or revenue.
- Couture House may decline businesses that are inactive, outside the niche, or not ready for meaningful website work.
- Public teardowns require separate written permission.

## Page structure

1. Hero: `YOUR WEBSITE SHOULD WORK AS HARD AS YOUR REPUTATION.`
2. One-sentence offer and short form above the fold.
3. Three review dimensions: Get found, earn trust, make booking easier.
4. Salon-specific portfolio proof.
5. What the prospect receives.
6. Qualification statement.
7. Request form.
8. FAQ.
9. Final CTA.

## Form fields

Required:

- Name
- Business or salon name
- Email
- Instagram handle
- Current website URL
- Business type: salon owner, independent stylist, loctician/natural-hair specialist, hair-care brand, other
- Primary goal: more bookings, stronger trust, Google visibility, product sales, easier operations, unsure

Optional:

- City and state
- Booking link
- One sentence about the biggest frustration
- Desired timing

Consent:

- Permission for Couture House to use the submitted information only to review the business and respond.
- Separate unchecked permission if the owner is willing to be considered for a public, anonymized, or named teardown.

## Confirmation state

> Your request is in. We’ll review the website and respond with three focused observations. If the opportunity looks like a strong fit for Couture House, we may also invite you to a short conversation about the next step.

Do not promise a turnaround time until delivery capacity is confirmed.

## Analytics events

- `audit_view`
- `audit_start`
- `audit_complete`
- `audit_qualified_call_click`
- `case_study_click`

Event parameters:

- `traffic_source`
- `campaign`
- `content`
- `business_type`
- `primary_goal`

UTM example:

`https://couturehouse.co/salon-website-audit/?utm_source=instagram&utm_medium=organic_social&utm_campaign=salon_audit&utm_content=website_red_flags_carousel`

## Lead handling

1. Form submission arrives in the Couture House inbox and a lead tracker.
2. Send an acknowledgement automatically.
3. Review the website, Instagram, booking flow, and visible Google presence.
4. Send three observations with one genuine strength.
5. Invite only strong-fit prospects to a 20-minute call.
6. Record outcome: delivered, replied, call booked, nurture, or not a fit.

## Qualification signals

Prioritize businesses with:

- active client work;
- real reviews or visible demand;
- an outdated, broken, generic, or booking-only web presence;
- high-value or specialized services;
- an expansion, rebrand, hiring, product, education, or location signal;
- a clear desire to improve bookings, trust, discovery, or operations.

## Required implementation decisions

- Confirm how many free reviews Couture House can deliver each week.
- Choose the response-time promise, if any.
- Decide whether submissions go only to email or also to a CRM.
- Confirm whether the free audit remains a DM-first offer during the initial test or whether the landing page becomes the primary CTA immediately.

## Recommended launch sequence

1. Use DM `AUDIT` for the first three posts to learn the language and objections prospects use.
2. Build the landing page locally during the same week.
3. Test the form, event tracking, and mobile experience.
4. Publish the page after at least five manual audit conversations or sooner if DM volume becomes difficult to manage.
5. Replace the Instagram bio link with the dedicated audit URL.

