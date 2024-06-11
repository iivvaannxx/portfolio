<script
  lang="ts"
  context="module"
>
  import { cn } from "@app/utils";
  import { DEFAULT_LOCALE } from "../lib/constants";

  import RealTime from "./real-time.svelte";
  import TimeDiff from "./time-diff.svelte";
</script>

<script lang="ts">
  export let locale = DEFAULT_LOCALE;
  const { class: clazz, ...rest } = $$restProps;
</script>

<RealTime
  {locale}
  let:parts
>
  {@const date = parts
    .slice(0, 5)
    .map(({ value }) => value)
    .join("")}

  {@const time = parts.slice(6).map(({ value }) => value)}
  {@const timezone = time.pop()}

  <div
    class={cn("flex flex-col items-center justify-around", clazz)}
    {...rest}
  >
    <span class="block w-full text-center tabular-nums text-foreground/90">
      <span class="text-2xl font-bold capitalize">{time.join("")}</span>
      <span class="text-lg font-semibold uppercase">{timezone}</span>
      <span class="mt-2 block text-base font-semibold text-foreground/60"
        >{date}</span
      >
    </span>

    <TimeDiff
      timezoneA="Europe/Madrid"
      timezoneB="user"
      let:formattedTimeDiff
    >
      <p class="mt-4 text-center font-semibold leading-6">
        <span class="block text-lg text-foreground/90">
          Based in <span class="text-primary">Barcelona</span>
        </span>
        <span class="block text-base text-foreground/60">
          {formattedTimeDiff}
        </span>
      </p>
    </TimeDiff>
  </div>
</RealTime>
