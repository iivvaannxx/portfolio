/** The english strings for the website. */
export const english = {
  meta: {
    name: "English",
    locale: "en",
  },

  sections: {
    about: {
      title: "About",
      headline: {
        left: "I'm a",
        main: "software",
        right: "developer.",
      },

      greeting: "Hello! My name is",
      description: "Specialized in game development, yet passionate about developing any kind of software. With 6+ years of experience and 4+ years of professional experience.",
    },

    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },

  socials: {
    github: "GitHub",
    linkedIn: "LinkedIn",
    xTwitter: "X (Formerly Twitter)",
    resume: "Resume",
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
