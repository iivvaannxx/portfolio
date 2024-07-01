<script
  lang="ts"
  context="module"
>
  import * as Carousel from "@app/components/ui/svelte/carousel";
  import kh from "../assets/games/kingdom-hearts.png";
</script>

<Carousel.Root>
  <Carousel.Content>
    <Carousel.Item
      class="mt-8 grid w-full grow grid-cols-1 grid-rows-[1fr,auto] place-content-center"
    >
      <div
        class="relative m-auto mt-0 aspect-square w-4/5 overflow-clip rounded-lg"
      >
        <img
          src={kh.src}
          width={kh.width}
          height={kh.height}
          alt="Kingdom Hearts"
          loading="lazy"
          decoding="async"
          class="size-full object-cover"
        />

        <div class="absolute inset-0 z-20 size-full bg-card opacity-30"></div>
      </div>
      <div>
        <p class="text-center text-lg font-semibold text-foreground/80">
          Kingdom Hearts
        </p>
      </div>
    </Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
