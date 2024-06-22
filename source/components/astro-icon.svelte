<!-- 
  This is a replica of the <Icon> component from the `astro-icon` package but with Svelte. 
  It needs the actual `astro-icon` package to work.
-->
<script
  lang="ts"
  context="module"
>
  // @ts-ignore virtual module
  import icons, { type Icon, config } from "virtual:astro-icon";
  import { getIconData, iconToSVG } from "@iconify/utils";
  import type { IconifyJSON } from "@iconify/types";

  // To work without type errors.
  const typedIcons = icons as Record<string, IconifyJSON>;

  const cache = new Map<string, number>();
  const { include = {} } = config;
  const sets = Object.keys(include);
</script>

<script lang="ts">
  export let name: Icon;

  export let inline = false;
  export let title: string | null = null;
  export let size: number | null = null;
  export let width: number | null = null;
  export let height: number | null = null;

  let [setName, iconName] = (name as string).split(":");

  if (setName && iconName) {
    throw new Error(`
      Invalid "name" provided! Did you forget the icon set name? Received: "${name}".
      If you were attemping to reference a local icon, use the icon's name directly. (ie. "${iconName}")"
    `);
  }

  // Assume it's a local icon.
  if (!iconName) {
    iconName = setName;
    setName = "local";

    if (!typedIcons[setName]) {
      throw new Error(`
        Unable to load the "local icon set!". It looks like it was not loaded.
        Did you forget to create the icon directory or update your config?
      `);
    }

    if (!(iconName in typedIcons[setName].icons)) {
      throw new Error(`
        Unable to locate the "${name}" icon! It was not found in your local icon directory.
        Did you foreget to configure your icon directory or made a typo?
      `);
    }
  }

  const collection = typedIcons[setName];

  if (!collection) {
    const reason = sets.includes(setName)
      ? `It looks like it was not loaded. Did you install the "@iconify-json/${setName}" dependency?`
      : `It looks like it was not included in your configuration. Did you forget to add it to the "include" object?`;

    throw new Error(`Unable to locate the "${setName}" icon set! ${reason}`);
  }

  const iconData = getIconData(collection, iconName ?? setName);

  if (!iconData) {
    const [maybeStar] = include[setName];
    const reason =
      maybeStar === "*" || include[setName].includes(iconName)
        ? `The ${setName} set does not include an icon named "${iconName}". Is this a typo?`
        : `The ${setName} is not configured to include an icon named "${iconName}". Did you forget to add it to your configuration?`;

    throw new Error(`Unable to locate "${name}" icon! ${reason}`);
  }

  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  const count = cache.get(name) ?? 0;
  cache.set(name, count + 1);

  // It's a re-used icon?
  const includeSymbol = !inline && count === 0;

  if (size && size > 0) {
    width = size;
    height = size;
  }

  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes };
  const normalizedBody = renderData.body;

  if (width) {
    normalizedProps.width = `${width}`;
  }

  if (height) {
    normalizedProps.height = `${height}`;
  }
</script>

<svg
  {...normalizedProps}
  {...$$restProps}
  data-icon={name}
>
  {#if title}
    <title>{title}</title>
  {/if}

  {#if inline}
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html normalizedBody}
  {:else}
    {#if includeSymbol}
      <symbol {id}>
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html normalizedBody}
      </symbol>
    {/if}
    <use xlink:href={`#${id}`} />
  {/if}
</svg>
