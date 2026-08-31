import Link from "next/link";
import { ArrowUpRight, CalendarDays, LayoutDashboard, ShieldCheck } from "lucide-react";

export default function BookingSuiteTeaser() {
  return (
    <section className="booking-suite-teaser section-pad" aria-labelledby="booking-suite-teaser-title">
      <div className="booking-suite-teaser-copy">
        <span className="kicker">Interactive product demo</span>
        <h2 id="booking-suite-teaser-title">FROM FIRST CLICK<br />TO <em>FULL CHAIR.</em></h2>
        <p>Walk through the client booking flow, then switch sides and see the private owner dashboard that keeps appointments, clients, services and availability connected.</p>
        <div className="booking-suite-teaser-actions">
          <Link href="/booking-suite/">Try the booking suite <ArrowUpRight aria-hidden="true" /></Link>
          <Link href="/start-a-project/?service=booking-suite">Build one for my business</Link>
        </div>
        <small>Fictional demo data. Nothing you click creates a real appointment.</small>
      </div>
      <div className="booking-suite-teaser-frame" aria-label="Preview of the Couture House booking suite">
        <div className="booking-suite-teaser-bar"><i /><i /><i /><span>demo.couturehouse.co</span></div>
        <div className="booking-suite-teaser-ui">
          <aside><b>CH</b><span>Sage &amp; Silk</span><small>Booking suite</small></aside>
          <div>
            <header><span>Today&apos;s studio</span><strong>Good morning, Amara.</strong></header>
            <div className="booking-suite-teaser-stats">
              <article><CalendarDays /><small>Appointments</small><b>08</b></article>
              <article><LayoutDashboard /><small>Projected</small><b>$1.4K</b></article>
              <article><ShieldCheck /><small>Confirmed</small><b>06</b></article>
            </div>
            <div className="booking-suite-teaser-slots"><i /><i /><i /><i /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
