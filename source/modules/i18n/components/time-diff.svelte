<script
  lang="ts"
  context="module"
>
  import { formatTimeDifference, getTimeDifference } from "../lib/utils/time";
  import type { UserTimezone } from "../lib/types";
</script>

<script lang="ts">
  export let timezoneA: UserTimezone;
  export let timezoneB: UserTimezone;

  $: timeDiff = getTimeDifference(timezoneA, timezoneB);
  $: formattedTimeDiff = formatTimeDifference(timeDiff);
</script>

<slot
  {timeDiff}
  {formattedTimeDiff}
>
  <span {...$$restProps}>
    {formattedTimeDiff}
  </span>
</slot>
