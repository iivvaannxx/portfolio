/* eslint-disable ts/no-unsafe-call */
/* eslint-disable ts/no-unsafe-assignment */
/* eslint-disable ts/no-unsafe-member-access */

// Polyfill for CSS scroll animations.
import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

// Balance the text using a polyfill if not natively supported.
if (!(CSS.supports("text-wrap", "balance"))) {
  // See: https://github.com/adobe/balance-text
  // @ts-expect-error There's no typings for this polyfill.
  import("balance-text")
    .then((module) => {
      const balanceText = module.default;
      balanceText(".text-balance");
    })
    .catch((error) => { console.error(error); });
}
