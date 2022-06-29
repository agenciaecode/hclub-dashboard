import { mask } from '../mask';

/**
 * Receives Phone value and returns formatted "(00) 0000-0000" | "0000-0000"
 *
 * @param string value - Value to format
 * @param boolean ddd - Add ddd in formatting
 * @return string - Formatted value
 *
 */
export function phone(value: string, ddd = true): string {
  if (!ddd) return mask(value, '0000-0000');
  return mask(value, '(00) 0000-0000');
}

export function removePhoneMask(maskedPhone: string): string {
  return maskedPhone.replace(/[()]/g, '');
}

export function removePhoneRegionNumber(phoneNumber?: string) {
  return phoneNumber?.replace('+55', '').trim();
}

/**
 * Workarround solution for hook-form and imask form reset conflict
 * @param phoneNumber
 */
export function reaplyPhoneMask(phoneNumber?: string) {
  if (!phoneNumber || phoneNumber.includes('(')) return phoneNumber;
  const [ddd, number] = phoneNumber.split(' ');
  return `(${ddd}) ${number}`;
}

export const PHONE_MASK_REGEX = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;
