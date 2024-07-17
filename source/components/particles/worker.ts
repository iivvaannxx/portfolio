// Typescript Aliases seem not to work in workers (at least on build).
import { randomInRange, randomRangeInt } from "../../lib/utils/random";
import { remapRange } from "../../lib/utils/math";

interface Particle {
  position: [number, number];
  speed: [number, number];
  size: number;
  alpha: number;
  targetAlpha: number;
}

let particles: Particle[] = [];
let canvasSize: [number, number] = [0, 0];
let quantity = 30;
let color = "rgb(255, 255, 255)";

let canvas: OffscreenCanvas;
let ctx: OffscreenCanvasRenderingContext2D;
let pixelRatio = 1;
let lastTime = now();
let isResizing = false;
let frame: number;

const DEFAULT_SIZE_RANGE = [0.5, 2] as const;
const DEFAULT_ALPHA_RANGE = [0.2, 0.7] as const;
const DEFAULT_SPEED_RANGE = [-10, 10] as const;
const ALPHA_INCREMENT = 0.1;

/**
 * Returns the current timestamp in milliseconds.
 * If the browser supports the Performance API, it uses `performance.now()`.
 * Otherwise, it falls back to `Date.now()`.
 *
 * @returns The current timestamp in milliseconds.
 */
function now() {
  return "performance" in self ? performance.now() : Date.now();
}

/**
 * Creates a new random particle.
 * @returns The newly created particle.
 */
function createParticle(): Particle {
  return {
    position: [
      randomRangeInt(0, canvasSize[0]),
      randomRangeInt(0, canvasSize[1]),
    ],
    speed: [
      randomInRange(...DEFAULT_SPEED_RANGE),
      randomInRange(...DEFAULT_SPEED_RANGE),
    ],
    targetAlpha: randomInRange(...DEFAULT_ALPHA_RANGE),
    size: randomRangeInt(...DEFAULT_SIZE_RANGE),
    alpha: 0,
  };
}

/**
 * Checks if a particle is out of bounds in the canvas.
 * @param particle - The particle to check.
 */
function isParticleOutOfBounds({ position, size }: Particle): boolean {
  const [x, y] = position;
  const isHorizontallyOut = x < -size || x > canvasSize[0] + size;
  const isVerticallyOut = y < -size || y > canvasSize[1] + size;

  return isHorizontallyOut || isVerticallyOut;
}

/**
 * Handles the update and rendering of the particles.
 * @param delta - The time in milliseconds since the last frame.
 */
function updateAndRenderParticles(delta: number) {
  ctx.clearRect(0, 0, canvasSize[0], canvasSize[1]);
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  particles = particles.map((particle, i) => {
    if (isResizing) {
      // Decrease the alpha.
      particle.alpha -= ALPHA_INCREMENT * 2 * delta;

      if (particle.alpha <= 0) {
        return createParticle();
      }
    }

    const [x, y] = particle.position;
    const edgeDistances = [
      // Distance from left and right edges.
      x - particle.size,
      canvasSize[0] - x - particle.size,

      // Distance from top and bottom edges.
      y - particle.size,
      canvasSize[1] - y - particle.size,
    ];

    const closestDistance = remapRange(
      Math.min(...edgeDistances),
      [0, 20],
      [0, 1],
    );

    const normalizedDistance = Number(Math.max(closestDistance, 0).toFixed(2));

    // We increase the alpha as we get away from the 'closest' edge.
    if (normalizedDistance > 1) {
      particle.alpha += ALPHA_INCREMENT * delta;
      particle.alpha = Math.min(particle.alpha, particle.targetAlpha);
    }

    // We decrease the alpha as we get closer to the 'closest' edge.
    else {
      particle.alpha = particle.targetAlpha * normalizedDistance;
    }

    // Move the particle.
    const [speedX, speedY] = particle.speed;
    particle.position[0] += speedX * delta;
    particle.position[1] += speedY * delta;

    // Update alpha
    if (particle.alpha < particle.targetAlpha) {
      particle.alpha += ALPHA_INCREMENT * delta;
      particle.alpha = Math.min(particle.alpha, particle.targetAlpha);
    }

    // Check if particle is out of bounds
    if (isParticleOutOfBounds(particle)) {
      return createParticle();
    }

    // Render particle
    drawParticle(particle);
    return particle;
  });
}

/**
 * Draws a particle on the canvas.
 * @param particle - The particle to be drawn.
 */
function drawParticle(particle: Particle) {
  const [x, y] = particle.position;
  ctx.beginPath();

  const prevAlpha = ctx.globalAlpha;
  ctx.arc(x, y, particle.size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.globalAlpha = particle.alpha;

  ctx.fill();
  ctx.globalAlpha = prevAlpha;
}

/**
 * Handles the initialization of the canvas animation.
 * This is called every time the canvas is resized or when an attribute changes.
 *
 * @param event - The message event containing the necessary data for initialization.
 */
function initialize(event: MessageEvent) {
  // Initialize the necessary variables.
  canvasSize = [canvas.width, canvas.height];
  quantity = parseInt(event.data.quantity);
  color = event.data.color;
  particles = Array.from({ length: quantity }, createParticle);

  // Initialize the canvas context.
  ctx.canvas.width = canvasSize[0];
  ctx.canvas.height = canvasSize[1];
  ctx.scale(pixelRatio, pixelRatio);

  if (frame) {
    cancelAnimationFrame(frame);
  }

  animate();
}

/**
 * Checks if a particle is out of bounds in the canvas.
 * @param particle - The particle to check.
 */
function afterResize(event: MessageEvent) {
  isResizing = false;

  canvasSize = [event.data.width, event.data.height];
  canvas.width = canvasSize[0] * pixelRatio;
  canvas.height = canvasSize[1] * pixelRatio;
}

/** Handler only invoked during the resize. */
function onResize() {
  isResizing = true;
}

/**
 * Handles the setup of the worker. This is only called once.
 * @param event - The message event containing the necessary data for setup.
 */
function setup(event: MessageEvent) {
  canvas = event.data.canvas;
  ctx = canvas.getContext("2d")!;

  pixelRatio = event.data.pixelRatio;
  ctx.scale(pixelRatio, pixelRatio);
}

/** The render loop. */
function animate() {
  const currentTime = now();
  const delta = (currentTime - lastTime) / 1000;
  lastTime = currentTime;

  updateAndRenderParticles(delta);
  frame = requestAnimationFrame(animate);
}

lastTime = now();
self.onmessage = (event: MessageEvent) => {
  const eventHandlers = {
    "setup": setup,
    "init": initialize,

    "on-resize": onResize,
    "resize": afterResize,
  };

  // Handle the event based on its type.
  const type = event.data.type as keyof typeof eventHandlers;
  const handler = eventHandlers[type];

  handler(event);
};
