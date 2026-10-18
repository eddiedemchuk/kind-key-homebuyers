'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { useForm, type UseFormRegisterReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { offerLeadFormSchema, type OfferLeadFormData } from '@/lib/schema';
import { trackLeadSubmit } from '@/lib/analytics';
import { attributionFieldsForSubmit } from '@/lib/attribution-client';
import type { FormOrigin } from '@/lib/form-origin';
import { useRecaptcha } from '@/lib/useRecaptcha';
import { formatPhoneChange, toE164 } from '@/lib/phone';

interface OfferLeadFormProps {
  formOrigin: FormOrigin;
  idPrefix: string;
}

const SERVICE_SMS_CONSENT =
  'By checking this box, I consent to receive non-marketing text messages including appointment confirmations, follow-ups, and service-related updates, from KindKey Home Buyers LLC. Message frequency varies, message & data rates may apply. Text HELP for assistance, reply STOP to opt out.';

const MARKETING_SMS_CONSENT =
  'By checking this box, I consent to receive marketing and promotional messages including special offers, discounts, new product updates among others from KindKey Home Buyers LLC at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.';

function ConsentField({
  id,
  shortLabel,
  fullText,
  registration,
}: {
  id: string;
  shortLabel: string;
  fullText: string;
  registration: UseFormRegisterReturn;
}) {
  return (
    <div className="flex items-start gap-2">
      <input
        type="checkbox"
        id={id}
        {...registration}
        className="mt-0.5 h-4 w-4 rounded border-gray-300 bg-white text-divider focus:ring-divider"
      />
      <div className="text-[11px] leading-tight text-text-secondary">
        <label htmlFor={id}>{shortLabel}</label>{' '}
        <details className="inline">
          <summary className="inline cursor-pointer font-medium text-divider">Details</summary>
          <p className="mt-1">{fullText}</p>
        </details>
      </div>
    </div>
  );
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
  const ids = {
    name: `${idPrefix}-name`,
    phone: `${idPrefix}-phone`,
    address: `${idPrefix}-address`,
    email: `${idPrefix}-email`,
    listedYes: `${idPrefix}-listed-yes`,
    listedNo: `${idPrefix}-listed-no`,
    smsService: `${idPrefix}-sms-service`,
    smsMarketing: `${idPrefix}-sms-marketing`,
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
          email: data.email,
          propertyAddress: data.propertyAddress,
          smsNonMarketingConsent: data.smsNonMarketingConsent,
          smsMarketingConsent: data.smsMarketingConsent,
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

      <div className="space-y-1">
        <ConsentField
          id={ids.smsService}
          shortLabel="Service texts. Msg & data rates may apply."
          fullText={SERVICE_SMS_CONSENT}
          registration={register('smsNonMarketingConsent')}
        />
        <ConsentField
          id={ids.smsMarketing}
          shortLabel="Marketing texts. Msg & data rates may apply."
          fullText={MARKETING_SMS_CONSENT}
          registration={register('smsMarketingConsent')}
        />
      </div>

      {submitError && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3" role="alert">
          <p className="text-sm text-red-600">{submitError}</p>
        </div>
      )}

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

      <button type="submit" disabled={isSubmitting} className={submitButtonClass}>
        {isSubmitting ? 'Submitting...' : 'Get My Free Cash Offer'}
      </button>
      <p className="text-center text-xs font-medium text-text-secondary">
        Free, no obligation, we never share your info
      </p>

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
