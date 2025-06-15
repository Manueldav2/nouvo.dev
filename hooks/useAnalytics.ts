import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { analytics } from '@/lib/firebase';
import { logEvent, Analytics } from 'firebase/analytics';

export const useAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (analytics) {
      // Track page views
      logEvent(analytics, 'page_view', {
        page_path: pathname,
        page_search: searchParams.toString(),
      });
    }
  }, [pathname, searchParams]);

  const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (analytics) {
      logEvent(analytics as Analytics, eventName, {
        page_path: pathname,
        page_search: searchParams?.toString(),
        ...eventParams,
      });
    }
  };

  return { trackEvent };
}; 