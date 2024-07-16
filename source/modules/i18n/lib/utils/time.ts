import type { Locale, TimeDifference, Timezone, UserTimezone } from "../types";
import { useClientTranslation } from "./translations";

/** Retrieves the user's time zone. */
export function getUserTimezone() {
  // The Intl.DateTimeFormat automatically gets initialized with the user's runtime time zone.
  const formatter = new Intl.DateTimeFormat();
  return formatter.resolvedOptions().timeZone as Timezone;
}

/**
 * Calculates the timezone offset in minutes for a given user timezone and date.
 *
 * @param userTimezone The user timezone. Can be either 'user' to use the user's timezone or a specific timezone string.
 * @param date The date for which to calculate the timezone offset. Defaults to the current date.
 */

export function getTimezoneOffset(
  userTimezone: UserTimezone,
  date: Date = new Date(),
) {
  const timezone = userTimezone === "user" ? getUserTimezone() : userTimezone;
  const formatter = new Intl.DateTimeFormat("ia", {
    timeZone: timezone,
    timeZoneName: "longOffset",
  }).formatToParts(date);

  const offset = formatter.find(({ type }) => type === "timeZoneName")?.value;
  const sign = offset?.includes("+") ? 1 : -1;

  const [, gmtOffset] = offset?.split(/[+-]/) ?? [];
  const [hours, minutes] = gmtOffset?.split(":") ?? [];

  // Give the difference in minutes.
  return (Number(hours) * 60 + Number(minutes)) * sign;
}

/**
 * Calculates the time difference of timeZoneA relative to timeZoneB.
 * This is the time timeZoneA is ahead or behind timeZoneB.
 *
 * @param timeZoneA - The first time zone.
 * @param timeZoneB - The second time zone.
 */

export function getTimeDifference(
  timeZoneA: UserTimezone,
  timeZoneB: UserTimezone,
) {
  const diff: TimeDifference = {
    offset: "same",
    hours: 0,
    minutes: 0,
  };

  if (timeZoneA === timeZoneB) {
    return diff;
  }

  // Calculate the UTC offset of each time zone (in minutes).
  const offsetA = getTimezoneOffset(timeZoneA);
  const offsetB = getTimezoneOffset(timeZoneB);

  if (offsetA === offsetB) {
    // There's no difference between the time zones.
    return diff;
  }

  const minDiff = offsetA - offsetB;
  const absoluteDiff = Math.abs(minDiff);

  // Update each property accordingly.
  diff.offset = minDiff > 0 ? "ahead" : "behind";
  diff.hours = Math.floor(absoluteDiff / 60);
  diff.minutes = absoluteDiff % 60;

  return diff;
}

/**
 * Formats the given time difference into a human-readable string.
 * @param diff - The difference in time between two time zones.
 * @param locale - The locale to use for the translation.
 */

export function formatTimeDifference(diff: TimeDifference, locale: Locale) {
  const { hours, minutes, offset } = diff;

  if (offset === "same") {
    return useClientTranslation("timezone.same", locale);
  }

  const formatHours = hours !== 0 ? `${hours}h` : "";
  const formatMinutes = minutes !== 0 ? `${minutes}m`.padStart(3, "0") : "";

  const clientTranslationKey = `timezone.${offset}` as const;
  return useClientTranslation(clientTranslationKey, locale)(
    formatHours,
    formatMinutes,
  );
}
