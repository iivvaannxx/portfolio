/** Defines the data associated to a social media profile. */
export interface SocialData {
  href: string;
  size?: number;
  iconKey: string;

  // This is the translation key.
  i18nKey: string;
}

/** My LinkedIn profile. */
export const linkedIn: SocialData = {
  href: "https://linkedin.com/in/ivan-porto-wigner",
  i18nKey: "linkedIn",
  iconKey: "lucide:linkedin",
} as const;

/** My GitHub profile. */
export const github: SocialData = {
  href: "https://github.com/iivvaannxx",
  i18nKey: "github",
  iconKey: "lucide:github",
};

/** My X (Twitter) profile. */
export const xTwitter: SocialData = {
  href: "https://x.com/iivanportoo",
  i18nKey: "xTwitter",
  size: 32,

  // Unfortunately, the icon is not available in the lucide set.
  iconKey: "tabler:brand-x",
};

/** My online resume. */
export const resume: SocialData = {
  href: "https://read.cv/ivanporto",
  i18nKey: "resume",
  iconKey: "lucide:file-badge",
};

/** All the socials I provide a link to. */
export const socials = [linkedIn, github, xTwitter, resume] as const;
