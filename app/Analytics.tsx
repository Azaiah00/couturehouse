"use client";

import { useEffect } from "react";
import { ensureAnalytics, measurementId, trackEvent } from "./analytics-events";

export default function Analytics() {
  useEffect(() => {
    ensureAnalytics();

    const loadTag = () => {
      if (document.querySelector(`script[data-ga-id="${measurementId}"]`)) return;
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.dataset.gaId = measurementId;
      document.head.appendChild(script);
    };
    let idle: number | undefined;
    let timer: number | undefined;
    const scheduleTag = () => {
      if (typeof window.requestIdleCallback === "function") {
        idle = window.requestIdleCallback(loadTag, { timeout: 2000 });
      } else {
        timer = window.setTimeout(loadTag, 0);
      }
    };
    // Queue measurements immediately; load the third-party runtime after the page paints.
    const frame = window.requestAnimationFrame(scheduleTag);
    const trackClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a,button") : null;
      if (!target) return;
      const measured = target.closest<HTMLElement>("[data-track]");
      if (measured?.dataset.track) trackEvent(measured.dataset.track, {
        project_name: measured.dataset.project,
      });
      const href = target instanceof HTMLAnchorElement ? target.href : undefined;
      if (!measured && target instanceof HTMLAnchorElement && target.pathname === "/salon-website-audit/") {
        trackEvent("review_cta");
      }
      trackEvent("site_interaction", {
        link_text: target.textContent?.trim().slice(0, 100),
        link_url: href,
      });
    };
    const exposureObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        if (element.dataset.trackExposure) trackEvent(element.dataset.trackExposure);
        exposureObserver.unobserve(element);
      }
    }, { threshold: 0 });
    document.querySelectorAll("[data-track-exposure]").forEach(element => exposureObserver.observe(element));
    document.addEventListener("click", trackClick);
    return () => {
      window.cancelAnimationFrame(frame);
      if (idle !== undefined) window.cancelIdleCallback(idle);
      if (timer !== undefined) window.clearTimeout(timer);
      exposureObserver.disconnect();
      document.removeEventListener("click", trackClick);
    };
  }, []);

  return null;
}
