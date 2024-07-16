import type { TranslationHandler } from "@modules/i18n";
import type { SkillName } from "@lib/data/skills";

/** A union of all the keys used to define jobs. */
export type JobKey = "codelearn" | "gilab";

/** The data of a job which doesn't need translation. */
export interface JobStaticData {
  url?: string;
  skills: SkillName[];

  startDate: Date;
  endDate: Date;
}

/** Defines the shape of a job. */
export type JobData = JobStaticData & {
  title: TranslationHandler;
  at: TranslationHandler;
  location: TranslationHandler;
  description: TranslationHandler<readonly string[]>;
};
