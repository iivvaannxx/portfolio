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
