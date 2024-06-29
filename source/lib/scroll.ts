import Lenis from "lenis";

let lenis: Lenis;
let animationFrame: number;

/**
 * Retrieves the Lenis instance.
 * If the instance does not exist, it initializes it.
 *
 * @returns The Lenis instance.
 */
export function getLenisInstance() {
  if (!lenis) {
    initLenis();
  }
  return lenis;
}

/** Initializes the Lenis library for smooth scrolling. */
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
    animationFrame = requestAnimationFrame(lenisRaf);
  }

  animationFrame = requestAnimationFrame(lenisRaf);
}

export function destroyLenis() {
  lenis.destroy();
  cancelAnimationFrame(animationFrame);
}