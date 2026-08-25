"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = "G-4TMQXSC4M5";

export default function Analytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = window.gtag ?? ((...args: unknown[]) => window.dataLayer?.push(args));

    if (!document.querySelector(`script[data-ga-id="${measurementId}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.dataset.gaId = measurementId;
      document.head.appendChild(script);
    }
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      page_path: window.location.pathname,
      page_location: window.location.href,
    });

    const trackClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest("a,button");
      if (!target) return;
      const href = target instanceof HTMLAnchorElement ? target.href : undefined;
      window.gtag?.("event", "site_interaction", {
        link_text: target.textContent?.trim().slice(0, 100),
        link_url: href,
        page_path: window.location.pathname,
      });
    };
    const trackLead = () => window.gtag?.("event", "generate_lead", {
      page_path: window.location.pathname,
    });
    const trackAudit = (event: Event) => {
      const customEvent = event as CustomEvent<Record<string, string>>;
      const eventName = event.type.replace("couture:", "");
      window.gtag?.("event", eventName, {
        page_path: window.location.pathname,
        ...(customEvent.detail || {}),
      });
    };
    document.addEventListener("click", trackClick);
    window.addEventListener("couture:lead", trackLead);
    ["couture:audit_view", "couture:audit_start", "couture:audit_complete", "couture:audit_qualified_call_click"].forEach((name) => window.addEventListener(name, trackAudit));
    return () => {
      document.removeEventListener("click", trackClick);
      window.removeEventListener("couture:lead", trackLead);
      ["couture:audit_view", "couture:audit_start", "couture:audit_complete", "couture:audit_qualified_call_click"].forEach((name) => window.removeEventListener(name, trackAudit));
    };
  }, []);

  return null;
}
