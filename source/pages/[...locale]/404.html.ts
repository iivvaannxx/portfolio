import type { APIRoute } from "astro";
import { experimental_AstroContainer as AstroContainer } from "astro/container";

import {
  DEFAULT_LOCALE,
  createStaticPathsHandler,
  getTranslations,
  type Locale,
} from "@modules/i18n";

// The page is prefixed with a _ in order to tell Astro that it should not output the page in the build.
import { default as _404 } from "./_404.astro";

// Used to dynamically render an Astro page.
const container = await AstroContainer.create();

// Generates HTML for the 404 page.
// Astro does not support nested 404 pages.
// But they can be handled by providers like Cloudflare.
// We could define a 404.astro file, but if it's not on the
// root of the pages directory it gets ignored.
// And on build, depending on the output format, it might generate a 404/index.html file.
export const GET: APIRoute = async ({ params, request }) => {
  // This workaround allows us to generate a 404.html file nested in the locale directory.
  // See: https://github.com/withastro/astro/issues/10423#issuecomment-2001948158 for context.

  const locale = (params.locale ?? DEFAULT_LOCALE) as Locale;
  const content = await container.renderToString(_404, {
    request,
    params,

    routeType: "page",
    locals: {
      locale,
      translations: getTranslations(locale),
    },
  });

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  });
};

export const getStaticPaths = createStaticPathsHandler();
