import Lenis from "lenis";

let lenis: Lenis;

export function getLenisInstance() {
  if (!lenis) {
    initLenis();
  }
  return lenis;
}

export function initLenis() {
  lenis = new Lenis({
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
}

export function toggleScroll(allowScroll: boolean) {
  if (!lenis) {
    initLenis();
  }

  if (allowScroll) {
    lenis.start();
  } else {
    lenis.stop();
  }
}
