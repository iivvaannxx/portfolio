<script
  lang="ts"
  context="module"
>
  import { cn } from "@app/utils";
  import {
    RealTime,
    TimeDiff,
    DEFAULT_LOCALE,
    type Locale,
  } from "@app/modules/i18n";
</script>

<script lang="ts">
  export let locale: Locale = DEFAULT_LOCALE;
  const { class: clazz, ...rest } = $$restProps;
</script>

<RealTime
  {locale}
  let:parts
  let:currentTime
>
  {@const datetime = new Date(currentTime).toISOString()}
  {@const date = parts
    .slice(0, 5)
    .map(({ value }) => value)
    .join("")}

  {@const time = parts.slice(6).map(({ value }) => value)}
  {@const timezone = time.pop()}

  <div
    class={cn("flex flex-col items-center justify-center", clazz)}
    {...rest}
  >
    <time
      datetime={`${datetime.slice(0, 16)}Z`}
      class="whitespace-nowrap text-3xl font-semibold tabular-nums"
    >
      <span class="font-black capitalize text-primary">{time.join("")}</span>
      <span class="text-lg uppercase text-foreground/80">{timezone}</span>
      <span
        class="mt-1 block text-center text-base font-semibold text-foreground/60"
        >{date}</span
      >
    </time>

    <TimeDiff
      timezoneA="Europe/Madrid"
      timezoneB="user"
      let:formattedTimeDiff
    >
      <p
        class="my-3 whitespace-nowrap text-sm font-semibold leading-6 text-foreground/80"
      >
        {formattedTimeDiff}
      </p>
    </TimeDiff>
  </div>
</RealTime>
