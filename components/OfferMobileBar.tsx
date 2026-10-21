'use client';

import { trackCallClick, trackGetOfferClick } from '@/lib/analytics';

interface OfferPhone {
  display: string;
  tel: string;
}

type OfferLinkLocation = 'header' | 'sticky_bar' | 'footer' | 'bottom';

interface OfferMobileBarProps {
  phone: OfferPhone;
}

export function focusOfferForm(): void {
  const card = document.querySelector<HTMLElement>('[data-offer-form]');
  if (!card) return;
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const name = card.querySelector<HTMLInputElement>('input[name="name"]');
  window.setTimeout(() => {
    name?.focus({ preventScroll: true });
  }, 450);
}

export function OfferJumpButton({
  className,
  location,
}: {
  className?: string;
  location: OfferLinkLocation;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        trackGetOfferClick(location);
        focusOfferForm();
      }}
      className={className}
    >
      Get My Offer
    </button>
  );
}

export function OfferPhoneLink({
  phone,
  className,
  location,
  children,
}: {
  phone: OfferPhone;
  className?: string;
  location: OfferLinkLocation;
  children?: React.ReactNode;
}) {
  return (
    <a href={`tel:${phone.tel}`} className={className} onClick={() => trackCallClick(location)}>
      {children ?? phone.display}
    </a>
  );
}

/** Always-visible mobile bar: jump to the form, or call. Desktop uses the sticky header button. */
export default function OfferMobileBar({ phone }: OfferMobileBarProps) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 box-border h-[calc(65px+env(safe-area-inset-bottom,0px))] border-t border-gray-200 bg-white px-2 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] md:hidden"
      data-offer-mobile-bar
      data-bottom-dock="offer-call"
    >
      <div className="grid h-full w-full grid-cols-2 items-center gap-2">
        <OfferJumpButton
          location="sticky_bar"
          className="flex min-h-12 items-center justify-center rounded-lg bg-divider px-2 text-sm font-bold text-white"
        />
        <OfferPhoneLink
          phone={phone}
          location="sticky_bar"
          className="flex min-h-12 items-center justify-center rounded-lg bg-accent px-2 text-center text-sm font-bold leading-tight text-white"
        >
          Call {phone.display}
        </OfferPhoneLink>
      </div>
    </div>
  );
}
