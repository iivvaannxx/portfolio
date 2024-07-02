<script
  lang="ts"
  context="module"
>
  import { typewriter } from "@app/lib/actions/typewriter";
  import { type DelayPhase } from "@app/lib/effects/typewriter";
</script>

<script lang="ts">
  export let as: keyof HTMLElementTagNameMap = "p";
  export let words: string[];
  export let loop = false;
  export let startWithFirstWord = false;
  export let delays: Partial<Record<DelayPhase, number>> = {};

  let state = "on-before-start";

  let currentText = "";
  let currentWord = "";
</script>

<svelte:element
  this={as}
  style:display="inline-flex"
  style:align-items="center"
  {...$$restProps}
>
  <span
    data-typewriter-target
    use:typewriter={{ words, loop, delays, startWithFirstWord }}
    on:typewriter-textchange={(event) => {
      currentText = event.detail.text;
    }}
    on:typewriter-statechange={(event) => {
      state = event.detail.state;

      if (state === "on-display") {
        currentWord = currentText;
      }
    }}>{startWithFirstWord ? words[0] : ""}</span
  >

  <span
    data-cursor
    style:--caret-width="3px"
    style:--caret-animation-interval="1000ms"
    class:expand={state !== "on-type" &&
      state !== "on-erase" &&
      state !== "on-end"}
    class:expand-end={state === "on-end"}
    class="relative bottom-px bg-foreground/70"
  >
  </span>
</svelte:element>

<style>
  span[data-typewriter-target]:empty::before {
    /* Add a zero-width-space to prevent collapsing. */
    content: "\200b";
  }

  span[data-cursor] {
    display: inline-block;
    line-height: 0;

    width: var(--caret-width);
    align-self: stretch;
    transform-origin: center center;
  }

  .expand {
    animation: expand var(--caret-animation-interval) ease-in-out infinite;
  }

  .expand-end {
    animation: expand-end var(--caret-animation-interval) ease-in-out forwards;
  }

  @keyframes expand {
    10% {
      transform: scaleY(1);
    }
    40% {
      transform: scaleY(0);
    }
    60% {
      transform: scaleY(0);
    }
    90% {
      transform: scaleY(1);
    }
  }

  @keyframes expand-end {
    0% {
      transform: scaleY(1);
    }
    40%,
    100% {
      transform: scaleY(0);
    }
  }
</style>
