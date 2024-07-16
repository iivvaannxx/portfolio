<script
  lang="ts"
  context="module"
>
  import { formatTimeDifference, getTimeDifference } from "../lib/utils/time";
  import type { Locale, UserTimezone } from "../lib/types";
  import { DEFAULT_LOCALE } from "../lib/constants";
</script>

<script lang="ts">
  export let locale: Locale = DEFAULT_LOCALE;
  export let timezoneA: UserTimezone;
  export let timezoneB: UserTimezone;

  $: timeDiff = getTimeDifference(timezoneA, timezoneB);
  $: formattedTimeDiff = formatTimeDifference(timeDiff, locale);
</script>

<slot
  {timeDiff}
  {formattedTimeDiff}
>
  <span {...$$restProps}>
    {formattedTimeDiff}
  </span>
</slot>
