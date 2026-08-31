"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, LayoutDashboard, Scissors, Sparkles, UserRound } from "lucide-react";

const services = [
  { name: "Silk press + finish", time: "2 hr", price: "$145" },
  { name: "Signature loc retwist", time: "2.5 hr", price: "$175" },
  { name: "Protective style consult", time: "30 min", price: "$40" },
];

const artists = [
  { name: "Amara Ellis", specialty: "Healthy hair + silk presses", initials: "AE" },
  { name: "Nia Brooks", specialty: "Loc care + protective styling", initials: "NB" },
];

const times = ["9:30 AM", "11:00 AM", "1:30 PM", "3:00 PM", "4:30 PM"];

const initialAppointments = [
  { id: 1, time: "9:30", client: "Jordan M.", service: "Silk press + finish", status: "Confirmed" },
  { id: 2, time: "11:45", client: "Taylor R.", service: "Loc maintenance", status: "Arrived" },
  { id: 3, time: "2:30", client: "Morgan K.", service: "Protective style consult", status: "Pending" },
];

export default function BookingSuiteDemo() {
  const [mode, setMode] = useState<"client" | "owner">("client");
  const [step, setStep] = useState(1);
  const [service, setService] = useState(0);
  const [artist, setArtist] = useState(0);
  const [time, setTime] = useState(1);
  const [notice, setNotice] = useState("");
  const [appointments, setAppointments] = useState(initialAppointments);

  const total = useMemo(() => services[service].price, [service]);

  function changeMode(next: "client" | "owner") {
    setMode(next);
    setNotice("");
  }

  function completeDemo() {
    setNotice("Demo complete — no real appointment was created.");
  }

  function updateAppointment(id: number, status: string) {
    setAppointments((items) => items.map((item) => item.id === id ? { ...item, status } : item));
    setNotice(`Sample appointment marked ${status.toLowerCase()}.`);
  }

  return (
    <div className="booking-demo-shell">
      <div className="booking-demo-toolbar">
        <div><span>LIVE PRODUCT WALKTHROUGH</span><strong>Sage &amp; Silk Studio</strong></div>
        <div role="group" aria-label="Choose a demo view">
          <button type="button" className={mode === "client" ? "active" : ""} onClick={() => changeMode("client")}><UserRound aria-hidden="true" /> Client view</button>
          <button type="button" className={mode === "owner" ? "active" : ""} onClick={() => changeMode("owner")}><LayoutDashboard aria-hidden="true" /> Owner view</button>
        </div>
      </div>

      {mode === "client" ? (
        <div className="booking-demo-client">
          <aside>
            <div className="booking-demo-mark">S<span>+</span>S</div>
            <p>Sage &amp; Silk</p><small>Intentional care for textured hair.</small>
            <ol>
              {["Service", "Artist", "Date + time", "Review"].map((label, index) => (
                <li key={label} className={step === index + 1 ? "active" : step > index + 1 ? "done" : ""}><span>{step > index + 1 ? <Check aria-hidden="true" /> : index + 1}</span>{label}</li>
              ))}
            </ol>
            <p className="booking-demo-sample-note">Sample experience only. No payment or personal details are collected.</p>
          </aside>

          <section aria-live="polite">
            <header><span>STEP {step} OF 4</span><h3>{step === 1 ? "What are we creating?" : step === 2 ? "Choose your artist" : step === 3 ? "Pick a time" : "Review your visit"}</h3></header>

            {step === 1 && <div className="booking-demo-choices">{services.map((item, index) => <button type="button" key={item.name} className={service === index ? "selected" : ""} onClick={() => setService(index)}><span><Scissors aria-hidden="true" /><b>{item.name}</b><small>{item.time}</small></span><strong>{item.price}</strong></button>)}</div>}

            {step === 2 && <div className="booking-demo-artists">{artists.map((item, index) => <button type="button" key={item.name} className={artist === index ? "selected" : ""} onClick={() => setArtist(index)}><i>{item.initials}</i><span><b>{item.name}</b><small>{item.specialty}</small></span><Check aria-hidden="true" /></button>)}</div>}

            {step === 3 && <div className="booking-demo-calendar"><div><CalendarDays aria-hidden="true" /><span><small>SELECTED DATE</small><b>Thursday, September 10</b></span></div><div className="booking-demo-times">{times.map((item, index) => <button type="button" key={item} className={time === index ? "selected" : ""} onClick={() => setTime(index)}>{item}</button>)}</div></div>}

            {step === 4 && <div className="booking-demo-review"><Sparkles aria-hidden="true" /><div><span>YOUR SAMPLE APPOINTMENT</span><h4>{services[service].name}</h4><p>{artists[artist].name} · Thu, Sep 10 at {times[time]}</p></div><dl><div><dt>Service</dt><dd>{total}</dd></div><div><dt>Deposit today</dt><dd>$35</dd></div><div><dt>Remaining at visit</dt><dd>{service === 0 ? "$110" : service === 1 ? "$140" : "$5"}</dd></div></dl><button type="button" onClick={completeDemo}>Complete demo booking <ArrowRight aria-hidden="true" /></button></div>}

            <footer className="booking-demo-nav"><button type="button" disabled={step === 1} onClick={() => { setStep((value) => Math.max(1, value - 1)); setNotice(""); }}><ArrowLeft aria-hidden="true" /> Back</button>{step < 4 && <button type="button" onClick={() => setStep((value) => Math.min(4, value + 1))}>Continue <ArrowRight aria-hidden="true" /></button>}</footer>
          </section>
        </div>
      ) : (
        <div className="booking-demo-owner">
          <aside><div className="booking-demo-mark">S<span>+</span>S</div><nav aria-label="Owner demo navigation"><button type="button" className="active"><LayoutDashboard /> Overview</button><button type="button"><CalendarDays /> Calendar</button><button type="button"><UserRound /> Clients</button><button type="button"><Scissors /> Services</button></nav><small>OWNER DEMO · SAMPLE DATA</small></aside>
          <section>
            <header><div><span>THURSDAY, SEPTEMBER 10</span><h3>Good morning, Amara.</h3></div><button type="button" onClick={() => setNotice("Sample calendar opened in this demo.")}><CalendarDays /> View calendar</button></header>
            <div className="booking-demo-owner-stats"><article><small>Appointments</small><strong>08</strong><span>2 spots available</span></article><article><small>Projected today</small><strong>$1,420</strong><span>+$215 vs. last Thu</span></article><article><small>Confirmed</small><strong>06</strong><span>1 awaiting response</span></article></div>
            <div className="booking-demo-schedule"><header><h4>Today&apos;s schedule</h4><span><Clock3 /> Updated just now</span></header>{appointments.map((item) => <article key={item.id}><time>{item.time}</time><div><b>{item.client}</b><span>{item.service}</span></div><em className={`status-${item.status.toLowerCase()}`}>{item.status}</em><div className="booking-demo-row-actions">{item.status === "Pending" && <button type="button" onClick={() => updateAppointment(item.id, "Confirmed")}>Confirm</button>}{item.status !== "Complete" && <button type="button" onClick={() => updateAppointment(item.id, "Complete")}>Mark done</button>}</div></article>)}</div>
          </section>
        </div>
      )}

      {notice && <p className="booking-demo-notice" role="status"><Check aria-hidden="true" /> {notice}</p>}
    </div>
  );
}
