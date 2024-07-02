import { sleep } from "@lib/utils/promises";

/** The possible states of the typewriter. */
export type TypewriterState =
  | "on-before-start"
  | "on-type"
  | "on-erase"
  | "on-pause"
  | "on-display"
  | "on-before-end"
  | "on-end";

// The events fired by the typewriter.
export type TypewriterChangeEvent<T> = (newValue: T, oldValue: T) => void;
export type TypewriterTextChangeEvent = TypewriterChangeEvent<string>;
export type TypewriterStateChangeEvent = TypewriterChangeEvent<TypewriterState>;
export type DelayPhase =
  | "start"
  | "dispose"
  | "type"
  | "erase"
  | "display"
  | "pause";

/** The configuration parameters for the typewriter effect. */
export interface TypewriterParams {
  /** The array of words to be typed out by the typewriter effect. */
  words: string[];

  /** Whether or not the typewriter effect should start with the first word already typed. */
  startWithFirstWord?: boolean;

  /** Whether or not the typewriter effect should loop. */
  loop?: boolean;

  /** Delays for the typewriter effect. */
  delays?: Partial<Record<DelayPhase, number>>;

  /** Callback function to be called when the text changes. */
  onTextChange?: TypewriterTextChangeEvent;

  /** Callback function to be called when the state changes. */
  onStateChange?: TypewriterStateChangeEvent;
}

/** Simulates a typewriter effect by typing and erasing text. */
export class Typewriter {
  /** The array of texts to be typed. */
  private readonly texts: string[];

  /** Whether the typewriter should loop through the texts or not. */
  private readonly loop: boolean;

  /** The delays for each typewriter effect. */
  private readonly delays: Record<DelayPhase, number>;

  /** The callback function to be called when the text changes. */
  private readonly onTextChange?: TypewriterTextChangeEvent;

  /** The callback function to be called when the state changes. */
  private readonly onStateChange?: TypewriterStateChangeEvent;

  /** The current text being typed. */
  private currentText: string;

  /** The current state of the typewriter. */
  private currentState: TypewriterState;

  /**
   * Creates a new Typewriter instance.
   * @param params The configuration parameters for the typewriter effect.
   */
  public constructor({
    words,
    loop,
    startWithFirstWord = false,
    delays,
    onTextChange,
    onStateChange,
  }: TypewriterParams) {
    // Ensure defaults
    this.loop = loop ?? false;
    this.delays = {
      start: 0,
      dispose: 0,
      type: 100,
      erase: 50,
      display: 2000,
      pause: 1000,

      ...delays,
    };

    this.texts = words;
    this.currentText = startWithFirstWord ? words[0] : "";
    this.currentState = "on-before-start";

    this.onTextChange = onTextChange;
    this.onStateChange = onStateChange;
  }

  /** Starts the typewriter effect. */
  public async start() {
    if (this.texts.length === 0) {
      throw new Error("Cannot start a typewriter without words.");
    }

    await sleep(this.delays.start);

    do {
      let current = 0;

      for (const word of this.texts) {
        // Shouldn't type if there's text already.
        if (this.currentText.length === 0) {
          await this.type(word);
        }

        // Clear only if it's not the last word or if the loop is enabled.
        if (++current < this.texts.length || this.loop) {
          await sleep(this.delays.display);
          await this.erase(word);
          await sleep(this.delays.pause);
        }
      }
    } while (this.loop);

    this.state = "on-before-end";
    await sleep(this.delays.dispose);

    this.state = "on-end";
  }

  /**
   * Types a word.
   * @param word The word to be typed.
   */
  private async type(word: string) {
    this.state = "on-type";

    for (const char of word) {
      this.text += char;
      await sleep(this.delays.type);
    }

    this.state = "on-display";
  }

  /**
   * Erases a word.
   * @param word The word to be erased.
   */
  private async erase(word: string) {
    this.state = "on-erase";

    for (let i = 0; i < word.length; ++i) {
      this.text = this.currentText.slice(0, -1);
      await sleep(this.delays.erase);
    }

    this.state = "on-pause";
  }

  /** Gets the current state of the typewriter. */
  public get state() {
    return this.currentState;
  }

  /**
   * Sets the current state of the typewriter.
   * @param state The new state of the typewriter.
   */
  public set state(state: TypewriterState) {
    const oldState = this.state;
    this.currentState = state;

    this.onStateChange?.(state, oldState);
  }

  /** Gets the current text. */
  public get text() {
    return this.currentText;
  }

  /**
   * Sets the current text.
   * @param text The new value of the current text.
   */
  public set text(text: string) {
    const oldText = this.text;
    this.currentText = text;

    this.onTextChange?.(text, oldText);
  }
}
