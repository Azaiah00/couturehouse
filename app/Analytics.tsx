"use client";

import { useEffect } from "react";

declare global {
  interface Window { dataLayer?: Record<string, unknown>[]; }
}

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer ?? [];
    const push = (event: Record<string, unknown>) => window.dataLayer?.push(event);

    if (measurementId) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
      push({ "gtm.start": Date.now(), event: "gtag.js" });
      push({ event: "config", measurement_id: measurementId, page_path: window.location.pathname });
    }

    const trackClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest("a,button");
      if (!target) return;
      const href = target instanceof HTMLAnchorElement ? target.href : undefined;
      push({ event: "site_interaction", label: target.textContent?.trim().slice(0, 100), href, page_path: window.location.pathname });
    };
    const trackLead = () => push({ event: "generate_lead", page_path: window.location.pathname });
    document.addEventListener("click", trackClick);
    window.addEventListener("couture:lead", trackLead);
    return () => {
      document.removeEventListener("click", trackClick);
      window.removeEventListener("couture:lead", trackLead);
    };
  }, []);

  return null;
}
