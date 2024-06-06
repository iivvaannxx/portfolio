import type { KebabCase } from "type-fest";

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

/**
 * Returns the icon name for a given skill.
 * The icon is the name of the corresponding SVG under "assets/icons".
 * They get picked by the `astro-icon` integration automatically.
 * For consistency with the codebase naming conventions, we use kebab-case.
 *
 * @param skill - The skill for which to retrieve the icon name.
 * @returns The icon name in kebab-case.
 */
export function getIconForSkill<const T extends Skill>(skill: T) {
  const skillSubdir = "skills";
  const iconFile = skill.toLowerCase().replaceAll(" ", "-") as KebabCase<
    Lowercase<T>
  >;

  return `${skillSubdir}/${iconFile}`;
}

/**
 * Creates a skill object with the specified name, icon, and categories.
 *
 * @param name  The name of the skill.
 * @param categories  The categories associated with the skill.
 */
function defineSkill<const Name extends string>(
  name: Name,
  ...categories: SkillCategory[]
) {
  return { name, categories } as const;
}

export const languages = [
  defineSkill("C++", "code"),
  defineSkill("C#", "code"),
  defineSkill("Python", "code", "scripting"),
  defineSkill("JavaScript", "code"),
  defineSkill("TypeScript", "code"),
  defineSkill("Bash", "code", "scripting"),
] as const;

export const games = [
  defineSkill("Unity", "game-dev"),
  defineSkill("Unreal Engine", "game-dev"),
  defineSkill("Godot", "game-dev"),
] as const;

export const web = [
  defineSkill("React", "frontend"),
  defineSkill("Svelte", "frontend"),
  defineSkill("Node", "backend"),
  defineSkill("Deno", "backend"),
  defineSkill("Astro", "frontend"),
  defineSkill("TailwindCSS", "frontend"),
  defineSkill("ThreeJS", "frontend"),
  defineSkill("PixiJS", "frontend"),
  defineSkill("Phaser", "game-dev"),
] as const;

export const creative = [
  defineSkill("Blender", "creative"),
  defineSkill("Photoshop", "creative"),
] as const;

export const others = [
  defineSkill("Git", "tools"),
  defineSkill("Docker", "devops", "tools"),
] as const;

export const soft = [
  defineSkill("Communication", "soft"),
  defineSkill("Analytical Thinking", "soft"),
  defineSkill("Teamwork", "soft"),
  defineSkill("Emotional Intelligence", "soft"),
] as const;

export const skills = [
  ...languages,
  ...games,
  ...web,
  ...creative,
  ...others,
  ...soft,
] as const;

export const skillMap = {
  languages,
  games,
  web,
  creative,
  others,
  soft,
} as const;

export type SkillGroup = keyof typeof skillMap;
export type Skill = (typeof skillMap)[keyof typeof skillMap][number]["name"];
