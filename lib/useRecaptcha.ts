'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

type ReadyListener = () => void;

// One loader for the whole page. A second form used to miss the ready flag
// because only the instance that inserted the script updated its own state.
let ready = false;
let loading: Promise<void> | null = null;
const listeners = new Set<ReadyListener>();

function recaptchaSiteKey(): string | undefined {
  return process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
}

function markReady(): void {
  ready = true;
  listeners.forEach((listener) => listener());
}

function loadRecaptcha(): Promise<void> {
  const key = recaptchaSiteKey();
  if (!key || ready) return Promise.resolve();
  if (loading) return loading;

  loading = new Promise<void>((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      markReady();
      resolve();
    };

    const whenReady = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(finish);
        return;
      }
      finish();
    };

    const existing = document.querySelector<HTMLScriptElement>(
      'script#recaptcha-script, script[src*="recaptcha/api.js"]'
    );

    if (existing) {
      if (window.grecaptcha) {
        whenReady();
      } else {
        existing.addEventListener('load', whenReady, { once: true });
        existing.addEventListener('error', finish, { once: true });
      }
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${key}`;
    script.async = true;
    script.defer = true;
    script.id = 'recaptcha-script';
    script.onload = whenReady;
    script.onerror = () => {
      console.error('Failed to load reCAPTCHA script');
      finish();
    };
    document.head.appendChild(script);
  });

  return loading;
}

function withTimeout(promise: Promise<void>, ms: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error('reCAPTCHA load timed out')), ms);
    promise.then(
      () => {
        window.clearTimeout(timer);
        resolve();
      },
      (error) => {
        window.clearTimeout(timer);
        reject(error);
      }
    );
  });
}

/** Loads reCAPTCHA v3 once and lets every form on the page execute it. */
export function useRecaptcha(formRef?: React.RefObject<HTMLElement>) {
  const [isReady, setIsReady] = useState(() => !recaptchaSiteKey() || ready);

  useEffect(() => {
    if (!recaptchaSiteKey()) {
      setIsReady(true);
      return;
    }

    const listener = () => setIsReady(true);
    listeners.add(listener);
    if (ready) setIsReady(true);

    let observer: IntersectionObserver | null = null;
    const node = formRef?.current;
    if (node && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            void loadRecaptcha();
            observer?.disconnect();
          }
        },
        { rootMargin: '200px' }
      );
      observer.observe(node);
    } else {
      void loadRecaptcha();
    }

    return () => {
      listeners.delete(listener);
      observer?.disconnect();
    };
  }, [formRef]);

  const executeRecaptcha = async (action: string = 'submit_lead'): Promise<string> => {
    const key = recaptchaSiteKey();
    if (!key) return '';

    try {
      await withTimeout(loadRecaptcha(), 5000);
    } catch (error) {
      console.error('reCAPTCHA load error:', error);
    }

    if (!window.grecaptcha) return '';

    try {
      return await window.grecaptcha.execute(key, { action });
    } catch (error) {
      console.error('reCAPTCHA execution error:', error);
      return '';
    }
  };

  return {
    isLoaded: isReady,
    isReady,
    executeRecaptcha,
  };
}
