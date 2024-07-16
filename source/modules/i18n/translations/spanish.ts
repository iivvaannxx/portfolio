import { bold, italic, link, strong, small, quote } from "../lib/helpers/html";

/** The spanish strings for the website. */
export const spanish = {
  meta: {
    name: "Español",
    locale: "es",

    routes: {
      archive: "archivo",
    },

    title: "Ivan Porto | Desarrollador de Software",
    description: `
      ¡Hola! Soy Ivan Porto, un desarrollador de software especializado en el desarrollo de juegos y
      apasionado por el desarrollo web. Hábil tanto en backend como en frontend.
      Fluido en catalán, español e inglés.
    `,
  },

  misc: {
    scrollToTop: "Volver arriba",
    language: "Lenguaje",
    loveIconSr: "Amor",
  },

  skills: {
    "teamwork": "Trabajo en Equipo",
    "analytical-thinking": "Pensamiento Analítico",
    "communication": "Comunicación",
  },

  pages: {
    notfound: {
      meta: {
        title: "404: Página No Encontrada",
        description: "La página que estás buscando no existe.",
      },

      headline: "¡Ups! Parece que te has perdido.",
      text: "La página que estás buscando no existe.",
      back: "Volver a la página principal",
      label: "Página Principal",
    },
  },

  noscript: {
    headline: `¡Ups! Parece que ${strong("JavaScript")} está desactivado en tu navegador.`,
    message: `Este sitio web ${strong("lo requiere")} para que algunos contenidos ${strong("se muestren correctamente")}.
      Por favor, actívalo o descarta este mensaje haciendo clic en el botón de abajo, pero puede
      que algunos elementos no se muestren adecuadamente.`,

    dismissText: "Lo entiendo, muéstrame la página",
    hint: small(
      "En caso de que te lo estés preguntando, no, este botón no usa JavaScript.",
    ),
  },

  socials: {
    github: "GitHub",
    linkedIn: "LinkedIn",
    xTwitter: "X (Twitter)",
    resume: "Currículum",
    email: "Email",
    bento: "Bento",
    discord: "Discord",
    threads: "Threads",
  },

  sections: {
    hero: {
      headline: {
        content: `Soy desarrollador de ${strong("software")}.`,
      },

      greeting: "¡Hola! Soy Ivan Porto",
      introduction: `Especializado en desarrollo de videojuegos, pero también apasionado por el desarrollo web. Con
        ${bold("+6 años de experiencia programando")} y ${strong("+4 años de experiencia profesional")},
        estoy ${bold("abierto a oportunidades")} en la industria de videojuegos, aunque actualmente me encuentro
        ${strong("en busca activa de un puesto como desarrollador backend")}.
      `,

      statusLabel: "Disponible para trabajar",
    },

    experience: {
      name: "Experiencia",
      id: "experiencia",
      title: "Dónde he trabajado",

      jobs: {
        codelearn: {
          title: "Profesor de Programación para Niños y Adolescentes",
          location: "Barcelona, España",
          at: "Codelearn",

          description: [
            `${quote("No hay mejor manera de aprender que enseñando.")}`,

            `Guié a ${strong("más de 20 estudiantes")} semanalmente a través de una amplia gama de conceptos de informática,
            desde programación básica hasta materias avanzadas como ${strong("Python")}, ${strong("JavaScript")},
            ${strong("SQL")}, ${strong("C++")}, y muchas más. Mi función era ${bold("ayudarles a navegar por los diferentes cursos")}
            disponibles en una plataforma interna de ${italic("e-learning")}, asistiéndoles cuando encontraban dificultades y asegurándome de que 
            aprovecharan al máximo las herramientas de aprendizaje interactivo disponibles.`,

            `También ${bold("participé en actividades extracurriculares de enseñanza en colegios locales")},
            ${strong("recibiendo comentarios positivos de padres")}, como resultado de una mejora en 
            el rendimiento académico de sus hijos.`,
          ],
        },

        gilab: {
          title: "Desarrollador de Juegos en Unity",
          location: "Girona, España",
          at: "GILAB (Universidad de Girona)",

          description: [
            `Pasé de un puesto de becario a un puesto principal en un laboratorio de investigación
            de mi universidad, en colaboración con un hospital local. Mi función era desarrollar un  
            ${strong("juego de rehabilitación en realidad virtual")} para pacientes de ictus. Utilizando 
            las gafas VR Oculus Quest (ahora Meta Quest) y sus capacidades de seguimiento de manos,
            nuestro proyecto buscaba crear ${bold("experiencias terapéuticas inmersivas")}, desarrollando 
            una variedad de ejercicios diseñados para abordar ${strong("problemas de movilidad específicos")}.`,

            `Este proyecto también sirvió como ${strong("tesis para mi carrera")} y fue reconocido con la 
            ${bold("“Beca de Transferencia, Innovación y Emprendimiento”")} (BTI) durante el período 2021-2022, 
            fruto de una colaboración entre la universidad y ${italic("Santander Universidades")}.`,
          ],
        },
      },
    },

    projects: {
      name: "Proyectos",
      id: "proyectos",
      title: "Algunos de mis proyectos favoritos",

      buttonReveal: "¿Cuál es mi siguiente proyecto?",
      seeMore: "Ver más proyectos en",
      archiveText: "el archivo",

      sourceCode: "Repositorio de GitHub",
      liveDemo: "¡Pruébalo!",

      archive: {
        "my-room": {
          name: "Mi Habitación en 3D",
          headline:
            "Una réplica (un poco más elegante) de mi habitación en 3D.",

          description: [
            `Este proyecto fue mi participación en la 9ª edición de los desafíos organizados por ${bold("Bruno Simon")}
            para los estudiantes de su curso ${link("https://threejs-journey.com/", strong("Three.js Journey"), true)}.
            La temática era ${italic("Isometric Room")}. A pesar de haber comprado el curso justo cuando se anunció el desafío,
            decidí participar.`,

            `¡El resultado fue bastante bueno! Obtuvo el ${link(
              "https://threejs-journey.com/challenges/009-isometric-room",
              strong("3er lugar"),
              true,
            )}.`,
          ],
        },

        "the-gamelab": {
          name: "The Gamelab",
          headline:
            "Una colección de juegos en crecimiento, hechos con tecnologías web.",

          description: [
            `Este proyecto marca mi regreso al desarrollo de juegos, combinando mi pasión por la creación 
            de los mismos y el desarrollo web. Actualmente cuenta con 1 solo juego, pero planeo ir añadiendo 
            más en el futuro, usando diversas tecnologías como ${strong("Three.js")}, ${strong("Phaser")}, 
            ${strong("Pixi.js")} y ${strong("Canvas")}, entre otras herramientas interesantes.`,

            `Mis ${bold("objetivos futuros")} incluyen explorar los ${strong("juegos multijugador")},
            lo cual se alinea con mi ${bold("interés en el backend y la infraestructura en la nube")}.`,
          ],
        },

        "the-izland": {
          name: "The Izland",
          headline:
            "Un juego de supervivencia zombi que hicimos en la universidad.",

          description: [
            `Entre los juegos en los que he trabajado, este es uno de mis favoritos. Fue desarrollado como
            como proyecto final de una asignatura, usando el motor de juegos ${strong("Unity")}.
            Quedamos muy satisfechos con el resultado, aunque nos hubiera gustado añadir y pulir más cosas.`,

            `Me encargué de programar las mecánicas principales del juego, como la ${strong("IA de los zombies")},
            la ${strong("interfaz de usuario")}, las ${strong("interacciones del jugador")} y la ${strong("progresión general del juego")}.`,
          ],
        },
      },

      next: {
        name: "Use Link",
        headline:
          "Un servicio autohospedado para acortar enlaces y compartir archivos.",

        description: [
          `Aunque suelo trabajar en varios proyectos a la vez, este va a ser mi nueva prioridad.
          Mi objetivo es desarrollarlo como un servicio completo con una ${strong("arquitectura modular")} que
          permita una ${bold("integración sencilla")} con varios proveedores de nube, sistemas de 
          bases de datos y soluciones de almacenamiento de archivos.`,

          `Mi principal motivación para este proyecto es profundizar mis habilidades en 
          ${strong("infraestructura en la nube")}, ${strong("DevOps")} y ${strong("desarrollo backend")},
          ya que son las áreas en las que quiero centrarme en el futuro.`,
        ],
      },
    },

    about: {
      name: "Sobre Mí",
      title: "Un poco más sobre mí",
      id: "sobre-mi",

      bento: {
        atWork: {
          title: "En el trabajo",
          iconAlt: "Emoji de un ordenador",
          approachAlt: "Mi método de trabajo",

          text: [
            `Con casi 7 años de experiencia en programación, abordo mi trabajo con una
            cuidadosa ${strong("atención al detalle")} y una actitud ${strong("diligente")}.
            A través de proyectos colaborativos en la universidad, me he vuelto 
            ${strong("diestro en entornos de trabajo en equipo")}, aunque me siento igualmente cómodo
            y productivo trabajando de forma independiente.`,

            `${bold("Me gusta automatizar tareas")}, especialmente cuando la eficiencia es clave. Este hábito
            se complementa bien con mi ${strong("enfoque profesional")} actual en el desarrollo de 
            backend e infraestructura en la nube, ya que disfruto construyendo sistemas que 
            ${strong("facilitan y agilizan el trabajo")} para todos.`,
          ],
        },

        aboutMe: {
          title: "Mi lado personal",
          dogEmojiText: "Perros",
          gameEmojiText: "Juegos",

          iconAlt: "Emoji de una mano saludando",
          dogEmojiAlt: "Emoji de un perro",
          gamepadEmojiAlt: "Emoji de un mando de videojuegos",
          pizzaEmojiAlt: "Emoji de un trozo de pizza",

          text: [
            `Las 3 palabras que mejor me definen son ${strong("resiliente")}, ${strong("optimista")} e
            ${strong("independiente")}. Me resulta difícil renunciar a algo que me he propuesto, y siempre
            intento aportar una perspectiva positiva a cada situación.`,

            `Siempre he sido ${strong("naturalmente curioso")}, buscando no solo aprender, sino también entender.
            Por eso me gusta hacer preguntas y descubrir cómo funcionan las cosas.`,
          ],
        },

        education: {
          title: "Educación",
          iconAlt: "Emoji de un gorro de graduación",

          items: {
            gddv: {
              title: "Grado en Diseño y Desarrollo de Videojuegos",
              location: "Girona, España",

              url: "https://www.udg.edu/es/estudia/Oferta-formativa/Graus/Fitxes?IDE=1436&ID=3105G1315",
              description: `Graduado por la ${link("https://www.udg.edu/es/", strong("Universidad de Girona"), true)},
              donde adquirí un dominio sólido de los aspectos teóricos y prácticos de mi campo. Esto no solo incluyó 
              desarrollo de juegos, sino también ${strong("algoritmos y estructuras de datos")},
              ${strong("arquitectura de sistemas")}, ${strong("bases de datos")}, entre otras áreas relevantes.`,
            },
          },
        },

        location: {
          title: "Ubicación",
          iconAlt: "Emoji de una casa",

          where: `Sede en ${strong("Barcelona")}`,
        },
      },
    },

    contact: {
      name: "Contacto",
      title: "Envíame un mensaje",
      id: "contacto",

      headline1: `Contáctame ${strong("cuando quieras.")}`,
      text1:
        "Si tienes una pregunta, un proyecto en mente, o simplemente quieres saludar, mi correo es:",

      headline2: `¡Muchas gracias por ${strong("tu tiempo!")}`,
      text2:
        "Si así lo prefieres, no dudes en contactarme a través de cualquiera de estos canales:",

      formFill: `Rellena esta formulario y me pondré en contacto contigo ${strong("lo antes possible")}`,
      privacy: "No conservo ni comparto ninguno de tus datos personales.",
      or: "O",

      formPlaceholders: {
        name: "Bill Gates",
        email: "bill.gates@microsoft.com",
        subject: "Sobre tu último proyecto...",
        message: "Tengo una pregunta sobre...",
      },

      labels: {
        name: "Nombre",
        email: "Correo",
        subject: "Asunto",
        message: "Mensaje",
      },
    },
  },

  footer: {
    note: `
      Hecho con {heart} por ${strong("Ivan Porto")} utilizando ${link("https://astro.build", "Astro", true)},
      ${link("https://svelte.dev", "Svelte", true)} y ${link("https://react.dev", "React", true)}. 
      Desplegado en ${link("https://cloudflare.com", "Cloudflare", true)}.
    `,
  },
} as const;

/** The spanish strings for the client code.  */
export const clientSpanish = {
  // These are translation strings fed to dynamic content (client components).
  // This means that they will end up in final the JavaScript bundle.

  // To not include all the other translations in there (which are only used in the server),
  // we need to create a separate object with only the client-side translations.
  timezone: {
    same: "Estamos en la misma zona horaria.",
    ahead: (hours: string, minutes: string) =>
      `${hours} ${minutes} por delante de ti`,

    behind: (hours: string, minutes: string) =>
      `${hours} ${minutes} por detrás de ti`,
  },

  contact: {
    form: {
      success: `Gracias por tu mensaje. Te responderé lo antes posible.`,
      errors: {
        "resend-rate-limit-exceeded":
          "El límite de envio de emails ha sido excedido. Por favor, inténtalo de nuevo más tarde.",
        "rate-limit-exceeded": (retryAfter: string) =>
          `Parece que has enviado un email recientemente. Dame algo de tiempo para responder o inténtalo de nuevo ${retryAfter}.`,

        "internal-error": `Ha ocurrido un error interno. Por favor, inténtalo de nuevo más tarde.`,
        "failed-to-determine-ip": `No se ha podido determinar la IP de la solicitud.`,
        "failed-to-send-email": `No se ha podido enviar el email. Por favor, inténtalo de nuevo más tarde.`,
        "turnstile-error": `Ha ocurrido un error validando el captcha. Por favor, intenta resetear el formulario y enviarlo de nuevo.`,
        "schema-error": `Los datos del formulario son inválidos. Por favor, revisa los campos e inténtalo de nuevo.`,

        "unknown": `Ha ocurrido un error desconocido. Por favor, inténtalo de nuevo más tarde.`,
      },

      validation: {
        "email-invalid": "Esta dirección no parece ser válida.",
        "email-required": "Se requiere un correo electrónico.",
        "name-required": `Proporciona tu nombre.`,

        "clearer-subject": (minChars: number) =>
          `Proporciona un asunto más largo (más de ${minChars} caracteres).`,

        "clearer-message": (minChars: number) =>
          `Proporciona un mensaje más largo (más de ${minChars} caracteres).`,
      },
    },

    persistingError:
      "Si el problema persiste, contacta conmigo directamente en mi email.",

    captchaTrouble:
      "¿Estás teniendo problemas con el captcha? Intenta recargar la página o limpiar la caché.",

    turnstileFailed: "Verificación del captcha fallida",
    contactSuccess: "Mensaje enviado",
    contactError: "Algo salió mal",

    formButtons: {
      submit: "Enviar",
      reset: "Borrar",
    },
  },
};
