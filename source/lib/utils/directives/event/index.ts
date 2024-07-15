import type { ClientDirective } from "astro";

export default (function (load, opts, element) {
  document.addEventListener(
    opts.value,
    async () => {
      const hydrate = await load();
      await hydrate();
    },
    { once: true },
  );
} satisfies ClientDirective);
