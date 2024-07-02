import { randomInRange } from "../math/random";

/**
 * Retrieves the confetti module asynchronously.
 * @returns A promise that resolves to the confetti module.
 */
async function getConfettiModule() {
  const { default: confetti } = await import("canvas-confetti");
  return confetti;
}

/**
 * Creates a fireworks effect using confetti particles.
 *
 * @param duration The duration of the fireworks effect in milliseconds. Default is 5000ms.
 * @param interval The interval between each confetti burst in milliseconds. Default is 250ms.
 * @returns A function that can be called to stop the fireworks effect.
 */
export async function fireworks(duration = 5, interval = 250) {
  const confetti = await getConfettiModule();
  const millis = duration * 1000;
  const animationEnd = Date.now() + millis;

  const defaults: confetti.Options = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 100,
    disableForReducedMotion: true,
  };

  const intervalHandle = setInterval(function () {
    const timeLeft = animationEnd - Date.now();
    const particleCount = 30 * (timeLeft / millis);

    if (timeLeft <= 0) {
      clearInterval(intervalHandle);
      return;
    }

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, interval);

  return () => clearInterval(intervalHandle);
}
