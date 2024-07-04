<!-- Inspired by https://www.framer.community/c/tutorials/how-to-create-animated-timeline-in-framer -->

<script
  lang="ts"
  context="module"
>
  import { onMount } from "svelte";
  import { cn } from "@lib/utils/shadcn";

  /**
   * Retrieves the progress of the CSS timeline "grow" animation.
   *
   * @param growAnimation A reference to the CSS "grow" animation of the timeline.
   * @returns The progress of the animation, between 0 and 100.
   */
  function getTimelineProgress(growAnimation: CSSAnimation) {
    // If the progress is not available, we arbitrarily consider it
    // finished to avoid potential problems with dependent values.
    return (growAnimation.effect?.getComputedTiming().progress ?? 1) * 100;
  }

  /**
   * Remaps the timeline progress based on the index and item count.
   *
   * @param progress The current progress of the timeline.
   * @param index The index of the current item in the timeline.
   * @param itemCount The total number of items in the timeline.
   * @returns The remapped progress value.
   */
  function remapTimelineProgress(
    progress: number,
    index: number,
    itemCount: number,
  ) {
    const entryRange = 100 / itemCount;
    const startRange = (index - 1) * entryRange;
    const endRange = startRange + entryRange;

    if (progress < startRange) {
      return 0;
    }

    if (progress > endRange) {
      return 100;
    }

    return ((progress - startRange) / entryRange) * 100;
  }

  /**
   * Returns the CSSAnimation object representing the "grow" animation of the given element.
   *
   * @param element The element to retrieve the animation from.
   * @returns The CSSAnimation object representing the "grow" animation, or null if not found.
   */
  function getGrowAnimation(element: HTMLElement) {
    // Workaround for the below code that doesn't work on Safari
    // due to the polyfill for "CSS Scroll Driven animations".
    // The polyfill makes "anim instanceof CSSAnimation" return false.
    // Ideally, we would use the commented code below, but it won't work on Safari.
    // This code is a workaround that assumes the first animation is our "grow" animation.
    return element.getAnimations()[0] as CSSAnimation;

    /* 
      return element.getAnimations().find((anim) => {
        if (anim instanceof CSSAnimation) {
          // We use includes because svelte attaches a random hash to the animation name.
          return anim.animationName.includes("grow");
        }

        return false;
      }) as CSSAnimation; 
    */
  }
</script>

<script lang="ts">
  export let as: string = "div";
  export let itemCount: number;

  let element: HTMLElement;

  // Future Note: This can work with new CSS features without JavaScript.
  // But it needs some new features that are still not supported in all browsers.
  // Reminder: I almost made it work, I have a screenshot of the partial working solution.
  // Refer back to it when the time comes.
  onMount(() => {
    const growAnimation = getGrowAnimation(element);
    const progressVar = "--track-progress";

    const childs = [
      ...element.getElementsByClassName("timeline-entry"),
    ] as HTMLElement[];

    let frame = requestAnimationFrame(updateTimeline);
    let lastProgress = 0;

    function updateTimeline() {
      const progress = getTimelineProgress(growAnimation);

      if (progress === lastProgress) {
        frame = requestAnimationFrame(updateTimeline);
        return;
      }

      for (const child of childs) {
        const index = Number(child.dataset.timelineIndex);
        const trackProgress = remapTimelineProgress(progress, index, itemCount);

        const prevProgress = Number(child.style.getPropertyValue(progressVar));
        child.style.setProperty(progressVar, `${trackProgress}`);

        if (prevProgress === 0 && trackProgress > 0) {
          child.classList.remove("out");
          child.classList.add("in");
        }

        if (prevProgress > 0 && trackProgress === 0) {
          child.classList.remove("in");
          child.classList.add("out");
        }
      }

      frame = requestAnimationFrame(updateTimeline);
      lastProgress = progress;
    }

    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<svelte:element
  this={as}
  {...$$restProps}
  style:--timeline-progress="0"
  class={cn(
    "timeline flex h-fit flex-col items-center justify-center gap-8",
    $$props.class,
  )}
  bind:this={element}
  data-timeline-items={itemCount}
>
  <slot />
</svelte:element>

<style>
  @property --timeline-progress {
    syntax: "<number>";
    inherits: true;

    initial-value: 0;
  }

  @keyframes grow {
    from {
      --timeline-progress: 0;
    }
    to {
      --timeline-progress: 1;
    }
  }

  .timeline {
    --timeline-progress: 0;

    animation: grow linear both;
    animation-timeline: view();
    animation-range: entry 30% exit 50%;
  }
</style>
