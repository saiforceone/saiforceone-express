import type { Prisma } from '@prisma/client';

const LBS_TO_KG = 0.453;

type TimeStyle = 'long' | 'short' | 'medium' | 'full' | undefined;

export default class Formatters {
  static formatWeight(weight: Prisma.Decimal): string {
    const weightAsKgs = weight.times(LBS_TO_KG).toFixed(2);
    return `${weight} Lbs (~${weightAsKgs} Kgs)`;
  }

  /**
   * Helper method that applies simple date formatting to a date and returns a string representation
   * @param inputDate
   * @param locale
   */
  static formatDate(inputDate: Date, locale?: string): string {
    const formatOptions: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
      timeZone: 'America/Jamaica',
      timeZoneName: 'short',
    };
    return new Intl.DateTimeFormat(
      locale ? locale : 'en-US',
      formatOptions
    ).format(inputDate);
  }

  static formatDateTime(
    inputDate: Date,
    timeStyle: TimeStyle = 'medium',
    locale?: string
  ): string {
    const formatOptions: Intl.DateTimeFormatOptions = {
      dateStyle: 'medium',
      timeStyle,
    };

    return new Intl.DateTimeFormat(
      locale ? locale : 'en-US',
      formatOptions
    ).format(inputDate);
  }

  // TODO: complete implementation
  // static getRelativeTime(inputDate: Date): string {
  // compare to current date/time to get delta
  //   const formatOptions: Intl.RelativeTimeFormatOptions = {
  //     localeMatcher: 'best fit',
  //   }
  // }
}
