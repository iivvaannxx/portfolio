import type { ActionReturn } from "svelte/action";
import {
  Typewriter,
  type TypewriterState,
  type TypewriterParams,
} from "../effects/typewriter";

// Custom event handlers for the typewriter effect.
interface TypewriterAttributes {
  "on:typewriter-textchange"?: (
    e: CustomEvent<{ text: string; oldText: string }>,
  ) => void;

  "on:typewriter-statechange"?: (
    e: CustomEvent<{ state: TypewriterState; oldState: TypewriterState }>,
  ) => void;
}

// The configuration for the typewriter action.
type TypewriterConfig = Omit<
  TypewriterParams,
  "onTextChange" | "onStateChange"
>;

/**
 * Creates a typewriter effect on the given HTML element with the provided configuration.
 * @param node - The HTML element to apply the typewriter effect on.
 * @param params - The configuration for the typewriter effect.
 */

export function typewriter(
  node: HTMLElement,
  params: TypewriterConfig,
): ActionReturn<TypewriterConfig, TypewriterAttributes> {
  // On text change, update the node's text content and dispatch a textchange event
  const onTextChange = (text: string, oldText: string) => {
    node.innerText = text;
    node.dispatchEvent(
      new CustomEvent("typewriter-textchange", { detail: { text, oldText } }),
    );
  };

  // On state change, update the node's state attribute and dispatch a statechange event
  const onStateChange = (state: TypewriterState, oldState: TypewriterState) => {
    node.setAttribute("data-typewriter-state", state);
    node.dispatchEvent(
      new CustomEvent("typewriter-statechange", {
        detail: { state, oldState },
      }),
    );
  };

  // Create the typewriter instance.
  const typewriter = new Typewriter({ ...params, onTextChange, onStateChange });
  typewriter.start().catch(console.error);

  return {
    // The typewriter effect does not have any cleanup nor update logic because it doesn't fit my use case.
    // Should be implemented if ever needed.
    // update: (params: TypewriterConfig) => { },
    // destroy: () => { }
  };
}
