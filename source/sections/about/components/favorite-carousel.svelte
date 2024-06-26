<script
  lang="ts"
  context="module"
>
  import Autoplay from "embla-carousel-autoplay";
  import * as Carousel from "@components/ui/carousel";

  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: true });
</script>

<Carousel.Root
  plugins={[autoplay]}
  on:mouseenter={autoplay.stop}
  on:mouseleave={autoplay.reset}
>
  <Carousel.Content>
    <Carousel.Item
      class="mt-8 grid w-full grow grid-cols-1 grid-rows-[1fr,auto] place-content-center"
    >
      <div
        class="relative m-auto mt-0 aspect-square w-4/5 overflow-clip rounded-lg"
      >
        <img
          src="https://image.api.playstation.com/vulcan/ap/rnd/202010/2915/SqRcyLjZbpK26ej6TnWf43xp.jpg"
          alt="Horizon Forbidden West"
          loading="lazy"
          decoding="async"
          class="size-full object-cover"
        />

        <div class="absolute inset-0 z-20 size-full bg-card opacity-30"></div>
      </div>
      <div>
        <p class="text-center text-lg font-semibold text-foreground/80">
          Horizon Forbidden West
        </p>
      </div>
    </Carousel.Item>
    <Carousel.Item
      class="mt-8 grid w-full grow grid-cols-1 grid-rows-[1fr,auto] place-content-center"
    >
      <div
        class="relative m-auto mt-0 aspect-square w-4/5 overflow-clip rounded-lg"
      >
        <img
          src="https://image.api.playstation.com/vulcan/ap/rnd/202010/2915/SqRcyLjZbpK26ej6TnWf43xp.jpg"
          alt="Horizon Forbidden West"
          loading="lazy"
          decoding="async"
          class="size-full object-cover"
        />

        <div class="absolute inset-0 z-20 size-full bg-card opacity-30"></div>
      </div>
      <div>
        <p class="mt-6 text-center text-lg font-semibold text-foreground/80">
          Horizon Forbidden West
        </p>
      </div>
    </Carousel.Item>
    <Carousel.Item
      class="mt-8 grid w-full grow grid-cols-1 grid-rows-[1fr,auto] place-content-center"
    >
      <div
        class="relative m-auto mt-0 aspect-square w-4/5 overflow-clip rounded-lg"
      >
        <img
          src="https://image.api.playstation.com/vulcan/ap/rnd/202010/2915/SqRcyLjZbpK26ej6TnWf43xp.jpg"
          alt="Horizon Forbidden West"
          loading="lazy"
          decoding="async"
          class="size-full object-cover"
        />

        <div class="absolute inset-0 z-20 size-full bg-card opacity-30"></div>
      </div>
      <div>
        <p class="text-center text-lg font-semibold text-foreground/80">
          Horizon Forbidden West
        </p>
      </div>
    </Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
