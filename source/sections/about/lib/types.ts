import type { TranslationHandler } from "@app/modules/i18n";

export type EducationItemKey = "gddv";

export type FavoriteMusic = {
  name: string;
  artist: string;
  spotifyUrl: string;
  coverUrl: string;
};

export type FavoriteGame = {
  name: string;
  storeUrl: string;
  coverUrl: string;

  // Only these two because they're the only ones I play.
  platform: "PS5" | "Nintendo Switch";
};

export type FavoriteShow = {
  name: string;
  platform: "Netflix" | "HBO" | "Disney+" | "Prime Video";
};

export type FavoriteMovie = {
  name: string;
  platform: "Netflix" | "HBO" | "Disney+" | "Prime Video";
};

export type Favorite =
  | FavoriteMusic
  | FavoriteGame
  | FavoriteShow
  | FavoriteMovie;

export type EducationStaticData = {
  url: string;

  startDate: Date;
  endDate: Date;
};

export type EducationData = EducationStaticData & {
  title: TranslationHandler;
  location: TranslationHandler;
  description: TranslationHandler;
};
