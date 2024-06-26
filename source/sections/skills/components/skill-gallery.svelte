<script
  lang="ts"
  context="module"
>
  import MediaQuery from "svelte-media-queries";
  import * as Tabs from "@components/ui/tabs";

  import { categories, skills } from "../lib/data";
  import { currentFilter, currentSkill } from "../lib/store";
  import type { SkillCategory, SkillName } from "../lib/types";

  import SkillCarousel from "./skill-carousel.svelte";

  function onTabChange(current?: string) {
    currentFilter.set(current as SkillCategory);
  }

  function filterSkills(category: SkillCategory) {
    // To filter the correct skills based on the current tab.
    return skills.filter((skill) => skill.categories.includes(category));
  }

  const galleryBreakpoints = [
    { query: "(min-width: 1024px)", rows: 2, cols: 3 },
    { query: "(min-width: 640px)", rows: 2, cols: 3 },
    { query: "(min-width: 360px)", rows: 1, cols: 2 },
  ];
</script>

<script lang="ts">
  let overlayRef: HTMLDivElement;

  function changeSkill(skill?: string) {
    const fadeDuration = 150;

    // Simulate a fade by showing an overlay on skill change.
    overlayRef.classList.replace("animate-fade-out", "animate-fade-in");
    overlayRef.addEventListener(
      "animationend",
      () => {
        currentSkill.set(skill as SkillName);
        setTimeout(() => {
          overlayRef.classList.replace("animate-fade-in", "animate-fade-out");
        }, fadeDuration);
      },
      { once: true },
    );
  }
</script>

<div
  class="mt-24 grid grid-cols-1 grid-rows-2 gap-12 xl:grid-cols-2 xl:grid-rows-1"
>
  <div class="row-start-2 flex w-full flex-col xl:row-start-1">
    <Tabs.Root
      value={categories[0]}
      onValueChange={onTabChange}
    >
      <Tabs.List
        class="flex h-auto w-full flex-wrap items-center justify-start"
      >
        {#each categories as category (category)}
          <Tabs.Trigger
            value={category}
            class="w-1/3 flex-grow whitespace-nowrap font-medium capitalize text-2xs xs:text-xs sm:w-1/5 sm:text-sm"
            >{category}</Tabs.Trigger
          >
        {/each}
      </Tabs.List>

      {#each categories as category (category)}
        {@const showSkills = filterSkills(category)}

        <Tabs.Content
          value={category}
          class="mt-6"
        >
          <MediaQuery
            query={galleryBreakpoints.map((bp) => bp.query)}
            let:matches
          >
            {@const indexOfFirstMatch = matches.findIndex(Boolean)}
            {@const { rows = 2, cols = 3 } =
              galleryBreakpoints[indexOfFirstMatch] ?? {}}

            <SkillCarousel
              {showSkills}
              {rows}
              {cols}
              onSkillChange={changeSkill}
            />
          </MediaQuery>
        </Tabs.Content>
      {/each}
    </Tabs.Root>
  </div>

  <div class="relative row-start-1">
    <slot name="skill-view" />
    <div
      bind:this={overlayRef}
      class="absolute inset-0 z-20 size-full animate-fade-out bg-background animate-duration-200"
    ></div>
  </div>
</div>
