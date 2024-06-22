import { atom } from "nanostores";
import type { SkillCategory, SkillName } from "./types";

/** The currently selected skill on the viewer. */
export const currentSkill = atom<SkillName>("C++");

/** The currently active category filters. */
export const currentFilter = atom<SkillCategory>("languages");
