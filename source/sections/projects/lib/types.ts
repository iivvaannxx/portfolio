import type { ImageMetadata } from "astro";
import type { VideoMetadata } from "@components/base/video.astro";

import type { SkillName } from "@lib/data/skills";
import type { TranslationHandler } from "@modules/i18n";

/** A union of all the keys used to define projects. */
export type ProjectKey =
  | "my-room"
  | "the-gamelab"
  | "the-izland"
  | "pirateland"
  | "the-coronavirus-war"
  | "isolated"
  | "sense-quiz"
  | "fruit-ninja-vr"
  | "racing-circuit"
  | "channel-packer"
  | "round-mania"
  | "geoguesser-native"
  | "memory-native"
  | "ice-defend";

/** The data of a project which doesn't need translation. */
export type ProjectStaticData = {
  url?: string;
  showcaseUrl?: string;
  repository?: string;
  relatedSkills: SkillName[];
  year: number;
} & (
  | {
      featured: true;
      preview: ImageMetadata;
      video: VideoMetadata;
    }
  | {
      featured: false;
      preview?: ImageMetadata;
      video?: VideoMetadata;
    }
);

/** Defines the shape of a project. */
export type ProjectData = ProjectStaticData & {
  name: TranslationHandler;
  headline: TranslationHandler;
  description: TranslationHandler<string | readonly string[]>;
};
