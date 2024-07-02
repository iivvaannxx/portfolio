<script
  lang="ts"
  context="module"
>
  import { Languages } from "lucide-svelte";

  import { Select } from "@components/ui/svelte";
  import { type Locale, DEFAULT_LOCALE } from "@modules/i18n";

  import { toggleScroll } from "@lib/client/scroll";
  import type { Selected } from "bits-ui";

  // The languages that are available in the app
  const languages = {
    en: { label: "ENG", name: "English" },
    es: { label: "ESP", name: "Español" },
    ca: { label: "CAT", name: "Català" },
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

    window.location.href = makeLocalePath(value.value as Locale);
  }
</script>

<script lang="ts">
  export let currentLocale: Locale = DEFAULT_LOCALE;
  $: currentLanguage = makeLocalePath(currentLocale);

  const entries = Object.entries(languages) as [
    Locale,
    { label: string; name: string },
  ][];
</script>

<Select.Root
  selected={{ value: currentLocale, label: languages[currentLocale].label }}
  preventScroll={false}
  onOpenChange={(value) => {
    // toggleScroll(!value);
  }}
  {onSelectedChange}
>
  <Select.Trigger class="w-fit text-foreground/80">
    <Languages class="mb-1 mr-0.5 size-[1.2em]" />
    <Select.Value
      placeholder="Language"
      class="font-medium tracking-wide"
    />
  </Select.Trigger>
  <Select.Content>
    {#each entries as entry (entry[0])}
      {@const [locale, language] = entry}
      <Select.Item
        value={locale}
        label={language.label}>{language.name}</Select.Item
      >
    {/each}
  </Select.Content>
</Select.Root>
