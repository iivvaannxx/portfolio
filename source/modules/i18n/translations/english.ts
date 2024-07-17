import { bold, italic, link, strong, small, quote } from "../lib/helpers/html";

/** The english strings for the website. */
export const english = {
  meta: {
    name: "English",
    locale: "en",
    code: "en_US",

    routes: {
      archive: "archive",
    },

    title: "Ivan Porto | Software Developer",
    description: `
      Hey! I'm Ivan Porto, a software developer specialized in game development, yet also passionate about 
      developing for the web. Skilled both in backend and frontend. Fluent in Catalan, Spanish, and English.
    `,

    ogAlt:
      "Hey! I'm Ivan Porto, Software Developer - An image with a dark gradient background and an avatar.",
  },

  misc: {
    scrollToTop: "Scroll To Top",
    language: "Language",
    loveIconSr: "Love",
  },

  socials: {
    github: "GitHub",
    linkedIn: "LinkedIn",
    xTwitter: "X (Twitter)",
    resume: "Resume",
    email: "Email",
    bento: "Bento",
    discord: "Discord",
    threads: "Threads",
  },

  pages: {
    notfound: {
      meta: {
        title: "404: Page Not Found - Ivan Porto | Software Developer",
        description: "The page you're looking for doesn't exist.",
      },

      headline: "Oops! It seems you're lost.",
      text: "The page you're looking for doesn't exist.",
      back: "Back to the main page",
      label: "Main Page",
    },
  },

  noscript: {
    headline: `Oops! It seems that ${strong("JavaScript")} is disabled in your browser.`,
    message: `This site ${strong("requires it")} for some content ${strong("to be displayed correctly")}.
      Please enable it or dismiss this message by clicking the button below, but some elements may 
      not be shown as expected.`,

    dismissText: "I understand, show me the website",
    hint: small(
      "In case you're wondering, no, this button does not use JavaScript.",
    ),
  },

  skills: {
    // In english these are redundant, but in other languages they might be different.
    // If we dont include them TypeScript complains about the translations not having the same keys.
    "teamwork": "Teamwork",
    "analytical-thinking": "Analytical Thinking",
    "communication": "Communication",
  },

  sections: {
    hero: {
      headline: {
        content: `I'm a ${strong("software")} developer.`,
        // words: ["game", "web", "software"],
      },

      greeting: "Hey! I'm Ivan Porto",
      introduction: `
        Specialized in game development, yet also passionate about developing for the web. With
        ${bold("6+ years of coding expertise")} and ${strong("4+ years of professional experience")},
        I am ${bold("open to opportunities")} in the game industry, but actively ${strong("seeking a role as a backend developer")}.
      `,

      statusLabel: "Available for work",
    },

    experience: {
      name: "Experience",
      id: "experience",
      title: "Where I've worked",

      jobs: {
        codelearn: {
          title: "Computer Science Educator for Kids and Teens",
          location: "Barcelona, Spain",
          at: "Codelearn",

          description: [
            `${quote("There's no better way to learn than to teach")}`,

            `Weekly guided ${strong("20+ students")} through a broad range of computer science topics
            ranging from basic programming to advanced subjects such as ${strong("Python")}, ${strong("JavaScript")},
            ${strong("SQL")}, ${strong("C++")}, and many more. My role involved ${bold("helping the students navigate various courses")}
            available on an internal e-learning platform, providing assistance with challenges and ensuring an optimal use of the interactive learning tools available.`,

            `${bold("Participated in extracurricular teaching at local schools")} and ${strong("received positive parental feedback")},
            as a result of an improvement in their children's academic performance.`,
          ],
        },

        gilab: {
          title: "Unity Game Developer",
          location: "Girona, Spain",
          at: "GILAB (University of Girona)",

          description: [
            `Transitioned from an internship to a primary role within a research lab at my 
            university, and in collaboration with a local hospital. My role was to develop a 
            ${strong("virtual-reality rehabilitation game")} for stroke patients. Utilizing the 
            (now Meta) Oculus Quest VR headset and its hand tracking capabilities, our project aimed 
            to create ${bold("immersive therapeutic experiences")}, by developing a variety of exercises 
            ${strong("tailored to address specific mobility issues")}.`,

            `The project also served as the ${strong("thesis for my degree")} and was recognized with 
            the ${bold("“Scholarship for Transfer, Innovation and Entrepreneurship”")} (BTI) during 2021-2022, 
            as a result of a partnership between the university and ${quote("Santander Universidades")}.`,
          ],
        },
      },
    },

    projects: {
      name: "Projects",
      id: "projects",
      title: "Some of my favorite projects",

      buttonReveal: "What's next?",
      currentProject: "On what I'm currently working?",
      seeMore: "See more of my projects in",
      archiveText: "the archive",

      sourceCode: "Source Code",
      liveDemo: "Try it out!",

      archive: {
        "my-room": {
          name: "My Room In 3D",
          headline: "A (quite a bit more) fancy replica of my room.",

          description: [
            `This project was my entry to the 9th edition of challenges organized by ${bold("Bruno Simon")}
            for the students of his ${link("https://threejs-journey.com/", strong("Three.js Journey"), true)} 
            course. The theme was ${italic("Isometric Room")}. Despite having just purchased the course 
            when the challenge was announced, I decided to participate.`,

            `It was very well received, scoring ${link(
              "https://threejs-journey.com/challenges/009-isometric-room",
              strong("3rd place"),
              true,
            )}.
          `,
          ],
        },

        "the-gamelab": {
          name: "The Gamelab",
          headline:
            "A growing collection of games built with web technologies.",

          description: [
            `This project represents my return to game development after quite some time, 
            combining my passion for web and game creation. Currently, it features a single game, 
            with plans to expand using various technologies like ${strong("Three.js")}, 
            ${strong("Phaser")}, ${strong("Pixi.js")}, and ${strong("Canvas")}, along with other cool stuff. `,

            `Future goals include exploring ${strong("multiplayer games")}, which aligns 
            well with my ${bold("growing interest in backend and cloud infrastructure")}.
          `,
          ],
        },

        "the-izland": {
          name: "The Izland",
          headline: "A zombie survival game developed as a college project.",

          description: [
            `Among the games I've worked on, this is one of my favorites. It was a project for a
            college course assignment, where we had to create a game using ${strong("Unity")}.
            Despite the time constraints that prevented us from adding everything we would
            have liked, we were very happy with the result.`,

            `I was responsible for programming the game's main mechanics, such as
            the ${strong("zombies' AI")}, the ${strong("user interface")}, the
            ${strong("player interactions")}, and the overall ${strong("game's progression")}.
          `,
          ],
        },
      },

      next: {
        name: "Use Link",
        headline: "A self-hostable URL shortener and file sharing service.",
        description: [
          `While I usually work on many things at once, this is currently my next priority. 
          I aim to develop it into a comprehensive service featuring a ${strong("modular architecture")}
          that allows for ${bold("seamless integration")} with various cloud providers, database
          systems, and file storage solutions.`,

          `My primary motivation for this project is to further specialize my skills in 
          ${strong("cloud infrastructure")}, ${strong("DevOps")}, and 
          ${strong("backend development")}, as these are the areas I intend to focus in my career.`,
        ],
      },
    },

    about: {
      name: "About",
      title: "A little more about me",
      id: "about",

      bento: {
        atWork: {
          title: "At Work",
          iconAlt: "Laptop Emoji",
          approachAlt: "My approach with code",

          text: [
            `With nearly 7 years of coding experience, I approach my work with a 
            careful ${strong("attention to detail")} and a ${strong("diligent")} attitude.
            Through collaborative projects in college, I've become ${strong("well-versed in teamwork settings")}, 
            although I'm equally comfortable and productive working independently.`,

            `${bold("I like automating tasks")}, especially when efficiency is key. This habit
            aligns well with my current ${strong("career focus")} on backend and cloud infrastructure development,
            as I enjoy building systems that ${strong("make work easier and faster")} for everyone.`,
          ],
        },

        aboutMe: {
          title: "My personal side",
          dogEmojiText: "Dogs",
          gameEmojiText: "Games",

          iconAlt: "Waving Hand Emoji",
          dogEmojiAlt: "Dog Emoji",
          gamepadEmojiAlt: "Gamepad Emoji",
          pizzaEmojiAlt: "Pizza Emoji",

          text: [
            `The 3 words that best define me are ${strong("resilient")}, ${strong("optimistic")}, and 
            ${strong("independent")}. It's hard for me to give up on something I've set my mind to, 
            and I always try to bring a positive outlook to every situation.`,

            `I've always been ${strong("naturally curious")}, looking not only to learn new things,
            but also to understand them. That's why I love asking questions and figuring out how things work.`,
          ],
        },

        education: {
          title: "Education",
          iconAlt: "Graduation Cap Emoji",

          items: {
            gddv: {
              title: "Bachelor's Degree in Game Design and Development",
              location: "Girona, Spain",

              url: "https://www.udg.edu/en/estudia/Oferta-formativa/Graus/Fitxes?IDE=1436&ID=3105G1315",
              description: `Graduated from the ${link("https://www.udg.edu/en/", strong("University of Girona"), true)},
              where I gained a comprehensive understanding of the theoretical and practical
              aspects of my field. This included not only game development, but also  
              ${strong("algorithms and data structures")}, ${strong("systems architecture")}, 
              ${strong("databases")}, and other relevant areas.
            `,
            },
          },
        },

        location: {
          title: "Location",
          iconAlt: "House Emoji",

          where: `Based in ${strong("Barcelona")}`,
        },
      },
    },

    contact: {
      name: "Contact",
      title: "Shoot me a message",
      id: "contact",

      headline1: `Contact me at ${strong("any moment.")}`,
      text1:
        "Whether you have a question, a project in mind or just want to say hi, you can reach me at:",

      headline2: `Thank you for ${strong("your time!")}`,
      text2:
        "If you prefer it, feel free to also get in touch through any of the following channels:",

      formFill: `Fill this form and I will get back to you ${strong("as soon as possible")}`,
      privacy: "I don't retain nor share any of your data.",
      or: "OR",
    },
  },

  footer: {
    note: `
      Built with {heart} by ${strong("Ivan Porto")} using ${link("https://astro.build", "Astro", true)},
      ${link("https://svelte.dev", "Svelte", true)}, and ${link("https://react.dev", "React", true)}. 
      Deployed on ${link("https://cloudflare.com", "Cloudflare", true)}.
    `,
  },
} as const;

/** The english strings for the client code.  */
export const clientEnglish = {
  // These are translation strings fed to dynamic content (client components).
  // This means that they will end up in final the JavaScript bundle.

  // To not include all the other translations in there (which are only used in the server),
  // we need to create a separate object with only the client-side translations.
  timezone: {
    same: "We are on the same timezone",
    ahead: (hours: string, minutes: string) =>
      `${hours} ${minutes} ahead of you`,

    behind: (hours: string, minutes: string) =>
      `${hours} ${minutes} behind you`,
  },

  navigation: {
    drawerTitle: "Menu",
    drawerDescription: "Click the section you want to navigate to.",
  },

  contact: {
    form: {
      placeholders: {
        name: "Bill Gates",
        email: "bill.gates@microsoft.com",
        subject: "Regarding your latest project...",
        message: "I have a question about...",
      },

      labels: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
      },

      success: `Thanks for reaching out! I'll get back to you as soon as possible.`,
      errors: {
        "resend-rate-limit-exceeded": `Rate limit exceeded. Please try again later.`,
        "rate-limit-exceeded": (retryAfter: string) =>
          `It seems you sent an email recently. Give me some time to answer or try again ${retryAfter}.`,
        "internal-error": `An internal error occurred. Please try again later.`,
        "failed-to-determine-ip": `Failed to determine the IP of the request.`,
        "turnstile-error": `An error occurred validating the Turnstile captcha. Please try resetting the form and submitting again.`,
        "schema-error": `The form data is invalid. Please check the fields and try again.`,

        "unknown": `An unknown error occurred. Please try again later.`,
      },

      validation: {
        "email-invalid": `This address seems to be invalid.`,
        "email-required": `An email address is required.`,
        "name-required": `Your name is required.`,

        "clearer-subject": (minChars: number) =>
          `Provide a longer subject (more than ${minChars} characters).`,
        "clearer-message": (minChars: number) =>
          `Provide a longer message (more than ${minChars} characters).`,
      },
    },

    persistingError:
      "If the problem persists, contact me directly at my email.",
    captchaTrouble:
      "Are you having trouble with the captcha? Try reloading or clearing the cache.",
    turnstileFailed: "Human Verification Failed",
    contactSuccess: "Email sent",
    contactError: "Something went wrong",

    formButtons: {
      submit: "Send",
      reset: "Reset",
    },
  },
};
