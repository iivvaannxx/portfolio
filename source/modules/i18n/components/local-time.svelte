<script
  lang="ts"
  context="module"
>
  import { defaultLocale } from "../lib/locales";
  import { DEFAULT_INTL_OPTIONS } from "../lib/constants";
</script>

<script lang="ts">
  export let locale = defaultLocale;
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
