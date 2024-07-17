<script
  lang="ts"
  context="module"
>
  import capitalize from "just-capitalize";

  import { cn } from "@lib/utils/shadcn";
  import { type Locale, DEFAULT_LOCALE, RealTime } from "@modules/i18n";
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
      class="whitespace-nowrap text-2xl font-semibold tabular-nums"
    >
      <span class="font-black capitalize text-primary">{time.join("")}</span>
      <span class="mt-2 text-base uppercase text-foreground/80">{timezone}</span
      >
      <span
        class="mt-1 block text-base font-semibold text-foreground/60"
        class:capitalize={locale === "en"}>{capitalize(date)}</span
      >
    </time>
  </div>
</RealTime>
