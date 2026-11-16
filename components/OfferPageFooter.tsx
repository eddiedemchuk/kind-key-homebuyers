import Link from 'next/link';
import { OfferPhoneLink } from '@/components/OfferMobileBar';
import type { DisplayPhone } from '@/lib/phones';

/** Business identity, address, and policy links. No extra claims. */
export default function OfferPageFooter({
  address,
  phone,
}: {
  address: string;
  phone: DisplayPhone;
}) {
  return (
    <footer className="mt-12 border-t border-gray-200 py-8 text-sm leading-relaxed text-text-secondary">
      <p className="font-semibold text-text-primary">KindKey Home Buyers LLC</p>
      <p className="mt-1">BBB A- rated</p>
      <p className="mt-3">{address}</p>
      <p className="mt-3">
        <OfferPhoneLink
          phone={phone}
          location="footer"
          className="text-base font-semibold text-divider"
        />
      </p>
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
        <Link href="/about" className="font-medium text-divider underline">
          About
        </Link>
        <Link href="/contact" className="font-medium text-divider underline">
          Contact
        </Link>
        <Link href="/privacy" className="font-medium text-divider underline">
          Privacy Policy
        </Link>
      </p>
    </footer>
  );
}
