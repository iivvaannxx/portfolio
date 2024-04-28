// eslint-disable-next-line no-restricted-syntax
export const enum Category {

  Game = "Game",
  Frontend = "Frontend",
  Backend = "Backend",
  Creative = "Creative",
  Code = "Code",
  Scripting = "Scripting",
}

export interface Skill {

  name: string;
  categories: Category[];

  // This is the filename of the icon under the `assets/icons` directory.
  // Loaded via `astro-icon` See: https://www.astroicon.dev/
  icon: string;
};

export const skills: Skill[] = [

  {
    name: "C++",
    categories: [Category.Code],
    icon: "c++",
  },

  {
    name: "C#",
    categories: [Category.Code],
    icon: "csharp",
  },

  {
    name: "JavaScript",
    categories: [Category.Code],
    icon: "javascript",
  },

  {
    name: "TypeScript",
    categories: [Category.Code],
    icon: "typescript",
  },

  {
    name: "Python",
    categories: [Category.Code, Category.Scripting],
    icon: "python",
  },

  {
    name: "Bash",
    categories: [Category.Code, Category.Scripting],
    icon: "bash",
  },

  {
    name: "Unity",
    categories: [Category.Game],
    icon: "unity",
  },

  {
    name: "Unreal Engine",
    categories: [Category.Game],
    icon: "unreal",
  },

  {
    name: "Godot",
    categories: [Category.Game],
    icon: "godot",
  },

  {
    name: "Git",
    categories: [Category.Code],
    icon: "git",
  },

  {
    name: "Docker",
    categories: [Category.Code],
    icon: "docker",
  },

  {
    name: "React",
    categories: [Category.Frontend],
    icon: "react",
  },

  {
    name: "Deno",
    categories: [Category.Backend],
    icon: "deno",
  },

  {
    name: "Node",
    categories: [Category.Backend],
    icon: "node",
  },

  {
    name: "TailwindCSS",
    categories: [Category.Frontend],
    icon: "tailwindcss",
  },

  {
    name: "Blender",
    categories: [Category.Creative],
    icon: "blender",
  },

  {
    name: "Photoshop",
    categories: [Category.Creative],
    icon: "photoshop",
  },

  {
    name: "Svelte",
    categories: [],
    icon: "svelte",
  },

  {
    name: "Three.js",
    categories: [],
    icon: "threejs",
  },
];
