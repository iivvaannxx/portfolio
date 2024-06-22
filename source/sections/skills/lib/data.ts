import type { SetOptional } from "type-fest";
import type { SkillData, SkillKey, SkillName, SkillStaticData } from "./types";

/** The categories used to classify skills. */
export const categories = [
  "languages",
  "web",
  "creative",
  "infrastructure",
  "tools",
] as const;

export const tags = [
  "frontend",
  "backend",
  "devops",
  "design",
  "software",
  "database",
  "platform",
  "framework",
  "library",
  "language",
  "scripting",
  "3D",
  "soft",
];

/**
 * Defines a skill with the given name and data.
 *
 * @param data - The data for the skill.
 * @returns An object representing the defined skill.
 */
async function defineSkill(
  data: SetOptional<SkillStaticData, "icon"> & { safeName?: string },
) {
  // Some skills like "C#" contain special characters that make imports fail.
  const useName = data.safeName ?? data.name;
  return {
    ...data,
    icon: useName.toLowerCase().replaceAll(" ", "-"),
  };
}

/** The list with all the skills we want to showcase. */
export const skills = (await Promise.all([
  defineSkill({
    name: "C++",
    safeName: "cpp",

    categories: ["languages"],
    tags: ["language"],
  }),
  defineSkill({
    name: "C#",
    safeName: "csharp",
    categories: ["languages"],
    tags: ["language"],
  }),

  defineSkill({
    name: "Python",
    categories: ["languages"],
    tags: ["language", "scripting"],
  }),

  defineSkill({
    name: "JavaScript",
    categories: ["languages"],
    tags: ["language"],
  }),

  defineSkill({
    name: "TypeScript",
    categories: ["languages"],
    tags: ["language"],
  }),

  defineSkill({
    name: "Bash",
    categories: ["languages"],
    tags: ["language"],
  }),

  defineSkill({
    name: "Nix",
    categories: ["languages"],
    tags: ["language"],
  }),

  defineSkill({
    name: "Rust",
    categories: ["languages"],
    tags: ["language"],
  }),

  defineSkill({
    name: "HTML5",
    categories: ["languages"],
    tags: ["language"],
  }),

  defineSkill({
    name: "CSS",
    categories: ["languages"],
    tags: ["language"],
  }),

  defineSkill({
    name: "PHP",
    categories: ["languages"],
    tags: ["language"],
  }),

  defineSkill({
    name: "Unity",
    categories: ["creative"],
    tags: ["platform", "software"],
  }),

  defineSkill({
    name: "Unreal Engine",
    categories: ["creative"],
    tags: ["software"],
  }),

  defineSkill({
    name: "Godot",
    categories: ["creative"],
    tags: ["software"],
  }),

  defineSkill({
    name: "React",
    categories: ["web"],
    tags: ["frontend", "library"],
  }),

  defineSkill({
    name: "Svelte",
    categories: ["web"],
    tags: ["frontend", "library"],
  }),

  defineSkill({
    name: "NodeJS",
    categories: ["web"],
    tags: ["backend"],
  }),

  defineSkill({
    name: "Deno",
    categories: ["web"],
    tags: ["backend"],
  }),

  defineSkill({
    name: "Astro",
    categories: ["web"],
    tags: ["frontend", "framework"],
  }),

  defineSkill({
    name: "TailwindCSS",
    categories: ["web"],
    tags: ["frontend", "library"],
  }),

  defineSkill({
    name: "ThreeJS",
    categories: ["web"],
    tags: ["frontend", "library"],
  }),

  defineSkill({
    name: "PixiJS",
    categories: ["web"],
    tags: ["frontend", "library"],
  }),

  defineSkill({
    name: "Supabase",
    categories: ["infrastructure"],
    tags: ["database"],
  }),

  defineSkill({
    name: "MongoDB",
    categories: ["infrastructure"],
    tags: ["database"],
  }),

  defineSkill({
    name: "MySQL",
    categories: ["infrastructure"],
    tags: ["database"],
  }),

  defineSkill({
    name: "NGINX",
    categories: ["infrastructure"],
    tags: ["devops", "software"],
  }),

  defineSkill({
    name: "Kubernetes",
    categories: ["infrastructure"],
    tags: ["devops", "software"],
  }),

  defineSkill({
    name: "Terraform",
    categories: ["infrastructure"],
    tags: ["devops", "software"],
  }),

  defineSkill({
    name: "Github",
    categories: ["infrastructure"],
    tags: ["devops", "platform"],
  }),

  defineSkill({
    name: "Blender",
    categories: ["creative"],
    tags: ["software", "3D"],
  }),

  defineSkill({
    name: "Photoshop",
    categories: ["creative"],
    tags: ["software", "design"],
  }),

  defineSkill({
    name: "Illustrator",
    categories: ["creative"],
    tags: ["software", "design"],
  }),

  defineSkill({
    name: "Figma",
    categories: ["creative"],
    tags: ["software", "design"],
  }),

  defineSkill({
    name: "Framer",
    categories: ["creative"],
    tags: ["software", "design"],
  }),

  defineSkill({
    name: "Git",
    categories: ["tools"],
    tags: ["software"],
  }),

  defineSkill({
    name: "Docker",
    categories: ["infrastructure"],
    tags: ["devops", "software"],
  }),

  defineSkill({
    name: "Communication",
    categories: [],
    tags: ["soft"],
  }),

  defineSkill({
    name: "Analytical Thinking",
    categories: [],
    tags: ["soft"],
  }),

  defineSkill({
    name: "Teamwork",
    categories: [],
    tags: ["soft"],
  }),

  defineSkill({
    name: "Emotional Intelligence",
    categories: [],
    tags: ["soft"],
  }),
])) satisfies SkillData[];
