'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BBB_TRUST_LINE, shortGoogleReviews } from '@/data/offerCredibility';
import {
  googleMapsBrowserKey,
  googleMapsNamespace,
  loadGoogleMaps,
  washingtonAutocompleteOptions,
  type GooglePlaceResult,
} from '@/lib/google-maps';
import { createMetaEventId, trackMetaLead, trackMetaViewContent } from '@/lib/meta-pixel';
import { formatPhoneChange, isCompleteUsPhone } from '@/lib/phone';
import { trackLeadSubmit } from '@/lib/analytics';
import {
  locationFromPlaceParts,
  stateFromAddressText,
  serviceAreaStatus,
} from '@/lib/sell-geocode';
import type { AddressLocation } from '@/lib/sell-geocode';
import {
  SELL_ADDRESS_BUTTON,
  SELL_CALL_PHONE,
  SELL_CALLER_ID_PHONE,
  SELL_CONDITIONS,
  SELL_CONFIRM_EDIT,
  SELL_CONFIRM_OK,
  SELL_CONTACT_BUTTON,
  SELL_CONTACT_REASSURANCE,
  SELL_EDDIE_LINE,
  SELL_HEADLINE,
  SELL_LISTED_NOW_MESSAGE,
  SELL_LISTED_OPTIONS,
  SELL_OUT_OF_AREA_MESSAGE,
  SELL_OWNER_OPTIONS,
  SELL_STEP_COUNT,
  SELL_SUBHEAD,
  SELL_TIMELINE_NOTE,
  SELL_TIMELINES,
  buildSellLeadBody,
  chooseSellAddress,
  chooseSellCondition,
  chooseSellListed,
  chooseSellOwner,
  chooseSellTimeline,
  confirmSellAddress,
  editSellAddress,
  goBackSell,
  initialSellState,
  readSellTracking,
  resolveSellTracking,
  searchHasSellTrackingSignal,
  sellProgressPercent,
  sellProgressStep,
  sellStepLabel,
  sellThanksMessage,
  sellTrackingFromLanding,
  writeSellTracking,
  type SellAddressSelection,
  type SellAnswers,
  type SellCondition,
  type SellListed,
  type SellOwner,
  type SellScreen,
  type SellState,
  type SellTimeline,
  type SellTrackingSnapshot,
} from '@/lib/sell-funnel';
import { SMS_CONSENT_REQUIRED_MESSAGE } from '@/lib/sms-consent';
import { useRecaptcha } from '@/lib/useRecaptcha';

const choiceClass =
  'flex min-h-14 w-full touch-manipulation items-center rounded-2xl border-2 border-gray-200 bg-white px-4 text-left text-lg font-semibold leading-snug text-text-primary shadow-sm transition-colors active:border-divider active:bg-secondary';

const primaryButtonClass =
  'flex min-h-14 w-full touch-manipulation items-center justify-center rounded-xl bg-divider px-4 text-lg font-bold text-white shadow-sm disabled:cursor-not-allowed disabled:opacity-60';

const fieldClass =
  'min-h-14 w-full rounded-xl border-2 border-gray-300 bg-white px-4 text-lg text-text-primary placeholder:text-text-light focus:border-divider focus:outline-none focus:ring-2 focus:ring-divider';

let viewContentSent = false;
let leadEventId = '';
let leadSent = false;

function viewContentId(): string {
  return createMetaEventId();
}

export interface SellContactValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  smsConsent: boolean;
}

export interface SellFunnelViewProps {
  state: SellState;
  contact: SellContactValues;
  addressDraft: string;
  checkingAddress?: boolean;
  isSubmitting?: boolean;
  submitError?: string | null;
  contactErrors?: Partial<Record<keyof SellContactValues, string>>;
  onAddressDraft: (value: string) => void;
  onAddressContinue: () => void;
  onConfirm: () => void;
  onEditAddress: () => void;
  onOwner: (value: SellOwner) => void;
  onListed: (value: SellListed) => void;
  onCondition: (value: SellCondition) => void;
  onTimeline: (value: SellTimeline) => void;
  onBack: () => void;
  onContact: (patch: Partial<SellContactValues>) => void;
  onSubmit: () => void;
  map?: React.ReactNode;
  addressInputRef?: React.Ref<HTMLInputElement>;
}

function BackLink({ onBack }: { onBack: () => void }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="inline-flex min-h-14 items-center text-base font-semibold text-divider"
    >
      Back
    </button>
  );
}

function Progress({ screen }: { screen: SellScreen }) {
  const label = sellStepLabel(screen);
  const step = sellProgressStep(screen);
  if (!label || step === null) return null;
  return (
    <div className="px-4 pb-3">
      <p className="text-sm font-semibold text-divider">{label}</p>
      <div
        className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={SELL_STEP_COUNT}
        aria-valuenow={step}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-divider"
          style={{ width: `${sellProgressPercent(screen)}%` }}
        />
      </div>
    </div>
  );
}

function ChoiceList<T extends string>({
  options,
  onChoose,
}: {
  options: readonly { value: T; label: string }[];
  onChoose: (value: T) => void;
}) {
  return (
    <div className="mt-4 space-y-3">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={choiceClass}
          onClick={() => onChoose(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function SellFunnelView({
  state,
  contact,
  addressDraft,
  checkingAddress = false,
  isSubmitting = false,
  submitError = null,
  contactErrors = {},
  onAddressDraft,
  onAddressContinue,
  onConfirm,
  onEditAddress,
  onOwner,
  onListed,
  onCondition,
  onTimeline,
  onBack,
  onContact,
  onSubmit,
  map = null,
  addressInputRef,
}: SellFunnelViewProps) {
  const { screen, answers } = state;
  const review = shortGoogleReviews[0];
  const showProgress = screen !== 'thanks';

  return (
    <div className="min-h-screen bg-white text-text-primary" data-sell-funnel>
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-3 px-4 py-2">
          <div className="flex min-w-0 items-center gap-2">
            <Image
              src="/logo-header.avif"
              alt="KindKey Home Buyers"
              width={36}
              height={36}
              priority
              className="h-9 w-9 object-contain"
            />
            <span className="truncate text-sm font-bold leading-tight">KindKey</span>
          </div>
          <a
            href={`tel:${SELL_CALL_PHONE.tel}`}
            className="inline-flex min-h-14 shrink-0 items-center text-base font-bold text-divider"
          >
            {SELL_CALL_PHONE.display}
          </a>
        </div>
        {showProgress ? <Progress screen={screen} /> : null}
      </header>

      <main className="mx-auto max-w-xl px-4 py-4" data-sell-screen={screen} aria-live="polite">
        {screen === 'address' ? (
          <section>
            <h1
              className="text-balance text-3xl font-bold leading-tight"
              style={{ marginBottom: 0 }}
            >
              {SELL_HEADLINE}
            </h1>
            <p className="mt-2 text-lg leading-snug text-text-secondary">{SELL_SUBHEAD}</p>
            <p className="mt-4 text-base font-semibold leading-snug">{SELL_EDDIE_LINE}</p>
            <p className="mt-3 inline-flex rounded-full border-2 border-divider bg-secondary px-3 py-1 text-sm font-bold">
              {BBB_TRUST_LINE}
            </p>
            {review ? (
              <figure className="mt-4">
                <blockquote className="text-base leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-1 text-sm font-semibold">
                  {review.name}{' '}
                  <span className="font-normal text-text-secondary">Google review</span>
                </figcaption>
              </figure>
            ) : null}
            <form
              className="mt-5"
              onSubmit={(event) => {
                event.preventDefault();
                onAddressContinue();
              }}
            >
              <label htmlFor="sell-address" className="mb-2 block text-base font-semibold">
                Property address
              </label>
              <input
                id="sell-address"
                ref={addressInputRef}
                name="propertyAddress"
                value={addressDraft}
                onChange={(event) => onAddressDraft(event.target.value)}
                className={fieldClass}
                placeholder="123 Main St, Auburn, WA"
                autoComplete="street-address"
                enterKeyHint="next"
                required
              />
              <button
                type="submit"
                className={`${primaryButtonClass} mt-3`}
                disabled={checkingAddress}
              >
                {checkingAddress ? 'Checking address...' : SELL_ADDRESS_BUTTON}
              </button>
            </form>
          </section>
        ) : null}

        {screen === 'confirm' ? (
          <section>
            <BackLink onBack={onBack} />
            <h1
              className="text-balance text-2xl font-bold leading-tight"
              style={{ marginBottom: 0 }}
            >
              Is this the right address?
            </h1>
            <p className="mt-4 text-xl font-semibold leading-snug">{answers.address}</p>
            {map}
            {answers.areaStatus === 'out_of_area' ? (
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                {SELL_OUT_OF_AREA_MESSAGE}
              </p>
            ) : null}
            <button type="button" className={`${primaryButtonClass} mt-5`} onClick={onConfirm}>
              {SELL_CONFIRM_OK}
            </button>
            <button
              type="button"
              className="mt-2 flex min-h-14 w-full items-center justify-center text-base font-semibold text-divider"
              onClick={onEditAddress}
            >
              {SELL_CONFIRM_EDIT}
            </button>
          </section>
        ) : null}

        {screen === 'owner' ? (
          <section>
            <BackLink onBack={onBack} />
            <h1
              className="text-balance text-2xl font-bold leading-tight"
              style={{ marginBottom: 0 }}
            >
              Are you the owner?
            </h1>
            <ChoiceList options={SELL_OWNER_OPTIONS} onChoose={onOwner} />
          </section>
        ) : null}

        {screen === 'listed' ? (
          <section>
            <BackLink onBack={onBack} />
            <h1
              className="text-balance text-2xl font-bold leading-tight"
              style={{ marginBottom: 0 }}
            >
              Listed with an agent?
            </h1>
            <ChoiceList options={SELL_LISTED_OPTIONS} onChoose={onListed} />
          </section>
        ) : null}

        {screen === 'condition' ? (
          <section>
            <BackLink onBack={onBack} />
            <h1
              className="text-balance text-2xl font-bold leading-tight"
              style={{ marginBottom: 0 }}
            >
              What condition is the house in?
            </h1>
            <div className="mt-4 space-y-3">
              {SELL_CONDITIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={choiceClass}
                  onClick={() => onCondition(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </section>
        ) : null}

        {screen === 'timeline' ? (
          <section>
            <BackLink onBack={onBack} />
            <h1
              className="text-balance text-2xl font-bold leading-tight"
              style={{ marginBottom: 0 }}
            >
              When would you like to close?
            </h1>
            <p className="mt-2 text-base text-text-secondary">{SELL_TIMELINE_NOTE}</p>
            <div className="mt-4 space-y-3">
              {SELL_TIMELINES.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={choiceClass}
                  onClick={() => onTimeline(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </section>
        ) : null}

        {screen === 'contact' ? (
          <section>
            <BackLink onBack={onBack} />
            <h1
              className="text-balance text-2xl font-bold leading-tight"
              style={{ marginBottom: 0 }}
            >
              Where should we reach you?
            </h1>
            {answers.listed === 'listed-now' ? (
              <p className="mt-3 text-base leading-relaxed">{SELL_LISTED_NOW_MESSAGE}</p>
            ) : null}
            <form
              className="mt-4 space-y-3"
              onSubmit={(event) => {
                event.preventDefault();
                onSubmit();
              }}
              noValidate
            >
              <div>
                <label htmlFor="sell-first-name" className="mb-1 block text-sm font-semibold">
                  First name
                </label>
                <input
                  id="sell-first-name"
                  name="given-name"
                  autoComplete="given-name"
                  value={contact.firstName}
                  onChange={(event) => onContact({ firstName: event.target.value })}
                  className={fieldClass}
                />
                {contactErrors.firstName ? (
                  <p className="mt-1 text-sm text-red-600">{contactErrors.firstName}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="sell-last-name" className="mb-1 block text-sm font-semibold">
                  Last name
                </label>
                <input
                  id="sell-last-name"
                  name="family-name"
                  autoComplete="family-name"
                  value={contact.lastName}
                  onChange={(event) => onContact({ lastName: event.target.value })}
                  className={fieldClass}
                />
                {contactErrors.lastName ? (
                  <p className="mt-1 text-sm text-red-600">{contactErrors.lastName}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="sell-phone" className="mb-1 block text-sm font-semibold">
                  Mobile phone
                </label>
                <input
                  id="sell-phone"
                  name="tel"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={contact.phone}
                  onChange={(event) => {
                    const next = formatPhoneChange(event.target.value, event.target.selectionStart);
                    onContact({ phone: next.value });
                  }}
                  className={fieldClass}
                  placeholder="(253) 555-0100"
                />
                {contactErrors.phone ? (
                  <p className="mt-1 text-sm text-red-600">{contactErrors.phone}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="sell-email" className="mb-1 block text-sm font-semibold">
                  Email <span className="font-normal text-text-secondary">(optional)</span>
                </label>
                <input
                  id="sell-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={contact.email}
                  onChange={(event) => onContact({ email: event.target.value })}
                  className={fieldClass}
                />
                {contactErrors.email ? (
                  <p className="mt-1 text-sm text-red-600">{contactErrors.email}</p>
                ) : null}
              </div>
              <div>
                <div className="flex items-start gap-2">
                  <input
                    id="sell-sms-consent"
                    type="checkbox"
                    name="sms_consent"
                    checked={contact.smsConsent}
                    onChange={(event) => onContact({ smsConsent: event.target.checked })}
                    className="mt-1 h-5 w-5 shrink-0 rounded border-gray-300 text-divider focus:ring-divider"
                  />
                  <p className="text-[11px] leading-tight text-text-secondary">
                    <label htmlFor="sell-sms-consent">I agree to the</label>{' '}
                    <Link href="/terms" className="font-medium text-divider underline">
                      Terms of Service
                    </Link>{' '}
                    <label htmlFor="sell-sms-consent">and</label>{' '}
                    <Link href="/privacy" className="font-medium text-divider underline">
                      Privacy Policy
                    </Link>{' '}
                    <label htmlFor="sell-sms-consent">
                      and consent to receive calls and text messages from KindKey Home Buyers at the
                      number provided, including automated messages. Consent is not a condition of
                      purchase. Msg &amp; data rates may apply. Msg frequency varies. Reply STOP to
                      opt out, HELP for help.
                    </label>
                  </p>
                </div>
                {contactErrors.smsConsent ? (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {contactErrors.smsConsent}
                  </p>
                ) : null}
              </div>
              {submitError ? (
                <p
                  className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600"
                  role="alert"
                >
                  {submitError}
                </p>
              ) : null}
              <button type="submit" className={primaryButtonClass} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : SELL_CONTACT_BUTTON}
              </button>
              <p className="text-center text-sm leading-snug text-text-secondary">
                {SELL_CONTACT_REASSURANCE}
              </p>
            </form>
          </section>
        ) : null}

        {screen === 'thanks' ? (
          <section>
            <h1
              className="text-balance text-2xl font-bold leading-tight"
              style={{ marginBottom: 0 }}
            >
              {sellThanksMessage()}
            </h1>
            <a href={`tel:${SELL_CALL_PHONE.tel}`} className={`${primaryButtonClass} mt-6`}>
              Call {SELL_CALL_PHONE.display}
            </a>
            <p className="mt-3 text-center text-sm text-text-secondary">
              Save {SELL_CALLER_ID_PHONE.display} so you know it&apos;s us.
            </p>
          </section>
        ) : null}
      </main>
    </div>
  );
}

function selectionFromLocation(location: AddressLocation, typed: string): SellAddressSelection {
  const typedState = stateFromAddressText(typed);
  const status =
    location.status === 'unknown'
      ? serviceAreaStatus({ county: location.county, state: location.state || typedState })
      : location.status;
  return {
    address: location.formattedAddress || typed.trim(),
    county: location.county,
    state: location.state || (status === 'out_of_area' ? typedState : ''),
    city: location.city,
    lat: location.lat,
    lng: location.lng,
    areaStatus: status,
  };
}

function selectionFromPlace(place: GooglePlaceResult, typed: string): SellAddressSelection | null {
  const parts = (place.address_components ?? []).map((part) => ({
    longName: part.long_name,
    shortName: part.short_name,
    types: part.types,
  }));
  if (parts.length === 0 && !place.formatted_address) return null;
  const lat = place.geometry?.location?.lat?.() ?? null;
  const lng = place.geometry?.location?.lng?.() ?? null;
  return selectionFromLocation(
    locationFromPlaceParts(typed, parts, { lat, lng }, place.formatted_address),
    typed
  );
}

async function lookupTypedAddress(typed: string): Promise<SellAddressSelection> {
  try {
    const response = await fetch(`/api/geocode?address=${encodeURIComponent(typed)}`, {
      signal: AbortSignal.timeout(5000),
    });
    if (response.ok) {
      const payload = (await response.json()) as AddressLocation;
      if (payload && typeof payload.formattedAddress === 'string' && payload.status) {
        return selectionFromLocation(payload, typed);
      }
    }
  } catch (error) {
    console.error('Address lookup error:', error);
  }
  return selectionFromLocation(
    {
      formattedAddress: typed.trim(),
      county: '',
      state: '',
      city: '',
      lat: null,
      lng: null,
      status: 'unknown',
    },
    typed
  );
}

function contactErrorsFor(
  contact: SellContactValues
): Partial<Record<keyof SellContactValues, string>> {
  const errors: Partial<Record<keyof SellContactValues, string>> = {};
  if (contact.firstName.trim().length < 1) errors.firstName = 'Enter your first name.';
  if (contact.lastName.trim().length < 1) errors.lastName = 'Enter your last name.';
  if (!isCompleteUsPhone(contact.phone)) errors.phone = 'Enter a valid US phone number.';
  const email = contact.email.trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!contact.smsConsent) errors.smsConsent = SMS_CONSENT_REQUIRED_MESSAGE;
  return errors;
}

function canSubmitSell(state: SellState): state is SellState & {
  answers: SellAnswers & { owner: SellOwner; listed: SellListed };
} {
  const { owner, listed, condition, timeline } = state.answers;
  if (state.screen !== 'contact' || !owner || !listed) return false;
  if (listed === 'listed-now') return true;
  return condition !== null && timeline !== null;
}

export default function SellFunnel() {
  const [state, setState] = useState<SellState>(initialSellState);
  const [addressDraft, setAddressDraft] = useState('');
  const [checkingAddress, setCheckingAddress] = useState(false);
  const [contact, setContact] = useState<SellContactValues>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    smsConsent: false,
  });
  const [contactErrors, setContactErrors] = useState<
    Partial<Record<keyof SellContactValues, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const placeRef = useRef<GooglePlaceResult | null>(null);
  const trackingRef = useRef<SellTrackingSnapshot>(
    sellTrackingFromLanding({ search: '', referrer: '' })
  );
  const formRef = useRef<HTMLDivElement>(null);
  const { executeRecaptcha } = useRecaptcha(formRef);
  const mapsKey = googleMapsBrowserKey();

  useEffect(() => {
    if (viewContentSent) return;
    viewContentSent = true;
    trackMetaViewContent(viewContentId());
  }, []);

  useEffect(() => {
    const search = window.location.search;
    let stored: SellTrackingSnapshot | null = null;
    try {
      stored = readSellTracking(sessionStorage);
    } catch {
      stored = null;
    }
    const resolved = resolveSellTracking({
      search,
      referrer: document.referrer,
      stored,
    });
    trackingRef.current = resolved;
    if (searchHasSellTrackingSignal(search) || !stored) {
      try {
        writeSellTracking(sessionStorage, resolved);
      } catch {
        // Submit still reads trackingRef.
      }
    }
  }, []);

  useEffect(() => {
    if (!mapsKey || state.screen !== 'address') return;
    const input = addressInputRef.current;
    if (!input) return;
    let removeListener: (() => void) | undefined;
    let cancelled = false;

    const attach = () => {
      const maps = googleMapsNamespace();
      if (!maps?.places || cancelled) return;
      const autocomplete = new maps.places.Autocomplete(input, washingtonAutocompleteOptions(maps));
      autocomplete.setFields?.(['formatted_address', 'address_components', 'geometry']);
      const listener = autocomplete.addListener('place_changed', () => {
        placeRef.current = autocomplete.getPlace();
        const formatted = placeRef.current.formatted_address;
        if (formatted) setAddressDraft(formatted);
      });
      removeListener = () => listener.remove();
    };

    const start = () => {
      void loadGoogleMaps(mapsKey)
        .then(() => {
          if (!cancelled) attach();
        })
        .catch((error: unknown) => {
          console.error('Places autocomplete error:', error);
        });
    };

    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    if (typeof idleWindow.requestIdleCallback === 'function') {
      const idle = idleWindow.requestIdleCallback(start, { timeout: 2000 });
      return () => {
        cancelled = true;
        idleWindow.cancelIdleCallback?.(idle);
        removeListener?.();
      };
    }

    const timer = window.setTimeout(start, 1);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      removeListener?.();
    };
  }, [mapsKey, state.screen]);

  const continueAddress = async () => {
    const typed = addressDraft.trim();
    if (typed.length < 5) return;
    setCheckingAddress(true);
    try {
      const place = placeRef.current;
      const usePlace = Boolean(place?.formatted_address && place.formatted_address === typed);
      const selection = usePlace
        ? (selectionFromPlace(place as GooglePlaceResult, typed) ??
          (await lookupTypedAddress(typed)))
        : await lookupTypedAddress(typed);
      setState((current) => chooseSellAddress(current, selection));
      setAddressDraft(selection.address);
    } finally {
      setCheckingAddress(false);
    }
  };

  const submit = async () => {
    if (!canSubmitSell(state)) return;
    const errors = contactErrorsFor(contact);
    setContactErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    setSubmitError(null);
    if (!leadEventId) leadEventId = createMetaEventId();

    try {
      const recaptchaToken = await executeRecaptcha('submit_lead');
      let tracking = trackingRef.current;
      try {
        tracking = resolveSellTracking({
          search: window.location.search,
          referrer: document.referrer,
          stored: readSellTracking(sessionStorage) ?? trackingRef.current,
        });
        trackingRef.current = tracking;
      } catch (error) {
        console.error('Attribution capture failed:', error);
      }

      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          buildSellLeadBody({
            answers: state.answers,
            firstName: contact.firstName,
            lastName: contact.lastName,
            phone: contact.phone,
            email: contact.email,
            src: tracking.src,
            attribution: tracking.attribution,
            recaptchaToken,
          })
        ),
      });

      if (!response.ok) {
        const error = (await response.json()) as { message?: string };
        throw new Error(error.message || 'Failed to submit form');
      }

      trackLeadSubmit({ condition: state.answers.condition ?? undefined });
      if (!leadSent) {
        leadSent = true;
        trackMetaLead(leadEventId);
      }
      setState((current) => ({ ...current, screen: 'thanks' }));
    } catch (error) {
      console.error('Sell funnel submit error:', error);
      setSubmitError(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const showMap =
    state.screen === 'confirm' &&
    Boolean(mapsKey) &&
    typeof state.answers.lat === 'number' &&
    typeof state.answers.lng === 'number';

  return (
    <div ref={formRef}>
      <SellFunnelView
        state={state}
        contact={contact}
        addressDraft={addressDraft}
        checkingAddress={checkingAddress}
        isSubmitting={isSubmitting}
        submitError={submitError}
        contactErrors={contactErrors}
        addressInputRef={addressInputRef}
        onAddressDraft={(value) => {
          placeRef.current = null;
          setAddressDraft(value);
        }}
        onAddressContinue={() => {
          void continueAddress();
        }}
        onConfirm={() => setState((current) => confirmSellAddress(current))}
        onEditAddress={() => {
          setAddressDraft(state.answers.address);
          setState((current) => editSellAddress(current));
        }}
        onOwner={(owner) => setState((current) => chooseSellOwner(current, owner))}
        onListed={(listed) => setState((current) => chooseSellListed(current, listed))}
        onCondition={(condition) => setState((current) => chooseSellCondition(current, condition))}
        onTimeline={(timeline) => setState((current) => chooseSellTimeline(current, timeline))}
        onBack={() => setState((current) => goBackSell(current))}
        onContact={(patch) => setContact((current) => ({ ...current, ...patch }))}
        onSubmit={() => {
          void submit();
        }}
        map={
          showMap ? (
            <SellMapLoader
              apiKey={mapsKey}
              lat={state.answers.lat as number}
              lng={state.answers.lng as number}
            />
          ) : null
        }
      />
    </div>
  );
}

function SellMapLoader({ apiKey, lat, lng }: { apiKey: string; lat: number; lng: number }) {
  const [MapView, setMapView] = useState<typeof import('@/components/SellMap').default | null>(
    null
  );

  useEffect(() => {
    let cancelled = false;
    void import('@/components/SellMap').then((module) => {
      if (!cancelled) setMapView(() => module.default);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!MapView) return null;
  return <MapView apiKey={apiKey} lat={lat} lng={lng} />;
}
