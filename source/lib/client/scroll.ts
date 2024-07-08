import Lenis, { type LenisOptions } from "lenis";

let lenis: Lenis | null = null;
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
    // syncTouch: true,
    ...options,
  });

  /**
   * The loop used by Lenis to smooth the scrollbar.
   * @param time - The current timestamp provided by `requestAnimationFrame`.
   */
  function lenisRaf(time: number) {
    lenis?.raf(time);
    animationFrame = requestAnimationFrame(lenisRaf);
  }

  // This is a bit hacky but is the best I could come up.
  // Because not all links are mounted on the DOM when the Lenis
  // instance is created, we can't bind click listeners to them upon load.
  // So instead we expose this function and we inline it in the HTML onclick attribute.
  // See: https://github.com/darkroomengineering/lenis?tab=readme-ov-file#anchor-links

  window.lenisScrollTo = lenisScrollTo;
  animationFrame = requestAnimationFrame(lenisRaf);

  return lenis;
}

/** Destroys the current lenis instance and cancels the animation frame. */
export function destroyLenis() {
  lenis?.destroy();
  cancelAnimationFrame(animationFrame);

  lenis = null;
}

/**
 * Toggles the smooth scrolling effect.
 * @param enable - Whether to enable or disable the smooth scrolling effect.
 */
export function toggleScroll(enable: boolean) {
  const lenis = getLenisInstance();

  if (enable) {
    lenis?.start();
  } else {
    lenis?.stop();
  }
}

/**
 * Scrolls to the specified target element using the Lenis library.
 *
 * @param target - The target element to scroll to.
 * @param event - Optional event object to prevent the default behavior.
 */
export function lenisScrollTo(target: string, event?: Event) {
  const lenis = getLenisInstance();

  // Optional event to prevent the default behavior.
  // This is used for inlined onclick events.
  event?.preventDefault();
  history.pushState(null, "", target);

  if (lenis) {
    let stoppedProps = {};

    if (lenis.isStopped) {
      stoppedProps = {
        lock: true,
        force: true,
      };
    }

    lenis.scrollTo(target, {
      duration: 1.5,
      offset: -100,
      ...stoppedProps,
    });
  }
}

/** Scrolls to the top of the page. */
export function scrollToTop() {
  const lenis = getLenisInstance();
  lenis?.scrollTo(0, {
    lock: true,
  });
}
