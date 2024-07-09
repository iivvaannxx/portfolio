import { getTranslationHandler } from "@modules/i18n";
import type {
  EducationData,
  EducationItemKey,
  EducationStaticData,
} from "./types";

/**
 * Defines the education data for a specific key.
 *
 * @param key - The key for the education item.
 * @param data - The static data for the education item.
 * @returns An object containing the translated data for the education item.
 */
function defineEducationData(key: EducationItemKey, data: EducationStaticData) {
  const translationItemKey =
    `sections.about.bento.education.items.${key}` as const;

  // These functions return translated data about the education item.
  const titleHandler = getTranslationHandler(`${translationItemKey}.title`);
  const locationHandler = getTranslationHandler(
    `${translationItemKey}.location`,
  );

  const urlHandler = getTranslationHandler(`${translationItemKey}.url`);
  const descriptionHandler = getTranslationHandler(
    `${translationItemKey}.description`,
  );

  return {
    title: titleHandler,
    location: locationHandler,
    description: descriptionHandler,
    url: urlHandler,

    ...data,
  };
}

/** All the education entries. */
export const education = [
  defineEducationData("gddv", {
    startDate: new Date("2018-09"),
    endDate: new Date("2022-06"),
  }),
] satisfies EducationData[];
