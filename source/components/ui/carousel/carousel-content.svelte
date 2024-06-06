<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import { cn } from "@app/utils";
  import { getEmblaContext } from "./context";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  let className: string | undefined | null;
  export { className as class };

  const { orientation, options, plugins, onInit } = getEmblaContext(
    "<Carousel.Content/>",
  );
</script>

<div
  class="overflow-hidden"
  use:emblaCarouselSvelte={{
    options: {
      container: "[data-embla-container]",
      slides: "[data-embla-slide]",
      ...$options,
      axis: $orientation === "horizontal" ? "x" : "y",
    },
    plugins: $plugins,
  }}
  on:emblaInit={onInit}
>
  <div
    class={cn(
      "flex",
      $orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
      className,
    )}
    data-embla-container=""
    {...$$restProps}
  >
    <slot />
  </div>
</div>
