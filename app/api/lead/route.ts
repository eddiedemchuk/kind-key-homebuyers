import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { leadFormSchema } from '@/lib/schema';
import { verifyRecaptcha } from '@/lib/captcha';
import { postToCRM } from '@/lib/crm';
import { sendTelegramMessage, formatLeadForTelegram } from '@/lib/telegram';
import { sendLeadEmail } from '@/lib/mailer';

// Rate limiting is optional so local development and deployments without the
// complete Upstash credential pair can still accept leads.
const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, '15 m'),
      analytics: true,
    })
  : null;

function getClientIP(request: NextRequest): string {
  // Proxies append addresses to x-forwarded-for; the first entry is the
  // original client address used as the rate-limit key and lead metadata.
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || realIP || 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    if (ratelimit) {
      const ip = getClientIP(request);
      const { success, limit, remaining } = await ratelimit.limit(ip);
      if (!success) {
        return NextResponse.json(
          { message: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
    }

    const body = await request.json();

    const validationResult = leadFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: validationResult.error.errors },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // The client omits this token when no site key is configured. Tokens that
    // are present always pass through the server-side verifier before integrations run.
    if (data.recaptchaToken) {
      const isValid = await verifyRecaptcha(data.recaptchaToken);
      if (!isValid) {
        return NextResponse.json({ message: 'reCAPTCHA verification failed' }, { status: 400 });
      }
    }

    const ip = getClientIP(request);
    const pagePath = body.pagePath || 'unknown';

    const crmData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      reasonForSelling: data.reasonForSelling,
      propertyAddress: data.propertyAddress,
      city: data.city,
      condition: data.condition,
      timeframe: data.timeframe,
      preferredContact: data.preferredContact,
      smsNonMarketingConsent: data.smsNonMarketingConsent,
      smsMarketingConsent: data.smsMarketingConsent,
      utm: body.utm,
      gclid: body.gclid,
      pagePath,
      recaptchaScore: 0.9, // Used when verification is skipped.
      ip,
    };

    // Delivery channels are independent and optional. A provider failure is
    // logged without preventing the remaining providers from receiving the lead.
    const promises = [
      postToCRM(crmData).catch((error) => {
        console.error('CRM webhook error:', error);
      }),
      sendTelegramMessage(formatLeadForTelegram(crmData)).catch((error) => {
        console.error('Telegram error:', error);
      }),
      sendLeadEmail(crmData).catch((error) => {
        console.error('Email error:', error);
      }),
    ];

    // Wait for every attempt to settle so the serverless request is not torn
    // down while an outbound delivery is still in flight.
    await Promise.allSettled(promises);

    return NextResponse.json({ success: true, message: 'Lead submitted successfully' });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
