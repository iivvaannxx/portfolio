<script
  lang="ts"
  context="module"
>
  import { Select } from "@components/ui/svelte";
  import { type Locale, DEFAULT_LOCALE } from "@modules/i18n";

  import { toggleScroll } from "@app/lib/scroll";

  // The languages that are available in the app
  const defaultLanguages = {
    en: "ENG",
    es: "ESP",
    ca: "CAT",
  };

  /**
   * Returns the path for the given locale.
   * If the locale is the default locale, returns "/".
   * Otherwise, returns "/{locale}".
   *
   * @param {Locale} locale - The locale to generate the path for.
   * @returns {string} The generated path.
   */
  function makeLocalePath(locale: Locale): string {
    return locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
  }
</script>

<script lang="ts">
  export let currentLocale: Locale = DEFAULT_LOCALE;
  export let languages: Record<Locale, string> = defaultLanguages;

  $: language = makeLocalePath(currentLocale);
  $: entries = Object.entries(languages) as [Locale, string][];
</script>

<Select.Root
  selected={{ value: language, label: languages[currentLocale] }}
  preventScroll={false}
  onOpenChange={(value) => {
    // toggleScroll(!value);
  }}
  onSelectedChange={(value) => {
    if (!value) {
      return;
    }

    window.location.href = value.value;
  }}
>
  <Select.Trigger class="w-[96px]">
    <Select.Value placeholder="Language" />
  </Select.Trigger>
  <Select.Content>
    {#each entries as entry (entry[0])}
      {@const [locale, language] = entry}
      <Select.Item value={makeLocalePath(locale)}>{language}</Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
