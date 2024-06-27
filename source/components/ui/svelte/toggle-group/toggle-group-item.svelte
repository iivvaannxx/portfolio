<script lang="ts">
  import { ToggleGroup as ToggleGroupPrimitive } from "bits-ui";
  import { type ToggleVariants, getToggleGroupCtx } from "./index.js";
  import { cn } from "@app/utils.js";
  import { toggleVariants } from "@app/components/ui/svelte/toggle/index.js";

  type $$Props = ToggleGroupPrimitive.ItemProps & ToggleVariants;

  let className: string | undefined | null = undefined;

  export { className as class };
  export let variant: $$Props["variant"] = "default";
  export let size: $$Props["size"] = "default";
  export let value: $$Props["value"];

  const ctx = getToggleGroupCtx();
</script>

<ToggleGroupPrimitive.Item
  class={cn(
    toggleVariants({
      variant: ctx.variant || variant,
      size: ctx.size || size,
    }),
    className,
  )}
  {value}
  {...$$restProps}
>
  <slot />
</ToggleGroupPrimitive.Item>
