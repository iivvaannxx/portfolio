import type { ImageMetadata } from "astro";
import type { Translation, TranslationHandler } from "@modules/i18n";

import type { SkillName } from "@app/sections/skills";

/** A union of all the keys of the projects we have localized. */
export type TranslatedProjectKey =
  keyof Translation<"sections.projects.archive">;

/** A union of all the keys of the data of the projects we have localized. */
export type TranslatedProjectDataKey =
  keyof Translation<`sections.projects.archive.${TranslatedProjectKey}`>;

/** Defines the data used to display a video of a project. */
export interface VideoMetadata {
  webm: {
    av1: string;
    vp9: string;
  };

  mp4: {
    av1: string;
    h264: string;
    h265: string;
  };

  poster?: ImageMetadata;
}

/** The data of a project, which doesn't need translation. */
export interface ProjectStaticData {
  url?: string;
  repository?: string;
  featured: boolean;

  relatedSkills: SkillName[];
  preview: ImageMetadata;
  video: VideoMetadata;
}

/** Defines the shape of a project. */
export type ProjectData = ProjectStaticData & {
  name: TranslationHandler;
  headline: TranslationHandler;
  description: TranslationHandler;
};
