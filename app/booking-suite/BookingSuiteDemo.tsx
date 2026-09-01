"use client";

import { type CSSProperties, useMemo, useState } from "react";
import {
  ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, LayoutDashboard,
  MessageSquareText, Palette, Scissors, Settings2, Sparkles, UserRound, UsersRound,
} from "lucide-react";

const services = [
  { name: "Silk press + finish", time: "2 hr", price: 145 },
  { name: "Signature loc retwist", time: "2.5 hr", price: 175 },
  { name: "Protective style consult", time: "30 min", price: 40 },
];
const artists = [
  { name: "Amara Ellis", specialty: "Healthy hair + silk presses", initials: "AE" },
  { name: "Nia Brooks", specialty: "Loc care + protective styling", initials: "NB" },
];
const dates = [
  { day: "Tue", date: "08", full: "Tuesday, September 8", short: "Tue, Sep 8" },
  { day: "Thu", date: "10", full: "Thursday, September 10", short: "Thu, Sep 10" },
  { day: "Sat", date: "12", full: "Saturday, September 12", short: "Sat, Sep 12" },
  { day: "Tue", date: "15", full: "Tuesday, September 15", short: "Tue, Sep 15" },
];
const times = ["9:30 AM", "11:00 AM", "1:30 PM", "3:00 PM", "4:30 PM"];

type Appointment = { id: number; time: string; client: string; service: string; status: string };
type OwnerView = "overview" | "calendar" | "clients" | "services";

const initialAppointments: Appointment[] = [
  { id: 1, time: "9:30", client: "Jordan M.", service: "Silk press + finish", status: "Confirmed" },
  { id: 2, time: "11:45", client: "Taylor R.", service: "Loc maintenance", status: "Arrived" },
  { id: 3, time: "2:30", client: "Morgan K.", service: "Protective style consult", status: "Pending" },
];
const ownerViews: { id: OwnerView; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "calendar", label: "Calendar", icon: CalendarDays },
  { id: "clients", label: "Clients", icon: UsersRound },
  { id: "services", label: "Services", icon: Scissors },
];
const accentOptions = [
  { label: "Electric lime", value: "#caff1a" },
  { label: "Warm coral", value: "#f2715b" },
  { label: "Studio blue", value: "#8eb1ef" },
];

export default function BookingSuiteDemo() {
  const [mode, setMode] = useState<"client" | "owner">("client");
  const [step, setStep] = useState(1);
  const [service, setService] = useState(0);
  const [artist, setArtist] = useState(0);
  const [date, setDate] = useState(1);
  const [time, setTime] = useState(1);
  const [notice, setNotice] = useState("");
  const [appointments, setAppointments] = useState(initialAppointments);
  const [ownerView, setOwnerView] = useState<OwnerView>("overview");
  const [customizing, setCustomizing] = useState(false);
  const [studioName, setStudioName] = useState("Sage & Silk Studio");
  const [accent, setAccent] = useState(accentOptions[0].value);
  const [deposit, setDeposit] = useState(35);
  const [reminders, setReminders] = useState(true);
  const [consultation, setConsultation] = useState(false);
  const [completed, setCompleted] = useState(false);

  const total = services[service].price;
  const remaining = useMemo(() => Math.max(0, total - deposit), [deposit, total]);
  const studioShort = studioName.trim() || "Your Studio";
  const shellStyle = { "--demo-accent": accent } as CSSProperties;

  function changeMode(next: "client" | "owner") { setMode(next); setNotice(""); }
  function completeDemo() {
    if (!completed) {
      setAppointments((items) => [...items, {
        id: 99, time: times[time].replace(" AM", "").replace(" PM", ""),
        client: "Demo Client", service: services[service].name, status: "Pending",
      }]);
    }
    setCompleted(true);
    setNotice("Sample booking added. No real appointment or payment was created.");
  }
  function showBookingInDashboard() {
    setOwnerView("calendar"); changeMode("owner");
    setNotice("Your sample booking is highlighted in the owner calendar.");
  }
  function updateAppointment(id: number, status: string) {
    setAppointments((items) => items.map((item) => item.id === id ? { ...item, status } : item));
    setNotice(`Sample appointment marked ${status.toLowerCase()}.`);
  }

  return (
    <div className="booking-demo-shell" style={shellStyle}>
      <div className="booking-demo-toolbar">
        <div><span>LIVE PRODUCT WALKTHROUGH</span><strong>{studioShort}</strong></div>
        <div className="booking-demo-toolbar-actions">
          <button type="button" className={customizing ? "customize active" : "customize"} aria-expanded={customizing} onClick={() => setCustomizing((value) => !value)}><Settings2 aria-hidden="true" /> Make it yours</button>
          <div role="group" aria-label="Choose a demo view">
            <button type="button" className={mode === "client" ? "active" : ""} onClick={() => changeMode("client")}><UserRound aria-hidden="true" /> Client view</button>
            <button type="button" className={mode === "owner" ? "active" : ""} onClick={() => changeMode("owner")}><LayoutDashboard aria-hidden="true" /> Owner view</button>
          </div>
        </div>
      </div>

      {customizing && <section className="booking-demo-customizer" aria-label="Customize the sample booking system">
        <header><div><span>LIVE CUSTOMIZATION</span><h3>Change the rules. Watch the demo respond.</h3></div><Palette aria-hidden="true" /></header>
        <label><span>Business name</span><input value={studioName} maxLength={28} onChange={(event) => setStudioName(event.target.value)} /></label>
        <fieldset><legend>Brand accent</legend><div className="booking-demo-swatches">{accentOptions.map((option) => <button type="button" key={option.value} className={accent === option.value ? "selected" : ""} style={{ background: option.value }} aria-label={option.label} aria-pressed={accent === option.value} onClick={() => setAccent(option.value)} />)}</div></fieldset>
        <label><span>Deposit</span><select value={deposit} onChange={(event) => setDeposit(Number(event.target.value))}><option value={0}>No deposit</option><option value={25}>$25</option><option value={35}>$35</option><option value={50}>$50</option></select></label>
        <label className="booking-demo-toggle"><input type="checkbox" checked={reminders} onChange={(event) => setReminders(event.target.checked)} /><span>SMS reminders</span></label>
        <label className="booking-demo-toggle"><input type="checkbox" checked={consultation} onChange={(event) => setConsultation(event.target.checked)} /><span>Require consultation</span></label>
      </section>}

      {mode === "client" ? <div className="booking-demo-client">
        <aside>
          <div className="booking-demo-mark">S<span>+</span>S</div><p>{studioShort}</p><small>Intentional care for textured hair.</small>
          <ol>{["Service", "Artist", "Date + time", "Review"].map((label, index) => <li key={label} className={step === index + 1 ? "active" : step > index + 1 ? "done" : ""}><span>{step > index + 1 ? <Check aria-hidden="true" /> : index + 1}</span>{label}</li>)}</ol>
          <p className="booking-demo-sample-note">Sample experience only. No payment or personal details are collected.</p>
        </aside>
        <section aria-live="polite">
          <header><span>STEP {step} OF 4</span><h3>{step === 1 ? "What are we creating?" : step === 2 ? "Choose your artist" : step === 3 ? "Choose a date and time" : "Review your visit"}</h3></header>
          {step === 1 && <div className="booking-demo-choices">{services.map((item, index) => <button type="button" key={item.name} className={service === index ? "selected" : ""} aria-pressed={service === index} onClick={() => { setService(index); setCompleted(false); }}><span><Scissors aria-hidden="true" /><b>{item.name}</b><small>{item.time}</small></span><strong>${item.price}</strong></button>)}</div>}
          {step === 2 && <div className="booking-demo-artists">{artists.map((item, index) => <button type="button" key={item.name} className={artist === index ? "selected" : ""} aria-pressed={artist === index} onClick={() => { setArtist(index); setCompleted(false); }}><i>{item.initials}</i><span><b>{item.name}</b><small>{item.specialty}</small></span><Check aria-hidden="true" /></button>)}</div>}
          {step === 3 && <div className="booking-demo-calendar"><div><CalendarDays aria-hidden="true" /><span><small>SELECTED DATE</small><b>{dates[date].full}</b></span></div><div className="booking-demo-dates" role="group" aria-label="Choose a date">{dates.map((item, index) => <button type="button" key={item.date} className={date === index ? "selected" : ""} aria-pressed={date === index} onClick={() => { setDate(index); setCompleted(false); }}><small>{item.day}</small><b>{item.date}</b></button>)}</div><p className="booking-demo-availability"><Clock3 aria-hidden="true" /> Available times update around staff hours, service length and buffer rules.</p><div className="booking-demo-times">{times.map((item, index) => <button type="button" key={item} className={time === index ? "selected" : ""} aria-pressed={time === index} onClick={() => { setTime(index); setCompleted(false); }}>{item}</button>)}</div></div>}
          {step === 4 && <div className="booking-demo-review"><Sparkles aria-hidden="true" /><div><span>YOUR SAMPLE APPOINTMENT</span><h4>{services[service].name}</h4><p>{artists[artist].name} · {dates[date].short} at {times[time]}</p></div>{consultation && <p className="booking-demo-rule"><MessageSquareText aria-hidden="true" /> A consultation will be required before confirmation.</p>}<dl><div><dt>Service</dt><dd>${total}</dd></div><div><dt>Deposit today</dt><dd>{deposit ? `$${deposit}` : "$0"}</dd></div><div><dt>Remaining at visit</dt><dd>${remaining}</dd></div>{reminders && <div><dt>SMS reminders</dt><dd>On</dd></div>}</dl>{completed ? <div className="booking-demo-success"><Check aria-hidden="true" /><div><b>Sample booking added.</b><span>Now see exactly what the owner sees.</span></div><button type="button" onClick={showBookingInDashboard}>See it in the dashboard <ArrowRight aria-hidden="true" /></button></div> : <button type="button" onClick={completeDemo}>Complete demo booking <ArrowRight aria-hidden="true" /></button>}</div>}
          <footer className="booking-demo-nav"><button type="button" disabled={step === 1} onClick={() => { setStep((value) => Math.max(1, value - 1)); setNotice(""); }}><ArrowLeft aria-hidden="true" /> Back</button>{step < 4 && <button type="button" onClick={() => setStep((value) => Math.min(4, value + 1))}>Continue <ArrowRight aria-hidden="true" /></button>}</footer>
        </section>
      </div> : <div className="booking-demo-owner">
        <aside><div className="booking-demo-mark">S<span>+</span>S</div><nav aria-label="Owner demo navigation">{ownerViews.map((view) => { const Icon = view.icon; return <button type="button" key={view.id} className={ownerView === view.id ? "active" : ""} aria-current={ownerView === view.id ? "page" : undefined} onClick={() => { setOwnerView(view.id); setNotice(""); }}><Icon aria-hidden="true" /> {view.label}</button>; })}</nav><small>OWNER DEMO · SAMPLE DATA</small></aside>
        <section>
          <header><div><span>{ownerView === "overview" ? "THURSDAY, SEPTEMBER 10" : "OWNER WORKSPACE"}</span><h3>{ownerView === "overview" ? "Good morning, Amara." : ownerView === "calendar" ? "Calendar" : ownerView === "clients" ? "Client directory" : "Service menu"}</h3></div>{ownerView === "overview" && <button type="button" onClick={() => setOwnerView("calendar")}><CalendarDays aria-hidden="true" /> View calendar</button>}</header>
          {ownerView === "overview" && <><div className="booking-demo-owner-stats"><article><small>Appointments</small><strong>{String(appointments.length + 4).padStart(2, "0")}</strong><span>2 spots available</span></article><article><small>Projected today</small><strong>$1,420</strong><span>+$215 vs. last Thu</span></article><article><small>Confirmed</small><strong>{String(appointments.filter((item) => item.status !== "Pending").length + 3).padStart(2, "0")}</strong><span>{appointments.filter((item) => item.status === "Pending").length} awaiting response</span></article></div><Schedule appointments={appointments} updateAppointment={updateAppointment} /></>}
          {ownerView === "calendar" && <div className="booking-demo-owner-panel"><div className="booking-demo-panel-intro"><CalendarDays aria-hidden="true" /><div><b>Thursday, September 10</b><span>Appointments, gaps and status in one glance.</span></div></div><Schedule appointments={appointments} updateAppointment={updateAppointment} highlightDemo /></div>}
          {ownerView === "clients" && <div className="booking-demo-directory">{[["Jordan M.", "Silk press client", "Last visit · Aug 12", "Prefers low heat · SMS okay"], ["Taylor R.", "Loc care client", "Last visit · Jul 28", "Sensitive scalp · Wednesday visits"], ["Morgan K.", "New consultation", "First visit", "Intake form received"]].map((client) => <article key={client[0]}><i>{client[0].split(" ").map((word) => word[0]).join("")}</i><div><b>{client[0]}</b><span>{client[1]} · {client[2]}</span><small>{client[3]}</small></div><button type="button" onClick={() => setNotice(`Opened ${client[0]} sample client record.`)}>View record</button></article>)}</div>}
          {ownerView === "services" && <div className="booking-demo-service-list">{services.map((item, index) => <article key={item.name}><Scissors aria-hidden="true" /><div><b>{item.name}</b><span>{item.time} · ${item.price}</span><small>{index === 2 ? "Consultation form required" : `${deposit ? `$${deposit}` : "No"} deposit · ${index === 1 ? "Loc specialists only" : "All qualified artists"}`}</small></div><button type="button" onClick={() => setNotice(`${item.name} rules opened for editing.`)}>Edit rules</button></article>)}</div>}
        </section>
      </div>}
      {notice && <p className="booking-demo-notice" role="status"><Check aria-hidden="true" /> {notice}</p>}
    </div>
  );
}

function Schedule({ appointments, updateAppointment, highlightDemo = false }: { appointments: Appointment[]; updateAppointment: (id: number, status: string) => void; highlightDemo?: boolean }) {
  return <div className="booking-demo-schedule"><header><h4>Today&apos;s schedule</h4><span><Clock3 aria-hidden="true" /> Updated just now</span></header>{appointments.map((item) => <article key={item.id} className={highlightDemo && item.id === 99 ? "demo-booking" : ""}><time>{item.time}</time><div><b>{item.client}</b><span>{item.service}</span></div><em className={`status-${item.status.toLowerCase()}`}>{item.status}</em><div className="booking-demo-row-actions">{item.status === "Pending" && <button type="button" onClick={() => updateAppointment(item.id, "Confirmed")}>Confirm</button>}{item.status !== "Complete" && <button type="button" onClick={() => updateAppointment(item.id, "Complete")}>Mark done</button>}</div></article>)}</div>;
}
