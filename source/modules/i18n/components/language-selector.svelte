<script
  lang="ts"
  context="module"
>
  import { navigate } from "astro:transitions/client";

  import { Languages } from "lucide-svelte";
  import type { Selected } from "bits-ui";

  import { cn } from "@lib/utils/shadcn";
  import { Select } from "@components/ui/svelte";
  import { toggleScroll } from "@lib/client/scroll";
  import { type Locale, DEFAULT_LOCALE } from "@modules/i18n";

  // The languages that are available in the app
  const languages = {
    en: { label: "ENG", name: "English", buttonName: "Language" },
    es: { label: "ESP", name: "Español", buttonName: "Idioma" },
    ca: { label: "CAT", name: "Català", buttonName: "Llengua" },
  };

  /**
   * Returns the path for the given locale.
   * If the locale is the default locale, returns "/".
   * Otherwise, returns "/{locale}".
   *
   * @param locale The locale to generate the path for.
   * @returns The generated path.
   */
  function makeLocalePath(locale: Locale): string {
    return locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
  }

  /**
   * Handles the change event of the language selector.
   * @param value - The selected value.
   */
  function onSelectedChange(value?: Selected<string>) {
    if (!value) {
      return;
    }

    navigate(makeLocalePath(value.value as Locale));
  }
</script>

<script lang="ts">
  export let currentLocale: Locale = DEFAULT_LOCALE;
  export let open = false;
  export let portal = "body";

  const entries = Object.entries(languages) as [
    Locale,
    { label: string; name: string },
  ][];
</script>

<Select.Root
  {open}
  {portal}
  selected={{ value: currentLocale, label: languages[currentLocale].label }}
  preventScroll={false}
  {onSelectedChange}
  onOpenChange={(value) => {
    open = value;
    toggleScroll(!value);
  }}
>
  <Select.Trigger
    name={languages[currentLocale].buttonName}
    aria-label={languages[currentLocale].buttonName}
    class={cn("w-fit text-foreground/80", $$props.class)}
  >
    <Languages class="mr-0.5 size-[1.2em] md:mb-1" />
    <Select.Value
      placeholder="Language"
      class="font-semibold tracking-wide"
    />
  </Select.Trigger>
  <Select.Content>
    {#each entries as entry (entry[0])}
      {@const [locale, language] = entry}
      <Select.Item
        value={locale}
        label={language.label}
        class="font-medium">{language.name}</Select.Item
      >
    {/each}
  </Select.Content>
</Select.Root>
