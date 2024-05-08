<script
  lang="ts"
  context="module"
>
  import { cn } from "@app/lib/helpers/style";
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
    "timeline-entry out grid w-full grid-cols-[100px,1fr] grid-rows-[auto,1fr] items-start justify-start gap-12",
    $$props.class,
  )}
  data-timeline-index={index}
>
  <div class="entry-track mt-4 flex size-full flex-col items-center">
    <div class="flex aspect-square items-center justify-center p-3">
      <span class="inline-block size-3 rounded-full bg-foreground"></span>
    </div>
    <div class="relative mt-8 h-full w-[6px] rounded-full bg-muted">
      <div
        class="entry-fill absolute inset-0 w-full origin-top rounded-full bg-accent content-empty"
      ></div>
    </div>
  </div>

  <div class="entry-content">
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
    }
  }

  @keyframes fade-in {
    from {
      opacity: var(--from-opacity, 0);
    }
    to {
      opacity: var(--to-opacity, 1);
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
