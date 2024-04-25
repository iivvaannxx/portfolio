import FileBadgeIcon from "~icons/lucide/file-badge";
import GithubIcon from "~icons/lucide/github";
import LinkedInIcon from "~icons/lucide/linkedin";
import TwitterIcon from "~icons/lucide/twitter";

/** Defines the data associated to a social media profile. */
export interface SocialData {

  href: string;
  label: string;
  Icon: astroHTML.JSX.Element;
}

/** My LinkedIn profile. */
export const linkedIn: SocialData = {
  href: "https://linkedin.com/in/ivan-porto-wigner",
  label: "LinkedIn",
  Icon: LinkedInIcon,
} as const;

/** My GitHub profile. */
export const github: SocialData = {
  href: "https://github.com/iivvaannxx",
  label: "GitHub",
  Icon: GithubIcon,
};

/** My X (Twitter) profile. */
export const xTwitter: SocialData = {
  href: "https://x.com/iivanportoo",
  label: "X (Formerly Twitter)",
  Icon: TwitterIcon,
};

/** My online resume. */
export const resume: SocialData = {
  href: "https://read.cv/ivanporto",
  label: "Resume",
  Icon: FileBadgeIcon,
};

/** All the socials I provide a link to. */
export const socials = [linkedIn, github, xTwitter, resume] as const;
