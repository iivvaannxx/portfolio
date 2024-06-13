import { getTranslationHandler } from "@app/modules/i18n";
import type {
  ProjectData,
  ProjectStaticData,
  TranslatedProjectDataKey,
  TranslatedProjectKey,
} from "./types";

/**
 * Defines a project with the given project key and static data.
 *
 * @param projectKey - The translated project key.
 * @param data - The static data for the project.
 * @returns An object representing the defined project.
 */
function defineProject(
  projectKey: TranslatedProjectKey,
  data: ProjectStaticData,
) {
  // Will create a function, that given a locale, will return the
  // translation of the given property for this project.
  const createTranslationHandler = (property: TranslatedProjectDataKey) => {
    const key = `sections.projects.archive.${projectKey}.${property}` as const;
    return getTranslationHandler(key);
  };

  return {
    name: createTranslationHandler("name"),
    headline: createTranslationHandler("headline"),
    description: createTranslationHandler("description"),

    projectKey,
    ...data,
  };
}

/** The list with all the projects we want to show. */
export const projects = [
  defineProject("my-room", {
    url: "https://my-room.pages.dev",
    repository: "https://github.com/iivvaannxx/my-room",

    featured: true,
    relatedSkills: ["Blender", "ThreeJS", "TypeScript", "Git"],

    preview: (await import("../assets/my-room/cover.png")).default,
    video: {
      webm: {
        av1: (await import("../assets/my-room/preview-av1.webm")).default,
        vp9: (await import("../assets/my-room/preview-vp9.webm")).default,
      },
      mp4: {
        av1: (await import("../assets/my-room/preview-av1.mp4")).default,
        h264: (await import("../assets/my-room/preview-h264.mp4")).default,
        h265: (await import("../assets/my-room/preview-h265.mp4")).default,
      },
    },
  }),

  defineProject("the-gamelab", {
    url: "https://thegamelab.dev",
    repository: "https://github.com/iivvaannxx/the-gamelab",

    featured: true,
    relatedSkills: ["PixiJS", "ThreeJS", "TypeScript", "Phaser"],

    preview: (await import("../assets/gamelab/cover.png")).default,
    video: {
      webm: {
        av1: (await import("../assets/gamelab/preview-av1.webm")).default,
        vp9: (await import("../assets/gamelab/preview-vp9.webm")).default,
      },
      mp4: {
        av1: (await import("../assets/gamelab/preview-av1.mp4")).default,
        h264: (await import("../assets/gamelab/preview-h264.mp4")).default,
        h265: (await import("../assets/gamelab/preview-h265.mp4")).default,
      },
    },
  }),

  defineProject("the-izland", {
    url: "https://fivemost.itch.io/the-izland",

    featured: true,
    relatedSkills: ["Teamwork", "Unity", "C#", "Blender"],

    preview: (await import("../assets/the-izland/cover.png")).default,
    video: {
      webm: {
        av1: (await import("../assets/the-izland/preview-av1.webm")).default,
        vp9: (await import("../assets/the-izland/preview-vp9.webm")).default,
      },
      mp4: {
        av1: (await import("../assets/the-izland/preview-av1.mp4")).default,
        h264: (await import("../assets/the-izland/preview-h264.mp4")).default,
        h265: (await import("../assets/the-izland/preview-h265.mp4")).default,
      },
    },
  }),
] as const satisfies ProjectData[];

/** A union of all the projects we have defined. */
export type ProjectKey = (typeof projects)[number]["projectKey"];
