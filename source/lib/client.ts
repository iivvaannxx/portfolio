import "./polyfills";

import Lenis from "lenis";
export const lenis = new Lenis({
  syncTouch: true,
});

/**
 * The loop used by Lenis to smooth the scrollbar.
 * @param time - The current timestamp provided by `requestAnimationFrame`.
 */
function lenisRaf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(lenisRaf);
}

requestAnimationFrame(lenisRaf);
