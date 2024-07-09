import type { TranslationHandler } from "@modules/i18n";

/** A union of all the keys used to define education entries. */
export type EducationItemKey = "gddv";

/** The data of an education entry which don't need translation. */
export type EducationStaticData = {
  startDate: Date;
  endDate: Date;
};

/** Defines the shape of an education entry. */
export type EducationData = EducationStaticData & {
  title: TranslationHandler;
  location: TranslationHandler;
  description: TranslationHandler;

  // Although the URL is not translated, we may have multiple URLs for different languages.
  // So we retrieve them using a translation handler.
  url: TranslationHandler;
};
