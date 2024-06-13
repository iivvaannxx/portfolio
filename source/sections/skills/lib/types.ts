import type { ProjectKey } from "@app/sections/projects";
import type { TranslationHandler } from "@modules/i18n";

/** Categories used to classify skills. */
export type SkillCategory =
  | "code"
  | "frontend"
  | "backend"
  | "devops"
  | "platform"
  | "game-dev"
  | "tools"
  | "scripting"
  | "creative"
  | "soft";

/** The data of a skill, which doesn't need translation. */
export interface SkillStaticData {
  url: string;
  icon: string;

  // Skill names don't get translated (like projects do).
  name: string;
  categories: SkillCategory[];
  relevantProjects?: ProjectKey[];
}

/** Defines all the data we hold about a skill. */
export type SkillData = SkillStaticData & {
  notes: TranslationHandler<string[]>;
};
