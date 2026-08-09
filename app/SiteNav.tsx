"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/work/", path: "/work", label: "Work" },
  { href: "/services/", path: "/services", label: "Services" },
  { href: "/studio/", path: "/studio", label: "Studio" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const normalizedPathname = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const isProjectPage = normalizedPathname === "/start-a-project";

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.classList.add("mobile-menu-open");
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("mobile-menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <nav className={`site-nav${open ? " menu-is-open" : ""}`} aria-label="Primary navigation">
      <Link className="wordmark" href="/" aria-label="Couture House home">
        <Image className="nav-logo" src="/brand/footer-logo.png" alt="" width={267} height={244} sizes="92px" priority unoptimized />
        <span className="wordmark-copy">Digital atelier<small>Beauty / Culture / Business</small></span>
      </Link>
      <div className="nav-links">
        {links.map((link) => <Link href={link.href} aria-current={normalizedPathname === link.path ? "page" : undefined} key={link.href}>{link.label}</Link>)}
      </div>
      <div className="nav-actions">
        {isProjectPage ? (
          <a className="nav-cta magnetic" href="#project-form">Contact the studio <ArrowDown aria-hidden="true" /></a>
        ) : (
          <Link className="nav-cta magnetic" href="/start-a-project/">Start a project <ArrowUpRight aria-hidden="true" /></Link>
        )}
        <button className="nav-menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((current) => !current)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <div className="mobile-navigation" id="mobile-navigation" aria-hidden={!open}>
        <span className="mobile-navigation-kicker">Couture House / Explore</span>
        <div className="mobile-navigation-links">
          <Link href="/" aria-current={normalizedPathname === "/" ? "page" : undefined} onClick={() => setOpen(false)}><span>00</span>Home<ArrowUpRight aria-hidden="true" /></Link>
          {links.map((link, index) => <Link href={link.href} aria-current={normalizedPathname === link.path ? "page" : undefined} onClick={() => setOpen(false)} key={link.href}><span>0{index + 1}</span>{link.label}<ArrowUpRight aria-hidden="true" /></Link>)}
          <Link href="/start-a-project/" aria-current={isProjectPage ? "page" : undefined} onClick={() => setOpen(false)}><span>04</span>Start a project<ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <div className="mobile-navigation-foot">
          <p>Digital worlds for hair, beauty, culture and ambitious businesses.</p>
          <a href="https://www.instagram.com/couturehouse.co/" target="_blank" rel="noreferrer">Instagram<ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
    </nav>
  );
}
