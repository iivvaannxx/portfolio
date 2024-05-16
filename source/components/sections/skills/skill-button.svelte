<script lang="ts">
  /* The only purpose of this wrapper is to facilitate attaching the events. */
  /* With normal astro components we need way too much boilerplate code */

  export let name: string;

  function dispatch() {
    document.dispatchEvent(
      new CustomEvent("skill:show", { detail: { skillName: name } }),
    );
  }
</script>

<button on:click={dispatch}>
  <slot />
</button>
