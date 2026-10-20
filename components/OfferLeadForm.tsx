'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { offerLeadFormSchema, type OfferLeadFormData } from '@/lib/schema';
import { trackEvent, trackLeadSubmit } from '@/lib/analytics';
import { attributionFieldsForSubmit } from '@/lib/attribution-client';
import type { FormOrigin } from '@/lib/form-origin';
import { useRecaptcha } from '@/lib/useRecaptcha';
import { formatPhoneChange, toE164 } from '@/lib/phone';
import { SMS_CONSENT_TEXT_VERSION } from '@/lib/sms-consent';

interface OfferLeadFormProps {
  formOrigin: FormOrigin;
  idPrefix: string;
}

const fieldClass =
  'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent';

const submitButtonClass =
  'flex min-h-14 w-full touch-manipulation items-center justify-center rounded-lg bg-divider px-6 py-3 text-lg font-bold text-white shadow-md transition-colors hover:bg-divider/90 disabled:cursor-not-allowed disabled:opacity-50';

export default function OfferLeadForm({ formOrigin, idPrefix }: OfferLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { executeRecaptcha } = useRecaptcha(formRef);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    let started = false;
    const onStart = (event: Event) => {
      if (started) return;
      const target = event.target;
      if (!(target instanceof Element) || !target.closest('input, textarea, select')) return;
      started = true;
      trackEvent('form_start', { form_origin: formOrigin });
    };

    form.addEventListener('focusin', onStart);
    form.addEventListener('input', onStart);
    return () => {
      form.removeEventListener('focusin', onStart);
      form.removeEventListener('input', onStart);
    };
  }, [formOrigin]);
  const ids = {
    name: `${idPrefix}-name`,
    phone: `${idPrefix}-phone`,
    address: `${idPrefix}-address`,
    email: `${idPrefix}-email`,
    listedYes: `${idPrefix}-listed-yes`,
    listedNo: `${idPrefix}-listed-no`,
    smsConsent: `${idPrefix}-sms-consent`,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<OfferLeadFormData>({
    resolver: zodResolver(offerLeadFormSchema),
    defaultValues: {
      phone: '',
      email: '',
      sms_consent: false,
      smsNonMarketingConsent: false,
      smsMarketingConsent: false,
    },
  });
  const phoneValue = watch('phone') ?? '';
  const phoneSelection = useRef<number | null>(null);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const { ref: phoneRef, ...phoneField } = register('phone');

  useLayoutEffect(() => {
    const input = phoneInputRef.current;
    if (!input || document.activeElement !== input || phoneSelection.current == null) return;
    input.setSelectionRange(phoneSelection.current, phoneSelection.current);
  }, [phoneValue]);

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, selection } = formatPhoneChange(event.target.value, event.target.selectionStart);
    phoneSelection.current = selection;
    setValue('phone', value, { shouldValidate: value.length > 0 });
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
          phone: toE164(data.phone),
          email: data.email.trim(),
          propertyAddress: data.propertyAddress,
          sms_consent: true,
          sms_consent_text_version: SMS_CONSENT_TEXT_VERSION,
          smsNonMarketingConsent: true,
          smsMarketingConsent: true,
          listed_with_agent: data.listed_with_agent,
          recaptchaToken,
          pagePath: window.location.pathname,
          ...attributionFields,
          form_origin: formOrigin,
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
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="scroll-mb-[calc(65px+env(safe-area-inset-bottom,0px))] space-y-1.5 md:scroll-mb-0"
      noValidate
    >
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
          {...phoneField}
          ref={(element) => {
            phoneInputRef.current = element;
            phoneRef(element);
          }}
          value={phoneValue}
          onChange={handlePhoneChange}
          className={fieldClass}
          placeholder="(253) 555-0100"
          autoComplete="tel"
          inputMode="tel"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor={ids.email} className="mb-1 block text-sm font-medium text-text-primary">
          Email
        </label>
        <input
          type="email"
          id={ids.email}
          {...register('email')}
          className={fieldClass}
          placeholder="you@example.com"
          autoComplete="email"
          inputMode="email"
          required
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
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

      <fieldset>
        <legend className="mb-1 text-sm font-medium text-text-primary">
          Is your house currently listed with an agent?
        </legend>
        <div className="flex gap-4">
          <label
            htmlFor={ids.listedYes}
            className="flex items-center gap-2 text-sm text-text-primary"
          >
            <input
              type="radio"
              id={ids.listedYes}
              value="yes"
              {...register('listed_with_agent')}
              className="h-4 w-4 border-gray-300 text-divider focus:ring-divider"
            />
            Yes
          </label>
          <label
            htmlFor={ids.listedNo}
            className="flex items-center gap-2 text-sm text-text-primary"
          >
            <input
              type="radio"
              id={ids.listedNo}
              value="no"
              {...register('listed_with_agent')}
              className="h-4 w-4 border-gray-300 text-divider focus:ring-divider"
            />
            No
          </label>
        </div>
        {errors.listed_with_agent && (
          <p className="mt-1 text-sm text-red-600">{errors.listed_with_agent.message}</p>
        )}
      </fieldset>

      <div className="scroll-mb-[calc(80px+env(safe-area-inset-bottom,0px))] pt-1">
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id={ids.smsConsent}
            {...register('sms_consent')}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-gray-300 bg-white text-divider focus:ring-divider"
          />
          <p className="text-xs leading-snug text-text-secondary">
            <label htmlFor={ids.smsConsent}>I agree to the</label>{' '}
            <Link href="/terms" className="font-medium text-divider underline">
              Terms of Service
            </Link>{' '}
            <label htmlFor={ids.smsConsent}>and</label>{' '}
            <Link href="/privacy" className="font-medium text-divider underline">
              Privacy Policy
            </Link>{' '}
            <label htmlFor={ids.smsConsent}>
              and consent to receive calls and text messages from KindKey Home Buyers at the number
              provided, including automated messages. Consent is not a condition of purchase. Msg
              &amp; data rates may apply. Msg frequency varies. Reply STOP to opt out, HELP for
              help.
            </label>
          </p>
        </div>
        {errors.sms_consent && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.sms_consent.message}
          </p>
        )}
      </div>

      {submitError && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3" role="alert">
          <p className="text-sm text-red-600">{submitError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`${submitButtonClass} scroll-mb-[calc(80px+env(safe-area-inset-bottom,0px))]`}
      >
        {isSubmitting ? 'Submitting...' : 'Get My Free Cash Offer'}
      </button>
      <p className="text-center text-xs font-medium text-text-secondary">
        Free, no obligation, we never share your info
      </p>
    </form>
  );
}
