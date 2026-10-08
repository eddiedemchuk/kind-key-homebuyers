'use client';

import { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

// Shared state prevents duplicate scripts when several forms mount concurrently.
let recaptchaScriptLoaded = false;
let recaptchaReadyPromise: Promise<void> | null = null;
let recaptchaScriptElement: HTMLScriptElement | null = null;
let isLoadingInProgress = false;
let loadRecaptchaLock = false;

/** Lazily loads reCAPTCHA v3 when the associated form approaches the viewport. */
export function useRecaptcha(formRef?: React.RefObject<HTMLElement>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
      // Missing site keys intentionally leave local development usable.
      setIsLoaded(true);
      setIsReady(true);
      return;
    }

    if (recaptchaScriptLoaded && window.grecaptcha) {
      window.grecaptcha.ready(() => {
        setIsLoaded(true);
        setIsReady(true);
      });
      return;
    }

    if (loadRecaptchaLock || isLoadingInProgress || recaptchaReadyPromise) {
      if (recaptchaReadyPromise) {
        recaptchaReadyPromise.then(() => {
          setIsLoaded(true);
          setIsReady(true);
        });
      }
      return;
    }

    const existingScriptCheck = document.querySelector(
      `script[src*="recaptcha/api.js"], script#recaptcha-script`
    );
    if (existingScriptCheck) {
      recaptchaScriptElement = existingScriptCheck as HTMLScriptElement;
      recaptchaScriptLoaded = true;
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setIsLoaded(true);
          setIsReady(true);
        });
      }
      return;
    }

    const loadRecaptcha = () => {
      if (recaptchaScriptLoaded && window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setIsLoaded(true);
          setIsReady(true);
        });
        return;
      }

      if (loadRecaptchaLock) {
        if (recaptchaReadyPromise) {
          recaptchaReadyPromise.then(() => {
            setIsLoaded(true);
            setIsReady(true);
          });
        }
        return;
      }

      const existingScript = document.querySelector(
        `script[src*="recaptcha/api.js"], script#recaptcha-script`
      ) as HTMLScriptElement;

      if (existingScript) {
        recaptchaScriptElement = existingScript;
        recaptchaScriptLoaded = true;
        loadRecaptchaLock = false;
        isLoadingInProgress = false;

        if (window.grecaptcha) {
          if (!recaptchaReadyPromise) {
            recaptchaReadyPromise = new Promise((resolve) => {
              window.grecaptcha!.ready(() => {
                setIsLoaded(true);
                setIsReady(true);
                resolve();
              });
            });
          } else {
            recaptchaReadyPromise.then(() => {
              setIsLoaded(true);
              setIsReady(true);
            });
          }
        } else {
          // Script exists but grecaptcha not ready yet
          existingScript.addEventListener(
            'load',
            () => {
              if (window.grecaptcha) {
                window.grecaptcha.ready(() => {
                  setIsLoaded(true);
                  setIsReady(true);
                });
              }
            },
            { once: true }
          );
        }
        return;
      }

      loadRecaptchaLock = true;
      isLoadingInProgress = true;

      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      script.id = 'recaptcha-script';
      recaptchaScriptElement = script;

      recaptchaReadyPromise = new Promise((resolve) => {
        script.onload = () => {
          recaptchaScriptLoaded = true;
          loadRecaptchaLock = false;
          isLoadingInProgress = false;
          if (window.grecaptcha) {
            window.grecaptcha.ready(() => {
              setIsLoaded(true);
              setIsReady(true);
              resolve();
            });
          } else {
            setIsLoaded(true);
            setIsReady(true);
            resolve();
          }
        };

        script.onerror = () => {
          console.error('Failed to load reCAPTCHA script');
          recaptchaScriptLoaded = false;
          loadRecaptchaLock = false;
          isLoadingInProgress = false;
          recaptchaScriptElement = null;
          setIsLoaded(true);
          setIsReady(true);
          resolve();
        };
      });

      // Recheck because another hook may have inserted the script meanwhile.
      const finalCheck =
        document.getElementById('recaptcha-script') ||
        document.querySelector(`script[src*="recaptcha/api.js"]`);

      if (!finalCheck) {
        document.head.appendChild(script);
      } else {
        loadRecaptchaLock = false;
        isLoadingInProgress = false;
        recaptchaScriptElement = finalCheck as HTMLScriptElement;
        recaptchaScriptLoaded = true;

        if (recaptchaReadyPromise) {
          recaptchaReadyPromise.then(() => {
            setIsLoaded(true);
            setIsReady(true);
          });
        } else if (window.grecaptcha) {
          recaptchaReadyPromise = new Promise((resolve) => {
            window.grecaptcha!.ready(() => {
              setIsLoaded(true);
              setIsReady(true);
              resolve();
            });
          });
        }
      }
    };

    if (formRef?.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !recaptchaScriptLoaded) {
              loadRecaptcha();
              if (observerRef.current) {
                observerRef.current.disconnect();
              }
            }
          });
        },
        {
          rootMargin: '100px', // Start shortly before the form enters the viewport.
        }
      );

      observerRef.current.observe(formRef.current);
    } else {
      loadRecaptcha();
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [formRef]);

  const executeRecaptcha = async (action: string = 'submit_lead'): Promise<string> => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey || !window.grecaptcha || !isReady) {
      return '';
    }

    try {
      return await window.grecaptcha.execute(siteKey, { action });
    } catch (error) {
      console.error('reCAPTCHA execution error:', error);
      return '';
    }
  };

  return {
    isLoaded,
    isReady,
    executeRecaptcha,
  };
}
