import { getTranslationHandler } from "@modules/i18n";
import type { JobData, JobKey, JobStaticData } from "./types";

/** The translation object that contains the translated data of my job experience. */
const JOBS_I18N = "sections.experience.jobs" as const;

/**
 * Defines a project with the given project key and static data.
 *
 * @param projectKey - The translated project key.
 * @param data - The static data for the project.
 * @returns An object representing the defined project.
 */
function defineJob(jobKey: JobKey, data: JobStaticData) {
  const i18nKey = `${JOBS_I18N}.${jobKey}` as const;

  return {
    at: getTranslationHandler(`${i18nKey}.at`),
    title: getTranslationHandler(`${i18nKey}.title`),
    location: getTranslationHandler(`${i18nKey}.location`),
    description: getTranslationHandler(`${i18nKey}.description`),

    ...data,
  };
}

/** The list with the data of all my job experiences. */
export const jobs = [
  defineJob("codelearn", {
    url: "https://www.codelearn.com",
    startDate: new Date("2021-11"),
    endDate: new Date("2024-05"),
    skills: ["Communication", "Python", "JavaScript"],
  }),

  defineJob("gilab", {
    url: "https://gilab.udg.edu",
    startDate: new Date("2020-11"),
    endDate: new Date("2022-9"),
    skills: ["Analytical Thinking", "C#", "Unity"],
  }),
] as const satisfies JobData[];
