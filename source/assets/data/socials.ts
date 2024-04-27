import XTwitterIcon from "~icons/devicon/twitter";
import FileBadgeIcon from "~icons/lucide/file-badge";
import GithubIcon from "~icons/lucide/github";
import LinkedInIcon from "~icons/lucide/linkedin";

/** Defines the data associated to a social media profile. */
export interface SocialData {

  href: string;
  Icon: astroHTML.JSX.Element;
  size?: number;

  // This is the translation key (i18n).
  key: string;
}

/** My LinkedIn profile. */
export const linkedIn: SocialData = {
  href: "https://linkedin.com/in/ivan-porto-wigner",
  key: "linkedIn",
  Icon: LinkedInIcon,
} as const;

/** My GitHub profile. */
export const github: SocialData = {
  href: "https://github.com/iivvaannxx",
  key: "github",
  Icon: GithubIcon,
};

/** My X (Twitter) profile. */
export const xTwitter: SocialData = {
  href: "https://x.com/iivanportoo",
  key: "xTwitter",
  size: 24,
  Icon: XTwitterIcon,
};

/** My online resume. */
export const resume: SocialData = {
  href: "https://read.cv/ivanporto",
  key: "resume",
  Icon: FileBadgeIcon,
};

/** All the socials I provide a link to. */
export const socials = [linkedIn, github, xTwitter, resume] as const;
