'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { trackPageView } from '@/lib/analytics';

/**
 * Tracks page views on client-side navigation (Next.js App Router).
 * GA4 auto-tracks the initial load; this handles subsequent navigations.
 */
export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname]);

  return null;
}
