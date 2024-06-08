/** The english strings for the website. */
export const english = {
  meta: {
    name: "English",
    locale: "en",
  },

  sections: {
    hero: {
      name: "About",
      id: "about",
      headline: {
        content: ["I'm a", "%s", "developer"],
        words: ["game", "web", "software"],
      },

      greeting: "Hello! My name is",
      introduction: `
        Specialized in game development, yet passionate about developing for the web. With <b>6+ years 
        of coding expertise</b>, and <strong>4+ years of professional experience</strong>, I am <b>open to 
        opportunities</b> in the game industry, but actively <strong>seeking a role as a web developer</strong>.
      `,
    },

    experience: {
      name: "Experience",
      id: "experience",

      jobs: [
        {
          title: "Computer Science Educator for Kids and Teens",
          at: "Codelearn",
          url: "https://www.codelearn.com",

          startDate: new Date("2021-11"),
          endDate: new Date("2024-05"),
          location: "Barcelona, Spain",

          description:
            "<q>There's no better way to learn than to teach</q>\n\nWeekly guided <strong>20+ students</strong> through a broad range of computer science topics ranging from basic programming to advanced subjects such as <strong>Python</strong>, <strong>JavaScript</strong>, <strong>SQL</strong>, <strong>C++</strong>, and many more. My role was <b>to help them navigate the different courses</b> available in an internal e-learning platform, assisting them when they encountered challenges and ensuring they made the most of the interactive learning tools available.\n\n<b>Participated in extracurricular teaching at local schools</b> and <strong>received positive parental feedback</strong>, as a result of an improvement in their children's academic performance.",

          skills: ["Communication", "Python", "JavaScript"],
        },
        {
          title: "Unity Game Developer",
          at: "GILAB (University of Girona)",
          url: "https://gilab.udg.edu",

          startDate: new Date("2020-11"),
          endDate: new Date("2022-9"),
          location: "Girona, Spain",

          description:
            "Transitioned from an internship to a primary role within a research lab at my university, and in collaboration with a local hospital. My role was to develop a <strong>virtual-reality rehabilitation game</strong> for stroke patients. Utilizing the (now Meta) Oculus Quest VR headset and its hand tracking capabilities, our project aimed to create <b>immersive therapeutic experiences</b>, by developing a variety of exercises <strong>tailored to address specific mobility issues</strong>.\n\nThe project also served as the <strong>thesis for my degree</strong> and was recognized with the <b>“Scholarship for Transfer, Innovation and Entrepreneurship”</b> (BTI) during 2021-2022, as a result of a partnership between the university and “Santander Universidades",

          skills: ["Analytical Thinking", "C#", "Unity"],
        },
      ],
    },

    projects: {
      name: "Projects",
      id: "projects",
    },

    skills: {
      name: "Skills",
      id: "skills",
    },

    about: {
      name: "About",
      id: "about",
    },
  },

  socials: {
    github: "GitHub",
    linkedIn: "LinkedIn",
    xTwitter: "X (Formerly Twitter)",
    resume: "Resume",
    email: "Email",
    bento: "Bento",
  },

  userLocation: {
    lastVisit: "Last visit from",
    notice: {
      title: "Privacy Notice",
      message: `
        The displayed location is an approximation of the most recent visitor's geographical area, derived from their IP address.\n
        I temporarily store this location (not the IP address itself) to display it on this website. I do not share it or use it for any other purposes.
      `,
    },
  },
} as const;
