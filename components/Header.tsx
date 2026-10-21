'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { isAdsMode } from '@/lib/adsMode';
import { MobileNavButton, MobileNavPanel, MobileNavProvider } from '@/components/MobileNav';
import TrackingPhoneLink from '@/components/TrackingPhoneLink';
import { isActivePath, siteNavLinks } from '@/components/siteNav';

export default function Header() {
  const pathname = usePathname();
  const [adsMode, setAdsMode] = useState(false);

  useEffect(() => {
    setAdsMode(isAdsMode());
  }, []);

  // Paid-traffic pages use a reduced header to keep the conversion path focused.
  if (adsMode) {
    return (
      <header className="sticky top-0 z-50 border-b border-divider bg-primary/95 shadow-sm backdrop-blur-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2"
              aria-label="KindKey Home Buyers - Go to home page"
            >
              <Image
                src="/logo-header.avif"
                alt="KindKey Home Buyers logo"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
                priority
                fetchPriority="high"
                quality={70}
                sizes="40px"
              />
              <span className="hidden text-lg font-bold text-text-primary sm:inline">
                {process.env.NEXT_PUBLIC_BRAND_NAME || 'KindKey Home Buyers'}
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <TrackingPhoneLink className="hidden text-sm font-medium text-text-secondary transition-colors hover:text-divider sm:inline" />
              <a
                href="#form"
                className="rounded-lg bg-divider px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-divider/90"
              >
                Get Cash Offer
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-primary/95 shadow-sm backdrop-blur-sm">
      <MobileNavProvider>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between max-md:gap-2">
            <Link
              href="/"
              className="flex items-center space-x-3 max-md:min-w-0 max-md:flex-1"
              aria-label="KindKey Home Buyers - Go to home page"
            >
              <Image
                src="/logo-header.avif"
                alt="KindKey Home Buyers logo"
                width={64}
                height={64}
                className="h-16 w-auto object-contain max-md:shrink-0"
                priority
                fetchPriority="high"
                quality={70}
                sizes="64px"
              />
              <span className="text-2xl font-bold text-text-primary max-md:truncate">
                {process.env.NEXT_PUBLIC_BRAND_NAME || 'KindKey Home Buyers'}
              </span>
              <span className="sr-only">Go to home page</span>
            </Link>

            <div className="hidden items-center space-x-8 md:flex">
              {siteNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActivePath(pathname, link.href)
                      ? 'text-divider'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <TrackingPhoneLink className="text-sm font-medium text-text-secondary transition-colors hover:text-divider" />
              <a
                href="mailto:info@kindkeyhomebuyers.com"
                className="text-sm font-medium text-text-secondary transition-colors hover:text-divider"
              >
                info@kindkeyhomebuyers.com
              </a>
              <Link
                href="/contact"
                className="rounded-lg bg-divider px-4 py-2 font-medium text-white transition-colors hover:bg-divider/90"
              >
                Get My Cash Offer
              </Link>
            </div>

            <MobileNavButton />
          </div>

          <MobileNavPanel />
        </nav>
      </MobileNavProvider>
    </header>
  );
}
