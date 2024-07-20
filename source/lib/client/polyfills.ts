/* eslint-disable ts/no-unsafe-call */
/* eslint-disable ts/no-unsafe-assignment */
/* eslint-disable ts/no-unsafe-member-access */

// Polyfill for CSS scroll animations.
if (!CSS.supports("animation-timeline", "auto")) {
  // @ts-expect-error There's no typings for this polyfill.
  import("https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js");
  window.addEventListener("load", () => {
    // Fallback for project video previews.
    document.querySelectorAll("article[data-project]").forEach((article) => {
      article.classList.add("not-supports-animation-timeline");
    });
  });
}

// Balance the text using a polyfill if not natively supported.
if (!CSS.supports("text-wrap", "balance")) {
  // See: https://github.com/adobe/balance-text
  // @ts-expect-error There's no typings for this polyfill.
  import("balance-text")
    .then((module) => {
      const balanceText = module.default;
      balanceText(".text-balance");
    })
    .catch((error) => {
      console.error(error);
    });
}

// See: https://gist.github.com/paullewis/55efe5d6f05434a96c36
// Can't believe how such an old API (< 2015) is still not supported in Safari.
window.requestIdleCallback =
  window.requestIdleCallback ??
  function (cb) {
    return setTimeout(function () {
      var start = Date.now();
      cb({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - start));
        },
      });
    }, 1);
  };

window.cancelIdleCallback =
  window.cancelIdleCallback ??
  function (id) {
    clearTimeout(id);
  };

// I keep this file for maintenance purposes,
// but it's manually minified and inlined in the final bundle.
// This is done because it's a priority script that needs to be loaded first.
// Astro doesn't allow to specify the order of scripts in the head.
// TODO: Automate this process.
