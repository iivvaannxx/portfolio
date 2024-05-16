<script>
  import Tabs from "@app/components/tabs/tabs.svelte";
  import { fade } from "svelte/transition";
  const tabNames = ["Languages", "Games", "Web", "Creative", "Others"];
</script>

<Tabs
  tabs={tabNames}
  let:active
  {...$$restProps}
>
  <!-- We can't use dynamic slot names until Svelte 5, so for now we will hardcode them. -->
  {#key active}
    <div
      in:fade={{ duration: 300, delay: 250 }}
      out:fade={{ duration: 200 }}
    >
      {#if active === "Languages"}
        <slot name="languages" />
      {/if}

      {#if active === "Games"}
        <slot name="gamedev" />
      {/if}

      {#if active === "Web"}
        <slot name="webdev" />
      {/if}

      {#if active === "Creative"}
        <slot name="creative" />
      {/if}

      {#if active === "Others"}
        <slot name="others" />
      {/if}
    </div>
  {/key}
</Tabs>
