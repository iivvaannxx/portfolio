<script lang="ts">
  import clsx from "clsx";

  export let tabs: string[] = [];
  export let activeTabIndex = 0;
</script>

<div {...$$restProps}>
  <div
    role="tablist"
    tabindex="0"
    aria-orientation="horizontal"
    class="grid w-full items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
    style:--tab-count={tabs.length}
  >
    {#each tabs as tab, index}
      {@const active = activeTabIndex === index}
      <button
        type="button"
        role="tab"
        tabindex="0"
        class={clsx([
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-2 text-inherit ring-offset-background transition-all",
          "data-[active=true]:bg-background data-[active=true]:text-foreground data-[active=true]:shadow-sm",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ])}
        class:active
        data-active={active}
        aria-selected={active}
        on:click={() => {
          activeTabIndex = index;
        }}
      >
        {tab}
      </button>
    {/each}
  </div>

  <slot active={tabs[activeTabIndex]}>Tab Content Here</slot>
</div>

<style>
  div[role="tablist"] {
    grid-template-columns: repeat(var(--tab-count), minmax(0, 1fr));
  }
</style>
