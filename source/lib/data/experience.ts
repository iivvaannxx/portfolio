import type { Skill } from "./skills";

/** All the data presented in the professional experience. */
export interface JobData {
  title: string;
  at: string;
  url: string;

  startDate: Date;
  endDate: Date;
  location: string;

  description: string;
  skills: Skill[];
}

export const experience: JobData[] = [
  {
    title: "Computer Science Educator for Kids and Teens",
    at: "Codelearn",
    url: "https://www.codelearn.com",

    startDate: new Date("2021-11"),
    endDate: new Date("2024-05"),
    location: "Barcelona, Spain",

    description:
      "Weekly guided <b>20+ students</b> through a broad range of computer science topics on an e-learning platform. My role was <b>to help them</b> navigate the different courses, assisting them whenever they encountered challenges and ensuring they made the most of the interactive learning tools available.",

    skills: ["Python", "JavaScript", "Communication"],
  },

  {
    title: "Unity Game Developer",
    at: "GILAB (University of Girona)",
    url: "https://gilab.udg.edu",

    startDate: new Date("2020-11"),
    endDate: new Date("2022-9"),
    location: "Girona, Spain",

    description: `Transitioned from an internship to a primary role within a research lab at my university, and in collaboration with a local hospital. My role was to develop a <b>virtual-reality rehabilitation game</b> for stroke patients. Utilizing the (now Meta) <b>Oculus Quest</b> VR headset and its hand tracking capabilities, our project aimed to create immersive therapeutic experiences, by developing a variety of exercises <b>tailored to address specific mobility issues</b>.\n
      The project also served as the <b>thesis for my degree</b> and was recognized with the <b>“Scholarship for Transfer, Innovation and Entrepreneurship”</b> (BTI) during 2021-2022, as a result of a partnership between the university and “Santander Universidades".`,

    skills: ["Unity", "C#", "Virtual Reality", "Teamwork"],
  },
];
