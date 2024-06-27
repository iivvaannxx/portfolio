<script
  lang="ts"
  context="module"
>
  import { afterUpdate, onMount, tick } from "svelte";
  import { fade } from "svelte/transition";
  import tippy from "tippy.js";

  import { Button } from "@app/components/ui/svelte/button";
  import { DEFAULT_LOCALE, type Locale } from "@app/modules/i18n";

  type TempUnit = "celsius" | "fahrenheit";

  // Courtesy of ChatGPT.
  // See: https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM
  const wmoCodeMap = {
    "sun": [0],
    "sun-small-clouds": [1, 2, 32, 33, 34],
    "sun-large-clouds": [3, 4, 30, 31, 35, 36, 37, 38, 39],
    "cloud": [5, 6, 7, 8, 9, 10, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    "cloud-with-rain": [
      50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 66, 67, 68,
      80, 81, 82, 83, 85,
    ],

    "cloud-with-snow": [70, 71, 72, 73, 74, 75, 76, 77, 78, 84, 86],
    "thunderstorm-with-rain": [90, 91, 92, 93, 94],
    "thunderstorm": [95, 96, 97, 98, 99],
    "sun-with-clouds": [20, 21, 22, 23, 24, 25, 26, 27, 28],
    "sun-and-rain": [17, 29, 59, 69, 79],
  };

  /**
   * Retrieves the weather icon based on the given WMO code.
   *
   * @param wmoCode The WMO code representing the weather condition.
   * @returns The corresponding weather icon.
   */
  function getWeatherIcon(wmoCode: number) {
    for (const [icon, codes] of Object.entries(wmoCodeMap)) {
      if (codes.includes(wmoCode)) {
        return icon;
      }
    }
    return "Unknown";
  }

  /**
   * Formats the temperature based on the specified unit and locale.
   *
   * @param tempInCelsius - The temperature in Celsius.
   * @param unit - The unit of temperature ('celsius' or 'fahrenheit').
   * @param locale - The locale to use for formatting.
   * @returns The formatted temperature.
   */
  function formatTemperature(
    tempInCelsius: number,
    unit: TempUnit,
    locale: Locale,
  ) {
    const formatter = new Intl.NumberFormat(locale, {
      style: "unit",
      unit: unit, // 'celsius' or 'fahrenheit'
      maximumFractionDigits: 1,
    });

    return formatter.formatToParts(
      unit === "fahrenheit" ? tempInCelsius * 1.8 + 32 : tempInCelsius,
    );
  }

  const params = {
    latitude: "41.9301",
    longitude: "2.2549",
    current: ["apparent_temperature", "is_day", "weather_code"].join(","),
    timezone: "Europe/Berlin",
    forecast_days: "1",
  };

  const fetchURL = new URL("https://api.open-meteo.com/v1/forecast");
  fetchURL.search = new URLSearchParams(Object.entries(params)).toString();
</script>

<script lang="ts">
  export let locale: Locale = DEFAULT_LOCALE;
  export let unit: TempUnit = "celsius";

  let status: string;
  let tempInfo: HTMLDivElement;
  let weatherPromise = getWeather();

  /**
   * Fetches weather data from the Open-Meteo API.
   *
   * @returns A promise that resolves to the weather data.
   * @throws If the weather data cannot be fetched.
   */
  async function getWeather() {
    const error = new Error("Failed to fetch weather data");
    status = "loading";

    return fetch(fetchURL.toString())
      .then((response) => {
        if (!response.ok) {
          throw error;
        }

        return response.json();
      })
      .then((data) => {
        status = "success";
        return data;
      })
      .catch((error) => {
        status = "error";
        throw error;
      });
  }

  /** Toggles the current unit between Celsius and Fahrenheit. */
  function toggleUnit() {
    unit = unit === "celsius" ? "fahrenheit" : "celsius";
  }

  function hydrateTippy() {
    // Hydrate the tooltips after the content is loaded.
    tippy("button[data-tippy-content]", {
      placement: "right",
      offset: [0, 16],

      animation: "scale",
      inertia: true,
    });
  }

  onMount(() => {
    // Refresh every 15 minutes.
    const time = 15 * 60 * 1000;
    const interval = window.setInterval(() => {
      weatherPromise = getWeather();
    }, time);

    hydrateTippy();

    return () => {
      clearInterval(interval);
    };
  });

  $: if (tempInfo) {
    // Everytime we re-render, we need to rehydrate the tooltips.
    hydrateTippy();
  }
</script>

<div class="flex size-full">
  <div class="relative grow">
    {#key status}
      <div
        class="absolute inset-0 ml-4 flex w-full items-center gap-4"
        in:fade={{ duration: 200, delay: 250 }}
        out:fade={{ duration: 200 }}
      >
        {#await weatherPromise then data}
          {@const code = data.current.weather_code}
          {@const icon = getWeatherIcon(code)}

          {@const temp = data.current.apparent_temperature}
          {@const parts = formatTemperature(temp, unit, locale)}

          {@const unitText = parts.pop()?.value}
          {@const tempText = parts.map((part) => part.value).join("")}
          {@const temperature = /\d+\.\d+/g.test(tempText)
            ? tempText
            : tempText + ".0"}

          <img
            src={`/images/weather/${icon}.png`}
            alt="Weather Icon"
            width="64"
            height="64"
            loading="lazy"
            decoding="async"
            class="mr-4 aspect-square h-full max-h-[64px] max-w-[64px]"
          />

          <div class="flex grow flex-col whitespace-nowrap">
            {#key unit}
              <div
                class="flex items-center tabular-nums"
                bind:this={tempInfo}
              >
                <p class="text-xl font-medium">
                  {temperature}
                </p>

                <Button
                  variant="ghost"
                  class="ml-2 aspect-square animate-wiggle p-0 text-lg will-change-transform animate-infinite"
                  data-tippy-content={`Toggle to ${unit === "celsius" ? "Fahrenheit" : "Celsius"}`}
                  on:click={toggleUnit}
                >
                  {unitText}
                </Button>
              </div>
            {/key}

            <p class="text-sm text-foreground/90">Slightly cloudy</p>
          </div>
        {:catch error}
          <p class="text-base text-destructive-foreground">
            {error.message}
          </p>
        {/await}
      </div>
    {/key}
  </div>

  <Button
    variant="ghost"
    data-tippy-content="Refresh"
    class="group aspect-square size-16 self-center p-3"
    on:click={() => {
      weatherPromise = getWeather();
    }}
  >
    <span class="sr-only">Refresh</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      class="text-accent-foreground/80 transition-transform duration-0 ease-in-out group-hover:rotate-180 group-hover:duration-500"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  </Button>
</div>
