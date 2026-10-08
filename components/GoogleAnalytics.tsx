'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { useCookieConsent } from '@/lib/useCookieConsent';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const { hasConsent, isLoading } = useCookieConsent();
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkStoredConsent = () => {
      const stored = localStorage.getItem('cookie-consent');
      if (stored) {
        try {
          const data = JSON.parse(stored);
          const expiryDate = new Date(data.expiry);
          if (expiryDate > new Date() && data.consent === 'accepted') {
            return true;
          }
        } catch {
          // Ignore malformed consent records and leave analytics disabled.
        }
      }
      return false;
    };

    if (checkStoredConsent()) {
      setShouldLoad(true);
      return;
    }

    if (!isLoading && hasConsent) {
      setShouldLoad(true);
    }
  }, [hasConsent, isLoading]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleConsent = () => {
      setShouldLoad(true);
    };

    window.addEventListener('cookieConsentAccepted', handleConsent);
    return () => window.removeEventListener('cookieConsentAccepted', handleConsent);
  }, []);

  if (!measurementId || !shouldLoad) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        async
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            anonymize_ip: true,
          });
        `}
      </Script>
    </>
  );
}
