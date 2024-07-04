import { getTranslationHandler } from "@modules/i18n";
import type { ProjectData, ProjectKey, ProjectStaticData } from "./types";

/** The translation object that contains the translated data of my job projects. */
const PROJECTS_I18N = "sections.projects.archive" as const;

/**
 * Defines a project with the given project key and static data.
 *
 * @param projectKey - The translated project key.
 * @param data - The static data for the project.
 * @returns An object representing the defined project.
 */
function defineProject(projectKey: ProjectKey, data: ProjectStaticData) {
  const i18nKey = `${PROJECTS_I18N}.${projectKey}` as const;

  return {
    name: getTranslationHandler(`${i18nKey}.name`),
    headline: getTranslationHandler(`${i18nKey}.headline`),
    description: getTranslationHandler(`${i18nKey}.description`),

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

      poster: (await import("../assets/my-room/poster.png")).default,
    },
  }),

  defineProject("the-gamelab", {
    url: "https://thegamelab.dev",
    repository: "https://github.com/iivvaannxx/the-gamelab",

    featured: true,
    relatedSkills: ["PixiJS", "ThreeJS", "TypeScript"],

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

      poster: (await import("../assets/gamelab/poster.png")).default,
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

      poster: (await import("../assets/the-izland/poster.png")).default,
    },
  }),
] as const satisfies ProjectData[];

export const current = {
  name: getTranslationHandler("sections.projects.current.name"),
  headline: getTranslationHandler("sections.projects.current.headline"),
  description: getTranslationHandler("sections.projects.current.description"),

  relatedSkills: ["AWS", "Docker", "Terraform", "TypeScript"],
} as const satisfies Partial<ProjectData>;
