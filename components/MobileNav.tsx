'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useId, useState } from 'react';
import TrackingPhoneLink from '@/components/TrackingPhoneLink';
import { isActivePath, siteNavLinks } from '@/components/siteNav';
import type { DisplayPhone } from '@/lib/phones';

interface MobileNavContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  panelId: string;
}

const MobileNavContext = createContext<MobileNavContextValue | null>(null);

function useMobileNav() {
  const value = useContext(MobileNavContext);
  if (!value) {
    throw new Error('Mobile navigation controls must render inside MobileNavProvider');
  }
  return value;
}

/** No extra DOM, so the desktop header layout stays the same. */
export function MobileNavProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <MobileNavContext.Provider value={{ open, setOpen, panelId }}>
      {children}
    </MobileNavContext.Provider>
  );
}

export function MobileNavButton({ className = '' }: { className?: string }) {
  const { open, setOpen, panelId } = useMobileNav();

  return (
    <button
      type="button"
      className={`relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-text-primary md:hidden ${className}`}
      aria-expanded={open}
      aria-controls={panelId}
      aria-label={open ? 'Close menu' : 'Open menu'}
      onClick={() => setOpen(!open)}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
      </svg>
    </button>
  );
}

export function MobileNavPanel({
  className = '',
  phone,
}: {
  className?: string;
  /** Offer pages pass the same number used in the header and sticky bar. */
  phone?: DisplayPhone;
}) {
  const { open, setOpen, panelId } = useMobileNav();
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <div id={panelId} hidden={!open} className={`md:hidden ${className}`}>
      <div className="space-y-1 border-t border-divider py-2">
        {siteNavLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={close}
            className={`flex min-h-11 items-center text-base font-medium transition-colors ${
              isActivePath(pathname, link.href)
                ? 'text-divider'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {link.label}
          </Link>
        ))}
        {phone ? (
          <a
            href={`tel:${phone.tel}`}
            onClick={close}
            className="flex min-h-11 items-center text-base font-medium text-text-secondary transition-colors hover:text-divider"
          >
            {phone.display}
          </a>
        ) : (
          <TrackingPhoneLink
            onClick={close}
            className="flex min-h-11 items-center text-base font-medium text-text-secondary transition-colors hover:text-divider"
          />
        )}
        <a
          href="mailto:info@kindkeyhomebuyers.com"
          onClick={close}
          className="flex min-h-11 items-center text-base font-medium text-text-secondary transition-colors hover:text-divider"
        >
          info@kindkeyhomebuyers.com
        </a>
        <Link
          href="/contact"
          onClick={close}
          className="mt-2 flex min-h-11 items-center justify-center rounded-lg bg-divider px-4 font-medium text-white transition-colors hover:bg-divider/90"
        >
          Get My Cash Offer
        </Link>
      </div>
    </div>
  );
}
