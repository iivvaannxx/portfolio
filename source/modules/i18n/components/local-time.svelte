<script
  lang="ts"
  context="module"
>
  import type { Locale } from "../lib/types";
  import { DEFAULT_INTL_OPTIONS, DEFAULT_LOCALE } from "../lib/constants";
</script>

<script lang="ts">
  export let locale: Locale = DEFAULT_LOCALE;
  export let options = DEFAULT_INTL_OPTIONS;
  export let time = Date.now();

  $: formatter = new Intl.DateTimeFormat(locale, options);
  $: formattedTime = formatter.format(time);
  $: parts = formatter.formatToParts(time);
</script>

<slot
  {formattedTime}
  {parts}
>
  <span {...$$restProps}>
    {formattedTime}
  </span>
</slot>
