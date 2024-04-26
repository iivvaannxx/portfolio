/** The catalan strings for the website. */
export const catalan = {
  meta: {
    name: "Català",
    locale: "ca",
  },

  sections: {
    about: {
      title: "Sobre Mi",
      headline: {
        left: "Sóc",
        main: "desenvolupador",
        right: "de software.",
      },

      greeting: "Hola! Em dic",
      description: "Especialitzat en desenvolupament de jocs, però apassionat per desenvolupar qualsevol tipus de software. Amb més de 6 anys d'experiència programant i més de 4 anys d'experiència professional.",
    },

    experience: "Experiència",
    projects: "Projectes",
    skills: "Competències",
    contact: "Contacte",
  },

  socials: {
    github: "GitHub",
    linkedIn: "LinkedIn",
    xTwitter: "X (Anteriorment Twitter)",
    resume: "Currículum",
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
