'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LeadConnectorChat from '@/components/LeadConnectorChat';
import OfferMobileBar, { OfferPhoneLink } from '@/components/OfferMobileBar';
import SellerQuiz from '@/components/SellerQuiz';
import { isActivePath, siteNavLinks } from '@/components/siteNav';
import { offerDisplayPhone, type DisplayPhone } from '@/lib/phones';
import { BUSINESS, localBusinessJsonLd } from '@/lib/site';

export default function SellerQuizLanding({
  pathname,
  initialSearch,
  initialPhone,
}: {
  pathname: '/quiz' | '/offer/quiz';
  initialSearch: string;
  initialPhone: DisplayPhone;
}) {
  const [phone, setPhone] = useState(initialPhone);
  const [menuOpen, setMenuOpen] = useState(false);
  const address = `${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`;
  const jsonLd = {
    ...localBusinessJsonLd(phone.tel),
    description:
      'KindKey Home Buyers LLC is a local cash home buyer in King, Pierce, and Kitsap County, Washington.',
  };

  useEffect(() => {
    const search = window.location.search || (initialSearch ? `?${initialSearch}` : '');
    setPhone(offerDisplayPhone(pathname, search));
  }, [pathname, initialSearch]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <main className="min-h-screen bg-white text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <header className="z-40 border-b border-gray-200 bg-white md:sticky md:top-0">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-3 px-5 py-3">
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <Image
              src="/logo-header.avif"
              alt="KindKey Home Buyers"
              width={36}
              height={36}
              priority
              className="h-9 w-9 object-contain"
            />
            <span className="truncate text-sm font-bold leading-tight">KindKey Home Buyers</span>
          </Link>
          <div className="flex shrink-0 items-center gap-3">
            <OfferPhoneLink
              phone={phone}
              location="header"
              className="text-base font-semibold text-divider"
            />
            <button
              type="button"
              className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-text-primary md:hidden"
              aria-expanded={menuOpen}
              aria-controls="quiz-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
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
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div id="quiz-menu" hidden={!menuOpen} className="mx-auto max-w-xl px-5 md:hidden">
          <div className="space-y-1 border-t border-divider py-2">
            {siteNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex min-h-11 items-center text-base font-medium ${
                  isActivePath(pathname, link.href) ? 'text-divider' : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${phone.tel}`}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-11 items-center text-base font-medium text-text-secondary"
            >
              {phone.display}
            </a>
            <a
              href="mailto:info@kindkeyhomebuyers.com"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-11 items-center text-base font-medium text-text-secondary"
            >
              info@kindkeyhomebuyers.com
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-xl px-5 pb-[calc(81px+env(safe-area-inset-bottom,0px))] pt-4 md:pb-16 md:pt-8">
        <p className="text-sm font-semibold text-text-primary">Close in 7 Days</p>
        <p className="mt-1 text-sm leading-snug text-text-secondary">
          KindKey Home Buyers LLC is a local cash home buyer in King, Pierce, and Kitsap County.
        </p>
        <div className="mt-4">
          <SellerQuiz pathname={pathname} callPhone={phone} />
        </div>
        <footer className="mt-12 border-t border-gray-200 py-8 text-sm leading-relaxed text-text-secondary">
          <p>{address}</p>
          <p className="mt-3">
            <OfferPhoneLink
              phone={phone}
              location="footer"
              className="text-base font-semibold text-divider"
            />
          </p>
          <p className="mt-3">
            KindKey Home Buyers LLC buys houses for cash in King, Pierce, and Kitsap County.
          </p>
          <p className="mt-3">
            <Link href="/" className="font-medium text-divider underline">
              KindKey Home Buyers
            </Link>
          </p>
        </footer>
      </div>
      <OfferMobileBar phone={phone} />
      <LeadConnectorChat mobileOnly suppressGreeting />
    </main>
  );
}
