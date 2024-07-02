import type { TranslationHandler } from "@modules/i18n";
import type { SkillName } from "@app/sections/skills";

/** A union of all the keys of the projects we have localized. */
export type JobKey = "codelearn" | "gilab";

/** The data of a project, which doesn't need translation. */
export interface JobStaticData {
  url?: string;
  skills: SkillName[];

  startDate: Date;
  endDate: Date;
}

/** Defines the shape of a project. */
export type JobData = JobStaticData & {
  title: TranslationHandler;
  at: TranslationHandler;
  location: TranslationHandler;
  description: TranslationHandler;
};
