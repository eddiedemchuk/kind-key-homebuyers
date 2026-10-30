'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useForm, type FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { trackEvent, trackLeadSubmit } from '@/lib/analytics';
import { trackMetaLead } from '@/lib/meta-pixel';
import { formatPhoneChange } from '@/lib/phone';
import { persistThankYouPhoneSource, thankYouHref, type DisplayPhone } from '@/lib/phones';
import { offerHeroLeadFormSchema, type OfferHeroLeadFormData } from '@/lib/schema';
import {
  SELLER_QUIZ_CONDITIONS,
  SELLER_QUIZ_LISTED_OPTIONS,
  SELLER_QUIZ_QUESTIONS,
  SELLER_QUIZ_REALTOR_OPTIONS,
  SELLER_QUIZ_STEP_COUNT,
  SELLER_QUIZ_TIMELINES,
  buildSellerQuizLeadBody,
  chooseQuizCondition,
  chooseQuizListed,
  chooseQuizRealtor,
  chooseQuizTimeline,
  editQuizAnswers,
  goBackQuiz,
  initialSellerQuizState,
  isQualifyingRealtor,
  listedOptionLabel,
  quizLeadAttribution,
  quizSubmitFields,
  realtorOptionLabel,
  sellerQuizNotAFitMessage,
  sellerQuizProgress,
  sellerQuizStepLabel,
  shouldSubmitQuizLead,
  type SellerQuizAnswers,
  type SellerQuizCondition,
  type SellerQuizListed,
  type SellerQuizOutcome,
  type SellerQuizRealtor,
  type SellerQuizState,
  type SellerQuizStep,
  type SellerQuizTimeline,
} from '@/lib/seller-quiz';
import { useRecaptcha } from '@/lib/useRecaptcha';

const fieldClass =
  'w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-base text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent';

const choiceClass = (selected: boolean) =>
  `flex min-h-[4.75rem] w-full touch-manipulation items-center justify-between gap-3 rounded-2xl border-2 px-4 py-4 text-left text-lg font-semibold leading-snug shadow-sm transition-colors active:scale-[0.99] ${
    selected
      ? 'border-divider bg-secondary text-text-primary'
      : 'border-gray-200 bg-white text-text-primary hover:border-divider'
  }`;

export interface SellerQuizScreenProps {
  step: SellerQuizStep;
  outcome: SellerQuizOutcome;
  callPhone: DisplayPhone;
  answers: SellerQuizAnswers;
  onCondition: (value: SellerQuizCondition) => void;
  onTimeline: (value: SellerQuizTimeline) => void;
  onListed: (value: SellerQuizListed) => void;
  onRealtor: (value: SellerQuizRealtor) => void;
  onBack: () => void;
  onEdit: () => void;
  propertyAddress: string;
  name: string;
  phone: string;
  email: string;
  smsConsent: boolean;
  onPropertyAddress: (value: string) => void;
  onName: (value: string) => void;
  onPhone: (value: string, selection: number) => void;
  onEmail: (value: string) => void;
  onSmsConsent: (value: boolean) => void;
  phoneError?: string;
  addressError?: string;
  nameError?: string;
  emailError?: string;
  consentError?: string;
  submitError?: string | null;
  isSubmitting?: boolean;
  onSubmit: () => void;
}

export function SellerQuizScreen({
  step,
  outcome,
  callPhone,
  answers,
  onCondition,
  onTimeline,
  onListed,
  onRealtor,
  onBack,
  onEdit,
  propertyAddress,
  name,
  phone,
  email,
  smsConsent,
  onPropertyAddress,
  onName,
  onPhone,
  onEmail,
  onSmsConsent,
  phoneError,
  addressError,
  nameError,
  emailError,
  consentError,
  submitError,
  isSubmitting = false,
  onSubmit,
}: SellerQuizScreenProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const phoneSelection = useRef<number | null>(null);
  const mounted = useRef(false);
  const summary =
    answers.condition &&
    answers.timeline &&
    answers.listedWithAgent &&
    isQualifyingRealtor(answers.realtorStatus)
      ? `${answers.condition} · ${answers.timeline} · ${listedOptionLabel(answers.listedWithAgent)} · ${realtorOptionLabel(answers.realtorStatus)}`
      : '';

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [step, outcome]);

  useEffect(() => {
    const input = phoneRef.current;
    if (!input || document.activeElement !== input || phoneSelection.current == null) return;
    input.setSelectionRange(phoneSelection.current, phoneSelection.current);
  }, [phone]);

  if (outcome === 'not-a-fit') {
    const message = sellerQuizNotAFitMessage(callPhone.display);
    const phoneStart = message.lastIndexOf(callPhone.display);
    return (
      <section data-seller-quiz data-quiz-outcome="not-a-fit" aria-labelledby="seller-quiz-heading">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-11 items-center text-base font-semibold text-divider"
        >
          ← Back
        </button>
        <h1
          id="seller-quiz-heading"
          ref={headingRef}
          tabIndex={-1}
          className="text-balance text-2xl font-bold leading-tight text-text-primary outline-none"
          style={{ marginBottom: 0, marginTop: '0.75rem' }}
        >
          Thanks!
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text-primary">
          {phoneStart === -1 ? (
            message
          ) : (
            <>
              {message.slice(0, phoneStart)}
              <a href={`tel:${callPhone.tel}`} className="font-semibold text-divider">
                {callPhone.display}
              </a>
              {message.slice(phoneStart + callPhone.display.length)}
            </>
          )}
        </p>
      </section>
    );
  }

  return (
    <section data-seller-quiz data-quiz-step={step} aria-labelledby="seller-quiz-heading">
      <p className="text-sm font-semibold text-divider">{sellerQuizStepLabel(step)}</p>
      <div
        className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={SELLER_QUIZ_STEP_COUNT}
        aria-valuenow={step}
        aria-label={sellerQuizStepLabel(step)}
      >
        <div
          className="h-full rounded-full bg-divider transition-[width] duration-200"
          style={{ width: `${sellerQuizProgress(step)}%` }}
        />
      </div>

      {step > 1 ? (
        <button
          type="button"
          onClick={onBack}
          className="mt-4 inline-flex min-h-11 items-center text-base font-semibold text-divider"
        >
          ← Back
        </button>
      ) : null}

      <h1
        id="seller-quiz-heading"
        ref={headingRef}
        tabIndex={-1}
        className="text-balance text-2xl font-bold leading-tight text-text-primary outline-none"
        style={{ marginBottom: 0, marginTop: step > 1 ? '0.75rem' : '1rem' }}
      >
        {SELLER_QUIZ_QUESTIONS[step]}
      </h1>

      {step === 1 ? (
        <ul className="mt-4 space-y-3">
          {SELLER_QUIZ_CONDITIONS.map((option) => (
            <li key={option}>
              <button
                type="button"
                className={choiceClass(answers.condition === option)}
                aria-pressed={answers.condition === option}
                onClick={() => onCondition(option)}
              >
                <span>{option}</span>
                <span aria-hidden className="text-divider">
                  →
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {step === 2 ? (
        <ul className="mt-4 space-y-3">
          {SELLER_QUIZ_TIMELINES.map((option) => (
            <li key={option}>
              <button
                type="button"
                className={choiceClass(answers.timeline === option)}
                aria-pressed={answers.timeline === option}
                onClick={() => onTimeline(option)}
              >
                <span>{option}</span>
                <span aria-hidden className="text-divider">
                  →
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {step === 3 ? (
        <ul className="mt-4 space-y-3">
          {SELLER_QUIZ_LISTED_OPTIONS.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className={choiceClass(answers.listedWithAgent === option.value)}
                aria-pressed={answers.listedWithAgent === option.value}
                onClick={() => onListed(option.value)}
              >
                <span>{option.label}</span>
                <span aria-hidden className="text-divider">
                  →
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {step === 4 ? (
        <ul className="mt-4 space-y-3">
          {SELLER_QUIZ_REALTOR_OPTIONS.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className={choiceClass(answers.realtorStatus === option.value)}
                aria-pressed={answers.realtorStatus === option.value}
                onClick={() => onRealtor(option.value)}
              >
                <span>{option.label}</span>
                <span aria-hidden className="text-divider">
                  →
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {step === 5 ? (
        <form
          className="mt-4 space-y-3"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          {summary ? (
            <div className="flex items-start justify-between gap-3 rounded-2xl bg-secondary px-3 py-2">
              <p className="min-w-0 text-sm font-medium leading-snug text-text-primary">
                {summary}
              </p>
              <button
                type="button"
                onClick={onEdit}
                className="shrink-0 text-sm font-semibold text-divider underline"
              >
                Edit
              </button>
            </div>
          ) : null}

          <div>
            <label htmlFor="hero-address" className="mb-1 block text-sm font-medium">
              Property Address
            </label>
            <input
              id="hero-address"
              name="propertyAddress"
              type="text"
              value={propertyAddress}
              onChange={(event) => onPropertyAddress(event.target.value)}
              className={fieldClass}
              placeholder="123 Main St, Auburn, WA"
              autoComplete="street-address"
              required
            />
            {addressError ? <p className="mt-1 text-sm text-red-600">{addressError}</p> : null}
          </div>

          <div>
            <label htmlFor="hero-name" className="mb-1 block text-sm font-medium">
              Name
            </label>
            <input
              id="hero-name"
              name="name"
              type="text"
              value={name}
              onChange={(event) => onName(event.target.value)}
              className={fieldClass}
              placeholder="Your name"
              autoComplete="name"
              required
            />
            {nameError ? <p className="mt-1 text-sm text-red-600">{nameError}</p> : null}
          </div>

          <div>
            <label htmlFor="hero-phone" className="mb-1 block text-sm font-medium">
              Phone
            </label>
            <input
              id="hero-phone"
              name="phone"
              type="tel"
              ref={phoneRef}
              value={phone}
              onChange={(event) => {
                const next = formatPhoneChange(event.target.value, event.target.selectionStart);
                phoneSelection.current = next.selection;
                onPhone(next.value, next.selection);
              }}
              className={fieldClass}
              placeholder="(253) 555-0100"
              autoComplete="tel"
              inputMode="tel"
              required
              aria-invalid={phoneError ? true : undefined}
            />
            {phoneError ? (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {phoneError}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="hero-email" className="mb-1 block text-sm font-medium">
              Email <span className="font-normal text-text-secondary">(optional)</span>
            </label>
            <input
              id="hero-email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => onEmail(event.target.value)}
              className={fieldClass}
              placeholder="you@example.com"
              autoComplete="email"
              inputMode="email"
            />
            {emailError ? <p className="mt-1 text-sm text-red-600">{emailError}</p> : null}
          </div>

          <div className="scroll-mb-[calc(80px+env(safe-area-inset-bottom,0px))]">
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="hero-sms-consent"
                name="sms_consent"
                checked={smsConsent}
                onChange={(event) => onSmsConsent(event.target.checked)}
                className="mt-0.5 h-5 w-5 shrink-0 rounded border-gray-300 bg-white text-divider focus:ring-divider"
                required
              />
              <p className="text-[11px] leading-tight text-text-secondary">
                <label htmlFor="hero-sms-consent">I agree to the</label>{' '}
                <Link href="/terms" className="font-medium text-divider underline">
                  Terms of Service
                </Link>{' '}
                <label htmlFor="hero-sms-consent">and</label>{' '}
                <Link href="/privacy" className="font-medium text-divider underline">
                  Privacy Policy
                </Link>{' '}
                <label htmlFor="hero-sms-consent">
                  and consent to receive calls and text messages from KindKey Home Buyers at the
                  number provided, including automated messages. Consent is not a condition of
                  purchase. Msg &amp; data rates may apply. Msg frequency varies. Reply STOP to opt
                  out, HELP for help.
                </label>
              </p>
            </div>
            {consentError ? (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {consentError}
              </p>
            ) : null}
          </div>

          {submitError ? (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3" role="alert">
              <p className="text-sm text-red-600">{submitError}</p>
            </div>
          ) : null}

          <p className="text-center text-xs leading-tight text-text-secondary">
            Filling this out doesn&apos;t commit you to sell.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex min-h-14 w-full touch-manipulation items-center justify-center rounded-lg bg-warm-amber px-6 py-3 text-lg font-bold text-text-primary shadow-md transition-colors hover:bg-warm-amber/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Get My Cash Offer →'}
          </button>
        </form>
      ) : null}
    </section>
  );
}

function messageFor(
  errors: FieldErrors<OfferHeroLeadFormData>,
  field: keyof OfferHeroLeadFormData
) {
  const message = errors[field]?.message;
  return typeof message === 'string' ? message : undefined;
}

export default function SellerQuiz({
  pathname,
  callPhone,
}: {
  pathname: '/quiz' | '/offer/quiz';
  callPhone: DisplayPhone;
}) {
  const [quiz, setQuiz] = useState<SellerQuizState>(initialSellerQuizState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const { executeRecaptcha } = useRecaptcha(formRef);
  const {
    setValue,
    getValues,
    trigger,
    watch,
    formState: { errors },
  } = useForm<OfferHeroLeadFormData>({
    resolver: zodResolver(offerHeroLeadFormSchema),
    defaultValues: {
      propertyAddress: '',
      name: '',
      phone: '',
      email: '',
      sms_consent: false,
      smsNonMarketingConsent: false,
      smsMarketingConsent: false,
    },
  });

  const started = useRef(false);
  useEffect(() => {
    if (quiz.outcome !== 'quiz' || quiz.step !== 5 || started.current) return;
    started.current = true;
    const source = quizLeadAttribution(pathname, window.location.search);
    trackEvent('form_start', { form_origin: source.formOrigin });
  }, [pathname, quiz.outcome, quiz.step]);

  const propertyAddress = watch('propertyAddress') ?? '';
  const name = watch('name') ?? '';
  const phone = watch('phone') ?? '';
  const email = watch('email') ?? '';
  const smsConsent = watch('sms_consent') === true;

  const selectCondition = (condition: SellerQuizCondition) => {
    setQuiz((state) => chooseQuizCondition(state, condition));
  };
  const selectTimeline = (timeline: SellerQuizTimeline) => {
    setQuiz((state) => chooseQuizTimeline(state, timeline));
  };
  const selectListed = (listed: SellerQuizListed) => {
    setValue('listed_with_agent', listed, { shouldValidate: false });
    setQuiz((state) => chooseQuizListed(state, listed));
  };
  const selectRealtor = (realtorStatus: SellerQuizRealtor) => {
    setQuiz((state) => chooseQuizRealtor(state, realtorStatus));
  };

  const submit = async () => {
    if (!shouldSubmitQuizLead(quiz)) return;
    const answers = quiz.answers;
    setValue('listed_with_agent', answers.listedWithAgent, { shouldValidate: false });
    const valid = await trigger();
    if (!valid) return;

    setIsSubmitting(true);
    setSubmitError(null);
    const data = getValues();

    try {
      const recaptchaToken = await executeRecaptcha('submit_lead');
      const pagePath = window.location.pathname || pathname;
      const search = window.location.search;
      const source = quizLeadAttribution(pagePath, search);
      let tracking = quizSubmitFields({ pathname: pagePath, search: '', referrer: '' });
      try {
        tracking = quizSubmitFields({
          pathname: pagePath,
          search,
          referrer: document.referrer,
        });
      } catch (error) {
        console.error('Attribution capture failed:', error);
      }

      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          buildSellerQuizLeadBody({
            condition: answers.condition,
            timeline: answers.timeline,
            listedWithAgent: answers.listedWithAgent,
            realtorStatus: answers.realtorStatus,
            propertyAddress: data.propertyAddress,
            name: data.name,
            phone: data.phone,
            email: data.email,
            src: tracking.src,
            formOrigin: source.formOrigin,
            pagePath,
            recaptchaToken,
            attribution: tracking.attribution,
          })
        ),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to submit form');
      }

      trackLeadSubmit({});
      trackMetaLead();
      persistThankYouPhoneSource(pagePath, source.facebook);
      window.location.href = thankYouHref(pagePath, source.facebook);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={formRef} data-offer-form>
      <SellerQuizScreen
        step={quiz.step}
        outcome={quiz.outcome}
        callPhone={callPhone}
        answers={quiz.answers}
        onCondition={selectCondition}
        onTimeline={selectTimeline}
        onListed={selectListed}
        onRealtor={selectRealtor}
        onBack={() => setQuiz((state) => goBackQuiz(state))}
        onEdit={() => setQuiz((state) => editQuizAnswers(state))}
        propertyAddress={propertyAddress}
        name={name}
        phone={phone}
        email={email}
        smsConsent={smsConsent}
        onPropertyAddress={(value) => setValue('propertyAddress', value, { shouldValidate: false })}
        onName={(value) => setValue('name', value, { shouldValidate: false })}
        onPhone={(value) => setValue('phone', value, { shouldValidate: value.length > 0 })}
        onEmail={(value) => setValue('email', value, { shouldValidate: false })}
        onSmsConsent={(value) => setValue('sms_consent', value, { shouldValidate: false })}
        phoneError={messageFor(errors, 'phone')}
        addressError={messageFor(errors, 'propertyAddress')}
        nameError={messageFor(errors, 'name')}
        emailError={messageFor(errors, 'email')}
        consentError={messageFor(errors, 'sms_consent')}
        submitError={submitError}
        isSubmitting={isSubmitting}
        onSubmit={() => {
          void submit();
        }}
      />
    </div>
  );
}
