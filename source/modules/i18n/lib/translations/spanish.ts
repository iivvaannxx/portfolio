/** The spanish strings for the website. */
export const spanish = {
  meta: {
    name: "Español",
    locale: "es",
  },

  sections: {
    about: {
      title: "Sobre Mí",
      headline: {
        content: ["Soy desarrollador de", "{words}"],
        words: ["videojuegos", "páginas web", "software"],
      },

      greeting: "¡Hola! Me llamo",
      description: "Especializado en desarrollo de videojuegos, pero apasionado por desarrollar cualquier tipo de software. Con más de 6 años de experiencia programando y más de 4 años de experiencia profesional.",
    },

    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Competencias",
    contact: "Contacto",
  },

  socials: {
    github: "GitHub",
    linkedIn: "LinkedIn",
    xTwitter: "X (Anteriormente Twitter)",
    resume: "Currículum",
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
