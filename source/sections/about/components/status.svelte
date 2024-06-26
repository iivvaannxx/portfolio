<script
  lang="ts"
  context="module"
>
  import { cn } from "@app/utils";
  import { RealTime, TimeDiff, DEFAULT_LOCALE } from "@app/modules/i18n";

  import DynamicClock from "./dynamic-clock.svelte";
</script>

<script lang="ts">
  import MyWeather from "./my-weather.svelte";

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
    class={cn("flex h-full flex-col items-start justify-around", clazz)}
    {...rest}
  >
    <div
      class="flex items-center gap-6 text-2xl font-bold tabular-nums text-foreground/80"
    >
      <DynamicClock class="size-[1.3em]" />
      <p>
        <span class="capitalize">{time.join("")}</span>
        <span class="text-lg font-semibold uppercase">{timezone}</span>
      </p>
    </div>

    <div
      class="flex items-center gap-6 text-xl font-bold tabular-nums text-foreground/80"
    >
      <img
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Calendar.png"
        alt="Calendar"
        width="64"
        height="64"
        class="size-[1.3em]"
      />
      <p>
        {date}
      </p>
    </div>

    <!-- <div
      class="flex items-center gap-6 text-xl font-bold tabular-nums text-foreground/80"
    >
      <MyWeather class="size-[1.8em]" />
      <p>Sunny</p>
    </div>

    <div
      class="flex items-center gap-6 text-xl font-bold tabular-nums text-foreground/80"
    >
      <img
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Sleeping%20Face.png"
        alt="Sleeping Face"
        width="64"
        height="64"
        class="size-[1.3em]"
      />
      <p>Probably sleeping</p>
    </div> -->

    <!-- <span class="block w-full text-center tabular-nums text-foreground/90">
      <span class="text-2xl font-bold capitalize">{time.join("")}</span>
      <span class="text-lg font-semibold uppercase">{timezone}</span>
      <span class="mt-2 block text-base font-semibold text-foreground/60"
        >{date}</span
      >
    </span>
 -->
    <!-- <TimeDiff
      timezoneA="Europe/Madrid"
      timezoneB="user"
      let:formattedTimeDiff
    >
      <p class="mt-4 text-center font-semibold leading-6">
       
        <span class="block text-base text-primary">
          {formattedTimeDiff}
        </span>
      </p>
    </TimeDiff> -->
  </div>
</RealTime>
