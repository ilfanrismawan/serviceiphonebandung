"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
declare global {
  interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; }
}
const measurementId = process.env.NEXT_PUBLIC_GA4_ID;
const enabled = Boolean(measurementId && /^G-[A-Z0-9]+$/.test(measurementId));
/** Opt-in GA4. Never send WA message text, phone numbers or query strings. */
export function Analytics() {
  const pathname = usePathname();
  useEffect(() => {
    if (!enabled) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function (...args: unknown[]) { window.dataLayer!.push(args); };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { send_page_view: false });
    function trackClick(event: MouseEvent) {
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(link instanceof HTMLAnchorElement)) return;
      const url = new URL(link.href);
      const eventName = url.hostname === "wa.me" || url.hostname === "api.whatsapp.com" ? "whatsapp_click"
        : link.dataset.seoEvent === "directions_click" || (url.hostname === "www.google.com" && url.pathname.startsWith("/maps/dir")) ? "directions_click" : null;
      if (eventName) window.gtag?.("event", eventName, { page_path: window.location.pathname, transport_type: "beacon" });
    }
    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);
  useEffect(() => {
    if (enabled) window.gtag?.("event", "page_view", { page_location: window.location.origin + pathname, page_path: pathname });
  }, [pathname]);
  return enabled ? <Script id="flow-ga4" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" /> : null;
}
