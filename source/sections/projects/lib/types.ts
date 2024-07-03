import type { ImageMetadata } from "astro";
import type { VideoMetadata } from "@components/base/video.astro";

import type { SkillName } from "@app/sections/skills";
import type { TranslationHandler } from "@modules/i18n";

/** A union of all the keys used to define projects. */
export type ProjectKey = "my-room" | "the-gamelab" | "the-izland";

/** The data of a project which doesn't need translation. */
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
