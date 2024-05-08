import type { KebabCase } from "type-fest";

export type SkillCategory = "code" | "creative" | "soft";

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
function defineSkill<
  const Name extends string,
  const Category extends SkillCategory,
>(name: Name, ...categories: Category[]) {
  return { name, categories } as const;
}

export const skills = [
  defineSkill("C++", "code"),
  defineSkill("C#", "code"),
  defineSkill("JavaScript", "code"),
  defineSkill("TypeScript", "code"),
  defineSkill("Python", "code"),
  defineSkill("Bash", "code"),
  defineSkill("Unity", "code"),
  defineSkill("Unreal Engine", "code"),
  defineSkill("Godot", "code"),
  defineSkill("Git", "code"),
  defineSkill("Docker", "code"),
  defineSkill("React", "code"),
  defineSkill("Deno", "code"),
  defineSkill("Node", "code"),
  defineSkill("TailwindCSS", "code"),
  defineSkill("Blender", "creative"),
  defineSkill("Photoshop", "creative"),
  defineSkill("Svelte", "code"),
  defineSkill("Three.js", "code"),
  defineSkill("Virtual Reality", "code"),

  defineSkill("Communication", "soft"),
  defineSkill("Analytical Thinking", "soft"),
  defineSkill("Teamwork", "soft"),
  defineSkill("Emotional Intelligence", "soft"),
] as const;

export type Skill = (typeof skills)[number]["name"];
