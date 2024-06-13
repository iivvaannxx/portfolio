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

/** Defines the data we hold for a specific skill. */
export interface SkillData {
  name: string;
  icon: string;

  categories: SkillCategory[];
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
  const skillSubdir = "skills";
  const iconFile = name.toLowerCase().replaceAll(" ", "-") as KebabCase<
    Lowercase<Name>
  >;

  const icon = `${skillSubdir}/${iconFile}`;
  return { name, categories, icon } as const;
}

export const skills = [
  defineSkill("C++", "code"),
  defineSkill("C#", "code"),
  defineSkill("Python", "code", "scripting"),
  defineSkill("JavaScript", "code"),
  defineSkill("TypeScript", "code"),
  defineSkill("Bash", "code", "scripting"),
  defineSkill("Nix", "code"),
  defineSkill("Rust", "code"),
  defineSkill("HTML5", "code"),
  defineSkill("CSS", "code"),
  defineSkill("PHP", "code"),

  defineSkill("Unity", "game-dev"),
  defineSkill("Unreal Engine", "game-dev"),
  defineSkill("Godot", "game-dev"),

  defineSkill("React", "frontend"),
  defineSkill("Svelte", "frontend"),
  defineSkill("NodeJS", "backend"),
  defineSkill("Deno", "backend"),
  defineSkill("Astro", "frontend"),
  defineSkill("TailwindCSS", "frontend"),
  defineSkill("ThreeJS", "frontend"),
  defineSkill("PixiJS", "frontend"),
  defineSkill("Supabase", "backend"),
  defineSkill("MongoDB", "backend"),
  defineSkill("MySQL", "backend"),
  defineSkill("NGINX", "backend"),
  defineSkill("Kubernetes", "devops"),
  defineSkill("Terraform", "devops"),
  defineSkill("Github", "tools"),

  defineSkill("Blender", "creative"),
  defineSkill("Photoshop", "creative"),
  defineSkill("Illustrator", "creative"),
  defineSkill("Figma", "creative"),
  defineSkill("Framer", "creative"),

  defineSkill("Git", "tools"),
  defineSkill("Docker", "devops", "tools"),

  defineSkill("Communication", "soft"),
  defineSkill("Analytical Thinking", "soft"),
  defineSkill("Teamwork", "soft"),
  defineSkill("Emotional Intelligence", "soft"),
] as const satisfies SkillData[];

export type Skill = (typeof skills)[number]["name"];
