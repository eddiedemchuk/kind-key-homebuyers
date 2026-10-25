'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import ChatWidgetOffset from '@/components/ChatWidgetOffset';

const NARROW_QUERY = '(max-width: 767px)';

/**
 * LeadConnector loader. Offer landings pass mobileOnly so a wide viewport
 * never mounts the widget and the desktop page stays as it is.
 */
export default function LeadConnectorChat({
  mobileOnly = false,
  suppressGreeting = false,
}: {
  mobileOnly?: boolean;
  /** Hide the auto greeting bubble. The launcher icon stays. */
  suppressGreeting?: boolean;
}) {
  const [show, setShow] = useState(!mobileOnly);

  useEffect(() => {
    if (!mobileOnly) return;
    const media = window.matchMedia(NARROW_QUERY);
    const update = () => setShow(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [mobileOnly]);

  if (!show) return null;

  return (
    <>
      <ChatWidgetOffset mobileOnly={mobileOnly} suppressGreeting={suppressGreeting} />
      <Script
        id="leadconnector-chat-widget"
        src="https://widgets.leadconnectorhq.com/loader.js"
        strategy="afterInteractive"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6abd7b3db9739b95923d98c3"
      />
    </>
  );
}
