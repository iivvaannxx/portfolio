<script
  lang="ts"
  context="module"
>
  import * as Carousel from "@components/ui/carousel";
  import * as ToggleGroup from "@components/ui/toggle-group";

  import type { CarouselAPI } from "@components/ui/carousel/context";
  import Button from "@components/ui/button/button.svelte";

  import { splitArrayIntoChunks } from "@app/utils";
  import type { SkillData, SkillName } from "../lib/types";

  import { currentSkill } from "../lib/store";
  import SkillIcon from "./skill-icon.svelte";

  function getSlideKey(skill: SkillData[]) {
    // Generate a unique key for the visible skills in a single slide.
    return skill.map((s) => s.name).join("-");
  }
</script>

<script lang="ts">
  export let showSkills: SkillData[] = [];
  export let rows: number = 2;
  export let cols: number = 3;

  export let onSkillChange: (skill: SkillName) => void;

  let api: CarouselAPI;
  let snaps: number[] = [];
  let selectedIndex = 0;

  function changeSkill(skill?: string) {
    onSkillChange(skill as SkillName);
  }

  function onInit() {
    snaps = api.scrollSnapList();
  }

  function onSelect() {
    selectedIndex = api.selectedScrollSnap();
  }

  function onDotClick(index: number) {
    api.scrollTo(index);
  }

  $: if (api) {
    onInit();
    onSelect();

    api.on("reInit", onInit);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
  }
</script>

<Carousel.Root bind:api>
  {@const skillSlides = splitArrayIntoChunks(showSkills, rows * cols)}
  <ToggleGroup.Root
    type="single"
    onValueChange={changeSkill}
    class="block w-full items-start justify-normal"
    value={$currentSkill}
  >
    <Carousel.Content>
      {#each skillSlides as skillPage (getSlideKey(skillPage))}
        <Carousel.Item
          style={`--cols: ${cols}; --rows: ${rows};`}
          class="grid grid-cols-[repeat(var(--cols),1fr)] grid-rows-[repeat(var(--rows),1fr)] gap-4"
        >
          {#each skillPage as skill}
            <ToggleGroup.Item
              value={skill.name}
              class="flex h-auto select-none flex-col items-center justify-center border border-border p-4"
            >
              <SkillIcon
                class="mb-4 mt-2 size-[3em]"
                name={skill.icon}
              />
              <p
                class="block truncate text-balance text-center text-sm font-medium"
              >
                {skill.name}
              </p>
            </ToggleGroup.Item>
          {/each}
        </Carousel.Item>
      {/each}
    </Carousel.Content>
  </ToggleGroup.Root>

  <div
    class="absolute inset-x-0 -bottom-24 mx-auto flex h-16 w-[95%] items-center justify-between"
  >
    <Carousel.Previous
      class="static left-0 top-0 translate-x-0 translate-y-0"
    />
    <ul class="static top-0 flex gap-2">
      {#each snaps as _, i (getSlideKey(skillSlides[i]))}
        <li>
          <Button
            class="size-2.5 rounded-full bg-accent-foreground/30 p-0 transition-colors hover:bg-accent-foreground/75 focus:bg-accent-foreground/75 focus:outline-none aria-[pressed=true]:bg-accent-foreground"
            aria-label="Go to slide"
            aria-pressed={i === selectedIndex}
            on:click={() => onDotClick(i)}
          />
        </li>
      {/each}
    </ul>
    <Carousel.Next class="static left-0 top-0 translate-x-0 translate-y-0" />
  </div>
</Carousel.Root>
