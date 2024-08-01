import { bold, italic, link, strong, small, quote } from "../lib/helpers/html";

/** The catalan strings for the website. */
export const catalan = {
  meta: {
    name: "Català",
    locale: "ca",
    code: "ca-ES",

    routes: {
      archive: "arxiu",
    },

    title: "Ivan Porto | Desenvolupador de Software",
    description: `
      Hola! Em dic Ivan Porto i soc un desenvolupador de software especialitzat en la programació de videojocs, però també 
      apassionat pel desenvolupament web. Hàbil tant en backend com en frontend. Fluid en català, castellà i anglès.
    `,

    ogAlt:
      "Hola! Em dic Ivan Porto, Desenvolupador de Software - Una imatge amb un fons degradat fosc i un avatar",
  },

  misc: {
    scrollToTop: "Torna a dalt",
    language: "Llenguatge",
    loveIconSr: "Amor",
    newTab: "S'obre en una nova pestanya",
  },

  skills: {
    "teamwork": "Treball en Equip",
    "analytical-thinking": "Pensament Analític",
    "communication": "Comunicació",
  },

  pages: {
    notfound: {
      meta: {
        title:
          "404: Página No Trobada - Ivan Porto | Desenvolupador de Software",
        description: "La pàgina que estàs buscant no existeix.",
      },

      headline: "Ups! Sembla que t'has perdut.",
      text: "La pàgina que estàs buscant no existeix.",
      back: "Torna a la página principal",
      label: "Pàgina Principal",
    },

    archive: {
      meta: {
        title: "Ivan Porto | Arxiu",
        description:
          "Una llista dels projectes més destacats en els quals he treballat.",
      },

      heading: "Arxiu de Projectes",
      headline:
        "Aquesta és una llista de tots els projectes en els quals he treballat i que considero que val la pena mencionar.",

      whatAreShowcasesLg: `Els enllaços de ${quote(strong("Mostra"))} són projectes que no estan publicats, però es poden descarregar i provar.`,
      whatAreShowcasesSm: `Els enllaços prefixats amb ${quote("*")} són ${strong("mostres")} (projectes que no estan publicats, però es poden descarregar i provar).`,

      homepageLinkLabel: "Pàgina Principal",
      homepageLinkText: "Tornar enrere",

      table: {
        headers: {
          year: "Any",
          project: "Projecte",
          description: "Descripció",
          builtWith: "Fet amb",
          links: "Enllaços",
        },

        showcaseLink: "Mostra",
        codeLink: "Codi",
        liveLink: "Veure",
      },
    },
  },

  noscript: {
    headline: `Ups! Sembla que ${strong("JavaScript")} està desactivat al teu navegador.`,
    message: `Aquest lloc web el ${strong("requereix")} per tal que alguns continguts es mostrin correctament.
      Si us plau, activa'l o descarta aquest missatge fent clic al botó de sota, però pot ser
      que alguns elements no es mostrin adequadament.`,

    dismissText: "Ho entenc, mostra'm la pàgina",
    hint: small(
      "En cas que t'ho estiguis preguntant, no, aquest botó no fa servir JavaScript.",
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
        content: `Soc desenvolupador de ${strong("software")}.`,
      },

      greeting: "Hola! Em dic Ivan Porto",
      introduction: `Especialitzat en desenvolupament de videojocs, però també apassionat pel desenvolupament web. Amb
        ${bold("+6 anys d'experiència programant")} i ${strong("+4 anys d'experiència professional")},
        estic ${bold("obert a oportunitats")} dins la indústria de videojocs, tot i que actualment em trobo
        ${strong("en busca activa d'una posició com a desenvolupador backend")}.`,

      statusLabel: "Disponible per treballar",
    },

    experience: {
      name: "Experiència",
      id: "experiencia",
      title: "A on he treballat",

      jobs: {
        codelearn: {
          title: "Professor de Programació per a Nens y Adolescents",
          location: "Barcelona, Espanya",
          at: "Codelearn",

          description: [
            `${quote("No hi ha millor manera d'aprendre que ensenyant")}.`,

            `Guiava ${strong("a més de 20 estudiants")} setmanalment a través d'una àmplia gamma de conceptes d'informàtica,
            des de programació bàsica fins a matèries avançades com ${strong("Python")}, ${strong("JavaScript")},
            ${strong("SQL")}, ${strong("C++")}, i moltes més. La meva funció era ${bold("ajudar-los a navegar pels diferents cursos")}
            disponibles en una plataforma interna d'${italic("e-learning")}, assistint-los quan trobaven dificultats i assegurant-me que
            aprofitessin al màxim les eines d'aprenentatge interactiu disponibles.`,

            `També vaig ${bold("participar en activitats extracurriculars d'ensenyament en escoles locals")},
            ${strong("rebent comentaris positius de pares")}, com a resultat d'una millora en el rendiment acadèmic dels seus fills.`,
          ],
        },

        gilab: {
          title: "Desenvolupador de Jocs en Unity",
          location: "Girona, Espanya",
          at: "GILAB (Universitat de Girona)",

          description: [
            `Vaig passar d'una posició de becari a una posició principal en un laboratori de recerca
            de la meva universitat, en col·laboració amb un hospital local. La meva funció era desenvolupar un
            ${strong("joc de rehabilitació en realitat virtual")} per a pacients d'ictus. Utilitzant
            les ulleres de RV Oculus Quest (ara Meta Quest) i les seves capacitats de seguiment de mans,
            el nostre projecte buscava crear ${bold("experiències terapèutiques immersives")}, desenvolupant
            una varietat d'exercicis dissenyats per abordar ${strong("problemes de mobilitat específics")}.`,

            `Aquest projecte també va servir com a ${strong("tesi per a la meva carrera")} i va ser reconegut amb la
            ${bold("“Beca de Transferència, Innovació i Emprenedoria”")} (BTI) durant el període 2021-2022,
            fruit d'una col·laboració entre la universitat i ${italic("Santander Universidades")}.`,
          ],
        },
      },
    },

    projects: {
      name: "Projectes",
      id: "projectes",
      title: "Alguns dels meus projectes preferits",

      buttonReveal: "Quin és el meu pròxim projecte?",
      seeMore: "Veure més projectes a",
      archiveText: "l'arxiu",

      sourceCode: "Repositori de GitHub",
      liveDemo: "Prova-ho!",
      showcaseLink: "Mostra",

      archive: {
        "my-room": {
          name: "La Meva Habitació en 3D",
          headline:
            "🛏️ Una rèplica (un mica més elegant) de la meva habitació en 3D.",

          description: [
            `Aquest projecte va ser la meva participació en la 9a edició dels reptes organitzats per ${bold("Bruno Simon")}
            per als estudiants del seu curs ${link("https://threejs-journey.com/", strong("Three.js Journey"), true)}.
            La temàtica era ${italic("Habitació Isomètrica")}. Tot i que just acabava de comprar el curs quan es va anunciar 
            el repte, vaig decidir participar.`,

            `El resultat va ser bastant bo! Vaig aconseguir el ${link(
              "https://threejs-journey.com/challenges/009-isometric-room",
              strong("3r lloc"),
              true,
            )}.`,
          ],
        },

        "the-gamelab": {
          name: "The Gamelab",
          headline:
            "🕹️ Una col·lecció de jocs en creixement, fets amb tecnologies web.",

          description: [
            `Aquest projecte marca el meu retorn al desenvolupament de jocs, combinant la meva passió per la creació
            d'aquests i el desenvolupament web. Actualment, compta amb 1 sol joc, però planejo anar-ne afegint
            més en el futur, utilitzant diverses tecnologies com ${strong("Three.js")}, ${strong("Phaser")},
            ${strong("Pixi.js")} i ${strong("Canvas")}, entre altres eines interessants.`,

            `Els meus ${bold("objectius futurs")} inclouen explorar els ${strong("jocs multijugador")},
            la qual cosa s'alinea amb el meu creixent ${bold("interès en el backend i la infraestructura en el núvol")}.`,
          ],
        },

        "the-izland": {
          name: "The Izland",
          headline:
            "🧟 Un joc de supervivència zombi que vam fer a la universitat.",

          description: [
            `D'entre els jocs en els quals he treballat, aquest és un dels meus preferits. Va ser desenvolupat com a
            projecte final d'una assignatura, utilitzant el motor de jocs ${strong("Unity")}.
            Vam quedar molt satisfets amb el resultat, tot i que ens hagués agradat afegir i polir més coses.`,

            `Jo em vaig encarregar de programar les mecàniques principals del joc, com la ${strong("IA dels zombis")},
            la ${strong("interfície d'usuari")}, les ${strong("interaccions del jugador")} i la ${strong("progressió general del joc")}.`,
          ],
        },

        "pirateland": {
          name: "Pirateland",
          headline: "🏴‍☠ Un joc temàtic de pirates ple d'emocionants minijocs.",
          description: "",
        },

        "the-coronavirus-war": {
          name: "The Coronavirus War",
          headline:
            "☣️ Un joc de plataformes 2D on científics lluiten contra els virus COVID-19.",
          description: "",
        },

        "isolated": {
          name: "Isolated",
          headline: `🤖 Un ${quote("shooter")} multijugador de plataformes 2D, ambientat en un món envaït per aliens.`,
          description: "",
        },

        "sense-quiz": {
          name: "Sense Quiz",
          headline:
            "🧩 Un joc de preguntes per Android dissenyat per a usuaris amb discapacitat visual.",
          description: "",
        },

        "fruit-ninja-vr": {
          name: "Fruit Ninja RV",
          headline:
            "🍉 Un senzill clon del popular joc Fruit Ninja, però en realitat virtual.",
          description: "",
        },

        "racing-circuit": {
          name: "Circuit de Carreres",
          headline:
            "🏎️ Un circuit de carreres que vaig fer per ensenyar a un amic com utilitzar Three.js",
          description: "",
        },

        "channel-packer": {
          name: "Channel Packer",
          headline: "🎨 Una aplicació web per crear textures empaquetades.",
          description: "",
        },

        "round-mania": {
          name: "Round Mania",
          headline: "🦠 Un clon del popular joc multijugador Agar.io",
          description: "",
        },

        "geoguesser-native": {
          name: "Geoguesser Native",
          headline:
            "📍 Un joc de geografia per Android que posa a prova els teus coneixements del món.",
          description: "",
        },

        "memory-native": {
          name: "Memory Native",
          headline:
            "🧠 Un joc per Android per posar a prova i millorar la teva memòria.",
          description: "",
        },

        "ice-defend": {
          name: "Ice Defend",
          headline: `🏰 Un joc ${quote("tower defense")} en 2.5D, ambientat en un món ambgelat.`,
          description: "",
        },
      },

      next: {
        name: "Use Link",
        headline:
          "🔗 Un servei autoallotjat per acurtar enllaços i compartir arxius.",

        description: [
          `Tot i que acostumo a treballar en diversos projectes alhora, aquest serà la meva nova prioritat.
          El meu objectiu és desenvolupar-lo com un servei complet amb una ${strong("arquitectura modular")} que
          permeti una ${bold("integració senzilla")} amb diversos proveïdors de núvol, sistemes de
          bases de dades i solucions d'emmagatzematge d'arxius.`,

          `La motivació principal per a aquest projecte és aprofundir els meus coneixements i habilitats en
          ${strong("infraestructura en el núvol")}, ${strong("DevOps")} i ${strong("desenvolupament backend")},
          ja que són les àrees en les quals vull centrar-me en el futur.`,
        ],
      },
    },

    about: {
      name: "Sobre Mi",
      title: "Una mica més sobre mi",
      id: "sobre-mi",

      bento: {
        atWork: {
          title: "A la feina",
          iconAlt: "Emoji d'un ordinador",
          approachAlt: "El meu mètode de treball",

          text: [
            `Amb gairebé 7 anys d'experiència en programació, abordo la meva feina amb una
            ${strong("curosa atenció al detall")} i una actitud ${strong("diligent")}.
            A través de projectes col·laboratius a la universitat, m'he tornat
            ${strong("versat en entorns de treball en equip")}, tot i que em sento igualment còmode
            i productiu treballant de forma independent.`,

            `M'agrada ${bold("automatitzar tasques")}, especialment quan l'eficiència és clau. Aquest hàbit
            es complementa bé amb el meu ${strong("enfocament professional")} actual en el desenvolupament 
            backend i infraestructura en el núvol, ja que gaudeixo creant sistemes que
            ${strong("faciliten i agilitzen el treball")} per a tothom.`,
          ],
        },

        aboutMe: {
          title: "En l'àmbit personal",
          dogEmojiText: "Gossos",
          gameEmojiText: "Jocs",

          iconAlt: "Emoji d'una mà saludant",
          dogEmojiAlt: "Emoji d'un gos",
          gamepadEmojiAlt: "Emoji d'un comandament de videojocs",
          pizzaEmojiAlt: "Emoji d'un tros de pizza",

          text: [
            `Les 3 paraules que millor em defineixen són ${strong("resilient")}, ${strong("optimista")} i
            ${strong("independent")}. Em costa renunciar a alguna cosa que m'hagi proposat, i sempre
            intento aportar una perspectiva positiva a cada situació.`,

            `Sempre he sigut ${strong("naturalment curiós")}, buscant no només aprendre, sinó també entendre.
            Per això m'agrada fer preguntes i descobrir com funcionen les coses.`,
          ],
        },

        education: {
          title: "Educació",
          iconAlt: "Emoji d'un gorro de graduació",

          items: {
            gddv: {
              title: "Grau en Disseny y Desenvolupament de Videojocs",
              location: "Girona, Espanya",

              url: "https://www.udg.edu/ca/estudia/Oferta-formativa/Graus/Fitxes?IDE=1436&ID=3105G1315",
              description: `Graduat per la ${link("https://www.udg.edu/ca/", strong("Universitat de Girona"), true)},
              on vaig adquirir un domini sòlid dels aspectes teòrics i pràctics del meu camp. Això no només va incloure
              desenvolupament de jocs, sinó també ${strong("algorismes i estructures de dades")},
              ${strong("arquitectura de sistemes")}, ${strong("bases de dades")}, entre altres àrees rellevants.`,
            },
          },
        },

        location: {
          title: "Ubicació",
          iconAlt: "Emoji d'una casa",

          where: `Seu a ${strong("Barcelona")}`,
        },
      },
    },

    contact: {
      name: "Contacte",
      title: "Envia'm un missatge",
      id: "contacte",

      headline1: `Contacta'm ${strong("quan vulguis.")}`,
      text1:
        "Si tens una pregunta, un projecte en ment, o simplement vols saludar, el meu correu és:",

      headline2: `Moltes gràcies pel ${strong("teu temps!")}`,
      text2:
        "Si així ho prefereixes, no dubtis en contactar-me a través de qualsevol d'aquests canals:",

      formFill: `Emplena aquest formulari i em posaré en contacte amb tu ${strong("el més aviat possible")}`,
      privacy: "No guardo ni comparteixo cap de les teves dades personals.",
      or: "O",
    },
  },

  footer: {
    note: `
      Fet amb {heart} per ${strong("Ivan Porto")} utilitzant ${link("https://astro.build", "Astro", true)},
      ${link("https://svelte.dev", "Svelte", true)} i ${link("https://react.dev", "React", true)}. 
      Desplegada a ${link("https://cloudflare.com", "Cloudflare", true)}.
    `,
  },
} as const;

/** The catalan strings for the client code.  */
export const clientCatalan = {
  // These are translation strings fed to dynamic content (client components).
  // This means that they will end up in final the JavaScript bundle.

  // To not include all the other translations in there (which are only used in the server),
  // we need to create a separate object with only the client-side translations.
  timezone: {
    same: "Estem dins la mateixa zona horària",
    ahead: (hours: string, minutes: string) =>
      `${hours} ${minutes} per davant teu`,

    behind: (hours: string, minutes: string) =>
      `${hours} ${minutes} per darrere teu`,
  },

  navigation: {
    drawerTitle: "Menú",
    drawerDescription: "Clica la secció a la que vols anar",
  },

  contact: {
    form: {
      placeholders: {
        name: "Bill Gates",
        email: "bill.gates@microsoft.com",
        subject: "Sobre el teu últim projecte...",
        message: "Tinc una pregunta sobre...",
      },

      labels: {
        name: "Nom",
        email: "Correu",
        subject: "Assumpte",
        message: "Missatge",
      },

      success: "Gràcies per contactar-me! Et respondré tan aviat com pugui.",
      errors: {
        "resend-rate-limit-exceeded": `S'ha superat el límit d'enviament. Si us plau, torna a intentar-ho més tard.`,
        "rate-limit-exceeded": (retryAfter: string) =>
          `Sembla que has enviat un correu recentment. Deixa'm temps per respondre o torna a intentar-ho ${retryAfter}.`,

        "internal-error": `S'ha produït un error intern. Si us plau, torna a intentar-ho més tard.`,
        "failed-to-determine-ip": `No s'ha pogut determinar la IP de la sol·licitud.`,
        "turnstile-error": `S'ha produït un error validant el captcha de Turnstile. Si us plau, intenta reiniciar el formulari i torna a enviar-lo.`,
        "schema-error": `Les dades del formulari no són vàlides. Si us plau, comprova els camps i torna a intentar-ho.`,
        "unknown": `S'ha produït un error desconegut. Si us plau, torna a intentar-ho més tard.`,
      },

      validation: {
        "email-invalid": "Aquesta adreça sembla no ser vàlida.",
        "email-required": "Es requereix un correu electrònic.",
        "name-required": `Proporciona el teu nom.`,

        "clearer-subject": (minChars: number) =>
          `Proporciona un assumpte més llarg (més de ${minChars} caràcters).`,

        "clearer-message": (minChars: number) =>
          `Proporciona un missatge més llarg (més de ${minChars} caràcters).`,
      },
    },

    persistingError:
      "Si el problema persisteix, contacta amb mi directament al meu correu.",

    captchaTrouble:
      "Estàs tenint problemes amb el captcha? Intenta recarregar la pàgina o netejar la memòria cau.",

    turnstileFailed: "Verificació del captcha fallida",
    contactSuccess: "Missatge enviat",
    contactError: "Alguna cosa ha sortit malament",

    formButtons: {
      submit: "Enviar",
      reset: "Esborrar",
    },
  },
};
