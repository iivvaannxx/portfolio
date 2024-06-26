/** Defines the data associated to a social media profile. */
export interface SocialData {
  href: string;
  size?: number;
  iconKey: string;

  // This is the translation key.
  i18nKey: string;
}

/** My LinkedIn profile. */
export const linkedIn = {
  href: "https://linkedin.com/in/ivan-porto-wigner",
  i18nKey: "linkedIn",
  iconKey: "lucide:linkedin",
} as const satisfies SocialData;

/** My GitHub profile. */
export const github = {
  href: "https://github.com/iivvaannxx",
  i18nKey: "github",
  iconKey: "lucide:github",
} as const satisfies SocialData;

/** My X (Twitter) profile. */
export const xTwitter = {
  href: "https://x.com/iivanportoo",
  i18nKey: "xTwitter",
  size: 32,

  // Unfortunately, the icon is not available in the lucide set.
  iconKey: "tabler:brand-x",
} as const satisfies SocialData;

/** My online resume. */
export const resume = {
  href: "https://read.cv/ivanporto",
  i18nKey: "resume",
  iconKey: "lucide:scroll",
} as const satisfies SocialData;

/** My email address. */
export const email = {
  href: "mailto:dev.ivanporto@gmail.com",
  i18nKey: "email",
  iconKey: "lucide:mail",
} as const satisfies SocialData;

/** My Bento profile. */
export const bento = {
  href: "https://bento.me/ivanporto",
  i18nKey: "bento",
  iconKey: "lucide:layout-dashboard",
} as const satisfies SocialData;

/** My Discord handle. */
export const discord = {
  href: "https://discord.com/users/500601612666929152",
  i18nKey: "discord",

  // Unfortunately, the icon is not available in the lucide set.
  iconKey: "tabler:brand-discord",
} as const satisfies SocialData;

/** My Threads profile. */
export const threads = {
  href: "https://threads.net/@iivanportoo",
  i18nKey: "threads",

  // Unfortunately, the icon is not available in the lucide set.
  iconKey: "tabler:brand-threads",
};

/** All the socials I provide a link to. */
export const socials = [
  linkedIn,
  github,
  xTwitter,
  threads,
  discord,
  email,
  resume,
  bento,
] as const satisfies SocialData[];
