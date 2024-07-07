<script
  lang="ts"
  context="module"
>
  import type { HTMLButtonAttributes } from "svelte/elements";

  import { Button } from "@components/ui/svelte";
  import { scrollToTop } from "@lib/client/scroll";
</script>

<script lang="ts">
  type $$Props = HTMLButtonAttributes;

  function handleClick(this: HTMLButtonElement) {
    this.blur();
    scrollToTop();
  }
</script>

<Button
  variant="outline"
  on:click={handleClick}
  {...$$restProps}
>
  <slot />
</Button>
