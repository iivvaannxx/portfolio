import FileBadgeIcon from "~icons/lucide/file-badge";
import GithubIcon from "~icons/lucide/github";
import LinkedInIcon from "~icons/lucide/linkedin";
import XTwitterIcon from "~icons/tabler/brand-x";

/** Defines the data associated to a social media profile. */
export interface SocialData {
  href: string;
  Icon: astroHTML.JSX.Element;
  size?: number;

  // This is the translation key.
  i18nKey: string;
}

/** My LinkedIn profile. */
export const linkedIn: SocialData = {
  href: "https://linkedin.com/in/ivan-porto-wigner",
  i18nKey: "linkedIn",
  Icon: LinkedInIcon,
} as const;

/** My GitHub profile. */
export const github: SocialData = {
  href: "https://github.com/iivvaannxx",
  i18nKey: "github",
  Icon: GithubIcon,
};

/** My X (Twitter) profile. */
export const xTwitter: SocialData = {
  href: "https://x.com/iivanportoo",
  i18nKey: "xTwitter",
  size: 32,
  Icon: XTwitterIcon,
};

/** My online resume. */
export const resume: SocialData = {
  href: "https://read.cv/ivanporto",
  i18nKey: "resume",
  Icon: FileBadgeIcon,
};

/** All the socials I provide a link to. */
export const socials = [linkedIn, github, xTwitter, resume] as const;
