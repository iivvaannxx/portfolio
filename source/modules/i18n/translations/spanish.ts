/** The spanish strings for the website. */
export const spanish = {
  meta: {
    name: "Español",
    locale: "es",
  },

  sections: {
    hero: {
      name: "Sobre Mí",
      id: "sobre-mi",

      headline: {
        content: ["Soy desarrollador de", "%s"],
        words: ["videojuegos", "páginas web", "software"],
      },

      greeting: "¡Hola! Me llamo",
      introduction: `
        Especializado en desarrollo de videojuegos, pero apasionado por desarrollar cualquier tipo de software.
        Con más de 6 años de experiencia programando y más de 4 años de experiencia profesional.
      `,
    },

    experience: {
      name: "Experiencia",
      id: "experiencia",
    },

    projects: {
      name: "Proyectos",
      id: "proyectos",
    },

    skills: {
      name: "Competencias",
      id: "competencias",
    },

    about: {
      name: "Sobre Mí",
      id: "sobre-mi",
    },
  },

  socials: {
    github: "GitHub",
    linkedIn: "LinkedIn",
    xTwitter: "X (Anteriormente Twitter)",
    resume: "Currículum",
    email: "Correo Electrónico",
    bento: "Bento",
  },

  userLocation: {
    lastVisit: "Última visita desde",
    notice: {
      title: "Aviso de Privacidad",
      message: `
        La ubicación mostrada es una aproximación del área geográfica del visitante más reciente, obtenida a partir de su dirección IP.\n
        Almaceno temporalmente esta ubicación (no la dirección IP) para mostrarla en este sitio web. No la comparto ni la utilizo para ningún otro propósito.
      `,
    },
  },
} as const;

/** The spanish strings for the client code.  */
export const clientSpanish = {
  // These are translation strings fed to dynamic content (client components).
  // This means that they will end up in final the JavaScript bundle.

  // To not include all the other translations in there (which are only used in the server),
  // we need to create a separate object with only the client-side translations.

  test: "hello world!",
};
