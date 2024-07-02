<script
  lang="ts"
  context="module"
>
  import { cn } from "@lib/utils/shadcn";
</script>

<script lang="ts">
  export let as: string = "div";
  export let index: number;
</script>

<svelte:element
  this={as}
  {...$$restProps}
  style:--index={index}
  style:--track-progress={0}
  class={cn(
    "timeline-entry grid w-full grid-cols-[20px,1fr] grid-rows-[auto,1fr] items-start justify-start gap-x-2 gap-y-7 sm:gap-x-7 lg:gap-14",
    $$props.class,
  )}
  data-timeline-index={index}
>
  <div class="entry-track mt-4 flex size-full flex-col items-center opacity-20">
    <div class="flex aspect-square items-center justify-center p-3">
      <span class="inline-block size-2 rounded-full bg-foreground lg:size-3"
      ></span>
    </div>
    <div class="relative mt-8 h-full w-[4px] rounded-full bg-muted lg:w-[6px]">
      <div
        class="entry-fill content-empty absolute inset-0 w-full origin-top rounded-full bg-primary"
      ></div>
    </div>
  </div>

  <div class="entry-content opacity-0">
    <slot />
  </div>
</svelte:element>

<style>
  .entry-fill {
    height: calc(var(--track-progress) * 1%);
  }

  .timeline-entry.in .entry-content {
    animation:
      fade-in 300ms ease-out forwards,
      slide-up 300ms ease-out forwards;
  }

  .timeline-entry.out .entry-content {
    animation:
      fade-out 300ms ease-out forwards,
      slide-down 300ms ease-out forwards;
  }

  .timeline-entry.in .entry-track {
    --from-opacity: 0.2;
    animation: fade-in 300ms ease-out forwards;
  }

  .timeline-entry.out .entry-track {
    --to-opacity: 0.2;
    --to-visibility: visible;
    animation: fade-out 300ms ease-out forwards;
  }

  /** 
    Generally we would abstract the keyframes into only 1 set of "keyframes" 
    for both modes (in and out, up and down) using CSS vars. But we need them 
    to be different so the animations trigger again when the classes update.
  */

  @keyframes fade-out {
    from {
      opacity: var(--from-opacity, 1);
    }
    to {
      opacity: var(--to-opacity, 0);
      visibility: var(--to-visibility, hidden);
    }
  }

  @keyframes fade-in {
    from {
      opacity: var(--from-opacity, 0);
    }
    to {
      opacity: var(--to-opacity, 1);
      visibility: var(--to-visibility, visible);
    }
  }

  @keyframes slide-up {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
    }
  }

  @keyframes slide-down {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(50px);
    }
  }
</style>
