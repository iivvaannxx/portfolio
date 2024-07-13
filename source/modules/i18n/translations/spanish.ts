import { bold, italic, link, strong, small } from "../lib/helpers/html";

/** The spanish strings for the website. */
export const spanish = {
  meta: {
    name: "Español",
    locale: "es",

    routes: {
      archive: "archivo",
    },
  },

  noscript: {
    headline: `Oops! It seems that ${strong("JavaScript")} is disabled in your browser.`,
    message: `This site ${strong("requires it")} for some content ${strong("to be displayed correctly")}.
      Please enable it or dismiss this message by clicking the button below, but some content may 
      not be shown as expected.`,

    dismissText: "I understand, show me the website",
    hint: small(
      "In case you're wondering, no, this button does not use JavaScript.",
    ),
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
        ${bold("6+ years of coding expertise")}, and ${strong("4+ years of professional experience")},
        I am ${bold("open to opportunities")} in the game industry, but actively ${strong("seeking a role as a web developer")}.
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

          description:
            "<q>There's no better way to learn than to teach</q>\n\nWeekly guided <strong>20+ students</strong> through a broad range of computer science topics ranging from basic programming to advanced subjects such as <strong>Python</strong>, <strong>JavaScript</strong>, <strong>SQL</strong>, <strong>C++</strong>, and many more. My role was <b>to help them navigate the different courses</b> available in an internal e-learning platform, assisting them when they encountered challenges and ensuring they made the most of the interactive learning tools available.\n\n<b>Participated in extracurricular teaching at local schools</b> and <strong>received positive parental feedback</strong>, as a result of an improvement in their children's academic performance.",
        },

        gilab: {
          title: "Unity Game Developer",
          location: "Girona, Spain",
          at: "GILAB (University of Girona)",

          description:
            "Transitioned from an internship to a primary role within a research lab at my university, and in collaboration with a local hospital. My role was to develop a <strong>virtual-reality rehabilitation game</strong> for stroke patients. Utilizing the (now Meta) Oculus Quest VR headset and its hand tracking capabilities, our project aimed to create <b>immersive therapeutic experiences</b>, by developing a variety of exercises <strong>tailored to address specific mobility issues</strong>.\n\nThe project also served as the <strong>thesis for my degree</strong> and was recognized with the <b>“Scholarship for Transfer, Innovation and Entrepreneurship”</b> (BTI) during 2021-2022, as a result of a partnership between the university and <q>Santander Universidades</q>.",
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

      archive: {
        "my-room": {
          name: "My Room In 3D",
          headline: "A (quite a bit more) fancy replica of my room.",

          description: [
            `This was my entry to the 9th edition of the challenges organised by ${bold("Bruno Simon")}
            for the students of his ${link("https://threejs-journey.com/", strong("Three.js Journey"), true)} 
            course. The theme was ${italic("Isometric Room")} and even though I had just purchased the course 
            when the challenge was announced, I decided to participate.`,

            `Turned out quite good! It scored the ${link(
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
            `I started this project very recently, after quite some time without
            working on any game projects, I wanted to get back into it. I thought it 
            would be fun to combine my passion for both the web and game development,
            and so this idea came up.`,

            `Right now there's only 1 game, but I plan to add more in the future. I'll be using
            many different technologies, including ${strong("Three.js")}, ${strong("Phaser")}, 
            ${strong("Pixi.js")}, ${strong("Canvas")}, among all the other cool stuff out there.
          `,
          ],
        },

        "the-izland": {
          name: "The Izland",
          headline: "A zombie survival game we made back in college.",

          description: [
            `This is one of my favorite games I've worked on. It was a project for a
            college subject, where we had to develop a game in ${strong("Unity")}.
            Although we were very limited in time and couldn't make it as polished
            as we wanted, we were very happy with the result.`,

            `I was in charge of programming the game's main mechanics, such as
            the ${strong("zombies' AI")}, the ${strong("user interface")}, the
            ${strong("player interactions")}, and the overall ${strong("game's progression")}, 
            among other elements.
          `,
          ],
        },
      },

      current: {
        name: "Use Link",
        headline: "A self-hostable URL shortener and file sharing service.",
        description: [
          `I usually work on many things at once, but this is my current focus. 
          I plan to make it a full-featured service with a ${strong("modular architecture")}
          that allows ${bold("seamless integration")} with various cloud providers, database
          systems, and file storage solutions.`,

          `My primary motivation for this project is to specialize my skills in 
          ${strong("cloud infrastructure")}, ${strong("DevOps")}, and 
          ${strong("backend development")} as these are the areas I want to focus 
          on in the future.`,
        ],
      },
    },

    about: {
      name: "About",
      title: "A little more about me",
      id: "about",

      introduction: [
        `I'm a software developer ${strong("based in Barcelona")} with a passion 
        for creating interactive experiences, whether it's a website, a game, 
        or a mobile app. With nearly 7 years of coding experience, I approach 
        my work with a careful ${strong("attention to detail")} and a ${strong("diligent")} 
        attitude.`,

        `On a personal note, I've always been ${strong("naturally curious")} 🧐, looking 
        not only to learn new things but also to understand them.`,
      ],

      bento: {
        atWork: {
          title: "At Work",
          iconAlt: "Laptop Emoji",
          approachAlt: "My approach with code",

          text: [
            `With nearly 7 years of coding experience, I approach my work with a 
            careful ${strong("attention to detail")} and a ${strong("diligent")} attitude.
            Back in college, we often worked in groups; thanks to that experience, 
            I'm ${strong("well-versed in teamwork settings")}, although I'm equally 
            comfortable and productive working alone.`,

            `I like automating tasks, especially when I'm feeling a bit lazy. This habit
            aligns well with my ${strong("career focus")} on backend and cloud infrastructure development,
            as I enjoy building systems that ${strong("make work easier and faster")} for everyone.`,
          ],
        },

        aboutMe: {
          title: "My personal side",
          dogEmojiText: "Dogs",
          gameEmojiText: "Games",

          iconAlt: "Waving Hand Emoji",
          dogEmojiAlt: "Dog",
          gamepadEmojiAlt: "Gamepad",

          text: [
            `With nearly 7 years of coding experience, I always approach my work with a 
            careful ${strong("attention to detail")} and a ${strong("diligent")} attitude.
            Back in college, we used to work on many things in groups, thanks to that
            experience, I'm well-versed in teamwork settings.`,

            `I like to automate things. Sometimes `,

            `I'm a software developer ${strong("based in Barcelona")} with a passion for creating
            engaging and interactive experiences, whether it's a website, a game, or a mobile app.`,

            `I've always been ${strong("naturally curious")} 🧐, looking 
            not only to learn new things but also to understand them.`,

            `However, I mostly work alone,
            which has helped me develop a ${strong("strong sense of autonomy")} and also made 
            me very comfortable in solo environments as well.
            `,
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
              description: `Graduated by the ${link("https://www.udg.edu/en/", strong("University of Girona"), true)},
              where I gained a comprehensive understanding of the theoretical and practical
              aspects of my field. This included not only game development, but also  
              ${strong("3D modeling")}, ${strong("algorithms and data structures")}, 
              ${strong("systems architecture")}, ${strong("web development")}, and more.
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
    },
  },

  footer: {
    note: `
      Built with {heart} by ${strong("Ivan Porto")} using ${link("https://astro.build", "Astro", true)},
      ${link("https://svelte.dev", "Svelte", true)}, and ${link("https://react.dev", "React", true)}. 
      Deployed on ${link("https://cloudflare.com", "Cloudflare", true)}.
    `,
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

/** The spanish strings for the client code.  */
export const clientSpanish = {
  // These are translation strings fed to dynamic content (client components).
  // This means that they will end up in final the JavaScript bundle.

  // To not include all the other translations in there (which are only used in the server),
  // we need to create a separate object with only the client-side translations.

  contact: {
    form: {
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
        "email-invalid": `This email address is invalid.`,
        "email-required": `Please provide an email address.`,
        "name-required": `Please provide a name.`,

        "clearer-subject": (minChars: number) =>
          `Please provide a clearer subject (more than ${minChars} characters).`,
        "clearer-message": (minChars: number) =>
          `Please provide a clearer message (more than ${minChars} characters).`,
      },
    },

    persistingError:
      "If the problem persists, you contact me directly at my email: ",
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
