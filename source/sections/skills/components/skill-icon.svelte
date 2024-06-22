<script lang="ts">
  export let name: string;
</script>

<svg
  width="1em"
  height="1em"
  {...$$restProps}
>
  <use href={`#${name}`}></use>
</svg>
