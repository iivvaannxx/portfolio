<script
  lang="ts"
  context="module"
>
  import * as Carousel from "@app/components/ui/carousel";
</script>

<Carousel.Root>
  <Carousel.Content>
    {#each Array(5) as _, i (i)}
      <Carousel.Item>
        <div class="p-1">
          <span class="text-4xl font-semibold">{i + 1}</span>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root>
