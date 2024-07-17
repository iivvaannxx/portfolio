import justDebounce from "just-debounce-it";

export class ParticleCanvas extends HTMLElement {
  // Custom attributes used to customize the particles inside the canvas.
  static observedAttributes = ["quantity", "color"];

  /** The instance of the rendering worker.  */
  private worker: Worker;

  /** The reference to our canvas. */
  private canvas: HTMLCanvasElement;

  /** The parent element of the canvas. */
  private container: HTMLElement | null = null;

  constructor() {
    super();

    this.canvas = document.createElement("canvas");
    this.attachShadow({ mode: "open" }).appendChild(this.canvas);

    this.style.display = "block";
    this.style.opacity = "0";
    this.canvas.style.display = "block";

    this.worker = new Worker(new URL("./worker.ts", import.meta.url), {
      type: "module",
    });
  }

  /** Callback function that is invoked when the custom element is connected to the DOM. */
  connectedCallback() {
    this.container = this.parentElement;

    const offscreen = this.canvas.transferControlToOffscreen();
    this.worker.postMessage(
      {
        type: "setup",
        canvas: offscreen,
        pixelRatio: window.devicePixelRatio ?? 1,
      },
      [offscreen],
    );

    this.bindResizeEvents();
    this.initialize();
  }

  /** Callback function that is invoked whenever an observed attribute changes. */
  attributeChangedCallback(_name: string, oldValue: string, _newValue: string) {
    // We only trigger a reinitialization if an attribute was not set before (oldValue !== null).
    // Because it will be initialized just after by the 'connectedCallback' above.
    if (oldValue !== null) {
      this.initialize();
    }
  }

  /** Binds the necessary events to handle resizing correctly. */
  bindResizeEvents() {
    // Reinitialize will hapen after 200ms of no resizing events.
    const debounceReinitialize = justDebounce(() => {
      this.initialize();
    }, 200);

    // But we constantly set the flag to true.
    const handleResize = () => {
      this.worker.postMessage({
        type: "on-resize",
      });

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

  /** Initializes (or re-initializes) the particle canvas. */
  initialize() {
    this.resize();
    this.worker.postMessage({
      type: "init",
      quantity: this.getAttribute("quantity") ?? "30",
      color: this.getAttribute("color") ?? "rgb(255, 255, 255)",
    });

    this.style.animation = "fade-in 0.5s forwards";
  }

  /** Resizes the particle canvas based on the container's dimensions or the window dimensions. */
  resize() {
    // Grab the container's width and height if it exists. Otherwise the window dimensions.
    const [offsetWidth, offsetHeight] = this.container
      ? [this.container.offsetWidth, this.container.offsetHeight]
      : [window.innerWidth, window.innerHeight];

    this.style.width = `${offsetWidth}px`;
    this.style.height = `${offsetHeight}px`;
    this.canvas.style.width = `${offsetWidth}px`;
    this.canvas.style.height = `${offsetHeight}px`;

    this.worker.postMessage({
      type: "resize",
      width: offsetWidth,
      height: offsetHeight,
    });
  }

  /** Callback function that is invoked when the custom element is disconnected from the DOM. */
  disconnectedCallback() {
    this.worker.terminate();
  }
}
