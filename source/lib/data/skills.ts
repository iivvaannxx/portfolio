export type SkillCategory = "code" | "creative";

/**
 * Creates a skill object with the specified name, icon, and categories.
 *
 * @param name  The name of the skill.
 * @param icon  The icon of the skill.
 * @param categories  The categories associated with the skill.
 */
function makeSkill<const Name, const Icon, const Categories>(
  name: Name,
  icon: Icon,
  ...categories: Categories[]
) {
  // The icon is the name of the corresponding SVG under "assets/icons".
  // They get picked by the `astro-icon` integration automatically.
  return { name, categories, icon } as const;
}

export const skills = [
  makeSkill("C++", "c++", "code"),
  makeSkill("C#", "csharp", "code"),
  makeSkill("JavaScript", "javascript", "code"),
  makeSkill("TypeScript", "typescript", "code"),
  makeSkill("Python", "python", "code"),
  makeSkill("Bash", "bash", "code"),
  makeSkill("Unity", "unity", "code"),
  makeSkill("Unreal Engine", "unreal", "code"),
  makeSkill("Godot", "godot", "code"),
  makeSkill("Git", "git", "code"),
  makeSkill("Docker", "docker", "code"),
  makeSkill("React", "react", "code"),
  makeSkill("Deno", "deno", "code"),
  makeSkill("Node", "node", "code"),
  makeSkill("TailwindCSS", "tailwindcss", "code"),
  makeSkill("Blender", "blender", "creative"),
  makeSkill("Photoshop", "photoshop", "creative"),
  makeSkill("Svelte", "svelte", "code"),
  makeSkill("Three.js", "threejs", "code"),
] as const;

export type Skill = (typeof skills)[number]["name"];
export type SkillIcon = (typeof skills)[number]["icon"];
