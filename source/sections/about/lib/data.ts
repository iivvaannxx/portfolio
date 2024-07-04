import { getTranslationHandler } from "@modules/i18n";
import type {
  EducationData,
  EducationItemKey,
  EducationStaticData,
  Favorite,
} from "./types";

function defineEducationData(key: EducationItemKey, data: EducationStaticData) {
  const translationItemKey = `sections.about.education.${key}` as const;

  // These functions return translated data about the education item.
  const titleHandler = getTranslationHandler(`${translationItemKey}.title`);
  const locationHandler = getTranslationHandler(
    `${translationItemKey}.location`,
  );
  const descriptionHandler = getTranslationHandler(
    `${translationItemKey}.description`,
  );

  return {
    title: titleHandler,
    location: locationHandler,
    description: descriptionHandler,
    ...data,
  };
}

function defineFavorite(data: Favorite) {
  return {
    ...data,
  };
}

export const education = [
  defineEducationData("gddv", {
    url: "https://www.udg.edu/en/estudia/Oferta-formativa/Graus/Fitxes?IDE=1436&ID=3105G1315",

    startDate: new Date("2018-09"),
    endDate: new Date("2022-06"),
  }),
] satisfies EducationData[];

export const favorites = [
  defineFavorite({
    name: "The Weeknd",
    artist: "The Weeknd",
    spotifyUrl: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
    coverUrl: "/images/favorites/the-weeknd.jpg",
  }),
] satisfies Favorite[];
