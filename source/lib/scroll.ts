import Lenis from "lenis";

let lenis: Lenis;

export function getLenisInstance() {
  if (lenis) {
    return lenis;
  }

  if (typeof window !== "undefined") {
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
    return lenis;
  }
}

export function toggleScroll(allowScroll: boolean) {
  if (typeof window === "undefined" || !lenis) {
    return;
  }

  if (allowScroll) {
    lenis.start();
  } else {
    lenis.stop();
  }
}
