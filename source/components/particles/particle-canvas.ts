import justDebounce from "just-debounce-it";
import { randomInRange, randomRangeInt } from "@lib/utils/random";

const DEFAULT_PARTICLE_QUANTITY = 30 as const;

// Default constant values for the particle attributes.
const DEFAULT_SIZE_RANGE = [0.5, 2] as const;
const DEFAULT_ALPHA_RANGE = [0.2, 0.7] as const;
const DEFAULT_SPEED_RANGE = [-10, 10] as const;
const ALPHA_INCREMENT = 0.1 as const;

/** Represents the data used by the particle canvas. */
export interface ParticleCanvas {
  container: HTMLElement | null;
  context: CanvasRenderingContext2D;
  pixelRatio: number;

  canvasSize: [number, number];
  particles: Particle[];
  quantity: number;
  color: string;
}

/** Defines the attributes of a particle. */
export interface Particle {
  position: [number, number];
  speed: [number, number];
  size: number;
  alpha: number;
  targetAlpha: number;
}

// See: https://github.com/microsoft/TypeScript/issues/340#issuecomment-184964440
export class ParticleCanvas extends HTMLElement implements ParticleCanvas {
  // Custom attributes used to customize the particles inside the canvas.
  static observedAttributes = ["quantity", "color"];

  // Save the previous time to calculate the delta.
  private previousTime = Date.now();

  /** Flag set when we are on a series of resizing events. */
  private onResizing = false;

  /** The parent element of the canvas. */
  public shadowRoot: ShadowRoot;

  /** The reference to our canvas. */
  private canvas: HTMLCanvasElement;

  constructor() {
    super();

    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.canvas = document.createElement("canvas");

    this.shadowRoot.appendChild(this.canvas);
    this.style.display = "block";
    this.style.opacity = "0";
    this.canvas.style.display = "block";
  }

  /** Callback function that is invoked when the custom element is connected to the DOM. */
  connectedCallback() {
    this.container = this.parentElement;
    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;

    this.bindEvents();
    this.initialize();
  }

  /** Callback function that is invoked whenever an observed attribute changes. */
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "quantity") {
      this.quantity = Number(newValue) || DEFAULT_PARTICLE_QUANTITY;
    }

    if (name === "color") {
      this.color = newValue;
    }

    // We only trigger a reinitialization if an attribute was not set before.
    // Because it will be initialized just after by the 'connectedCallback' above.
    if (oldValue !== null) {
      this.initialize();
    }
  }

  /** Initializes the particle canvas. */
  initialize() {
    // Perform an initial resize to set everything up.
    this.resize();

    this.quantity ??= DEFAULT_PARTICLE_QUANTITY;
    this.color ??= "rgb(255, 255, 255)";
    this.particles = [];

    for (let i = 0; i < this.quantity; i++) {
      const newParticle = this.createParticle();
      this.drawParticle(newParticle);
    }

    this.style.animation = "fade-in 0.5s forwards";
    this.render();
  }

  /**
   * Creates a new random particle and adds it to the particle array.
   * @returns The newly created particle.
   */

  createParticle() {
    const [width, height] = this.canvasSize;
    const particle: Particle = {
      position: [randomRangeInt(0, width), randomRangeInt(0, height)],
      speed: [
        randomInRange(...DEFAULT_SPEED_RANGE),
        randomInRange(...DEFAULT_SPEED_RANGE),
      ],

      targetAlpha: randomInRange(...DEFAULT_ALPHA_RANGE),
      size: randomRangeInt(...DEFAULT_SIZE_RANGE),
      alpha: 0,
    };

    this.particles.push(particle);
    return particle;
  }

  /**
   * Draws a particle on the canvas.
   * @param particle - The particle to be drawn.
   */

  drawParticle(particle: Particle) {
    const [x, y] = particle.position;
    this.context.beginPath();

    const prevAlpha = this.context.globalAlpha;
    this.context.arc(x, y, particle.size, 0, 2 * Math.PI);
    this.context.fillStyle = this.color;
    this.context.globalAlpha = particle.alpha;

    this.context.fill();
    this.context.globalAlpha = prevAlpha;
  }

  /**
   * Runs the update logic for the particles.
   * @param delta - The delta time between frames.
   */

  onUpdate(delta: number) {
    const [width, height] = this.canvasSize;
    const removeParticles = new Set<number>();

    this.particles.forEach((particle, i) => {
      if (this.onResizing) {
        // Decrease the alpha.
        particle.alpha -= ALPHA_INCREMENT * 2 * delta;
        if (particle.alpha <= 0) {
          removeParticles.add(i);
        }

        this.drawParticle(particle);
      } else {
        const [x, y] = particle.position;
        const edgeDistances = [
          // Distance form left and right edges.
          x - particle.size,
          width - x - particle.size,

          // Distance from top and bottom edges.
          y - particle.size,
          height - y - particle.size,
        ];

        const closestDistance = this.remapValue(
          Math.min(...edgeDistances),
          [0, 20],
          [0, 1],
        );
        const normalizedDistance = Number(
          Math.max(closestDistance, 0).toFixed(2),
        );

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

        if (this.isParticleOutOfBounds(particle)) {
          // Schedule the particle for removal.
          removeParticles.add(i);

          const newParticle = this.createParticle();
          this.drawParticle(newParticle);
        } else {
          // Draw the particle.
          this.drawParticle(particle);
        }
      }
    });

    // Remove all the particles that were scheduled for removal.
    removeParticles.forEach((index) => {
      this.particles.splice(index, 1);
    });
  }

  /**
   * Checks if a particle is out of bounds in the canvas.
   * @param particle - The particle to check.
   */

  isParticleOutOfBounds({ position, size }: Particle) {
    const [x, y] = position;
    const isHorizontallyOut = x < -size || x > this.canvas.width + size;
    const isVerticallyOut = y < -size || y > this.canvas.height + size;

    return isHorizontallyOut || isVerticallyOut;
  }

  /**
   * Remaps a value from one range to another range.
   *
   * @param value - The value to be remapped.
   * @param from - The range of the original value.
   * @param to - The range to remap the value to.
   */

  remapValue(value: number, from: [number, number], to: [number, number]) {
    const [fromMin, fromMax] = from;
    const [toMin, toMax] = to;

    return ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin) + toMin;
  }

  /** The main render loop. */
  render() {
    const now = Date.now();

    // Calculate the delta time between frames.
    const delta = (now - this.previousTime) / 1000;
    this.previousTime = now;

    this.context.clearRect(0, 0, ...this.canvasSize);
    this.context.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);

    this.onUpdate(delta);

    // Use an arrow function to preserve the `this` context.
    requestAnimationFrame(() => {
      this.render();
    });
  }

  /** Resizes the particle canvas based on the container's dimensions or the window dimensions. */
  resize() {
    // Grab the container's width and height if it exists. Otherwise the window dimensions.
    const [offsetWidth, offsetHeight] = this.container
      ? [this.container.offsetWidth, this.container.offsetHeight]
      : [window.innerWidth, window.innerHeight];

    this.pixelRatio = window.devicePixelRatio || 1;
    this.canvasSize = [offsetWidth, offsetHeight];
    this.canvas.width = offsetWidth * this.pixelRatio;
    this.canvas.height = offsetHeight * this.pixelRatio;

    this.style.width = `${this.canvasSize[0]}px`;
    this.style.height = `${this.canvasSize[1]}px`;
    this.canvas.style.width = `${this.canvasSize[0]}px`;
    this.canvas.style.height = `${this.canvasSize[1]}px`;

    this.context.scale(this.pixelRatio, this.pixelRatio);
  }

  /** Binds the necessary  */
  bindEvents() {
    // Reinitialize will hapen after 200ms of no resizing events.
    const debounceReinitialize = justDebounce(() => {
      this.onResizing = false;
      this.initialize();
    }, 200);

    // But we constantly set the flag to true.
    const handleResize = () => {
      this.onResizing = true;
      debounceReinitialize();
    };

    // The element has a parent container.
    if (this.container) {
      const observer = new ResizeObserver(handleResize);
      observer.observe(this.container);
    } else {
      // Listen for resize events on the window.
      window.addEventListener("resize", handleResize);
    }

    // Orientation change are handled always the same .
    window.addEventListener("orientationchange", handleResize);
  }
}
