function digitsOnly(value: string): string {
  return value.replace(/\D/g, '');
}

/** A leading 1 is the US country code when the value is long enough or starts with +. */
function stripsCountryCode(value: string, digits: string): boolean {
  if (!digits.startsWith('1')) return false;
  if (digits.length >= 11) return true;
  return value.trim().startsWith('+');
}

/** Up to 10 national digits. Drops a leading country code 1 when one is present. */
export function nationalDigits(value: string): string {
  let digits = digitsOnly(value);
  if (stripsCountryCode(value, digits)) digits = digits.slice(1);
  return digits.slice(0, 10);
}

export function isCompleteUsPhone(value: string): boolean {
  const digits = digitsOnly(value);
  if (digits.length === 10) return true;
  return digits.length === 11 && digits.startsWith('1');
}

/** E.164 for a complete US number, or '' when the value is incomplete. */
export function toE164(value: string): string {
  if (!isCompleteUsPhone(value)) return '';
  const digits = digitsOnly(value);
  const national = digits.length === 11 ? digits.slice(1) : digits;
  return `+1${national}`;
}

/** Display mask. Does not force a +1 prefix, so paste and autofill can replace the field. */
export function formatUsPhoneInput(value: string): string {
  const digits = nationalDigits(value);
  if (digits.length === 0) return '';
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function cursorForNationalDigits(raw: string, cursor: number, formatted: string): number {
  const beforeDigits = digitsOnly(raw.slice(0, Math.max(0, cursor)));
  const strip = stripsCountryCode(raw, digitsOnly(raw)) && beforeDigits.startsWith('1');
  const count = Math.min((strip ? beforeDigits.slice(1) : beforeDigits).length, 10);
  if (count <= 0) return 0;

  let seen = 0;
  for (let index = 0; index < formatted.length; index += 1) {
    if (/\d/.test(formatted[index])) {
      seen += 1;
      if (seen === count) return index + 1;
    }
  }
  return formatted.length;
}

export function formatPhoneChange(
  raw: string,
  selectionStart: number | null
): { value: string; selection: number } {
  const formatted = formatUsPhoneInput(raw);
  return {
    value: formatted,
    selection: cursorForNationalDigits(raw, selectionStart ?? raw.length, formatted),
  };
}
