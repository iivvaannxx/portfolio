import type { ProjectKey } from "@app/sections/projects";
import type { TranslationHandler } from "@modules/i18n";
import type { KebabCase } from "type-fest";
import type { categories, tags } from "./data";

/** A union of all the hard skills. */
export type HardSkillName =
  | "Astro"
  | "Bash"
  | "Blender"
  | "C#"
  | "C++"
  | "CSS"
  | "Deno"
  | "Docker"
  | "Figma"
  | "Framer"
  | "Git"
  | "Github"
  | "Godot"
  | "HTML5"
  | "Illustrator"
  | "JavaScript"
  | "Kubernetes"
  | "MongoDB"
  | "MySQL"
  | "NGINX"
  | "Nix"
  | "NodeJS"
  | "Photoshop"
  | "PHP"
  | "PixiJS"
  | "Python"
  | "React"
  | "Rust"
  | "Supabase"
  | "Svelte"
  | "TailwindCSS"
  | "Terraform"
  | "ThreeJS"
  | "TypeScript"
  | "Unity"
  | "Unreal Engine";

/** A union of all the soft skills. */
export type SoftSkillName =
  | "Communication"
  | "Teamwork"
  | "Emotional Intelligence"
  | "Analytical Thinking";

/** A union of all the skills. */
export type SkillName = HardSkillName | SoftSkillName;

/** Transforms the given skill names to a keyable format. */
export type SkillKey<T extends SkillName = SkillName> = KebabCase<Lowercase<T>>;

/** Categories used to classify skills. */
export type SkillCategory = (typeof categories)[number];

/** Tags used to classify skills. */
export type SkillTag = (typeof tags)[number];

/** The data of a skill, which doesn't need translation. */
export interface SkillStaticData<T extends SkillName = SkillName> {
  name: T;
  icon: string;

  tags: SkillTag[];
  categories: SkillCategory[];
  relevantProjects?: ProjectKey[];
}

/** Defines all the data we hold about a skill. */
export type SkillData<T extends SkillName = SkillName> = SkillStaticData<T>;
