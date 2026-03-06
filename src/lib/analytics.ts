/**
 * Google Analytics 4 event tracking utilities.
 * Use these to track custom events and page views.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

/**
 * Track when a user views an event or news detail page.
 */
export function trackEventView(params: {
  eventTitle: string;
  eventSlug: string;
  eventType: 'event' | 'news';
  eventId?: number;
}): void {
  trackEvent('view_event', {
    event_title: params.eventTitle,
    event_slug: params.eventSlug,
    event_type: params.eventType,
    ...(params.eventId != null && { event_id: params.eventId }),
  });
}

/**
 * Track page view (useful for SPA navigations; GA4 auto-tracks initial page load).
 */
export function trackPageView(path: string, title?: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-JERHLL9TP8';
    window.gtag('config', measurementId, {
      page_path: path,
      ...(title && { page_title: title }),
    });
  }
}
