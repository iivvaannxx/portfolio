<script
  lang="ts"
  context="module"
>
  import { cn } from "@lib/utils/shadcn";
  import {
    type Locale,
    DEFAULT_LOCALE,
    MY_TIMEZONE,
    RealTime,
    TimeDiff,
  } from "@modules/i18n";
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
      class="flex items-center gap-x-3 whitespace-nowrap text-2xl font-semibold tabular-nums"
    >
      <span class="font-black capitalize text-primary">{time.join("")}</span>
      <span class="mt-2 text-base uppercase text-foreground/80">{timezone}</span
      >

      <span class="text-muted">{"|"}</span>
      <span class="mt-1 text-center text-base font-semibold text-foreground/60"
        >{date}</span
      >
    </time>

    <TimeDiff
      timezoneA={MY_TIMEZONE}
      timezoneB="user"
      let:formattedTimeDiff
    >
      <p class="mt-4 whitespace-nowrap text-sm font-medium text-foreground/80">
        {formattedTimeDiff}
      </p>
    </TimeDiff>
  </div>
</RealTime>
