<!-- 
  This component is a grid that not only adjusts responsively
  but it also re-renders the children when it happens.
-->

<script
  lang="ts"
  context="module"
>
  import MediaQuery from "svelte-media-queries";

  // Either specify a fixed size or a set of queries with a size.
  type Size = { rows: number; cols: number };
  type ResponsiveSize = { query: string; size: Size }[];

  /**
   * Check if the size is a normal size or a responsive size.
   *
   * @param size The size to check.
   * @returns Whether the size is a normal size.
   */
  function isNormalSize(size: Size | ResponsiveSize): size is Size {
    return typeof size === "object" && "rows" in size && "cols" in size;
  }
</script>

<script lang="ts">
  export let as: string = "div";
  export let size: Size | ResponsiveSize = { rows: 3, cols: 3 };
  export let defaultSize: Size;
</script>

{#if isNormalSize(size)}
  <svelte:element
    this={as}
    data-grid
    style:--cols={size.cols}
    style:--rows={size.rows}
    {...$$restProps}
  >
    <slot />
  </svelte:element>
{:else}
  <MediaQuery
    query={size.map(({ query }) => query)}
    let:matches
  >
    {@const indexOfFirstMatch = matches.findIndex(Boolean)}
    {@const { size: gridSize = defaultSize } = size[indexOfFirstMatch] ?? {}}

    <svelte:element
      this={as}
      data-responsive-grid
      style:--cols={gridSize.cols}
      style:--rows={gridSize.rows}
      {...$$restProps}
    >
      <slot
        gridRows={gridSize.rows}
        gridCols={gridSize.cols}
      ></slot>
    </svelte:element>
  </MediaQuery>
{/if}

<style>
  [data-grid],
  [data-responsive-grid] {
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    grid-template-rows: repeat(var(--rows), 1fr);
  }
</style>
