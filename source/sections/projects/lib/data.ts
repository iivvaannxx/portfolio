import { getTranslationHandler } from "@modules/i18n";
import type { ProjectData, ProjectKey, ProjectStaticData } from "./types";
import { hasTranslation } from "@app/modules/i18n/lib/utils/translations";

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
    relatedSkills: ["ThreeJS", "TypeScript", "Blender", "Git"],

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

      poster: (await import("../assets/my-room/poster.webp")).default,
    },

    year: 2024,
  }),

  defineProject("the-gamelab", {
    url: "https://thegamelab.dev",
    repository: "https://github.com/iivvaannxx/the-gamelab",

    featured: true,
    relatedSkills: ["PixiJS", "TypeScript", "ThreeJS"],

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

      poster: (await import("../assets/gamelab/poster.webp")).default,
    },

    year: 2024,
  }),

  defineProject("the-izland", {
    showcaseUrl: "https://github.com/iivvaannxx/the-izland",

    featured: true,
    relatedSkills: ["Unity", "C#", "Blender", "Teamwork"],

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

      poster: (await import("../assets/the-izland/poster.webp")).default,
    },

    year: 2021,
  }),

  defineProject("pirateland", {
    year: 2022,
    featured: false,
    relatedSkills: ["Unreal Engine", "C++", "Blender"],

    showcaseUrl: "https://github.com/iivvaannxx/pirateland",
  }),

  defineProject("the-coronavirus-war", {
    year: 2020,
    featured: false,
    relatedSkills: ["Godot", "GDScript"],

    showcaseUrl: "https://github.com/iivvaannxx/the-coronavirus-war",
  }),

  defineProject("isolated", {
    year: 2022,
    featured: false,
    relatedSkills: ["Unity", "C#"],

    showcaseUrl: "https://github.com/iivvaannxx/isolated",
  }),

  defineProject("sense-quiz", {
    year: 2021,
    featured: false,
    relatedSkills: ["Unity", "C#"],

    repository: "https://github.com/iivvaannxx/sense-quiz",
  }),

  defineProject("fruit-ninja-vr", {
    year: 2022,
    featured: false,
    relatedSkills: ["Unity", "C#"],

    showcaseUrl: "https://github.com/iivvaannxx/fruit-ninja-vr",
  }),

  defineProject("racing-circuit", {
    year: 2023,
    featured: false,
    relatedSkills: ["ThreeJS", "JavaScript"],

    repository: "https://github.com/iivvaannxx/racing-circuit",
    url: "https://racing-circuit.pages.dev",
  }),

  defineProject("channel-packer", {
    year: 2023,
    featured: false,
    relatedSkills: ["Next.js", "TypeScript"],
  }),

  defineProject("round-mania", {
    year: 2021,
    featured: false,
    relatedSkills: ["Next.js", "Phaser"],
  }),

  defineProject("geoguesser-native", {
    year: 2021,
    featured: false,
    relatedSkills: ["React Native", "TypeScript"],
  }),

  defineProject("memory-native", {
    year: 2021,
    featured: false,
    relatedSkills: ["React Native", "TypeScript"],
  }),

  defineProject("ice-defend", {
    year: 2020,
    featured: false,
    relatedSkills: ["Godot", "GDScript"],
  }),
] as const satisfies ProjectData[];

export const next = {
  name: getTranslationHandler("sections.projects.next.name"),
  headline: getTranslationHandler("sections.projects.next.headline"),
  description: getTranslationHandler("sections.projects.next.description"),

  preview: (await import("../assets/next/cover.png")).default,
  relatedSkills: ["AWS", "Docker", "Terraform", "TypeScript"],
} as const satisfies Partial<ProjectData>;
