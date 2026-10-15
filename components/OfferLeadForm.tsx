'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { offerLeadFormSchema, type OfferLeadFormData } from '@/lib/schema';
import { trackLeadSubmit } from '@/lib/analytics';
import { attributionFieldsForSubmit } from '@/lib/attribution-client';
import type { FormOrigin } from '@/lib/form-origin';
import { useRecaptcha } from '@/lib/useRecaptcha';

export type OfferChannel = 'google' | 'facebook';

interface OfferLeadFormProps {
  channel: OfferChannel;
  idPrefix: string;
}

function formOriginForChannel(channel: OfferChannel): FormOrigin {
  return channel === 'facebook' ? 'facebook_ads_landing' : 'google_ads_landing';
}

const fieldClass =
  'w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-base text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent';

function formatPhoneNumber(value: string): string {
  if (!value || !value.startsWith('+1')) {
    return '+1';
  }

  const digits = value.slice(2).replace(/\D/g, '').slice(0, 10);
  if (digits.length === 0) return '+1';
  if (digits.length <= 3) return `+1(${digits}`;
  if (digits.length <= 6) return `+1(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `+1(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function OfferLeadForm({ channel, idPrefix }: OfferLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { isReady, executeRecaptcha } = useRecaptcha(formRef);
  const ids = {
    name: `${idPrefix}-name`,
    phone: `${idPrefix}-phone`,
    address: `${idPrefix}-address`,
    email: `${idPrefix}-email`,
    smsService: `${idPrefix}-sms-service`,
    smsMarketing: `${idPrefix}-sms-marketing`,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<OfferLeadFormData>({
    resolver: zodResolver(offerLeadFormSchema),
    defaultValues: {
      phone: '+1',
      smsNonMarketingConsent: false,
      smsMarketingConsent: false,
    },
  });

  useEffect(() => {
    setValue('phone', '+1', { shouldValidate: false });
  }, [setValue]);

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length < 2 || !inputValue.startsWith('+1')) {
      setValue('phone', '+1', { shouldValidate: false });
      event.target.setSelectionRange(2, 2);
      return;
    }

    const formatted = formatPhoneNumber(inputValue);
    const cursorPosition = event.target.selectionStart || 0;
    const digitsBeforeCursor = inputValue.slice(0, cursorPosition).replace(/\D/g, '').length;

    setValue('phone', formatted, { shouldValidate: true });

    setTimeout(() => {
      let newCursorPos = 2;
      if (digitsBeforeCursor > 0) {
        let digitCount = 0;
        for (let index = 2; index < formatted.length; index += 1) {
          if (/\d/.test(formatted[index])) {
            digitCount += 1;
            if (digitCount === digitsBeforeCursor) {
              newCursorPos = index + 1;
              break;
            }
          }
          if (digitCount < digitsBeforeCursor) {
            newCursorPos = index + 1;
          }
        }
      }
      event.target.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handlePhoneKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const cursorPosition = event.currentTarget.selectionStart || 0;
    if (
      (event.key === 'Backspace' && cursorPosition <= 2) ||
      (event.key === 'Delete' && cursorPosition < 2)
    ) {
      event.preventDefault();
    }
  };

  const onSubmit = async (data: OfferLeadFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const recaptchaToken = await executeRecaptcha('submit_lead');
      let attributionFields: Record<string, string> = {};
      try {
        attributionFields = attributionFieldsForSubmit();
      } catch (error) {
        console.error('Attribution capture failed:', error);
      }

      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          propertyAddress: data.propertyAddress,
          smsNonMarketingConsent: data.smsNonMarketingConsent,
          smsMarketingConsent: data.smsMarketingConsent,
          recaptchaToken,
          pagePath: window.location.pathname,
          ...attributionFields,
          form_origin: formOriginForChannel(channel),
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to submit form');
      }

      trackLeadSubmit({});
      window.location.href = '/thank-you';
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-1.5" noValidate>
      <div>
        <label htmlFor={ids.name} className="mb-1 block text-sm font-medium text-text-primary">
          Name
        </label>
        <input
          type="text"
          id={ids.name}
          {...register('name')}
          className={fieldClass}
          placeholder="Your name"
          autoComplete="name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor={ids.phone} className="mb-1 block text-sm font-medium text-text-primary">
          Phone
        </label>
        <input
          type="tel"
          id={ids.phone}
          {...register('phone')}
          onChange={handlePhoneChange}
          onKeyDown={handlePhoneKeyDown}
          className={fieldClass}
          placeholder="+1(253) 555-0100"
          autoComplete="tel"
          inputMode="tel"
          maxLength={17}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor={ids.address} className="mb-1 block text-sm font-medium text-text-primary">
          Property Address
        </label>
        <input
          type="text"
          id={ids.address}
          {...register('propertyAddress')}
          className={fieldClass}
          placeholder="123 Main St, Auburn, WA"
          autoComplete="street-address"
        />
        {errors.propertyAddress && (
          <p className="mt-1 text-sm text-red-600">{errors.propertyAddress.message}</p>
        )}
      </div>

      <div>
        <label htmlFor={ids.email} className="mb-1 block text-sm font-medium text-text-primary">
          Email <span className="font-normal text-text-secondary">(optional)</span>
        </label>
        <input
          type="email"
          id={ids.email}
          {...register('email')}
          className={fieldClass}
          placeholder="you@example.com"
          autoComplete="email"
          inputMode="email"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div className="space-y-1.5">
        <div className="flex items-start">
          <input
            type="checkbox"
            id={ids.smsService}
            {...register('smsNonMarketingConsent')}
            className="mt-1 h-4 w-4 rounded border-gray-300 bg-white text-divider focus:ring-divider"
          />
          <label
            htmlFor={ids.smsService}
            className="ml-2 text-[11px] leading-tight text-text-secondary"
          >
            By checking this box, I consent to receive non-marketing text messages including
            appointment confirmations, follow-ups, and service-related updates, from KindKey Home
            Buyers LLC. Message frequency varies, message &amp; data rates may apply. Text HELP for
            assistance, reply STOP to opt out.
          </label>
        </div>
        <div className="flex items-start">
          <input
            type="checkbox"
            id={ids.smsMarketing}
            {...register('smsMarketingConsent')}
            className="mt-1 h-4 w-4 rounded border-gray-300 bg-white text-divider focus:ring-divider"
          />
          <label
            htmlFor={ids.smsMarketing}
            className="ml-2 text-[11px] leading-tight text-text-secondary"
          >
            By checking this box, I consent to receive marketing and promotional messages including
            special offers, discounts, new product updates among others from KindKey Home Buyers LLC
            at the phone number provided. Frequency may vary. Message &amp; data rates may apply.
            Text HELP for assistance, reply STOP to opt out.
          </label>
        </div>
      </div>

      {submitError && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3" role="alert">
          <p className="text-sm text-red-600">{submitError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !isReady}
        className="w-full rounded-lg bg-divider px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-divider/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Get My Cash Offer'}
      </button>

      <p className="text-center text-xs text-text-secondary">
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        {' · '}
        <Link href="/terms" className="underline">
          Terms
        </Link>
      </p>
    </form>
  );
}
