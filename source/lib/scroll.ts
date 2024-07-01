import Lenis, { type LenisOptions } from "lenis";

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
export function initLenis(options: LenisOptions = {}) {
  lenis = new Lenis({
    syncTouch: true,
    ...options,
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

  return lenis;
}

export function destroyLenis() {
  lenis.destroy();
  cancelAnimationFrame(animationFrame);
}

export function toggleScroll(enable: boolean) {
  const lenis = getLenisInstance();

  if (enable) {
    lenis.start();
  } else {
    lenis.stop();
  }
}
