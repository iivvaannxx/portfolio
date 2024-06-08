/** The catalan strings for the website. */
export const catalan = {
  meta: {
    name: "Català",
    locale: "ca",
  },

  sections: {
    hero: {
      name: "Sobre Mi",
      id: "sobre-mi",

      headline: {
        content: ["Sóc desenvolupador de", "%s"],
        words: ["videojocs", "pàgines web", "software"],
      },

      greeting: "Hola! Em dic",
      introduction: `
        Especialitzat en desenvolupament de jocs, però apassionat per desenvolupar qualsevol tipus de software.
        Amb més de 6 anys d'experiència programant i més de 4 anys d'experiència professional.
      `,
    },

    experience: {
      name: "Experiència",
      id: "experiencia",
    },

    projects: {
      name: "Projectes",
      id: "projectes",
    },

    skills: {
      name: "Competències",
      id: "competencies",
    },

    about: {
      name: "Sobre Mi",
      id: "sobre-mi",
    },
  },

  socials: {
    github: "GitHub",
    linkedIn: "LinkedIn",
    xTwitter: "X (Anteriorment Twitter)",
    resume: "Currículum",
    email: "Correu Electrònic",
    bento: "Bento",
  },

  userLocation: {
    lastVisit: "Última visita des de",
    notice: {
      title: "Avís de Privacitat",
      message: `
        La ubicació mostrada és una aproximació de l'àrea geogràfica del visitant més recent, derivada de la seva adreça IP.\n
        Emmagatzemo temporalment aquesta ubicació (no l'adreça IP) per mostrar-la en aquest lloc web. No la comparteixo ni la utilitzo per a cap altre propòsit.
      `,
    },
  },
} as const;
