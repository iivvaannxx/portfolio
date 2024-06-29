<script
  lang="ts"
  context="module"
>
  import type { Locale } from "../lib/types";
  import { DEFAULT_INTL_OPTIONS, DEFAULT_LOCALE } from "../lib/constants";

  import LocalTime from "./local-time.svelte";

  /** The rate at which we update the time, in ms (each second). */
  const INTERVAL = 1000;
</script>

<script lang="ts">
  export let locale: Locale = DEFAULT_LOCALE;
  export let options = DEFAULT_INTL_OPTIONS;

  let currentTime = Date.now();
  let intervalHandle: number;

  $: {
    clearInterval(intervalHandle);
    intervalHandle = setInterval(() => {
      currentTime = Date.now();
    }, INTERVAL);
  }
</script>

<LocalTime
  {locale}
  {options}
  time={currentTime}
  let:formattedTime
  let:parts
>
  <slot
    {formattedTime}
    {parts}
    {currentTime}
  >
    <span {...$$restProps}>
      {formattedTime}
    </span>
  </slot>
</LocalTime>
