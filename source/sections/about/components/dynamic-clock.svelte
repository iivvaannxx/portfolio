<script
  lang="ts"
  context="module"
>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import { cn } from "@app/utils";
  import { MY_TIMEZONE } from "@modules/i18n";

  // Formatter which writes hours in range 1-12 for my time.
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: true,

    timeZone: MY_TIMEZONE,
  });

  /**
   * Returns the current hour in a 12-hour format,
   * regardless of whether it's AM or PM.
   *
   * @returns The current hour between 1-12.
   */
  function getCurrentHourNormalized() {
    const now = new Date();

    // This gives us a number between 1-12.
    // Of our time, no matter if it's AM or PM.
    const time = formatter.format(now);
    const [currentHour, _] = time.split(" ");

    return parseInt(currentHour);
  }
</script>

<script lang="ts">
  let currentHour = getCurrentHourNormalized();
  $: currentClock = `/images/emojis/clocks/clock-${currentHour}.webp`;

  onMount(() => {
    // Update every second.
    const interval = window.setInterval(() => {
      currentHour = getCurrentHourNormalized();
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  });
</script>

<div
  {...$$restProps}
  class={cn("relative", $$props.class)}
>
  {#key currentClock}
    <img
      in:fade={{ duration: 200, delay: 250 }}
      out:fade={{ duration: 200 }}
      src={currentClock}
      alt={`${currentHour} O'Clock`}
      width={64}
      height={64}
      loading="lazy"
      decoding="async"
      class="absolute inset-0 size-full"
    />
  {/key}
</div>
