export const measurementId = "G-4TMQXSC4M5";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    coutureAnalyticsConfigured?: boolean;
  }
}

export function ensureAnalytics() {
  if (typeof window === "undefined") return;
  window.dataLayer ??= [];
  // Google's command queue consumes Arguments objects, not arrays of arguments.
  window.gtag ??= function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  if (!window.coutureAnalyticsConfigured) {
    window.coutureAnalyticsConfigured = true;
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      page_path: window.location.pathname,
      page_location: window.location.href,
    });
  }
  return window.gtag;
}

export function trackEvent(name: string, parameters: Record<string, unknown> = {}) {
  ensureAnalytics()?.("event", name, {
    page_path: window.location.pathname,
    ...parameters,
  });
}
